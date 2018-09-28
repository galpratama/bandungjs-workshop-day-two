importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.6155aa399c424aa8ee84.js",
    "revision": "50ed32809d8ee1df8e68f993c0c0e348"
  },
  {
    "url": "/_nuxt/layouts/default.199d1570fb06cef94e84.js",
    "revision": "056b0bf3d2637755d8493db5d01080cf"
  },
  {
    "url": "/_nuxt/manifest.f7528898633f43ad4042.js",
    "revision": "79bef9431d7edd9bc3214c40b586bcf7"
  },
  {
    "url": "/_nuxt/pages/about.da89ab5061a1193143d7.js",
    "revision": "b3d04b9fa00785b2af33d7c45bd2946b"
  },
  {
    "url": "/_nuxt/pages/blog/_id.244248aaa4d221d9f517.js",
    "revision": "fccd8a5395be89d7c270be7b05013ab4"
  },
  {
    "url": "/_nuxt/pages/index.829f469831b1a3c80cd6.js",
    "revision": "32be821524cb676c7bbbafd9ca124922"
  },
  {
    "url": "/_nuxt/vendor.80b98b5b2ee389381759.js",
    "revision": "5b4a44ae56a33338402033c3de8f9f54"
  }
], {
  "cacheId": "bandungjs-day-two",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





