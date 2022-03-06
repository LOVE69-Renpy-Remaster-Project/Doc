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
    "revision": "09841463f4950425d6e5210db4c0bfba"
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
    "url": "assets/js/15.1cf1079b.js",
    "revision": "c4150a3141cb78c01a6e87d0120f2c65"
  },
  {
    "url": "assets/js/16.c0a8eac3.js",
    "revision": "b53220c0936d54b330b2146845e99a6c"
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
    "url": "assets/js/20.80487831.js",
    "revision": "71fd27fdeb75f783ed64302aa13d58fe"
  },
  {
    "url": "assets/js/21.abea29f2.js",
    "revision": "1d6ac9fd1a358010e0215f8277089d05"
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
    "url": "assets/js/app.3cd76271.js",
    "revision": "704cea075f020addfdf08abdd37076f8"
  },
  {
    "url": "categories/index.html",
    "revision": "cfe8fe7adda0df6e6e868c70bba1912b"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "b16bb3f47c6cfca93a02d0a6e2b4cbed"
  },
  {
    "url": "docs/index.html",
    "revision": "57b852c66219294dd324926d8c0c6874"
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
    "revision": "e9c3f417b068c570cfd9d8072081b446"
  },
  {
    "url": "intro/index.html",
    "revision": "4892e49684e3683271e84d0e8e09394a"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "73b535475a5fcaa085d337801e5437a7"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "ec6feed95826dcc8cdc32cf331fe72ca"
  },
  {
    "url": "standard/index.html",
    "revision": "34517cd942234dee5668c2564e8aa9cc"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "c543e1efe1b25e6c92762d1e201fd744"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "74631b68ff67d18fa764f55b664d41e1"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "9458987ec495445af41040dd0d85ed73"
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
    "revision": "80166289ce5be30f5068aecc432dfa94"
  },
  {
    "url": "timeline/index.html",
    "revision": "22129f31231b6aa2b9c9b9a97a50394e"
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
