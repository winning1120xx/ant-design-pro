(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{a3w7:function(e,r,t){"use strict";t.r(r);t("+L6B");var a=t("2/Rp"),s=(t("jCWc"),t("kPKH")),i=(t("14J3"),t("BMrR")),n=(t("Q9mQ"),t("diRs")),o=(t("miYZ"),t("tsqr")),l=(t("MXD1"),t("CFYs")),c=t("p0pE"),g=t.n(c),u=t("2Taf"),m=t.n(u),p=t("vZ4D"),d=t.n(p),f=t("l4Ni"),h=t.n(f),v=t("ujKo"),b=t.n(v),E=t("MhPg"),w=t.n(E),y=(t("5NDa"),t("5rEg")),M=(t("OaEy"),t("2fM7")),O=(t("y8nQ"),t("Vl3Y")),j=t("Y2fQ"),F=t("q1tI"),P=t.n(F),k=t("mOP9"),C=t.n(k),N=t("MuoO"),R=t("usdK"),S=t.n(R),q=t("vyRF"),x=t.n(q),D=function(e,r,t,a){var s,i=arguments.length,n=i<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i<3?s(n):i>3?s(r,t,n):s(r,t))||n);return i>3&&n&&Object.defineProperty(r,t,n),n},z=O.a.Item,I=M.a.Option,V=y.a.Group,Q={ok:P.a.createElement("div",{className:x.a.success},P.a.createElement(j.FormattedMessage,{id:"user-register.strength.strong"})),pass:P.a.createElement("div",{className:x.a.warning},P.a.createElement(j.FormattedMessage,{id:"user-register.strength.medium"})),poor:P.a.createElement("div",{className:x.a.error},P.a.createElement(j.FormattedMessage,{id:"user-register.strength.short"}))},Y={ok:"success",pass:"normal",poor:"exception"},G=function(e){function r(){var e;return m()(this,r),(e=h()(this,b()(r).apply(this,arguments))).state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.interval=void 0,e.onGetCaptcha=function(){var r=59;e.setState({count:r}),e.interval=window.setInterval(function(){r-=1,e.setState({count:r}),0===r&&clearInterval(e.interval)},1e3)},e.getPasswordStatus=function(){var r=e.props.form.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},e.handleSubmit=function(r){r.preventDefault();var t=e.props,a=t.form,s=t.dispatch;a.validateFields({force:!0},function(r,t){if(!r){var a=e.state.prefix;s({type:"userRegister/submit",payload:g()({},t,{prefix:a})})}})},e.checkConfirm=function(r,t,a){var s=e.props.form;t&&t!==s.getFieldValue("password")?a(Object(j.formatMessage)({id:"user-register.password.twice"})):a()},e.checkPassword=function(r,t,a){var s=e.state,i=s.visible,n=s.confirmDirty;if(t)if(e.setState({help:""}),i||e.setState({visible:!!t}),t.length<6)a("error");else{var o=e.props.form;t&&n&&o.validateFields(["confirm"],{force:!0}),a()}else e.setState({help:Object(j.formatMessage)({id:"user-register.password.required"}),visible:!!t}),a("error")},e.changePrefix=function(r){e.setState({prefix:r})},e.renderPasswordProgress=function(){var r=e.props.form.getFieldValue("password"),t=e.getPasswordStatus();return r&&r.length?P.a.createElement("div",{className:x.a["progress-".concat(t)]},P.a.createElement(l.a,{status:Y[t],className:x.a.progress,strokeWidth:6,percent:10*r.length>100?100:10*r.length,showInfo:!1})):null},e}return w()(r,e),d()(r,[{key:"componentDidUpdate",value:function(){var e=this.props,r=e.userRegister,t=e.form.getFieldValue("mail");"ok"===r.status&&(o.a.success("注册成功！"),S.a.push({pathname:"/user/register-result",state:{account:t}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,r=e.form,t=e.submitting,o=r.getFieldDecorator,l=this.state,c=l.count,g=l.prefix,u=l.help,m=l.visible;return P.a.createElement("div",{className:x.a.main},P.a.createElement("h3",null,P.a.createElement(j.FormattedMessage,{id:"user-register.register.register"})),P.a.createElement(O.a,{onSubmit:this.handleSubmit},P.a.createElement(z,null,o("mail",{rules:[{required:!0,message:Object(j.formatMessage)({id:"user-register.email.required"})},{type:"email",message:Object(j.formatMessage)({id:"user-register.email.wrong-format"})}]})(P.a.createElement(y.a,{size:"large",placeholder:Object(j.formatMessage)({id:"user-register.email.placeholder"})}))),P.a.createElement(z,{help:u},P.a.createElement(n.a,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:P.a.createElement("div",{style:{padding:"4px 0"}},Q[this.getPasswordStatus()],this.renderPasswordProgress(),P.a.createElement("div",{style:{marginTop:10}},P.a.createElement(j.FormattedMessage,{id:"user-register.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:m},o("password",{rules:[{validator:this.checkPassword}]})(P.a.createElement(y.a,{size:"large",type:"password",placeholder:Object(j.formatMessage)({id:"user-register.password.placeholder"})})))),P.a.createElement(z,null,o("confirm",{rules:[{required:!0,message:Object(j.formatMessage)({id:"user-register.confirm-password.required"})},{validator:this.checkConfirm}]})(P.a.createElement(y.a,{size:"large",type:"password",placeholder:Object(j.formatMessage)({id:"user-register.confirm-password.placeholder"})}))),P.a.createElement(z,null,P.a.createElement(V,{compact:!0},P.a.createElement(M.a,{size:"large",value:g,onChange:this.changePrefix,style:{width:"20%"}},P.a.createElement(I,{value:"86"},"+86"),P.a.createElement(I,{value:"87"},"+87")),o("mobile",{rules:[{required:!0,message:Object(j.formatMessage)({id:"user-register.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(j.formatMessage)({id:"user-register.phone-number.wrong-format"})}]})(P.a.createElement(y.a,{size:"large",style:{width:"80%"},placeholder:Object(j.formatMessage)({id:"user-register.phone-number.placeholder"})})))),P.a.createElement(z,null,P.a.createElement(i.a,{gutter:8},P.a.createElement(s.a,{span:16},o("captcha",{rules:[{required:!0,message:Object(j.formatMessage)({id:"user-register.verification-code.required"})}]})(P.a.createElement(y.a,{size:"large",placeholder:Object(j.formatMessage)({id:"user-register.verification-code.placeholder"})}))),P.a.createElement(s.a,{span:8},P.a.createElement(a.a,{size:"large",disabled:!!c,className:x.a.getCaptcha,onClick:this.onGetCaptcha},c?"".concat(c," s"):Object(j.formatMessage)({id:"user-register.register.get-verification-code"}))))),P.a.createElement(z,null,P.a.createElement(a.a,{size:"large",loading:t,className:x.a.submit,type:"primary",htmlType:"submit"},P.a.createElement(j.FormattedMessage,{id:"user-register.register.register"})),P.a.createElement(C.a,{className:x.a.login,to:"/user/login"},P.a.createElement(j.FormattedMessage,{id:"user-register.register.sign-in"})))))}}]),r}(F.Component);G=D([Object(N.connect)(function(e){return{userRegister:e.userRegister,submitting:e.loading.effects["userRegister/submit"]}})],G),r.default=O.a.create()(G)},vyRF:function(e,r,t){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);