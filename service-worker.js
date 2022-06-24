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
    "revision": "17a20417fb8cc181fad8f6d1fae0b786"
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
    "url": "assets/js/10.8fd6d94d.js",
    "revision": "67d7953f6e651b1b5763538cf2c05023"
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
    "url": "assets/js/24.26efa949.js",
    "revision": "2d95294be49f564b77db9404cc957ebd"
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
    "url": "assets/js/28.5e6c67ff.js",
    "revision": "9548d528dbe2a3fd2b52b32a603d42f6"
  },
  {
    "url": "assets/js/29.cadab07d.js",
    "revision": "312a0b20019c399f9f8a050c0d746a50"
  },
  {
    "url": "assets/js/30.34ced59b.js",
    "revision": "72218e8063fe8a581996eabee85178c1"
  },
  {
    "url": "assets/js/31.9b53746e.js",
    "revision": "92d89d9402342868fd70f72ffdbd12f3"
  },
  {
    "url": "assets/js/32.67eb567c.js",
    "revision": "139cf0ed1ad56d37840c86f8b259e948"
  },
  {
    "url": "assets/js/33.59d6094a.js",
    "revision": "421fbbbaa33f60fc859fd0072ced0c17"
  },
  {
    "url": "assets/js/34.1f0ec795.js",
    "revision": "843f1244c9e0928c0e74297ecf8cd266"
  },
  {
    "url": "assets/js/35.b97ce0e8.js",
    "revision": "b90a5f11bc8a29936444bf203e407b18"
  },
  {
    "url": "assets/js/36.0d47c52d.js",
    "revision": "55e9634ea716ae4a57ee6a5f15bdd7c0"
  },
  {
    "url": "assets/js/37.9c3d0669.js",
    "revision": "7bdb489a60f7c4f3021b591852d759c6"
  },
  {
    "url": "assets/js/38.8afc32b5.js",
    "revision": "8671e88afd58d0ebf8c8de2f9d7d4bcb"
  },
  {
    "url": "assets/js/39.82cc6278.js",
    "revision": "076ab3e7d2feeb3bc1db4c2bc81907f7"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.35ef005c.js",
    "revision": "8f1fc1a8f708c66a56ee28e183f62547"
  },
  {
    "url": "assets/js/41.c8b5eb69.js",
    "revision": "7fdc6a910c685dd9bf7c4cfd98fac655"
  },
  {
    "url": "assets/js/42.40e7c1c9.js",
    "revision": "e4ab945d569a66a68f9596ef332568fb"
  },
  {
    "url": "assets/js/43.0208aa81.js",
    "revision": "d45ba76bef6d566d592208e2bd8dc7f8"
  },
  {
    "url": "assets/js/44.87492ca7.js",
    "revision": "122248d73e5ea2fdbb6d34002025ec18"
  },
  {
    "url": "assets/js/45.1e62ff91.js",
    "revision": "e088e9d93c9dd6bfc321617e74088568"
  },
  {
    "url": "assets/js/46.553abd9c.js",
    "revision": "3f0aa9b7bcd7c4f8d2060e30ac804494"
  },
  {
    "url": "assets/js/47.75a3771e.js",
    "revision": "8c920574711d63c397205d13c7ecc7e8"
  },
  {
    "url": "assets/js/48.123b45b6.js",
    "revision": "90bd183c29a68b72d3fa5344ba94b093"
  },
  {
    "url": "assets/js/49.3d1c807f.js",
    "revision": "dbd37b464c1ea0a24de54d02bc4e0565"
  },
  {
    "url": "assets/js/5.9c162e0d.js",
    "revision": "5bce9a0508368fb3d0fc900aef2911de"
  },
  {
    "url": "assets/js/50.ef65ae79.js",
    "revision": "ef65a90b01d0d68acc4c94e2cb4bd37e"
  },
  {
    "url": "assets/js/51.051d05a1.js",
    "revision": "0979780dd2273b1e1cb5252f9f0cd9f5"
  },
  {
    "url": "assets/js/52.e5abb653.js",
    "revision": "dd9501dbe6ee1a98fe67cad02b48dc82"
  },
  {
    "url": "assets/js/53.e5a6bd43.js",
    "revision": "ca89b68df7a949cee67c50f89b42de5c"
  },
  {
    "url": "assets/js/54.210e026a.js",
    "revision": "6ecb01ff3570bf537c16c528b471e55e"
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
    "url": "assets/js/app.bdfdff1d.js",
    "revision": "8025af601f7b44d405a40ed7e2adf088"
  },
  {
    "url": "categories/index.html",
    "revision": "174127bfd7389e3ce60626d6d678fc7a"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "bf1746192a5b9a44bc96bd7a7a433b1a"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "01899cba28207145c76310e18e96786e"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "7b006095f18f344a5ac5254c9ac84f76"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "6fb5b5b57501bfc8b372777debc6d82c"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "5c198415335053d54d7b2acc71b228e2"
  },
  {
    "url": "dev/index.html",
    "revision": "9c06fa0de86cb39850f1de5f3d6911f6"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "89f4ccf5f01da8301d1eed4303ad505b"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "8893f99adcc28bd2039fab954e1315e0"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "f314780d02574839072aee85528b7ccd"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "505f7697700a16b8f9d515a2eaad162b"
  },
  {
    "url": "dev/解包.html",
    "revision": "07ad76d75254f875768036213cfd76aa"
  },
  {
    "url": "docs/index.html",
    "revision": "057be547686734eeac0ed49c6167a7a7"
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
    "url": "images/renpy/ATL动画和转场/trans01.png",
    "revision": "920a394daab7d515ce454624a585b8c1"
  },
  {
    "url": "images/renpy/ATL动画和转场/ysr006.png",
    "revision": "526713f2e640715e651bf90388bf3c87"
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
    "revision": "714ef3804d9128ad732d6008154b6559"
  },
  {
    "url": "intro/index.html",
    "revision": "00f922ec0959dd71419bacfad1618657"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "f2e4151cb3c767a216a7f779e22f172e"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "3eb262280d4615c9ccddc167c0d27635"
  },
  {
    "url": "renpy/ATL动画和转场.html",
    "revision": "fa18e886bd5cae76176a2c5abcdf6ca8"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "665c18789a56af3b746fb898f5a13d86"
  },
  {
    "url": "renpy/index.html",
    "revision": "6a8e4e26462dbfac760980293a3ce397"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "c9fcaf7103cbcb825ecab66b92e33ed2"
  },
  {
    "url": "renpy/Ver1.0文档结语.html",
    "revision": "e01e61fa1aec3ea18df06a553c1cf33e"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "8f456494a502c2377705b1a1dad319cd"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "b1e1296d849d479a5a921bffed0c54c5"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "17ef1f1fc87c381b1079848d4ef7a26f"
  },
  {
    "url": "renpy/制作剧情回想.html",
    "revision": "2014494cd6a111a9eaa5a7a0da9b514d"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "3a7f66ea6d76845899cc95e29c0692b6"
  },
  {
    "url": "renpy/动画效果制作——CDD篇.html",
    "revision": "0652cf3c1f832052558b81381df9baee"
  },
  {
    "url": "renpy/动画效果制作——基础篇.html",
    "revision": "e0dcac935ad58553472901f65931d4ed"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "dad535d27b56dc085b286147f1220daf"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "6e7945f3807a16f99e550d38e544fb99"
  },
  {
    "url": "renpy/导航.html",
    "revision": "91493bf23c135230b529abfaa2558709"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "b62de490571e1ef9cbb26cbf1976e522"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "b66527f30abf27c1f31fd7fcac7fca11"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "2a41a8d78c73d93fd55c66b1f167fa80"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "2527bb3809f929d90767855edf9dccfa"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "479b2152e50bd5de9925200f3e1f2604"
  },
  {
    "url": "renpy/附录：小技巧.html",
    "revision": "2d943efd3c026d93e1005550a7e292e0"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "e327e641dafd57360160994596d37a6b"
  },
  {
    "url": "standard/index.html",
    "revision": "b5eaeca4e1725100fe74c4671037b9cb"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "a5808f670e58f6c42c6215a83e1a79af"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "d319601655e0539505b36b70d96be04d"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "c2f11416cfddce458c6dd4041fbc89cb"
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
    "revision": "fafe9733b3852998bc2703397bcadc0e"
  },
  {
    "url": "timeline/index.html",
    "revision": "c82d5664a3c4b9568f1aa77e7ec82d12"
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
