(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[145],{2176:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(11),c=t(13),r=t(12),m=t(0),s=t.n(m),u=t(814),i=t(815),o=t(816),d=t(196),E=t(819),h=(t(21),t(859),t(824),t(823)),v=t(62),p=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/admin/viewone_brand/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,n;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(i.a,{sm:"12"})),s.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Account")),s.a.createElement(i.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/accounts/AccountsList")}},"Back")}}))),s.a.createElement(E.a,{className:"pb-0"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,{sm:"12",className:"my-1"},s.a.createElement(u.a,{className:"m-3"},s.a.createElement(i.a,{sm:"4"},s.a.createElement("img",{src:null===(e=this.state.data)||void 0===e?void 0:e.image,alt:"aaa",width:"200",height:"200"})),s.a.createElement(i.a,{sm:"8"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Name")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.brand_name)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Description")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.desc)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Status")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(n=this.state.data)||void 0===n?void 0:n.status))))))))))))}}]),t}(s.a.Component);a.default=p},823:function(e,a,t){"use strict";var n=t(44),l=t.n(n).a.create({baseURL:"http://35.154.225.110:5000/"});a.a=l},824:function(e,a,t){},859:function(e,a,t){}}]);
//# sourceMappingURL=145.460bc4bd.chunk.js.map