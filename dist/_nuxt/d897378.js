(window.webpackJsonp=window.webpackJsonp||[]).push([[27,23],{408:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("16324e08",content,!0,{sourceMap:!1})},430:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},433:function(t,e,r){"use strict";r(408)},434:function(t,e,r){var n=r(15)(!1);n.push([t.i,'*[data-v-58237253]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin:0;padding:0}.status__message__wrapper[data-v-58237253]{margin:1rem 0}.status__message__wrapper .error[data-v-58237253]{color:#d72638}.status__message__wrapper .error[data-v-58237253],.status__message__wrapper .success[data-v-58237253]{font-family:"Roboto",sans-serif;font-size:1.25rem;display:flex;margin-bottom:1rem;width:100%}.status__message__wrapper .success[data-v-58237253]{color:#058c42}',""]),t.exports=n},435:function(t,e,r){t.exports=r.p+"img/alex.aad00d4.png"},436:function(t,e,r){t.exports=r.p+"img/kevin.dd86a21.png"},454:function(t,e,r){"use strict";r.r(e);var n={props:{statusMessage:Object}},o=(r(433),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"status__message__wrapper"},[t.statusMessage.message&&!0===t.statusMessage.success?r("span",{staticClass:"success"},[t._v(t._s(t.statusMessage.message)+"\n  ")]):t._e(),t._v(" "),t.statusMessage.message&&!1===t.statusMessage.success?r("span",{staticClass:"error"},[t._v(t._s(t.statusMessage.message)+"\n  ")]):t._e()])}),[],!1,null,"58237253",null);e.default=component.exports},456:function(t,e,r){"use strict";var n=r(5),o=r(457).trim;n({target:"String",proto:!0,forced:r(458)("trim")},{trim:function(){return o(this)}})},457:function(t,e,r){var n=r(27),o="["+r(430)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),m=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},458:function(t,e,r){var n=r(10),o=r(430);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},459:function(t,e,r){var n=r(5),o=r(193).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},465:function(t,e,r){"use strict";(function(t){r(47),r(34),r(46),r(62),r(40),r(63);var n=r(11),o=r(23),l=(r(54),r(456),r(459),r(73)),c=r(521);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={head:{title:"Kontakt | Laddboxkillarna Göteborg",slug:"https://www.laddboxkillarna.se/kontakt",meta:[{hid:"kontakt",name:"kontakt",content:"Frågor om laddbox och installationer? Kontakta oss - vi garanterar återkoppling inom 24h"}],script:[{src:"https://www.googletagmanager.com/ns.html?id=".concat(t.env.GTM_ID)}]},middleware:"status_message",data:function(){return{email:{firstName:"",lastName:"",email:"",telephonenumber:"",subject:"",message:""},validation:{firstName:!0,lastName:!0,email:!0,subject:!0,message:!0},formatErrorMsg:!1,formatMessage:{success:!1,message:"Röda fält ej giltiga"}}},computed:d({},Object(l.d)({statusMessage:function(t){return t.statusMessage}})),methods:d(d({},Object(l.b)(["contactEmail"])),{},{trimObject:function(t){return{firstName:t.firstName.trim(),lastName:t.lastName.trim(),email:t.email.trim(),telephonenumber:t.telephonenumber.trim(),subject:t.subject,message:t.message}},sendEmail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.formatErrorMsg=!1,e.next=3,t.trimObject(t.email);case 3:return r=e.sent,e.next=6,Object(c.a)(r);case 6:t.validation=e.sent,n=Object.values(t.validation).every((function(t){return!0===t})),t.formatErrorMsg=!n,!0===n&&t.contactEmail(r);case 10:case"end":return e.stop()}}),e)})))()}})}}).call(this,r(95))},521:function(t,e,r){"use strict";r.d(e,"b",(function(){return _})),r.d(e,"a",(function(){return f}));var n=r(33),o=/^[a-zA-ZåäöÅÄÖ]+$/,l=/^\S+@\S+$/,c=/^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,m=/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/,d=function(t){return console.log(Object(n.a)(t)),console.log(t),""!==t&&(""!==t||void 0)},_=function(t){return{firstName:o.test(t.firstName),lastName:o.test(t.lastName),street:d(t.street),postNr:m.test(t.postNr),state:d(t.state),email:l.test(t.email),phoneNr:c.test(t.phoneNr),color:d(t.color)}},f=function(t){return{firstName:o.test(t.firstName),lastName:o.test(t.lastName),email:l.test(t.email),subject:d(t.subject),message:d(t.message)}}},524:function(t,e,r){var content=r(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("31b8fbf6",content,!0,{sourceMap:!1})},553:function(t,e,r){"use strict";r(524)},554:function(t,e,r){var n=r(15)(!1);n.push([t.i,'*{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin:0;padding:0}.submit__black{background:none;border-radius:50px;padding:10px 36px;font-family:"Roboto",sans-serif;font-weight:300;letter-spacing:1.25px;font-size:1.125rem;align-self:flex-start;cursor:pointer;background-color:#0c0d0e;color:#fbf9ff;width:100%;display:flex;justify-content:center;border:none;box-shadow:0 8px 15px rgba(0,0,0,.295);transition:all .3s ease-in-out}.submit__black:active{box-shadow:0 15px 20px hsla(0,0%,100%,.219);transform:scale(1.03)}.submit__black:hover{color:#0c0d0e;background:none}.wrapper__kontakt{padding:10% 0;min-height:100vh}.wrapper__kontakt .container{width:1300px;margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.wrapper__kontakt .container .top__text{margin-top:2rem;width:45%;text-align:center}.wrapper__kontakt .information{display:flex;flex-direction:column}.wrapper__kontakt .bosses{display:flex;justify-content:space-evenly;margin-top:5rem;width:100%}.wrapper__kontakt .bosses article a{text-decoration:underline;color:#0c0d0e;cursor:pointer}.wrapper__kontakt .bosses article a p{padding:.2rem 0;margin:.2rem 0}.wrapper__kontakt .bosses article img{margin:1.5rem 0}.wrapper__kontakt .contact_info{display:flex;align-items:center;justify-content:space-evenly;width:70%;margin:10rem auto auto}.wrapper__kontakt .contact_info .text__secondary{font-weight:900}.wrapper__kontakt .contact_info a{color:#0c0d0e;text-decoration:underline}.wrapper__kontakt .contact{display:flex;flex-direction:column;justify-content:center;width:600px;margin-top:5rem}.wrapper__kontakt .contact .text__standard{margin-bottom:1rem}.wrapper__kontakt .contact .names{width:100%;display:flex;justify-content:space-between}.wrapper__kontakt .contact .names input{width:49%}.wrapper__kontakt .contact input,.wrapper__kontakt .contact textarea{border-radius:10rem;padding:.7rem 1.2rem;margin:.5rem 0;border:1px solid #0c0d0e;font-family:"Roboto",sans-serif;font-weight:300}.wrapper__kontakt .contact textarea{border-radius:2rem;max-width:3}.inputNotValid{border:1px solid #d72638!important}@media only screen and (max-width:1350px){.wrapper__kontakt .container{width:1100px}}@media only screen and (max-width:1150px){.wrapper__kontakt{padding:20% 10%}.wrapper__kontakt .container{width:100%}}@media only screen and (max-width:750px){.wrapper__kontakt .container .text__standard{width:100%}.wrapper__kontakt article img{width:80%}.wrapper__kontakt .contact{width:100%}.wrapper__kontakt input,.wrapper__kontakt textarea{font-size:1.5rem}.wrapper__kontakt .contact_info{width:100%;justify-content:space-between}}@media only screen and (max-width:680px){.wrapper__kontakt .bosses,.wrapper__kontakt .bosses article{flex-direction:column;align-items:center}.wrapper__kontakt .bosses article{display:flex;margin:1rem 0}.wrapper__kontakt .bosses article img{width:100%}.wrapper__kontakt .bosses article .employee__contact{align-self:flex-start}}@media only screen and (max-width:450px){.wrapper__kontakt .contact_info{flex-direction:column;justify-content:space-between}.wrapper__kontakt .contact_info p{margin:1rem 0}}',""]),t.exports=n},591:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bosses"},[n("article",[n("img",{attrs:{src:r(435),alt:"picture of employee"}}),t._v(" "),n("div",{staticClass:"employee__contact"},[n("span",{staticClass:"text__standard"},[t._v("Alexander Pettersson")]),t._v(" "),n("a",{attrs:{href:"mailto:alexander@laddboxkillarna.se"}},[n("p",{staticClass:"text__standard mail"},[t._v("\n              alexander@laddboxkillarna.se\n            ")])]),t._v(" "),n("a",{attrs:{href:"tel:+46700490657"}},[n("p",{staticClass:"text__standard"},[t._v("tlf: 070 049 06 57")])])])]),t._v(" "),n("article",[n("img",{attrs:{src:r(436),alt:"picture of employee"}}),t._v(" "),n("div",{staticClass:"employee__contact"},[n("span",{staticClass:"text__standard"},[t._v("Kevin Olsson")]),t._v(" "),n("a",{attrs:{href:"mailto:kevin@laddboxkillarna.se"}},[n("p",{staticClass:"text__standard mail"},[t._v("kevin@laddboxkillarna.se")])]),t._v(" "),n("a",{attrs:{href:"tel:+46704716221"}},[n("p",{staticClass:"text__standard"},[t._v("tlf: 070 471 62 21")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"contact_info"},[r("a",{attrs:{href:"tel:+4631250100"}},[r("p",{staticClass:"text__secondary"},[t._v("tlf: 031 250 100")])]),t._v(" "),r("a",{attrs:{href:"https://www.google.com/maps/place/L%C3%A5ng%C3%A4ngen+9,+417+22+G%C3%B6teborg/@57.7219141,11.9438371,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff54d1e128f07:0x725ddeba20a932ee!8m2!3d57.7219113!4d11.9460259",target:"_blank"}},[r("p",{staticClass:"text__secondary"},[t._v("Långängen 9")])]),t._v(" "),r("p",{staticClass:"text__secondary"},[t._v("417 22 Göteborg")])])}],o=r(465).a,l=(r(553),r(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper__kontakt"},[r("div",{staticClass:"container"},[r("h1",[t._v("Kontakta oss")]),t._v(" "),r("p",{staticClass:"text__standard top__text"},[t._v("\n      Har du frågor eller vill bli samarbetspartner? Vi snackar gärna med Er!\n      Ring eller skicka ett meddelande till oss så hör vi av oss inom 24h\n    ")]),t._v(" "),t._m(0),t._v(" "),r("form",{staticClass:"contact",attrs:{autocomplete:"on"},on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[r("div",{staticClass:"names"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email.firstName,expression:"email.firstName"}],class:t.validation.firstName?"":"inputNotValid",attrs:{type:"text",placeholder:"Förnamn",autocomplete:"given-name",title:"Vänligen fyll i namn",required:""},domProps:{value:t.email.firstName},on:{input:function(e){e.target.composing||t.$set(t.email,"firstName",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email.lastName,expression:"email.lastName"}],class:t.validation.lastName?"":"inputNotValid",attrs:{type:"text",placeholder:"Efternamn",autocomplete:"family-name",title:"Vänligen fyll i efternamn",required:""},domProps:{value:t.email.lastName},on:{input:function(e){e.target.composing||t.$set(t.email,"lastName",e.target.value)}}})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email.email,expression:"email.email"}],class:t.validation.email?"":"inputNotValid",attrs:{type:"email",placeholder:"Epost",autocomplete:"email",title:"Fyll i en giltig epost",required:""},domProps:{value:t.email.email},on:{input:function(e){e.target.composing||t.$set(t.email,"email",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email.telephonenumber,expression:"email.telephonenumber"}],class:t.validation.email?"":"inputNotValid",attrs:{placeholder:"Telefonnummer",autocomplete:"tel"},domProps:{value:t.email.telephonenumber},on:{input:function(e){e.target.composing||t.$set(t.email,"telephonenumber",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email.subject,expression:"email.subject"}],class:t.validation.subject?"":"inputNotValid",attrs:{type:"text",placeholder:"Ämne",autocomplete:"off",max:"50",min:"2",title:"Fyll i ämne",required:""},domProps:{value:t.email.subject},on:{input:function(e){e.target.composing||t.$set(t.email,"subject",e.target.value)}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.email.message,expression:"email.message"}],class:t.validation.message?"":"inputNotValid",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Meddelande",autocomplete:"off",required:""},domProps:{value:t.email.message},on:{input:function(e){e.target.composing||t.$set(t.email,"message",e.target.value)}}}),t._v(" "),t.formatErrorMsg?r("SharedStatusMessage",{attrs:{statusMessage:t.formatMessage}}):t._e(),t._v(" "),r("SharedStatusMessage",{attrs:{statusMessage:t.statusMessage}}),t._v(" "),r("button",{staticClass:"primary submit__black",attrs:{type:"submit"}},[t._v("\n        Skicka meddelande\n      ")])],1)]),t._v(" "),t._m(1)])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{SharedStatusMessage:r(454).default})}}]);