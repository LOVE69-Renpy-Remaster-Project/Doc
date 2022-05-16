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
    "revision": "998d4a6ebc785b4249e376093302626c"
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
    "url": "assets/js/10.276d84cc.js",
    "revision": "126058b5a185daec981fe336b834668a"
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
    "url": "assets/js/33.d20ce0a1.js",
    "revision": "75f2075766192ea25944ae6a16149e64"
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
    "url": "assets/js/37.2a3dfea2.js",
    "revision": "c5ad2ef69e06d667c35fd7582754587a"
  },
  {
    "url": "assets/js/38.9f689cf3.js",
    "revision": "57e9dc85935b8d3e23fa1633c0e5453a"
  },
  {
    "url": "assets/js/39.46ac5c6c.js",
    "revision": "647fadb2abc2a923226b5abe0d3d6a17"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.2b9c6d0b.js",
    "revision": "0a6299eea8b5b986191ded40b0ef3d46"
  },
  {
    "url": "assets/js/41.56ad0af1.js",
    "revision": "d99fcac272b34e737cea4e7db606bd5f"
  },
  {
    "url": "assets/js/42.b1d980f4.js",
    "revision": "a57000a352021a0a782dc0b08d198623"
  },
  {
    "url": "assets/js/43.85472918.js",
    "revision": "bb54df1b6eac2feff57023ead02681c2"
  },
  {
    "url": "assets/js/44.181849df.js",
    "revision": "ea6bd0175f9d7fa6767436a4fdc2449d"
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
    "url": "assets/js/app.3e9a676a.js",
    "revision": "d9c290ccfc566742ce3a3dbad5e140e0"
  },
  {
    "url": "categories/index.html",
    "revision": "e17c7e871d28bd25a97a86efc4e86386"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "2c62370c73860b31cc9756ed5500fb5d"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "803f3b1dce748f5e23359c03caabb98b"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "da9a2eab262c03706c7d87c5a31ae7d4"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "b05b7f68c67ba195616f300f4d141b27"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "8369a0a061ac0e7249e178dce6cf2f78"
  },
  {
    "url": "dev/index.html",
    "revision": "213aba5825797ad84d653e9f99af81a6"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "5ee21c2359aff8040f8ec5e72ddb0f1d"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "50119438a510538aa3bfce50dcafc871"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "7731c68d401edde066e99f7873e64f61"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "a7681581a3617a94a3f910d936f2030c"
  },
  {
    "url": "dev/解包.html",
    "revision": "eb412d5626a62e18a7398404fb14f1b7"
  },
  {
    "url": "docs/index.html",
    "revision": "97b97cc38e184eb39dc8bdfaac7a0263"
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
    "revision": "9317b3a64b894d83f90e8f428795f103"
  },
  {
    "url": "intro/index.html",
    "revision": "184b8d8f2b448c453c1e09f41e4e3d6c"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "8c1c451a8dd6483d373a4d04fe311f68"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "f46975ba491d69053f8f1bbc83137f30"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "2f13ac78907060eced655262a7abb8f1"
  },
  {
    "url": "renpy/index.html",
    "revision": "5262f3ef5be450c9e8fce96f4c84cffe"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "ae763c814ab0dae539f320c7adbaa895"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "ec75b4d72c506ddfeac4c4847f1e7279"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "d11df74b68507c5b341c0c2b12ec0540"
  },
  {
    "url": "renpy/导航.html",
    "revision": "66e06a489f60dfc5d8bff0119fc76ba1"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "1d4552ccaf1106a5e935239c07ae81ec"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "00dc1b127786e0ca63bf500cf52223cc"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "642e7b7103fb57853a0caca8cababc15"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "89df4d3739f4c606401f0600fe9f6caf"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "1a62044fd4047c3804c0c10fb589d922"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "28292fa94bc2ddfbe14457c8cd2be708"
  },
  {
    "url": "standard/index.html",
    "revision": "273c5f3e9dd8726266495160b9ffe4dd"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "cbf9f064ce23249554921aa156cfb6fe"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "0ed146179cc18a491be96aeb6d47b83f"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "9016efdcd0b03fa3eb43d8bfa3c57260"
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
    "revision": "b09dd4e92a9e3c7e67bfd5449f0dd45f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4d965582a4236657296803fad430afc"
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
