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
    "revision": "73c6eff2fc9588212de5783de3c54500"
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
    "url": "assets/js/1.826e740a.js",
    "revision": "023c2c14341e88a39199384adcdcaa93"
  },
  {
    "url": "assets/js/10.6c6664bd.js",
    "revision": "d1ae2d09590608266658d4373dd9ce92"
  },
  {
    "url": "assets/js/11.e7b11194.js",
    "revision": "41a6c9b638b006b4ba12c34c885bb293"
  },
  {
    "url": "assets/js/12.24f42187.js",
    "revision": "049da3887db37143ae715f9cc5ead2db"
  },
  {
    "url": "assets/js/13.5a3a57f0.js",
    "revision": "24b6c47c76e0737375b1ed76d004878c"
  },
  {
    "url": "assets/js/14.7ffa3e30.js",
    "revision": "4359f62794eb4d2e169342e400a4ab27"
  },
  {
    "url": "assets/js/15.b91c7d92.js",
    "revision": "d2b78af5d13b706e2dc1ab94404318b6"
  },
  {
    "url": "assets/js/16.743e75d3.js",
    "revision": "1c0c7432f41f201216ac3fe1b72d4cd4"
  },
  {
    "url": "assets/js/17.0d96cfdb.js",
    "revision": "cc4c6e3604e68f30ef68490dd60513da"
  },
  {
    "url": "assets/js/18.fd97359a.js",
    "revision": "8e9995b1c2e2554264c5054bb9bb0ce1"
  },
  {
    "url": "assets/js/19.227a00a4.js",
    "revision": "dfa4da362fee4b0486177efb6ed7a47e"
  },
  {
    "url": "assets/js/2.4d63b98b.js",
    "revision": "a52293a7c0ef72c80302b2f443c841a5"
  },
  {
    "url": "assets/js/20.7fb4a816.js",
    "revision": "27d913fdd349f2233735ccef4173e631"
  },
  {
    "url": "assets/js/21.c654202f.js",
    "revision": "baf214fcc0a463e078f6ca46dbb67871"
  },
  {
    "url": "assets/js/4.49ac9394.js",
    "revision": "5cb4d86157c6003abbac1462b125c3b4"
  },
  {
    "url": "assets/js/5.9480a401.js",
    "revision": "01d37fd68c09f83fd8882d8395713efa"
  },
  {
    "url": "assets/js/6.9e55e613.js",
    "revision": "ff0e47afee12f47bfbc6130148c7fef0"
  },
  {
    "url": "assets/js/7.e0f02b9c.js",
    "revision": "5fd8245e604b3f84f6810711de1ae227"
  },
  {
    "url": "assets/js/8.0a355019.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.28569fc3.js",
    "revision": "663ed3f22e8e77abcd7e784c067d327d"
  },
  {
    "url": "assets/js/app.5eb56e53.js",
    "revision": "cd552ec6005884c80af691098abed40e"
  },
  {
    "url": "categories/index.html",
    "revision": "39ce828fab3bf8e059131496af4fc6cc"
  },
  {
    "url": "chinese-localization/原作分析.html",
    "revision": "931d21eed3e8e8d24cb992d092c48fcb"
  },
  {
    "url": "docs/index.html",
    "revision": "d195925899e4ee4fe006080d2046476c"
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
    "revision": "7b83f1d87ade777e1ce57839284259b7"
  },
  {
    "url": "images/项目组logo_smallsize.png",
    "revision": "3c16e29ba08043aac27a5f3cf0cd75af"
  },
  {
    "url": "index.html",
    "revision": "d206b32e816109bbbd93f71ea852e8ae"
  },
  {
    "url": "intro/index.html",
    "revision": "a39ebf0fcf4094ac57e3b2f4d92d8d9f"
  },
  {
    "url": "intro/关于本站以及开始本项目的初衷.html",
    "revision": "27bc17dea2843afae02b22c5938dfdbd"
  },
  {
    "url": "intro/各文档详细介绍.html",
    "revision": "b9fd079ca5e6f8b20837db39e12fc5ce"
  },
  {
    "url": "standard/index.html",
    "revision": "a6454e62df001b534d326ceee0aefe5a"
  },
  {
    "url": "standard/代码规范.html",
    "revision": "a5e91f6819c152bb578c99b9cc43e4d9"
  },
  {
    "url": "standard/目录组织结构.html",
    "revision": "f21de35bbee2005fcaf111974cfd9f7b"
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
    "revision": "47181c6f3dd8eb730391a97cc2616f26"
  },
  {
    "url": "timeline/index.html",
    "revision": "c80d1e02a47e941dcfb225fa64eabd1e"
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
