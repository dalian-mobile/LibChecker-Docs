if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const c=e=>a(e,r),b={module:{uri:r},exports:f,require:c};s[r]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(d(...e),f)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2e89484a.css",revision:"67b777476273222a6cc8f249ef7cb6d2"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/21.e3c54c14.js",revision:"0559c1b9790a386eaaedcf2206a2154b"},{url:"assets/js/22.a6b0d900.js",revision:"d8b9c33da9430793f623b4319fe1af6f"},{url:"assets/js/23.18a8a43c.js",revision:"d18e3c371dbb7b5f91b33df9ff350f4a"},{url:"assets/js/app.5fa3e08a.js",revision:"4164175fac4f8045368576d55edc7618"},{url:"assets/js/layout-Blog.03bd29e4.js",revision:"b4b8914fb9284527c1443efb46d39025"},{url:"assets/js/layout-Layout.86e2e3bb.js",revision:"915779518cf3fffedaa37526105726ad"},{url:"assets/js/layout-NotFound.03296140.js",revision:"8e566c17cb439e66d1cd59c5116a9c8f"},{url:"assets/js/layout-Slide.7d754441.js",revision:"a4f504d35eb893a80067eb1c93e2d501"},{url:"assets/js/page-Download.989fc46c.js",revision:"07ea48b7c05d028a96351c1af817ddde"},{url:"assets/js/page-Home.cf80985f.js",revision:"4be24a65f107e8e6f6bee644cec88c6b"},{url:"assets/js/page-什么是原生库架构？.f4a356df.js",revision:"0998902fcc2259910455c723f9b73afb"},{url:"assets/js/page-什么是注册组件？.97abec60.js",revision:"09705b46034eabe291028960cf680cfb"},{url:"assets/js/page-包特性分析.c8bd59a2.js",revision:"aaf1b55e031457dd53801454d1863f28"},{url:"assets/js/page-库引用统计.1472ddfb.js",revision:"2b995d4a909be130244af6f254e47e61"},{url:"assets/js/page-快照.f6e477ea.js",revision:"497af5827b78d10b9a1585c4fd544d50"},{url:"assets/js/page-思维导图.6e4d7d9d.js",revision:"2e05b74a7a59581263b5482b6bdaab24"},{url:"assets/js/page-更新日志.3566eac0.js",revision:"4703f474b518dfbff8e1cd72bd184d98"},{url:"assets/js/page-概要.3d001c9a.js",revision:"795ce210af4f5bb2cf69437e2249d5d2"},{url:"assets/js/page-知名库标记.0a17c330.js",revision:"32f3c114abae167496beb097eefdd96d"},{url:"assets/js/vendors~layout-Blog~layout-Layout.d5ee5273.js",revision:"d5a979969b3aa3bf860d25e285e12f54"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ab5aef55.js",revision:"5e1a681e5aeea5dbb5416232840ebfab"},{url:"assets/js/vendors~layout-Layout.de569351.js",revision:"59ff561073cf3fa9e75805157ecd131d"},{url:"assets/js/vendors~photo-swipe.d4260e6c.js",revision:"7e7ac849c4c8b5b86ea6684245eb81e3"},{url:"404.html",revision:"05f053df2bae094458be835a997e651e"},{url:"article/index.html",revision:"10c36fac541e7fd843496cac511de372"},{url:"category/index.html",revision:"1ab6a0735617695dbc5aeaa1bba20253"},{url:"changelog/index.html",revision:"5feebb2fa05981fb75866717ed184338"},{url:"download/index.html",revision:"7eddd44060635a75a7b971151ff660db"},{url:"encrypt/index.html",revision:"7e4f906fe012adaf0e5d5ce6a3ac42c4"},{url:"guide/index.html",revision:"8a491c7584ee28066ab3855348fae2b0"},{url:"guide/Library-Reference-Statistics/index.html",revision:"7e3101b2695f9cd09c3728fad864b79e"},{url:"guide/Marked-Popular-Library/index.html",revision:"703d00547d60954b4a3c1bfc8fef95f1"},{url:"guide/Mind-Mapping/index.html",revision:"d710a283fd0d6f720e7848ffb2c902ed"},{url:"guide/Package-Features-Analysis/index.html",revision:"ac5462a1d79ebd5a1ae42c53119ca3e5"},{url:"guide/Snapshot-Usage/index.html",revision:"533f0cbd630d505f6e093b47a9168ee6"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"3ab6f57c46863bed3ec5f35592611c07"},{url:"guide/What-is-Registered-Component/index.html",revision:"834e9dab697778067f9e31a8a06ba84d"},{url:"index.html",revision:"e453841b4a48cb26cbfda60ac8957a2a"},{url:"slide/index.html",revision:"0a6267ad981307e80593c05c185a6980"},{url:"star/index.html",revision:"d9dcb3fd12043739d7c025ea9f42b70b"},{url:"tag/index.html",revision:"9780fdfe5831ae4d423e70a734db6fdd"},{url:"timeline/index.html",revision:"b7d0b0f05eedc1317325e8cf1ab4d0c2"}],{}),e.cleanupOutdatedCaches()}));
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
