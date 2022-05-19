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
    "revision": "35d207855e8d34f42523ab5d617ed945"
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
    "url": "assets/js/10.43678ccd.js",
    "revision": "04b0dd7e43183573b545880431742455"
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
    "url": "assets/js/34.b82841df.js",
    "revision": "494409068982ce2b4406342ccd2c11f2"
  },
  {
    "url": "assets/js/35.564a3886.js",
    "revision": "c801fc724d544878de5716a1fae6e75b"
  },
  {
    "url": "assets/js/36.709737f9.js",
    "revision": "7033fde53683509fa73359236889a9bf"
  },
  {
    "url": "assets/js/37.49b2c2bd.js",
    "revision": "98cc4185b8b2c61d0998a977fc6e8c52"
  },
  {
    "url": "assets/js/38.bf5867bb.js",
    "revision": "11a00187e2d36d50be1c6191514dcc38"
  },
  {
    "url": "assets/js/39.61f67cc7.js",
    "revision": "8822b30930db8029d58b0e1ea97f6e50"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.ac792245.js",
    "revision": "1fc68e408fc942a272c9c663e0a51619"
  },
  {
    "url": "assets/js/41.d63baad5.js",
    "revision": "b95373cde4f0b4d04d51deb13f087ecd"
  },
  {
    "url": "assets/js/42.cc94ed78.js",
    "revision": "e6163073cf12b8d0fdfcf99d716e7c54"
  },
  {
    "url": "assets/js/43.4b808ed3.js",
    "revision": "3dc592328fcce15f550da2ec78940916"
  },
  {
    "url": "assets/js/44.37e640aa.js",
    "revision": "ed60e4468c202228b3362ef9f479982a"
  },
  {
    "url": "assets/js/45.41712258.js",
    "revision": "16dbb0f17a4c60bdd127e9dd10352f7f"
  },
  {
    "url": "assets/js/46.a075f8c1.js",
    "revision": "f2b01c62ab970512a5b5d8561ef2c519"
  },
  {
    "url": "assets/js/47.8e4cd6ea.js",
    "revision": "6f2b9d6b430a61b3fa112f29b7b9dbcb"
  },
  {
    "url": "assets/js/48.79f90cb3.js",
    "revision": "6dc86cc9b6617a3320046a58af44603d"
  },
  {
    "url": "assets/js/49.09d04317.js",
    "revision": "3d32cde305262d3289dbd476cb5c84f9"
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
    "url": "assets/js/app.1bdfe379.js",
    "revision": "5f9efa2664bea984214157d9a4326c98"
  },
  {
    "url": "categories/index.html",
    "revision": "bda65b9087f6128d86be3100e28a59bb"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "beeed8887f4ee65a134de7df7d06177f"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "5145a54f34b027a4e611ba53ff7b00a9"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "f5790bf0c7f8b07580b9f071de2eea56"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "47427d069a606abaa4baadc0fa9c36ba"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "0e596555e5e7570ef3afe6ffa12a8f91"
  },
  {
    "url": "dev/index.html",
    "revision": "145f6bab93d72752500de7e8f4d69ab1"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "2ccb6a3024652cb5877cfcf9e132468d"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "f9470596b496277aa4a0e514e393424b"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "13f9239a2de2e22c5870247392453968"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "c963740b53227b4a29277cba115ebb46"
  },
  {
    "url": "dev/解包.html",
    "revision": "e777b75286eed4d7a85c7c9a974a8038"
  },
  {
    "url": "docs/index.html",
    "revision": "95478f587d9f81ea694dca947c317859"
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
    "revision": "8bf5e7bddebeb226d6a8330ecb66d228"
  },
  {
    "url": "intro/index.html",
    "revision": "8a85da81c0a972e28a33cbac73556afd"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "67e90526cc65f6e6530507cf04d21a0e"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "41b558656015d07eda9950f5ebeea359"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "926119b10ce0df9a62a42414c82d8d4b"
  },
  {
    "url": "renpy/index.html",
    "revision": "1c27e7f3c3b54621f296e99d1277abeb"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "52eaadd88add6c17cc91a0e6f084d58a"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "13c648bebeb366b8cd0ba2913769a119"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "5832828f398e66b6cd7fab052714aefa"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "663919978b77982d17980b8c3a058d9b"
  },
  {
    "url": "renpy/制作剧情回想.html",
    "revision": "d4ac8fd99aad52ead80af6b04f4f7292"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "04fbffc40cf122bd5419626493caefe5"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "460ee0812c66276e165e5b91ddba80b5"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "640028d1cce9fde632b9a0e6a38bd385"
  },
  {
    "url": "renpy/导航.html",
    "revision": "e93c073c0c06e9129d8154751f1abd2a"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "d356e40ec3696476e0201de13a2aeb23"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "0306a52723ed80585474c092afb833a0"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "ebbd3537dc0f20c5e3c79d984c7cd18e"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "4a213261d24cc51ea33edc2ec7ff3360"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "478406e7fd7c76076518a4bbd5799468"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "0f033cb7b072a7494cdca07109e5e535"
  },
  {
    "url": "standard/index.html",
    "revision": "169a8281bbec717acc6f10458c3ba7d5"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "883fa66ee8936100ce1fe17846e58f35"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "b8279a86b20f6ea1ce88cd828a6e5b32"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "4b3012ed60016c384c517643b3554307"
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
    "revision": "aaf29c17e49af2344f66e199cce1a569"
  },
  {
    "url": "timeline/index.html",
    "revision": "ccee84e4ba7996df2c5912916d073878"
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
