(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{416:function(e,t,c){e.exports=c.p+"img/front_easee.aefa222.png"},420:function(e,t,c){e.exports=c.p+"img/zaptec_black_1.65de517.png"},495:function(e,t,c){var content=c(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(23).default)("66522160",content,!0,{sourceMap:!1})},517:function(e,t,c){"use strict";c(495)},518:function(e,t,c){var r=c(22)(!1);r.push([e.i,"*[data-v-5a75c132]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin:0;padding:0}form[data-v-5a75c132]{display:flex;justify-content:space-between;margin:8px 0}form .laddbox[data-v-5a75c132]{width:50%;display:flex;padding:12px;border-radius:2rem;opacity:.8}form .laddbox .imageContainer[data-v-5a75c132]{width:100px}form .laddbox .imageContainer img[data-v-5a75c132]{width:100%}form .laddbox .info[data-v-5a75c132]{display:flex;flex-direction:column;justify-content:center}form .easeChecked[data-v-5a75c132],form .zaptecChecked[data-v-5a75c132]{box-shadow:0 15px 20px hsla(0,0%,100%,.219);transform:scale(1.2);opacity:1}form .easee[data-v-5a75c132]:hover,form .zaptec[data-v-5a75c132]:hover{transform:scale(1.2);transition:.2s ease-in-out}@media only screen and (max-width:700px){form .easee[data-v-5a75c132]:checked:hover,form .zaptec[data-v-5a75c132]:checked:hover{transform:scale(1.2)}form .easee[data-v-5a75c132]:hover,form .zaptec[data-v-5a75c132]:hover{transform:scale(1.08)}form .easee[data-v-5a75c132]:checked,form .zaptec[data-v-5a75c132]:checked{transform:scale(1.2)}}",""]),e.exports=r},564:function(e,t,c){"use strict";c.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"imageContainer"},[t("img",{attrs:{src:c(416),alt:""}})])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"info"},[c("h4",[e._v("Easee")]),e._v(" "),c("h5",[e._v("6 990:-")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"imageContainer"},[t("img",{attrs:{src:c(420),alt:""}})])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"info"},[c("h4",[e._v("Zaptec Go")]),e._v(" "),c("h5",[e._v("6 495:-")])])}],o={data:function(){return{isEasee:!1,isZaptec:!1}},methods:{selectCharger:function(e){"Easee"===e?(this.isEasee=!0,this.isZaptec=!1):"Zaptec Go"===e&&(this.isZaptec=!0,this.isEasee=!1),this.$emit("selectCharger",e)}}},n=(c(517),c(14)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"wrapper__colorpicker"},[c("form",[c("div",{class:["laddbox","easee",e.isEasee?"easeChecked":""],on:{click:function(t){return e.selectCharger("Easee")}}},[e._m(0),e._v(" "),e._m(1)]),e._v(" "),c("div",{class:["laddbox","easee",e.isZaptec?"zaptecChecked":""],on:{click:function(t){return e.selectCharger("Zaptec Go")}}},[e._m(2),e._v(" "),e._m(3)])])])}),r,!1,null,"5a75c132",null);t.default=component.exports}}]);