(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e45a8ec"],{"3a7b":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("f2bf"),o=function(e){return Object(c["pushScopeId"])("data-v-f1215a18"),e=e(),Object(c["popScopeId"])(),e},s={class:"comments"},a=o((function(){return Object(c["createElementVNode"])("div",{class:"comments--title"},"Комментарии",-1)})),r={class:"comments--container"},m={class:"section--name"},i={class:"section--container flex wrap-wrap justify-between"},l={class:"comment--name"},u=["onUpdate:modelValue"],d={class:"comments--action flex justify-end"};function b(e,t,n,o,b,p){return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",s,[a,Object(c["createElementVNode"])("div",r,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.currentComments,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"section",key:t.id},[Object(c["createElementVNode"])("div",m,Object(c["toDisplayString"])(t.name),1),Object(c["createElementVNode"])("div",i,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.sections,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"comment",key:t.id},[Object(c["createElementVNode"])("div",l,Object(c["toDisplayString"])(t.name),1),Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{"onUpdate:modelValue":function(n){return e.user.comments[t.id]=n},placeholder:"Введите комментарий"},null,8,u),[[c["vModelText"],e.user.comments[t.id]]])])})),128))])])})),128))]),Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("button",{class:"btn btn--green btn--fit",onClick:t[0]||(t[0]=function(){return e.saveComments&&e.saveComments.apply(e,arguments)})}," Сохранить ")])])}var p=n("1da1"),f=(n("96cf"),n("8afd")),j=n("f349"),O=n("7ae0"),v=Object(f["defineComponent"])({name:"ProfileComments",props:{user:{type:Object,required:!0}},data:function(){return{comments:j["a"]}},computed:{currentComments:function(){return this.setComments(),this.comments}},methods:{setComments:function(){this.user.course.type===O["b"].ONE?this.comments[2].sections=[{id:"student",name:"Комментарий эксперта на портфель студента"}]:this.comments[2].sections=[{id:"stock",name:"Обзор рисковой части"},{id:"bond",name:"Обзор консервативной части"},{id:"alternative",name:"Обзор защитной части"},{id:"tactic",name:"Тактические идеи"}]},saveComments:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.API.common.onSaveComments({comments:e.user.comments});case 2:n=t.sent,e.$store.commit("updateUser",n.data);case 4:case"end":return t.stop()}}),t)})))()}}}),k=(n("99f3"),n("6b0d")),h=n.n(k);const E=h()(v,[["render",b],["__scopeId","data-v-f1215a18"]]);t["default"]=E},"99f3":function(e,t,n){"use strict";n("c3b9")},c3b9:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4e45a8ec.4733b5e3.js.map