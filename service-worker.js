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
    "revision": "a03c832f47d05268ff6e1f2e6aa6a4ff"
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
    "url": "assets/js/10.21900479.js",
    "revision": "9803444ae6e6456eee76264018fabab0"
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
    "url": "assets/js/15.a670bfe1.js",
    "revision": "fe1b944aa415c0e1e60da06bdf55fb5e"
  },
  {
    "url": "assets/js/16.7f1266e1.js",
    "revision": "9a6b4b5acead7d93dd40482cce4851f8"
  },
  {
    "url": "assets/js/17.4227a51c.js",
    "revision": "9b978fa57d206e3d810acb8dedb0d944"
  },
  {
    "url": "assets/js/18.e1d8cf92.js",
    "revision": "6fa5e24c6c09716a73761ea9ba6ac2f9"
  },
  {
    "url": "assets/js/19.3b88ac6b.js",
    "revision": "dc0b6824a380b7f282c1d40aec4cf324"
  },
  {
    "url": "assets/js/2.c33b310f.js",
    "revision": "c9287d41e4f6687e369f45e736ed9f41"
  },
  {
    "url": "assets/js/20.a694c78f.js",
    "revision": "d36a43549675949e6123859d08223839"
  },
  {
    "url": "assets/js/21.11801354.js",
    "revision": "22241053a0dfc7c57b0aa9e6ddc9994d"
  },
  {
    "url": "assets/js/22.be9a01af.js",
    "revision": "e89077c5bb3e8a39c4badf3cc8ec6ca4"
  },
  {
    "url": "assets/js/23.6fbdc36d.js",
    "revision": "7197f5372d40d0f1ba8a9fad16aeb6b5"
  },
  {
    "url": "assets/js/24.359ae57b.js",
    "revision": "be67ac1f75bb47e0d286b1fcb61dbd67"
  },
  {
    "url": "assets/js/25.76aaaeb2.js",
    "revision": "c3f959d3c06e4108de1e47a544679335"
  },
  {
    "url": "assets/js/26.5166f49a.js",
    "revision": "b777ee8575585e26df58f35d28924115"
  },
  {
    "url": "assets/js/27.560e0401.js",
    "revision": "f33207bc3342ed1c06a8fc94576d7c35"
  },
  {
    "url": "assets/js/28.e9877516.js",
    "revision": "2d8ca8ce1af0e44ac459410e19036eb9"
  },
  {
    "url": "assets/js/29.b70a3d02.js",
    "revision": "a473ff7af5a31834173ce815fb136976"
  },
  {
    "url": "assets/js/30.dff6e2ec.js",
    "revision": "215493217e5ada5fab52f0c456995ce3"
  },
  {
    "url": "assets/js/31.b1368008.js",
    "revision": "f09921fce17fc1f1bd2a4357d4d6be48"
  },
  {
    "url": "assets/js/32.5d6ee7bc.js",
    "revision": "b77aea45eb8d73751e0036e1fbacee4b"
  },
  {
    "url": "assets/js/33.d56532da.js",
    "revision": "6ef7cc801fdf617a4377bb59d793ad59"
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
    "url": "assets/js/app.5f54ac95.js",
    "revision": "5ad5bcbf0c6c5aa376514df9fbf3bf08"
  },
  {
    "url": "categories/index.html",
    "revision": "7708c008d8777832e651bff3be471ebf"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "902850ce6d3fb55ef302fa51c0145829"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "7ea9cb0e412b9eb75951d87a5627a08c"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "9833fcda77dab73e7c47104fc501c7e6"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "7a43e061a1a1ed30a4c9e7a611316271"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "d9629bcb71132efae5f5bf18618522f1"
  },
  {
    "url": "dev/index.html",
    "revision": "2734bffb9a8610824efb9c95726e6fdf"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "b5eb5930878a54bca4cad1bf9a5392de"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "93da02df8f21ae868b21f9bd26c6eb97"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "82e25d139bfcbe218cfd5f4b19d45c1a"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "43aa7b00aa8401fd9b2a0dddadb0c660"
  },
  {
    "url": "dev/解包.html",
    "revision": "1c0473187dedcf0b3d9283edddede8aa"
  },
  {
    "url": "docs/index.html",
    "revision": "39f1ed8836d64c77d514a8eeeb640318"
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
    "revision": "f5a2d9a05e2d27a1da80f6bd9f0d38b2"
  },
  {
    "url": "intro/index.html",
    "revision": "74396a91991de2650c5ff9f2ab48dd52"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "5a8e536bcbb0ccd7323c0cefc4e4249c"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "9121adf45fc449cc4dda91d02d4aa32b"
  },
  {
    "url": "renpy/index.html",
    "revision": "8aed65540b00eaeab2cfc385b4d17605"
  },
  {
    "url": "standard/index.html",
    "revision": "7de06602b86c02a5cd4eb85da2ac1be3"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "6131939a20ad16db3908ac88e6ab6146"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "8bee6212177f0a4e643db07233245282"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "8a2f891cf24810168d5c66ab5be5f170"
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
    "revision": "a9a738050f1cbfd6f8de368fdf408948"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba72c6646233e3c22c34f6a1dbe0356a"
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
