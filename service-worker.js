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
    "revision": "c76bdd3137075bfdd0ef9a94d568318f"
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
    "url": "assets/js/10.105b72bf.js",
    "revision": "5c9956642c82c31a8674f98bc7639d84"
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
    "url": "assets/js/15.bcab456e.js",
    "revision": "1ccf15feed535613d4d368e4955dc5b8"
  },
  {
    "url": "assets/js/16.bdbf7add.js",
    "revision": "6c370d722aacedda2bcbd523e1e7ffb0"
  },
  {
    "url": "assets/js/17.1684237c.js",
    "revision": "475a473b6689e7d7bf65a0c1909926cd"
  },
  {
    "url": "assets/js/18.599876de.js",
    "revision": "5debc0147834d42517a3c0ee3a776a48"
  },
  {
    "url": "assets/js/19.83a42acf.js",
    "revision": "f6d265ddc700f53196c1249337dc8d4b"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.b2dfc1d2.js",
    "revision": "ba4411bbbd2dfad0d54fe65bffc8d199"
  },
  {
    "url": "assets/js/21.ce66d691.js",
    "revision": "82f879a6580d517b5097f4808c7ae28c"
  },
  {
    "url": "assets/js/22.2d68ecc7.js",
    "revision": "aab6bc4a14c43b175a4dc810c19c9e5a"
  },
  {
    "url": "assets/js/23.1bc95287.js",
    "revision": "3a9d6bd14aea584c2dc3007d981b47bf"
  },
  {
    "url": "assets/js/24.56be34ac.js",
    "revision": "270a93befc4b2f5e75cb3814ebd0948c"
  },
  {
    "url": "assets/js/25.674b5a32.js",
    "revision": "b84ba8b5d72e30947e2c9b24cb72509b"
  },
  {
    "url": "assets/js/26.8a6f2acd.js",
    "revision": "193268fcbcb08179d1a79a567793fe12"
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
    "url": "assets/js/app.a1b64aa6.js",
    "revision": "6e01f058351c75525e17a59f2b899ab3"
  },
  {
    "url": "categories/index.html",
    "revision": "e937d869230fa0625c3d635fc3360f7d"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "7a7878e361bff7b1334616b58b96e3ad"
  },
  {
    "url": "dev/index.html",
    "revision": "01fbcc91aa7399af6876d0acf83a280f"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "df769153133fa23a055ef40cd64d8196"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "630e2c9d8f8b3120278057027d31f98e"
  },
  {
    "url": "dev/解包.html",
    "revision": "89fa74414fc27454612ddb9dde1bec08"
  },
  {
    "url": "docs/index.html",
    "revision": "ef6d41317a653513057c74fa2163fdca"
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
    "revision": "12c8cbb5109e4e94f3043f6cc7dc2c8d"
  },
  {
    "url": "intro/index.html",
    "revision": "6079b42fc404d70e417bebdd1917dd84"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "a0f54050c99cf1458598d2ffbf58b294"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "de8d16825b76e27bc6b7895c266474b3"
  },
  {
    "url": "standard/index.html",
    "revision": "91df005045ad660e6654b94046ed2ae6"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "c5db8fa656f1d853ddeb0802b23486f6"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "92d47af6dee10fd806abf1e79e4350fb"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "7a97a779b68598db429603d9599034f0"
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
    "revision": "e471246b8ff2308374260883ef4e1f84"
  },
  {
    "url": "timeline/index.html",
    "revision": "007d38a2952dd8c461328272ef264b52"
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
