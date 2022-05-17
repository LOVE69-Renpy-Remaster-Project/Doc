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
    "revision": "f951c14a2b65a6926f3325b0afcc40a9"
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
    "url": "assets/js/10.98e4ea4a.js",
    "revision": "2dc3ca21a7fe4476baf9cac7ae702e09"
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
    "url": "assets/js/33.0c8915bf.js",
    "revision": "c0f6f5bd194ef6475ceaa480a966481f"
  },
  {
    "url": "assets/js/34.9c0d471a.js",
    "revision": "075db68731031a4aad5aeff6e4d1ac66"
  },
  {
    "url": "assets/js/35.e6e22ea8.js",
    "revision": "d3fd915cac6660039a6138c56dfebad9"
  },
  {
    "url": "assets/js/36.94dc8b60.js",
    "revision": "9aeec14da5c16beacd5a50858cd220f8"
  },
  {
    "url": "assets/js/37.4be6efd4.js",
    "revision": "d013ea60e5ab03c47956311df0c879b5"
  },
  {
    "url": "assets/js/38.26bc6c26.js",
    "revision": "b62f7a569d81a8fb0b62473c8d24702b"
  },
  {
    "url": "assets/js/39.9fbb5ca8.js",
    "revision": "317e27079fdafd3c255e551d3b0012d1"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.ef023551.js",
    "revision": "86547302f238ad0407e30929470e6176"
  },
  {
    "url": "assets/js/41.22b4318e.js",
    "revision": "0d8514a9bd7ce88e30142485639665ed"
  },
  {
    "url": "assets/js/42.84ced1f9.js",
    "revision": "d094604ee4de6dcdf813c5dc1e05542e"
  },
  {
    "url": "assets/js/43.4c7dd758.js",
    "revision": "559feb8ef4ff8f521494091fef6efb8f"
  },
  {
    "url": "assets/js/44.3426420b.js",
    "revision": "79908f255292bfb36f160a565c61233a"
  },
  {
    "url": "assets/js/45.78b12228.js",
    "revision": "ceb93ff6e9a1564286d6f002ffb2df5d"
  },
  {
    "url": "assets/js/46.5be03644.js",
    "revision": "b6198cd092fe8ba937ce1cc7492d5a4b"
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
    "url": "assets/js/app.3d24a4a6.js",
    "revision": "51d9495a9acc18d8ac65f6179638d6ba"
  },
  {
    "url": "categories/index.html",
    "revision": "1d4041a1b348ffa0fcc849c325081192"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "f40f25c90043532e80a1e4a1666892fc"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "50cf13983359e7581d2f30fbc36d4dbd"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "7a590e068269e7ca564f73c1a98206dc"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "e5e034510fcba39613e6858208ce2bbd"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "89b65942644f1db82c8c4f6a1f0b7a91"
  },
  {
    "url": "dev/index.html",
    "revision": "ba177d08fe84f3246f535a145c3f86eb"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "88a3b7cbc7998a93770885d71a0f9e41"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "570e04f705542b5a340b21ff91e0e8d2"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "28223572fd4fdaad076fc6cd9df84454"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "4f3afdd6d44e2464edc6411fd334642e"
  },
  {
    "url": "dev/解包.html",
    "revision": "de5422824e96231e49fc6ee1622916d9"
  },
  {
    "url": "docs/index.html",
    "revision": "12ca9d43209bc03705f6b6a95d8b68ec"
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
    "revision": "83cefc3ffe2224afac6b079480a15202"
  },
  {
    "url": "intro/index.html",
    "revision": "09711001620d85d035f3416ee03307b3"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "da014870a4b6a4775b4790f3dfb74e98"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "1f555c1045f90877e79ebbaf29ce23d3"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "debde9e85e7cae3cbb00408771a50bbf"
  },
  {
    "url": "renpy/index.html",
    "revision": "8a5a1615eedc718276ede3517344ebbe"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "287bbe7d8d558f65fa760a4127445e8e"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "a039be2bc329cb6d18e77d1ed127a3b9"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "5612684270ea804e3ddc809c07a1ccfc"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "c278e1ac79db9e247cd26516781fa540"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "b6ef45e27fda0c7d9b141d4851c51c0a"
  },
  {
    "url": "renpy/导航.html",
    "revision": "74051d3eab2baaa16c005e63fa6f7b04"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "db13120c40fb76485c854e6f90ac9446"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "d646d7f9086e2fd2eca7280897988dc9"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "f8406bd9c319251dbf7ea4e876769083"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "e8430e1ce41505fc6d7cff06be3e96ed"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "eca4d3f81018765bfdb31aebf3454e52"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "2c629086a3bb5076174ecc9b9d9d5cad"
  },
  {
    "url": "standard/index.html",
    "revision": "42f814b3b800b07b1e80c200e760b9de"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "0a9ac5f09cdc79e1e2670b1e45313541"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "e464dff4e739e1c0deb71d69225eac51"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "b8b02ea2a394b8d06602f12671a523c4"
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
    "revision": "58eab0b5d4dd6ad686a4f85f5c13d3f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ca9190a656b6ac70d53778fad5c4789"
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
