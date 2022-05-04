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
    "revision": "472fae746d5b0295d6c8e587e22a0cae"
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
    "url": "assets/js/app.8e4d76ea.js",
    "revision": "2ec6770bd03ea4defe451f86a559aa19"
  },
  {
    "url": "categories/index.html",
    "revision": "65cb474a677508f06fae8caa93193259"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "dba2e206acd4414ef9cc3cabdda3dd05"
  },
  {
    "url": "dev/index.html",
    "revision": "f5f211b2b40c17e28eccc62a5ed03f54"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "100933cd371a23e1ced39aa89cef16c0"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "1d8998675f97feede91a13cc3e822e75"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "4b01667ff68fe616cfaceac951224cc3"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "4cb4d31760dd7e7c7c763270ae89217d"
  },
  {
    "url": "dev/解包.html",
    "revision": "a66132ac680d71cadffc0c2c8208b21a"
  },
  {
    "url": "docs/index.html",
    "revision": "de4de492927f6e26885392bd575ec644"
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
    "revision": "4f8b107742897f1f38e887fbe2b190e5"
  },
  {
    "url": "intro/index.html",
    "revision": "3e31645aa16d70de297ee96d1d2c7b9a"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "8ebf0a7b1975d2acae51c24edbd5e3a2"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "eefb4c98efb15a5cc0585c7fa11d2cfb"
  },
  {
    "url": "standard/index.html",
    "revision": "8d27239b6db3685417e0dd836c25fbce"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "3fe87ed456f6128cf48f4b54e0ab6319"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "63e3de0d4146e1d764bc151bf096a8a2"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "e409fd01a4be8afe1db7b0dbb3299b27"
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
    "revision": "0ebbb527d54aa4f9cd5139b13f78276b"
  },
  {
    "url": "timeline/index.html",
    "revision": "61c5fe8124adc8968602a04cbc510903"
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
