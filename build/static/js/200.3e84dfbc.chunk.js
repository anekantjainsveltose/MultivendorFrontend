(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [200],
  {
    2214: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(837),
        l = a(45),
        r = a(11),
        c = a(12),
        s = a(14),
        i = a(13),
        m = a(1),
        o = a.n(m),
        u = a(821),
        d = a(822),
        f = a(823),
        E = a(199),
        b = a(826),
        p = a(834),
        h = a(44),
        y = a.n(h),
        g = (a(853), a(22), a(62)),
        v = a(9),
        N = a(1040),
        A = (function (e) {
          Object(s.a)(a, e);
          var t = Object(i.a)(a);
          function a(e) {
            var c;
            return (
              Object(r.a)(this, a),
              ((c = t.call(this, e)).onChangeHandler = function (e) {
                c.setState({ selectedFile: e.target.files[0] }),
                  c.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (c.changeHandler1 = function (e) {
                c.setState({ status: e.target.value });
              }),
              (c.changeHandler = function (e) {
                c.setState(Object(l.a)({}, e.target.name, e.target.value));
              }),
              (c.submitHandler = function (e) {
                e.preventDefault(), console.log(c.state);
                var t = new FormData();
                t.append("name", c.state.name),
                  t.append("password", c.state.password),
                  t.append("pincode", c.state.pincode),
                  t.append("phone_no", c.state.phone_no),
                  t.append("mobile_no", c.state.mobile_no),
                  t.append("email", c.state.email),
                  t.append("website", c.state.website),
                  t.append("country", c.state.country),
                  t.append("state", c.state.state),
                  t.append("city", c.state.city),
                  t.append("status", c.state.status),
                  t.append(
                    "userImage",
                    c.state.selectedFile,
                    c.state.selectedName
                  );
                var a,
                  l = Object(n.a)(t.values());
                try {
                  for (l.s(); !(a = l.n()).done; ) {
                    var r = a.value;
                    console.log(r);
                  }
                } catch (o) {
                  l.e(o);
                } finally {
                  l.f();
                }
                var s,
                  i = Object(n.a)(t.keys());
                try {
                  for (i.s(); !(s = i.n()).done; ) {
                    var m = s.value;
                    console.log(m);
                  }
                } catch (o) {
                  i.e(o);
                } finally {
                  i.f();
                }
                y.a
                  .post(
                    "http://13.234.217.170:5000/api/admin/editadmin/61efdb313c8b8db3a3488d25",
                    t
                  )
                  .then(function (e) {
                    console.log(e.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (c.state = {
                name: "",
                mobile: "",
                phoneno: "",
                country: "",
                state: "",
                city: "",
                image: "",
                password: "",
                cnfmPassword: "",
                status: "",
                selectedName: "",
                selectedFile: null,
              }),
              c
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      u.a,
                      null,
                      o.a.createElement(
                        d.a,
                        { lg: "12" },
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            u.a,
                            { className: "m-2" },
                            o.a.createElement(
                              d.a,
                              null,
                              o.a.createElement(
                                "h1",
                                { "col-sm-6": !0, className: "float-left" },
                                "File Managner"
                              )
                            ),
                            o.a.createElement(
                              d.a,
                              null,
                              o.a.createElement(g.b, {
                                render: function (e) {
                                  var t = e.history;
                                  return o.a.createElement(
                                    E.a,
                                    {
                                      className: "btn float-right",
                                      color: "primary",
                                      onClick: function () {
                                        return t.push(
                                          "/app/freshlist/gallery/addGallery"
                                        );
                                      },
                                    },
                                    "Add New"
                                  );
                                },
                              })
                            )
                          ),
                          o.a.createElement(
                            b.a,
                            null,
                            o.a.createElement(
                              p.a,
                              {
                                className: "m-1",
                                onSubmit: this.submitHandler,
                              },
                              o.a.createElement(
                                u.a,
                                null,
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Admin"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Banner"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Brand"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Category"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Company"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Deal"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Delivery Man"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Notification"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Product"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Profile"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      " ",
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Refund"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      " ",
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Review"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      " ",
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Seller"
                                  )
                                ),
                                o.a.createElement(
                                  d.a,
                                  { md: 2 },
                                  o.a.createElement(
                                    f.a,
                                    { className: "filefolder" },
                                    o.a.createElement(
                                      v.b,
                                      null,
                                      " ",
                                      o.a.createElement(N.b, { size: 100 })
                                    )
                                  ),
                                  o.a.createElement(
                                    "h3",
                                    { style: { textAlign: "center" } },
                                    "Shop"
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
            a
          );
        })(m.Component);
      t.default = A;
    },
    834: function (e, t, a) {
      "use strict";
      var n = a(6),
        l = a(7),
        r = a(17),
        c = a(19),
        s = a(1),
        i = a.n(s),
        m = a(2),
        o = a.n(m),
        u = a(5),
        d = a.n(u),
        f = a(4),
        E = ["className", "cssModule", "inline", "tag", "innerRef"],
        b = {
          children: o.a.node,
          inline: o.a.bool,
          tag: f.tagPropType,
          innerRef: o.a.oneOfType([o.a.object, o.a.func, o.a.string]),
          className: o.a.string,
          cssModule: o.a.object,
        },
        p = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(r.a)(a)
              )),
              (a.submit = a.submit.bind(Object(r.a)(a))),
              a
            );
          }
          Object(c.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.submit = function () {
              this.ref && this.ref.submit();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                r = e.inline,
                c = e.tag,
                s = e.innerRef,
                m = Object(l.a)(e, E),
                o = Object(f.mapToCssModules)(d()(t, !!r && "form-inline"), a);
              return i.a.createElement(
                c,
                Object(n.a)({}, m, { ref: s, className: o })
              );
            }),
            t
          );
        })(s.Component);
      (p.propTypes = b), (p.defaultProps = { tag: "form" }), (t.a = p);
    },
    837: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var n = a(105);
      function l(e) {
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = Object(n.a)(e))) {
            var t = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var l,
          r,
          c = !0,
          s = !1;
        return {
          s: function () {
            l = e[Symbol.iterator]();
          },
          n: function () {
            var e = l.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (r = e);
          },
          f: function () {
            try {
              c || null == l.return || l.return();
            } finally {
              if (s) throw r;
            }
          },
        };
      }
    },
    853: function (e, t, a) {},
  },
]);
//# sourceMappingURL=200.3e84dfbc.chunk.js.map
