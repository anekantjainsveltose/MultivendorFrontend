(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{2060:function(e,a,t){},2390:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),i=t(14),l=t(13),o=t(1),c=t.n(o),s=t(847),m=t(821),d=t(822),u=t(56),p=t(823),f=t(824),b=t(825),g=t(826),h=t(827),E=t(828),k=t(818),v=t(131),y=t(587),w=t.n(y),j=t(106),O=t.n(j),C=t(71),D=t.n(C),x=t(63),N=t.n(x),S=t(82),I=t.n(S),z=[{id:"1",img:w.a,name:"Mary S. Navarre",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"2",img:O.a,name:"Samuel M. Ellis",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"3",img:D.a,name:"Sandra C. Toney",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa chupsake."},{id:"4",img:N.a,name:"Cleveland C. Goins",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"5",img:I.a,name:"Linda M. English",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],T=function(e){return z.map((function(e){return{id:e.id,content:e.content,img:e.img,name:e.name}}))},P=function(e,a,t){var n=Array.from(e),r=n.splice(a,1),i=Object(u.a)(r,1)[0];return n.splice(t,0,i),n},A=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={items:T()},e.onDragEnd=function(a){if(a.destination){var t=P(e.state.items,a.source.index,a.destination.index);e.setState({items:t})}},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement(b.a,null,"Basic List Group Sortable")),c.a.createElement(g.a,null,c.a.createElement(h.a,{id:"list-group-dnd"},c.a.createElement(v.a,{onDragEnd:this.onDragEnd},c.a.createElement(v.c,{droppableId:"droppable"},(function(a,t){return c.a.createElement("div",{ref:a.innerRef},e.state.items.map((function(e,a){return c.a.createElement(v.b,{key:e.id,draggableId:e.id,index:a},(function(a,t){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{className:"drag-wrapper"}),c.a.createElement(E.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a,{left:!0,tag:"div"},c.a.createElement(k.a,{object:!0,src:e.img,className:"rounded-circle mr-2",alt:"Generic placeholder image",height:"50",width:"50"})),c.a.createElement(k.a,{body:!0},c.a.createElement("h5",{className:"mt-0"},e.name),e.content))))}))})),a.placeholder)}))))))}}]),t}(c.a.Component),R=[{id:"1",title:"Draggable Card 1",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"2",title:"Draggable Card 2",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"3",title:"Draggable Card 3",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"4",title:"Draggable Card 4",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."}],q=function(e){return R.map((function(e){return{id:e.id,title:e.title,content:e.content}}))},L=function(e,a,t){var n=Array.from(e),r=n.splice(a,1),i=Object(u.a)(r,1)[0];return n.splice(t,0,i),n},G=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={items:q(),direction:"horizontal",deviceWidth:window.width},e.updateDnd=function(){e.setState({deviceWidth:window.innerWidth}),e.state.deviceWidth<=992?e.setState({direction:"vertical"}):e.setState({direction:"horizontal"})},e.onDragEnd=function(a){if(a.destination){var t=L(e.state.items,a.source.index,a.destination.index);e.setState({items:t})}},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updateDnd()}},{key:"componentDidUpdate",value:function(e,a){window.addEventListener("resize",this.updateDnd)}},{key:"render",value:function(){var e=this;return c.a.createElement(v.a,{onDragEnd:this.onDragEnd},c.a.createElement(v.c,{droppableId:"droppable",direction:this.state.direction},(function(a,t){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{className:"d-flex flex-sm-wrap flex-lg-nowrap draggable-cards"}),e.state.items.map((function(e,a){return c.a.createElement(v.b,{key:e.id,draggableId:e.id,index:a},(function(a,t){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps),c.a.createElement(p.a,{className:"draggable-cards ".concat(4!==e.id?"mr-1":null)},c.a.createElement(f.a,null,c.a.createElement(b.a,null,e.title)),c.a.createElement(g.a,null,e.content)))}))})),a.placeholder)})))}}]),t}(c.a.Component),M=t(192),J=t.n(M),W=t(51),B=t.n(W),H=t(195),F=t.n(H),K=t(139),U=t.n(K),_=t(108),Q=t.n(_),V=[{id:"1",img:w.a,name:"Mary S. Navarre",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"2",img:O.a,name:"Samuel M. Ellis",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"3",img:D.a,name:"Sandra C. Toney",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa."},{id:"4",img:N.a,name:"Cleveland C. Goins",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"5",img:I.a,name:"Linda M. English",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],X=[{id:"6",img:J.a,name:"Alexandria I. Smelser",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"7",img:B.a,name:"Oscar N. Pool",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake."},{id:"8",img:F.a,name:"Kathy A. Alvarado",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"9",img:U.a,name:"James E. White",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"10",img:Q.a,name:"Roberta R. Babin",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],Y=function(e){return e.map((function(e){return{id:e.id,content:e.content,img:e.img,name:e.name}}))},Z=function(e,a,t){var n=Array.from(e),r=n.splice(a,1),i=Object(u.a)(r,1)[0];return n.splice(t,0,i),n},$=function(e,a,t,n){var r=Array.from(e),i=Array.from(a),l=r.splice(t.index,1),o=Object(u.a)(l,1)[0];i.splice(n.index,0,o);var c={};return c[t.droppableId]=r,c[n.droppableId]=i,c},ee=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={items:Y(V),selected:Y(X)},e.id2List={droppable:"items",droppable2:"selected"},e.getList=function(a){return e.state[e.id2List[a]]},e.onDragEnd=function(a){var t=a.source,n=a.destination;if(n)if(t.droppableId===n.droppableId){var r=Z(e.getList(t.droppableId),t.index,n.index),i={items:r};"droppable2"===t.droppableId&&(i={selected:r}),e.setState(i)}else{var l=$(e.getList(t.droppableId),e.getList(n.droppableId),t,n);e.setState({items:l.droppable,selected:l.droppable2})}},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement(b.a,null,"Multiple Drop Target")),c.a.createElement(g.a,null,c.a.createElement("div",null,c.a.createElement(v.a,{onDragEnd:this.onDragEnd},c.a.createElement(m.a,null,c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h4",{className:"my-1"},"People Group 1"),c.a.createElement(h.a,{flush:!0},c.a.createElement(v.c,{droppableId:"droppable"},(function(a,t){return c.a.createElement("div",{ref:a.innerRef},e.state.items.map((function(e,a){return c.a.createElement(v.b,{key:e.id,draggableId:e.id,index:a},(function(a,t){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps),c.a.createElement(E.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a,{left:!0,tag:"div"},c.a.createElement(k.a,{object:!0,src:e.img,className:"rounded-circle mr-2",alt:"Generic placeholder image",height:"50",width:"50"})),c.a.createElement(k.a,{body:!0},c.a.createElement("h5",{className:"mt-0"},e.name),e.content))))}))})),a.placeholder)})))),c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h4",{className:"my-1"},"People Group 2"),c.a.createElement(h.a,{flush:!0},c.a.createElement(v.c,{droppableId:"droppable2"},(function(a,t){return c.a.createElement("div",{ref:a.innerRef},e.state.selected.map((function(e,a){return c.a.createElement(v.b,{key:e.id,draggableId:e.id,index:a},(function(a,t){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps),c.a.createElement(E.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a,{left:!0,tag:"div"},c.a.createElement(k.a,{object:!0,src:e.img,className:"rounded-circle mr-2",alt:"Generic placeholder image",height:"50",width:"50"})),c.a.createElement(k.a,{body:!0},c.a.createElement("h5",{className:"mt-0"},e.name),e.content))))}))})),a.placeholder)})))))))))}}]),t}(c.a.Component),ae=(t(2060),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"React Beautiful Drag And Drop",subTitle:"Beautiful and accessible drag and drop for lists with React",link:"https://github.com/atlassian/react-beautiful-dnd"}),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:"12"},c.a.createElement(G,null)),c.a.createElement(d.a,{sm:"12"},c.a.createElement(A,null)),c.a.createElement(d.a,{sm:"12"},c.a.createElement(ee,null))))}}]),t}(c.a.Component));a.default=ae},847:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(14),l=t(13),o=t(1),c=t.n(o),s=t(821),m=t(822),d=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(m.a,{sm:"12",className:"ml-50"},c.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):c.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),t}(c.a.Component);a.a=d}}]);
//# sourceMappingURL=212.86aa5e8d.chunk.js.map