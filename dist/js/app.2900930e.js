(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)n=o[u],i[n]&&m.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f38c5de5"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");n.type=a,n.request=r,s[1](n)}i[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("1356"),i=s.n(a);i.a},1356:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("14c6"),s("08c1"),s("4842"),s("d9fc");var a=s("2b0e"),i=s("6d68"),r=(s("1941"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view",{staticClass:"app"})],1)}),n=[],o=(s("034f"),s("2877")),c={},l=Object(o["a"])(c,r,n,!1,null,null,null),u=l.exports,d=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/",title:"На главную"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(0),s("div",{staticClass:"header-info"},[t._m(1),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О нас")])],1)])]),s("div",{staticClass:"search"},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-input",class:t.containerInput},[s("div",{staticClass:"container container-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"searchGame",staticClass:"search-game",attrs:{type:"text",placeholder:"Поиск игры...",autofocus:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),s("button",{ref:"buttonGame",staticClass:"toggle-search",class:t.buttonInput,on:{click:function(e){return t.showInput()}}})])]),s("section",[s("div",{staticClass:"container container--tabs"},[s("vk-tabs",{attrs:{align:"justify"}},[s("vk-tabs-item",{attrs:{title:"ВСЕ"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("интерактивное кино")])])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGames,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}}}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"HTC"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("интерактивное кино")])])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByHTC,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}}}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"PSVR"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("интерактивное кино")])])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByPSVR,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}}}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"PS4"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("интерактивное кино")])])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByPS4,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}}}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"МОИ"}},[s("div",{staticClass:"wrapper container"},[t.isEmpty?s("div",[s("p",[t._v("Ваш список избранных игр пуст. Чтобы добавить игру в избранное, на странице игры нажмите на значок звёздочки рядом с названием игры. "),s("br"),t._v(" Чтобы удалить игру из избранного - нажмите на звёздочку ещё раз.")])]):t._l(t.showLikedGames,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}}}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)})],2)])],1)],1)]),s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/about",title:"О нас"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(2),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("div",{staticClass:"copyright"},[t._v("\n      Ⓒ Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте\n    ")])])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[t._v('\n      Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж\n    ')]),s("p",{staticClass:"header-item"},[t._v("\n      Мы работаем: ежедневно с 10:00 до 21:00\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])}],p=(s("386d"),{name:"home",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/",search:"",category:"",games:[],isOpened:!1,isSwitched:!1,isEmpty:!1,genre:"все"}},methods:{showInput:function(){this.$refs.buttonGame.classList.contains("switched")?(this.isOpened=!this.isOpened,this.isSwitched=!this.isSwitched,this.search=""):(this.isOpened=!this.isOpened,this.isSwitched=!this.isSwitched,this.$nextTick(function(){this.$refs.searchGame.focus()}))}},mounted:function(){this.$store.dispatch("loadGames"),0==this.$store.state.wishlistIds.length&&(this.isEmpty=!this.isEmpty)},created:function(){},computed:{containerInput:function(){return{opened:this.isOpened}},buttonInput:function(){return{switched:this.isSwitched}},showGames:function(){return this.$store.getters.showAllGames(this.search,this.genre)},showGamesByHTC:function(){return this.$store.getters.showHTCGames(this.search,this.genre)},showGamesByPSVR:function(){return this.$store.getters.showPSVRGames(this.search,this.genre)},showGamesByPS4:function(){return this.$store.getters.showPS4Games(this.search,this.genre)},showLikedGames:function(){return this.$store.getters.wishlist(this.search)}}}),g=p,v=Object(o["a"])(g,m,h,!1,null,null,null),f=v.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/",title:"На главную"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(0),s("div",{staticClass:"header-info"},[t._m(1),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О нас")])],1)])]),s("div",{staticClass:"container container-game"},[s("vk-breadcrumb",[s("router-link",{staticClass:"home",attrs:{tag:"vk-breadcrumb-item",to:"/",title:"Вернуться на главную страницу"}},[t._v("Главная")]),s("vk-breadcrumb-item",[t._v(t._s(t.game.title))])],1),s("div",{staticClass:"desc"},[s("div",{staticClass:"game-title"},[s("h1",{staticClass:"game-name"},[t._v(t._s(t.game.title))]),s("button",{ref:"buttonLike",staticClass:"like",class:{liked:t.liked},attrs:{title:"Добавить в избранное"},on:{click:function(e){return t.putLike()}}})]),s("flash-message",{staticClass:"flash-message flashpool",attrs:{transitionName:"flash"}}),s("p",[s("b",{staticClass:"desc"},[t._v("Жанр:")]),t._v(" "+t._s(t.game.genre))]),s("p",{staticClass:"game-description"},[s("b",{staticClass:"desc"},[t._v("Описание:")]),t._v(" "+t._s(t.game.description))]),s("carousel",{attrs:{perPage:1,paginationActiveColor:"#89253e",paginationColor:"#ffffff",loop:""}},[s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image1,width:"100%",height:"auto"}})]),s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image1,width:"100%",height:"auto"}})]),s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image1,width:"100%",height:"auto"}})])],1),s("div",{staticClass:"embed-responsive embed-responsive-16by9 z-depth-1-half"},[s("iframe",{staticClass:"embed-responsive-item game-video",attrs:{src:t.game.video,allowfullscreen:"",width:"100%"}})])],1)],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/about",title:"О нас"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(2),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("div",{staticClass:"copyright"},[t._v("\n      Ⓒ Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте\n    ")])])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[t._v('\n      Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж\n    ')]),s("p",{staticClass:"header-item"},[t._v("\n      Мы работаем: ежедневно с 10:00 до 21:00\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])}],w=(s("6762"),s("2fdb"),s("7514"),{data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/",game:""}},methods:{putLike:function(){this.liked=!this.liked,this.$refs.buttonLike.classList.contains("liked")?this.flash("Игра удалена из избранного","success",{timeout:1500,important:!0}):this.flash("Игра добавлена в избранное","success",{timeout:1500,important:!0})}},mounted:function(){},created:function(){var t=this;this.game=this.$store.state.games.find(function(e){return e.id==t.$route.params.id})},computed:{liked:{get:function(){return this.$store.state.wishlistIds.includes(this.game.id)},set:function(t){this.$store.commit(t?"addGame":"removeGame",this.game.id)}}}}),b=w,k=Object(o["a"])(b,C,_,!1,null,null,null),y=k.exports;a["a"].use(d["a"]);var P=new d["a"]({base:"/",routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/game/:id",name:"Id",component:y,props:!0},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,s){return{x:0,y:0}}}),S=s("bc3a"),x=s.n(S),G=s("a7fe"),L=s.n(G),$=(s("6b54"),s("2f62")),I=s("0e44");a["a"].use($["a"]);var O=new $["a"].Store({namespaced:!0,state:{games:[],wishlistIds:[]},plugins:[Object(I["a"])()],getters:{showAllGames:function(t){return function(e,s){return"все"===s?t.games.filter(function(t){return t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showHTCGames:function(t){return function(e,s){return"все"===s?t.games.filter(function(t){return"htc"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"htc"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showPSVRGames:function(t){return function(e,s){return"все"===s?t.games.filter(function(t){return"psvr"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"psvr"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showPS4Games:function(t){return function(e,s){return"все"===s?t.games.filter(function(t){return"ps"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"ps"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showLikedGames:function(t){return function(e){return t.wishlist.filter(function(t){return t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},wishlist:function(t){return function(e){return t.games.filter(function(s){return t.wishlistIds.includes(s.id)&&s.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},getGameById:function(t){return function(e){return t.games.find(function(t){return t.id===e})}}},actions:{loadGames:function(t){var e=t.commit;x.a.get("games.json").then(function(t){return t.data.games}).then(function(t){e("SET_GAMES",t)})}},mutations:{SET_GAMES:function(t,e){t.games=e},addGame:function(t,e){t.wishlistIds.includes(e)||t.wishlistIds.push(e)},removeGame:function(t,e){var s=t.wishlistIds.indexOf(e);-1!==s&&t.wishlistIds.splice(s,1)}}}),E=s("d00d"),j=s.n(E),T=s("0a63"),A=s.n(T);s("f59c"),a["a"].config.productionTip=!1,a["a"].use(L.a,x.a),a["a"].use(i["a"]),a["a"].use(j.a),a["a"].use(A.a),new a["a"]({router:P,store:O,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.2900930e.js.map