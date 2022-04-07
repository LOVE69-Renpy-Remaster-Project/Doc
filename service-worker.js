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
    "revision": "7c10ca9f44fb3c885f9b4763313c73ea"
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
    "url": "assets/js/10.c1ed0eb3.js",
    "revision": "3c81e0a0c1eb4963780c2b07c8273382"
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
    "url": "assets/js/15.8f1bd05d.js",
    "revision": "dfd559826e06ea6d1e3b516d0f230384"
  },
  {
    "url": "assets/js/16.3be67c63.js",
    "revision": "faab88e03b17493e2611d0e31262f709"
  },
  {
    "url": "assets/js/17.073c12f3.js",
    "revision": "264a87507bda7c7278c9466fb0a588df"
  },
  {
    "url": "assets/js/18.570ca06d.js",
    "revision": "5503fe91f083706f07fbc31658889801"
  },
  {
    "url": "assets/js/19.c3f6214e.js",
    "revision": "b93dd2336bb55ef72edc66e0d247a639"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.ddd93a75.js",
    "revision": "2feb742703e192a834532defbddf8dd3"
  },
  {
    "url": "assets/js/21.331def45.js",
    "revision": "42dfd129847c17a43f0deec1732f9773"
  },
  {
    "url": "assets/js/22.23fd9cca.js",
    "revision": "1a5899e1f096e56d104b482a53e45d78"
  },
  {
    "url": "assets/js/23.3c26d46d.js",
    "revision": "83d4f7e98d3e7620250dabe1f4e0893a"
  },
  {
    "url": "assets/js/24.2e318c9e.js",
    "revision": "cf4a0129d2752088e5631024536c8c92"
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
    "url": "assets/js/app.2896873c.js",
    "revision": "8d34238a1002491e9ca9849fec8f1305"
  },
  {
    "url": "categories/index.html",
    "revision": "a7f3a93cc81c011ad15f5789642663f0"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "3e03b0dfa71dd09ab94810ab1a9d8dc4"
  },
  {
    "url": "dev/index.html",
    "revision": "382d619d8c6b860a1e66a63393bea37d"
  },
  {
    "url": "dev/解包.html",
    "revision": "b554d3eb4314713abbbb8250a0662907"
  },
  {
    "url": "docs/index.html",
    "revision": "7559235f85a6038512837aba3a16d9a6"
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
    "revision": "2b43ab0c7ebd9044583506fb587c3fc2"
  },
  {
    "url": "intro/index.html",
    "revision": "4ff20333c661ab21c08b5c0aa778474e"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "e60d5e1511c48bd4e6a6088174943fa3"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "30b95f442b808cf24cbdcd929ef4a4b4"
  },
  {
    "url": "standard/index.html",
    "revision": "c5519d8f9e5ef8c1e89ad3bb2a3876cb"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "4ce5b165d9e3e5432234f3b5301689e7"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "741108874d10a315ed09c7e11fa49ed9"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "9e28befe079917595c01a86ab42c1bdd"
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
    "revision": "024953ac4f6bae834f2f6e5cc5ab7bc9"
  },
  {
    "url": "timeline/index.html",
    "revision": "45022b4746554f3efeb9cedcdb610541"
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
