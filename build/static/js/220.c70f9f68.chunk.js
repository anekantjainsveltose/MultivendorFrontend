(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [220],
  {
    2172: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return N;
        });
      var n = a(45),
        s = a(11),
        r = a(12),
        l = a(14),
        o = a(13),
        i = a(1),
        c = a.n(i),
        u = a(823),
        m = a(824),
        f = a(825),
        d = a(826),
        p = a(834),
        b = a(821),
        h = a(822),
        g = a(835),
        v = a(813),
        y = a(832),
        O = a(199),
        j = a(44),
        E = a.n(j),
        N = (function (e) {
          Object(l.a)(a, e);
          var t = Object(o.a)(a);
          function a(e) {
            var r;
            return (
              Object(s.a)(this, a),
              ((r = t.call(this, e)).onChangeHandler = function (e) {
                r.setState({ selectedFile: e.target.files[0] }),
                  r.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (r.changeHandler1 = function (e) {
                r.setState({ status: e.target.value });
              }),
              (r.changeHandler = function (e) {
                r.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (r.submitHandler = function (e) {
                e.preventDefault(),
                  E.a
                    .post(
                      "http://13.234.217.170/api/user/customersignup",
                      r.state
                    )
                    .then(function (e) {
                      console.log(e),
                        alert("Customer Added Successful"),
                        r.props.history.push("/app/customer/customerList");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (r.state = {
                first_name: "",
                last_name: "",
                customer_email: "",
                mobile_no: "",
                sortorder: "",
                selectedFile: null,
                status: "",
              }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      u.a,
                      null,
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(f.a, null, "Add Fund")
                      ),
                      c.a.createElement(
                        d.a,
                        null,
                        c.a.createElement(
                          p.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          c.a.createElement(
                            b.a,
                            null,
                            c.a.createElement(
                              h.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              c.a.createElement(g.a, null, "Customer"),
                              c.a.createElement(
                                v.a,
                                {
                                  type: "select",
                                  name: "type",
                                  value: this.state.type,
                                  onChange: this.changeHandler,
                                },
                                c.a.createElement(
                                  "option",
                                  null,
                                  "--Select Customer--"
                                ),
                                c.a.createElement(
                                  "option",
                                  { value: "1" },
                                  "1"
                                ),
                                c.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                c.a.createElement("option", { value: "3" }, "3")
                              )
                            ),
                            c.a.createElement(
                              h.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              c.a.createElement(g.a, null, "Fund"),
                              c.a.createElement(y.a, {
                                required: !0,
                                type: "text",
                                name: "last_name",
                                placeholder: "Enter Last Name",
                                value: this.state.last_name,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          c.a.createElement(
                            b.a,
                            null,
                            c.a.createElement(
                              h.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              c.a.createElement(
                                O.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1",
                                },
                                "Submit"
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
        })(i.Component);
    },
    832: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(17),
        l = a(19),
        o = a(1),
        i = a.n(o),
        c = a(2),
        u = a.n(c),
        m = a(5),
        f = a.n(m),
        d = a(4),
        p = [
          "className",
          "cssModule",
          "type",
          "bsSize",
          "valid",
          "invalid",
          "tag",
          "addon",
          "plaintext",
          "innerRef",
        ],
        b = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: d.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(r.a)(a)
              )),
              (a.focus = a.focus.bind(Object(r.a)(a))),
              a
            );
          }
          Object(l.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.focus = function () {
              this.ref && this.ref.focus();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                r = e.type,
                l = e.bsSize,
                o = e.valid,
                c = e.invalid,
                u = e.tag,
                m = e.addon,
                b = e.plaintext,
                h = e.innerRef,
                g = Object(s.a)(e, p),
                v = ["radio", "checkbox"].indexOf(r) > -1,
                y = new RegExp("\\D", "g"),
                O = u || ("select" === r || "textarea" === r ? r : "input"),
                j = "form-control";
              b
                ? ((j += "-plaintext"), (O = u || "input"))
                : "file" === r
                ? (j += "-file")
                : "range" === r
                ? (j += "-range")
                : v && (j = m ? null : "form-check-input"),
                g.size &&
                  y.test(g.size) &&
                  (Object(d.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = g.size),
                  delete g.size);
              var E = Object(d.mapToCssModules)(
                f()(
                  t,
                  c && "is-invalid",
                  o && "is-valid",
                  !!l && "form-control-" + l,
                  j
                ),
                a
              );
              return (
                ("input" === O || (u && "function" === typeof u)) &&
                  (g.type = r),
                g.children &&
                  !b &&
                  "select" !== r &&
                  "string" === typeof O &&
                  "select" !== O &&
                  (Object(d.warnOnce)(
                    'Input with a type of "' +
                      r +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                i.a.createElement(
                  O,
                  Object(n.a)({}, g, {
                    ref: h,
                    className: E,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(i.a.Component);
      (h.propTypes = b), (h.defaultProps = { type: "text" }), (t.a = h);
    },
    834: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(17),
        l = a(19),
        o = a(1),
        i = a.n(o),
        c = a(2),
        u = a.n(c),
        m = a(5),
        f = a.n(m),
        d = a(4),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        b = {
          children: u.a.node,
          inline: u.a.bool,
          tag: d.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
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
          Object(l.a)(t, e);
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
                l = e.tag,
                o = e.innerRef,
                c = Object(s.a)(e, p),
                u = Object(d.mapToCssModules)(f()(t, !!r && "form-inline"), a);
              return i.a.createElement(
                l,
                Object(n.a)({}, c, { ref: o, className: u })
              );
            }),
            t
          );
        })(o.Component);
      (h.propTypes = b), (h.defaultProps = { tag: "form" }), (t.a = h);
    },
    835: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(1),
        l = a.n(r),
        o = a(2),
        i = a.n(o),
        c = a(5),
        u = a.n(c),
        m = a(4),
        f = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        d = i.a.oneOfType([i.a.number, i.a.string]),
        p = i.a.oneOfType([
          i.a.bool,
          i.a.string,
          i.a.number,
          i.a.shape({ size: d, order: d, offset: d }),
        ]),
        b = {
          children: i.a.node,
          hidden: i.a.bool,
          check: i.a.bool,
          size: i.a.string,
          for: i.a.string,
          tag: m.tagPropType,
          className: i.a.string,
          cssModule: i.a.object,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          widths: i.a.array,
        },
        h = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function (e, t, a) {
          return !0 === a || "" === a
            ? e
              ? "col"
              : "col-" + t
            : "auto" === a
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + a
            : "col-" + t + "-" + a;
        },
        v = function (e) {
          var t = e.className,
            a = e.cssModule,
            r = e.hidden,
            o = e.widths,
            i = e.tag,
            c = e.check,
            d = e.size,
            p = e.for,
            b = Object(s.a)(e, f),
            h = [];
          o.forEach(function (t, n) {
            var s = e[t];
            if ((delete b[t], s || "" === s)) {
              var r,
                l = !n;
              if (Object(m.isObject)(s)) {
                var o,
                  i = l ? "-" : "-" + t + "-";
                (r = g(l, t, s.size)),
                  h.push(
                    Object(m.mapToCssModules)(
                      u()(
                        (((o = {})[r] = s.size || "" === s.size),
                        (o["order" + i + s.order] = s.order || 0 === s.order),
                        (o["offset" + i + s.offset] =
                          s.offset || 0 === s.offset),
                        o)
                      )
                    ),
                    a
                  );
              } else (r = g(l, t, s)), h.push(r);
            }
          });
          var v = Object(m.mapToCssModules)(
            u()(
              t,
              !!r && "sr-only",
              !!c && "form-check-label",
              !!d && "col-form-label-" + d,
              h,
              !!h.length && "col-form-label"
            ),
            a
          );
          return l.a.createElement(
            i,
            Object(n.a)({ htmlFor: p }, b, { className: v })
          );
        };
      (v.propTypes = b), (v.defaultProps = h), (t.a = v);
    },
  },
]);
//# sourceMappingURL=220.c70f9f68.chunk.js.map
