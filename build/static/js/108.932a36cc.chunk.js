(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[108],{1011:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","tag","size"],d={tag:m.tagPropType,size:o.a.string,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,o=Object(s.a)(e,p),i=Object(m.mapToCssModules)(u()(a,"input-group",c?"input-group-"+c:null),t);return l.a.createElement(r,Object(n.a)({},o,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},2265:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBatch",(function(){return j}));var n=t(45),s=t(11),r=t(12),l=t(14),c=t(13),o=t(1),i=t.n(o),u=t(823),m=t(821),p=t(822),d=t(199),f=t(826),h=t(834),b=t(835),g=t(832),y=t(1011),v=t(930),E=(t(22),t(830)),O=t(62),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state),E.a.post("/admin/addbatch",r.state).then((function(e){console.log(e),r.props.history.push("/app/freshlist/batch/batchList")})).catch((function(e){console.log(e)}))},r.state={batch:"",rack_no:"",shelf_life:"",expiry_date:"",stock:"",notify:""},r}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Batch")),i.a.createElement(p.a,null,i.a.createElement(O.b,{render:function(e){var a=e.history;return i.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,{className:"mb-2"},i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Batch"),i.a.createElement(g.a,{type:"number",placeholder:"Batch",name:"batch",value:this.state.batch,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Rack Number"),i.a.createElement(g.a,{type:"number",placeholder:"Rack Number",name:"rack_no",value:this.state.rack_no,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Shelf Life"),i.a.createElement(y.a,null,i.a.createElement(v.a,null,"Days"),i.a.createElement(g.a,{type:"number",placeholder:"Shelf Life",name:"shelf_life",value:this.state.shelf_life,onChange:this.changeHandler}))),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Expiry Date"),i.a.createElement(g.a,{type:"text",placeholder:"Expiry Date",name:"expiry_date",value:this.state.expiry_date,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Stock"),i.a.createElement(g.a,{type:"number",placeholder:"stock",name:"stock",value:this.state.stock,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Notify"),i.a.createElement(g.a,{type:"number",placeholder:"Notify",name:"notify",value:this.state.notify,onChange:this.changeHandler}))),i.a.createElement(m.a,null,i.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(o.Component);a.default=j},830:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=s},832:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),c=t(1),o=t.n(c),i=t(2),u=t.n(i),m=t(5),p=t.n(m),d=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":y&&(O=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":i}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},834:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),c=t(1),o=t.n(c),i=t(2),u=t.n(i),m=t(5),p=t.n(m),d=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,f),u=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},835:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,d=e.size,f=e.for,h=Object(s.a)(e,p),b=[];c.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(m.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),b.push(r)}}));var y=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},h,{className:y}))};y.propTypes=h,y.defaultProps=b,a.a=y},930:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","tag"],d={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,p),o=Object(m.mapToCssModules)(u()(a,"input-group-text"),t);return l.a.createElement(r,Object(n.a)({},c,{className:o}))};f.propTypes=d,f.defaultProps={tag:"span"},a.a=f}}]);
//# sourceMappingURL=108.932a36cc.chunk.js.map