(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15df3abe"],{"56c5":function(e,t,o){},d303:function(e,t,o){"use strict";o.r(t);var n=o("f2bf");function a(e,t,o,a,c,r){var d=Object(n["resolveComponent"])("router-view"),s=Object(n["resolveComponent"])("modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",null,[Object(n["createVNode"])(d),Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[e.onShowModal?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,modal:e.modal,onShowModal:e.showModal},null,8,["modal","onShowModal"])):Object(n["createCommentVNode"])("",!0)]})),_:1})])}var c=o("1da1"),r=o("5530"),d=(o("96cf"),o("8afd")),s=o("5502"),u=o("e52a"),i=o("7ae0"),l=Object(d["defineComponent"])({name:"preview-layout",data:function(){return{onShowModal:!1}},computed:Object(r["a"])({},Object(s["c"])(["modal"])),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("checkAuthorization");case 2:e.$store.dispatch("getConvert"),e.$store.dispatch("getCurrencies"),e.$store.getters.user&&e.$store.getters.user.role===i["g"].STUDENT&&e.$router.push("/");case 5:case"end":return t.stop()}}),t)})))()},methods:{showModal:function(e){this.onShowModal=e}},watch:{modal:function(){this.onShowModal=!0}},components:{Modal:u["a"]}}),h=(o("d8a6"),o("6b0d")),p=o.n(h);const w=p()(l,[["render",a],["__scopeId","data-v-0e7c78a4"]]);t["default"]=w},d8a6:function(e,t,o){"use strict";o("56c5")}}]);
//# sourceMappingURL=chunk-15df3abe.e1fd0bee.js.map