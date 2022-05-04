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
    "revision": "a0d31ee0575c0dff7e7f4c6216fce8d7"
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
    "url": "assets/js/10.13fa6810.js",
    "revision": "070654fe773f554ba86ae6d60bbf4c93"
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
    "url": "assets/js/14.c9e1c314.js",
    "revision": "ce0e8f587539fa88c3a6b34edd766996"
  },
  {
    "url": "assets/js/15.a0da1134.js",
    "revision": "28744c0df386986c18fa602e5ac6937f"
  },
  {
    "url": "assets/js/16.9347462a.js",
    "revision": "1287fda26b5277a7275532f0c267f7b3"
  },
  {
    "url": "assets/js/17.372ce6a8.js",
    "revision": "b0735f889dbfe2900810cf0bc7c02d04"
  },
  {
    "url": "assets/js/18.719c0313.js",
    "revision": "297ba582e6df323e192766d2232dd1cf"
  },
  {
    "url": "assets/js/19.9636d4bf.js",
    "revision": "77740c6dceb0c1603986362a40a4e3df"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.17db4cda.js",
    "revision": "cb65cceaca53cdde5942ac005a774d34"
  },
  {
    "url": "assets/js/21.fe47b06c.js",
    "revision": "65bf400a80db99e349d511f1bc5caa58"
  },
  {
    "url": "assets/js/22.fbb22e80.js",
    "revision": "08b1a8b1c7d13ec317f4bcefb73b480a"
  },
  {
    "url": "assets/js/23.9b3eca70.js",
    "revision": "eecad5ca38c4e2ffbc0e39343fe33202"
  },
  {
    "url": "assets/js/24.ad3cdeea.js",
    "revision": "9d4c42ff028b129ab83d0a4d0c5057cf"
  },
  {
    "url": "assets/js/25.4bbac267.js",
    "revision": "4c4a1bcfa779bda12425dd5312fc466d"
  },
  {
    "url": "assets/js/26.8cae1893.js",
    "revision": "ec968137109b090acf8ce914a2479844"
  },
  {
    "url": "assets/js/27.2dc85076.js",
    "revision": "fe2be41d54f670fdef085dd565060fe0"
  },
  {
    "url": "assets/js/28.8f03248d.js",
    "revision": "1bfee9b65799adce4f26eb51da5465ea"
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
    "url": "assets/js/app.56bcd10c.js",
    "revision": "cd73dfdce82dc8a504f4de587f4b2426"
  },
  {
    "url": "categories/index.html",
    "revision": "cd7dc5da0c57beae7d082a8e720e0078"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "2f128d67032de22c8bda5e73c45eda4a"
  },
  {
    "url": "dev/index.html",
    "revision": "261b1b3a18638933beb6cad83040a1b6"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "d954e1716b46412041b9e51048d3516f"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "662f31ab327bfe4b708a75284b039f9e"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "63890ceac20d62896f31ba1df7dd286b"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "0dcc4e5a5193f236d70800d2c6070382"
  },
  {
    "url": "dev/解包.html",
    "revision": "54ad01fd1129e3471d615e8c470b1d36"
  },
  {
    "url": "docs/index.html",
    "revision": "fb2348bae3a029668c13c6b5fb2339fb"
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
    "revision": "4072ad759b3ecaf9474672f3c52d4969"
  },
  {
    "url": "intro/index.html",
    "revision": "50c29250189d505c69ee1ccf85436e77"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "936b4ed944d2157932a4c26202241278"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "558e918a78e1602077e224b64d896eae"
  },
  {
    "url": "standard/index.html",
    "revision": "24f583c03134d8af9eb94c785a320862"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "8e5193f8cd89c0f57d1aff350c6525d4"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "78ef0a94b5f9c42da5f456c08392f56c"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "f2d39c534fdeca4f9fe117d79d87c162"
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
    "revision": "16357e0c9d1411687395c487c259c082"
  },
  {
    "url": "timeline/index.html",
    "revision": "aa3cf1241df3f6df7ad5c82508658e61"
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
