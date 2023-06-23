(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{2352:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(14),c=t(13),s=t(1),o=t.n(s),i=t(821),m=t(822),u=t(103),p=t(823),v=t(824),b=t(825),E=t(849),h=t(815),g=t(816),d=t(826),f=t(844),C=t(845),x=t(5),T=t.n(x),N=t(957),I=t(322),j=t(292),y=t(472),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipDefault extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Base Chip" />\n      <Chip className="mr-1" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" avatarImg={chipImg} text="Avatar Image" />\n      <Chip text="Chip Closable" closable />\n    )}\n}\nexport default chipDefault\n')),A=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\nclass chipColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" color="success" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" color="info" avatarIcon={<User />} text="Avatar Icon" />\n      <Chip className="mr-1" color="warning" avatarImg={chipImg} text="Avatar Image" />\n      <Chip color="danger" text="Chip Closable" closable />\n    )}\n}\nexport default chipColors\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User } from "react-feather"\n\nclass chipAvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarColor="primary" avatarText="RX" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="success" avatarText="VS" text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<User />} text="Avatar Text" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<User />} text="Avatar Text" />\n      <Chip avatarColor="warning" avatarIcon={<User />} text="Avatar Text" />\n    )}\n}\nexport default chipAvatarColors\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { User, Mail, Share, Slash, Battery, Edit } from "react-feather"\n\nclass chipIcons extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" avatarIcon={<User />} text="User Icon" />\n      <Chip className="mr-1" avatarColor="primary" avatarIcon={<Share />} text="Share Icon" />\n      <Chip className="mr-1" avatarColor="success" avatarIcon={<Mail />} text="Mail Icon" />\n      <Chip className="mr-1" avatarColor="danger" avatarIcon={<Slash />} text="Block Icon" />\n      <Chip className="mr-1" avatarColor="warning" avatarIcon={<Battery />} text="Battery Icon" />\n      <Chip className="mr-1" avatarColor="info" avatarIcon={<Edit />} text="Edit Icon" />\n    )}\n}\nexport default chipIcons\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\n\nclass chipClosable extends React.Component {\n\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closable />\n      <Chip className="mr-1" text="Github" closable />\n      <Chip className="mr-1" text="Behance" closable />\n      <Chip className="mr-1" text="ReactJS" closable />\n      <Chip text="Vuexy" closable />\n    )}\n}\nexport default chipClosable\n')),R=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Chip from "./ChipComponent"\nimport { Trash, Trash2, MinusCircle, Delete } from "react-feather"\n\nclass ChipClosableIcons extends React.Component {\n  render() {\n    return(\n      <Chip className="mr-1" text="Dribble" closableIcon={<Trash />} closable />\n      <Chip className="mr-1" text="Github" closableIcon={<Trash2 />} closable />\n      <Chip className="mr-1" text="Behance" closableIcon={<Delete />} closable />\n      <Chip className="mr-1" text="ReactJS" closableIcon={<MinusCircle />} closable />\n    )}\n}\nexport default ChipClosableIcons\n')),B=t(71),z=t.n(B),M=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Chips helps you represent simple data with Various options."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Basic Chip"}),o.a.createElement(N.a,{className:"mr-1",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarImg:z.a,text:"Avatar Image"}),o.a.createElement(N.a,{text:"Chip Closable",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),U=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning ]")," ","to create a colored chip."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",color:"primary",text:"Primary Chip"}),o.a.createElement(N.a,{className:"mr-1",color:"success",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",color:"info",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Icon"}),o.a.createElement(N.a,{className:"mr-1",color:"warning",avatarImg:z.a,text:"Avatar Image"}),o.a.createElement(N.a,{color:"danger",text:"Chip Closable",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(o.a.Component),D=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Avatar Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"avatarColor=[primary | success | danger | info | warning | dark]")," ","to create a colored avatar chip."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",avatarColor:"primary",avatarText:"RX",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"success",avatarText:"VS",text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"}),o.a.createElement(N.a,{avatarColor:"warning",avatarIcon:o.a.createElement(y.a,null),text:"Avatar Text"})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),P=t(424),F=t(366),J=t(434),V=t(258),X=t(319),G=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"avatarIcon")," add icon to avatar."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",avatarIcon:o.a.createElement(y.a,null),text:"User Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"primary",avatarIcon:o.a.createElement(P.a,null),text:"Share Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"success",avatarIcon:o.a.createElement(F.a,null),text:"Mail Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"danger",avatarIcon:o.a.createElement(J.a,null),text:"Block Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"warning",avatarIcon:o.a.createElement(V.a,null),text:"Battery Icon"}),o.a.createElement(N.a,{className:"mr-1",avatarColor:"info",avatarIcon:o.a.createElement(X.a,null),text:"Edit Icon"})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),Z=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Chips Closable"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"closable")," to make your chips closable."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Dribble",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Github",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Behance",closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"ReactJS",closable:!0}),o.a.createElement(N.a,{text:"Vuexy",closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),$=t(455),Y=t(454),q=t(311),H=t(378),K=t(485),L=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,"Customized Closeable Icon"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(I.a,{size:15}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(j.a,{size:15})))))),o.a.createElement(d.a,null,o.a.createElement("p",null,"You can use prop ",o.a.createElement("code",null,"closableIcon")," with prop"," ",o.a.createElement("code",null,"closable")," to create a chip with customized close icon."),o.a.createElement(f.a,{activeTab:this.state.activeTab},o.a.createElement(C.a,{tabId:"1"},o.a.createElement(N.a,{className:"mr-1",text:"Dribble",closableIcon:o.a.createElement($.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Github",closableIcon:o.a.createElement(Y.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"Behance",closableIcon:o.a.createElement(q.a,null),closable:!0}),o.a.createElement(N.a,{className:"mr-1",text:"ReactJS",closableIcon:o.a.createElement(H.a,null),closable:!0}),o.a.createElement(N.a,{text:"Vuexy",closableIcon:o.a.createElement(K.a,null),closable:!0})),o.a.createElement(C.a,{className:"component-code",tabId:"2"},R," ")))))}}]),t}(o.a.Component),Q=t(840),W=t.n(Q),_=(t(839),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){W.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Chips",breadCrumbParent:"Extra Components",breadCrumbActive:"Chips"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement(M,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(U,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(D,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(G,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(Z,null)),o.a.createElement(m.a,{sm:"12"},o.a.createElement(L,null))))}}]),t}(o.a.Component));a.default=_},833:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(1),r=t.n(n).a.createContext({})},839:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,a){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,a)}t=n(t).source,e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=a.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var r=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""},l=function a(t){for(var n=[],l=0;l<t.length;l++){var c=t[l],s=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===r(c.content[0].content[1])&&n.pop():"/>"===c.content[c.content.length-1].content||n.push({tagName:r(c.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===c.type&&"{"===c.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===c.type&&"}"===c.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof c)&&n.length>0&&0===n[n.length-1].openedBraces){var o=r(c);l<t.length-1&&("string"==typeof t[l+1]||"plain-text"===t[l+1].type)&&(o+=r(t[l+1]),t.splice(l+1,1)),l>0&&("string"==typeof t[l-1]||"plain-text"===t[l-1].type)&&(o=r(t[l-1])+o,t.splice(l-1,1),l--),t[l]=new e.Token("plain-text",o,null,o)}c.content&&"string"!=typeof c.content&&a(c.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||l(e.tokens)}))}(Prism)},844:function(e,a,t){"use strict";var n=t(6),r=t(19),l=t(1),c=t.n(l),s=t(2),o=t.n(s),i=t(5),m=t.n(i),u=t(833),p=t(4),v={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,l=Object(p.omit)(this.props,Object.keys(v)),s=Object(p.mapToCssModules)(m()("tab-content",a),t);return c.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(n.a)({},l,{className:s})))},a}(l.Component);a.a=b,b.propTypes=v,b.defaultProps={tag:"div"}},845:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(2),o=t.n(s),i=t(5),m=t.n(i),u=t(833),p=t(4),v=["className","cssModule","tabId","tag"],b={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function E(e){var a=e.className,t=e.cssModule,l=e.tabId,s=e.tag,o=Object(r.a)(e,v),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:l===e}),t)};return c.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(s,Object(n.a)({},o,{className:i(a)}))}))}E.propTypes=b,E.defaultProps={tag:"div"}},849:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(2),o=t.n(s),i=t(5),m=t.n(i),u=t(4),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],v={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tabs,s=e.pills,o=e.vertical,i=e.horizontal,v=e.justified,b=e.fill,E=e.navbar,h=e.card,g=e.tag,d=Object(r.a)(e,p),f=Object(u.mapToCssModules)(m()(a,E?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":l,"card-header-tabs":h&&l,"nav-pills":s,"card-header-pills":h&&s,"nav-justified":v,"nav-fill":b}),t);return c.a.createElement(g,Object(n.a)({},d,{className:f}))};b.propTypes=v,b.defaultProps={tag:"ul",vertical:!1},a.a=b},957:function(e,a,t){"use strict";var n=t(11),r=t(12),l=t(14),c=t(13),s=t(1),o=t.n(s),i=t(205),m=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},o.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?o.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},o.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,o.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?o.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:o.a.createElement(i.a,null)):null))}}]),t}(o.a.Component);a.a=m}}]);
//# sourceMappingURL=120.a94395bf.chunk.js.map