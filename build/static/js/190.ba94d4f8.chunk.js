(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[190],{2213:function(e,a,t){"use strict";t.r(a),t.d(a,"AddLanguage",(function(){return j}));var n=t(45),s=t(11),r=t(12),l=t(14),i=t(13),o=t(1),c=t.n(o),u=t(823),d=t(821),f=t(822),m=t(199),p=t(826),g=t(834),b=t(835),h=t(832),v=t(813),O=(t(22),t(830)),y=t(62),j=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("lang_name",r.state.name),null!==r.state.selectedFile&&a.append("image",r.state.selectedFile,r.state.selectedName),O.a.post("/admin/add_language",a).then((function(e){console.log(e),r.props.history.push("/app/freshlist/language/languageList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Language")),c.a.createElement(f.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/language/languageList")}},"Back")}}))),c.a.createElement(p.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Language Name"),c.a.createElement(h.a,{type:"text",placeholder:"Brand Name",name:"name",value:this.state.name,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Language Image"),c.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler}))),c.a.createElement(d.a,null,c.a.createElement(m.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(o.Component);a.default=j},830:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=s},832:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),f=t.n(d),m=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,b=e.innerRef,h=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),j="form-control";g?(j+="-plaintext",y=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var N=Object(m.mapToCssModules)(f()(a,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,j),t);return("input"===y||u&&"function"===typeof u)&&(h.type=r),h.children&&!g&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(y,Object(n.a)({},h,{ref:b,className:N,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=g,b.defaultProps={type:"text"},a.a=b},834:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),f=t.n(d),m=t(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,i=e.innerRef,c=Object(s.a)(e,p),u=Object(m.mapToCssModules)(f()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:u}))},a}(i.Component);b.propTypes=g,b.defaultProps={tag:"form"},a.a=b},835:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),i=t(2),o=t.n(i),c=t(5),u=t.n(c),d=t(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,i=e.widths,o=e.tag,c=e.check,m=e.size,p=e.for,g=Object(s.a)(e,f),b=[];i.forEach((function(a,n){var s=e[a];if(delete g[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var i,o=l?"-":"-"+a+"-";r=h(l,a,s.size),b.push(Object(d.mapToCssModules)(u()(((i={})[r]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i))),t)}else r=h(l,a,s),b.push(r)}}));var v=Object(d.mapToCssModules)(u()(a,!!r&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:p},g,{className:v}))};v.propTypes=g,v.defaultProps=b,a.a=v}}]);
//# sourceMappingURL=190.ba94d4f8.chunk.js.map