(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{275:function(t,e,a){},276:function(t,e,a){},277:function(t,e,a){},278:function(t,e,a){},279:function(t,e,a){},280:function(t,e,a){},281:function(t,e,a){},282:function(t,e,a){},457:function(t,e,a){t.exports=a.p+"assets/img/hero.b62ddd9c.jpg"},458:function(t,e,a){"use strict";var n=a(275);a.n(n).a},459:function(t,e,a){"use strict";var n=a(276);a.n(n).a},460:function(t,e,a){"use strict";var n=a(277);a.n(n).a},461:function(t,e,a){"use strict";var n=a(278);a.n(n).a},462:function(t,e,a){"use strict";var n=a(279);a.n(n).a},463:function(t,e,a){"use strict";var n=a(280);a.n(n).a},464:function(t,e,a){"use strict";var n=a(281);a.n(n).a},465:function(t,e,a){"use strict";var n=a(282);a.n(n).a},489:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(209),o=a(332),s=a(183),i=a(457),l=a.n(i),c=n.a.extend({name:"BlogHero",components:{MyTransition:s.a},data:()=>({defaultHeroImage:l.a}),computed:{heroImageStyle(){const t={maxHeight:"180px",margin:!1===this.$frontmatter.showTitle?"6rem auto 1.5rem":"1rem auto"};return Object.assign(Object.assign({},t),this.$frontmatter.heroImageStyle)},bgImageStyle(){const{bgImageStyle:t={}}=this.$frontmatter;return Object.assign(Object.assign({},{height:"350px",textAlign:"center",overflow:"hidden"}),t)}}}),u=(a(458),a(1)),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return!1!==t.$frontmatter.hero?a("div",{staticClass:"blog-hero",class:{full:t.$frontmatter.heroFullScreen},style:Object.assign({},t.bgImageStyle)},[a("div",{staticClass:"mask",style:{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):t.defaultHeroImage)+") center/cover no-repeat"}}),t._v(" "),a("MyTransition",{attrs:{delay:.04}},[t.$frontmatter.heroImage?a("img",{staticClass:"hero-logo",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.08}},[!1!==t.$frontmatter.showTitle?a("h1",[t._v("\n      "+t._s(t.$frontmatter.heroText||t.$title||"Hope")+"\n    ")]):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.12}},[t.$description?a("p",{staticClass:"description",domProps:{textContent:t._s(t.$description)}}):t._e()])],1):t._e()}),[],!1,null,null,null).exports,h=a(341),m=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon book-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,d=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon link-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,f=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,g=a(194),v=n.a.extend({name:"ProjectList",components:{ArticleIcon:h.a,BookIcon:m,LinkIcon:d,ProjectIcon:f},methods:{navigate(t){Object(g.a)(t,this.$router,this.$route)}}}),_=(a(459),Object(u.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-list"},t._l(t.$frontmatter.project||[],(function(e,n){return a("div",{key:e.name,staticClass:"project",class:"project"+n%9,on:{click:function(a){return t.navigate(e.link)}}},[e.cover?a("div",{staticClass:"cover",style:"background: url("+t.$withBase(e.cover)+") center/cover no-repeat;"}):t._e(),t._v(" "),a(e.type+"-icon",{tag:"component"}),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(e.desc))])],1)})),0)}),[],!1,null,null,null).exports),y=n.a.extend({name:"BlogHome",components:{ArticleList:o.a,BlogHero:p,BlogInfo:r.a,MyTransition:s.a,ProjectList:_}}),$=(a(460),Object(u.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page blog"},[e("BlogHero"),this._v(" "),e("div",{staticClass:"blog-page-wrapper"},[e("main",{staticClass:"blog-home"},[e("MyTransition",{attrs:{delay:.16}},[e("ProjectList")],1),this._v(" "),e("MyTransition",{attrs:{delay:.24}},[e("ArticleList",{key:this.$route.path})],1)],1),this._v(" "),e("MyTransition",{attrs:{delay:.16}},[e("BlogInfo")],1)],1),this._v(" "),e("MyTransition",{attrs:{delay:.28}},[e("Content",{key:this.$route.path,staticClass:"theme-default-content",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),b=a(2),C=a(284),x=a(195),w=n.a.extend({name:"Home",components:{MyTransition:s.a,NavLink:x.a},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){Object(g.a)(t,this.$router,this.$route)}}}),k=(a(461),Object(u.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[a("MyTransition",[t.$frontmatter.heroImage?a("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),a("MyTransition",[t.$frontmatter.darkHeroImage?a("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),a("div",{staticClass:"hero-info"},[a("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?a("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.08}},[a("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),a("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?a("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return a("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),a("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(e,n){return[e.link?a("div",{key:n,staticClass:"feature link",class:"feature"+n%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(a){return t.navigate(e.link)}}},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])]):a("div",{key:n,staticClass:"feature",class:"feature"+n%9},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])]}))],2):t._e()]),t._v(" "),a("MyTransition",{attrs:{delay:.24}},[a("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports),I=a(340),T=a(344),P=a(37),M=n.a.extend({name:"AuthorInfo",components:{AuthorIcon:T.a},props:{defaultAuthor:{type:String,default:""}},computed:{author(){const{author:t}=this.$frontmatter;return t||(!1===t?"":this.defaultAuthor)},hint(){return P.b[this.$localePath||"/"].author}}}),L=Object(u.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return this.author?e("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("AuthorIcon"),this._v(" "),e("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports,j=a(337),A=a(346),B=n.a.extend({name:"ReadingTimeInfo",components:{TimerIcon:A.a},computed:{readingTime(){return`PT${Math.max(Math.round(this.$page.readingTime.minutes),1)}M`},text(){const{less1Minute:t,time:e}=P.c[this.$localePath||"/"];return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint(){return P.b[this.$localePath||"/"].readingTime}}}),O=Object(u.a)(B,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[a("TimerIcon"),t._v(" "),a("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),a("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,E=a(338),S=a(345),H=n.a.extend({name:"TimeInfo",components:{CalendarIcon:S.a},computed:{time(){const{date:t,time:e=t}=this.$frontmatter;if("string"==typeof e){if(-1!==e.indexOf("T")){const[t,a]=e.split("T"),[n]=a.split(".");return`${t} ${"00:00:00"===n?"":n}`}return e}const{createTimeStamp:a}=this.$page;if(a){const t=new Date(a);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}return""},hint(){return P.b[this.$localePath||"/"].date}}}),N=Object(u.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return this.time?e("span",{staticClass:"time-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("CalendarIcon"),this._v(" "),e("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,z=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 0 0-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,D=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,V=n.a.extend({name:"VisitorInfo",components:{EyeIcon:z,FireIcon:D},props:{visitor:{type:Boolean,default:!1}},data:()=>({count:0}),computed:{visitorID(){const{base:t}=this.$site;return t?`${t.slice(0,t.length-1)}${this.$page.path}`:this.$page.path},hint(){return P.b[this.$localePath||"/"].views}},watch:{$route(t,e){t.path!==e.path&&setTimeout(()=>{this.getCount()},500)}},mounted(){setTimeout(()=>{this.getCount()},1500)},methods:{getCount(){const t=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(t){const e=t.textContent;e&&!isNaN(Number(e))?this.count=Number(e):setTimeout(()=>{this.getCount()},500)}}}}),R=Object(u.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"visitor-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[this.count<1e3?e("EyeIcon"):e("FireIcon"),this._v(" "),e("span",{staticClass:"leancloud_visitors waline-visitor-count",attrs:{id:this.visitorID,"data-flag-title":this.$page.title}},[e("span",{staticClass:"leancloud-visitors-count"},[this._v("...")])])],1)}),[],!1,null,null,null).exports,F=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 0 1 603.43 1.097a512 512 0 0 1 419.474 419.474 73.143 73.143 0 0 1-72.046 85.212H591.36a73.143 73.143 0 0 1-73.143-73.143z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0 1 73.143 85.577A457.143 457.143 0 1 1 371.566 117.76a73.143 73.143 0 0 1 85.577 73.143v339.383a36.571 36.571 0 0 0 36.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,W=n.a.extend({name:"ReadTimeInfo",components:{WordIcon:F},computed:{words(){return P.c[this.$localePath||"/"].word.replace("$word",this.$page.readingTime.words.toString())},hint(){return P.b[this.$localePath||"/"].words}}}),q=Object(u.a)(W,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.words?a("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[a("WordIcon"),t._v(" "),a("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),a("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,J=(a(63),n.a.extend({name:"PageInfo",components:{AuthorInfo:L,CategoryInfo:j.a,ReadingTimeInfo:O,TagInfo:E.a,TimeInfo:N,VisitorInfo:R,WordInfo:q},props:{titleIcon:{type:Boolean,default:!0},titleIconPrefix:{type:String,default:""},items:{type:Array,default:()=>["author","visitor","time","category","tag","reading-time"]},defaultAuthor:{type:String,default:""},categoryPath:{type:String,default:""},tagPath:{type:String,default:""},visitor:{type:Boolean,default:!1}},computed:{config(){const t=this.$page.frontmatter.pageInfo;return!1!==t&&(Array.isArray(t)?t:this.items)},isOriginal(){return!0===this.$frontmatter.original},originText(){return P.b[this.$localePath||"/"].origin}}})),U=(a(462),Object(u.a)(J,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[a("h1",[t.titleIcon&&t.$frontmatter.icon?a("i",{class:"iconfont "+(t.titleIconPrefix||"")+t.$frontmatter.icon}):t._e(),t._v(" "),a("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?a("div",{staticClass:"page-info"},[t.isOriginal?a("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(e){return a(e+"-info",t._b({key:t.$route.path+e,tag:"component"},"component",{defaultAuthor:t.defaultAuthor,categoryPath:t.categoryPath,tagPath:t.tagPath,visitor:t.visitor},!1))}))],2):t._e(),t._v(" "),t.$frontmatter.image?a("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),a("hr")])}),[],!1,null,null,null).exports),Y=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,G=a(186),K=n.a.extend({name:"PageMeta",components:{EditIcon:Y},computed:{locales(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.locales.contributor},updateTime(){return!1===this.$page.frontmatter.updateTime||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.locales.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:a}=this.$themeConfig;return!(!t||!e&&!a||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.locales.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:a="",docsBranch:n="main"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(G.a,"")}/src/${n}/${a?a.replace(G.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(G.a,"")}/-/edit/${n}/${a?a.replace(G.a,"")+"/":""}${this.$page.relativePath}`;return`${(G.j.test(e)?e:"https://github.com/"+e).replace(G.a,"")}/edit/${n}/${a?a.replace(G.a,"")+"/":""}${this.$page.relativePath}`}}}),Q=(a(463),Object(u.a)(K,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-meta"},[t.editLink?a("div",{staticClass:"edit-link"},[a("EditIcon"),t._v(" "),a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?a("div",{staticClass:"meta-item update-time"},[a("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),a("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?a("div",{staticClass:"meta-item contributors"},[a("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),a("span",{staticClass:"info"},[t._l(t.contributors,(function(e,n){return[a("span",{key:n,staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),X=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,Z=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,tt=a(287);const et=(t,e)=>{for(const a of t)"group"===a.type?et(a.children||[],e):e.push(a)},at=(t,{themeConfig:e,page:a,route:n,site:r,sidebarItems:o})=>{const s=e[t+"Links"],i=a.frontmatter[t];return!1!==s&&!1!==i&&("string"==typeof i?Object(tt.c)(r.pages,Object(G.k)(i,n.path)):((t,e,a)=>{const n=[];et(e,n);for(let e=0;e<n.length;e++){const r=n[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[e+a]}return!1})(a,o,"prev"===t?-1:1))};var nt=n.a.extend({name:"PageNav",components:{NextIcon:X,PrevIcon:Z},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prev(){return at("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next(){return at("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),rt=(a(464),Object(u.a)(nt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},["external"===t.prev.type?a("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[a("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),a("OutboundLink")],1):a("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[a("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},["external"===t.next.type?a("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),a("OutboundLink"),t._v(" "),a("NextIcon")],1):a("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),a("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),ot=a(286),st=a(330).a.extend({name:"Page",components:{Anchor:I.a,MyTransition:s.a,PageInfo:U,PageMeta:Q,PageNav:rt,Password:ot.a},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword},pageInfoProps(){return{titleIcon:!0,titleIconPrefix:this.$themeConfig.iconPrefix,items:this.$themeConfig.pageInfo,categoryPath:"/category/$category/",tagPath:"/tag/$tag/",defaultAuthor:this.$themeConfig.author||""}}}}),it=(a(465),Object(u.a)(st,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("MyTransition",[a("BreadCrumb",{key:t.$route.path,attrs:{show:!1!==t.$themeConfig.breadcrumb,icon:!1!==t.$themeConfig.breadcrumbIcon,"icon-prefix":t.$themeConfig.iconPrefix}})],1),t._v(" "),t._t("top"),t._v(" "),a("MyTransition",{attrs:{delay:.04}},[a("PageInfo",t._b({key:t.$route.path},"PageInfo",t.pageInfoProps,!1))],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?a("MyTransition",{attrs:{delay:.08}},[a("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?a("MyTransition",{attrs:{delay:.08}},[a("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[a("MyTransition",{attrs:{delay:.12}},[a("Anchor",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),a("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[a("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),a("MyTransition",{attrs:{delay:.12}},[a("PageMeta",{key:t.$route.path})],1),t._v(" "),a("MyTransition",{attrs:{delay:.14}},[a("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),a("MyTransition",{attrs:{delay:.16}},[t.$themeConfig.comment?a("CommentService",{key:t.$route.path}):t._e()],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),lt=n.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:$,Common:C.a,ContentBottom:b.a,ContentTop:b.a,Home:k,NavbarCenter:b.a,NavbarEnd:b.a,NavbarStart:b.a,Page:it,PageBottom:b.a,PageTop:b.a,SidebarBottom:b.a,SidebarCenter:b.a,SidebarTop:b.a}}),ct=Object(u.a)(lt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",[a("NavbarStart"),t._v(" "),a("Content",{attrs:{"slot-key":"navbar-start"}})])]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",[a("NavbarCenter"),t._v(" "),a("Content",{attrs:{"slot-key":"navbar-center"}})])]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",[a("NavbarEnd"),t._v(" "),a("Content",{attrs:{"slot-key":"navbar-end"}})])]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",[a("SidebarTop"),t._v(" "),a("Content",{attrs:{"slot-key":"sidebar-top"}})])]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",[a("SidebarCenter"),t._v(" "),a("Content",{attrs:{"slot-key":"sidebar-center"}})])]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",[a("SidebarBottom"),t._v(" "),a("Content",{attrs:{"slot-key":"sidebar-bottom"}})])]},proxy:!0},{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?a("BlogHome"):t.$frontmatter.home?a("Home"):a("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",[a("PageTop"),t._v(" "),a("Content",{attrs:{"slot-key":"page-top"}})])]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",[a("ContentTop"),t._v(" "),a("Content",{attrs:{"slot-key":"content-top"}})])]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",[a("ContentBottom"),t._v(" "),a("Content",{attrs:{"slot-key":"content-bottom"}})])]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",[a("PageBottom"),t._v(" "),a("Content",{attrs:{"slot-key":"page-bottom"}})])]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=ct.exports}}]);