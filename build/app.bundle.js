webpackJsonp([0],[,,,,,,,function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(20);const c=s.a.module("common",[o["a"]]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(23);var c=n(27);var a=n(30);var r=n(34);var u=n(37);var h=n(40);var l=n(43);var p=n(45);var d=n(48);var m=n(51);var v=n(54);var f=n(57);var g=n(61);var S=n(65);var $=n(69);var k=n(71);var w=n(75);var I=n(77);var b=n(78);var y=n(80);var T=n(84);var A=n(87);const D=s.a.module("components",[o["a"],c["a"],a["a"],r["a"],u["a"],h["a"],l["a"],p["a"],d["a"],m["a"],v["a"],f["a"],g["a"],S["a"],$["a"],k["a"],w["a"],I["a"],b["a"],y["a"],T["a"],A["a"]]).name;e["a"]=D},function(t,e,n){"use strict";const i={templateUrl:"app/root.html"};e["a"]=i},,,,,function(t,e){},function(t,e){},,function(t,e,n){"use strict";var i=n(19);const s={templateUrl:"app/common/app.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";e["a"]=i;function i(t,e){const n=t.interceptors;n.push(["$q","$rootScope",(t,e)=>{let n=0;return{request(t){n+=1;e.isLoadingView=true;return t},response(t){n-=1;if(n===0){e.isLoadingView=false}return t},responseError(i){n-=1;if(!n){e.isLoadingView=false}return t.reject(i)}}}]);e.html5Mode(true)}i.$inject=["$httpProvider","$locationProvider"]},function(t,e,n){"use strict";class i{$onInit(){this.tabSelectedIndex=0}next(){this.tabSelectedIndex=Math.min(this.tabSelectedIndex+1,6)}previous(){this.tabSelectedIndex=Math.max(this.tabSelectedIndex-1,0)}}e["a"]=i;i.$inject=[]},function(t,e,n){"use strict";var i=n(14);var s=n.n(i);var o=n(0);var c=n.n(o);var a=n(4);var r=n.n(a);var u=n(17);var h=n(18);const l=c.a.module("common.app",[r.a]).component("app",u["a"]).config(h["a"]).name;e["a"]=l},function(t,e,n){"use strict";var i=n(22);const s={templateUrl:"app/components/account/account.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.AccountService=t}$onInit(){this.account=this.AccountService.getAccount()}}e["a"]=i;i.$inject=["AccountsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(21);var c=n(24);const a=s.a.module("components.account",[]).component("account",o["a"]).service("AccountsService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);class o{constructor(t,e){this.$http=t;this.SessionService=e;this.account={}}getAccount(){return this.account}refresh(){this.SessionService.isLogged().then(t=>{this.getAccounts({environment:t.environment,token:t.token,accountId:t.accountId})})}getAccounts(t){const e=t.environment||"practice",n=t.token,i=t.accountId,o=i?"/api/account":"/api/accounts";return this.$http.post(o,{environment:e,token:n,accountId:i}).then(t=>{const o=t.data.accounts||t.data;if(t.data.message){throw t.data.message}if(!o.length){s.a.merge(this.account,t.data.account);this.account.timestamp=new Date;this.account.unrealizedPLPercent=this.account.unrealizedPL/this.account.balance*100;if(!this.account.instruments){this.$http.post("/api/instruments",{environment:e,token:n,accountId:i}).then(t=>{this.account.instruments=t.data;this.account.pips={};s.a.forEach(this.account.instruments,t=>{this.account.pips[t.name]=Math.pow(10,t.pipLocation)})})}}return o})}setStreamingInstruments(t){this.account.streamingInstruments=Object.keys(t).filter(e=>!!t[e]);return this.account.streamingInstruments}}e["a"]=o;o.$inject=["$http","SessionService"]},function(t,e,n){"use strict";var i=n(26);const s={templateUrl:"app/components/accounts-bottomsheet/accounts-bottomsheet.html",controller:i["a"],bindings:{accounts:"<"}};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.$mdBottomSheet=t}onAccountClick(t){const e=this.accounts[t];this.$mdBottomSheet.hide(e)}}e["a"]=i;i.$inject=["$mdBottomSheet"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(25);const c=s.a.module("components.accounts-bottomsheet",[]).component("accountsBottomsheet",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(29);const s={templateUrl:"app/components/activity/activity.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.ActivityService=t}$onInit(){this.ActivityService.getActivities().then(t=>{this.activities=t})}}e["a"]=i;i.$inject=["ActivityService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(28);var c=n(31);const a=s.a.module("components.activity",[]).component("activity",o["a"]).service("ActivityService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$http=t;this.SessionService=e;this.AccountsService=n}$onInit(){this.activities=[]}getActivities(){const t=this.AccountsService.getAccount(),e=t.lastTransactionID;return this.SessionService.isLogged().then(t=>this.$http.post("/api/transactions",{environment:t.environment,token:t.token,accountId:t.accountId,lastTransactionID:e}).then(t=>{this.activities=t.data.reverse();return this.activities}).catch(t=>t.data))}addActivity(t){this.activities.splice(0,0,{id:t.id,type:t.type,instrument:t.instrument,units:t.units,price:t.price,pl:t.pl,accountBalance:t.accountBalance,time:t.time})}}e["a"]=i;i.$inject=["$http","SessionService","AccountsService"]},function(t,e,n){"use strict";var i=n(33);const s={templateUrl:"app/components/charts/charts.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);class o{constructor(t,e,n,i,s,o){this.$rootScope=t;this.$mdDialog=e;this.AccountsService=n;this.ChartsService=i;this.QuotesService=s;this.TradesService=o}$onInit(){this.account=this.AccountsService.getAccount();this.selectedInstrument="EUR_USD";this.granularities=["S5","S10","S15","S30","M1","M2","M3","M4","M5","M10","M15","M30","H1","H2","H3","H4","H6","H8","H12","D","W","M"];this.selectedGranularity="M5";this.feed=this.QuotesService.getQuotes();this.trades=this.TradesService.getTrades();this.changeChart(this.selectedInstrument,this.selectedGranularity)}changeChart(t,e){this.ChartsService.getHistQuotes({instrument:t,granularity:e}).then(t=>{this.data=t})}openOrderDialog(t,e){const n=s.a.extend(this.$rootScope.$new(true),{params:{side:e,selectedInstrument:this.selectedInstrument,instruments:this.account.streamingInstruments}});this.$mdDialog.show({template:"<order-dialog aria-label='Order Dialog' params='params'></order-dialog>",scope:n,preserveScope:true,targetEvent:t})}}e["a"]=o;o.$inject=["$rootScope","$mdDialog","AccountsService","ChartsService","QuotesService","TradesService"]},function(t,e,n){"use strict";var i=n(15);var s=n.n(i);var o=n(0);var c=n.n(o);var a=n(32);var r=n(35);const u=c.a.module("components.charts",[]).component("charts",a["a"]).service("ChartsService",r["a"]).name;e["a"]=u},function(t,e,n){"use strict";class i{constructor(t,e){this.$http=t;this.SessionService=e}getHistQuotes(t){return this.SessionService.isLogged().then(e=>{const n=t&&t.instrument||"EUR_USD",i=t&&t.granularity||"M5",s=t&&t.count||251,o=t&&t.alignmentTimezone||"America/New_York",c=t&&t.dailyAlignment||"0";return this.$http.post("/api/candles",{environment:e.environment,token:e.token,instrument:n,granularity:i,count:s,alignmentTimezone:o,dailyAlignment:c}).then(t=>t.data).catch(t=>t.data)})}}e["a"]=i;i.$inject=["$http","SessionService"]},function(t,e,n){"use strict";e["a"]=i;function i(){const t={restrict:"A",link:e};return t;function e(t,e,n){t.$watch(n.dualColor,(t,n)=>{if(t!==n){if(t>0){e.removeClass("highlight-red");e.addClass("highlight-green")}if(t<0){e.removeClass("highlight-green");e.addClass("highlight-red")}}})}}i.$inject=[]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(36);const c=s.a.module("components.dual-color",[]).directive("dualColor",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(39);const s={templateUrl:"app/components/exposure/exposure.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.TradesService=t}$onInit(){this.exposures=[];const t=this.TradesService.getTrades(),e={};t.forEach(t=>{const n=t.instrument.split("_");e[n[0]]=e[n[0]]||0;e[n[1]]=e[n[1]]||0;e[n[0]]+=parseInt(t.currentUnits,10);e[n[1]]-=t.currentUnits*t.price});Object.keys(e).forEach(t=>{const n=e[t]>0;this.exposures.push({type:n?"Long":"Short",market:t,units:Math.abs(e[t])})})}}e["a"]=i;i.$inject=["TradesService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(38);const c=s.a.module("components.exposure",[]).component("exposure",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(42);const s={templateUrl:"app/components/header/header.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);class o{constructor(t,e,n,i,s,o,c,a,r){this.$window=t;this.$rootScope=e;this.$mdDialog=n;this.$mdBottomSheet=i;this.ToastService=s;this.AccountsService=o;this.SessionService=c;this.QuotesService=a;this.StreamingService=r}$onInit(){const t=this.$window.localStorage.getItem("argo.instruments");this.instrs=s.a.fromJson(t)||{EUR_USD:true,USD_JPY:true,GBP_USD:true,EUR_GBP:true,USD_CHF:true,EUR_JPY:true,EUR_CHF:true,USD_CAD:true,AUD_USD:true,GBP_JPY:true};this.isLoadingViewWatcher=this.$rootScope.$watch("isLoadingView",()=>{this.isLoadingView=this.$rootScope.isLoadingView})}openTokenDialog(t){this.$mdDialog.show({template:"<token-dialog aria-label='Token Dialog'></token-dialog>",targetEvent:t}).then(e=>{if(e){this.environment=e.environment;this.token=e.token}else{this.environment="";this.token="";this.accountId=""}this.AccountsService.getAccounts({environment:this.environment,token:this.token}).then(e=>{const n=s.a.extend(this.$rootScope.$new(true),{accounts:e});this.$mdBottomSheet.show({template:"<accounts-bottomsheet accounts='accounts'></accounts-bottomsheet>",scope:n,preserveScope:true,targetEvent:t}).then(t=>{this.accountId=t.id;this.SessionService.setCredentials({environment:this.environment,token:this.token,accountId:this.accountId});this.AccountsService.getAccounts({environment:this.environment,token:this.token,accountId:this.accountId}).then(()=>{const t=this.AccountsService.setStreamingInstruments(this.instrs);this.StreamingService.startStream({environment:this.environment,accessToken:this.token,accountId:this.accountId,instruments:t})})})},t=>{this.ToastService.show(t)})}).catch(t=>{if(t){this.ToastService.show(t)}})}openSettingsDialog(t){this.SessionService.isLogged().then(e=>{const n=this.AccountsService.getAccount().instruments;s.a.forEach(n,t=>{if(!this.instrs.hasOwnProperty(t.name)){this.instrs[t.name]=false}});const i=s.a.extend(this.$rootScope.$new(true),{instruments:this.instrs});this.$mdDialog.show({template:"<settings-dialog aria-label='Settings Dialog' instruments='instruments'></settings-dialog>",scope:i,preserveScope:true,targetEvent:t}).then(t=>{let n;if(t){this.$window.localStorage.setItem("argo.instruments",s.a.toJson(t));n=this.AccountsService.setStreamingInstruments(t);this.QuotesService.reset();this.StreamingService.startStream({environment:e.environment,accessToken:e.token,accountId:e.accountId,instruments:n})}}).catch(t=>{if(t){this.ToastService.show(t)}})})}}e["a"]=o;o.$inject=["$window","$rootScope","$mdDialog","$mdBottomSheet","ToastService","AccountsService","SessionService","QuotesService","StreamingService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(41);const c=s.a.module("components.header",[]).component("header",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";e["a"]=i;function i(t){const e={restrict:"A",link:n};return e;function n(e,n,i){e.$watch(i.highlighter,(e,i)=>{let s;if(e!==i){s=e<i?"highlight-red":"highlight-green";n.addClass(s);t(()=>{n.removeClass(s)},500)}})}}i.$inject=["$timeout"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(44);const c=s.a.module("components.highlighter",[]).directive("highlighter",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(47);const s={templateUrl:"app/components/news/news.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.NewsService=t}$onInit(){this.NewsService.getNews().then(t=>{this.news=t})}}e["a"]=i;i.$inject=["NewsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(46);var c=n(49);const a=s.a.module("components.news",[]).component("news",o["a"]).service("NewsService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e){this.$http=t;this.SessionService=e}getNews(){return this.SessionService.isLogged().then(t=>this.$http.post("/api/calendar",{environment:t.environment,token:t.token}).then(t=>t.data).catch(t=>t.data))}}e["a"]=i;i.$inject=["$http","SessionService"]},function(t,e,n){"use strict";var i=n(1);var s=n.n(i);var o=n(5);var c=n.n(o);e["a"]=a;function a(){const t={restrict:"E",scope:{instrument:"=",granularity:"=",data:"=",feed:"=",trades:"="},link:e};return t;function e(t,e){let n,s,o,a,r,u,h,l,p=0;t.$watch("data",i=>{if(i&&i.length>0){n=t.instrument;s=t.granularity;r=m(e[0],i);h=a&&a[a.length-1];l=h.close;p=h.volume;u=d(s)}});t.$watch("feed",t=>{const e=t[n],i=d(s,e);let o;if(e&&a&&u!==i){a.shift();e.bid=parseFloat(e.bid);e.ask=parseFloat(e.ask);o=(e.bid+e.ask)/2;p=0;a.push({open:o,close:o,high:o,low:o,date:new Date(i),volume:p});u=i}if(e&&a){if(h.close!==l){p+=1}e.bid=parseFloat(e.bid);e.ask=parseFloat(e.ask);o=(e.bid+e.ask)/2;h=a&&a[a.length-1];l=h.close;h.close=o;h.volume=p;if(h.close>h.high){h.high=h.close}if(h.close<h.low){h.low=h.close}r()}},true);function d(t,e){const n=e&&e.time,i=n?new Date(n):new Date;let s;if(t==="S5"){s=1e3*5}else if(t==="S10"){s=1e3*10}else if(t==="S15"){s=1e3*15}else if(t==="S30"){s=1e3*30}else if(t==="M1"){s=1e3*60}else if(t==="M2"){s=1e3*60*2}else if(t==="M3"){s=1e3*60*3}else if(t==="M4"){s=1e3*60*4}else if(t==="M5"){s=1e3*60*5}else if(t==="M10"){s=1e3*60*10}else if(t==="M15"){s=1e3*60*15}else if(t==="M30"){s=1e3*60*30}else if(t==="H1"){s=1e3*60*60}else if(t==="H2"){s=1e3*60*60*2}else if(t==="H3"){s=1e3*60*60*3}else if(t==="H4"){s=1e3*60*60*4}else if(t==="H6"){s=1e3*60*60*6}else if(t==="H8"){s=1e3*60*60*8}else if(t==="H12"){s=1e3*60*60*12}else{s=1e3*60*60*12}return Math.floor(i/s)*s}function m(e,r){const u={top:0,right:20,bottom:30,left:75},h=960-u.left-u.right,l=400-u.top-u.bottom;const p=c.a.scale.financetime().range([0,h]);const d=i["scaleLinear"]().range([l,0]);const m=i["scaleLinear"]().range([d(0),d(.2)]);const v=c.a.plot.ohlc().xScale(p).yScale(d);const f=c.a.plot.tradearrow().xScale(p).yScale(d).orient(t=>{const e=t.type.startsWith("buy")?"up":"down";return e});const g=c.a.plot.sma().xScale(p).yScale(d);const S=c.a.indicator.sma().period(10);const $=c.a.plot.sma().xScale(p).yScale(d);const k=c.a.indicator.sma().period(20);const w=c.a.plot.volume().accessor(v.accessor()).xScale(p).yScale(m);const I=i["axisBottom"](p);const b=i["axisLeft"](d);const y=i["axisRight"](m).ticks(3).tickFormat(i["format"](",.3s"));i["select"](e).select("svg").remove();const T=i["select"](e).append("svg").attr("width",h+u.left+u.right).attr("height",l+u.top+u.bottom).append("g").attr("transform",`translate(${u.left}, ${u.top})`);const A=T.append("defs").append("clipPath").attr("id","ohlcClip");A.append("rect").attr("x",0).attr("y",0).attr("width",h).attr("height",l);const D=T.append("g").attr("class","ohlc").attr("transform","translate(0,0)");D.append("g").attr("class","volume").attr("clip-path","url(#ohlcClip)");D.append("g").attr("class","candlestick").attr("clip-path","url(#ohlcClip)");D.append("g").attr("class","indicator sma ma-0").attr("clip-path","url(#ohlcClip)");D.append("g").attr("class","indicator sma ma-1").attr("clip-path","url(#ohlcClip)");D.append("g").attr("class","tradearrow");T.append("g").attr("class","x axis").attr("transform",`translate(0, ${l})`);T.append("g").attr("class","y axis").append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("font-weight","bold").style("text-anchor","end").text(`Price (${n} / ${s})`);T.append("g").attr("class","volume axis");a=i["csvParse"](r).map(t=>({date:new Date(t.Date),open:+t.Open,high:+t.High,low:+t.Low,close:+t.Close,volume:+t.Volume}));T.select("g.candlestick").datum(a);T.select("g.sma.ma-0").datum(S(a));T.select("g.sma.ma-1").datum(k(a));T.select("g.volume").datum(a);P();function P(){const e=v.accessor();p.domain(a.map(e.d));p.zoomable().domain([a.length-130,a.length]);d.domain(c.a.scale.plot.ohlc(a.slice(a.length-130,a.length)).domain());m.domain(c.a.scale.plot.volume(a.slice(a.length-130,a.length)).domain());T.select("g.x.axis").call(I);T.select("g.y.axis").call(b);T.select("g.volume.axis").call(y);T.select("g.candlestick").datum(a).call(v);T.select("g.tradearrow").remove();T.append("g").attr("class","tradearrow");o=t.trades.filter(t=>t.instrument===n).map(t=>({date:new Date(t.openTime),type:t.currentUnits>0?"buy":"sell",price:t.price}));T.select("g.tradearrow").datum(o).call(f);T.select("g.sma.ma-0").datum(S(a)).call(g);T.select("g.sma.ma-1").datum(k(a)).call($);T.select("g.volume").datum(a).call(w)}return P}}}a.$inject=[]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(50);const c=s.a.module("components.ohlc-chart",[]).directive("ohlcChart",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(53);const s={templateUrl:"app/components/order-dialog/order-dialog.html",controller:i["a"],bindings:{params:"<"}};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t,e,n,i,s){this.$mdDialog=t;this.ToastService=e;this.QuotesService=n;this.OrdersService=i;this.AccountsService=s}$onInit(){const t=this.AccountsService.getAccount();this.pips=t.pips;this.type="MARKET";this.side=this.params.side;this.instruments=this.params.instruments;this.selectedInstrument=this.params.selectedInstrument;this.changeMarket(this.selectedInstrument);this.expires=[{label:"1 Hour",value:60*60*1e3},{label:"2 Hours",value:2*60*60*1e3},{label:"3 Hours",value:3*60*60*1e3},{label:"4 Hours",value:4*60*60*1e3},{label:"5 Hours",value:5*60*60*1e3},{label:"6 Hours",value:6*60*60*1e3},{label:"8 Hours",value:8*60*60*1e3},{label:"12 Hours",value:12*60*60*1e3},{label:"18 Hours",value:18*60*60*1e3},{label:"1 Day",value:60*60*24*1e3},{label:"2 Days",value:2*60*60*24*1e3},{label:"1 Week",value:7*60*60*24*1e3},{label:"1 Month",value:30*60*60*24*1e3},{label:"2 Months",value:60*60*60*24*1e3},{label:"3 Months",value:90*60*60*24*1e3}];this.selectedExpire=6048e5;this.measure="price";this.isLowerBound=false;this.isUpperBound=false;this.isTakeProfit=false;this.isStopLoss=false;this.isTrailingStop=false}changeMarket(t){if(!this.pips){return}const e=this.QuotesService.getQuotes()[t],n=(this.pips[this.selectedInstrument].toString().match(/0/g)||[]).length;this.measure="price";this.step=parseFloat(this.pips[this.selectedInstrument]);if(this.side==="buy"){this.quote=parseFloat(e&&e.ask);this.takeProfit=parseFloat((this.quote+this.step*10).toFixed(n));this.stopLoss=parseFloat((this.quote-this.step*10).toFixed(n))}else{this.quote=parseFloat(e&&e.bid);this.takeProfit=parseFloat((this.quote-this.step*10).toFixed(n));this.stopLoss=parseFloat((this.quote+this.step*10).toFixed(n))}this.lowerBound=parseFloat((this.quote-this.step).toFixed(n));this.upperBound=parseFloat((this.quote+this.step).toFixed(n));this.trailingStop=25}changeMeasure(t){if(t==="price"){this.changeMarket(this.selectedInstrument)}else{this.lowerBound=1;this.upperBound=1;this.takeProfit=10;this.stopLoss=10;this.trailingStop=25;this.step=1}}hide(){this.$mdDialog.hide()}cancel(){this.$mdDialog.cancel()}answer(t){const e={},n=this.side==="buy",i=this.measure==="pips";this.$mdDialog.hide(t);this.step=parseFloat(this.pips[this.selectedInstrument]);e.instrument=this.selectedInstrument;e.units=this.units;if(this.units&&!n){e.units=`-${e.units}`}e.side=this.side;e.type=this.type;if(e.type==="LIMIT"){e.price=this.quote&&this.quote.toString();e.gtdTime=new Date(Date.now()+this.selectedExpire)}if(i){if(this.isLowerBound){e.priceBound=parseFloat(this.quote-this.step*this.lowerBound).toString()}if(this.isUpperBound){e.priceBound=parseFloat(this.quote+this.step*this.upperBound).toString()}if(n){if(this.isTakeProfit){e.takeProfitOnFill={};e.takeProfitOnFill.price=parseFloat(this.quote+this.step*this.takeProfit).toString()}if(this.isStopLoss){e.stopLossOnFill={};e.order.takeProfitOnFill.price=parseFloat(this.quote-this.step*this.stopLoss).toString()}}else{if(this.isTakeProfit){e.takeProfitOnFill={};e.takeProfitOnFill.price=parseFloat(this.quote-this.step*this.takeProfit).toString()}if(this.isStopLoss){e.stopLossOnFill={};e.order.takeProfitOnFill.price=parseFloat(this.quote+this.step*this.stopLoss).toString()}}}else{if(this.isLowerBound){e.priceBound=this.lowerBound.toString()}if(this.isUpperBound){e.priceBound=this.upperBound.toString()}if(this.isTakeProfit){e.takeProfitOnFill={};e.takeProfitOnFill.price=this.takeProfit.toString()}if(this.isStopLoss){e.stopLossOnFill={};e.stopLossOnFill.price=this.stopLoss.toString()}}if(this.isTrailingStop){e.trailingStopLossOnFill={};e.trailingStopLossOnFill.distance=(this.step*this.trailingStop).toString()}if(t==="submit"){this.OrdersService.putOrder(e).then(t=>{let e,n,i,s;if(t.code&&t.message){s="ERROR "+`${t.code} ${t.message}`;this.ToastService.show(s)}else if(t.errorMessage){s=`ERROR ${t.errorMessage}`;this.ToastService.show(s)}else if(t.orderCancelTransaction){n=t.orderCancelTransaction;s=`ERROR ${n.reason}`;this.ToastService.show(s)}else{e=t.orderFillTransaction||t.orderFillTransaction||t.orderCreateTransaction;i=e.units>0?"buy":"sell";s=`${i} `+`${e.instrument} `+`#${e.id} `+`@${e.price} `+`for ${e.units}`;this.ToastService.show(s)}})}}}e["a"]=i;i.$inject=["$mdDialog","ToastService","QuotesService","OrdersService","AccountsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(52);const c=s.a.module("components.order-dialog",[]).component("orderDialog",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(56);const s={templateUrl:"app/components/orders/orders.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$mdDialog=t;this.ToastService=e;this.OrdersService=n}$onInit(){this.orders=this.OrdersService.getOrders();this.OrdersService.refresh()}closeOrder(t,e){const n=this.$mdDialog.confirm().textContent("Are you sure to close the order?").ariaLabel("Order closing confirmation").ok("Ok").cancel("Cancel").targetEvent(t);this.$mdDialog.show(n).then(()=>{this.OrdersService.closeOrder(e).then(t=>{const e="Closed "+`#${t.orderCancelTransaction.orderID}`;this.ToastService.show(e)})})}}e["a"]=i;i.$inject=["$mdDialog","ToastService","OrdersService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(55);var c=n(58);const a=s.a.module("components.orders",[]).component("orders",o["a"]).service("OrdersService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$http=t;this.SessionService=e;this.AccountsService=n;this.orders=[]}getOrders(){return this.orders}refresh(){this.SessionService.isLogged().then(t=>{this.$http.post("/api/orders",{environment:t.environment,token:t.token,accountId:t.accountId}).then(t=>{this.orders.length=0;angular.extend(this.orders,t.data)})})}putOrder(t){return this.SessionService.isLogged().then(e=>this.$http.post("/api/order",{environment:e.environment,token:e.token,accountId:e.accountId,instrument:t.instrument,units:t.units,side:t.side,type:t.type,expiry:t.expiry,price:t.price,priceBound:t.lowerBound||t.upperBound,stopLossOnFill:t.stopLossOnFill,takeProfitOnFill:t.takeProfitOnFill,trailingStopLossOnFill:t.trailingStopLossOnFill}).then(t=>t.data).catch(t=>t.data))}closeOrder(t){return this.SessionService.isLogged().then(e=>this.$http.post("/api/closeorder",{environment:e.environment,token:e.token,accountId:e.accountId,id:t}).then(t=>t.data).catch(t=>t.data))}updateOrders(t){const e=this.AccountsService.getAccount(),n=e.pips;this.orders.forEach((e,i)=>{let s;if(e.instrument===t.instrument){if(e.units>0){s=t.ask}if(e.units<0){s=t.bid}this.orders[i].current=s;this.orders[i].distance=Math.abs(s-e.price)/n[e.instrument]}})}}e["a"]=i;i.$inject=["$http","SessionService","AccountsService"]},function(t,e,n){"use strict";var i=n(60);const s={templateUrl:"app/components/plugins/plugins.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.PluginsService=t}$onInit(){this.plugins=this.PluginsService.getPlugins();this.pluginsInfo=this.PluginsService.getPluginsInfo();this.PluginsService.refresh()}engage(){this.PluginsService.engagePlugins(this.plugins)}}e["a"]=i;i.$inject=["PluginsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(59);var c=n(62);const a=s.a.module("components.plugins",[]).component("plugins",o["a"]).service("PluginsService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$http=t;this.SessionService=e;this.AccountsService=n;this.plugins={};this.pluginsInfo={count:0}}getPlugins(){return this.plugins}getPluginsInfo(){return this.pluginsInfo}refresh(){this.SessionService.isLogged().then(t=>{this.$http.post("/api/plugins",{environment:t.environment,token:t.token,accountId:t.accountId}).then(t=>{let e;for(e in this.plugins){if(this.plugins.hasOwnProperty(e)){delete this.plugins[e]}}angular.extend(this.plugins,t.data);this.pluginsInfo.count=Object.keys(this.plugins).length;Object.keys(this.plugins).forEach(t=>{if(this.plugins[t]==="enabled"){this.plugins[t]=true}else{this.plugins[t]=false}})})})}engagePlugins(t){this.SessionService.isLogged().then(e=>{const n=this.AccountsService.getAccount();this.$http.post("/api/engageplugins",{environment:e.environment,token:e.token,accountId:e.accountId,plugins:t,config:{pips:n.pips}})})}}e["a"]=i;i.$inject=["$http","SessionService","AccountsService"]},function(t,e,n){"use strict";var i=n(64);const s={templateUrl:"app/components/positions/positions.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.PositionsService=t}$onInit(){this.PositionsService.getPositions().then(t=>{this.positions=t})}}e["a"]=i;i.$inject=["PositionsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(63);var c=n(66);const a=s.a.module("components.positions",[]).component("positions",o["a"]).service("PositionsService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e){this.$http=t;this.SessionService=e}getPositions(){return this.SessionService.isLogged().then(t=>this.$http.post("/api/positions",{environment:t.environment,token:t.token,accountId:t.accountId}).then(t=>{const e=[];t.data.forEach(t=>{const n=t.long&&parseInt(t.long.units,10);const i=t.short&&parseInt(t.short.units,10);const s=n||i;const o=s>0?"buy":"sell";const c=n&&t.long.averagePrice||i&&t.short.averagePrice;e.push({side:o,instrument:t.instrument,units:s,avgPrice:c})});return e}).catch(t=>t.data))}}e["a"]=i;i.$inject=["$http","SessionService"]},function(t,e,n){"use strict";var i=n(68);const s={templateUrl:"app/components/quotes/quotes.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.QuotesService=t}$onInit(){this.quotes=this.QuotesService.getQuotes()}}e["a"]=i;i.$inject=["QuotesService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(67);var c=n(70);const a=s.a.module("components.quotes",[]).component("quotes",o["a"]).service("QuotesService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);class o{constructor(t){this.AccountsService=t;this.quotes={}}getQuotes(){return this.quotes}updateTick(t){const e=this.AccountsService.getAccount(),n=e.streamingInstruments,i=e.pips,o=t.instrument;this.quotes[o]={time:t.time,ask:t.ask,bid:t.bid,spread:((t.ask-t.bid)/i[o]).toFixed(1)};if(!s.a.equals(n,Object.keys(this.quotes))){n.forEach(t=>{let e;if(this.quotes.hasOwnProperty(t)){e=this.quotes[t];delete this.quotes[t];this.quotes[t]=e}})}}reset(){let t;for(t in this.quotes){if(this.quotes.hasOwnProperty(t)){delete this.quotes[t]}}}}e["a"]=o;o.$inject=["AccountsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(72);const c=s.a.module("components.session",[]).service("SessionService",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";class i{constructor(t){this.deferred=t.defer();this.credentials={environment:null,token:null,accountId:null}}setCredentials(t){this.credentials.environment=t.environment;this.credentials.token=t.token;this.credentials.accountId=t.accountId;this.deferred.resolve(this.credentials)}isLogged(){return this.deferred.promise}}e["a"]=i;i.$inject=["$q"]},function(t,e,n){"use strict";var i=n(74);const s={templateUrl:"app/components/settings-dialog/settings-dialog.html",controller:i["a"],bindings:{instruments:"<"}};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.$mdDialog=t}hide(){this.$mdDialog.hide()}cancel(){this.$mdDialog.cancel()}answer(t){this.$mdDialog.hide(t)}}e["a"]=i;i.$inject=["$mdDialog"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(73);const c=s.a.module("components.settings-dialog",[]).component("settingsDialog",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(1);var s=n.n(i);e["a"]=o;function o(){const t={},e={restrict:"E",link:n,scope:{instrument:"=",data:"=",length:"="},replace:true,template:"<svg class='sl'></svg>",transclude:true};return e;function n(e,n){e.$watch("data",t=>{s(t)});function s(s){const o=i["select"](n[0]),c=o.node(),a=e.instrument,r=c.clientWidth,u=getComputedStyle(c)["font-size"].replace("px","");o.selectAll("*").remove();if(!t[a]){t[a]=[]}t[a].push((parseFloat(s.bid)+parseFloat(s.ask))/2);t[a]=t[a].slice(-e.length);if(t[a][0]>t[a].slice(-1)){c.style.stroke="red"}else{c.style.stroke="green"}c.style.height=`${u}px`;const h=i["min"](t[a]);const l=i["max"](t[a]);const p=i["scaleLinear"]().domain([0,t[a].length-1]).range([0,r]);const d=i["scaleLinear"]().domain([h,l]).range([u,0]);const m=t[a].map((t,e)=>[p(e),d(t)]).join("L");o.append("path").attr("d",`M${m}`)}}}o.$inject=[]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(76);const c=s.a.module("components.sl-chart",[]).directive("slChart",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(79);const c=s.a.module("components.streaming",[]).service("StreamingService",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);class o{constructor(t,e,n,i,s,o,c,a,r){this.$timeout=t;this.$http=e;this.ToastService=n;this.QuotesService=i;this.ActivityService=s;this.TradesService=o;this.OrdersService=c;this.AccountsService=a;this.PluginsService=r}startStream(t){this.$http.post("/api/startstream",{environment:t.environment,accessToken:t.accessToken,accountId:t.accountId,instruments:t.instruments}).then(()=>{this.getStream()}).catch(t=>{this.ToastService.show(t)})}getStream(){const t=new WebSocket("ws://localhost:8000/stream");t.onmessage=(t=>{let e,n,i,o,c,a;this.$timeout(()=>{try{e=s.a.fromJson(t.data);n=e.closeoutAsk&&e.closeoutBid;o=e.accountID;a=e.refreshPlugins;if(n){i={time:e.time,instrument:e.instrument,ask:e.closeoutAsk,bid:e.closeoutBid};this.QuotesService.updateTick(i);this.TradesService.updateTrades(i);this.OrdersService.updateOrders(i)}if(o){c=e;this.ActivityService.addActivity(c);this.TradesService.refresh();this.OrdersService.refresh();this.AccountsService.refresh()}if(a){this.PluginsService.refresh()}}catch(t){}})})}}e["a"]=o;o.$inject=["$timeout","$http","ToastService","QuotesService","ActivityService","TradesService","OrdersService","AccountsService","PluginsService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(81);const c=s.a.module("components.toast",[]).service("ToastService",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";class i{constructor(t){this.$mdToast=t}show(t){this.$mdToast.show(this.$mdToast.simple().textContent(t).action("CLOSE").position("right bottom").hideDelay(1e4))}}e["a"]=i;i.$inject=["$mdToast"]},function(t,e,n){"use strict";var i=n(83);const s={templateUrl:"app/components/token-dialog/token-dialog.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t){this.$mdDialog=t}$onInit(){this.environment="practice"}hide(){this.$mdDialog.hide()}cancel(){this.$mdDialog.cancel();
}answer(t){this.$mdDialog.hide(t)}}e["a"]=i;i.$inject=["$mdDialog"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(82);const c=s.a.module("components.token-dialog",[]).component("tokenDialog",o["a"]).name;e["a"]=c},function(t,e,n){"use strict";var i=n(86);const s={templateUrl:"app/components/trades/trades.html",controller:i["a"]};e["a"]=s},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$mdDialog=t;this.ToastService=e;this.TradesService=n}$onInit(){this.trades=this.TradesService.getTrades();this.TradesService.refresh()}closeTrade(t,e){const n=this.$mdDialog.confirm().textContent("Are you sure to close the trade?").ariaLabel("Trade closing confirmation").ok("Ok").cancel("Cancel").targetEvent(t);this.$mdDialog.show(n).then(()=>{this.TradesService.closeTrade(e).then(t=>{const e="Closed "+`${t.units>0?"sell":"buy"} `+`${t.instrument} `+`#${t.id} `+`@${t.price} `+`P&L ${t.pl}`;this.ToastService.show(e)}).catch(t=>{const e=`ERROR ${t.code} ${t.message}`;this.ToastService.show(e)})})}}e["a"]=i;i.$inject=["$mdDialog","ToastService","TradesService"]},function(t,e,n){"use strict";var i=n(0);var s=n.n(i);var o=n(85);var c=n(88);const a=s.a.module("components.trades",[]).component("trades",o["a"]).service("TradesService",c["a"]).name;e["a"]=a},function(t,e,n){"use strict";class i{constructor(t,e,n){this.$http=t;this.SessionService=e;this.AccountsService=n;this.trades=[]}getTrades(){return this.trades}refresh(){this.SessionService.isLogged().then(t=>{this.$http.post("/api/trades",{environment:t.environment,token:t.token,accountId:t.accountId}).then(t=>{this.trades.length=0;angular.extend(this.trades,t.data);this.trades.forEach(t=>{t.side=t.currentUnits>0?"buy":"sell"})})})}closeTrade(t){return this.SessionService.isLogged().then(e=>this.$http.post("/api/closetrade",{environment:e.environment,token:e.token,accountId:e.accountId,id:t}).then(t=>t.data).catch(t=>t.data))}updateTrades(t){const e=this.AccountsService.getAccount(),n=e.pips;this.trades.forEach((e,i)=>{let s,o;if(e.instrument===t.instrument){o=e.currentUnits>0?"buy":"sell";if(o==="buy"){s=t.bid;this.trades[i].profitPips=(s-e.price)/n[e.instrument]}if(o==="sell"){s=t.ask;this.trades[i].profitPips=(e.price-s)/n[e.instrument]}this.trades[i].current=s}})}}e["a"]=i;i.$inject=["$http","SessionService","AccountsService"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var i=n(0);var s=n.n(i);var o=n(9);var c=n(7);var a=n(8);const r=s.a.module("root",[c["a"],a["a"]]).component("root",o["a"]).name;e["root"]=r}],[89]);
//# sourceMappingURL=app.bundle.js.map