/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8397375dfcf1cbc947f49f2b3a03953d"
  },
  {
    "url": "assets/css/0.styles.e8785ab7.css",
    "revision": "fe17477b071030a6792075360b694b3a"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/404.ec305c62.png",
    "revision": "ec305c627e94c9ec02eaae3ef7ff8c66"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/web404.f84b222b.png",
    "revision": "f84b222bd53bbc0b9b63b6812886979a"
  },
  {
    "url": "assets/js/1.46e497a6.js",
    "revision": "3488d4dd925409baadd0a7ba282b695c"
  },
  {
    "url": "assets/js/10.f9cdd85f.js",
    "revision": "a9ef75718b25b27d6da3c82e0759e437"
  },
  {
    "url": "assets/js/11.9bdbbfb2.js",
    "revision": "9f74baf0b15059d779dc9473626dbeaa"
  },
  {
    "url": "assets/js/12.88dc83f0.js",
    "revision": "049da3887db37143ae715f9cc5ead2db"
  },
  {
    "url": "assets/js/13.eea16f21.js",
    "revision": "24b6c47c76e0737375b1ed76d004878c"
  },
  {
    "url": "assets/js/14.3e6f8721.js",
    "revision": "3adf9cef75d2f9ec7afd08a75edfc849"
  },
  {
    "url": "assets/js/15.ad190e61.js",
    "revision": "e947fe3fb7d062d16cfc4b72f515aa91"
  },
  {
    "url": "assets/js/16.f175a0eb.js",
    "revision": "5c727b24bb2d345b769caec562d8f88d"
  },
  {
    "url": "assets/js/17.c3b1fc4c.js",
    "revision": "607a0ab864fe6d33155042b5a05a0dfc"
  },
  {
    "url": "assets/js/18.c2646607.js",
    "revision": "63932c6c8d3fe85185159a56eceabd5d"
  },
  {
    "url": "assets/js/19.dbe5e5b6.js",
    "revision": "c9c19d59658b79f3e7ee13a02c4b2aa8"
  },
  {
    "url": "assets/js/2.e1342f10.js",
    "revision": "bb4e11017ae35de6449855f7387db3a8"
  },
  {
    "url": "assets/js/20.81c8c617.js",
    "revision": "30107cd716a9c101be29d38a4a912393"
  },
  {
    "url": "assets/js/4.487d25ac.js",
    "revision": "5cb4d86157c6003abbac1462b125c3b4"
  },
  {
    "url": "assets/js/5.63e4a445.js",
    "revision": "01d37fd68c09f83fd8882d8395713efa"
  },
  {
    "url": "assets/js/6.bbf23257.js",
    "revision": "ff0e47afee12f47bfbc6130148c7fef0"
  },
  {
    "url": "assets/js/7.884d6005.js",
    "revision": "5fd8245e604b3f84f6810711de1ae227"
  },
  {
    "url": "assets/js/8.fcfd1acc.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.a22d933a.js",
    "revision": "663ed3f22e8e77abcd7e784c067d327d"
  },
  {
    "url": "assets/js/app.fb51efb8.js",
    "revision": "3c4dd2537e121b9b1b52dfb7c79ff467"
  },
  {
    "url": "categories/index.html",
    "revision": "e040450d863a4fe8fe25bae355868a8a"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "c15cff2b26f1caba8edf48c450792300"
  },
  {
    "url": "docs/index.html",
    "revision": "ad3e012076a6ca11c8c847c6f666df76"
  },
  {
    "url": "images/header-tou.jpg",
    "revision": "c8729cf219f10862eb948b2c82896110"
  },
  {
    "url": "images/love69renpyremasterproject.png",
    "revision": "7b83f1d87ade777e1ce57839284259b7"
  },
  {
    "url": "images/项目组logo_smallsize.png",
    "revision": "3c16e29ba08043aac27a5f3cf0cd75af"
  },
  {
    "url": "index.html",
    "revision": "a4d0e4ebe5267b348a78667c3008d739"
  },
  {
    "url": "intro/index.html",
    "revision": "9182a898ca623df49384e74b7f540155"
  },
  {
    "url": "intro/关于本站.html",
    "revision": "8e499a4747450ee1091490d725aee636"
  },
  {
    "url": "intro/各文档介绍.html",
    "revision": "67c154cdadfe68101932ccb5a5fd7730"
  },
  {
    "url": "standard/index.html",
    "revision": "e26b3e9243eae6352489539958d4ff4d"
  },
  {
    "url": "standard/目录组织.html",
    "revision": "8cd04ecfa42f38ab94bb65c03e3fa266"
  },
  {
    "url": "static/android-chrome-192x192.png",
    "revision": "e8399e7b8286e9eafffd01f265fdda6b"
  },
  {
    "url": "static/android-chrome-512x512.png",
    "revision": "a37c789d8cffa2bc88bfc53afef4329a"
  },
  {
    "url": "static/apple-touch-icon.png",
    "revision": "6ffa49ad5733d3af0292c01337f63271"
  },
  {
    "url": "tag/index.html",
    "revision": "f7d3882a4c54d9fe4d572456dffa418e"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a54b720c07d9c83d193cf8508aaf05d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
