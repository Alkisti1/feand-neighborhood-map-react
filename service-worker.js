"use strict";var precacheConfig=[["/feand-neighborhood-map-react/index.html","7f45092324842c17861030e81ff67039"],["/feand-neighborhood-map-react/static/css/main.8fb23a40.css","b5c3089d33afd06e772d1069d40d15fc"],["/feand-neighborhood-map-react/static/js/main.c613655d.js","1896160aad65ba20930b35b464de894d"],["/feand-neighborhood-map-react/static/media/Roboto-Light.10ad0f86.woff","10ad0f861c0c5807734017c341940649"],["/feand-neighborhood-map-react/static/media/Roboto-Light.2382fa8a.ttf","2382fa8a8afcdbe3124c840bd6ef7024"],["/feand-neighborhood-map-react/static/media/Roboto-Light.35d85034.eot","35d85034cc6efe254752721f40dae9f4"],["/feand-neighborhood-map-react/static/media/Roboto-Light.c7c92899.svg","c7c928994543bbad3d8907cd9ae9bf77"],["/feand-neighborhood-map-react/static/media/Roboto-Light.ed4b08d2.woff2","ed4b08d2702fa26acc324ef1e89ae837"],["/feand-neighborhood-map-react/static/media/Roboto-Medium.02aa6e7b.eot","02aa6e7b39da1ff77803f67452addc43"],["/feand-neighborhood-map-react/static/media/Roboto-Medium.50d01d3e.woff2","50d01d3e6c994995bcaf829e63d53d1a"],["/feand-neighborhood-map-react/static/media/Roboto-Medium.9a3bf7ac.woff","9a3bf7acae14d9b5ed5a88458106b58b"],["/feand-neighborhood-map-react/static/media/Roboto-Medium.b2bcaa52.ttf","b2bcaa52d04bde9a494fd954ef7e7e7b"],["/feand-neighborhood-map-react/static/media/Roboto-Medium.caaae1ef.svg","caaae1eff6b52934e2c0453b54724949"],["/feand-neighborhood-map-react/static/media/Roboto-Regular.4312f1fb.ttf","4312f1fbdcf4d54af4506dabdce08010"],["/feand-neighborhood-map-react/static/media/Roboto-Regular.8528a548.svg","8528a5484326b3eef06b6dfcc6ce25bd"],["/feand-neighborhood-map-react/static/media/Roboto-Regular.94dac78e.woff","94dac78eee406a8c8f0406b69b85ac2b"],["/feand-neighborhood-map-react/static/media/Roboto-Regular.9feb0110.woff2","9feb0110b6dff9ee2b9ebd17f7a1aee6"],["/feand-neighborhood-map-react/static/media/Roboto-Regular.b9077621.eot","b9077621ce786b55c176a61456bfc077"],["/feand-neighborhood-map-react/static/media/foursquare.dcea39ad.svg","dcea39ad03938a4bf1f804706b4280df"],["/feand-neighborhood-map-react/static/media/funnel.6704a582.svg","6704a582740ef2b7cb38b3eed18e435f"],["/feand-neighborhood-map-react/static/media/logo-world.9ca0c7d3.svg","9ca0c7d3412d8c39864fc3e1818dbf04"],["/feand-neighborhood-map-react/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/feand-neighborhood-map-react/static/media/multiply.48f17f85.svg","48f17f85502ec87690b7d220b28925ad"],["/feand-neighborhood-map-react/static/media/pin_def.f2977889.svg","f2977889cf43fc4ad8ca99bcf9dba557"],["/feand-neighborhood-map-react/static/media/pin_sel.8646db7e.svg","8646db7e6d9ecb87b24a2e814f560e06"],["/feand-neighborhood-map-react/static/media/star.c0210b84.svg","c0210b84c1f37cac96edb73e3621355a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var o=new URL(e);return n&&o.pathname.match(n)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),o=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var o="/feand-neighborhood-map-react/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});