(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3ed18e6"],{"2cfd":function(t,e,a){"use strict";a("e314")},"3ca3":function(t,e,a){"use strict";var s=a("6547").charAt,o=a("69f3"),i=a("7dd0"),n="String Iterator",r=o.set,l=o.getterFor(n);i(String,"String",(function(t){r(this,{type:n,string:String(t),index:0})}),(function(){var t,e=l(this),a=e.string,o=e.index;return o>=a.length?{value:void 0,done:!0}:(t=s(a,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,a){"use strict";var s=a("0366"),o=a("7b0b"),i=a("9bdd"),n=a("e95a"),r=a("50c4"),l=a("8418"),c=a("35a1");t.exports=function(t){var e,a,u,p,d,m,v=o(t),f="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,C=void 0!==h,x=c(v),b=0;if(C&&(h=s(h,g>2?arguments[2]:void 0,2)),void 0==x||f==Array&&n(x))for(e=r(v.length),a=new f(e);e>b;b++)m=C?h(v[b],b):v[b],l(a,b,m);else for(p=x.call(v),d=p.next,a=new f;!(u=d.call(p)).done;b++)m=C?i(p,h,[u.value,b],!0):u.value,l(a,b,m);return a.length=b,a}},6547:function(t,e,a){var s=a("a691"),o=a("1d80"),i=function(t){return function(e,a){var i,n,r=String(o(e)),l=s(a),c=r.length;return l<0||l>=c?t?"":void 0:(i=r.charCodeAt(l),i<55296||i>56319||l+1===c||(n=r.charCodeAt(l+1))<56320||n>57343?t?r.charAt(l):i:t?r.slice(l,l+2):n-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"73cf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{staticClass:"account-body accountbg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row vh-100 d-flex justify-content-center"},[a("div",{staticClass:"col-12 align-self-center"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5 mx-auto"},[a("div",{staticClass:"card"},[1===t.result?a("div",{staticClass:"card-body"},[t._m(0),a("form",{staticClass:"form-horizontal auth-form my-4",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tipeakun"}},[t._v("Tipe Akun")]),a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.jenis,expression:"jenis"}],staticClass:"form-control",attrs:{name:"tipeakun",id:"tipeakun",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.jenis=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1"}},[t._v("Octomoda")]),a("option",{attrs:{value:"2"}},[t._v("Asosiasi")]),a("option",{attrs:{value:"3"}},[t._v("DPW")]),a("option",{attrs:{value:"4"}},[t._v("DPC")]),a("option",{attrs:{value:"5"}},[t._v("Perusahaan")]),a("option",{attrs:{value:"6"}},[t._v("Profesional")])])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Nama")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nama,expression:"nama"}],staticClass:"form-control",attrs:{type:"text",name:"nama",id:"nama",placeholder:"Enter nama",required:""},domProps:{value:t.nama},on:{input:function(e){e.target.composing||(t.nama=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"useremail",id:"useremail",placeholder:"Enter Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userpassword"}},[t._v("Password")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"userpassword",placeholder:"Enter password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"noWa"}},[t._v("No. Wa")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.noWa,expression:"noWa"}],staticClass:"form-control",attrs:{type:"number",id:"noWa",placeholder:"Enter No. Wa (628xxxxxx)",required:""},domProps:{value:t.noWa},on:{input:function(e){e.target.composing||(t.noWa=e.target.value)}}})])]),t._m(1),t._m(2)]),a("div",{staticClass:"m-3 text-center text-muted"},[a("p",{},[t._v("Already have an account ? "),a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)])]):t._e(),2===t.result?a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return t.verifikasi(t.e)}}},[a("div",{staticClass:"head text-center"},[a("h4",[t._v("Nomor Whatsapp yang anda masukkan : ")]),a("h4",[t._v(t._s(t.noWa))])]),a("h5",{staticClass:"text-center mt-5 mb-3"},[t._v("Input Kode Verifikasi yang telah dikirim melalui Whatsapp")]),a("div",{staticClass:"inpt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp1,expression:"otp1"}],staticClass:"inputs",attrs:{type:"text",maxlength:"1"},domProps:{value:t.otp1},on:{keyup:t.otps,input:function(e){e.target.composing||(t.otp1=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp2,expression:"otp2"}],staticClass:"inputs",attrs:{type:"text",maxlength:"1"},domProps:{value:t.otp2},on:{keyup:t.otps,input:function(e){e.target.composing||(t.otp2=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp3,expression:"otp3"}],staticClass:"inputs",attrs:{type:"text",maxlength:"1"},domProps:{value:t.otp3},on:{keyup:t.otps,input:function(e){e.target.composing||(t.otp3=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp4,expression:"otp4"}],staticClass:"inputs",attrs:{type:"text",maxlength:"1"},domProps:{value:t.otp4},on:{keyup:t.otps,input:function(e){e.target.composing||(t.otp4=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp5,expression:"otp5"}],staticClass:"inputs",attrs:{type:"text",maxlength:"1"},domProps:{value:t.otp5},on:{keyup:t.otps,input:function(e){e.target.composing||(t.otp5=e.target.value)}}})]),a("div",{staticClass:"submit"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.verifikasi}},[t._v("Verifikasi")])])])]):t._e()])])])])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("div",{staticClass:"text-center logos"},[s("img",{attrs:{src:a("9bbc"),alt:""}})]),s("div",{staticClass:"media-body align-self-center text-truncate ml-2"},[s("h4",{staticClass:"mt-0 mb-1 font-weight-semibold text-dark font-18 text-center"},[t._v("Buat akun SBI")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mt-4"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"custom-control custom-switch switch-success"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitchSuccess"}}),a("label",{staticClass:"custom-control-label text-muted",attrs:{for:"customSwitchSuccess"}},[t._v("By registering you agree to the Metrica "),a("a",{staticClass:"text-primary",attrs:{href:"#"}},[t._v("Terms of Use")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mb-0 row"},[a("div",{staticClass:"col-12 mt-2"},[a("button",{staticClass:"btn btn-primary btn-block waves-effect waves-light",attrs:{type:"submit"}},[t._v("Register "),a("i",{staticClass:"fas fa-sign-in-alt ml-1"})])])])}],i=(a("a630"),a("c975"),a("3ca3"),a("bc3a")),n=a.n(i),r=a("3d20"),l=a.n(r),c={name:"Register",data:function(){return{otp1:null,otp2:null,otp3:null,otp4:null,otp5:null,id:"20201201095433a08cw",otp:null,result:1,jenis:null,nama:null,email:null,password:null,noWa:null}},methods:{verifikasi:function(t){for(var e=[this.otp1,this.otp2,this.otp3,this.otp4,this.otp5],a="",s=0;s<e.length;s++)a+=e[s];this.otp=parseInt(a);var o=new FormData;o.append("id",localStorage.id),o.append("token",this.otp),n.a.post("https://devapi.octomoda.tech/verifikasi.php",o).then((function(t){console.log(t),"00"==t.data.response.errcode?l.a.fire({position:"center",icon:"success",title:"Verifikasi OTP berhasil Silahkan login",footer:'<a href="/login"> Login Here</a>',showConfirmButton:!1}):l.a.fire({icon:"error",title:"Oops...",text:"Kode Verifikasi Salah"})})).catch((function(t){console.log(t)})),t.preventDefault()},otps:function(t){var e=Array.from(t.target.form.querySelectorAll('input[type="text"]')),a=e.indexOf(t.target);a<e.length&&e[a+1].focus()},register:function(){var t=this,e=new FormData;e.append("jenis",this.jenis),e.append("email",this.email),e.append("nama",this.nama),e.append("wa",this.noWa),e.append("sandi",this.password),n.a.post("https://devapi.octomoda.tech/register.php",e).then((function(e){console.log(e),"00"==e.data.response.errcode?(localStorage.id=e.data.response.id,l.a.fire({position:"center",icon:"success",title:"Register Berhasil silahkan cek pesan Whatsapp",showConfirmButton:!1,timer:2e3}),setTimeout((function(){t.result=2}),2e3)):l.a.fire({icon:"error",title:"Oops...",text:e.data.response.pesan})})).catch((function(t){console.log(t)}))}}},u=c,p=(a("2cfd"),a("2877")),d=Object(p["a"])(u,s,o,!1,null,null,null);e["default"]=d.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),o=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?o.f(t,n,i(0,a)):t[n]=a}},"9bdd":function(t,e,a){var s=a("825a"),o=a("2a62");t.exports=function(t,e,a,i){try{return i?e(s(a)[0],a[1]):e(a)}catch(n){throw o(t),n}}},a630:function(t,e,a){var s=a("23e7"),o=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:n},{from:o})},a640:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var s=a("83ab"),o=a("d039"),i=a("5135"),n=Object.defineProperty,r={},l=function(t){throw t};t.exports=function(t,e){if(i(r,t))return r[t];e||(e={});var a=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:l,p=i(e,1)?e[1]:void 0;return r[t]=!!a&&!o((function(){if(c&&!s)return!0;var t={length:-1};c?n(t,1,{enumerable:!0,get:l}):t[1]=1,a.call(t,u,p)}))}},c975:function(t,e,a){"use strict";var s=a("23e7"),o=a("4d64").indexOf,i=a("a640"),n=a("ae40"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?r.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},e314:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c3ed18e6.b675c3b0.js.map