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
    "revision": "49e5e0183e4a0e2dc29843c3c28f5c59"
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
    "url": "assets/js/10.ac85f676.js",
    "revision": "ce57516a914f78a7e556553b8fc8db6e"
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
    "url": "assets/js/14.614dc9a1.js",
    "revision": "87fdfac2f12bbb59f0c4610a854f5cbc"
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
    "url": "assets/js/28.eb82dcbf.js",
    "revision": "2913e2e9f874eaaa02e1f64e2445f496"
  },
  {
    "url": "assets/js/29.691c06ba.js",
    "revision": "cbfcc703705f5ebbdfb50221c1a5dffd"
  },
  {
    "url": "assets/js/30.246b4520.js",
    "revision": "0ba0084235d160f876da6d866e83caf8"
  },
  {
    "url": "assets/js/31.878a9b39.js",
    "revision": "53a5140ecc9bcaa03a190296e5b57721"
  },
  {
    "url": "assets/js/32.aabad39c.js",
    "revision": "9e5f41218cf41946bfc22ce3e767b849"
  },
  {
    "url": "assets/js/33.2bb15865.js",
    "revision": "8d66f7527a754d799c17e63d17bc8bc7"
  },
  {
    "url": "assets/js/34.842a6f7e.js",
    "revision": "6ab4a616227d842c8c70dc22bd1b3671"
  },
  {
    "url": "assets/js/35.e770d29c.js",
    "revision": "a6e3cfa87acd2b91cbbc44ac1dac8743"
  },
  {
    "url": "assets/js/36.c08b0f4e.js",
    "revision": "631da64fcf19db7e25e759f3f7bd73f4"
  },
  {
    "url": "assets/js/37.5ab431c1.js",
    "revision": "b0e25e80d85fa8f84b9234e3ac03d281"
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
    "url": "assets/js/app.25162c66.js",
    "revision": "b04c95623750200e904815f7dd5897d4"
  },
  {
    "url": "categories/index.html",
    "revision": "bb98bd42f3a4ec8abf5daca6192837f8"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "cb0dc1ec3beb47fb8a5757f05d8cd533"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "c51d296e9b158215db0469db83e13e84"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "bf3ae18e169d239b6e706ebfda1a7b52"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "8a0131d7e4528f1ebfb435cb63aef45e"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "39f78a5a3e4413ad037fa30e67786b61"
  },
  {
    "url": "dev/index.html",
    "revision": "4212a44a4d927815597d92d3bc267688"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "63735113d1d3a1cb83351550830b96c8"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "c1daa9e66341f9d79b283696998eba7a"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "7f17c2983ebf13f8e42216b5a0961662"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "497c69739eb8c438d629d39c68af32f7"
  },
  {
    "url": "dev/解包.html",
    "revision": "e5a378e14681d507f1ac9ddf505ae58d"
  },
  {
    "url": "docs/index.html",
    "revision": "92f66fd261fa6e9ce2991619e33c3354"
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
    "revision": "6b54e5fa2558b44e2129f5e1c0164936"
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
    "revision": "843cfc97b3d0b0c7da5a0db5d6f3d51a"
  },
  {
    "url": "intro/index.html",
    "revision": "4212772c4dfb3c92a2ce622c3534c15a"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "9d7cd6ada7b2e8529ba175fd6a85c073"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "c2b03c61e66b9920c7eb807202cec132"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "dbac19d227d12be084102f17f1b62283"
  },
  {
    "url": "renpy/index.html",
    "revision": "58dc14c1aab975019f1984faf840d834"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "fa6c6b91705e5562448faf068357b2df"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "58d7c07e745cca47065db42cf9e25a47"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "5ebecc9689ec77216e3d047a48ee3c53"
  },
  {
    "url": "standard/index.html",
    "revision": "6e0c1497a94c0e8b4335b3190bc21b42"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "33450fb8407b6e3d057b43e48c833210"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "467b313ee06bf8a5a7ccec1df21507f2"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "255e4bb10ec3493902544c776f04c195"
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
    "revision": "d6112528425a9948c5bdac8c45e7419f"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f6af23a64711b6daa6797eb4275a872"
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
