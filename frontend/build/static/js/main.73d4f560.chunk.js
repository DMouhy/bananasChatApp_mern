(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(16),c=a.n(r),s=(a(30),a(2)),i=(a(31),a(6)),l=a(8),m=(a(32),a(10)),u="http://localhost:8000";a(33);var d=function(e){var t=e.message;return o.a.createElement("div",{className:"message ".concat(!t&&"hide_message")},o.a.createElement("p",null,t))};var g=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({username:"",password:""}),g=Object(s.a)(c,2),f=g[0],p=g[1],h=Object(n.useState)({username:"",password:"",re_password:""}),E=Object(s.a)(h,2),v=E[0],_=E[1],b=Object(n.useState)(""),j=Object(s.a)(b,2),O=j[0],w=j[1],N=Object(n.useState)(!1),y=Object(s.a)(N,2),S=y[0],k=y[1];function T(e){p(Object(l.a)(Object(l.a)({},f),{},Object(i.a)({},e.target.name,e.target.value)))}function C(e){_(Object(l.a)(Object(l.a)({},v),{},Object(i.a)({},e.target.name,e.target.value)))}return o.a.createElement("div",{className:"logsign"},o.a.createElement(d,{message:O}),o.a.createElement("div",{className:"logsign_container"},o.a.createElement(m.a,{className:"message_icon"}),o.a.createElement("div",{className:"logsign_forms ".concat(a&&"logsign_forms_go_left")},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),k(!0),fetch("".concat(u,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}).then((function(e){return e.json()})).then((function(e){e.error&&(w(e.error),setTimeout((function(){return w("")}),4e3),k(!1)),e.message&&(w(e.message),setTimeout((function(){return w("")}),4e3),p({username:"",password:""}),localStorage.setItem("token",e.token),k(!1),window.location.reload(!1))})).catch((function(e){return console.log(e)}))}(e)},className:"login_form ".concat(a&&"logsign_forms_hide")},o.a.createElement("div",{className:"username"},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{onChange:function(e){return T(e)},type:"text",name:"username",placeholder:"your username...",value:f.username})),o.a.createElement("div",{className:"password"},o.a.createElement("label",null,"Password:"),o.a.createElement("input",{onChange:function(e){return T(e)},type:"password",name:"password",placeholder:"your password...",value:f.password})),o.a.createElement("button",{className:S?"isLoading":"",type:"submit"},S?"Login...":"Login")),o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),k(!0),fetch("".concat(u,"/api/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then((function(e){return e.json()})).then((function(e){e.error?(w(e.error),setTimeout((function(){return w("")}),4e3),k(!1)):(w(e.message),setTimeout((function(){return w("")}),4e3),p({username:v.username,password:v.password}),r(!1),_({username:"",password:"",re_password:""}),k(!1))})).catch((function(e){return console.log(e)}))}(e)},className:"register_form ".concat(!a&&"logsign_forms_hide")},o.a.createElement("div",{className:"username"},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{onChange:function(e){return C(e)},type:"text",name:"username",placeholder:"your username...",value:v.username})),o.a.createElement("div",{className:"password"},o.a.createElement("label",null,"Password:"),o.a.createElement("input",{onChange:function(e){return C(e)},type:"password",name:"password",placeholder:"your password...",value:v.password})),o.a.createElement("div",{className:"re_password"},o.a.createElement("label",null,"Repassword:"),o.a.createElement("input",{onChange:function(e){return C(e)},type:"password",name:"re_password",placeholder:"your re_password...",value:v.re_password})),o.a.createElement("button",{className:S?"isLoading":"",type:"submit"},S?"Registering...":"Register"))),o.a.createElement("div",{onClick:function(){return r(!a)},className:"logsign_switcher"},"Switch")))},f=a(9),p=a.n(f),h=a(13),E=(a(35),a(36),a(54)),v=a(18),_=a(17);var b=function(e){var t=e.sent_in,a=e.message,n=e.user,r=e.viewed,c=e.isMine;return o.a.createElement("div",{className:"message_Container ".concat(c&&"message_isMine")},c&&o.a.createElement("div",{className:"vue"},r?o.a.createElement(_.a,{className:"true"}):o.a.createElement(v.a,{className:"false"})),o.a.createElement(E.a,null),o.a.createElement("div",{className:"message_data"},o.a.createElement("div",{className:"message_data_username"},n.username),o.a.createElement("div",{className:"message_data_message"},a),o.a.createElement("div",{className:"message_data_timeSend"},t)))},j=(a(41),a(12));var O=function(e){var t=e.type;return"search"===t?o.a.createElement("div",{className:"Loading_Search"},o.a.createElement(j.a,null)):"send_message"===t?o.a.createElement("div",{className:"Loading_send_message"},o.a.createElement(j.a,null)):"get_message"===t?o.a.createElement("div",{className:"Loading_get_message"},o.a.createElement(j.a,null)):void 0};var w=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),l=i[0],d=i[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),v=f[0],_=f[1],j=Object(n.useState)({}),w=Object(s.a)(j,2),N=w[0],y=w[1],S=Object(n.useState)(""),k=Object(s.a)(S,2),T=k[0],C=k[1],I=Object(n.useState)([]),M=Object(s.a)(I,2),x=M[0],R=M[1],B=Object(n.useState)(!1),A=Object(s.a)(B,2),J=A[0],L=A[1],P=Object(n.useState)({}),z=Object(s.a)(P,2),F=z[0],D=z[1],G=Object(n.useState)(""),U=Object(s.a)(G,2),V=U[0],W=U[1],$=Object(n.useState)(!1),q=Object(s.a)($,2),H=q[0],K=q[1],Q=Object(n.useState)(!1),X=Object(s.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)({inter_id:0}),re=Object(s.a)(oe,2),ce=re[0],se=re[1];function ie(){setInterval((function(){return function(){var e=localStorage.getItem("token")||"";fetch("".concat(u,"/api/unseen_messages"),{method:"GET",headers:{Authorization:"Bearer".concat(e)}}).then((function(e){return e.json()})).then((function(e){e.error&&(localStorage.removeItem("token"),window.location.reload(!1)),e.unseenMessages&&R(e.unseenMessages)}))}()}),3e3)}function le(){return(le=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=4;break}return K(!0),e.next=4,fetch("".concat(u,"/api/search_user"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer".concat(localStorage.getItem("token"))},body:JSON.stringify({search_string:a})}).then((function(e){return e.json()})).then((function(e){e.Empty_error||e.error||d(e),K(!1)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token")||"",e.next=3,fetch("".concat(u,"/api/room_messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer".concat(a)},body:JSON.stringify({roomId:t})}).then((function(e){return e.json()})).then((function(e){e.error&&(localStorage.removeItem("token"),window.location.reload(!1)),e.room&&(D(e),setTimeout((function(){return ne(!1)}),2e3))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){0!==Object.entries(N).length?(0===Object.entries(F).length&&ne(!0),me(N._id),se({inter_id:setInterval((function(){return me(N._id)}),1500)})):(console.log("room is empty"),D({}))}),[N]),Object(n.useEffect)((function(){return ie()}),[]),Object(n.useEffect)((function(){""===a?(l.length=0,K(!1)):function(){le.apply(this,arguments)}()}),[a,l.length]),Object(n.useEffect)((function(){""!==T&&(clearInterval(ce.inter_id),function(){var e=localStorage.getItem("token")||"";D({}),ne(!0),fetch("".concat(u,"/api/create_room"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer".concat(e)},body:JSON.stringify({userId:T._id})}).then((function(e){return e.json()})).then((function(e){e.error&&(localStorage.removeItem("token"),window.location.reload(!1)),e.yourRoom&&y(e.yourRoom),e.myRoom&&y(e.myRoom)}))}())}),[T]),o.a.createElement("div",{className:"mainapp"},o.a.createElement("div",{onClick:function(){var e=localStorage.getItem("token")||"";fetch("".concat(u,"/api/logout"),{method:"GET",headers:{Authorization:"Bearer".concat(e)}}).then((function(e){return e.json()})).then((function(e){console.log(e.message),localStorage.removeItem("token"),window.location.reload(!1)}))},className:"deconect"},"LogOut"),o.a.createElement("div",{onClick:function(){return L(!J)},className:"notification_btn ".concat(0!==x.length&&"notification_btn_go_down")},o.a.createElement(m.a,null)),0!==x.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"notification ".concat(J&&"notification_go_left")},x.map((function(e,t){return o.a.createElement("div",{onClick:function(){C(e.talked_too),L(!1)},key:t,className:"notification_card"},o.a.createElement(E.a,{className:"notification_avatar"}),o.a.createElement("div",{className:"notification_messageNum"},e.noViewd_messages_inRoom.length),o.a.createElement("div",{className:"notification_messages"},o.a.createElement("p",{className:"notification_p1"},e.talked_too.username),o.a.createElement("p",{className:"notification_p2"},e.noViewd_messages_inRoom[0].content)))})))),o.a.createElement("div",{className:"message_box"},o.a.createElement("div",{className:"rooms ".concat(v&&"rooms_go_left")},o.a.createElement("div",{onClick:function(){return _(!v)},className:"drag_point"},H?o.a.createElement(O,{type:"search"}):o.a.createElement(o.a.Fragment,null,"".concat(v?">":"<"))),o.a.createElement("input",{className:"search_input",onChange:function(e){return function(e){r(e.target.value)}(e)},type:"text",placeholder:"search...",value:a}),l&&o.a.createElement(o.a.Fragment,null,l.map((function(e){return o.a.createElement("div",{onClick:function(){C(e.user),r(""),_(!1)},key:e.user._id,className:"card"},o.a.createElement(E.a,null),o.a.createElement("p",null,e.user.username))})))),o.a.createElement("div",{className:"header"},o.a.createElement(E.a,{className:"avatar"}),0!==Object.entries(N).length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,T.username),T.conected&&o.a.createElement("div",{className:"connect_dot"}))),o.a.createElement("div",{className:"room_area"},ae?o.a.createElement(O,{type:"get_message"}):o.a.createElement(o.a.Fragment,null,0!==Object.entries(F).length&&o.a.createElement(o.a.Fragment,null,F.RoomMessages.map((function(e){return o.a.createElement(b,{key:e.msg._id,isMine:e.isMsgMine,viewed:e.msg.viewed,user:e.msg.send_by,message:e.msg.content,sent_in:e.msg.Time_created_at})}))))),o.a.createElement("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),Z(!0),0!==Object.entries(N).length&&""!==V){var t=localStorage.getItem("token")||"";fetch("".concat(u,"/api/create_message"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer".concat(t)},body:JSON.stringify({room_id:N._id,message:V})}).then((function(e){return e.json()})).then((function(e){e.error&&(localStorage.removeItem("token"),window.location.reload(!1)),e.message&&(W(""),Z(!1))}))}}(e)},className:"send_message"},o.a.createElement("input",{onChange:function(e){return W(e.target.value)},className:0!==Object.entries(F).length||T?"":"hide_sendMessage",type:"text",placeholder:"send Message...",value:V}),o.a.createElement("button",{type:"submit",className:"send ".concat(0===Object.entries(F).length&&!T&&"hide_sendMessage"," ").concat(Y&&"noEvent_sendMessage")},Y?o.a.createElement(O,{type:"send_message"}):o.a.createElement(o.a.Fragment,null,">")))))};var N=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");fetch("".concat(u,"/api/verify_token"),{method:"GET",headers:{Authorization:"Bearer".concat(e)}}).then((function(e){return e.json()})).then((function(e){!1===e.bool&&(r(e.bool),localStorage.removeItem("token")),r(e.bool)})).catch((function(e){return console.log(e)}))}),[a]),o.a.createElement("div",{className:"App"},a?o.a.createElement(w,null):o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.73d4f560.chunk.js.map