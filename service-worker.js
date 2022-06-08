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
    "revision": "d7ff2d43b357364b3e1a189dffa0a4e1"
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
    "url": "assets/js/10.c9aeae69.js",
    "revision": "4848726c8a6ae81b44b323604ae701dc"
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
    "url": "assets/js/36.8e744c13.js",
    "revision": "05e76765f3cce6c233bc077c649d70a2"
  },
  {
    "url": "assets/js/37.895d32c5.js",
    "revision": "d21af6876d29a5913d87e38248749cb9"
  },
  {
    "url": "assets/js/38.0cb1de32.js",
    "revision": "246566230b0fb7949537bf44b04c6bd9"
  },
  {
    "url": "assets/js/39.e6db7666.js",
    "revision": "fef2886dc27cc4e46fce4d8ab2701399"
  },
  {
    "url": "assets/js/4.bd616938.js",
    "revision": "1b570c470694c9feeec389a3766e32df"
  },
  {
    "url": "assets/js/40.3823e803.js",
    "revision": "554d42c28b4b9b6858b3ff6c2faf201a"
  },
  {
    "url": "assets/js/41.b498be7f.js",
    "revision": "7e8f3ae94c67d5979d376c89b95f26de"
  },
  {
    "url": "assets/js/42.cda38e65.js",
    "revision": "590b232037d55383c64a209c418ab749"
  },
  {
    "url": "assets/js/43.1e00587f.js",
    "revision": "375646c256cae4b88a327bb21e5b29d4"
  },
  {
    "url": "assets/js/44.9ae780d8.js",
    "revision": "272e9e3bc808595ad5c8a0a1be57ff8a"
  },
  {
    "url": "assets/js/45.ded10f86.js",
    "revision": "2e838e0ca1f81ddffa3eb2eac4d6f61c"
  },
  {
    "url": "assets/js/46.633d727c.js",
    "revision": "6129aa57ac62dfc4a58c30031c403d4d"
  },
  {
    "url": "assets/js/47.4e868727.js",
    "revision": "a83b0f499a3b13358cc6817abd1126ba"
  },
  {
    "url": "assets/js/48.8089deeb.js",
    "revision": "f521290735372632b7592bc9a585b5f2"
  },
  {
    "url": "assets/js/49.c9e10c4f.js",
    "revision": "3fbffde42d38e9dae2bcb5e8e0c6ec5f"
  },
  {
    "url": "assets/js/5.9c162e0d.js",
    "revision": "5bce9a0508368fb3d0fc900aef2911de"
  },
  {
    "url": "assets/js/50.162bb5b3.js",
    "revision": "5bf4ee5cb35e485ea05e8885a94b40d4"
  },
  {
    "url": "assets/js/51.9c78c324.js",
    "revision": "f22dbada62fe72e118c3c52a2fed1684"
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
    "url": "assets/js/app.62b681a6.js",
    "revision": "79e3346d952812d7744e463674537a2d"
  },
  {
    "url": "categories/index.html",
    "revision": "e4cc139d596f27032a3eaa48143f41e5"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "c935d4c02e902c5d82f1082949aae948"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "44ee2f43ba8948e48bd4e781ce49aac1"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "cb06cf1d088064ca0663f699b4546cd6"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "4b5baf13d2231fdcee0859b89110541d"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "c63ddb1056b141ead2449340f448d81e"
  },
  {
    "url": "dev/index.html",
    "revision": "4e8c5eb52a66bf801128b03062e14069"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "ff70a797bff8e0b99814de44f6618451"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "52b000127b54cad62ec23b1c74f72fa0"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "26cbe2cd3e346626a953c6e90c6eca70"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "21926bc229ebdf84922cf5ae564b436d"
  },
  {
    "url": "dev/解包.html",
    "revision": "aaff6b778a8ba5e57c3427e6d0674299"
  },
  {
    "url": "docs/index.html",
    "revision": "342c1fb482f1846ca03107ca05c40730"
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
    "revision": "7dc1d463dac6481cd390e069762370e7"
  },
  {
    "url": "intro/index.html",
    "revision": "2f477bd38a3111a8df75a61edcedd8d1"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "590bb71c45cd3d4ffe4644913ad6f2d3"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "ffba1ad7151c412bcb1ecf3190e46d1b"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "5cde8fa8948587a7e41a853f1c427ece"
  },
  {
    "url": "renpy/index.html",
    "revision": "14735ce51177939c38c5cf1fac99f7a5"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "9f76e3df428bc7cdf9b5e0a290a91383"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "b3108e2540634c5fca6dbc5383cd537f"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "96b127d6bbf4c50580f69d4b08e409fd"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "f7e6750b5cee249b888278a39e72b003"
  },
  {
    "url": "renpy/制作剧情回想.html",
    "revision": "841301f5a3ac34341f24a37cd1ded42f"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "cc66c7be45f345ddd6c44f3a66990df9"
  },
  {
    "url": "renpy/动画效果制作——CDD篇.html",
    "revision": "f036c11b4e17185ba1461283b7c5c339"
  },
  {
    "url": "renpy/动画效果制作——基础篇.html",
    "revision": "1b31bbd306f14298ea3167598e55787a"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "69627215fc200f1969757f209d957cbc"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "8b56d34ecf9522077cc8ab03042fd30e"
  },
  {
    "url": "renpy/导航.html",
    "revision": "83575a2351b9a07a22af2aa15e3ef4c8"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "af9b99a02fbd54899e3c9cd802a90999"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "921a2340dcc0a2f7b8adf854e5184b06"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "e7cf6c9677af4f59e08d5292969d967f"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "2e2905d6de46eea054396fe419885df8"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "efba36147f181582489bf04d7e061cd3"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "812d7f14331cb7b4044b2ede462acc56"
  },
  {
    "url": "standard/index.html",
    "revision": "5746f6800be81dc36977c228df42daaf"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "4347c7177ffc20110996caf80c0d48b9"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "bf0dc9daa245e0fec64222fe58692b7c"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "af05fd1ed20659c1e1b2e2edda3f6299"
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
    "revision": "211901214ee07194bed024e098de17ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "af0ccdfbf9cbc8101f63b92da1dc3c90"
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
