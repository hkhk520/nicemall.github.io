(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f1faf8"],{1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),o=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),h=n("d039"),g=[].push,d=Math.min,p=4294967295,v=!h((function(){return!RegExp(p,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),a=void 0===n?p:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var c,s,u,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,h+"g");while(c=f.call(v,r)){if(s=v.lastIndex,s>d&&(l.push(r.slice(d,c.index)),c.length>1&&c.index<r.length&&g.apply(l,c.slice(1)),u=c[0].length,d=s,l.length>=a))break;v.lastIndex===c.index&&v.lastIndex++}return d===r.length?!u&&v.test("")||l.push(""):l.push(r.slice(d)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var f=a(t),h=String(this),g=c(f,RegExp),m=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),b=new g(v?f:"^(?:"+f.source+")",x),S=void 0===i?p:i>>>0;if(0===S)return[];if(0===h.length)return null===l(b,h)?[h]:[];var I=0,y=0,E=[];while(y<h.length){b.lastIndex=v?y:0;var A,k=l(b,v?h:h.slice(y));if(null===k||(A=d(u(b.lastIndex+(v?0:y)),h.length))===I)y=s(h,y,m);else{if(E.push(h.slice(I,y)),E.length===S)return E;for(var w=1;w<=k.length-1;w++)if(E.push(k[w]),E.length===S)return E;y=I=A}}return E.push(h.slice(I)),E}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1c04":function(t,e,n){"use strict";n("910f")},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),o=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"22de":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.nickName?r("div",{staticClass:"self-page",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[r("div",{staticClass:"self-page-header"},[r("div",{staticClass:"user-img"},[r("img",{attrs:{src:t.userImg?t.userImg:n("a2be")}}),r("input",{ref:"inputDom",attrs:{type:"file"},on:{change:t.changeUserImg}})]),r("div",{staticClass:"user-nick"},[r("span",[t._v(t._s(t.nickName))])])]),r("div",{staticClass:"self-container"},[r("div",[r("van-cell-group",[r("van-cell",{attrs:{title:"个人资料","is-link":""},on:{click:function(e){t.isShowPersonalData=!t.isShowPersonalData}}}),r("van-cell",{attrs:{title:"地址管理","is-link":""},on:{click:t.goAllAddress}}),r("van-cell",{attrs:{title:"安全中心","is-link":""},on:{click:function(e){return t.goSecure(t.userPhone)}}})],1),r("van-popup",{attrs:{round:!0},model:{value:t.isShowPersonalData,callback:function(e){t.isShowPersonalData=e},expression:"isShowPersonalData"}},[r("van-cell-group",[r("van-cell",{attrs:{title:"头像",center:""}},[r("div",{staticClass:"user-img"},[r("img",{attrs:{src:t.userImg?t.userImg:n("a2be")}}),r("input",{ref:"inputDom",attrs:{type:"file"},on:{change:t.changeUserImg}})])]),r("van-cell",{attrs:{title:"手机号",value:t.userPhone}}),r("van-cell",{attrs:{title:"昵称"}},[r("van-field",{attrs:{placeholder:"请输入用户名","input-align":"right"},model:{value:t.nickName,callback:function(e){t.nickName=e},expression:"nickName"}})],1)],1)],1)],1)])]):t._e()},i=[],a=(n("a15b"),n("d81d"),n("b0c0"),n("ac1f"),n("8a79"),n("1276"),{name:"SelfPage",data:function(){return{nickName:null,userPhone:null,userImg:null,startX:null,startY:null,moveX:null,moveY:null,isShowPersonalData:!1}},created:function(){if(localStorage.getItem("userImg")&&(this.userImg=localStorage.getItem("userImg")),localStorage.getItem("_token"))for(var t=JSON.parse(localStorage.getItem("userArr")),e=0;e<t.length;e++){var n=(t[e].phone+t[e].password).split(""),r=n.map((function(t){return t.charCodeAt()})).join("");if(localStorage.getItem("_token")==r)return this.nickName=t[e].nickName,void(this.userPhone=t[e].phone)}},methods:{touchstart:function(t){this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchmove:function(t){this.moveX=t.touches[0].clientX-this.startX,this.moveY=t.touches[0].clientY-this.startY},touchend:function(){(Math.abs(this.moveX)>Math.abs(this.moveY)&&this.moveX<0||Math.abs(this.moveX)>Math.abs(this.moveY)&&this.moveX>0)&&this.goBack()},goBack:function(){this.$router.go(-1);for(var t=JSON.parse(localStorage.getItem("userArr")),e=0;e<t.length;e++)if(t[e].phone==this.userPhone)return t[e].nickName=this.nickName,void localStorage.setItem("userArr",JSON.stringify(t))},changeUserImg:function(){var t=this,e=this.$refs.inputDom,n=e.files[0];if(void 0!=n){var r=e.files[0].name;if(r.endsWith(".png")||r.endsWith(".jpg")||r.endsWith(".gif")){if(n.size>1048576)return alert("图片大小不能超过 1MB!"),!1;var i=new FileReader;i.readAsDataURL(n),i.onload=function(e){t.userImg=e.target.result,localStorage.setItem("userImg",t.userImg)}}else alert("格式错误！！")}},goSecure:function(t){this.$router.push({name:"Secure",query:{userPhone:t}});for(var e=JSON.parse(localStorage.getItem("userArr")),n=0;n<e.length;n++)if(e[n].phone==this.userPhone)return e[n].nickName=this.nickName,void localStorage.setItem("userArr",JSON.stringify(e))},goAllAddress:function(){this.$router.push({name:"AllAddress"});for(var t=JSON.parse(localStorage.getItem("userArr")),e=0;e<t.length;e++)if(t[e].phone==this.userPhone)return t[e].nickName=this.nickName,void localStorage.setItem("userArr",JSON.stringify(t))}}}),o=a,c=(n("1c04"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"f914102c",null);e["default"]=s.exports},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"8a79":function(t,e,n){"use strict";var r=n("23e7"),i=n("06cf").f,a=n("50c4"),o=n("5a34"),c=n("1d80"),s=n("ab13"),u=n("c430"),l="".endsWith,f=Math.min,h=s("endsWith"),g=!u&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!h},{endsWith:function(t){var e=String(c(this));o(t);var n=arguments.length>1?arguments[1]:void 0,r=a(e.length),i=void 0===n?r:f(a(n),r),s=String(t);return l?l.call(e,s,i):e.slice(i-s.length,i)===s}})},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"910f":function(t,e,n){},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,i,c,f=this,h=u&&f.sticky,g=r.call(f),d=f.source,p=0,v=t;return h&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",v=" "+v,p++),n=new RegExp("^(?:"+d+")",g)),l&&(n=new RegExp("^"+d+"$(?!\\s)",g)),s&&(e=f.lastIndex),i=a.call(h?n:f,v),h?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),o=n("a640"),c=[].join,s=i!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},a2be:function(t,e,n){t.exports=n.p+"img/ulogin.c3207eac.png"},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:s,f=a(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,l,f)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,h=7==t,g=5==t||f;return function(d,p,v,m){for(var x,b,S=a(d),I=i(S),y=r(p,v,3),E=o(I.length),A=0,k=m||c,w=e?k(d,E):n||h?k(d,0):void 0;E>A;A++)if((g||A in I)&&(x=I[A],b=y(x,A,S),t))if(e)w[A]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return A;case 2:s.call(w,x)}else switch(t){case 4:return!1;case 7:s.call(w,x)}return f?-1:u||l?l:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),g=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=a(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!p||!v||"replace"===t&&(!u||!l||h)||"split"===t&&!g){var m=/./[d],x=n(d,""[t],(function(t,e,n,r,i){return e.exec===o?p&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=x[0],S=x[1];r(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),s=o("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-63f1faf8.8fadc891.js.map