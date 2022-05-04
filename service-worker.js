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
    "revision": "83c93387f55ea5c73a518ce5a872d9cb"
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
    "url": "assets/js/10.5f8026ee.js",
    "revision": "528a206a6223f2c46d21dc322a5d0a40"
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
    "url": "assets/js/15.c90cc952.js",
    "revision": "62365a64fae7b8900691ceec1b62eaa8"
  },
  {
    "url": "assets/js/16.51260309.js",
    "revision": "369f7e884d9935db96634f7a6b41dbb1"
  },
  {
    "url": "assets/js/17.304ed1b1.js",
    "revision": "b2e62a5eb4b2a7f6ff046187f7f7e09f"
  },
  {
    "url": "assets/js/18.754dd399.js",
    "revision": "3b75192e9b63c4ba744da6c95ec0f0ce"
  },
  {
    "url": "assets/js/19.d4cf4853.js",
    "revision": "435f4bd77d39ec296f0c2708a0cbc18c"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.b40aa1ff.js",
    "revision": "1e3cd8dc5d338ca8f770bb0f1c53a9a9"
  },
  {
    "url": "assets/js/21.7efe9791.js",
    "revision": "685b04c05d2a70491099b322970dcd4e"
  },
  {
    "url": "assets/js/22.68be4161.js",
    "revision": "f623c1a9c773dda1e9a9af96053e2ee2"
  },
  {
    "url": "assets/js/23.303b44ba.js",
    "revision": "e62c4475cb3618b34f800b6a6671b34c"
  },
  {
    "url": "assets/js/24.c01c9fbf.js",
    "revision": "665a1302b083448640a6e31203a908e8"
  },
  {
    "url": "assets/js/25.d22f666e.js",
    "revision": "b8d9956a91023de80affe68d1e716d01"
  },
  {
    "url": "assets/js/26.11a537c8.js",
    "revision": "33a7d9ef23ab9bcbd9b2f848aaf3d900"
  },
  {
    "url": "assets/js/27.c82faccc.js",
    "revision": "39f666674f940d18165d52253f579cb0"
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
    "url": "assets/js/app.b5c7aa9f.js",
    "revision": "a156137cc116e46c14af6515bf5ee228"
  },
  {
    "url": "categories/index.html",
    "revision": "8a5656ffb8bd2667bd7e9adaf9fc0618"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "53fffcb262a118369c22a0adc99250fe"
  },
  {
    "url": "dev/index.html",
    "revision": "ce547f94624f1b6ce34f566edaf6c7fc"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "9bd9cc74dfc0b57dfe0c7dc36038cde3"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "1af32ecdd68579e6b7382f99189ef6b5"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "f2385e1049b9af1ed4b0e40222f19435"
  },
  {
    "url": "dev/解包.html",
    "revision": "326f8c90c363ed674d787bd2340bbb00"
  },
  {
    "url": "docs/index.html",
    "revision": "6cea451e13453334720c2be626a25bff"
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
    "revision": "a2e1d8bc7f19fe9716d714fac46ec044"
  },
  {
    "url": "intro/index.html",
    "revision": "2ac082fd1f1439d0d6b732101bd62576"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "a562bd720dadd161725a5294ae90bbbb"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "a7ee831c8671bb205eea5c3f88cba11d"
  },
  {
    "url": "standard/index.html",
    "revision": "00cc66ad322d5ba1bc67533c9539c067"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "2ebcd47b5847232d8fb719179e63e79d"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "9a68fcd5f3485d83e4d3ef2278aa6563"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "578e686a8078f75b3247356e54a59c06"
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
    "revision": "843c65d932e2ef4d4ca376335d1e8296"
  },
  {
    "url": "timeline/index.html",
    "revision": "434fdf9aadd3ada695c4d5f1ee3c8e27"
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
