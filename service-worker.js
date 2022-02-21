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
    "revision": "4898b41c8b0df3a95d4b073789fbd805"
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
    "url": "assets/js/1.cda29c22.js",
    "revision": "023c2c14341e88a39199384adcdcaa93"
  },
  {
    "url": "assets/js/10.49c33e16.js",
    "revision": "77fabd78f1d9523e736115f260c09653"
  },
  {
    "url": "assets/js/11.6462c171.js",
    "revision": "41a6c9b638b006b4ba12c34c885bb293"
  },
  {
    "url": "assets/js/12.91ad641b.js",
    "revision": "049da3887db37143ae715f9cc5ead2db"
  },
  {
    "url": "assets/js/13.ceadafcd.js",
    "revision": "24b6c47c76e0737375b1ed76d004878c"
  },
  {
    "url": "assets/js/14.42f8e7ad.js",
    "revision": "c0fb851391a3e36825d8353a1f17e5e9"
  },
  {
    "url": "assets/js/15.b6b153a9.js",
    "revision": "d2b78af5d13b706e2dc1ab94404318b6"
  },
  {
    "url": "assets/js/16.5d20d555.js",
    "revision": "1c0c7432f41f201216ac3fe1b72d4cd4"
  },
  {
    "url": "assets/js/17.2f988554.js",
    "revision": "cc4c6e3604e68f30ef68490dd60513da"
  },
  {
    "url": "assets/js/18.698d5fb9.js",
    "revision": "f466f965b99463d82181ffff5868a471"
  },
  {
    "url": "assets/js/19.4a930068.js",
    "revision": "6523d355d4c0bebda5d3deb54dabdc60"
  },
  {
    "url": "assets/js/2.4d63b98b.js",
    "revision": "a52293a7c0ef72c80302b2f443c841a5"
  },
  {
    "url": "assets/js/20.cc72ae7f.js",
    "revision": "41dad1c569cfa7bce9588ddf88d147b8"
  },
  {
    "url": "assets/js/21.4eaf1766.js",
    "revision": "5ab10a3d9e34f292397012da7af13663"
  },
  {
    "url": "assets/js/22.2f066dae.js",
    "revision": "c3b46dd54b44e36e8a4062973fa2847c"
  },
  {
    "url": "assets/js/4.652f7055.js",
    "revision": "5cb4d86157c6003abbac1462b125c3b4"
  },
  {
    "url": "assets/js/5.29e3ba54.js",
    "revision": "01d37fd68c09f83fd8882d8395713efa"
  },
  {
    "url": "assets/js/6.d07f2291.js",
    "revision": "ff0e47afee12f47bfbc6130148c7fef0"
  },
  {
    "url": "assets/js/7.1c3794f0.js",
    "revision": "5fd8245e604b3f84f6810711de1ae227"
  },
  {
    "url": "assets/js/8.978d59b1.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.13b5d62a.js",
    "revision": "663ed3f22e8e77abcd7e784c067d327d"
  },
  {
    "url": "assets/js/app.92416c71.js",
    "revision": "2631019334ca645c6aab83bb2a6578c4"
  },
  {
    "url": "categories/index.html",
    "revision": "fd7a112258267387a08790d8d6c3b4aa"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "5c5b1a3b54c5a5aa3311ed1aa7cbc9f3"
  },
  {
    "url": "docs/index.html",
    "revision": "2eadb3ebafe8e5b0e3195ebf15f5137c"
  },
  {
    "url": "images/header-tou.jpg",
    "revision": "c8729cf219f10862eb948b2c82896110"
  },
  {
    "url": "images/intro/README/发现新内容可用.png",
    "revision": "7e55bfbdccd891502dcc82c8cdddda80"
  },
  {
    "url": "images/intro/README/网站源切换.png",
    "revision": "35429f80aba77b9c3fcb6dd879c26d3e"
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
    "revision": "aceb1d0e63fa17fbe87df67121701bd0"
  },
  {
    "url": "intro/index.html",
    "revision": "772b47aa4047a96e839dda1a69290c7c"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "15cfee23be06c913f949db14309aadcd"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "ca65a609bcae3df71115c6eb019f096a"
  },
  {
    "url": "standard/index.html",
    "revision": "b0e9f00609586db831529d07dc60edba"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "22b9883f17edde23bc9bb0a7b5d56f51"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "8ffb2511d253bc0457893e882be767d4"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "e787465cfe196d6f25a4d5369b33410c"
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
    "revision": "35d58d18cd83089af28b0629c21b95cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "548b336a54916eb0faf044bc580dad9f"
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
