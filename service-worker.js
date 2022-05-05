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
    "revision": "79753294b8946971ee315b456467b987"
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
    "url": "assets/js/10.5f923ce2.js",
    "revision": "c399dabf90e4932a5bd1888c0aae9c66"
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
    "url": "assets/js/13.4210762f.js",
    "revision": "4cb907977cc13fe9b3a08c1c5c70ade1"
  },
  {
    "url": "assets/js/14.b0ce4fe4.js",
    "revision": "7476430ce449bb4b9243296c70a2f7e0"
  },
  {
    "url": "assets/js/15.be76ab7c.js",
    "revision": "2e64c8b201ad2d92ce7c5db082f253d3"
  },
  {
    "url": "assets/js/16.b069a2eb.js",
    "revision": "c991e70ebbeb7bc60fd7e38ed67ef911"
  },
  {
    "url": "assets/js/17.08ec0299.js",
    "revision": "c7d39ac3b5a438b5c44c722ebaaf885f"
  },
  {
    "url": "assets/js/18.1c1b0a50.js",
    "revision": "ba9de93f305d32086798f2d9339acdf2"
  },
  {
    "url": "assets/js/19.d6151542.js",
    "revision": "116280c4126e7c714376f4b0ed519035"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.38749e3e.js",
    "revision": "ac2b0ace9f529357f55878267be24cbf"
  },
  {
    "url": "assets/js/21.3865a3ec.js",
    "revision": "f8a31a8a5683cf3d3e98ce6c6c9e2c9a"
  },
  {
    "url": "assets/js/22.238471cc.js",
    "revision": "296d39775c0b3979a7a81ae8c585feb6"
  },
  {
    "url": "assets/js/23.92b21cc3.js",
    "revision": "284e7d898184b86bdb405d88be1c9b54"
  },
  {
    "url": "assets/js/24.cd2029bd.js",
    "revision": "1405e46fff20192500736ff2f37dbfc6"
  },
  {
    "url": "assets/js/25.abb4079d.js",
    "revision": "b4c8452d95f8f6adb91ff58b0b1e2e8c"
  },
  {
    "url": "assets/js/26.09572dd6.js",
    "revision": "b530918723ad9502838e26b902973679"
  },
  {
    "url": "assets/js/27.3f35cabf.js",
    "revision": "79fb52a028d66ea2b74e035c772dbdb9"
  },
  {
    "url": "assets/js/28.2555b39c.js",
    "revision": "76cb26730e571aa31dd440e8f2c47caa"
  },
  {
    "url": "assets/js/29.6be025c5.js",
    "revision": "cc0a005003ca2901e88bb793d7985d59"
  },
  {
    "url": "assets/js/30.187d5b3f.js",
    "revision": "04d2207b68765cace4bfb684a5a31220"
  },
  {
    "url": "assets/js/31.5a07a30f.js",
    "revision": "90571c5ba31b0178b6050bc7b0af680b"
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
    "url": "assets/js/app.1fc1dc7a.js",
    "revision": "5e731bd4b1944219a579107a1dcc28cb"
  },
  {
    "url": "categories/index.html",
    "revision": "4fd5fb8d9d297a5621404eda84127fe3"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "23e0f9a9b7b93b0a77341f35630303d7"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "029968882892d67235ce193434f45c39"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "f6faad30ba346de87685171a7cd76227"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "e9ad9a1915b6bfd0385983be55ac8ba0"
  },
  {
    "url": "dev/index.html",
    "revision": "4f78e8859f72dd921915fc8eb443224b"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "0a6af768df613ca5e775f49b3205a035"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "bcb48704bd9b8af47eb7dbb72201567f"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "7fa4f167a61eb57bced76ae0c6374815"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "a621abe20a08fc98d2bed9ac063aa503"
  },
  {
    "url": "dev/解包.html",
    "revision": "217531bfb3494aeb5efc5931868b4406"
  },
  {
    "url": "docs/index.html",
    "revision": "5235f258aca5e15b7a45922c22f80afb"
  },
  {
    "url": "images/dev/写一个非常简单的对话/程序运作流程.png",
    "revision": "7aa2832a2a6aa0bee86cee419e401206"
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
    "revision": "8a151b2952cd07832cce26ad14a02f21"
  },
  {
    "url": "images/项目组logo_smallsize.png",
    "revision": "3c16e29ba08043aac27a5f3cf0cd75af"
  },
  {
    "url": "index.html",
    "revision": "332a2cb7213683a2c8dd523064a8c2a1"
  },
  {
    "url": "intro/index.html",
    "revision": "afd10f5bab37cfe4ca8ba47ac35d868c"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "6883c1b2ae0732d3afc1af89a0f33abe"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "03478afa4a5a32581aacf9f810911a08"
  },
  {
    "url": "standard/index.html",
    "revision": "f6d62ba43bc41b40cf91ddbc4bd8abf9"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "1030b5aea5eecc8a4467ad75f4a60721"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "fbe31f2d65328f6faee0c488a7c6058b"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "6145e317055c4a35184f14655a675f95"
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
    "revision": "0f3245968909fa23e1401c5655f59e2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3491229aade384538fa6292d13366c3f"
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
