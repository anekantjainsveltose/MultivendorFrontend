(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[153],{1038:function(e,a,t){"use strict";var l=t(11),n=t(12),r=t(14),c=t(13),s=t(1),o=t.n(s),m=t(823),d=t(824),b=t(825),i=t(883),u=t(817),y=t(927),g=t(192),E=t.n(g),p=t(195),h=t.n(p),f=t(141),v=t.n(f),N=t(139),k=t.n(N),x=t(106),w=t.n(x),C=t(71),O=t.n(C),j=t(63),S=t.n(j),z=t(82),L=t.n(z);o.a.Component},1039:function(e,a,t){},1110:function(e,a,t){"use strict";var l=t(11),n=t(12),r=t(14),c=t(13),s=t(1),o=t.n(s),m=t(821),d=t(822),b=t(823),i=t(825),u=(t(830),t(44),t(1038),t(1039),t(1040)),y=t(137),g=t(112),E=t(812),p=(t(1181),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={product:"",customer:{},store:{},seller:{},order:{},banner:{},brand:{},total_sub:{},Coupon:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{className:""},o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(u.c,null),"\xa0\xa0 Pending(05)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(u.d,null),"\xa0\xa0Confirmed(10)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(y.a,{style:{color:"cornflowerblue"}}),"\xa0\xa0Packaging(35)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black",fontSize:"15px"}},o.a.createElement(u.f,null),"\xa0\xa0Out for delivery(39)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(g.a,null),"\xa0\xa0Delivered(29)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(u.a,null),"\xa0\xa0Cancelled(00)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black"}},o.a.createElement(u.e,null),"\xa0\xa0 Returned (00)"))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary",body:!0,inverse:!0},o.a.createElement(i.a,{className:"mb-1",tag:"h4",style:{color:"black",fontSize:"15px"}},o.a.createElement(E.a,null),"\xa0\xa0 Failed delivery(2)")))))}}]),t}(o.a.Component));a.a=p},1181:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),r=t(14),c=t(13),s=t(1),o=t.n(s),m=t(821),d=t(822),b=t(823),i=t(825),u=t(1041),y=t(830),g=(t(44),t(1038),t(1039),t(8)),E=t(1110),p=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={product:"",customer:{},store:{},seller:{},order:{},banner:{},brand:{},total_sub:{},Coupon:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/admin/product_list").then((function(a){e.setState({product:a.data.data.length})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{className:""},o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary  py-3 ",body:!0,inverse:!0,style:{borderColor:"white"}},o.a.createElement(i.a,{className:"fntweight",tag:"h3",style:{color:"black",fontSize:"16px"}},o.a.createElement(g.a,{style:{color:"orange"}}),"\xa0\xa0 Total Products"),o.a.createElement(u.a,{className:"wt-text",tag:"span",style:{color:"black",marginLeft:"4px"}},this.state.product))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary  py-3",body:!0,inverse:!0,style:{borderColor:"white"}},o.a.createElement(i.a,{className:"fntweight",tag:"h3",style:{color:"black",fontSize:"16px"}},o.a.createElement(g.a,{style:{color:"orange"}}),"\xa0\xa0 Total Hub"),o.a.createElement(u.a,{className:"wt-text",tag:"span",style:{color:"black",marginLeft:"4px"}},this.state.product))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary  py-3",body:!0,inverse:!0,style:{borderColor:"white"}},o.a.createElement(i.a,{className:"fntweight",tag:"h3",style:{color:"black",fontSize:"16px"}},o.a.createElement(g.a,{style:{color:"orange"}}),"\xa0\xa0 Total Sales"),o.a.createElement(u.a,{className:"wt-text",tag:"span",style:{color:"black",marginLeft:"4px"}},this.state.product))),o.a.createElement(d.a,{lg:"3",md:"12"},o.a.createElement(b.a,{className:"bg-secondary py-3",body:!0,inverse:!0,style:{borderColor:"white"}},o.a.createElement(i.a,{className:"fntweight",tag:"h3",style:{color:"black",fontSize:"14px"}},o.a.createElement(g.a,{style:{color:"orange"}}),"\xa0\xa0 Total Customers"),o.a.createElement(u.a,{className:"wt-text",tag:"span",style:{color:"black",marginLeft:"4px"}},this.state.product)))),o.a.createElement(E.a,null))}}]),t}(o.a.Component);a.default=p},830:function(e,a,t){"use strict";var l=t(44),n=t.n(l).a.create({baseURL:"http://35.154.225.110:5000/"});a.a=n}}]);
//# sourceMappingURL=153.32455e73.chunk.js.map