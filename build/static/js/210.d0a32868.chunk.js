<<<<<<< HEAD:build/static/js/210.7427e8a8.chunk.js
(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [210],
  {
    2293: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(11),
        n = t(12),
        s = t(14),
        c = t(13),
        r = t(1),
        m = t.n(r),
        i = t(821),
        d = t(822),
        o = t(823),
        u = t(199),
        f = t(826),
        E = t(818),
        v = t(830),
        h = (t(831), t(22)),
        N = (function (e) {
          Object(s.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = a.call(this, e)).state = { data: {} }),
              n
            );
          }
          return (
            Object(n.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  v.a
                    .get("/admin/getoneadmin/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({ data: a.data.data });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e, a;
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      i.a,
                      null,
                      m.a.createElement(
                        d.a,
                        { sm: "12" },
                        m.a.createElement(
                          o.a,
                          null,
                          m.a.createElement(
                            i.a,
                            { className: "m-2" },
                            m.a.createElement(
                              d.a,
                              null,
                              m.a.createElement(
                                "h1",
                                { "col-sm-6": !0, className: "float-left" },
                                "Profile Detail"
                              )
                            ),
                            m.a.createElement(
                              d.a,
                              null,
                              m.a.createElement(
                                u.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return h.a.push(
                                      "/app/freshlist/customer/customerList"
                                    );
                                  },
                                },
                                "Back"
                              )
                            )
                          ),
                          m.a.createElement(
                            f.a,
                            null,
                            m.a.createElement(
                              i.a,
                              { className: "mx-0", col: "12" },
                              m.a.createElement(
                                d.a,
                                { className: "pl-0", sm: "12", lg: "6" },
                                m.a.createElement(
                                  E.a,
                                  { className: "d-sm-flex d-block" },
                                  m.a.createElement(
                                    E.a,
                                    { className: "mt-md-1 mt-0", left: !0 },
                                    null === (e = this.state.data) ||
                                      void 0 === e ||
                                      null === (a = e.image) ||
                                      void 0 === a
                                      ? void 0
                                      : a.map(function (e) {
                                          return m.a.createElement("img", {
                                            className: "border-black m-0",
                                            src: e,
                                            alt: "user avatar",
                                            height: "400",
                                          });
                                        })
                                  ),
                                  m.a.createElement(
                                    E.a,
                                    { body: !0 },
                                    m.a.createElement(
                                      i.a,
                                      { className: "ml-4" },
                                      m.a.createElement(
                                        d.a,
                                        { sm: "9", md: "12", lg: "12" },
                                        m.a.createElement(
                                          "div",
                                          {
                                            className: "users-page-view-table",
                                          },
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "Name"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.name
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "Email"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.email
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "Mobile no"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.mobile
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "Country"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.country
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "State"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.state
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "City"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.city
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "password"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.password
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "cnfmPassword"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.cnfmPassword
                                              )
                                            )
                                          )
                                        ),
                                        m.a.createElement(
                                          "div",
                                          {
                                            className: "users-page-view-table",
                                          },
                                          m.a.createElement(
                                            "div",
                                            { className: "d-flex user-info" },
                                            m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-info-title font-weight-bold",
                                              },
                                              "Status"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              null,
                                              this.state.data.status
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(m.a.Component);
      a.default = N;
    },
    830: function (e, a, t) {
      "use strict";
      var l = t(44),
        n = t.n(l).a.create({ baseURL: "http://13.234.217.170:5000/" });
      a.a = n;
    },
    831: function (e, a, t) {},
  },
]);
//# sourceMappingURL=210.7427e8a8.chunk.js.map
=======
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[210],{2293:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),s=t(14),c=t(13),r=t(1),m=t.n(r),i=t(821),d=t(822),o=t(823),u=t(199),f=t(826),E=t(818),v=t(830),h=(t(831),t(22)),N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getoneadmin/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a;return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(o.a,null,m.a.createElement(i.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Profile Detail")),m.a.createElement(d.a,null,m.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return h.a.push("/app/freshlist/customer/customerList")}},"Back"))),m.a.createElement(f.a,null,m.a.createElement(i.a,{className:"mx-0",col:"12"},m.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},m.a.createElement(E.a,{className:"d-sm-flex d-block"},m.a.createElement(E.a,{className:"mt-md-1 mt-0",left:!0},null===(e=this.state.data)||void 0===e||null===(a=e.image)||void 0===a?void 0:a.map((function(e){return m.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})}))),m.a.createElement(E.a,{body:!0},m.a.createElement(i.a,{className:"ml-4"},m.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.name))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.email))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile no"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.mobile))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Country"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.country))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"State"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.state))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"City"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.city))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"password"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.password))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"cnfmPassword"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.cnfmPassword)))),m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),m.a.createElement("div",null,this.state.data.status))))))))))))))}}]),t}(m.a.Component);a.default=N},830:function(e,a,t){"use strict";var l=t(44),n=t.n(l).a.create({baseURL:"http://35.154.225.110:5000/"});a.a=n},831:function(e,a,t){}}]);
//# sourceMappingURL=210.d0a32868.chunk.js.map
>>>>>>> 59766ff5dccf8e3d6f3ec1f26e72d9d12c5b9cee:build/static/js/210.d0a32868.chunk.js
