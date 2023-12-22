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
    "revision": "73dc1126cea654c8b7c6ed3776ed869f"
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
    "url": "assets/js/14.9ad3a3ef.js",
    "revision": "c438c4d8ba8c12048cd6274908af6357"
  },
  {
    "url": "assets/js/15.af0b6b4d.js",
    "revision": "32966de381e8a4040ff0c8cbe582fd70"
  },
  {
    "url": "assets/js/16.805f758d.js",
    "revision": "7fc00e578ed10185b0cc3faab0daa89a"
  },
  {
    "url": "assets/js/17.ade40f1c.js",
    "revision": "aef928bdc5dc1031aa414d3f39e1d065"
  },
  {
    "url": "assets/js/18.c51b44f5.js",
    "revision": "dd321c8693fcfcf46d003836ce58990e"
  },
  {
    "url": "assets/js/19.37b7e9a1.js",
    "revision": "983290512cd40c7338456fdbd75d6ae3"
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
    "url": "assets/js/23.836f2fe9.js",
    "revision": "47f520dbabe8f11ac022b19d8be609e8"
  },
  {
    "url": "assets/js/24.379e50d0.js",
    "revision": "7c0c52d7e9e6f012f16fcdfea571a44b"
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
    "url": "assets/js/30.9f37458c.js",
    "revision": "2479862e458876e1d59de5907a0ac43b"
  },
  {
    "url": "assets/js/31.e57a8e9f.js",
    "revision": "1b228c58bec9b9316aa47b5340345506"
  },
  {
    "url": "assets/js/32.0e9c85bc.js",
    "revision": "73f362d97062bbd0135b359b893333d9"
  },
  {
    "url": "assets/js/33.23ec0d7e.js",
    "revision": "ab2ef598c799a07aaf297731b0d1f185"
  },
  {
    "url": "assets/js/34.1f0ec795.js",
    "revision": "843f1244c9e0928c0e74297ecf8cd266"
  },
  {
    "url": "assets/js/35.d069d587.js",
    "revision": "2826ee03dd1f9231f0d530063c496081"
  },
  {
    "url": "assets/js/36.25151fa3.js",
    "revision": "27ad548b498629612c140318318d382c"
  },
  {
    "url": "assets/js/37.b4008cfe.js",
    "revision": "55f8d1b272e993a039f16289f1fd0c3d"
  },
  {
    "url": "assets/js/38.f01235f3.js",
    "revision": "47b32bb0dd7981f2ab0b90c47fd53f33"
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
    "url": "assets/js/40.41a61b44.js",
    "revision": "6fa126d85f8266aed9229e5762d55f16"
  },
  {
    "url": "assets/js/41.b5a64c43.js",
    "revision": "e675f2b68214e1258182854d0f3f61cd"
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
    "url": "assets/js/44.509be57f.js",
    "revision": "39af23299e1b408419074699cf63cabc"
  },
  {
    "url": "assets/js/45.75e0978d.js",
    "revision": "f90bfca7e8ff73ef587d24af7040946f"
  },
  {
    "url": "assets/js/46.a2801ff6.js",
    "revision": "f3da87b28a8a2450418333960abc6e8b"
  },
  {
    "url": "assets/js/47.75a3771e.js",
    "revision": "8c920574711d63c397205d13c7ecc7e8"
  },
  {
    "url": "assets/js/48.be73ed8b.js",
    "revision": "7132fc7dbb6093d46e3220fdaf9e182f"
  },
  {
    "url": "assets/js/49.7794b2b0.js",
    "revision": "2aa0919c32f614eb08edb0a2627b05d5"
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
    "url": "assets/js/51.4831173c.js",
    "revision": "b70f56aa4f2390929f2818dc420c1ec8"
  },
  {
    "url": "assets/js/52.371f3ab2.js",
    "revision": "1f3021164d8e3f498ff1f427e54510e9"
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
    "url": "assets/js/app.29cb5cd4.js",
    "revision": "be8e55d7b827748e318e58e66649a3c8"
  },
  {
    "url": "categories/index.html",
    "revision": "54e80ab18ef09f75486528ef39122f32"
  },
  {
    "url": "chinese-localization/index.html",
    "revision": "0be34ef9e3cd03230f515d3afc732b4b"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "bab6b3700059c97e643aa630b4d9d4b5"
  },
  {
    "url": "chinese-localization/扩展内容：Galgame常见引擎介绍.html",
    "revision": "cd89498955b026812d39992d2dfd542b"
  },
  {
    "url": "chinese-localization/汉化.html",
    "revision": "2ded10611f0556d02909c5826776c5cd"
  },
  {
    "url": "chinese-localization/移植.html",
    "revision": "ed3ae536f8c1b823b3fc8585c37af0b3"
  },
  {
    "url": "dev/index.html",
    "revision": "3bc91be926bbd869d8f71234ba1d1080"
  },
  {
    "url": "dev/写一个非常简单的对话.html",
    "revision": "6742e3310b05a4176f8cd6e4039f2401"
  },
  {
    "url": "dev/常见问题.html",
    "revision": "4c9928ae595d45075803401d6e9788d2"
  },
  {
    "url": "dev/快速上手.html",
    "revision": "1984550f438c13b7dd11b12b1b303a6a"
  },
  {
    "url": "dev/环境准备.html",
    "revision": "17b6065eadb56486033abfe2e00be8fe"
  },
  {
    "url": "dev/解包.html",
    "revision": "4ee7dc3cdb9a717f215ff0cb4a356e5d"
  },
  {
    "url": "docs/index.html",
    "revision": "54a5d071e2ca79aebe490af777875602"
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
    "revision": "3e369d465b54bc565c06eff3acf39f56"
  },
  {
    "url": "intro/index.html",
    "revision": "34107644eca594551d91724c071a6e2f"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "c07532cdfee38519e26eba27a3abd24b"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "82cfb9816148cc65b63c999209527d9b"
  },
  {
    "url": "renpy/ATL动画和转场.html",
    "revision": "fd6b07ec13e6a665f25a032386414ddf"
  },
  {
    "url": "renpy/CTC动画.html",
    "revision": "ea6ec4cba695cb4271626e915a3dd879"
  },
  {
    "url": "renpy/index.html",
    "revision": "6ab31b9799607af798248331ac7e23d8"
  },
  {
    "url": "renpy/QuickMenu（快捷菜单）的制作.html",
    "revision": "266db55f6dfa5d453532b6a7b7eda763"
  },
  {
    "url": "renpy/Ver1.0文档结语.html",
    "revision": "1fcfa56511b27e5967f67254e6a4e2c2"
  },
  {
    "url": "renpy/人物语音不中断.html",
    "revision": "320937bbfb6054c1ae467e404bc88266"
  },
  {
    "url": "renpy/制作Gallery.html",
    "revision": "8361bfea6a4b3f0da252e2a08dda28f4"
  },
  {
    "url": "renpy/制作主菜单.html",
    "revision": "a0dd55e9cfd2050dc4b7ad442fe611c6"
  },
  {
    "url": "renpy/制作剧情回想.html",
    "revision": "6546c4a0fc49631d51a2262f472193b7"
  },
  {
    "url": "renpy/制作音乐回放.html",
    "revision": "2ba99575efdf0606c38f9791d2b4ec6d"
  },
  {
    "url": "renpy/动画效果制作——CDD篇.html",
    "revision": "c4da626dc93afe2a39bd5dd835a82390"
  },
  {
    "url": "renpy/动画效果制作——基础篇.html",
    "revision": "8328a15bceeb9752b50b8b2c6cb6138c"
  },
  {
    "url": "renpy/历史记录跳跃.html",
    "revision": "67ce7a77aefe49340de62ecae9344254"
  },
  {
    "url": "renpy/周目BGM切换.html",
    "revision": "5e7fddc213d15ee7d99f86318c39b1de"
  },
  {
    "url": "renpy/导航.html",
    "revision": "773a1f0900c7628b23de79b488a7725b"
  },
  {
    "url": "renpy/已读未读文本不同颜色.html",
    "revision": "456f88e43151087c74a202b2da7ac6ae"
  },
  {
    "url": "renpy/文本描边.html",
    "revision": "60ce13ffba851e301614bf5507232393"
  },
  {
    "url": "renpy/添加不同大小的小头像.html",
    "revision": "34296c4238c7ef992c772d6e1cef4f51"
  },
  {
    "url": "renpy/设置和持久化变量.html",
    "revision": "8ef817204e1c24c9fa94b3a365a81ca4"
  },
  {
    "url": "renpy/读取最新存档功能.html",
    "revision": "058c0a1d5d028995b283788d95dfcc56"
  },
  {
    "url": "renpy/附录：小技巧.html",
    "revision": "79ad3855d0abbf1cdbe6af468bed5b3e"
  },
  {
    "url": "renpy/魔改存读档界面.html",
    "revision": "295feae4589a079ca3041408560326d9"
  },
  {
    "url": "standard/index.html",
    "revision": "b94826b284f16453aad6e1759222fdb1"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "f90c07e979982e0d529cd3c64c305bd6"
  },
  {
    "url": "standard/可用方法.html",
    "revision": "467cb763a2081b2d3d7977f5d7c64b8f"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "78bee9d6435ce9e5f93be05d4e2eb022"
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
    "revision": "9606e7742916cb032998462141115b4b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fb2403d1d9a1291f00db24fa6087407"
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
