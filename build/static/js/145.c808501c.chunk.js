(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [145],
  {
    2180: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(11),
        l = t(12),
        s = t(14),
        c = t(13),
        i = t(1),
        r = t.n(i),
        m = t(823),
        d = t(821),
        o = t(822),
        u = t(199),
        v = t(826),
        f = (t(22), t(867), t(831), t(830)),
        E = t(62),
        h = (function (e) {
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
                  f.a
                    .get("/admin/viewone_hub/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({ data: a.data.data });
                    })
                    .catch(function (e) {
                      console.log(e.response);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e, a, t, n, l, s;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        m.a,
                        {
                          className:
                            "overflow-hidden app-ecommerce-details py-3",
                        },
                        r.a.createElement(
                          d.a,
                          { className: "m-2" },
                          r.a.createElement(
                            o.a,
                            null,
                            r.a.createElement(
                              "h1",
                              { "col-sm-6": !0, className: "float-left" },
                              "View Hub"
                            )
                          ),
                          r.a.createElement(
                            o.a,
                            null,
                            r.a.createElement(E.b, {
                              render: function (e) {
                                var a = e.history;
                                return r.a.createElement(
                                  u.a,
                                  {
                                    className: " btn btn-danger float-right",
                                    onClick: function () {
                                      return a.push(
                                        "/app/freshlist/hubs/hubList"
                                      );
                                    },
                                  },
                                  "Back"
                                );
                              },
                            })
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          { className: "pb-0" },
                          r.a.createElement(
                            d.a,
                            { className: "ml-4" },
                            r.a.createElement(
                              o.a,
                              { sm: "9", md: "12", lg: "12" },
                              r.a.createElement(
                                "div",
                                { className: "users-page-view-table" },
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "HUB Name :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (e = this.state.data) ||
                                        void 0 === e
                                        ? void 0
                                        : e.name
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Description :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (a = this.state.data) ||
                                        void 0 === a
                                        ? void 0
                                        : a.desc
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Email :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (t = this.state.data) ||
                                        void 0 === t
                                        ? void 0
                                        : t.email
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Mobile No. :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (n = this.state.data) ||
                                        void 0 === n
                                        ? void 0
                                        : n.mobile
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Address :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (l = this.state.data) ||
                                        void 0 === l
                                        ? void 0
                                        : l.address
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Delivery Zone :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      null === (s = this.state.data) ||
                                        void 0 === s
                                        ? void 0
                                        : s.delivery_zone
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Status :"
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    r.a.createElement(
                                      "span",
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
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      a.default = h;
    },
    830: function (e, a, t) {
      "use strict";
      var n = t(44),
        l = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000/" });
      a.a = l;
    },
    831: function (e, a, t) {},
    867: function (e, a, t) {},
  },
]);
//# sourceMappingURL=145.c808501c.chunk.js.map