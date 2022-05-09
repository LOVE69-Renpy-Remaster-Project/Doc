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
    "revision": "255685b94a73074f9460082acfee1b79"
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
    "url": "assets/js/33.501d34a2.js",
    "revision": "9e054e3ee94c5faa81d95e01bfd2c259"
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
    "url": "assets/js/app.34c80b4c.js",
    "revision": "dffbc800abf6d755647894484268f1b5"
  },
  {
    "url": "categories/index.html",
    "revision": "f4ee4708c1c850c37478b9fd01b4fc4d"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "abbb6763c4ae5ade872652370beb8c2f"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "9fd373a4f2037088163f8da44469dab4"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "baef8cb091428cba82de1127ec488b48"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "c8416083000e4fde4dfa10ad39950414"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "ef1e6d6a1a16e3ab5c1c05d1612648f7"
  },
  {
    "url": "dev/index.html",
    "revision": "a555cdc0e6753d9cbb177fd69412a82e"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "5ab25754751a9883995ea0a5531ab248"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "c95747271ae03898bdde0c34690823ad"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "40138fbdd88974b5c17efd55d784b9fd"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "245297118f2b57d5edbfb83ae73c76d0"
  },
  {
    "url": "dev/解包.html",
    "revision": "8720964bfd332fd8dce845cfa13cac22"
  },
  {
    "url": "docs/index.html",
    "revision": "930ffa1da990ee9adc805c9cc2935f58"
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
    "revision": "b3fb3a423ae2f127c4e54c11afd64c6c"
  },
  {
    "url": "intro/index.html",
    "revision": "6dca67e0e44d262bc57970e689f44258"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "9b5f5af995347305e45a7bf6e933d29c"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "07d9bc1250d9efd9741914eb7ecee2a4"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "31a3e6118bb376510eed9f4e583cc916"
  },
  {
    "url": "renpy/index.html",
    "revision": "7dcc1624b90238824d868afc0ec6b254"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "31f6ed9fa2d8a304386760a1459c6584"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "756d18cd7f24e3f82e071ae778e7e2db"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "c0ee0cef815d7c2aef2bab67db9cfb2a"
  },
  {
    "url": "renpy/导航.html",
    "revision": "8ef6c5d1e87e7132b84dc065b9122132"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "ee44c95498285649893136a0fb7ca2e5"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "33ab53bde739a45aa90bfb4f4a2ba48e"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "628082b651a226063f015bc513f21692"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "59c8e4bf53e62cdc6ffb36dd6b69b71f"
  },
  {
    "url": "standard/index.html",
    "revision": "b481a6a067d527ae762417f26cc4819c"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "736b12d05a2e95a58fef6b480308c1a5"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "7287f451958551b0c62957901ad19b02"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "3791bdfc8ff91f18cd2b1f05fc6b6c0c"
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
    "revision": "8be6fff99dbc80239ed06d671ca9c57c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6fadc18486ea2bfb94d51342b8e3189"
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
