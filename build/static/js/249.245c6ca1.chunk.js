(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [249],
  {
    2186: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(11),
        l = t(12),
        s = t(14),
        c = t(13),
        r = t(1),
        m = t.n(r),
        i = t(821),
        o = t(822),
        u = t(823),
        d = t(199),
        E = t(826),
        f = t(818),
        v = t(830),
        h = t(22),
        b = (function (e) {
          Object(s.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var l;
            return (
              Object(n.a)(this, t),
              ((l = a.call(this, e)).state = { data: {} }),
              l
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  v.a
                    .get("/viewonebanner/".concat(a))
                    .then(function (a) {
                      console.log(a.data),
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
                        o.a,
                        { sm: "12" },
                        m.a.createElement(
                          u.a,
                          null,
                          m.a.createElement(
                            i.a,
                            { className: "m-2" },
                            m.a.createElement(
                              o.a,
                              null,
                              m.a.createElement(
                                "h1",
                                { "col-sm-6": !0, className: "float-left" },
                                "Banner Detail"
                              )
                            ),
                            m.a.createElement(
                              o.a,
                              null,
                              m.a.createElement(
                                d.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return h.a.push(
                                      "/app/freshlist/banner/BannerList"
                                    );
                                  },
                                },
                                "Back"
                              )
                            )
                          ),
                          m.a.createElement(
                            E.a,
                            null,
                            m.a.createElement(
                              i.a,
                              { className: "mx-0", col: "12" },
                              m.a.createElement(
                                o.a,
                                { className: "pl-0", sm: "12", lg: "6" },
                                m.a.createElement(
                                  f.a,
                                  { className: "d-sm-flex d-block" },
                                  m.a.createElement(
                                    f.a,
                                    { className: "mt-md-1 mt-0", left: !0 },
                                    null === (e = this.state.data) ||
                                      void 0 === e ||
                                      null === (a = e.banner_img) ||
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
                                    f.a,
                                    { body: !0 },
                                    m.a.createElement(
                                      i.a,
                                      { className: "ml-4" },
                                      m.a.createElement(
                                        o.a,
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
                                              "Banner Title"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.banner_title
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
                                              "Banner Type"
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "text-truncate" },
                                              m.a.createElement(
                                                "span",
                                                null,
                                                this.state.data.bannertype
                                              )
                                            )
                                          ),
                                          m.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "users-page-view-table",
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
                    )
                  );
                },
              },
            ]),
            t
          );
        })(m.a.Component);
      a.default = b;
    },
    830: function (e, a, t) {
      "use strict";
      var n = t(44),
        l = t.n(n).a.create({ baseURL: "http://13.234.217.170:5000/" });
      a.a = l;
    },
  },
]);
//# sourceMappingURL=249.245c6ca1.chunk.js.map