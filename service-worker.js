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
    "revision": "9a000b5c3d918f90e3b422278f7c50c8"
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
    "url": "assets/js/10.284e6d43.js",
    "revision": "010f679ee7c00640293509d379da6a2c"
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
    "url": "assets/js/32.2262e378.js",
    "revision": "a99c14633c343e51ae90f70a1aa31121"
  },
  {
    "url": "assets/js/33.11cd3132.js",
    "revision": "1c765216ff7b68741d7f6230800cdee9"
  },
  {
    "url": "assets/js/34.6ca57c78.js",
    "revision": "e81e24ffd7f22acc72f9c0b9a686cc8b"
  },
  {
    "url": "assets/js/35.315cef43.js",
    "revision": "ea2fd0c0f2385c282c7752ea21dab97a"
  },
  {
    "url": "assets/js/36.5aa2d893.js",
    "revision": "5c27bda992817aa265bd68df67abf03b"
  },
  {
    "url": "assets/js/37.e23dcfb4.js",
    "revision": "1bdd314dc3b93353bd48018ac26d7867"
  },
  {
    "url": "assets/js/38.0cc21c75.js",
    "revision": "1dc75c0a4101da4646b06d1eda5f3a35"
  },
  {
    "url": "assets/js/39.a59cfd97.js",
    "revision": "72b6a2e6416eaa92b0566415b5e2486b"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.edb6d986.js",
    "revision": "6dcb73f75c8c88c3f9ce31ddfbd6cfce"
  },
  {
    "url": "assets/js/41.8d0e57f6.js",
    "revision": "040f45e0c2adf31bbcb166d49ce36c65"
  },
  {
    "url": "assets/js/42.f047142e.js",
    "revision": "67e56cee198d5041413fb6c9c4b760db"
  },
  {
    "url": "assets/js/43.a82213b9.js",
    "revision": "0a6e315af6fbcf5327587621372550a7"
  },
  {
    "url": "assets/js/44.3a802d88.js",
    "revision": "9faef0e0e5df311e6fca3fb7a01514c6"
  },
  {
    "url": "assets/js/45.abb48984.js",
    "revision": "55903341eadbfc3b4662604edd217aa4"
  },
  {
    "url": "assets/js/46.152fd3a0.js",
    "revision": "4631a4feef916cdb8dfcab259b82665e"
  },
  {
    "url": "assets/js/47.f84f3652.js",
    "revision": "05be01ff1a060752f9bab17bc07d5e57"
  },
  {
    "url": "assets/js/48.0bc64877.js",
    "revision": "6c0e1d5320ffe0eb789572a1c9058ad8"
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
    "url": "assets/js/app.c68638d4.js",
    "revision": "82b66eb63e1545c7eb8dd1aa46f9a272"
  },
  {
    "url": "categories/index.html",
    "revision": "7e9614734173ba32c6042c767b289974"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "b65f2eb7395358f03c7276cd02614412"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "d51fd53d45e1997f2eef365ce2a16eaf"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "196cdb278153ce4f59ea5b51dbb7ec45"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "2e1543f23b3fa860f2e7ea23fab8cc74"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "5f952089c09279820c90c945310b4991"
  },
  {
    "url": "dev/index.html",
    "revision": "6944bd833cc473aa6d90b25039309854"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "15b4b0406e955c96da4554a518499031"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "476aa4b9c57183a6ee50f93521b1bcda"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "1293e2d05b8eb757f35eadf2aaf3e46e"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "08051d2280827af2020447c3cb3d83e8"
  },
  {
    "url": "dev/解包.html",
    "revision": "f03e8c5cc2ff4fde71d43d27a11870ae"
  },
  {
    "url": "docs/index.html",
    "revision": "b3b944ea7db8d0ea7c16de264f2651be"
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
    "revision": "888a8456c5d271a92f3bab2161b34940"
  },
  {
    "url": "intro/index.html",
    "revision": "5972e8ec24798866c4e7598a3830d851"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "60332ea0b82b0861a580a0ee0256625b"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "0ffbe0f95d1a4915d8f8ec83b03246b2"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "934cb713483e9cc9fe80891e76b49c0f"
  },
  {
    "url": "renpy/index.html",
    "revision": "dd6199ecfea5af6d898a6a37a16c5724"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "e1b8ccb9a100a0ee6860a489e0808587"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "f12817f9faaf75e0a71db4cb453c8fe4"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "adab0e4ac75c4fea47b4d15b2b9e21f0"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "284bd0584aee4008e012e5a6e696d92b"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "05c6006be900e997f7376efac9b7277a"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "ffdcf7ce3c692730fd7a1f75b8613a0f"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "54772995cfbf0cac1603d0e5737de26c"
  },
  {
    "url": "renpy/导航.html",
    "revision": "a95b92d9580d5a39ca920b5369322ea0"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "2e831accc040b027e63dd62486c8f376"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "d7644ff5dcf8e5ccb81d3f0ebbc1d1ea"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "3a3174e72691bca9eb058d2581940e6b"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "e912cbfcb4f36014d2aa05c1317f1601"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "9d172c6cd6f78188b040c88ba33a7504"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "39b28dabe0723223ca6db3cc2bee76ec"
  },
  {
    "url": "standard/index.html",
    "revision": "86a0601e4dfc741acec460a3eb5e4d17"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "13687b8f19e383752e25dde47a9ddc9e"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "d44970ecd0ae6e45691f4f4830d7ff43"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "8864dfb4073c470c27c070d1d9875ff6"
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
    "revision": "80d1eb6beada0f000a37a1a4b1006de1"
  },
  {
    "url": "timeline/index.html",
    "revision": "e24b22439c0903d04982b7af74f16acb"
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
