(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [188],
  {
    2215: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddGallery", function () {
          return j;
        });
      var n = a(45),
        r = a(31),
        l = a(11),
        s = a(12),
        o = a(14),
        i = a(13),
        c = a(1),
        u = a.n(c),
        d = a(823),
        p = a(821),
        f = a(822),
        m = a(199),
        g = a(826),
        h = a(834),
        b = a(835),
        v = a(813),
        y = a(832),
        E = (a(22), a(830)),
        O = a(62),
        j = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a(e) {
            var s;
            return (
              Object(l.a)(this, a),
              ((s = t.call(this, e)).fileSelectedHandler = function (e) {
                s.setState({
                  aadharcardimage: [].concat(
                    Object(r.a)(s.state.aadharcardimage),
                    Object(r.a)(e.target.files)
                  ),
                }),
                  console.log(s.state.aadharcardimage);
              }),
              (s.onChangeHandler = function (e) {
                s.setState({ selectedFile: e.target.files[0] }),
                  s.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (s.changeHandler1 = function (e) {
                s.setState({ status: e.target.value });
              }),
              (s.changeHandler = function (e) {
                s.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (s.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", s.state.name),
                  t.append("sortorder", s.state.sortorder),
                  t.append("desc", s.state.desc),
                  t.append("status", s.state.status),
                  t.append(
                    "product_img",
                    s.state.selectedFile,
                    s.state.selectedName
                  ),
                  E.a
                    .post(" /addproductcategory", t)
                    .then(function (e) {
                      console.log(e),
                        s.props.history.push("/app/freshlist/gallery/gallery");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (s.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                product_img: "",
                aadharcardimage: [],
                status: "",
              }),
              s
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement("h1", null, "Add Images"),
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        d.a,
                        null,
                        u.a.createElement(
                          p.a,
                          { className: "m-1" },
                          u.a.createElement(
                            f.a,
                            { className: "" },
                            u.a.createElement("h2", null, "Upload File")
                          ),
                          u.a.createElement(
                            f.a,
                            null,
                            u.a.createElement(O.b, {
                              render: function (e) {
                                var t = e.history;
                                return u.a.createElement(
                                  m.a,
                                  {
                                    className: " btn btn-danger float-right",
                                    onClick: function () {
                                      return t.push(
                                        "/app/freshlist/gallery/gallery"
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
                          g.a,
                          null,
                          u.a.createElement(
                            h.a,
                            { onSubmit: this.submitHandler },
                            u.a.createElement(
                              p.a,
                              { className: "mb-1" },
                              u.a.createElement(
                                f.a,
                                { lg: "4" },
                                u.a.createElement(b.a, null, "Image"),
                                u.a.createElement(v.a, {
                                  required: !0,
                                  accept:
                                    "application/pdf,image/gif, image/jpeg,image/png",
                                  multiple: !0,
                                  type: "file",
                                  onChange: this.fileSelectedHandler,
                                })
                              ),
                              u.a.createElement(
                                f.a,
                                { lg: "4" },
                                u.a.createElement(b.a, null, " Folder Name"),
                                u.a.createElement(
                                  y.a,
                                  {
                                    required: !0,
                                    type: "select",
                                    name: "folder",
                                    placeholder: "Driver Name",
                                    onChange: this.changeHandler,
                                  },
                                  u.a.createElement(
                                    "option",
                                    null,
                                    "--Select--"
                                  ),
                                  u.a.createElement("option", null, "Admin"),
                                  u.a.createElement("option", null, "banner"),
                                  u.a.createElement("option", null, "brand"),
                                  u.a.createElement("option", null, "Category"),
                                  u.a.createElement("option", null, "company"),
                                  u.a.createElement(
                                    "option",
                                    null,
                                    "Deliveryman"
                                  ),
                                  u.a.createElement("option", null, "Product"),
                                  u.a.createElement("option", null, "Shop"),
                                  u.a.createElement("option", null, "Deal")
                                )
                              )
                            ),
                            u.a.createElement(
                              p.a,
                              { style: { float: "right" } },
                              u.a.createElement(
                                m.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1 ",
                                },
                                "Upload"
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
        })(c.Component);
      t.default = j;
    },
    830: function (e, t, a) {
      "use strict";
      var n = a(44),
        r = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000/" });
      t.a = r;
    },
    832: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        l = a(17),
        s = a(19),
        o = a(1),
        i = a.n(o),
        c = a(2),
        u = a.n(c),
        d = a(5),
        p = a.n(d),
        f = a(4),
        m = [
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
        g = {
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
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(l.a)(a)
              )),
              (a.focus = a.focus.bind(Object(l.a)(a))),
              a
            );
          }
          Object(s.a)(t, e);
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
                l = e.type,
                s = e.bsSize,
                o = e.valid,
                c = e.invalid,
                u = e.tag,
                d = e.addon,
                g = e.plaintext,
                h = e.innerRef,
                b = Object(r.a)(e, m),
                v = ["radio", "checkbox"].indexOf(l) > -1,
                y = new RegExp("\\D", "g"),
                E = u || ("select" === l || "textarea" === l ? l : "input"),
                O = "form-control";
              g
                ? ((O += "-plaintext"), (E = u || "input"))
                : "file" === l
                ? (O += "-file")
                : "range" === l
                ? (O += "-range")
                : v && (O = d ? null : "form-check-input"),
                b.size &&
                  y.test(b.size) &&
                  (Object(f.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (s = b.size),
                  delete b.size);
              var j = Object(f.mapToCssModules)(
                p()(
                  t,
                  c && "is-invalid",
                  o && "is-valid",
                  !!s && "form-control-" + s,
                  O
                ),
                a
              );
              return (
                ("input" === E || (u && "function" === typeof u)) &&
                  (b.type = l),
                b.children &&
                  !g &&
                  "select" !== l &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(f.warnOnce)(
                    'Input with a type of "' +
                      l +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete b.children),
                i.a.createElement(
                  E,
                  Object(n.a)({}, b, {
                    ref: h,
                    className: j,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(i.a.Component);
      (h.propTypes = g), (h.defaultProps = { type: "text" }), (t.a = h);
    },
    834: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        l = a(17),
        s = a(19),
        o = a(1),
        i = a.n(o),
        c = a(2),
        u = a.n(c),
        d = a(5),
        p = a.n(d),
        f = a(4),
        m = ["className", "cssModule", "inline", "tag", "innerRef"],
        g = {
          children: u.a.node,
          inline: u.a.bool,
          tag: f.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(l.a)(a)
              )),
              (a.submit = a.submit.bind(Object(l.a)(a))),
              a
            );
          }
          Object(s.a)(t, e);
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
                l = e.inline,
                s = e.tag,
                o = e.innerRef,
                c = Object(r.a)(e, m),
                u = Object(f.mapToCssModules)(p()(t, !!l && "form-inline"), a);
              return i.a.createElement(
                s,
                Object(n.a)({}, c, { ref: o, className: u })
              );
            }),
            t
          );
        })(o.Component);
      (h.propTypes = g), (h.defaultProps = { tag: "form" }), (t.a = h);
    },
    835: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        l = a(1),
        s = a.n(l),
        o = a(2),
        i = a.n(o),
        c = a(5),
        u = a.n(c),
        d = a(4),
        p = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        f = i.a.oneOfType([i.a.number, i.a.string]),
        m = i.a.oneOfType([
          i.a.bool,
          i.a.string,
          i.a.number,
          i.a.shape({ size: f, order: f, offset: f }),
        ]),
        g = {
          children: i.a.node,
          hidden: i.a.bool,
          check: i.a.bool,
          size: i.a.string,
          for: i.a.string,
          tag: d.tagPropType,
          className: i.a.string,
          cssModule: i.a.object,
          xs: m,
          sm: m,
          md: m,
          lg: m,
          xl: m,
          widths: i.a.array,
        },
        h = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        b = function (e, t, a) {
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
            l = e.hidden,
            o = e.widths,
            i = e.tag,
            c = e.check,
            f = e.size,
            m = e.for,
            g = Object(r.a)(e, p),
            h = [];
          o.forEach(function (t, n) {
            var r = e[t];
            if ((delete g[t], r || "" === r)) {
              var l,
                s = !n;
              if (Object(d.isObject)(r)) {
                var o,
                  i = s ? "-" : "-" + t + "-";
                (l = b(s, t, r.size)),
                  h.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((o = {})[l] = r.size || "" === r.size),
                        (o["order" + i + r.order] = r.order || 0 === r.order),
                        (o["offset" + i + r.offset] =
                          r.offset || 0 === r.offset),
                        o)
                      )
                    ),
                    a
                  );
              } else (l = b(s, t, r)), h.push(l);
            }
          });
          var v = Object(d.mapToCssModules)(
            u()(
              t,
              !!l && "sr-only",
              !!c && "form-check-label",
              !!f && "col-form-label-" + f,
              h,
              !!h.length && "col-form-label"
            ),
            a
          );
          return s.a.createElement(
            i,
            Object(n.a)({ htmlFor: m }, g, { className: v })
          );
        };
      (v.propTypes = g), (v.defaultProps = h), (t.a = v);
    },
  },
]);
//# sourceMappingURL=188.2b931ab8.chunk.js.map
