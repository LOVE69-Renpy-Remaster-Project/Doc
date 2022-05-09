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
    "revision": "43aa902df751274480c49319ba0e94a5"
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
    "url": "assets/js/10.4444342f.js",
    "revision": "ddf8828bd68d1fad8f7b8ed0e9ec94c6"
  },
  {
    "url": "assets/js/11.3e78ab19.js",
    "revision": "1339cdd4e49d3e255c47e22c787f0a4b"
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
    "url": "assets/js/2.6989aa2d.js",
    "revision": "319aadd51dc5d79289a915320851477d"
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
    "url": "assets/js/29.728dd6d1.js",
    "revision": "d0c7c87e205d3558f31a9aeacd8ddc04"
  },
  {
    "url": "assets/js/30.29f973bc.js",
    "revision": "1fc8190b22ea32251718786f021b8096"
  },
  {
    "url": "assets/js/31.ad179979.js",
    "revision": "ae3210b8abf42987e82c3e56a571a92e"
  },
  {
    "url": "assets/js/32.6fe101ff.js",
    "revision": "b7039676cc78e9e03247b3cd657619a7"
  },
  {
    "url": "assets/js/33.0878ae4b.js",
    "revision": "c662a71556d8f9ec46125b14aedcb0e6"
  },
  {
    "url": "assets/js/34.3363ce51.js",
    "revision": "94ae273723099b72f866024bb887611a"
  },
  {
    "url": "assets/js/35.39c097f3.js",
    "revision": "c93ce5bce096cc34e64b34b96cef9bb3"
  },
  {
    "url": "assets/js/36.68c5120d.js",
    "revision": "83445a24c6d1321117065807fd626b03"
  },
  {
    "url": "assets/js/37.138067b2.js",
    "revision": "a6306d83fb5ce274cc22eb81e56330f1"
  },
  {
    "url": "assets/js/38.3240f0ea.js",
    "revision": "46e4d4a0accfb33b3abe74f4eea2b450"
  },
  {
    "url": "assets/js/39.a8b99395.js",
    "revision": "d70ac576c812c03e2e065e1e18caab62"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.e2c8bbe3.js",
    "revision": "2abda9f0557daf465f9e1d77823795e9"
  },
  {
    "url": "assets/js/41.59718e0a.js",
    "revision": "c9191547d4653a35c703e8fdfb91f9b1"
  },
  {
    "url": "assets/js/42.65a9fab1.js",
    "revision": "43b33a8aaba283f2d86c5b969fb94580"
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
    "url": "assets/js/app.366bfef2.js",
    "revision": "48e7b836a286298ec5a4cf1a9c3d9112"
  },
  {
    "url": "categories/index.html",
    "revision": "3c99275ae416130ea1e81b161f776bb3"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "6c1d1db727cab15f3899a517e1614d23"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "bec75dc12f4315080a652ce3de7ebcba"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "ec25318138924992501566a681959d67"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "952e34c0444b990514df5c334de22879"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "58cb0c5ccfd60c3bb492e4c4a3af9f8b"
  },
  {
    "url": "dev/index.html",
    "revision": "db8a4d4183c184348ac9ea21a3e1608b"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "e2354c91321fa1ac1bde3614bd74350e"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "ea2bfe38e633a4cb4cad0b340e12d638"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "47da475b4d344311005458a35e4341e4"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "2e6a62469821d343a2b313d68866b87e"
  },
  {
    "url": "dev/解包.html",
    "revision": "e825a2c7b945e6eea4402637c8669a47"
  },
  {
    "url": "docs/index.html",
    "revision": "7edf8e526b92f93cc117dbb23dc3c52c"
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
    "url": "images/renpy/QuickMenu（快捷菜单）的制作/需求描述.png",
    "revision": "bfa40271600219ab207fbb9b3f567393"
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
    "revision": "e0b0b26f4397c4b745bfa587ee217395"
  },
  {
    "url": "intro/index.html",
    "revision": "9d48cab33e748605f76dcb6cd4aa9f65"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "fcb7c1d68a227b5b23d9d2f45a3c3b6a"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "ccebbbfac5cbad1dbdfb6785b606171c"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "c1780baa5bfc8d155abd88a2af531150"
  },
  {
    "url": "renpy/index.html",
    "revision": "b406be3730b3b23e0645f58050d279c3"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "28c9d715c1a4dd466846bd9ff511d209"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "4bd2ee73bbe5c87c1066df2d16d33ef4"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "9e2fdf9898cd7466479481b0082cd8cb"
  },
  {
    "url": "renpy/导航.html",
    "revision": "0fdb335cfc90f531611eaef5a05c84ab"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "005ffe2987028508afa0887c0435658d"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "058316f530587dca8a7bd74e1857bd2c"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "a70c8d17bd05ab198a37b9c08fb6b200"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "3ce9c9fbf3b814228ae98d2958de6b62"
  },
  {
    "url": "standard/index.html",
    "revision": "e0a2773076a843b3314c871180d2c9bd"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "941aa6b735e86b15ba9bf20b8f84701e"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "57e4b4341b38d416e7ba9739f9997ac6"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "968b939031a9418c3a66c776d77dbea6"
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
    "revision": "6e54c0968ae6d12364bc73f27317f7e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "093ee37a34f5ff633f3caca36632c174"
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
