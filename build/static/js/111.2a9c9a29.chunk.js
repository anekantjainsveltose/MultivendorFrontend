(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[111],{2256:function(e,t,a){"use strict";a.r(t),a.d(t,"EditCategory",(function(){return S}));var n=a(837),l=a(45),s=a(11),r=a(12),c=a(14),o=a(13),i=a(1),u=a.n(i),d=a(823),m=a(821),p=a(822),f=a(199),g=a(826),h=a(834),b=a(841),y=a(835),v=a(832),E=a(813),N=(a(22),a(830)),O=a(62),j=a(843),C=a.n(j),S=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler1=function(e){r.setState({selectedFile1:e.target.files[0]}),r.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler2=function(e){r.setState({selectedFile2:e.target.files[0]}),r.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler3=function(e){r.setState({selectedFile3:e.target.files[0]}),r.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler4=function(e){r.setState({selectedFile4:e.target.files[0]}),r.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("category_name",r.state.category_name),t.append("type",r.state.type),t.append("feature",r.state.feature),t.append("status",r.state.status),null!==r.state.selectedFile1&&t.append("image",r.state.selectedFile1,r.state.selectedName1),null!==r.state.selectedFile2&&t.append("thumbnail_img",r.state.selectedFile2,r.state.selectedName2),null!==r.state.selectedFile3&&t.append("web_banner",r.state.selectedFile3,r.state.selectedName3),null!==r.state.selectedFile4&&t.append("app_banner",r.state.selectedFile4,r.state.selectedName4);var a,l=Object(n.a)(t.values());try{for(l.s();!(a=l.n()).done;){var s=a.value;console.log(s)}}catch(o){l.e(o)}finally{l.f()}var c=r.props.match.params.id;console.log(c),N.a.post("/admin/edit_category/".concat(c),t).then((function(e){console.log(e),"success"===e.data.msg&&(C()("Success!","You Data IS been Submitted","success"),r.props.history.push("/app/freshlist/category/categoryList"))})).catch((function(e){console.log(e)}))},r.state={category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N.a.get("/admin/viewonecategory/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data,category_name:t.data.data.category_name,type:t.data.data.type,feature:t.data.data.feature,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit")),u.a.createElement(p.a,null,u.a.createElement(O.b,{render:function(e){var t=e.history;return u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/category/categoryList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Category Name"),u.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Type"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.type,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"veg"},"Veg"),u.a.createElement("option",{value:"nonveg"},"Non-Veg"),u.a.createElement("option",{value:"egg"},"Egg only"))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Category Image "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler1}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Thumbnail"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler2}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Web Banner "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"App Banner"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler4}))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Feature"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"feature",value:this.state.feature,onChange:this.changeHandler},u.a.createElement("option",null,"Select Feature"),u.a.createElement("option",{value:"yes"},"Yes"),u.a.createElement("option",{value:"no"},"No"))),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(m.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update"))))))}}]),a}(i.Component);t.default=S},830:function(e,t,a){"use strict";var n=a(44),l=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=l},832:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(17),r=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(l.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),N="form-control";g?(N+="-plaintext",E=u||"input"):"file"===s?N+="-file":"range"===s?N+="-range":y&&(N=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===E||u&&"function"===typeof u)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":i}))},t}(o.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},834:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(17),r=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,c=e.innerRef,i=Object(l.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return o.a.createElement(r,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(1),r=a.n(s),c=a(2),o=a.n(c),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,g=Object(l.a)(e,m),h=[];c.forEach((function(t,n){var l=e[t];if(delete g[t],l||""===l){var s,r=!n;if(Object(d.isObject)(l)){var c,o=r?"-":"-"+t+"-";s=b(r,t,l.size),h.push(Object(d.mapToCssModules)(u()(((c={})[s]=l.size||""===l.size,c["order"+o+l.order]=l.order||0===l.order,c["offset"+o+l.offset]=l.offset||0===l.offset,c))),a)}else s=b(r,t,l),h.push(s)}}));var y=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return r.a.createElement(o,Object(n.a)({htmlFor:f},g,{className:y}))};y.propTypes=g,y.defaultProps=h,t.a=y},837:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(105);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s,r=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){c=!0,s=e},f:function(){try{r||null==l.return||l.return()}finally{if(c)throw s}}}}},841:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(1),r=a.n(s),c=a(2),o=a.n(c),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,p=e.tag,f=Object(l.a)(e,m),g=Object(d.mapToCssModules)(u()(t,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),a);return"fieldset"===p&&(f.disabled=c),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=111.2a9c9a29.chunk.js.map