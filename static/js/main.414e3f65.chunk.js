(this["webpackJsonpbitcoin-explorer"]=this["webpackJsonpbitcoin-explorer"]||[]).push([[0],{193:function(e,n,t){e.exports=t(377)},377:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(38),c=t.n(o),i=t(20),l=t(5),u=t(6);function d(){var e=Object(l.a)(["\n  body {\n    background:#484848;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #ffffff;\n    font-family: 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n  }\n  ::-webkit-scrollbar {\n    width: 15px;\n  }\n  ::-webkit-scrollbar-track {\n    background: gray;\n    border-radius: 3px;\n    margin: 0px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #e5ecf4;\n    border-radius: 3px;\n    border: 0.5px solid gray;\n  }\n"]);return d=function(){return e},e}var s=Object(u.a)(d());function m(){var e=Object(l.a)(["\n  align-items: center;\n  background: #212121;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 32px;\n  min-height: 15vh;\n  justify-content: space-around;\n  width: 100%;\n  h3 {\n    margin: 0;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n  h6 {\n    margin: 0 40px;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n"]);return m=function(){return e},e}var f=u.b.header(m()),b=t(11),p=function(){var e=Object(b.f)();return a.a.createElement(f,null,a.a.createElement("h3",{onClick:function(){return e.push("/")}},"bitcoinExplorer"),a.a.createElement("h6",{onClick:function(){return e.push("/ranking")}},"Ranking"))};function h(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  min-width: 60%;\n  max-width: 80%;\n"]);return h=function(){return e},e}function g(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-width: 70%;\n"]);return g=function(){return e},e}var E=u.b.div(g()),x=u.b.h3(h()),v=t(12);function O(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media only screen and (max-width: 800px) {\n    justify-content: flex-start\n    max-width: 70%;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(l.a)(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  h2 {\n    margin: 5px;\n  }\n"]);return j=function(){return e},e}var w=u.b.div(j()),y=u.b.div(O());function C(){var e=Object(l.a)(["\n  background: #c4c4c4;\n  border-bottom: 1px solid #212121;\n  border-top: 1px solid #212121;\n  color: ",";\n  font-weight: 500;\n  padding 6px;\n"]);return C=function(){return e},e}function k(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),\n    inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin: 15px;\n  max-height: 400px;\n  max-width: 220px;\n  width: 220px;\n  table {\n    border-bottom: 1px solid #212121;\n    border-collapse: collapse;\n    border-top: 1px solid #212121;\n    color: white;\n    padding-bottom: 12px;\n    padding-top: 12px;\n    padding: 8px;\n    text-align: center;\n    text-align: left;\n    max-width: 110px;\n    width: 100%;\n  }\n  th {\n    background: #212121;\n    padding-bottom: 12px;\n    padding-top: 12px;\n  }\n  tr {\n    text-align: center;\n  }\n"]);return k=function(){return e},e}var S=u.b.div(k(),(function(e){return e.direction})),I=u.b.td(C(),(function(e){return e.color})),R=function(e){return e>=0?"#00b49d":"#b50214"},_=function(e){var n=e.orders,t=e.names,r=e.reverse;return a.a.createElement(S,{direction:r?"row-reverse":"row"},t.map((function(e,r){return a.a.createElement("table",{key:e},a.a.createElement("thead",null,a.a.createElement("tr",{key:t[r]},a.a.createElement("th",null,t[r]))),a.a.createElement("tbody",null,null===n||void 0===n?void 0:n.map((function(e,n){return a.a.createElement("tr",{"data-testid":"values",key:e[r]+r+n},a.a.createElement(I,{color:(o=t[r],"COMPRA"===o?"#00a59d":"VENDA"===o?"#b50214":"#000")},1===r?e[r].toFixed(3):e[r]));var o}))))})))},U=function(e){return fetch(e).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))}))},T=function(e){return{type:"REQUEST_CURRENCIES_FAILURE",error:e}},D=function(e){return function(n){return n({type:"REQUEST_CURRENCIES_INFO_API"}),U(e).then((function(e){return n({type:"REQUEST_CURRENCIES_INFO_SUCCESS",currenciesInfo:e})}),(function(e){return n(T(e))}))}};function N(){var e=Object(l.a)(["\n  color: ",";\n  font-weight: 500;\n"]);return N=function(){return e},e}function A(){var e=Object(l.a)(["\n  background: #c4c4c4;\n  border-radius: 3px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),\n    inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: #000;\n  display: grid;\n  grid-template-rows: 50px;\n  margin-bottom: 2vh;\n  min-height: 300px;\n  min-width: 300px;\n  place-items: center;\n  h3 {\n    align-items: center;\n    background: #212121;\n    color: #fff;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    margin: 0;\n    width: 100%;\n  }\n"]);return A=function(){return e},e}var F=u.b.div(A()),Q=u.b.span(N(),(function(e){var n=e.color;return void 0===n?"#000":n})),V=function(e){var n=e.info;return a.a.createElement("span",{"data-tip":n},a.a.createElement("svg",{"aria-hidden":"true","data-fa-processed":!0,"data-prefix":"fas","data-icon":"question-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"12",height:"12"},a.a.createElement("path",{fill:"#00b49d",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"})))},P=t(43);function q(){var e=Object(l.a)(["\n  background: #c4c4c4;\n  border-radius: 3px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),\n    inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: #000;\n  font-weight: 350;\n  height: 60vh;\n  margin: 5px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: center;\n  width: 100%;\n"]);return q=function(){return e},e}function L(){var e=Object(l.a)(["\n  align-items: center;\n  background: ",";\n  border-bottom: 0.1px solid #000;\n  border-radius: 3px;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  font-weight: 500;\n  height: 45px;\n  justify-content: center;\n  margin: 0;\n  &:hover {\n    background: #00b49d;\n    color: #fff;\n  }\n"]);return L=function(){return e},e}function M(){var e=Object(l.a)(["\n  border-radius: 3px;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: #000;\n  padding: 14px 8px;\n  width: 70%;\n"]);return M=function(){return e},e}function B(){var e=Object(l.a)(["\n  align-items: center;\n  background: ",";\n  border-radius: 3px;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: #000;\n  cursor: pointer;\n  display: flex;\n  font-weight: 600;\n  height: 40px;\n  justify-content: center;\n  margin: 0 5px;\n  outline: none;\n  min-width: ",";\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  height: 40px;\n  justify-content: space-evenly;\n  width: 100%;\n"]);return z=function(){return e},e}function H(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1 1 200px;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 300px;\n  max-width: 15%;\n  @media only screen and (max-width: 800px) {\n    margin-top: 25px;\n  }\n"]);return H=function(){return e},e}var W=u.b.div(H()),K=u.b.div(z()),J=u.b.button(B(),(function(e){var n=e.background;return void 0===n?"#00b49d":n}),(function(e){var n=e.minWidth;return void 0===n?"".concat(80,"px"):n})),G=u.b.input(M()),X=u.b.p(L(),(function(e){return e.background}),(function(e){return e.color})),Y=u.b.div(q()),Z=function(e){var n=e.background,t=e.children,r=e.disabled,o=e.onClick,c=e.minWidth;return a.a.createElement(J,{background:n,disabled:r,minWidth:c,onClick:o},t)},$={getCurrenciesInfo:D},ee=Object(v.b)((function(e){return{currenciesInfo:e.currenciesInfos.currenciesInfo,loadingInfo:e.currenciesInfos.loadingInfo,error:e.currenciesInfos.error}}),$)((function(e){var n,t,o,c,i,l,u=e.error,d=e.loadingInfo,s=e.currenciesInfo,m=e.getCurrenciesInfo,f=Object(b.g)().currency,p=Object(b.f)();return Object(r.useEffect)((function(){0===s.length&&m("https://poloniex.com/public?command=returnTicker")}),[]),a.a.createElement(F,null,u&&a.a.createElement("h3",null,"Falha na requisi\xe7\xe3o..."),d&&a.a.createElement("h3",null,"Carregando..."),0!==Object.keys(s).length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Trade Info"),a.a.createElement("div",null,"Varia\xe7\xe3o (%):"," ",a.a.createElement(Q,{"data-testid":"info",color:R(null===(n=s[f])||void 0===n?void 0:n.percentChange)},(100*(null===(t=s[f])||void 0===t?void 0:t.percentChange)).toFixed(2))),a.a.createElement("div",null,"Volume base:"," ",a.a.createElement(Q,{"data-testid":"info"},null===(o=s[f])||void 0===o?void 0:o.baseVolume)),a.a.createElement("div",null,"Volume ajustado"," ",a.a.createElement(V,{info:"Calculado atrav\xe9s do volume base dividido pelo pre\xe7o m\xe9dio nas \xfaltimas 24h."}),":"," ",a.a.createElement(Q,{"data-testid":"info"},null===(c=s[f])||void 0===c?void 0:c.quoteVolume),a.a.createElement(P.a,{effect:"solid"})),a.a.createElement("div",null,"M\xe1xima (24h):"," ",a.a.createElement(Q,{"data-testid":"info"},null===(i=s[f])||void 0===i?void 0:i.high24hr)),a.a.createElement("div",null,"M\xednima (24h):"," ",a.a.createElement(Q,{"data-testid":"info"},null===(l=s[f])||void 0===l?void 0:l.low24hr)),a.a.createElement(Z,{onClick:function(){return p.push("/chart/".concat(f))},minWidth:"".concat(150,"px")},"Ver gr\xe1fico")))})),ne=Object(v.b)((function(e){return{orders:e.orderBook.orders,actualCurrency:e.orderBook.actualCurrency}}))((function(e){var n=e.orders,t=(e.actualCurrency,Object(b.g)().currency);return a.a.createElement(w,null,a.a.createElement("h2",null,"Book de Ofertas: ",t),a.a.createElement(y,null,a.a.createElement(_,{reverse:!0,names:["COMPRA","QTD"],orders:null===n||void 0===n?void 0:n.bids}),a.a.createElement(_,{names:["VENDA","QTD"],orders:null===n||void 0===n?void 0:n.asks}),a.a.createElement(ee,null)))})),te=function(e){return function(n){return n({type:"REQUEST_ORDER_API"}),U(e).then((function(e){return n({type:"REQUEST_ORDER_SUCCESS",orders:{asks:(t=e).asks,bids:t.bids}});var t}),(function(e){return n(function(e){return{type:"REQUEST_ORDER_FAILURE",error:e}}(e))}))}},re={getOrders:te,cleanOrders:function(){return{type:"CLEAN_ORDERS"}}},ae=Object(v.b)((function(e){return{orders:e.orderBook.orders,loading:e.orderBook.loading,error:e.orderBook.error}}),re)((function(e){var n=e.loading,t=e.error,o=e.orders,c=e.getOrders,i=e.cleanOrders,l=Object(b.g)().currency;return Object(r.useEffect)((function(){return c("https://poloniex.com/public?command=returnOrderBook&currencyPair=".concat(l,"&depth=10")),function(){i()}}),[c,i,l]),a.a.createElement(E,null,t&&a.a.createElement(x,null,"Falha na requisi\xe7\xe3o, tente novamente!"),n&&a.a.createElement(x,null,"Carregando..."),o.asks&&a.a.createElement(ne,null))})),oe=t(13),ce=t(44),ie=function(e){var n=[];return Object.entries(e).forEach((function(e){var t=Object(oe.a)(e,2),r=t[0],a=t[1];a.name=r,n=[].concat(Object(ce.a)(n),[a])})),n},le=function(e,n,t,r,a){var o=ie(e);return r&&o.sort(function(e,n){return function(t,r){var a=0;return Number(t[e])>Number(r[e])?a=1:Number(t[e])<Number(r[e])&&(a=-1),n?-1*a:a}}(r,a)),o.slice(n,t)};function ue(){var e=Object(l.a)(["\n  background: ",";\n  color: white;\n  cursor: pointer;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  min-width: 180px;\n  @media only screen and (max-width: 800px) {\n    min-width: 125px;\n  }\n  &:hover {\n    background: #00b49d;\n  }\n"]);return ue=function(){return e},e}function de(){var e=Object(l.a)(["\n  display: flex;\n  align-items: flex-start;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),\n    inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin: 15px;\n  width: 728px;\n  @media only screen and (max-width: 540px) {\n    width: 350px;\n    overflow-x: auto;\n  }\n  @media only screen and (min-width: 540px) and (max-width: 640px) {\n    width: 520px;\n    overflow-x: auto;\n  }\n  table {\n    border-bottom: 1px solid #212121;\n    border-collapse: collapse;\n    border-top: 1px solid #212121;\n    color: black;\n    padding-bottom: 24px;\n    padding-top: 24px;\n    padding: 8px;\n    table-layout: fixed:\n    text-align: center;\n    text-align: left;\n    width: 728px;\n    @media only screen and (min-width: 540px) and (max-width: 640px) {\n      width: 520px;\n    }\n  }\n  tbody {\n    tr{\n      cursor: pointer;\n      &:hover {\n      opacity: 0.8;\n    }\n    }\n  }\n  th {\n    background: #212121;\n    color: #fff;\n    min-width: 180px;\n    @media only screen and (max-width: 800px) {\n    min-width: 125px;\n    }\n  }\n  tr {\n    text-align: center;\n  }\n"]);return de=function(){return e},e}function se(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  min-width: 70%;\n  overflow-x: hidden;\n  h2 {\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n    max-width: 650px;\n    text-align: center;\n  }\n  @media only screen and (max-width: 800px) {\n    margin-bottom: 10px;\n  }\n"]);return se=function(){return e},e}var me=u.b.div(se()),fe=u.b.div(de()),be=u.b.th(ue(),(function(e){var n=e.background;return void 0===n?"#212121":n}));function pe(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  min-width: 45px;\n"]);return pe=function(){return e},e}function he(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 2vh;\n  width: 200px;\n"]);return he=function(){return e},e}var ge=u.b.div(he()),Ee=u.b.div(pe()),xe=Object(v.b)((function(e){return{currenciesInfo:e.currenciesInfos.currenciesInfo}}))((function(e){var n=e.previous,t=e.next,r=e.currenciesInfo,o=Object(oe.a)(n,2),c=o[0],i=o[1],l=Object(oe.a)(t,2),u=l[0],d=l[1];return a.a.createElement(ge,null,a.a.createElement(Z,{background:0===c?"gray":"#00b49d",disabled:0===c,onClick:function(){i(c-10),d(u-10)}},"Anterior"),a.a.createElement(Ee,{"data-testid":"page-display"},u/10,"/",Math.ceil(Object.keys(r).length/10)),a.a.createElement(Z,{background:u>=Object.keys(r).length?"gray":"#00b49d",disabled:u>=Object.keys(r).length,onClick:function(){i(c+10),d(u+10)}},"Pr\xf3ximo"))})),ve={getCurrenciesInfo:D},Oe=Object(v.b)((function(e){return{currenciesInfo:e.currenciesInfos.currenciesInfo,loadingInfo:e.currenciesInfos.loadingInfo,error:e.currenciesInfos.error}}),ve)((function(e){var n=e.currenciesInfo,t=e.loadingInfo,o=e.error,c=e.getCurrenciesInfo,i=Object(b.f)();Object(r.useEffect)((function(){0===n.length&&c("https://poloniex.com/public?command=returnTicker")}),[]);var l=Object(r.useState)(0),u=Object(oe.a)(l,2),d=u[0],s=u[1],m=Object(r.useState)(10),f=Object(oe.a)(m,2),p=f[0],h=f[1],g=Object(r.useState)(""),E=Object(oe.a)(g,2),v=E[0],O=E[1],j=Object(r.useState)(!1),w=Object(oe.a)(j,2),y=w[0],C=w[1];return a.a.createElement(me,null,o&&a.a.createElement(x,null,"Falha na requisi\xe7\xe3o, tente novamente!"),t&&a.a.createElement(x,null,"Carregando..."),0!==n.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Ranking das Criptomoedas"),a.a.createElement("span",null,"Clique nos t\xedtulos da tabela para ordernar os n\xfameros em ordem crescente ou decrescente. Para ver mais informa\xe7\xf5es sobre um par de moedas espec\xedfico, clique sobre seu nome!"),a.a.createElement(fe,null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Nome"),a.a.createElement(be,{background:"percentChange"===v?"#00b49d":"#212121",onClick:function(){O("percentChange"),C(!y)}},"Varia\xe7\xe3o (%)"),a.a.createElement(be,{background:"baseVolume"===v?"#00b49d":"#212121",onClick:function(){O("baseVolume"),C(!y)}},"Volume base"),a.a.createElement(be,{background:"quoteVolume"===v?"#00b49d":"#212121",onClick:function(){O("quoteVolume"),C(!y)}},"Volume ajustado"," ",a.a.createElement(V,{info:"Calculado atrav\xe9s do volume base dividido pelo pre\xe7o m\xe9dio nas \xfaltimas 24h."}),a.a.createElement(P.a,{type:"light",effect:"solid"})))),a.a.createElement("tbody",null,le(n,d,p,v,y).map((function(e){var n=e.name,t=e.percentChange,r=e.baseVolume,o=e.quoteVolume;return a.a.createElement("tr",{onClick:function(){return i.push("/orders/".concat(n))},key:n},a.a.createElement(I,{"data-testid":"currency-name"},n),a.a.createElement(I,{color:R(t)},(100*t).toFixed(2)),a.a.createElement(I,null,Number(r).toFixed(4)),a.a.createElement(I,null,Number(o).toFixed(4)))}))))),a.a.createElement(xe,{previous:[d,s],next:[p,h]})))})),je=function(e,n){var t=Object(ce.a)(e);return n<=1e5?t.forEach((function(e){return e.covertedData="".concat(new Date(1e3*e.date).getHours(),"h")})):t.forEach((function(e){return e.covertedData=new Date(1e3*e.date).toLocaleDateString()})),t},we=t(29);function ye(){var e=Object(l.a)(["\n  margin: 0;\n  width: 100px;\n"]);return ye=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  color: ",";\n  height: unset;\n  min-height: 25px;\n"]);return Ce=function(){return e},e}function ke(){var e=Object(l.a)(["\n  flex-direction: row;\n  margin-bottom: 1vh;\n  label {\n    min-width: 70px;\n  }\n  input {\n    box-shadow: none;\n    min-width: 25px;\n  }\n"]);return ke=function(){return e},e}function Se(){var e=Object(l.a)(["\n  flex-direction: row;\n  margin-bottom: 1vh;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto;\n  padding-left: 1vw;\n  width: 100%;\n  @media only screen and (max-width: 800px) {\n    display: inline-block;\n  }\n"]);return Ie=function(){return e},e}function Re(){var e=Object(l.a)(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Re=function(){return e},e}var _e=u.b.div(Re()),Ue=u.b.div(Ie()),Te=Object(u.b)(_e)(Se()),De=(Object(u.b)(_e)(ke()),Object(u.b)(J)(Ce(),(function(e){var n=e.color;return void 0===n?"#00000":n}))),Ne=u.b.h3(ye()),Ae=a.a.createContext(),Fe=function(){var e=Object(r.useContext)(Ae),n=e.visibleData,t=e.setvisibleData,o=e.setvisibleData2;return a.a.createElement(Te,null,a.a.createElement(Ne,null,"Tipo: "),a.a.createElement(De,{background:"weightedAverage"===n?"#00b49d":"gray",color:"weightedAverage"===n?"#fff":"#000",onClick:function(){t("weightedAverage"),o("")}},"M\xe9dia ponderada"),a.a.createElement(De,{color:"high"===n?"#fff":"#000",background:"high"===n?"#00b49d":"gray",onClick:function(){t("high"),o("low")}},"M\xe1xima & M\xednima"),a.a.createElement(De,{color:"volume"===n?"#fff":"#000",background:"volume"===n?"#00b49d":"gray",onClick:function(){t("volume"),o("")}},"Volume base"),a.a.createElement(De,{color:"quoteVolume"===n?"#fff":"#000",background:"quoteVolume"===n?"#00b49d":"gray",onClick:function(){t("quoteVolume"),o("")}},"Volume ajustado"))},Qe=function(){var e=Object(r.useContext)(Ae),n=e.setInterval,t=e.startTime,o=e.setStartTime;return a.a.createElement(Te,null,a.a.createElement(Ne,null,"Tempo: "),[86400,432e3,2592e3,15552e3,31536e3].map((function(e){return a.a.createElement(De,{background:t===e?"#00b49d":"gray",color:t===e?"#fff":"#000",onClick:function(){o(e),n(14400)},key:e},function(e){switch(e){case 86400:return"1 dia";case 432e3:return"5 dias";case 2592e3:return"1 m\xeas";case 15552e3:return"6 meses";case 31536e3:return"1 ano"}}(e))})))},Ve=function(){var e=Object(r.useContext)(Ae),n=e.startTime,t=e.interval,o=e.setInterval;return a.a.createElement(Te,null,a.a.createElement(Ne,null,"Intervalo: "),function(e){switch(e){case 86400:return[300,900,1800,7200,14400];case 432e3:return[1800,7200,14400,86400];case 2592e3:return[7200,14400,86400];case 15552e3:case 31536e3:return[14400,86400]}}(n).map((function(e){return a.a.createElement(De,{background:t===e?"#00b49d":"gray",color:t===e?"#fff":"#000",onClick:function(){return o(e)},key:e},function(e){switch(e){case 300:return"5min";case 900:return"15min";case 1800:return"30min";case 7200:return"2 horas";case 14400:return"4 horas";case 86400:return"24 horas"}}(e))})))},Pe=Object(v.b)((function(e){return{currenciesInfo:e.currenciesInfos.currenciesInfo}}))((function(){return a.a.createElement(_e,null,a.a.createElement(Fe,null),a.a.createElement(Qe,null),a.a.createElement(Ve,null))})),qe={getCurrencyChart:function(e){return function(n){return n({type:"REQUEST_CHART_API"}),U(e).then((function(e){return n(function(e){return{type:"REQUEST_CHART_SUCCESS",chartData:e}}(e))}),(function(e){return n(function(e){return{type:"REQUEST_CHART_FAILURE",error:e}}(e))}))}}},Le=Object(v.b)((function(e){return{chartData:e.currencyChart.chartData,loading:e.currencyChart.loading,error:e.currencyChart.error}}),qe)((function(e){var n=e.getCurrencyChart,t=e.chartData,o=e.loading,c=e.error,i=Math.floor((new Date).getTime()/1e3),l=Object(b.g)().currency,u=Object(r.useState)("weightedAverage"),d=Object(oe.a)(u,2),s=d[0],m=d[1],f=Object(r.useState)(""),p=Object(oe.a)(f,2),h=p[0],g=p[1],E=Object(r.useState)(2592e3),v=Object(oe.a)(E,2),O=v[0],j=v[1],w=Object(r.useState)(14400),y=Object(oe.a)(w,2),C=y[0],k=y[1],S={visibleData:s,setvisibleData:m,visibleData2:h,setvisibleData2:g,startTime:O,setStartTime:j,interval:C,setInterval:k};return Object(r.useEffect)((function(){n("https://poloniex.com/public?command=returnChartData&currencyPair=".concat(l,"&start=").concat(i-O,"&end=").concat(i,"&period=").concat(C))}),[l,O,C]),a.a.createElement(me,null,c&&a.a.createElement(x,null,"Falha na requisi\xe7\xe3o, tente novamente!"),o&&a.a.createElement(x,null,"Carregando..."),0!==t.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Gr\xe1fico de ",l),a.a.createElement(Ue,null,a.a.createElement(we.c,{width:700,height:350,data:je(t,O),margin:{top:5,right:30,left:20,bottom:5}},a.a.createElement(we.a,{strokeDasharray:"solid",strokeOpacity:"0.1"}),a.a.createElement(we.e,{tick:{fontSize:13},stroke:"white",dataKey:"covertedData"}),a.a.createElement(we.f,{tick:{fontSize:13},stroke:"white",width:70}),a.a.createElement(we.d,{offset:100}),a.a.createElement(we.b,{strokeWidth:2.5,dot:!1,type:"monotone",dataKey:s,stroke:"#00b49d"}),a.a.createElement(we.b,{strokeWidth:2.5,dot:!1,type:"monotone",dataKey:h,stroke:"red"})),a.a.createElement(Ae.Provider,{value:S},a.a.createElement(Pe,null)),a.a.createElement("span",null,"Intervalos dispon\xedveis"," ",a.a.createElement(V,{info:"Alguns intervalos n\xe3o est\xe3o dispon\xedveis para todos os tempos, devido ao elevado volume de dados."}),a.a.createElement(P.a,null)))))})),Me=function(){return a.a.createElement(E,null,a.a.createElement(x,null,"Escolha um par de moedas!"))},Be=function(){return a.a.createElement(E,null,a.a.createElement(x,null,"P\xe1gina n\xe3o encontrada."))},ze=function(){return a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"/chart/:currency",component:Le}),a.a.createElement(b.a,{path:"/orders/:currency",component:ae}),a.a.createElement(b.a,{path:"/ranking",component:Oe}),a.a.createElement(b.a,{exact:!0,path:"/",component:Me}),a.a.createElement(b.a,{component:Be}))},He=function(e,n){var t=Object(ce.a)(e);return n&&(t=t.filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}))),t},We=function(e){var n=e.onChange,t=e.placeholder;return a.a.createElement(G,{onChange:n,placeholder:t})},Ke=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))},Je={getCurrenciesNames:function(e){return function(n){return n({type:"REQUEST_CURRENCIES_API"}),U(e).then((function(e){return n({type:"REQUEST_CURRENCIES_SUCCESS",currenciesNames:Object.keys(e)})}),(function(e){return n(T(e))}))}},getOrders:te},Ge=Object(v.b)((function(e){return{currenciesNames:e.currenciesInfos.namesList,error:e.currenciesInfos.error,loadingNames:e.currenciesInfos.loadingNames,orders:e.orderBook.orders}}),Je)((function(e){var n=e.getCurrenciesNames,t=e.currenciesNames,o=(e.getOrders,e.orders,e.loadingNames),c=e.error;Object(r.useEffect)((function(){n("https://poloniex.com/public?command=returnTicker")}),[n]);var i=Object(r.useState)(""),l=Object(oe.a)(i,2),u=l[0],d=l[1],s=Object(r.useState)(null),m=Object(oe.a)(s,2),f=m[0],p=m[1],h=Object(b.f)();return a.a.createElement(W,null,a.a.createElement(K,null,a.a.createElement(We,{placeholder:"Busque por um par de moedas",onChange:function(e){return d(e.target.value)}}),a.a.createElement(Z,{background:f?"#00b49d":"gray",disabled:!f,onClick:function(){return h.push("/orders/".concat(f))}},a.a.createElement(Ke,null))),a.a.createElement(Y,null,c&&a.a.createElement("h3",null,"Falha na requisi\xe7\xe3o, tente novamente!"),o&&a.a.createElement("h3",null,"Carregando..."),He(t,u).map((function(e){return a.a.createElement(X,{background:e===f?"#00B49D":"#c4c4c4",color:e===f?"#fff":"#000",onClick:function(){return p(e)},key:e},e)}))))}));function Xe(){var e=Object(l.a)(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap-reverse;\n  justify-content: space-around;\n  margin: 3vh 2vw;\n  @media only screen and (min-width: 1600px) {\n    margin: 5vh 12vw;\n  }\n  @media only screen and (max-width: 800px) {\n    align-items: flex-start;\n    margin: auto;\n  }\n"]);return Xe=function(){return e},e}var Ye=u.b.div(Xe());var Ze=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(p,null),a.a.createElement(Ye,null,a.a.createElement(Ge,null),a.a.createElement(ze,null)))},$e=t(26),en=t(162),nn=t(10),tn={loadingNames:!1,loadingInfo:!1,namesList:[],currenciesInfo:[]},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_CURRENCIES_API":return Object(nn.a)(Object(nn.a)({},e),{},{loadingNames:!0});case"REQUEST_CURRENCIES_FAILURE":return Object(nn.a)(Object(nn.a)({},e),{},{loadingNames:!1,loadingInfo:!1,error:n.error});case"REQUEST_CURRENCIES_SUCCESS":return Object(nn.a)(Object(nn.a)({},e),{},{loadingNames:!1,namesList:n.currenciesNames});case"REQUEST_CURRENCIES_INFO_API":return Object(nn.a)(Object(nn.a)({},e),{},{loadingInfo:!0});case"REQUEST_CURRENCIES_INFO_SUCCESS":return Object(nn.a)(Object(nn.a)({},e),{},{loadingInfo:!1,currenciesInfo:n.currenciesInfo});default:return e}},an={loading:!1,chartData:[]},on=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_CHART_API":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!0,chartData:[]});case"REQUEST_CHART_FAILURE":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!1,error:n.error});case"REQUEST_CHART_SUCCESS":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!1,chartData:n.chartData});default:return e}},cn={loading:!1,orders:[]},ln=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_ORDER_API":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!0,orders:[]});case"REQUEST_ORDER_FAILURE":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!1,error:n.error});case"REQUEST_ORDER_SUCCESS":return Object(nn.a)(Object(nn.a)({},e),{},{loading:!1,orders:n.orders});case"CLEAN_ORDERS":return Object(nn.a)(Object(nn.a)({},e),{},{orders:[]});default:return e}},un=Object($e.combineReducers)({currenciesInfos:rn,orderBook:ln,currencyChart:on}),dn=t(163),sn=Object($e.createStore)(un,Object(en.composeWithDevTools)(Object($e.applyMiddleware)(dn.a)));c.a.render(a.a.createElement(i.a,null,a.a.createElement(v.a,{store:sn},a.a.createElement(Ze,null))),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.414e3f65.chunk.js.map