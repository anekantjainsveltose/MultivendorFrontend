(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[137],{2167:function(e,a,t){"use strict";t.r(a);var n=t(45),s=t(3),r=t(56),l=t(1),o=t.n(l),c=t(823),i=t(821),m=t(822),u=t(199),d=t(826),p=t(834),f=t(841),b=t(835),h=t(832),g=(t(22),t(830)),v=t(62),E=void 0;a.default=function(){var e=Object(l.useState)({hub_name:"",desc:"",email:"",phone:"",address:"",d_zone:"",cat:"",subcat:"",status:""}),a=Object(r.a)(e,2),t=a[0],y=a[1],O=function(e){y(Object(s.a)(Object(s.a)({},t),{},Object(n.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Customer")),o.a.createElement(m.a,null,o.a.createElement(v.b,{render:function(e){var a=e.history;return o.a.createElement(u.a,{className:"btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/customer/customerList")}},"Back")}}))),o.a.createElement(d.a,null,o.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log("submitHandler",t),g.a.post("/admin/addcategory",t).then((function(e){console.log(e),E.props.history.push("/app/freshlist/order/orderList")})).catch((function(e){console.log(e)}))}},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Customer Name"),o.a.createElement(h.a,{type:"text",placeholder:"Customer_Name",name:"customer_name",value:t.customer_name,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Email"),o.a.createElement(h.a,{type:"email",placeholder:"Enter Email",name:"email",value:t.email,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Mobile No."),o.a.createElement(h.a,{type:"Number",placeholder:"Enter No.",name:"phone",value:t.phone,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:O},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(i.a,{className:"m-2"},o.a.createElement(u.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Customer"))))))}},830:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://13.234.217.170:5000/"});a.a=s},832:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",y=m||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},834:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(4),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},835:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(s.a)(e,d),h=[];o.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(u.mapToCssModules)(m()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},841:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,d),b=Object(u.mapToCssModules)(m()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(f.disabled=o),l.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=137.5a4db639.chunk.js.map