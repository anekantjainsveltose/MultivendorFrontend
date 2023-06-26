(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [134],
  {
    2262: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "AddBrand", function () {
          return j;
        });
      var n = t(837),
        r = t(45),
        s = t(11),
        l = t(12),
        i = t(14),
        o = t(13),
        c = t(1),
        u = t.n(c),
        d = t(823),
        m = t(821),
        f = t(822),
        p = t(199),
        h = t(826),
        b = t(834),
        g = t(835),
        v = t(832),
        y = t(813),
        O = (t(22), t(830)),
        E = t(62),
        j = (function (e) {
          Object(i.a)(t, e);
          var a = Object(o.a)(t);
          function t(e) {
            var l;
            return (
              Object(s.a)(this, t),
              ((l = a.call(this, e)).onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files[0] }),
                  l.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (l.handleChange = function (e) {
                l.setState({ status: e.target.value });
              }),
              (l.changeHandler = function (e) {
                l.setState(Object(r.a)({}, e.target.name, e.target.value));
              }),
              (l.submitHandler = function (e) {
                e.preventDefault();
                var a = new FormData();
                a.append("brand_name", l.state.name),
                  a.append("desc", l.state.desc),
                  a.append("status", l.state.status),
                  a.append("image", l.state.selectedFile, l.state.selectedName);
                var t,
                  r = Object(n.a)(a.values());
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var s = t.value;
                    console.log(s);
                  }
                } catch (u) {
                  r.e(u);
                } finally {
                  r.f();
                }
                var i,
                  o = Object(n.a)(a.keys());
                try {
                  for (o.s(); !(i = o.n()).done; ) {
                    var c = i.value;
                    console.log(c);
                  }
                } catch (u) {
                  o.e(u);
                } finally {
                  o.f();
                }
                O.a
                  .post("/admin/addbrand", a)
                  .then(function (e) {
                    console.log(e),
                      l.props.history.push("/app/freshlist/brand/brandList");
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (l.state = {
                name: "",
                desc: "",
                brand_img: "",
                status: "",
                selectedFile: null,
                selectedName: "",
              }),
              l
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      d.a,
                      null,
                      u.a.createElement(
                        m.a,
                        { className: "m-2" },
                        u.a.createElement(
                          f.a,
                          null,
                          u.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Brand"
                          )
                        ),
                        u.a.createElement(
                          f.a,
                          null,
                          u.a.createElement(E.b, {
                            render: function (e) {
                              var a = e.history;
                              return u.a.createElement(
                                p.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return a.push(
                                      "/app/freshlist/brand/brandList"
                                    );
                                  },
                                },
                                "Back"
                              );
                            },
                          })
                        )
                      ),
                      u.a.createElement(
                        h.a,
                        null,
                        u.a.createElement(
                          b.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            m.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              f.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              u.a.createElement(g.a, null, "Brand Name"),
                              u.a.createElement(v.a, {
                                type: "text",
                                placeholder: "Branch Name",
                                name: "name",
                                value: this.state.name,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              f.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              u.a.createElement(g.a, null, "Description"),
                              u.a.createElement(v.a, {
                                type: "text",
                                placeholder: "Description",
                                name: "desc",
                                value: this.state.desc,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              f.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              u.a.createElement(g.a, null, "Brand Image"),
                              u.a.createElement(y.a, {
                                type: "file",
                                onChange: this.onChangeHandler,
                              })
                            ),
                            u.a.createElement(
                              f.a,
                              {
                                lg: "6",
                                md: "6",
                                sm: "6",
                                className: "mb-2 mt-1",
                              },
                              u.a.createElement(
                                g.a,
                                { className: "mb-1" },
                                "Status"
                              ),
                              u.a.createElement(
                                "div",
                                {
                                  className: "form-label-group",
                                  onChange: this.handleChange,
                                },
                                u.a.createElement("input", {
                                  style: { marginRight: "3px" },
                                  type: "radio",
                                  name: "status",
                                  value: "Active",
                                }),
                                u.a.createElement(
                                  "span",
                                  { style: { marginRight: "20px" } },
                                  "Active"
                                ),
                                u.a.createElement("input", {
                                  style: { marginRight: "3px" },
                                  type: "radio",
                                  name: "status",
                                  value: "Deactive",
                                }),
                                u.a.createElement(
                                  "span",
                                  { style: { marginRight: "3px" } },
                                  "Deactive"
                                )
                              )
                            )
                          ),
                          u.a.createElement(
                            m.a,
                            null,
                            u.a.createElement(
                              p.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Add"
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
        })(c.Component);
      a.default = j;
    },
    830: function (e, a, t) {
      "use strict";
      var n = t(44),
        r = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000/" });
      a.a = r;
    },
    832: function (e, a, t) {
      "use strict";
      var n = t(6),
        r = t(7),
        s = t(17),
        l = t(19),
        i = t(1),
        o = t.n(i),
        c = t(2),
        u = t.n(c),
        d = t(5),
        m = t.n(d),
        f = t(4),
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
        h = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: f.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(s.a)(t)
              )),
              (t.focus = t.focus.bind(Object(s.a)(t))),
              t
            );
          }
          Object(l.a)(a, e);
          var t = a.prototype;
          return (
            (t.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (t.focus = function () {
              this.ref && this.ref.focus();
            }),
            (t.render = function () {
              var e = this.props,
                a = e.className,
                t = e.cssModule,
                s = e.type,
                l = e.bsSize,
                i = e.valid,
                c = e.invalid,
                u = e.tag,
                d = e.addon,
                h = e.plaintext,
                b = e.innerRef,
                g = Object(r.a)(e, p),
                v = ["radio", "checkbox"].indexOf(s) > -1,
                y = new RegExp("\\D", "g"),
                O = u || ("select" === s || "textarea" === s ? s : "input"),
                E = "form-control";
              h
                ? ((E += "-plaintext"), (O = u || "input"))
                : "file" === s
                ? (E += "-file")
                : "range" === s
                ? (E += "-range")
                : v && (E = d ? null : "form-check-input"),
                g.size &&
                  y.test(g.size) &&
                  (Object(f.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = g.size),
                  delete g.size);
              var j = Object(f.mapToCssModules)(
                m()(
                  a,
                  c && "is-invalid",
                  i && "is-valid",
                  !!l && "form-control-" + l,
                  E
                ),
                t
              );
              return (
                ("input" === O || (u && "function" === typeof u)) &&
                  (g.type = s),
                g.children &&
                  !h &&
                  "select" !== s &&
                  "string" === typeof O &&
                  "select" !== O &&
                  (Object(f.warnOnce)(
                    'Input with a type of "' +
                      s +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                o.a.createElement(
                  O,
                  Object(n.a)({}, g, {
                    ref: b,
                    className: j,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            a
          );
        })(o.a.Component);
      (b.propTypes = h), (b.defaultProps = { type: "text" }), (a.a = b);
    },
    834: function (e, a, t) {
      "use strict";
      var n = t(6),
        r = t(7),
        s = t(17),
        l = t(19),
        i = t(1),
        o = t.n(i),
        c = t(2),
        u = t.n(c),
        d = t(5),
        m = t.n(d),
        f = t(4),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: u.a.node,
          inline: u.a.bool,
          tag: f.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(s.a)(t)
              )),
              (t.submit = t.submit.bind(Object(s.a)(t))),
              t
            );
          }
          Object(l.a)(a, e);
          var t = a.prototype;
          return (
            (t.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (t.submit = function () {
              this.ref && this.ref.submit();
            }),
            (t.render = function () {
              var e = this.props,
                a = e.className,
                t = e.cssModule,
                s = e.inline,
                l = e.tag,
                i = e.innerRef,
                c = Object(r.a)(e, p),
                u = Object(f.mapToCssModules)(m()(a, !!s && "form-inline"), t);
              return o.a.createElement(
                l,
                Object(n.a)({}, c, { ref: i, className: u })
              );
            }),
            a
          );
        })(i.Component);
      (b.propTypes = h), (b.defaultProps = { tag: "form" }), (a.a = b);
    },
    835: function (e, a, t) {
      "use strict";
      var n = t(6),
        r = t(7),
        s = t(1),
        l = t.n(s),
        i = t(2),
        o = t.n(i),
        c = t(5),
        u = t.n(c),
        d = t(4),
        m = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        f = o.a.oneOfType([o.a.number, o.a.string]),
        p = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: f, order: f, offset: f }),
        ]),
        h = {
          children: o.a.node,
          hidden: o.a.bool,
          check: o.a.bool,
          size: o.a.string,
          for: o.a.string,
          tag: d.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          widths: o.a.array,
        },
        b = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function (e, a, t) {
          return !0 === t || "" === t
            ? e
              ? "col"
              : "col-" + a
            : "auto" === t
            ? e
              ? "col-auto"
              : "col-" + a + "-auto"
            : e
            ? "col-" + t
            : "col-" + a + "-" + t;
        },
        v = function (e) {
          var a = e.className,
            t = e.cssModule,
            s = e.hidden,
            i = e.widths,
            o = e.tag,
            c = e.check,
            f = e.size,
            p = e.for,
            h = Object(r.a)(e, m),
            b = [];
          i.forEach(function (a, n) {
            var r = e[a];
            if ((delete h[a], r || "" === r)) {
              var s,
                l = !n;
              if (Object(d.isObject)(r)) {
                var i,
                  o = l ? "-" : "-" + a + "-";
                (s = g(l, a, r.size)),
                  b.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((i = {})[s] = r.size || "" === r.size),
                        (i["order" + o + r.order] = r.order || 0 === r.order),
                        (i["offset" + o + r.offset] =
                          r.offset || 0 === r.offset),
                        i)
                      )
                    ),
                    t
                  );
              } else (s = g(l, a, r)), b.push(s);
            }
          });
          var v = Object(d.mapToCssModules)(
            u()(
              a,
              !!s && "sr-only",
              !!c && "form-check-label",
              !!f && "col-form-label-" + f,
              b,
              !!b.length && "col-form-label"
            ),
            t
          );
          return l.a.createElement(
            o,
            Object(n.a)({ htmlFor: p }, h, { className: v })
          );
        };
      (v.propTypes = h), (v.defaultProps = b), (a.a = v);
    },
    837: function (e, a, t) {
      "use strict";
      t.d(a, "a", function () {
        return r;
      });
      var n = t(105);
      function r(e) {
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = Object(n.a)(e))) {
            var a = 0,
              t = function () {};
            return {
              s: t,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: t,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          s,
          l = !0,
          i = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (i = !0), (s = e);
          },
          f: function () {
            try {
              l || null == r.return || r.return();
            } finally {
              if (i) throw s;
            }
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=134.d9e9ff34.chunk.js.map
