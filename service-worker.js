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
    "revision": "111cca18ee16df90dbb71742e3a7d6c2"
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
    "url": "assets/js/app.267e2bf4.js",
    "revision": "82866d6fe599a014cbf6a7712eb8a44c"
  },
  {
    "url": "categories/index.html",
    "revision": "6bcc36155ba66d290c2ecab6290df7b8"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "d4c21b315abd03f8ca27844dee3b5160"
  },
  {
    "url": "docs/index.html",
    "revision": "7ea7cd530445e2ba24b2373a2860b369"
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
    "revision": "a66869215707ede4186ac7fba2b8a2a9"
  },
  {
    "url": "intro/index.html",
    "revision": "9b339e8c683a2cfdd4a3e8eb4cb85d88"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "d1fe50e2a2d204058eacbd6701c31d7a"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "0b1d9de1214c0fb72e529a37f3d11264"
  },
  {
    "url": "standard/index.html",
    "revision": "52965dda3c0bcbc6f5d0de1c57a581c1"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "76a15f3492172feb477d689b5002da5e"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "9b2c53351f13745b18a8a915f82466c3"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "62a3fc899a71e9d9faea7a90dbf69884"
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
    "revision": "8a75660b8a9588bca5619c520b58c8f8"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9678f9baeb64629011ceddb3719acc0"
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
