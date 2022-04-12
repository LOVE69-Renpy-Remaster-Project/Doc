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
    "revision": "1707f4c87608c149edb609d645269b48"
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
    "url": "assets/js/10.0ea2a332.js",
    "revision": "e17933a10350203462647d5c6d2e88b1"
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
    "url": "assets/js/14.2c63e2f6.js",
    "revision": "57e58f96b2715b851c7f0cba9edb79c9"
  },
  {
    "url": "assets/js/15.2a81977a.js",
    "revision": "46eee14aaf347305a4b438df21696c32"
  },
  {
    "url": "assets/js/16.7551a8f8.js",
    "revision": "0fe4134fdd3fe7dfa672e39c4e844f94"
  },
  {
    "url": "assets/js/17.05c92c74.js",
    "revision": "a7e2ca9cfd4ceec09ed62974a220bf03"
  },
  {
    "url": "assets/js/18.8c5b66e7.js",
    "revision": "ad500711ecd0636e50d7d934d2fc830c"
  },
  {
    "url": "assets/js/19.880eda2e.js",
    "revision": "b03642747867b76f05f52954440d40e0"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.2b376ab1.js",
    "revision": "e905aa932ef77aaac7de28e8d650cc8d"
  },
  {
    "url": "assets/js/21.0b1e5f8e.js",
    "revision": "351cc24a0c729605f20a2c2069aacaa9"
  },
  {
    "url": "assets/js/22.e4429b9f.js",
    "revision": "9e71595e8877104569657bc269ba3284"
  },
  {
    "url": "assets/js/23.74b8664a.js",
    "revision": "e63e9cee9918c18f86852053b5c806d6"
  },
  {
    "url": "assets/js/24.d21f7a5d.js",
    "revision": "aa34900b00159a389fe36285713e98b5"
  },
  {
    "url": "assets/js/25.3799cf8e.js",
    "revision": "e56f074df2c8d61d08ba4e34c55b0be8"
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
    "url": "assets/js/app.f81dcdee.js",
    "revision": "ae6d4577aa7cfc5d4c61e522ae826256"
  },
  {
    "url": "categories/index.html",
    "revision": "e9aebfc449081750021d6af747c6eeed"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "6c8c87d18941d1d579d726ab76130e7f"
  },
  {
    "url": "dev/index.html",
    "revision": "854d243ee4ade299e4287683ee6f0290"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "558f360d73499807c487f945689d419a"
  },
  {
    "url": "dev/解包.html",
    "revision": "73de96d28600bdf09aca99741121b223"
  },
  {
    "url": "docs/index.html",
    "revision": "78978e4d090be478adfd1e64a809b708"
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
    "revision": "43342723047c1a0bc1c2a39852b0b279"
  },
  {
    "url": "intro/index.html",
    "revision": "b857fe844a1e7582c28702c2315a6b28"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "55b6af1087532c0ac698c82d0a3e4a23"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "fd83f5978c075152441b62e2e208a62e"
  },
  {
    "url": "standard/index.html",
    "revision": "22ebc62485f8bee644e61a4be979a80e"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "26e6056d4f23b08acb94444cd69e5b7a"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "3ea0fdd96d64f3a0cd46b6674a9d61d5"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "3bed9bdd5d1cd01ca8c9315a8236c4f7"
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
    "revision": "cc3c7632aea3d6c20411081532ea7c6a"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f5ecd2907b9135d9b7393f136edfacd"
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
