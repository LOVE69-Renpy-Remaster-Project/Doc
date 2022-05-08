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
    "revision": "643d5a309822b131e1fc99d045fb699d"
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
    "url": "assets/js/10.8131c35f.js",
    "revision": "32f51c4e465b2b5eaedbc4dbb6fb4514"
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
    "url": "assets/js/32.68c4568a.js",
    "revision": "209f5abb3451eab6e7b3c8b470c0aba6"
  },
  {
    "url": "assets/js/33.dbfffff5.js",
    "revision": "b03bd068dcc2fc1b9ebe7b91ffb66a9e"
  },
  {
    "url": "assets/js/34.f003b3a7.js",
    "revision": "631c31e81538f79dd143cbc10ae8df5d"
  },
  {
    "url": "assets/js/35.a0be7f37.js",
    "revision": "0f3a3e6dc624bf72446116e1e138c2bf"
  },
  {
    "url": "assets/js/36.dd8d9a01.js",
    "revision": "9d4f7ff8e27d60bbe93c4de54617940c"
  },
  {
    "url": "assets/js/37.12679188.js",
    "revision": "204da1c336d0920f74430920c5dfc32b"
  },
  {
    "url": "assets/js/38.38b16713.js",
    "revision": "cb516e98b237d20f9b5df984474ad939"
  },
  {
    "url": "assets/js/39.8e42216a.js",
    "revision": "6b4b14ec86346f7e3e75ffe0e1205d75"
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
    "url": "assets/js/app.a9f4545c.js",
    "revision": "529ff51702d28c45a49a6cdbd751a395"
  },
  {
    "url": "categories/index.html",
    "revision": "9acd82335bccfcd4d66765d09d74c594"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "47edea82e25bdbc6f70864ff08397ce9"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "b586bb349fe9b107027868079605ba81"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "fa176ba40ce262f8910845faf7d2804c"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "622e85dba0ab33e55ddcec031063d549"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "3ffde4b56623206a0895343a4f95ca85"
  },
  {
    "url": "dev/index.html",
    "revision": "5d008779f0f751227cec65d7c53f314a"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "6831bcbfaadd29ea800aaa19da378baa"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "70f9b2424c2593f89fe94a0891b84027"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "c2e842a200252b9747ee4bdc18e582fd"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "c35a8c7a99184198f0e798393f5668a6"
  },
  {
    "url": "dev/解包.html",
    "revision": "a65b8f74c0d23ee5cc9e769e8efedc54"
  },
  {
    "url": "docs/index.html",
    "revision": "0828d2d357009ae418fb6f2676bdfb02"
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
    "revision": "aac576aa8636882a82b91ca823c9d89d"
  },
  {
    "url": "intro/index.html",
    "revision": "2c0d80db336547c94dc3a20daacffc30"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "e58f7048c0eda34134036c56ca77d524"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "13542acf572ac05eb28b1ed75ba628a9"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "6f8d88704f595d2406938027072af7cd"
  },
  {
    "url": "renpy/index.html",
    "revision": "99bd0f2443961cee232fefe05e8955b7"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "1ac5b83e3d47b1cd5ac23254eee4a6f2"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "f34cccb2e618541c035e1b8f87a678f0"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "3d611d88b8a79566105230f4692df7f1"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "20d40c2e312801eb1e1e8664ed90c9ae"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "316384db24c8019bb865e6f13002dc8d"
  },
  {
    "url": "standard/index.html",
    "revision": "696494b8e617345c158a3dbe99fa59bb"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "f5840797fb6b3ec14443ad999684b3c3"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "c398433e3514e5186eae6418eb942172"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "2a6650f4a5f4aa774118d6f738c179b2"
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
    "revision": "ee13786a259570374f45c705bc07acdd"
  },
  {
    "url": "timeline/index.html",
    "revision": "d691b0e6b556543a3ce35f661895dc60"
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
