(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"54+C":function(t,r,e){"use strict";e.r(r);var a=e("p0pE"),n=e.n(a),s=e("d6i3"),c=e.n(s),p=e("1l/V"),i=e.n(p),u=e("io9h");function o(t){return f.apply(this,arguments)}function f(){return(f=i()(c.a.mark(function t(r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/api/fake_list",{params:r}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}var l={namespace:"listSearchApplications",state:{list:[]},effects:{fetch:c.a.mark(function t(r,e){var a,n,s,p;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.payload,n=e.call,s=e.put,t.next=4,n(o,a);case 4:return p=t.sent,t.next=7,s({type:"queryList",payload:Array.isArray(p)?p:[]});case 7:case"end":return t.stop()}},t)})},reducers:{queryList:function(t,r){return n()({},t,{list:r.payload})}}};r.default=l}}]);