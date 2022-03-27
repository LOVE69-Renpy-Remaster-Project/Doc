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
    "revision": "1d4764bab5e8340a2d9bdba99398c24f"
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
    "url": "assets/js/1.3e5c2ecc.js",
    "revision": "f45e8006e17646afdb6229b5e7121a65"
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
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.6f4076f0.js",
    "revision": "2521262c5a651b6790e644ab807e51ec"
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
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/5.9c162e0d.js",
    "revision": "5bce9a0508368fb3d0fc900aef2911de"
  },
  {
    "url": "assets/js/6.4f564e45.js",
    "revision": "2cfd4f5984aaeea22afc10fe56649331"
  },
  {
    "url": "assets/js/7.d1776db1.js",
    "revision": "1f70fbff27714f3ec290775e7a367147"
  },
  {
    "url": "assets/js/8.978d59b1.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.24cc95ab.js",
    "revision": "7ac28b0ea24bbea2473cbfa9dd52fd00"
  },
  {
    "url": "assets/js/app.ae1a3e0f.js",
    "revision": "281b4b4c2c5f37139367ed4c1e8a62aa"
  },
  {
    "url": "categories/index.html",
    "revision": "ba5a07d90c9aa269201d779a3d8be90f"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "dc402772172a09014566576a1401da54"
  },
  {
    "url": "docs/index.html",
    "revision": "4b7039dd26af206d6e87c0e3675a80a2"
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
    "revision": "847fa4abc217e4a992a29d47b2a6a429"
  },
  {
    "url": "intro/index.html",
    "revision": "aa15ad6eba18b9fca86414f61eab346b"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "45cbbf65bb89e5c457b3476b14ba17d0"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "7c09594ea3a3bc11eb080b94349b920e"
  },
  {
    "url": "standard/index.html",
    "revision": "d002ff62ef7e83cd122906ab9fee03da"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "1d916d58393d656d4da891e129b1ebeb"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "2c59ca62cf072cfd644a1174886d9c64"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "6b20b9a51fe4f960c81f623792642dc7"
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
    "revision": "721ca9894e9699d3dc1c65c339817208"
  },
  {
    "url": "timeline/index.html",
    "revision": "6dcf47cd4c4b3c4da49cba198b80d8c7"
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
