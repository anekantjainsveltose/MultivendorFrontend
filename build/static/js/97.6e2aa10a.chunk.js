(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[97],{2206:function(e,a,t){"use strict";t.r(a),t.d(a,"AddVendor",(function(){return j}));var n=t(828),l=t(44),r=t(10),s=t(11),c=t(13),i=t(12),o=t(0),d=t.n(o),m=t(816),u=t(814),p=t(815),f=t(196),h=t(819),g=t(827),b=t(826),v=t(825),y=t(806),E=(t(21),t(823)),N=t(833),_=t.n(N),O=(t(872),t(62)),j=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler5=function(e){s.setState({selectedFile5:e.target.files[0]}),s.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler6=function(e){s.setState({selectedFile6:e.target.files[0]}),s.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",s.state.name),a.append("mobile",s.state.mobile),a.append("email",s.state.email),a.append("door_number",s.state.door_number),a.append("street",s.state.street),a.append("location",s.state.location),a.append("city",s.state.city),a.append("pincode",s.state.pincode),a.append("service_location",s.state.service_location),a.append("service_city",s.state.service_city),a.append("service_pincode",s.state.service_pincode),a.append("adhar_no",s.state.adhar_no),a.append("pancard_no",s.state.pancard_no),a.append("account_no",s.state.account_no),a.append("cus_name",s.state.cus_name),a.append("branch",s.state.branch),a.append("ifsc_code",s.state.ifsc_code),a.append("vendoor_img",s.state.selectedFile1,s.state.selectedName1),a.append("adhar_img_front",s.state.selectedFile2,s.state.selectedName2),a.append("adhar_img_back",s.state.selectedFile3,s.state.selectedName3),a.append("pancard_img_front",s.state.selectedFile4,s.state.selectedName4),a.append("pancard_img_back",s.state.selectedFile5,s.state.selectedName5),a.append("passbook_img",s.state.selectedFile6,s.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(c){l.e(c)}finally{l.f()}E.a.post("/admin/admin_add_vender",a).then((function(e){console.log(e.data),"success"===e.data.msg&&(_()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/freshlist/vendor/vendorList"))})).catch((function(e){console.log(e)}))},s.state={name:"",mobile:"",email:"",door_number:"",street:"",location:"",city:"",pincode:"",service_location:"",service_city:"",service_pincode:"",adhar_no:"",pancard_no:"",account_no:"",cus_name:"",branch:"",ifsc_code:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},s}return Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Create Supplier")),d.a.createElement(p.a,null,d.a.createElement(O.b,{render:function(e){var a=e.history;return d.a.createElement(f.a,{className:"float-right",color:"danger",onClick:function(){return a.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(u.a,null,d.a.createElement("h5",null,"Personal Information")),d.a.createElement(u.a,{className:"mb-2 mt-2"},d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(b.a,null,"Name"),d.a.createElement(v.a,{required:!0,type:"text",placeholder:"Name",name:"name",value:this.state.name,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Mobile No."),d.a.createElement(v.a,{required:!0,type:"number",name:"mobile",placeholder:"Enter Mobile Number",value:this.state.mobile,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Email"),d.a.createElement(v.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Company"),d.a.createElement(v.a,{required:!0,type:"email",name:"email",placeholder:"Enter Company",value:this.state.email,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Street"),d.a.createElement(v.a,{required:!0,type:"text",name:"street",placeholder:"Street",value:this.state.street,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Location"),d.a.createElement(v.a,{required:!0,type:"text",name:"location",placeholder:"Location",value:this.state.location,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"City"),d.a.createElement(v.a,{required:!0,type:"text",name:"city",placeholder:"City",value:this.state.city,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"PinCode"),d.a.createElement(v.a,{required:!0,type:"tel",name:"pincode",placeholder:"PINCODE",value:this.state.pincode,onChange:this.changeHandler})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Tax Id"),d.a.createElement(v.a,{required:!0,type:"tel",name:"pincode",placeholder:"Tax Id",value:this.state.pincode,onChange:this.changeHandler}))),d.a.createElement(u.a,null,d.a.createElement("h5",null," Document Details")),d.a.createElement(u.a,{className:"mb-2 mt-2"},d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Supplier Image"),d.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler1})),d.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Aadhar Number"),d.a.createElement(v.a,{required:!0,type:"number",name:"adhar_no",placeholder:"Aadhar Number",value:this.state.adhar_no,onChange:this.changeHandler}))),d.a.createElement(u.a,{style:{float:"center"}},d.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit"))))))}}]),t}(o.Component);a.default=j},823:function(e,a,t){"use strict";var n=t(43),l=t.n(n).a.create({baseURL:"http://35.154.225.110:5000/"});a.a=l},825:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(16),s=t(18),c=t(0),i=t.n(c),o=t(1),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,m=e.addon,h=e.plaintext,g=e.innerRef,b=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),N="form-control";h?(N+="-plaintext",E=d||"input"):"file"===r?N+="-file":"range"===r?N+="-range":v&&(N=m?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var _=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,N),t);return("input"===E||d&&"function"===typeof d)&&(b.type=r),b.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(E,Object(n.a)({},b,{ref:g,className:_,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g},826:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(0),s=t.n(r),c=t(1),i=t.n(c),o=t(5),d=t.n(o),m=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,o=e.check,p=e.size,f=e.for,h=Object(l.a)(e,u),g=[];c.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var r,s=!n;if(Object(m.isObject)(l)){var c,i=s?"-":"-"+a+"-";r=b(s,a,l.size),g.push(Object(m.mapToCssModules)(d()(((c={})[r]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c))),t)}else r=b(s,a,l),g.push(r)}}));var v=Object(m.mapToCssModules)(d()(a,!!r&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,a.a=v},827:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(16),s=t(18),c=t(0),i=t.n(c),o=t(1),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,c=e.innerRef,o=Object(l.a)(e,f),d=Object(p.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},o,{ref:c,className:d}))},a}(c.Component);g.propTypes=h,g.defaultProps={tag:"form"},a.a=g},828:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(104);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}},872:function(e,a,t){}}]);
//# sourceMappingURL=97.6e2aa10a.chunk.js.map