(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2283:function(t,e,n){"use strict";n.r(e),n.d(e,"AddNotification",(function(){return R}));var a=n(45),r=n(11),o=n(12),s=n(14),c=n(13),i=n(1),l=n.n(i),u=n(823),f=n(821),h=n(822),d=n(199),p=n(826),g=n(834),m=n(835),O=n(22),y=n(830),b=n(877),E=n(878),v=(n(861),n(870)),T=n.n(v),R=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).onEditorStateChange=function(t){o.setState({editorState:t,desc:T()(Object(b.convertToRaw)(t.getCurrentContent()))})},o.onChangeHandler=function(t){o.setState({selectedFile:t.target.files[0]}),o.setState({selectedName:t.target.files[0].name}),console.log(t.target.files[0])},o.changeHandler1=function(t){o.setState({status:t.target.value})},o.changeHandler=function(t){o.setState(Object(a.a)({},t.target.name,t.target.value))},o.submitHandler=function(t){t.preventDefault();var e=new FormData;e.append("name",o.state.name),e.append("sortorder",o.state.sortorder),e.append("desc",o.state.desc),e.append("status",o.state.status),null!==o.state.selectedFile&&e.append("brand_img",o.state.selectedFile,o.state.selectedName),y.a.post("/addbrand",e).then((function(t){console.log(t),o.props.history.push("/app/freshlist/notif/Notification")})).catch((function(t){console.log(t)}))},o.state={desc:"",editorState:b.EditorState.createEmpty()},o}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(f.a,{className:"m-2"},l.a.createElement(h.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Notification")),l.a.createElement(h.a,null,l.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/freshlist/notif/Notification")}},"Back"))),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(f.a,{className:"mb-2"},l.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(m.a,null,"Descripition"),l.a.createElement(E.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange}),l.a.createElement("br",null),l.a.createElement(d.a,{color:"primary"},"Add New T&C")))))))}}]),n}(i.Component);e.default=R},830:function(t,e,n){"use strict";var a=n(44),r=n.n(a).a.create({baseURL:"http://35.154.225.110:5000/"});e.a=r},834:function(t,e,n){"use strict";var a=n(6),r=n(7),o=n(17),s=n(19),c=n(1),i=n.n(c),l=n(2),u=n.n(l),f=n(5),h=n.n(f),d=n(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(t){function e(e){var n;return(n=t.call(this,e)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(s.a)(e,t);var n=e.prototype;return n.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.inline,s=t.tag,c=t.innerRef,l=Object(r.a)(t,p),u=Object(d.mapToCssModules)(h()(e,!!o&&"form-inline"),n);return i.a.createElement(s,Object(a.a)({},l,{ref:c,className:u}))},e}(c.Component);m.propTypes=g,m.defaultProps={tag:"form"},e.a=m},835:function(t,e,n){"use strict";var a=n(6),r=n(7),o=n(1),s=n.n(o),c=n(2),i=n.n(c),l=n(5),u=n.n(l),f=n(4),h=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),g={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:f.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},O=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},y=function(t){var e=t.className,n=t.cssModule,o=t.hidden,c=t.widths,i=t.tag,l=t.check,d=t.size,p=t.for,g=Object(r.a)(t,h),m=[];c.forEach((function(e,a){var r=t[e];if(delete g[e],r||""===r){var o,s=!a;if(Object(f.isObject)(r)){var c,i=s?"-":"-"+e+"-";o=O(s,e,r.size),m.push(Object(f.mapToCssModules)(u()(((c={})[o]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),n)}else o=O(s,e,r),m.push(o)}}));var y=Object(f.mapToCssModules)(u()(e,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,m,!!m.length&&"col-form-label"),n);return s.a.createElement(i,Object(a.a)({htmlFor:p},g,{className:y}))};y.propTypes=g,y.defaultProps=m,e.a=y},870:function(t,e,n){t.exports=function(){"use strict";function t(t,e){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&e(n,t[n])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(t){return t&&e[t]}function a(e){var n="";return t(e,(function(t,e){e&&(n+="".concat(t,":").concat(e,";"))})),n}function r(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.CODE[e]&&(n.CODE=!0),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),n}function o(t,e,n){var a=!0;return n>0&&n<t.length?e.forEach((function(e){a=a&&t[e][n]===t[e][n-1]})):a=!1,a}function s(t,e,n,a){var r=t[e];if("function"===typeof a){var o=a(r,n);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(n,"</a>");if("LINK"===r.type){var s=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(s,'">').concat(n,"</a>")}if("IMAGE"===r.type){var c=r.data.alignment;return c&&c.length?'<div style="text-align:'.concat(c,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):n}function c(t,e,n,a){var s=[],c=Array.from(t.text);if(c.length>0)for(var i,l=function(t){var e=t.text,n=t.inlineStyleRanges,a={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return n&&n.length>0&&n.forEach((function(t){for(var e=t.offset,n=e+t.length,r=e;r<n;r+=1)0===t.style.indexOf("color-")?a.COLOR[r]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?a.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf("fontsize-")?a.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?a.FONTFAMILY[r]=t.style.substring(11):a[t.style]&&(a[t.style][r]=!0)})),a}(t),u=n;u<a;u+=1)u!==n&&o(l,e,u)?(i.text.push(c[u]),i.end=u+1):(i={styles:r(l,u),text:[c[u]],start:u,end:u+1},s.push(i));return s}function i(e,n){var a=c(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],n.start,n.end),r="";return a.forEach((function(e){r+=function(e){var n=e.styles,a=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(n,(function(t,e){a=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,a)})),a}(e)})),r=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var n='style="';return t.COLOR&&(n+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(n+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(n+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(n+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(e,"</span>")}return e}(n.styles,r)}function l(t,e,n,a){var r=[],o=function(t,e){var n=[],a=0,r=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(r=(r=r.concat(function(t,e){var n=[];if(e)for(var a=0,r=0,o=t,s=e.trigger||"#",c=e.separator||" ";o.length>0&&r>=0;)if(o[0]===s?(r=0,a=0,o=o.substr(s.length)):(r=o.indexOf(c+s))>=0&&(o=o.substr(r+(c+s).length),a+=r+c.length),r>=0){var i=o.indexOf(c)>=0?o.indexOf(c):o.length,l=o.substr(0,i);l&&l.length>0&&n.push({offset:a,length:l.length+s.length,type:"HASHTAG"}),a+=s.length}return n}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>a&&n.push({start:a,end:t.offset}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),a=t.offset+t.length})),a<t.text.length&&n.push({start:a,end:t.text.length}),n}(t,n);return o.forEach((function(n,l){var u=function(t,e,n,a){var r=[];c(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(e){r.push(i(t,e))}));var o=r.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(o=s(e,n.entityKey,o,a)):"HASHTAG"===n.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(t,e,n,a);0===l&&(u=function(t){if(t){for(var e=t,n=0;n<e.length&&" "===t[n];n+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),l===o.length-1&&(u=function(t){if(t){for(var e=t,n=e.length-1;n>=0&&" "===e[n];n-=1)e="".concat(e.substring(0,n),"&nbsp;").concat(e.substring(n+1));return e}return t}(u)),r.push(u)})),r.join("")}function u(t,e,r,o,s){var c,i=[],f=[];return t.forEach((function(t){var h=!1;if(c?c.type!==t.type?(i.push("</".concat(n(c.type),">\n")),i.push("<".concat(n(t.type),">\n"))):c.depth===t.depth?f&&f.length>0&&(i.push(u(f,e,r,o,s)),f=[]):(h=!0,f.push(t)):i.push("<".concat(n(t.type),">\n")),!h){i.push("<li");var d=a(t.data);d&&i.push(' style="'.concat(d,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,s)),i.push("</li>\n"),c=t}})),f&&f.length>0&&i.push(u(f,e,r,o,s)),i.push("</".concat(n(c.type),">\n")),i.join("")}return function(t,e,r,o){var c=[];if(t){var i=t.blocks,f=t.entityMap;if(i&&i.length>0){var h=[];if(i.forEach((function(t){if("unordered-list-item"===(p=t.type)||"ordered-list-item"===p)h.push(t);else{if(h.length>0){var i=u(h,f,e,o);c.push(i),h=[]}var d=function(t,e,r,o,c){var i=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))i.push(s(e,t.entityRanges[0].key,void 0,c));else{var u=n(t.type);if(u){i.push("<".concat(u));var f=a(t.data);f&&i.push(' style="'.concat(f,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,c)),i.push("</".concat(u,">"))}}return i.push("\n"),i.join("")}(t,f,e,r,o);c.push(d)}var p})),h.length>0){var d=u(h,f,e,r,o);c.push(d),h=[]}}}return c.join("")}}()}}]);
//# sourceMappingURL=191.2dfbff72.chunk.js.map