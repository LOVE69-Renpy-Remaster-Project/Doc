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
    "revision": "ddae8e537f8b8e925f301ad4b39224a9"
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
    "url": "assets/js/10.ee10b35f.js",
    "revision": "4490254523dff77a190f32e28ece0093"
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
    "url": "assets/js/37.138067b2.js",
    "revision": "a6306d83fb5ce274cc22eb81e56330f1"
  },
  {
    "url": "assets/js/38.8d73da5e.js",
    "revision": "39db73ba578dca722dd1f313afff2dc6"
  },
  {
    "url": "assets/js/39.a8c7f371.js",
    "revision": "79da3159feecd3fd5f7776c1abd55f6e"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.3d51bd3d.js",
    "revision": "f6995363873ebb1b6020f68c7f9f9c67"
  },
  {
    "url": "assets/js/41.07a9e789.js",
    "revision": "37301f4b1f943c92e1dddfac7af51504"
  },
  {
    "url": "assets/js/42.e93e3727.js",
    "revision": "1e8c7a1756c49cc3b7e4c8540fe5f1fa"
  },
  {
    "url": "assets/js/43.4c772300.js",
    "revision": "0371e3445a0893321dd701148d5dae4e"
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
    "url": "assets/js/app.bda79b84.js",
    "revision": "6a68b8d6e12087c9f1fdfc634a39f5d6"
  },
  {
    "url": "categories/index.html",
    "revision": "731fdfff284780953b183878965e6d87"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "fcb963940d6874f4dff8cae63f8b5069"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "59f69429911b05163d33552ce1320f84"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "c495e3a0b1f3affe22f9ae2641cd4771"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "a35eed85d3907dec7774fd62f8f81ff7"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "2b75bebf241c4848ffed9d28a83fa5c3"
  },
  {
    "url": "dev/index.html",
    "revision": "281a1759e945b9a99bb8d1519990b887"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "5ce12195e44d8721679394af6bd55dd3"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "e48e6ece924ae69965131ea2e99de5ee"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "c0be9bcd66b71bec94645c9d6a8657fb"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "5b34f10d1cb82f51c26bba832533fed6"
  },
  {
    "url": "dev/解包.html",
    "revision": "c452cec5dff645d9a2b3b01d08f29c97"
  },
  {
    "url": "docs/index.html",
    "revision": "ad0398c3249c3ca2f09ebe0a36ece3a6"
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
    "revision": "561830fb1c5fcb2b2ac50c24e2a61a21"
  },
  {
    "url": "intro/index.html",
    "revision": "7a461c391d7af6e56486d3945c005576"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "d93e75c7f99c038430b6033344ec8bbc"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "3f78707d528d50c926f5f858eed8b1ee"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "749bb09ca6b9edd6c9749e277b9dc685"
  },
  {
    "url": "renpy/index.html",
    "revision": "1d550a22d27eb6b201ade53ffa81da93"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "fc6ea2b0a6c375770eae9723afe3bb69"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "373b7cee418955128cbd329f9b011ffe"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "54bea7d328825e2f6beccb4e1a6b030e"
  },
  {
    "url": "renpy/导航.html",
    "revision": "bef2f4e625ee1248eabf755a41e068d6"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "385799d7c9e363b35fa52798e2e08eb6"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "4967d9520dc0a5fba79979d46157973f"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "9fa87d8ef9509a43735a296ff7a06dec"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "bf70581910df1b849c7bf9b58a2f3690"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "f1e45209947e8e4d0cadb40a1623ba1e"
  },
  {
    "url": "standard/index.html",
    "revision": "d52b9fe20de628d906b51ca68be86779"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "fc8b57c58abd2758b922fd5fa2ffde30"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "f772d71d2f820d8e7a370866263f3590"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "d08b66b1bcc9a44ab533a245d35c7dcb"
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
    "revision": "8b1b79351bb0c8566d85f4ee2aa6cf6e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba116d9bf2f35d70a81eef736cc3ef47"
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
