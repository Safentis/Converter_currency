(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67938b7d"],{1148:function(e,t,n){"use strict";var c=n("a691"),o=n("1d80");e.exports="".repeat||function(e){var t=String(o(this)),n="",a=c(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},"23de":function(e,t,n){},"408a":function(e,t,n){var c=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=c(e))throw TypeError("Incorrect invocation");return+e}},4195:function(e,t,n){"use strict";n("f49d")},"5d3c":function(e,t,n){"use strict";n("23de")},"7e10":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,a,r){var i=Object(c["w"])("BriefcaseCurrencys");return Object(c["p"])(),Object(c["d"])(i,{currencys:n.currencys,score:n.score,totalScore:n.totalScore,calcTotalScore:n.calcTotalScore},null,8,["currencys","score","totalScore","calcTotalScore"])}n("a9e3");var a={class:"briefcase"};function r(e,t,n,o,r,i){var s=Object(c["w"])("BriefcaseScore"),l=Object(c["w"])("BriefcaseModal"),u=Object(c["w"])("Diagramm");return Object(c["p"])(),Object(c["d"])("div",a,[Object(c["g"])(s,{score:n.score,totalScore:n.totalScore,onHandleModal:i.onHandleModal},null,8,["score","totalScore","onHandleModal"]),Object(c["g"])(l,{currencys:n.currencys,score:n.score,onHandleModal:i.onHandleModal,onScoreIncrement:i.onScoreIncrement,onScoreDecrement:i.onScoreDecrement,onScoreChange:i.onScoreChange,isOpenDialogWindow:e.isOpenDialogWindow,index:e.index,totalScore:n.totalScore},null,8,["currencys","score","onHandleModal","onScoreIncrement","onScoreDecrement","onScoreChange","isOpenDialogWindow","index","totalScore"]),Object(c["g"])(u,{options:e.options,score:n.score,ref:"diagramm"},null,8,["options","score"])])}n("d81d"),n("ac1f"),n("5319"),n("b0c0"),n("b680");var i=Object(c["D"])("data-v-79f97818");Object(c["s"])("data-v-79f97818");var s={class:"coins"},l={class:"coins__score"},u=Object(c["g"])("span",{class:"coins__score-sign"}," $ ",-1),d={class:"coins__list"},b={class:"coins__name"},f={class:"coins__count"},m={class:"coins__price"};Object(c["q"])();var p=i((function(e,t,n,o,a,r){var i=Object(c["w"])("Button");return Object(c["p"])(),Object(c["d"])("section",s,[Object(c["g"])("p",l,[u,Object(c["f"])(" "+Object(c["y"])(n.totalScore.toFixed(2)),1)]),Object(c["g"])("ul",d,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.score,(function(e,t){return Object(c["p"])(),Object(c["d"])("li",{class:"coins__item",key:t},[Object(c["g"])("p",b,Object(c["y"])(e.name),1),Object(c["g"])("img",{class:"coins__icon",src:e.icon,alt:e.name,height:"25",width:"25"},null,8,["src","alt"]),Object(c["g"])("p",f,Object(c["y"])(e.value),1),Object(c["g"])("p",m,Object(c["y"])(e.currentPrice+" $"),1),Object(c["g"])(i,{className:"coins__button",content:"+",onHandleButton:n.onHandleModal,attr:t},null,8,["onHandleButton","attr"])])})),128))])])})),O=Object(c["D"])("data-v-ea288d20"),g=O((function(e,t,n,o,a,r){return Object(c["p"])(),Object(c["d"])("button",{type:"button",class:["button",n.className],"data-button":n.attr,onClick:t[1]||(t[1]=function(){return n.onHandleButton&&n.onHandleButton.apply(n,arguments)})},Object(c["y"])(n.content),11,["data-button"])})),j={name:"Button",props:{attr:Number,className:String,content:String,onHandleButton:Function}};n("4195");j.render=g,j.__scopeId="data-v-ea288d20";var h=j,v={name:"BriefcaseScore",components:{Button:h},props:{score:Array,totalScore:Number,onHandleModal:Function}};n("9a1c");v.render=p,v.__scopeId="data-v-79f97818";var S=v,_=Object(c["D"])("data-v-daff1456");Object(c["s"])("data-v-daff1456");var y={key:0,class:"modal"},w={class:"modal__inner"},B={class:"modal__content content"},D={class:"content__info"},x={class:"content__controls"},H={class:"content__coins-score"},I={class:"content__field"};Object(c["q"])();var F=_((function(e,t,n,o,a,r){var i=Object(c["w"])("Button"),s=Object(c["w"])("Input");return n.isOpenDialogWindow?(Object(c["p"])(),Object(c["d"])("section",y,[Object(c["g"])("div",w,[Object(c["g"])(i,{className:"modal__button-close",content:"+",onHandleButton:n.onHandleModal},null,8,["onHandleButton"]),Object(c["g"])("div",B,[Object(c["g"])("div",D,[Object(c["g"])("h2",null,Object(c["y"])(n.currencys.usd[n.index].symbol)+" ("+Object(c["y"])(n.currencys.usd[n.index].name)+") ",1)]),Object(c["g"])("div",x,[Object(c["g"])(i,{className:"content__button-increment",content:"+",onHandleButton:n.onScoreIncrement},null,8,["onHandleButton"]),Object(c["g"])("p",H,Object(c["y"])(n.score[n.index].value),1),Object(c["g"])(i,{className:"content__button-decrement",content:"-",onHandleButton:n.onScoreDecrement},null,8,["onHandleButton"])]),Object(c["g"])("p",I,[Object(c["g"])(s,{isDisabled:e.isInputTrue.isDisabled,placeholder:e.isInputTrue.placeholder,onInput:n.onScoreChange},null,8,["isDisabled","placeholder","onInput"])])])])])):Object(c["e"])("",!0)})),M=n("f4e5"),N={name:"BriefcaseModal",components:{Button:h,Input:M["a"]},props:{currencys:Object,onHandleModal:Function,score:Array,onScoreIncrement:Function,onScoreDecrement:Function,onScoreChange:Function,isOpenDialogWindow:Boolean,index:{},totalScore:Number},data:function(){return{isInputTrue:{isDisabled:!1,placeholder:"Введите кол-во монет..."}}}};n("5d3c");N.render=F,N.__scopeId="data-v-daff1456";var T=N,C=n("dbc7"),W={name:"BriefcaseCurrencys",props:{currencys:Object,score:Array,totalScore:Number,calcTotalScore:Function},components:{BriefcaseScore:S,BriefcaseModal:T,Diagramm:C["a"]},data:function(){return{isOpenDialogWindow:!1,index:0,options:{}}},methods:{onHandleModal:function(e){this.isOpenDialogWindow=!this.isOpenDialogWindow,this.index=e.target.dataset.button||this.index},onScoreIncrement:function(){var e=this.index,t=this.score;t[e]["value"]+=1,this.calcTotalScore(),this.$refs.diagramm["diagrammUpdate"]()},onScoreDecrement:function(){var e=this.index,t=this.score;t[e]["value"]>0?t[e]["value"]-=1:t[e]["value"],this.calcTotalScore(),this.$refs.diagramm["diagrammUpdate"]()},onScoreChange:function(e){var t=this.index,n=this.score,c=e.target.value.replace(/\D/gi,"");n[t]["value"]=+c||0,this.calcTotalScore(),this.$refs.diagramm["diagrammUpdate"]()},diagrammData:function(e){var t=this.score,n=[];return t.map((function(t){t[e]?n.push(t[e]):n.push(0)})),n},diagrammSetOptions:function(){var e={type:"bar",data:{labels:this.diagrammData("name"),datasets:[{data:this.diagrammData("value"),label:"Распределение валют в портфеле"}]}};this.options=e}},mounted:function(){this.diagrammSetOptions()}};W.render=r;var k=W,$={name:"Briefcase",components:{BriefcaseCurrencys:k},props:{currencys:Object,score:Array,totalScore:Number,calcTotalScore:Function}};$.render=o;t["default"]=$},"9a1c":function(e,t,n){"use strict";n("a764")},a764:function(e,t,n){},b680:function(e,t,n){"use strict";var c=n("23e7"),o=n("a691"),a=n("408a"),r=n("1148"),i=n("d039"),s=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},b=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){s.call({})}));c({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,n,c,i,s=a(this),b=o(e),f=[0,0,0,0,0,0],m="",p="0",O=function(e,t){var n=-1,c=t;while(++n<6)c+=e*f[n],f[n]=c%1e7,c=l(c/1e7)},g=function(e){var t=6,n=0;while(--t>=0)n+=f[t],f[t]=l(n/e),n=n%e*1e7},j=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var n=String(f[e]);t=""===t?n:t+r.call("0",7-n.length)+n}return t};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(t=d(s*u(2,69,1))-69,n=t<0?s*u(2,-t,1):s/u(2,t,1),n*=4503599627370496,t=52-t,t>0){O(0,n),c=b;while(c>=7)O(1e7,0),c-=7;O(u(10,c,1),0),c=t-1;while(c>=23)g(1<<23),c-=23;g(1<<c),O(1,1),g(2),p=j()}else O(0,n),O(1<<-t,0),p=j()+r.call("0",b);return b>0?(i=p.length,p=m+(i<=b?"0."+r.call("0",b-i)+p:p.slice(0,i-b)+"."+p.slice(i-b))):p=m+p,p}})},f49d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-67938b7d.4ba7d08a.js.map