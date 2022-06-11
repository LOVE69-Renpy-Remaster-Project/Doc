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
    "revision": "a9bbb60affa81f3a7be8f570ba8969a3"
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
    "url": "assets/js/10.064b0275.js",
    "revision": "132f247f05f1bf82afe616d4e5cc4173"
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
    "url": "assets/js/42.7a80abdb.js",
    "revision": "c385b99faf5e028b8734523830b71243"
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
    "url": "assets/js/48.41eed792.js",
    "revision": "1da43ff19b92f0bd9cce6770a2253646"
  },
  {
    "url": "assets/js/49.2ba8fb3d.js",
    "revision": "165fc81b506876bd9425cd65c39e78ec"
  },
  {
    "url": "assets/js/5.9c162e0d.js",
    "revision": "5bce9a0508368fb3d0fc900aef2911de"
  },
  {
    "url": "assets/js/50.54d59ed7.js",
    "revision": "cbc215559a4b4574a604998394bda44a"
  },
  {
    "url": "assets/js/51.fa79470d.js",
    "revision": "c9c164280e6d96366381f67cce8e7965"
  },
  {
    "url": "assets/js/52.70bc9abb.js",
    "revision": "26f86bbd1e720658dd0dde356675716f"
  },
  {
    "url": "assets/js/53.b26429b9.js",
    "revision": "760d5937ff25b5ec17d835c7e05664e1"
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
    "url": "assets/js/app.532208de.js",
    "revision": "4a16a6c94cc717385c544d0871923b2e"
  },
  {
    "url": "categories/index.html",
    "revision": "636c81d5da1e9a5f589d370093a9afb8"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "487d523cd2bffae9bb51d5f24d5d6967"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "c74dd2d938bfc8e2717d4736bdb64be6"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "619b9f68a70696fef2349ef2894af91d"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "19da4d33d1d7e363e7a25b158ae93aa5"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "a7e58cdb43fbf7b5903912485739fb78"
  },
  {
    "url": "dev/index.html",
    "revision": "cd2eb9219adf2433d71e14d38a049862"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "9978a20505a101bd02d3620d21667429"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "7b06917128fead12f412db0722af6c85"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "e257c3e354210a80d96b68d101e4d64a"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "1e2b31e0669b8597842e674c09c37a3e"
  },
  {
    "url": "dev/解包.html",
    "revision": "c9554a2f22571552f2cefbf76c5aac15"
  },
  {
    "url": "docs/index.html",
    "revision": "04d325be97ad39fd4ad25fb3eafeea11"
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
    "revision": "d843516c19833d8d3876596c69fa410d"
  },
  {
    "url": "intro/index.html",
    "revision": "f927fbd8758ce2d1cfc7e030ef4f23ca"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "4e532ea28ddc30a8f89771d83a10c2be"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "c59948127f7953312914582a18104e02"
  },
  {
    "url": "renpy/ATL动画和转场.html",
    "revision": "b64aed41bc28e48edcac775a5d6e3ec8"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "97407e2b643c81adc56472989e57c65f"
  },
  {
    "url": "renpy/index.html",
    "revision": "b44168e688bb1c425570e8568d10b7a0"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "89943a3d222e11da7628154a47f25ad3"
  },
  {
    "url": "renpy/Ver1.0文档结语.html",
    "revision": "15adbdbcc65fc19fa792e2f52497409e"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "41e2b323b280de26537bfb7e831a094a"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "775558f33aea9ff24128581790d8518f"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "2fac6686753f2ae190672a598863f525"
  },
  {
    "url": "renpy/制作剧情回想.html",
    "revision": "1493c919835acb16d4b4b994ea3c6494"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "f54dc645f638aa124bfc8a7a7e740477"
  },
  {
    "url": "renpy/动画效果制作——CDD篇.html",
    "revision": "4894e7138961533cd0b45bad488d7f6b"
  },
  {
    "url": "renpy/动画效果制作——基础篇.html",
    "revision": "4642e384653d756c8fc11bd3118702f4"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "b00dcdea7bf497928efd0dd5374f4be1"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "744d465cb11ae98994f7af1802f48d9c"
  },
  {
    "url": "renpy/导航.html",
    "revision": "2a1e59d9275c4cf6d3793f92b5bac9b5"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "c27fcbdc7cfba3607ac21000ce407c05"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "b86d66d7608151e8ee7cd9b5fc374e3a"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "867459dfb48c83e90dc80e27382572b8"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "95e12ac82ab1baea558ca71bf7a2ea25"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "415e6e7af7e76c7235429486114850a4"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "2d5c6080710fce3ed106fb46f2c934cc"
  },
  {
    "url": "standard/index.html",
    "revision": "2107d5e5f158f18e63b31ca07817b536"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "23bc03058670125db6910874479010b4"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "4e646842c8a1e06b744998a9fd4e8a87"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "c98d9c7138aeafce5ac264eb3704ce92"
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
    "revision": "312b581435ca7da8d1a9be1d435a082b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b5185baa7475b3224ca772775a3f89b"
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
