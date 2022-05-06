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
    "revision": "4fbbbbf8e69891b7628ae9ff67ff70c1"
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
    "url": "assets/js/10.cf67d531.js",
    "revision": "b9039bcbbdf093b3b8ba510a57180392"
  },
  {
    "url": "assets/js/11.72703a71.js",
    "revision": "6aa1c8aafd924cdeb056a8939e0b01d1"
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
    "url": "assets/js/2.52e60479.js",
    "revision": "c12c81143b23b850ec57597bbfe180e7"
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
    "url": "assets/js/29.d6c7f313.js",
    "revision": "c44bc8cbf26747ee000d1d4e989cd5b4"
  },
  {
    "url": "assets/js/30.2869c53f.js",
    "revision": "391a59954c60857e2d446e7b6fa0e532"
  },
  {
    "url": "assets/js/31.1acd1d07.js",
    "revision": "b4aaf3115c2773ebdf042013fc9854f5"
  },
  {
    "url": "assets/js/32.cd209802.js",
    "revision": "f2e8049aebdb961fa790eb8f33a15fb7"
  },
  {
    "url": "assets/js/33.7d042c59.js",
    "revision": "1cac2cebf643d6d81bb3954a2c86556b"
  },
  {
    "url": "assets/js/34.05c0adcc.js",
    "revision": "bd3b4d08369cbb316629bcf2ee1d4856"
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
    "url": "assets/js/app.d67ff23f.js",
    "revision": "6d125165a6cdfa1dd95b82f052d150e1"
  },
  {
    "url": "categories/index.html",
    "revision": "f4962ac3f8c4fb6632b4d14af7de535c"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "0047291466cb8153732558210124aff2"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "aa6cf76757f03e3e2198e05c3f353b6b"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "221093c96c5121e03b2d22d63b1e1265"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "09f2efbface7c15d433f1e4f71067527"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "6e73b64b034c0404297c668b6e0ea11f"
  },
  {
    "url": "dev/index.html",
    "revision": "45d211ac6282ffafc90c8064eb21f081"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "f7ff688c84418d1b4c1b6a68ced43458"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "09e86ca88bb846d0640e996fae2f90df"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "477d608bdb2b3b64d7cddbcec320e42c"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "026701cef9c3241c227ef22121436c21"
  },
  {
    "url": "dev/解包.html",
    "revision": "57213f624cf4b939ed4ed3813a856e8a"
  },
  {
    "url": "docs/index.html",
    "revision": "21abae70d3e1d4f428676d3c882c0deb"
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
    "url": "images/renpy/添加大小不同的小头像/坐标轴.png",
    "revision": "833e78223c8920726e68cbdcaa144cda"
  },
  {
    "url": "images/renpy/添加大小不同的小头像/心爱小头像.png",
    "revision": "3b655bddc1a126da301617c07d1047f1"
  },
  {
    "url": "images/renpy/添加大小不同的小头像/心爱立绘.png",
    "revision": "3b655bddc1a126da301617c07d1047f1"
  },
  {
    "url": "images/renpy/添加大小不同的小头像/真冬小头像.png",
    "revision": "0a4248165c08f8770f3dbe2db665b2b0"
  },
  {
    "url": "images/renpy/添加大小不同的小头像/真冬立绘.png",
    "revision": "7c43fa59330c6fd27522493068ba481d"
  },
  {
    "url": "images/renpy/添加大小不同的小头像/需求描述.png",
    "revision": "1c9898dc31f58e3dedced4dea7456b24"
  },
  {
    "url": "images/项目组logo_smallsize.png",
    "revision": "3c16e29ba08043aac27a5f3cf0cd75af"
  },
  {
    "url": "index.html",
    "revision": "1ce509a334746b41b8bd36d710404648"
  },
  {
    "url": "intro/index.html",
    "revision": "80a28bda218eb8c917e610a08df4aaf6"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "eba4b75dbb55948d63b3531071b408d0"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "a0c23d0079546e0983e441b3991dc40c"
  },
  {
    "url": "renpy/index.html",
    "revision": "9e3b5bddf5c7309b6e1e305539685dd0"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "7b5efab1506399313712c270139e0a0a"
  },
  {
    "url": "standard/index.html",
    "revision": "45fb46e312fced10027ebcd716ca30a1"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "48ae0cda576f2b8d473e80d3e7a45045"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "c87f509b231daa7b97b5dba5e003a5fd"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "b9745fdbcf0cc76bad18042f892eec9a"
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
    "revision": "6843dc72c8a9f758fe29929f8ed192ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d356a792fdf41354a4302d84fe0705d"
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
