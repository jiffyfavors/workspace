(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(t,e,r){},385:function(t,e,r){},388:function(t,e,r){"use strict";r.r(e),r.d(e,"v1",(function(){return I})),r.d(e,"v3",(function(){return D})),r.d(e,"v4",(function(){return O})),r.d(e,"v5",(function(){return $}));var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function l(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}for(var c=[],d=0;d<256;++d)c.push((d+256).toString(16).substr(1));var v,m,h=function(t,e){var i=e||0,r=c;return(r[t[i+0]]+r[t[i+1]]+r[t[i+2]]+r[t[i+3]]+"-"+r[t[i+4]]+r[t[i+5]]+"-"+r[t[i+6]]+r[t[i+7]]+"-"+r[t[i+8]]+r[t[i+9]]+"-"+r[t[i+10]]+r[t[i+11]]+r[t[i+12]]+r[t[i+13]]+r[t[i+14]]+r[t[i+15]]).toLowerCase()},f=0,_=0;var I=function(t,e,r){var i=e&&r||0,b=e||[],n=(t=t||{}).node||v,o=void 0!==t.clockseq?t.clockseq:m;if(null==n||null==o){var c=t.random||(t.rng||l)();null==n&&(n=v=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==o&&(o=m=16383&(c[6]<<8|c[7]))}var d=void 0!==t.msecs?t.msecs:Date.now(),I=void 0!==t.nsecs?t.nsecs:_+1,dt=d-f+(I-_)/1e4;if(dt<0&&void 0===t.clockseq&&(o=o+1&16383),(dt<0||d>f)&&void 0===t.nsecs&&(I=0),I>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=d,_=I,m=o;var k=(1e4*(268435455&(d+=122192928e5))+I)%4294967296;b[i++]=k>>>24&255,b[i++]=k>>>16&255,b[i++]=k>>>8&255,b[i++]=255&k;var x=d/4294967296*1e4&268435455;b[i++]=x>>>8&255,b[i++]=255&x,b[i++]=x>>>24&15|16,b[i++]=x>>>16&255,b[i++]=o>>>8|128,b[i++]=255&o;for(var y=0;y<6;++y)b[i+y]=n[y];return e||h(b)};var k=function(t,e,r){function n(t,n,o,l){var c=o&&l||0;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof n&&(n=function(t){var e=[];return t.replace(/[a-fA-F0-9]{2}/g,(function(t){e.push(parseInt(t,16))})),e}(n)),!Array.isArray(t))throw TypeError("value must be an array of bytes");if(!Array.isArray(n)||16!==n.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var d=r(n.concat(t));if(d[6]=15&d[6]|e,d[8]=63&d[8]|128,o)for(var v=0;v<16;++v)o[c+v]=d[v];return o||h(d)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n};function x(t){return 14+(t+64>>>9<<4)+1}function y(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function C(q,a,b,t,s,e){return y((r=y(y(a,q),y(t,e)))<<(n=s)|r>>>32-n,b);var r,n}function A(a,b,t,e,r,s,n){return C(b&t|~b&e,a,b,r,s,n)}function w(a,b,t,e,r,s,n){return C(b&e|t&~e,a,b,r,s,n)}function S(a,b,t,e,r,s,n){return C(b^t^e,a,b,r,s,n)}function V(a,b,t,e,r,s,n){return C(t^(b|~e),a,b,r,s,n)}var D=k("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(input){for(var output=[],t=32*input.length,i=0;i<t;i+=8){var e=input[i>>5]>>>i%32&255,r=parseInt("0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e),16);output.push(r)}return output}(function(t,e){t[e>>5]|=128<<e%32,t[x(e)-1]=e;for(var a=1732584193,b=-271733879,r=-1732584194,n=271733878,i=0;i<t.length;i+=16){var o=a,l=b,c=r,d=n;a=A(a,b,r,n,t[i],7,-680876936),n=A(n,a,b,r,t[i+1],12,-389564586),r=A(r,n,a,b,t[i+2],17,606105819),b=A(b,r,n,a,t[i+3],22,-1044525330),a=A(a,b,r,n,t[i+4],7,-176418897),n=A(n,a,b,r,t[i+5],12,1200080426),r=A(r,n,a,b,t[i+6],17,-1473231341),b=A(b,r,n,a,t[i+7],22,-45705983),a=A(a,b,r,n,t[i+8],7,1770035416),n=A(n,a,b,r,t[i+9],12,-1958414417),r=A(r,n,a,b,t[i+10],17,-42063),b=A(b,r,n,a,t[i+11],22,-1990404162),a=A(a,b,r,n,t[i+12],7,1804603682),n=A(n,a,b,r,t[i+13],12,-40341101),r=A(r,n,a,b,t[i+14],17,-1502002290),b=A(b,r,n,a,t[i+15],22,1236535329),a=w(a,b,r,n,t[i+1],5,-165796510),n=w(n,a,b,r,t[i+6],9,-1069501632),r=w(r,n,a,b,t[i+11],14,643717713),b=w(b,r,n,a,t[i],20,-373897302),a=w(a,b,r,n,t[i+5],5,-701558691),n=w(n,a,b,r,t[i+10],9,38016083),r=w(r,n,a,b,t[i+15],14,-660478335),b=w(b,r,n,a,t[i+4],20,-405537848),a=w(a,b,r,n,t[i+9],5,568446438),n=w(n,a,b,r,t[i+14],9,-1019803690),r=w(r,n,a,b,t[i+3],14,-187363961),b=w(b,r,n,a,t[i+8],20,1163531501),a=w(a,b,r,n,t[i+13],5,-1444681467),n=w(n,a,b,r,t[i+2],9,-51403784),r=w(r,n,a,b,t[i+7],14,1735328473),b=w(b,r,n,a,t[i+12],20,-1926607734),a=S(a,b,r,n,t[i+5],4,-378558),n=S(n,a,b,r,t[i+8],11,-2022574463),r=S(r,n,a,b,t[i+11],16,1839030562),b=S(b,r,n,a,t[i+14],23,-35309556),a=S(a,b,r,n,t[i+1],4,-1530992060),n=S(n,a,b,r,t[i+4],11,1272893353),r=S(r,n,a,b,t[i+7],16,-155497632),b=S(b,r,n,a,t[i+10],23,-1094730640),a=S(a,b,r,n,t[i+13],4,681279174),n=S(n,a,b,r,t[i],11,-358537222),r=S(r,n,a,b,t[i+3],16,-722521979),b=S(b,r,n,a,t[i+6],23,76029189),a=S(a,b,r,n,t[i+9],4,-640364487),n=S(n,a,b,r,t[i+12],11,-421815835),r=S(r,n,a,b,t[i+15],16,530742520),b=S(b,r,n,a,t[i+2],23,-995338651),a=V(a,b,r,n,t[i],6,-198630844),n=V(n,a,b,r,t[i+7],10,1126891415),r=V(r,n,a,b,t[i+14],15,-1416354905),b=V(b,r,n,a,t[i+5],21,-57434055),a=V(a,b,r,n,t[i+12],6,1700485571),n=V(n,a,b,r,t[i+3],10,-1894986606),r=V(r,n,a,b,t[i+10],15,-1051523),b=V(b,r,n,a,t[i+1],21,-2054922799),a=V(a,b,r,n,t[i+8],6,1873313359),n=V(n,a,b,r,t[i+15],10,-30611744),r=V(r,n,a,b,t[i+6],15,-1560198380),b=V(b,r,n,a,t[i+13],21,1309151649),a=V(a,b,r,n,t[i+4],6,-145523070),n=V(n,a,b,r,t[i+11],10,-1120210379),r=V(r,n,a,b,t[i+2],15,718787259),b=V(b,r,n,a,t[i+9],21,-343485551),a=y(a,o),b=y(b,l),r=y(r,c),n=y(n,d)}return[a,b,r,n]}(function(input){if(0===input.length)return[];for(var t=8*input.length,output=new Uint32Array(x(t)),i=0;i<t;i+=8)output[i>>5]|=(255&input[i/8])<<i%32;return output}(t),8*t.length))}));var O=function(t,e,r){"string"==typeof t&&(e="binary"===t?new Uint8Array(16):null,t=null);var n=(t=t||{}).random||(t.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){for(var o=r||0,i=0;i<16;++i)e[o+i]=n[i];return e}return h(n)};function E(s,t,e,r){switch(s){case 0:return t&e^~t&r;case 1:return t^e^r;case 2:return t&e^t&r^e&r;case 3:return t^e^r}}function L(t,e){return t<<e|t>>>32-e}var $=k("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var i=0;i<n.length;++i)t.push(n.charCodeAt(i))}t.push(128);for(var o=t.length/4+2,l=Math.ceil(o/16),c=new Array(l),d=0;d<l;++d){for(var v=new Uint32Array(16),m=0;m<16;++m)v[m]=t[64*d+4*m]<<24|t[64*d+4*m+1]<<16|t[64*d+4*m+2]<<8|t[64*d+4*m+3];c[d]=v}c[l-1][14]=8*(t.length-1)/Math.pow(2,32),c[l-1][14]=Math.floor(c[l-1][14]),c[l-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<l;++h){for(var f=new Uint32Array(80),_=0;_<16;++_)f[_]=c[h][_];for(var I=16;I<80;++I)f[I]=L(f[I-3]^f[I-8]^f[I-14]^f[I-16],1);for(var a=r[0],b=r[1],k=r[2],x=r[3],y=r[4],C=0;C<80;++C){var s=Math.floor(C/20),A=L(a,5)+E(s,b,k,x)+y+e[s]+f[C]>>>0;y=x,x=k,k=L(b,30)>>>0,b=a,a=A}r[0]=r[0]+a>>>0,r[1]=r[1]+b>>>0,r[2]=r[2]+k>>>0,r[3]=r[3]+x>>>0,r[4]=r[4]+y>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}))},426:function(t,e,r){"use strict";var n=r(384);r.n(n).a},427:function(t,e,r){"use strict";var n=r(385);r.n(n).a},428:function(t,e,r){},461:function(t,e,r){"use strict";r.r(e);r(238),r(44),r(27);var n=r(29),o=r(388),l={data:function(){return{data:{},serverData:null,loaded:!1,backDropError:!1,logoError:!1,publishChecklist:!1,rateError:!1,locationError:!1,isActive:!1,dialog:!1,actionSheet:!1,deleteDiag:!1,menuError:!1,editedIndex:0,editedItem:{business_name:"",backdrop:"",branch:"",rates:{sc:0,cr:0},draft:!0,url:"",delivery_time:{open:900,close:1700}},images:[],imagediag:!1,coordiag:!1,selectedImages:[],selectedmarker:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",dropzoneOptions:{url:"/",thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!1,acceptedFiles:".jpg, .jpeg, .png",dictDefaultMessage:'<p class=\'text-default\'><v-icon small color="blue">mdi-upload</v-icon> Drag Images or Click Here</p>\n          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>\n          '},mylocation:{lat:9.7941185,lng:118.7322599}}},props:{storeid:{type:String}},computed:{allowedPublish:function(){return!(this.logoError||this.backDropError||this.menuError||this.rateError||this.locationError)},formTitle:function(){return-1===this.editedIndex?"New Branch":"Edit Store Info"}},watch:{serverData:function(){this.loaded=!1,this.data=Object.assign({},this.serverData.d),this.getDataInfo()},backDropError:function(){console.log("Backdrop Error",this.backDropError)},imagediag:function(){var t=this;this.imagediag&&this.$nextTick((function(){t.$refs.imageSelector.resetMultipleSelection()})),this.actionSheet=!1},editedItem:function(){this.editedItem.hasOwnProperty("delivery_time")||(this.editedItem.delivery_time={open:"09:00:00",close:"17:00:00"}),this.editedItem.hasOwnProperty("rates")||(this.editedItem.rates={cr:0,sc:0}),this.editedItem.hasOwnProperty("flags")||(this.editedItem.flags=[])},coordiag:function(t){var e=this;this.actionSheet=!1,t&&this.isMapLoaded&&this.$nextTick((function(){e.$refs.gMap.map.setCenter({lat:e.editedItem.coordinates.latitude,lng:e.editedItem.coordinates.longitude})}))},isMapLoaded:function(t){var e=this;this.actionSheet=!1,t&&this.$nextTick((function(){e.$refs.gMap.map.setCenter({lat:e.editedItem.coordinates.latitude,lng:e.editedItem.coordinates.longitude})}))},dialog:function(t){this.actionSheet=!1,t||this.close()}},mounted:function(){var t=this.$fireStoreObj().collection("merchant").doc(this.storeid);this.$bind("serverData",t)},methods:{getDataInfo:function(){this.data&&(this.editedIndex=0,this.editedItem=Object.assign({},this.data),""!==this.data.backdrop&&this.data.backdrop||(this.backDropError=!0),""!==this.data.logo&&this.data.logo||(this.logoError=!0),this.data.menu&&0!==this.data.menu.length||(this.menuError=!0),0!=this.data.coordinates.latitude&&0!=this.data.coordinates.longitude||(this.locationError=!0),this.data.rates.cr<0&&(this.rateError=!0),this.loaded=!0)},publisher:function(){this.editedItem.draft?this.publishChecklist=!0:(this.editedIndex=0,this.editedItem.draft=!this.editedItem.draft,this.save())},publishStore:function(){this.editedIndex=0,this.editedItem.draft=!this.editedItem.draft,this.save(),this.publishChecklist=!1},createBranch:function(){this.editedIndex=-1,this.editedItem.draft=!0,this.dialog=!0},nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(t){this.itemsPerPage=t},deleteItem:function(){var t=this;this.$fireStore.collection("foods").where("owner","array-contains",this.storeid).get().then((function(e){e.docs.forEach((function(e){t.$fireStore.collection("foods").doc(e.id).update({owner:t.$fireStoreObj.FieldValue.arrayRemove(t.storeid)})}))})),this.$fireStore.collection("merchant").doc(this.storeid).update({"d.flags":["Request for Deletion"],"d.draft":!0}),this.close()},editItem:function(t){this.editedItem=0,this.editedItem=Object.assign({},t),this.dialog=!0},setCenter:function(){},centerChange:function(){var t=this.$refs.gMap.map.getCenter();this.$refs.gmapmarker.marker.setPosition({lat:t.lat(),lng:t.lng()})},afterComplete:function(t){var e=this,r=o.v1();this.isLoading=!0;try{var n=t;this.$fireStorage.ref(this.storeid+"/"+r+"-"+n.name).put(n).then((function(t){t.ref.getDownloadURL().then((function(r){e.images.push({id:t.ref.fullPath,src:r})}))}))}catch(t){console.log(t)}this.$refs.imgDropZone.removeFile(t),this.isLoading=!1},deleteSelected:function(){var t=this;this.selectedImages.forEach((function(a){t.$fireStorage.ref(a.id).delete().then((function(){t.images.splice(t.images.indexOf(a),1)}))}))},setAsLogo:function(){this.editedItem.logo=this.selectedImages[0].src,this.imagediag=!1},setAsBackdrop:function(){this.editedItem.backdrop=this.selectedImages[0].src,this.imagediag=!1},onSelectMultipleImage:function(data){this.selectedImages=data},generareFileList:function(){var t=this;this.images=[],this.selectedImages=[],this.$fireStorage.ref(this.storeid).listAll().then((function(e){e.items.forEach((function(e){e.getDownloadURL().then((function(r){t.images.push({id:e.fullPath,src:r})}))}))})),this.imagediag=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.coordiag=!1,t.actionSheet=!1}))},save:function(){var t=this,e=this.$fireStoreObj(),r=new n.GeoFirestore(e).collection("merchant");if(this.editedIndex>-1){var o=(data=Object.assign({},this.editedItem)).business_name.replace(" ","_").replace("'","").toLowerCase()+"_"+data.branch.replace(" ","_").replace("'","").toLowerCase();data.url=o.replace(/ /g,"_").replace(/'/g,"");var l=data.coordinates;data.coordinates=new this.$fireStoreObj.GeoPoint(l.latitude,l.longitude),delete data.menu,r.doc(this.storeid).update(data)}else{var data,c={latitude:0,longitude:0};o=(data=this.editedItem).business_name.replace(" ","_").replace("'","").toLowerCase()+"_"+data.branch.replace(" ","_").replace("'","").toLowerCase();this.editedItem.url=o.replace(/ /g,"_").replace(/'/,""),this.editedItem.coordinates=new this.$fireStoreObj.GeoPoint(c.latitude,c.longitude);var d=Object.assign({},this.editedItem);d.hasOwnProperty("id")&&(d.main=d.id,delete d.id),r.add(d).then((function(r){if(d.hasOwnProperty("main")){var n=r.id;e.collection("foods").where("owner","array-contains",d.main).get().then((function(r){r.docs.forEach((function(r){e.collection("foods").doc(r.id).update({owner:t.$fireStoreObj.FieldValue.arrayUnion(n)})}))}))}}))}this.close()},updateMapLocation:function(){var t=this.$fireStoreObj(),e=new n.GeoFirestore(t).collection("merchant"),data=Object.assign({},this.editedItem),r=this.$refs.gMap.map.getCenter();data.coordinates=new this.$fireStoreObj.GeoPoint(r.lat(),r.lng()),e.doc(this.storeid).update(data),this.close()},showMerchant:function(){var t=this,area=this.current_area;this.isLoading=!0,this.$store.dispatch("map/getStoreByArea",{lat:area.coordinates.latitude,lng:area.coordinates.longitude}).then((function(){t.isLoading=!1}))}}},c=(r(426),r(24)),d=r(49),v=r.n(d),m=r(158),h=r(364),f=r(171),_=r(153),I=r(57),k=r(393),x=r(410),y=r(163),C=r(360),A=r(152),w=r(129),S=r(361),V=(r(13),r(36)),D=r(173),O=r(6),E=r(0),L=Object(O.a)(V.a).extend({name:"VLazy",directives:{intersect:D.a},props:{minHeight:[Number,String],options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return{minHeight:parseInt(this.minHeight)?Object(E.g)(this.minHeight):this.minHeight}}},methods:{genContent:function(){var slot=Object(E.r)(this);if(!this.transition)return slot;var t=[];return this.isActive&&t.push(slot),this.$createElement("transition",{props:{name:this.transition}},t)},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),$=r(155),j=r(96),B=r(156),P=r(21),M=r(157),R=r(159),F=r(79),U=r(367),T=r(368),z=r(392),G=r(445),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loaded?r("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md4:"",sm6:"",lg3:""}},[r("v-lazy",{attrs:{options:{threshold:.6},"min-height":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("v-card",{attrs:{width:"100%",disabled:t.editedItem.flags.indexOf("Request for Deletion")>-1},on:{click:function(e){e.stopPropagation(),t.actionSheet=!0}}},[r("v-img",{attrs:{src:t.data.backdrop,height:"200px","min-width":"100%",width:"100%"},on:{error:function(e){t.backDropError=!0}}},[r("v-chip",{staticClass:"onsale",attrs:{color:t.data.main?"warning":"info",label:"",small:""}},[t._v(" "+t._s(t.data.main?"Branch":"Main")+" ")]),t._v(" "),t.editedItem.flags.indexOf("Request for Deletion")>-1?r("v-chip",{staticClass:"onsale",attrs:{color:"red",label:"",small:""}},[t._v("For Deletion")]):t._e(),t._v(" "),t.data.rates.cr>0?r("span",{staticClass:"bestseller"},[t._v("Recommended")]):t._e()],1),t._v(" "),r("v-card-actions",[r("v-list-item",{attrs:{"three-line":"",dense:""}},[r("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[r("v-img",{staticClass:"elevation-6",attrs:{src:t.data.logo},on:{error:function(e){t.logoError=!0}}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.data.business_name))]),t._v(" "),r("v-list-item-subtitle",[r("small",[t._v(t._s(t.data.branch))])])],1),t._v(" "),r("v-list-item-action",[r("v-list-item-action-text",[r("span",{staticClass:"caption grey--text"},[t._v("CR: ")]),t._v(" "),r("span",{staticClass:"red--text subtitle-2"},[t._v(t._s(t.data.rates.cr)+" %")])]),t._v(" "),r("v-chip",{attrs:{dense:"",color:t.data.draft?"error":"success",small:""}},[t._v(" "+t._s(t.data.draft?"Close":"Live")+" ")])],1)],1)],1)],1)],1),t._v(" "),r("v-bottom-sheet",{attrs:{inset:""},model:{value:t.actionSheet,callback:function(e){t.actionSheet=e},expression:"actionSheet"}},[r("v-list",{attrs:{"single-line":"",dense:""}},[r("v-subheader",[t._v("Manage "+t._s(t.editedItem.business_name)+" "+t._s(t.editedItem.branch))]),t._v(" "),r("v-list-item-group",[r("v-list-item",{on:{click:function(e){t.selectedImages=[],t.editedIndex=0,t.editItem(t.editedItem)}}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"blue"}},[t._v(" mdi-pencil ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Edit Store")])],1)],1)],1),t._v(" "),r("v-list-item-group",[t.editedItem.main?t._e():r("v-list-item",{on:{click:function(e){return t.createBranch()}}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"blue"}},[t._v(" mdi-store ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Create Branch")])],1)],1)],1),t._v(" "),r("v-list-item-group",[r("v-list-item",{attrs:{to:"/menu/"+t.storeid}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"blue"}},[t._v(" mdi-food ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Manage Food & Menu")])],1)],1)],1),t._v(" "),r("v-list-item-group",[r("v-list-item",{attrs:{href:"https://m.jiffyfavors.com/resto/"+t.editedItem.url,target:"_blank"}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"blue"}},[t._v(" mdi-food ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Show Menu")])],1)],1)],1),t._v(" "),r("v-list-item-group",[r("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.publisher()}}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:t.editedItem.draft?"green":"red",small:""}},[t._v(" "+t._s(t.editedItem.draft?"mdi-check":"mdi-close")+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(" "+t._s(t.editedItem.draft?"Publish":"Unpublish")+" ")])],1)],1)],1),t._v(" "),r("v-list-item-group",[r("v-list-item",{on:{click:function(e){t.editedIndex=0,t.setCenter(),t.coordiag=!0}}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"indigo"}},[t._v(" mdi-map-marker ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Update Location")])],1)],1)],1),t._v(" "),r("v-list-item-group",[r("v-list-item",{on:{click:function(e){e.stopPropagation(),t.deleteDiag=!0}}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:"red"}},[t._v(" mdi-delete ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Delete Store")])],1)],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.formTitle))])]),t._v(" "),r("v-card-text",[t.editedIndex>-1?r("v-img",{staticClass:"elevation-6",attrs:{"max-height":"300px","min-height":"200px",width:"100%",src:t.editedItem.backdrop},on:{click:function(e){return e.stopPropagation(),t.generareFileList(e)}}},[r("v-avatar",{staticStyle:{position:"absolute",bottom:"0"}},[r("v-img",{staticClass:"elevation-6",attrs:{src:t.editedItem.logo},on:{click:function(e){return e.stopPropagation(),t.generareFileList(e)}}})],1)],1):t._e(),t._v(" "),r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("v-text-field",{attrs:{label:"Business Name"},model:{value:t.editedItem.business_name,callback:function(e){t.$set(t.editedItem,"business_name",e)},expression:"editedItem.business_name"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("v-text-field",{attrs:{label:"Branch"},model:{value:t.editedItem.branch,callback:function(e){t.$set(t.editedItem,"branch",e)},expression:"editedItem.branch"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{type:"time",label:"Opening Time"},model:{value:t.editedItem.delivery_time.open,callback:function(e){t.$set(t.editedItem.delivery_time,"open",e)},expression:"editedItem.delivery_time.open"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{type:"time",label:"Closing Time"},model:{value:t.editedItem.delivery_time.close,callback:function(e){t.$set(t.editedItem.delivery_time,"close",e)},expression:"editedItem.delivery_time.close"}})],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),t._v(" "),r("v-bottom-sheet",{attrs:{persistent:"","max-width":"400px"},model:{value:t.coordiag,callback:function(e){t.coordiag=e},expression:"coordiag"}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[t._v(" Update Store Location ")]),t._v(" "),r("v-card-text",[r("div",{staticClass:"mapcontainer"},[r("GMap",{ref:"gMap",attrs:{id:"gmap",center:t.mylocation,options:{fullscreenControl:!1,streetViewControl:!1,mapTypeControl:!0,zoomControl:!0,gestureHandling:"greedy"},zoom:15},on:{center_changed:t.centerChange,loaded:function(e){t.isMapLoaded=!0}}},[r("GMapMarker",{ref:"gmapmarker",attrs:{position:t.mylocation,options:{icon:t.selectedmarker}}})],1)],1)]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.coordiag=!1}}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.updateMapLocation}},[t._v(" Save ")])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.publishChecklist,callback:function(e){t.publishChecklist=e},expression:"publishChecklist"}},[r("v-card",[r("v-card-title",[t._v("Publishing Checklist")]),t._v(" "),r("v-card-text",[r("v-list",{attrs:{dense:"",flat:""}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:t.logoError?"red":"green"}},[t._v(" "+t._s(t.logoError?"mdi-close":"mdi-check")+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Store Logo")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:t.backDropError?"red":"green"}},[t._v("> "+t._s(t.backDropError?"mdi-close":"mdi-check"))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Store Background Image")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:t.menuError?"red":"green"}},[t._v(" "+t._s(t.menuError?"mdi-close":"mdi-check")+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Menu Setup")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:t.rateError?"red":"green"}},[t._v(" "+t._s(t.rateError?"mdi-close":"mdi-check")+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Agreed Commission Rate")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{small:"",color:t.locationError?"red":"green"}},[t._v(" "+t._s(t.locationError?"mdi-close":"mdi-check")+" ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Store Location")])],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",small:"",dense:""},on:{click:function(e){e.stopPropagation(),t.publishChecklist=!1}}},[t._v("Close")]),t._v(" "),r("v-btn",{attrs:{text:"",small:"",disabled:!t.allowedPublish,dense:""},on:{click:function(e){return e.stopPropagation(),t.publishStore()}}},[t._v("Publish")])],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.imagediag,callback:function(e){t.imagediag=e},expression:"imagediag"}},[r("v-card",[r("v-card-text",[r("v-container",[r("vuedropzone",{ref:"imgDropZone",attrs:{id:"customdropzone",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete}}),t._v(" "),r("vue-select-image",{ref:"imageSelector",attrs:{"data-images":t.images,"is-multiple":!0},on:{onselectmultipleimage:t.onSelectMultipleImage}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteSelected}},[t._v(" Delete ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.setAsLogo}},[t._v(" Set as Logo ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.setAsBackdrop}},[t._v(" Set as Backdrop ")])],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"290"},model:{value:t.deleteDiag,callback:function(e){t.deleteDiag=e},expression:"deleteDiag"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Confirm deletion")]),t._v(" "),r("v-card-text",[t._v("Are you sure you want to delete this "+t._s(t.editedItem.business_name)+" - "+t._s(t.editedItem.branch)+"?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDiag=!1}}},[t._v("Close")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteItem(),t.deleteDiag=!1}}},[t._v("Ok")])],1)],1)],1)],1)],1):t._e()}),[],!1,null,"607a7f86",null),H=component.exports;v()(component,{VAvatar:m.a,VBottomSheet:h.a,VBtn:f.a,VCard:_.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VChip:k.a,VContainer:x.a,VDialog:y.a,VFlex:C.a,VIcon:A.a,VImg:w.a,VLayout:S.a,VLazy:L,VList:$.a,VListItem:j.a,VListItemAction:B.a,VListItemActionText:P.a,VListItemAvatar:M.a,VListItemContent:P.b,VListItemGroup:R.a,VListItemIcon:F.a,VListItemSubtitle:P.c,VListItemTitle:P.d,VRow:U.a,VSpacer:T.a,VSubheader:z.a,VTextField:G.a});var J={layout:"default",components:{RestoCard:H},data:function(){return{restos:[],fab:null,claimDiag:!1,claimCode:"",editedIndex:0,dialog:!1,editedItem:{business_name:"",backdrop:"",branch:"",rates:{sc:15,cr:0},draft:!0,url:"",delivery_time:{open:"09:00",close:"17:00"}}}},computed:{resto:function(){var t=[];return this.restos.forEach((function(e){t.push({id:e.id,data:e.d})})),t},getCurrentBusiness:function(){return this.$store.getters["auth/getDefaultBusiness"]}},watch:{getCurrentBusiness:function(t){this.getStores()}},mounted:function(){this.getStores()},methods:{startClaim:function(){var t=this;this.$fireStoreObj().collection("merchant").where("d.claimCode","==","CLAIM-"+this.claimCode).get().then((function(e){e.docs.forEach((function(e){var r={};r=e.data().d.managed_by?{"d.managed_by":t.$fireStoreObj.FieldValue.arrayUnion(t.getCurrentBusiness.id)}:{"d.managed_by":[t.getCurrentBusiness.id]},t.$fireStoreObj().collection("merchant").doc(e.id).update(r).then((function(){alert(e.data().d.business_name+" is claim successfully"),t.claimDiag=!1}))}))}))},getStores:function(){var t=this.$fireStoreObj().collection("merchant").where("d.managed_by","array-contains",this.getCurrentBusiness.id);this.$bind("restos",t)},save:function(){var t=this,e=this.$fireStoreObj(),r=new n.GeoFirestore(e).collection("merchant"),data=this.editedItem,o=0,l=0,c=data.business_name.replace(" ","_").replace("'","").toLowerCase()+"_"+data.branch.replace(" ","_").replace("'","").toLowerCase();this.editedItem.url=c.replace(/ /g,"_").replace(/'/,""),this.editedItem.flags=["Pre-Apply"],this.editedItem.coordinates=new this.$fireStoreObj.GeoPoint(o,l),this.editedItem.managed_by=[this.getCurrentBusiness.id],r.add(this.editedItem).then((function(e){t.dialog=!1}))}}},N=(r(427),r(2)),Y=(r(103),r(35),r(38),r(428),r(74)),K=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),Q=r(109),W=Object(O.a)(Y.a,V.a,K).extend({name:"v-speed-dial",directives:{ClickOutside:Q.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(N.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(N.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,r=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var n=0;r=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(n++,t("div",{style:{transitionDelay:.05*n+"s"},key:i},[b]))}))}var o=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},r);return t("div",data,[this.$slots.activator,o])}}),Z=Object(c.a)(J,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-layout",{attrs:{wrap:"","justify-center":"","align-center":"","text-left":""}},[t._l(t.resto,(function(i){return r("resto-card",{key:i.id,staticClass:"review-card",staticStyle:{"white-space":"initial"},attrs:{storeid:i.id}})})),t._v(" "),r("v-speed-dial",{staticClass:"fabicon mb-10",attrs:{bottom:"",fixed:"",right:"",direction:"top",transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?r("v-icon",[t._v("mdi-close")]):r("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"blue"},on:{click:function(e){e.stopPropagation(),t.claimDiag=!0}}},[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[r("v-icon",[t._v("mdi-store")])],1)],1)],2),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.claimDiag,callback:function(e){t.claimDiag=e},expression:"claimDiag"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"title font-weight-light"},[t._v("Claim a Store")])]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{prefix:"CLAIM-",label:"Claim Code"},model:{value:t.claimCode,callback:function(e){t.claimCode=e},expression:"claimCode"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.claimDiag=!1}}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.startClaim}},[t._v(" Claim ")])],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"title font-weight-light"},[t._v("Create a Store")])]),t._v(" "),r("v-card-text",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[r("v-text-field",{attrs:{label:"Business Name"},model:{value:t.editedItem.business_name,callback:function(e){t.$set(t.editedItem,"business_name",e)},expression:"editedItem.business_name"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[r("v-text-field",{attrs:{label:"Branch"},model:{value:t.editedItem.branch,callback:function(e){t.$set(t.editedItem,"branch",e)},expression:"editedItem.branch"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{type:"time",label:"Opening Time"},model:{value:t.editedItem.delivery_time.open,callback:function(e){t.$set(t.editedItem.delivery_time,"open",e)},expression:"editedItem.delivery_time.open"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{type:"time",label:"Closing Time"},model:{value:t.editedItem.delivery_time.close,callback:function(e){t.$set(t.editedItem.delivery_time,"close",e)},expression:"editedItem.delivery_time.close"}})],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)}),[],!1,null,"55ae23d8",null);e.default=Z.exports;v()(Z,{VBtn:f.a,VCard:_.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VDialog:y.a,VFlex:C.a,VIcon:A.a,VLayout:S.a,VSpacer:T.a,VSpeedDial:W,VTextField:G.a})}}]);