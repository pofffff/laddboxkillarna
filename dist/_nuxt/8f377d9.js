(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{393:function(e,o,t){var content=t(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(19).default)("0e5bde03",content,!0,{sourceMap:!1})},395:function(e){e.exports=JSON.parse('{"colors":[{"id":"1","smallImage1":"zaptec_products/zaptec_white_1.png","smallImage2":"zaptec_products/zaptec_white_2.png","smallImage3":"zaptec_products/zaptec_white_3.png","bigImage":"zaptec_products/zaptec_white_1.png","name":"Cloud White","color":"#f6f6f6"},{"id":"2","smallImage1":"zaptec_products/zaptec_grey_1.png","smallImage2":"zaptec_products/zaptec_grey_2.png","smallImage3":"zaptec_products/zaptec_grey_3.png","bigImage":"zaptec_products/zaptec_grey_1.png","name":"Rock Grey","color":"#525254"},{"id":"3","smallImage1":"zaptec_products/zaptec_green_1.png","smallImage2":"zaptec_products/zaptec_green_2.png","smallImage3":"zaptec_products/zaptec_green_3.png","bigImage":"zaptec_products/zaptec_green_1.png","name":"Moss Green","color":"#737466"},{"id":"4","smallImage1":"zaptec_products/zaptec_blue_1.png","smallImage2":"zaptec_products/zaptec_blue_2.png","smallImage3":"zaptec_products/zaptec_blue_3.png","bigImage":"zaptec_products/zaptec_blue_1.png","name":"Midnight Blue","color":"#354654"},{"id":"5","smallImage1":"zaptec_products/zaptec_brown_1.png","smallImage2":"zaptec_products/zaptec_brown_2.png","smallImage3":"zaptec_products/zaptec_brown_3.png","bigImage":"zaptec_products/zaptec_brown_1.png","name":"Wood Brown","color":"#564837"},{"id":"6","smallImage1":"zaptec_products/zaptec_black_1.png","smallImage2":"zaptec_products/zaptec_black_2.png","smallImage3":"zaptec_products/zaptec_black_3.png","bigImage":"zaptec_products/zaptec_black_1.png","name":"Asphalt Black","color":"#15181c"}]}')},401:function(e,o,t){"use strict";t(393)},402:function(e,o,t){var r=t(18)(!1);r.push([e.i,"*[data-v-100b27fe]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin:0;padding:0}form .black[data-v-100b27fe],form .midnight[data-v-100b27fe],form .moss[data-v-100b27fe],form .rock[data-v-100b27fe],form .white[data-v-100b27fe],form .wood[data-v-100b27fe]{width:2.5rem;height:2.5rem;outline:none;padding:1rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:100%;margin:.5rem;border:none;box-shadow:0 4px 4px rgba(0,0,0,.25);transition:all .05s ease-in-out;cursor:pointer}form .black[data-v-100b27fe]:checked:hover,form .midnight[data-v-100b27fe]:checked:hover,form .moss[data-v-100b27fe]:checked:hover,form .rock[data-v-100b27fe]:checked:hover,form .white[data-v-100b27fe]:checked:hover,form .wood[data-v-100b27fe]:checked:hover{transform:scale(1.2)}form .black[data-v-100b27fe]:hover,form .midnight[data-v-100b27fe]:hover,form .moss[data-v-100b27fe]:hover,form .rock[data-v-100b27fe]:hover,form .white[data-v-100b27fe]:hover,form .wood[data-v-100b27fe]:hover{transform:scale(1.08)}form .black[data-v-100b27fe]:checked,form .midnight[data-v-100b27fe]:checked,form .moss[data-v-100b27fe]:checked,form .rock[data-v-100b27fe]:checked,form .white[data-v-100b27fe]:checked,form .wood[data-v-100b27fe]:checked{transform:scale(1.2)}form .white[data-v-100b27fe]{background-color:#f6f6f6}form .rock[data-v-100b27fe]{background-color:#525254}form .moss[data-v-100b27fe]{background-color:#737466}form .midnight[data-v-100b27fe]{background-color:#354654}form .wood[data-v-100b27fe]{background-color:#564837}form .black[data-v-100b27fe]{background-color:#15181c}",""]),e.exports=r},417:function(e,o,t){"use strict";t.r(o);var r=t(395),c={data:function(){return{products:r}},methods:{selectColor:function(e){console.log(e),this.$emit("selectColor",e)}}},d=(t(401),t(12)),component=Object(d.a)(c,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"wrapper__colorpicker"},[t("form",e._l(e.products.colors,(function(o){return t("input",{key:o.id,staticClass:"white",style:{backgroundColor:o.color},attrs:{name:"radio",value:"color.color",type:"radio",id:"white",required:""},on:{click:function(t){return e.selectColor(o)}}})})),0)])}),[],!1,null,"100b27fe",null);o.default=component.exports}}]);