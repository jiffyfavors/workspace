(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{383:function(t,e,r){},389:function(t,e,r){"use strict";r(168),r(27);var n=r(25),o=(r(5),r(3),r(381),r(44),{data:function(){return{listDiag:!1,breakdownDiag:!1,total:0}},props:{item:{type:Object,default:function(){return{}}}},mounted:function(){this.computeDeduction()},methods:{computeDeduction:function(){var t=[],e=this.item.amount.order_value;return t.push({name:"Order Value",value:this.item.amount.order_value}),this.item.amount.hasOwnProperty("deduction")&&"merchant"===this.item.amount.deduction.charged_to&&(t.push({name:"Merchant Code",value:""}),t.push({name:"      "+this.item.amount.deduction.code+"-"+this.item.amount.deduction.value,value:-1*this.item.amount.deduction.computed}),e-=this.item.amount.deduction.computed),this.item.amount.sc.store>0&&(t.push({name:"Platform Commission",value:-1*this.item.amount.sc.store}),e-=this.item.amount.sc.store),this.total=e,t.push({name:"Net",value:e}),t},computeAddOns:function(t,e){var r=[],o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(e?t.toLowerCase():t).replace(/(?:^|\s|["'([{])+\S/g,(function(t){return t.toUpperCase()}))};r.push({name:"Base Price",values:"",price:e});var c=parseFloat(e);return Object.entries(t).map((function(t){var e=Object(n.a)(t,2),l=e[0],d=e[1];Array.isArray(d)?(r.push({name:o(l),values:"",price:0}),d.forEach((function(i){c+=parseFloat(i.price),r.push({name:"",values:i.name,price:i.price})}))):(c+=parseFloat(d.price),r.push({name:o(l),values:d.name,price:d.price}))})),r.push({name:"",values:"Total",price:parseFloat(c)}),r},computeTotal:function(t){var e=0;return e+=t.info.base_price*t.qty,Object.values(t.add_ons).forEach((function(a){Array.isArray(a)?a.forEach((function(b){e+=b.price*t.qty})):e+=a.price*t.qty})),e}}}),c=r(24),l=r(49),d=r.n(l),v=r(158),m=r(171),_=r(153),f=r(57),h=r(365),x=r(163),y=r(351),k=r(360),w=r(152),V=r(129),C=r(361),O=r(155),P=r(96),D=r(156),B=r(21),T=r(157),A=r(159),I=r(55),L=r(382),S=r(41),$=r(167),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{staticClass:"ma-1",attrs:{xs12:"",md4:"",sm4:"",lg3:""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("span",{staticClass:"bestseller"},[t._v(t._s(t.item.status.toUpperCase()))]),t._v(" "),r("v-card-text",[r("v-layout",{staticClass:"mt-5",attrs:{wrap:""}},[r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("strong",[t._v("Order Reference")])]),t._v(" "),r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("strong",[t._v(t._s(t.item.id))])]),t._v(" "),r("v-divider"),t._v(" "),r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("strong",[t._v("Collect to Rider")])]),t._v(" "),r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("strong",[t._v(t._s(t._f("toPHP")(t.total))+" ")]),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{color:"info",dense:"",text:"",small:""},on:{click:function(e){e.stopPropagation(),t.breakdownDiag=!0}}},[t._v("Breakdown")])],1),t._v(" "),r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("strong",[t._v("Delivery Time")])]),t._v(" "),r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("strong",[t._v(t._s(t.item.delivery.date)+" "+t._s(t.item.delivery.time))])]),t._v(" "),r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("strong",[t._v("Items")])]),t._v(" "),r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("strong",[t._v(t._s(t.item.order.items.length)+" items")]),t._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{color:"info",dense:"",text:"",small:""},on:{click:function(e){e.stopPropagation(),t.listDiag=!0}}},[t._v("View")])],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-list-item",{staticClass:"grow",attrs:{dense:""}},[r("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[r("v-img",{staticClass:"elevation-6",attrs:{src:t.item.order.merchant.logo}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(" "+t._s(t.item.order.merchant.name)+" ")]),t._v(" "),r("v-list-item-subtitle",[t._v(" "+t._s(t.item.order.merchant.branch)+" ")])],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.breakdownDiag,callback:function(e){t.breakdownDiag=e},expression:"breakdownDiag"}},[r("v-card",{attrs:{width:"100%"}},[r("v-toolbar",{attrs:{fixed:"",dark:"",color:"#00aff0"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.breakdownDiag=!1}}},[r("v-icon",[t._v(" mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Breakdown")])],1),t._v(" "),r("v-card-text",[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(t.computeDeduction(),(function(i,e){return r("tr",{key:e},[r("td",[t._v(t._s(i.name))]),t._v(" "),r("td",[t._v(t._s(t._f("toPHP")(i.value)))])])})),0)]},proxy:!0}])})],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","max-width":"500px"},model:{value:t.listDiag,callback:function(e){t.listDiag=e},expression:"listDiag"}},[r("v-toolbar",{attrs:{fixed:"",dark:"",color:"#00aff0"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.listDiag=!1}}},[r("v-icon",[t._v(" mdi-arrow-left-bold")])],1),t._v(" "),r("v-toolbar-title",[t._v("List of Orders for "+t._s(t.item.id))])],1),t._v(" "),r("v-card",{attrs:{width:"100%"}},[r("v-card-text",[r("v-sheet",{staticClass:"overflow-y-auto"},[r("v-content",[r("v-list",{attrs:{"two-line":""}},t._l(t.item.order.items,(function(e,n){return r("v-list-item-group",{key:e.index},[r("v-divider"),t._v(" "),r("v-list-item",{attrs:{dense:""}},[r("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[""!=e.info.img?r("v-img",{staticClass:"elevation-6",attrs:{src:e.info.img}}):r("v-avatar",{staticClass:"white--text",attrs:{color:"blue"}},[t._v(" "+t._s(e.info.name.match(/\b(\w)/g).join("").substr(0,2))+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.info.name)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"red--text"},[t._v(" "+t._s(t._f("toPHP")(t.computeTotal(e)))+" ")])],1),t._v(" "),r("v-list-item-action",[r("v-list-item-action-text",[t._v(" "+t._s(t._f("toPHP")(t.computeTotal(e)/e.qty))+" x "+t._s(e.qty)+" ")])],1)],1),t._v(" "),r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(" Item ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v(" Value ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v(" Price ")])])]),t._v(" "),r("tbody",t._l(t.computeAddOns(e.add_ons,e.info.base_price),(function(e,i){return r("tr",{key:e.name+"_"+i+"_"+n},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.values))]),t._v(" "),e.price>0?r("td",[t._v(t._s(t._f("toPHP")(e.price)))]):t._e(),t._v(" "),e.price<1?r("td",[t._v("-")]):t._e()])})),0)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAvatar:v.a,VBtn:m.a,VCard:_.a,VCardActions:f.a,VCardText:f.b,VContent:h.a,VDialog:x.a,VDivider:y.a,VFlex:k.a,VIcon:w.a,VImg:V.a,VLayout:C.a,VList:O.a,VListItem:P.a,VListItemAction:D.a,VListItemActionText:B.a,VListItemAvatar:T.a,VListItemContent:B.b,VListItemGroup:A.a,VListItemSubtitle:B.c,VListItemTitle:B.d,VSheet:I.a,VSimpleTable:L.a,VToolbar:S.a,VToolbarTitle:$.a})},418:function(t,e,r){"use strict";var n=r(383);r.n(n).a},464:function(t,e,r){"use strict";r.r(e);r(29);var n={layout:"default",components:{OrderSummary:r(389).a},data:function(){return{activeBtn:0,type:null,dialog:!1,date:this.$getNow(),modal:!1}},computed:{max:function(){return this.$getNow(1).substring(0,10)},orders:function(){return this.$store.getters["auth/getOrders"]},store_ids:function(){var t=[];return this.restos.forEach((function(e){t.push(e.id)})),t},getCurrentBusiness:function(){return this.$store.getters["auth/getDefaultBusiness"]},resto:function(){var t=[];return this.restos.forEach((function(e){t.push({id:e.id,data:e.d})})),t}},watch:{date:function(t){this.$store.dispatch("auth/getOrderHistory",{ids:this.store_ids,date:t})},getCurrentBusiness:function(t){this.getStores()}},mounted:function(){this.getStores()},methods:{getStores:function(){var t=this.$fireStoreObj().collection("merchant").where("d.managed_by","array-contains",this.getCurrentBusiness.id);this.$bind("restos",t)},getOrdersToday:function(){this.$store.dispatch("auth/getTodaysOrder",{ids:this.store_ids})},getAdvanceOrder:function(){this.$store.dispatch("auth/getAdvanceOrder",{ids:this.store_ids})}}},o=(r(418),r(24)),c=r(49),l=r.n(c),d=r(446),v=r(171),m=r(410),_=r(460),f=r(163),h=r(83),x=r(152),y=r(361),k=r(368),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[0===t.activeBtn?r("v-layout",{attrs:{wrap:"","justify-center":"","align-center":"","text-left":""}},t._l(t.orders.today,(function(t,e){return r("order-summary",{key:t.id,attrs:{item:t}})})),1):t._e(),t._v(" "),1===t.activeBtn?r("v-layout",{attrs:{wrap:"","justify-center":"","align-center":"","text-left":""}},t._l(t.orders.advance,(function(t,e){return r("order-summary",{key:t.id,attrs:{item:t}})})),1):t._e(),t._v(" "),2===t.activeBtn?r("v-layout",{attrs:{wrap:"","justify-center":"","align-center":"","text-left":""}},[t._l(t.orders.history,(function(t,e){return r("order-summary",{key:t.id,attrs:{item:t}})})),t._v(" "),r("v-fab-transition",[r("v-btn",{staticClass:"fabicon mb-10",attrs:{fab:"",small:"",fixed:"",bottom:"",right:""},on:{click:function(e){e.stopPropagation(),t.modal=!0}}},[r("v-icon",{attrs:{color:"blue"}},[t._v("mdi-calendar")])],1)],1)],2):t._e(),t._v(" "),r("v-bottom-navigation",{attrs:{color:"indigo",fixed:"",bottom:"",grow:""},model:{value:t.activeBtn,callback:function(e){t.activeBtn=e},expression:"activeBtn"}},[r("v-btn",{on:{click:function(e){return e.stopPropagation(),t.getOrdersToday()}}},[r("span",[t._v("Today")])]),t._v(" "),r("v-btn",{on:{click:function(e){return e.stopPropagation(),t.getAdvanceOrder()}}},[r("span",[t._v("Advanced")])]),t._v(" "),r("v-btn",[r("span",[t._v("History")])])],1),t._v(" "),r("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-date-picker",{attrs:{scrollable:"",max:t.max},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1)}),[],!1,null,"48dd16f1",null);e.default=component.exports;l()(component,{VBottomNavigation:d.a,VBtn:v.a,VContainer:m.a,VDatePicker:_.a,VDialog:f.a,VFabTransition:h.c,VIcon:x.a,VLayout:y.a,VSpacer:k.a})}}]);