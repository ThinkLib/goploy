package core

import (
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"regexp"

	jwt "github.com/dgrijalva/jwt-go"
)

// TokenInfo pasre the jwt
type TokenInfo struct {
	ID   uint32
	Name string
}

// Goploy callback param
type Goploy struct {
	TokenInfo TokenInfo
	Request   *http.Request
	URLQuery  url.Values
}

// 路由定义
type route struct {
	pattern     string                                         // 正则表达式
	callback    func(w http.ResponseWriter, gp *Goploy)        //Controller函数
	middlewares []func(w http.ResponseWriter, r *http.Request) //中间件
}

// Router is route slice and golbal middlewares
type Router struct {
	Routes      []route
	middlewares []func(w http.ResponseWriter, r *http.Request) error //中间件
}

// Start a router
func (rt *Router) Start() {
	http.HandleFunc("/", rt.router)
}

// Add router
// pattern path
// callback  where path should be handle
func (rt *Router) Add(pattern string, callback func(w http.ResponseWriter, gp *Goploy), middleware ...func(w http.ResponseWriter, r *http.Request)) {
	r := route{pattern: pattern, callback: callback}
	for _, m := range middleware {
		r.middlewares = append(r.middlewares, m)
	}
	rt.Routes = append(rt.Routes, r)
}

// Middleware golbal Middleware handle function
// Example handle praseToken
func (rt *Router) Middleware(middleware func(w http.ResponseWriter, r *http.Request) error) {
	rt.middlewares = append(rt.middlewares, middleware)
}

func (rt *Router) router(w http.ResponseWriter, r *http.Request) {
	// If in production env, serve file in go server,
	// else serve file in npm
	if os.Getenv("ENV") == "production" {
		if "/" == r.URL.Path {
			http.ServeFile(w, r, GolbalPath+"web/dist/index.html")
			return
		}
		files, _ := ioutil.ReadDir(GolbalPath + "web/dist")
		for _, file := range files {
			pattern := "^" + file.Name()
			if match, _ := regexp.MatchString(pattern, r.URL.Path[1:]); match {
				http.ServeFile(w, r, GolbalPath+"web/dist"+r.URL.Path)
				return
			}
		}
	}
	whiteList := map[string]struct{}{
		"/user/login":        {},
		"/user/isShowPhrase": {},
	}
	var tokenInfo TokenInfo
	if _, ok := whiteList[r.URL.Path]; !ok {
		// check token
		goployTokenCookie, err := r.Cookie("goploy_token")
		if err != nil {
			response := Response{Code: 10001, Message: "非法请求"}
			response.JSON(w)
			return
		}
		unPraseToken := goployTokenCookie.Value
		claims := jwt.MapClaims{}
		token, err := jwt.ParseWithClaims(unPraseToken, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SIGN_KEY")), nil
		})

		if err != nil || !token.Valid {
			response := Response{Code: 10086, Message: "登录已过期"}
			response.JSON(w)
			return
		}
		tokenInfo = TokenInfo{
			ID:   uint32(claims["id"].(float64)),
			Name: claims["name"].(string),
		}
	}

	for _, middleware := range rt.middlewares {
		err := middleware(w, r)
		if err != nil {
			return
		}
	}
	for _, route := range rt.Routes {
		if route.pattern == r.URL.Path {
			for _, middleware := range route.middlewares {
				middleware(w, r)
			}
			gp := &Goploy{
				TokenInfo: tokenInfo,
				Request:   r,
				URLQuery:  r.URL.Query(),
			}
			route.callback(w, gp)
		}
	}
}
