(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[110],{2255:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCategory",(function(){return S}));var n=a(837),l=a(45),r=a(11),s=a(12),c=a(14),o=a(13),i=a(1),u=a.n(i),m=a(823),d=a(821),f=a(822),p=a(199),g=a(826),h=a(834),b=a(841),y=a(835),v=a(832),E=a(813),N=(a(22),a(830)),O=a(62),j=a(843),C=a.n(j),S=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("category_name",s.state.category_name),t.append("type",s.state.type),t.append("feature",s.state.feature),t.append("status",s.state.status),t.append("image",s.state.selectedFile1,s.state.selectedName1),t.append("thumbnail_img",s.state.selectedFile2,s.state.selectedName2),t.append("web_banner",s.state.selectedFile3,s.state.selectedName3),t.append("app_banner",s.state.selectedFile4,s.state.selectedName4);var a,l=Object(n.a)(t.values());try{for(l.s();!(a=l.n()).done;){var r=a.value;console.log(r)}}catch(c){l.e(c)}finally{l.f()}N.a.post("/admin/addcategory",t).then((function(e){console.log(e),"success"===e.data.msg&&(C()("Success!","You Data IS been Submitted","success"),s.props.history.push("/app/freshlist/category/categoryList"))})).catch((function(e){console.log(e)}))},s.state={category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},s}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),u.a.createElement(f.a,null,u.a.createElement(O.b,{render:function(e){var t=e.history;return u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/category/categoryList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(f.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Category Name"),u.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Type"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.type,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"veg"},"Veg"),u.a.createElement("option",{value:"nonveg"},"Non-Veg"),u.a.createElement("option",{value:"egg"},"Egg only"))),u.a.createElement(f.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Category Image "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler1}))),u.a.createElement(f.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Thumbnail"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler2}))),u.a.createElement(f.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Web Banner "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),u.a.createElement(f.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"App Banner"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler4}))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Feature"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"feature",value:this.state.feature,onChange:this.changeHandler},u.a.createElement("option",null,"Select Feature"),u.a.createElement("option",{value:"yes"},"Yes"),u.a.createElement("option",{value:"no"},"No"))),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(d.a,null,u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Category"))))))}}]),a}(i.Component);t.default=S},830:function(e,t,a){"use strict";var n=a(44),l=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=l},832:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(17),s=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),m=a(5),d=a.n(m),f=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,g=e.plaintext,h=e.innerRef,b=Object(l.a)(e,p),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),N="form-control";g?(N+="-plaintext",E=u||"input"):"file"===r?N+="-file":"range"===r?N+="-range":y&&(N=m?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var O=Object(f.mapToCssModules)(d()(t,i&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,N),a);return("input"===E||u&&"function"===typeof u)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":i}))},t}(o.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},834:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(17),s=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),m=a(5),d=a.n(m),f=a(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,s=e.tag,c=e.innerRef,i=Object(l.a)(e,p),u=Object(f.mapToCssModules)(d()(t,!!r&&"form-inline"),a);return o.a.createElement(s,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(1),s=a.n(r),c=a(2),o=a.n(c),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,f=e.size,p=e.for,g=Object(l.a)(e,d),h=[];c.forEach((function(t,n){var l=e[t];if(delete g[t],l||""===l){var r,s=!n;if(Object(m.isObject)(l)){var c,o=s?"-":"-"+t+"-";r=b(s,t,l.size),h.push(Object(m.mapToCssModules)(u()(((c={})[r]=l.size||""===l.size,c["order"+o+l.order]=l.order||0===l.order,c["offset"+o+l.offset]=l.offset||0===l.offset,c))),a)}else r=b(s,t,l),h.push(r)}}));var y=Object(m.mapToCssModules)(u()(t,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return s.a.createElement(o,Object(n.a)({htmlFor:p},g,{className:y}))};y.propTypes=g,y.defaultProps=h,t.a=y},837:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(105);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}},841:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(1),s=a.n(r),c=a(2),o=a.n(c),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.row,c=e.disabled,o=e.check,i=e.inline,f=e.tag,p=Object(l.a)(e,d),g=Object(m.mapToCssModules)(u()(t,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),a);return"fieldset"===f&&(p.disabled=c),s.a.createElement(f,Object(n.a)({},p,{className:g}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=110.4f88c65c.chunk.js.map