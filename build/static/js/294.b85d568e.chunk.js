(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[294],{2209:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(11),s=a(13),c=a(12),o=a(0),i=a.n(o),m=a(814),d=a(815),r=a(816),b=a(196),h=a(819),u=a(2149),v=(a(823),a(21),a(62)),E=a(44),g=a.n(E),f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("vendor id ",t),g.a.get("http://35.154.225.110:5000/app/vender_getviewone/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e.response.data)}))}},{key:"render",value:function(){var e,t,a,l,n,s,c,o,E,g,f,N,p,y,x,k,w,_,W,j,F,C,S;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement(r.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"View Supplier")),i.a.createElement(d.a,null,i.a.createElement(v.b,{render:function(e){var t=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(u.f,{className:"py-0 h-100"},i.a.createElement(u.g,{className:"justify-content-center align-items-center h-100"},i.a.createElement(u.e,{lg:"12",xl:"12"},i.a.createElement(u.a,null,i.a.createElement("div",{className:"rounded-top text-white d-flex flex-row",style:{backgroundColor:"#000",height:"200px"}},i.a.createElement("div",{className:"ms-4 mt-5 d-flex flex-column",style:{width:"150px"}},i.a.createElement(u.c,{src:null===(e=this.state.data)||void 0===e?void 0:e.vendoor_img,alt:"Generic placeholder image",className:"mt-4 mb-2 img-thumbnail",style:{width:"200px",zIndex:"1"}})),i.a.createElement("div",{className:"ml-2 ms-3",style:{marginTop:"130px"}},i.a.createElement(u.h,{tag:"h5",style:{color:"#FFF"}},null===(t=this.state.data)||void 0===t?void 0:t.name),i.a.createElement(u.d,null,null===(a=this.state.data)||void 0===a?void 0:a.city))),i.a.createElement(u.b,{className:"text-black p-4"},i.a.createElement("div",{className:"mb-5 mt-2"},i.a.createElement("div",{className:"p-4",style:{backgroundColor:"#f8f9fa"}},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},i.a.createElement(u.d,{className:"lead fw-normal mb-0"},"Personal Information")),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Email : ",null===(l=this.state.data)||void 0===l?void 0:l.email),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Mobile No. : ",null===(n=this.state.data)||void 0===n?void 0:n.mobile),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Door No. : ",null===(s=this.state.data)||void 0===s?void 0:s.door_number),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Street : ",null===(c=this.state.data)||void 0===c?void 0:c.street),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Location : ",null===(o=this.state.data)||void 0===o?void 0:o.location),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Pin Code : ",null===(E=this.state.data)||void 0===E?void 0:E.pincode),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},i.a.createElement(u.d,{className:"lead fw-normal mb-0"},"Service Information")),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service Location :"," ",null===(g=this.state.data)||void 0===g?void 0:g.service_location),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service City : ",null===(f=this.state.data)||void 0===f?void 0:f.service_city),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service PinCode :"," ",null===(N=this.state.data)||void 0===N?void 0:N.service_pincode),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},i.a.createElement(u.d,{className:"lead fw-normal mb-0"},"Account Information")),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Aadhar Number : ",null===(p=this.state.data)||void 0===p?void 0:p.adhar_no),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"PanCard Number : ",null===(y=this.state.data)||void 0===y?void 0:y.pancard_no),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Account Name : ",null===(x=this.state.data)||void 0===x?void 0:x.cus_name),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Account Number : ",null===(k=this.state.data)||void 0===k?void 0:k.account_no),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Branch Name : ",null===(w=this.state.data)||void 0===w?void 0:w.branch),i.a.createElement(u.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"IFSC Number : ",null===(_=this.state.data)||void 0===_?void 0:_.ifsc_code))),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},i.a.createElement(u.d,{className:"lead fw-normal mb-0"},"Document Photos")),i.a.createElement(u.g,null,i.a.createElement(u.e,{className:"mb-2"},i.a.createElement(u.c,{src:null===(W=this.state.data)||void 0===W?void 0:W.adhar_img_front,alt:"No Image",className:"w-100 h-80 rounded-3",style:{height:"50vh",objectFit:"cover",borderRadius:"10px"}})),i.a.createElement(u.e,{className:"mb-2"},i.a.createElement(u.c,{src:null===(j=this.state.data)||void 0===j?void 0:j.adhar_img_back,alt:"image 1",className:"w-100 h-80 rounded-3",style:{height:"50vh",objectFit:"cover",borderRadius:"10px"}}))),i.a.createElement(u.g,{className:"g-2"},i.a.createElement(u.e,{className:"mb-2"},i.a.createElement(u.c,{src:null===(F=this.state.data)||void 0===F?void 0:F.pancard_img_front,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh",objectFit:"cover",borderRadius:"10px"}})),i.a.createElement(u.e,{className:"mb-2"},i.a.createElement(u.c,{src:null===(C=this.state.data)||void 0===C?void 0:C.pancard_img_back,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh",objectFit:"cover",borderRadius:"10px"}}))),i.a.createElement(u.g,{className:"g-2"},i.a.createElement(u.e,{className:"mb-2"},i.a.createElement(u.c,{src:null===(S=this.state.data)||void 0===S?void 0:S.passbook_img,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh",objectFit:"cover",borderRadius:"10px"}})))))))))))))}}]),a}(i.a.Component);t.default=f},823:function(e,t,a){"use strict";var l=a(44),n=a.n(l).a.create({baseURL:"http://35.154.225.110:5000/"});t.a=n}}]);
//# sourceMappingURL=294.b85d568e.chunk.js.map