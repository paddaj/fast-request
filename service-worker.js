if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const f=e=>a(e,d),b={module:{uri:d},exports:r,require:f};s[d]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ef2ba222.css",revision:"9ea0fc40ac468c30aefd084ca4f105d9"},{url:"assets/img/array.cfc93ab6.svg",revision:"cfc93ab68ac75ca90282743c206c91b8"},{url:"assets/img/boolean.5ee2918a.svg",revision:"5ee2918a253563396ddc0ad42129119a"},{url:"assets/img/curl_dark.42d7d167.svg",revision:"42d7d167aab6ff40102e9a48bfbcbc25"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/file.064c8dc5.svg",revision:"064c8dc56492db201dbad1348f3c5f12"},{url:"assets/img/gitee.2d020f3e.svg",revision:"2d020f3eedc53a13592fb5fbc2bf55fb"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/number.be829c85.svg",revision:"be829c857f95d2496cd36bd29461aa66"},{url:"assets/img/object.b7b42336.svg",revision:"b7b423366a2d162b0373541a87895125"},{url:"assets/img/OSChina.c63a4d4b.svg",revision:"c63a4d4b79c575160a1cfc60913fe8f7"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/string.7888e20a.svg",revision:"7888e20ac643539da4c52f6cd6a781fa"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/24.0d0c7d7a.js",revision:"7bc9498acee219ba6cdc06123e438847"},{url:"assets/js/25.2022ae1b.js",revision:"1ca99365269b5d23d1ba65c854a2f990"},{url:"assets/js/app.3d9a258b.js",revision:"36dff32a065cae88538a3e0a8057493a"},{url:"assets/js/layout-Blog.67e3b279.js",revision:"a6ef8cee7c0928b060a443ab49f0883f"},{url:"assets/js/layout-Layout.e3c1d55e.js",revision:"882dbb979c4750c3b9b4dc3ae6b12a5c"},{url:"assets/js/layout-NotFound.0771b88c.js",revision:"d08f5319fe558cdb196271b54ce8d82f"},{url:"assets/js/layout-Slide.979abf8e.js",revision:"16600869af866dd1140643ab771c615c"},{url:"assets/js/page-FAQ.f121fb07.js",revision:"9253d3d8a17d4c9c6ae4e3451a35102a"},{url:"assets/js/page-Features.f0202ced.js",revision:"904280bd2b575eba194e6c9a12f2c559"},{url:"assets/js/page-Home.8c3de81b.js",revision:"4b7194c6ad4abebba2d5dd8b4a3d58f2"},{url:"assets/js/page-Install.3ecf96ce.js",revision:"04c8d6b7e160c4e488ba37ea52b5eca6"},{url:"assets/js/page-Introduction.cf9adff0.js",revision:"da1c3c672acae9872dbe3da1159d3eaf"},{url:"assets/js/page-Quickstart.365e853d.js",revision:"c5135f9f670d4b0bdda5cd0711e4657c"},{url:"assets/js/page-What'snew.11001c4b.js",revision:"6a791eea299b195b29020982baf8eaa0"},{url:"assets/js/page-最新变化.ca941457.js",revision:"4b2715bc61b9ac97f43828f10c2d2208"},{url:"assets/js/page-功能.9ec4c52e.js",revision:"fd3990f377c812b8522bdcbc6a84fa57"},{url:"assets/js/page-安装.7ec9f75b.js",revision:"3c4493d7481a66e80f2aae6ef4f83a34"},{url:"assets/js/page-快速开始.069e451e.js",revision:"573d6efe4d4a149627d70f29cb10c310"},{url:"assets/js/page-支持作者.47744a6a.js",revision:"e19e6ad6829507c257482ed0b24b80c8"},{url:"assets/js/page-简介.a8555003.js",revision:"308250632375ae7fe9ad7afc3b6d74bb"},{url:"assets/js/vendors~docsearch.d6e1ac34.js",revision:"9450c6f9e107f87d89bf1c743d19f9be"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.24ae0461.js",revision:"43357abe1499170e01facead2bfc1639"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.f9d9d2e0.js",revision:"dbb49f8abadba39bb4c32845ad5b253a"},{url:"assets/js/vendors~layout-Layout.3b365b62.js",revision:"76149586a46c2887a2d1143274967e44"},{url:"assets/js/vendors~photo-swipe.62365c0d.js",revision:"4b70ff48b3963f7617f1e35f402081fb"},{url:"img/fastRequest_dark.svg",revision:"88c4a10a293c400a52b422fbb16bbda7"},{url:"img/fastRequest.svg",revision:"0f228f079051393766837522a76ccb0e"},{url:"img/icon/array.svg",revision:"cfc93ab68ac75ca90282743c206c91b8"},{url:"img/icon/boolean.svg",revision:"5ee2918a253563396ddc0ad42129119a"},{url:"img/icon/curl_dark.svg",revision:"42d7d167aab6ff40102e9a48bfbcbc25"},{url:"img/icon/file.svg",revision:"064c8dc56492db201dbad1348f3c5f12"},{url:"img/icon/number.svg",revision:"be829c857f95d2496cd36bd29461aa66"},{url:"img/icon/object.svg",revision:"b7b423366a2d162b0373541a87895125"},{url:"img/icon/string.svg",revision:"7888e20ac643539da4c52f6cd6a781fa"},{url:"img/org/gitee.svg",revision:"2d020f3eedc53a13592fb5fbc2bf55fb"},{url:"img/org/hutool.svg",revision:"f853669d54bb7696d2a2b63011710b84"},{url:"img/org/OSChina.svg",revision:"c63a4d4b79c575160a1cfc60913fe8f7"},{url:"404.html",revision:"ac92661e71a64fb9117172ea1d1ee80f"},{url:"article/index.html",revision:"692f39bff99e21210957272220aab6ce"},{url:"category/index.html",revision:"c74fc667eedea2cfc83a3ce8b0708d32"},{url:"en/guide/faq/index.html",revision:"cdf516c4fb841533e21b21e8115a094e"},{url:"en/guide/feature/index.html",revision:"3de4a96d3fa36f95ac5c1587f0560ebb"},{url:"en/guide/getstarted/index.html",revision:"5a414d3ee2a11d475c61692c5492a5c8"},{url:"en/guide/index.html",revision:"54f3484ff5a77c0ef0c430cbc0343ccf"},{url:"en/guide/install/index.html",revision:"3fb60847300aab7d84d85bea9c0c22a7"},{url:"en/guide/whatsnew/index.html",revision:"fb8adc9025677aaf001467c4c969beb2"},{url:"en/index.html",revision:"6e27e92074a0e50f0acf0dca61d1f5d2"},{url:"encrypt/index.html",revision:"cd49e20114ae89bcf380ec1512e2065a"},{url:"guide/donate/index.html",revision:"eabb8c2e34eeda070a62a7b60a43d8c1"},{url:"guide/faq/index.html",revision:"9f227c89ba2d31af9def074ffe0cbe5f"},{url:"guide/feature/index.html",revision:"eb290131c608dfad082566d48ec2abcc"},{url:"guide/getstarted/index.html",revision:"8f3d5fbb79ccfb8777f774cf024b9229"},{url:"guide/index.html",revision:"3e227ce85f338902745ecd1439a14906"},{url:"guide/install/index.html",revision:"f2508ff923fff68aa47dc6ba6abd7f81"},{url:"guide/whatsnew/index.html",revision:"ab4bf698808432e7f1664f8d828e7291"},{url:"index.html",revision:"cb90a61b9dbde28afedcece6b114c762"},{url:"slide/index.html",revision:"80b95809f340494a765ec2ff3065ce98"},{url:"star/index.html",revision:"f613968257dfbe328b7ed738f8430bf3"},{url:"tag/index.html",revision:"2ced0cccbd8e8e8770e1ec78846fe783"},{url:"timeline/index.html",revision:"6a0f13124310177cdbf2984961353687"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
