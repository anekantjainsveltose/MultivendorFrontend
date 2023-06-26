(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [109],
  {
    1011: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        c = t(1),
        r = t.n(c),
        l = t(2),
        o = t.n(l),
        i = t(5),
        u = t.n(i),
        d = t(4),
        m = ["className", "cssModule", "tag", "size"],
        p = {
          tag: d.tagPropType,
          size: o.a.string,
          className: o.a.string,
          cssModule: o.a.object,
        },
        f = function (e) {
          var a = e.className,
            t = e.cssModule,
            c = e.tag,
            l = e.size,
            o = Object(s.a)(e, m),
            i = Object(d.mapToCssModules)(
              u()(a, "input-group", l ? "input-group-" + l : null),
              t
            );
          return r.a.createElement(c, Object(n.a)({}, o, { className: i }));
        };
      (f.propTypes = p), (f.defaultProps = { tag: "div" }), (a.a = f);
    },
    2267: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "EditBatch", function () {
          return j;
        });
      var n = t(45),
        s = t(11),
        c = t(12),
        r = t(14),
        l = t(13),
        o = t(1),
        i = t.n(o),
        u = t(823),
        d = t(821),
        m = t(822),
        p = t(199),
        f = t(826),
        h = t(834),
        b = t(835),
        g = t(832),
        y = t(1011),
        v = t(930),
        E = (t(22), t(830)),
        O = t(62),
        j = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t(e) {
            var c;
            return (
              Object(s.a)(this, t),
              ((c = a.call(this, e)).changeHandler = function (e) {
                c.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (c.submitHandler = function (e) {
                e.preventDefault(), console.log(c.state);
                var a = c.props.match.params.id;
                E.a
                  .post("/admin/edit_batch/".concat(a), c.state)
                  .then(function (e) {
                    console.log(e),
                      c.props.history.push("/app/freshlist/batch/batchList");
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (c.state = {
                batch: "",
                rack_no: "",
                shelf_life: "",
                expiry_date: "",
                stock: "",
                notify: "",
              }),
              c
            );
          }
          return (
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  E.a
                    .get("/admin/viewone_addbatch/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({
                          data: a.data.data,
                          batch: a.data.data.batch,
                          rack_no: a.data.data.rack_no,
                          shelf_life: a.data.data.shelf_life,
                          expiry_date: a.data.data.expiry_date,
                          stock: a.data.data.stock,
                          notify: a.data.data.notify,
                        });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      u.a,
                      null,
                      i.a.createElement(
                        d.a,
                        { className: "m-2" },
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Edit Batch"
                          )
                        ),
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(O.b, {
                            render: function (e) {
                              var a = e.history;
                              return i.a.createElement(
                                p.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return a.push(
                                      "/app/freshlist/batch/batchList"
                                    );
                                  },
                                },
                                "Back"
                              );
                            },
                          })
                        )
                      ),
                      i.a.createElement(
                        f.a,
                        null,
                        i.a.createElement(
                          h.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          i.a.createElement(
                            d.a,
                            { className: "mb-2" },
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Batch"),
                              i.a.createElement(g.a, {
                                type: "number",
                                placeholder: "Batch",
                                name: "batch",
                                value: this.state.batch,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Rack Number"),
                              i.a.createElement(g.a, {
                                type: "number",
                                placeholder: "Rack Number",
                                name: "rack_no",
                                value: this.state.rack_no,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Shelf Life"),
                              i.a.createElement(
                                y.a,
                                null,
                                i.a.createElement(v.a, null, "Days"),
                                i.a.createElement(g.a, {
                                  type: "number",
                                  placeholder: "Shelf Life",
                                  name: "shelf_life",
                                  value: this.state.shelf_life,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Expiry Date"),
                              i.a.createElement(g.a, {
                                type: "text",
                                placeholder: "Expiry Date",
                                name: "expiry_date",
                                value: this.state.expiry_date,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Stock"),
                              i.a.createElement(g.a, {
                                type: "number",
                                placeholder: "stock",
                                name: "stock",
                                value: this.state.stock,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(b.a, null, "Notify"),
                              i.a.createElement(g.a, {
                                type: "number",
                                placeholder: "Notify",
                                name: "notify",
                                value: this.state.notify,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          i.a.createElement(
                            d.a,
                            null,
                            i.a.createElement(
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
        })(o.Component);
      a.default = j;
    },
    830: function (e, a, t) {
      "use strict";
      var n = t(44),
        s = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000/" });
      a.a = s;
    },
    832: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        c = t(17),
        r = t(19),
        l = t(1),
        o = t.n(l),
        i = t(2),
        u = t.n(i),
        d = t(5),
        m = t.n(d),
        p = t(4),
        f = [
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
          tag: p.tagPropType,
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
                Object(c.a)(t)
              )),
              (t.focus = t.focus.bind(Object(c.a)(t))),
              t
            );
          }
          Object(r.a)(a, e);
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
                c = e.type,
                r = e.bsSize,
                l = e.valid,
                i = e.invalid,
                u = e.tag,
                d = e.addon,
                h = e.plaintext,
                b = e.innerRef,
                g = Object(s.a)(e, f),
                y = ["radio", "checkbox"].indexOf(c) > -1,
                v = new RegExp("\\D", "g"),
                E = u || ("select" === c || "textarea" === c ? c : "input"),
                O = "form-control";
              h
                ? ((O += "-plaintext"), (E = u || "input"))
                : "file" === c
                ? (O += "-file")
                : "range" === c
                ? (O += "-range")
                : y && (O = d ? null : "form-check-input"),
                g.size &&
                  v.test(g.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (r = g.size),
                  delete g.size);
              var j = Object(p.mapToCssModules)(
                m()(
                  a,
                  i && "is-invalid",
                  l && "is-valid",
                  !!r && "form-control-" + r,
                  O
                ),
                t
              );
              return (
                ("input" === E || (u && "function" === typeof u)) &&
                  (g.type = c),
                g.children &&
                  !h &&
                  "select" !== c &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      c +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                o.a.createElement(
                  E,
                  Object(n.a)({}, g, {
                    ref: b,
                    className: j,
                    "aria-invalid": i,
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
        s = t(7),
        c = t(17),
        r = t(19),
        l = t(1),
        o = t.n(l),
        i = t(2),
        u = t.n(i),
        d = t(5),
        m = t.n(d),
        p = t(4),
        f = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: u.a.node,
          inline: u.a.bool,
          tag: p.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(c.a)(t)
              )),
              (t.submit = t.submit.bind(Object(c.a)(t))),
              t
            );
          }
          Object(r.a)(a, e);
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
                c = e.inline,
                r = e.tag,
                l = e.innerRef,
                i = Object(s.a)(e, f),
                u = Object(p.mapToCssModules)(m()(a, !!c && "form-inline"), t);
              return o.a.createElement(
                r,
                Object(n.a)({}, i, { ref: l, className: u })
              );
            }),
            a
          );
        })(l.Component);
      (b.propTypes = h), (b.defaultProps = { tag: "form" }), (a.a = b);
    },
    835: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        c = t(1),
        r = t.n(c),
        l = t(2),
        o = t.n(l),
        i = t(5),
        u = t.n(i),
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
        p = o.a.oneOfType([o.a.number, o.a.string]),
        f = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: p, order: p, offset: p }),
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
          xs: f,
          sm: f,
          md: f,
          lg: f,
          xl: f,
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
        y = function (e) {
          var a = e.className,
            t = e.cssModule,
            c = e.hidden,
            l = e.widths,
            o = e.tag,
            i = e.check,
            p = e.size,
            f = e.for,
            h = Object(s.a)(e, m),
            b = [];
          l.forEach(function (a, n) {
            var s = e[a];
            if ((delete h[a], s || "" === s)) {
              var c,
                r = !n;
              if (Object(d.isObject)(s)) {
                var l,
                  o = r ? "-" : "-" + a + "-";
                (c = g(r, a, s.size)),
                  b.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((l = {})[c] = s.size || "" === s.size),
                        (l["order" + o + s.order] = s.order || 0 === s.order),
                        (l["offset" + o + s.offset] =
                          s.offset || 0 === s.offset),
                        l)
                      )
                    ),
                    t
                  );
              } else (c = g(r, a, s)), b.push(c);
            }
          });
          var y = Object(d.mapToCssModules)(
            u()(
              a,
              !!c && "sr-only",
              !!i && "form-check-label",
              !!p && "col-form-label-" + p,
              b,
              !!b.length && "col-form-label"
            ),
            t
          );
          return r.a.createElement(
            o,
            Object(n.a)({ htmlFor: f }, h, { className: y })
          );
        };
      (y.propTypes = h), (y.defaultProps = b), (a.a = y);
    },
    930: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        c = t(1),
        r = t.n(c),
        l = t(2),
        o = t.n(l),
        i = t(5),
        u = t.n(i),
        d = t(4),
        m = ["className", "cssModule", "tag"],
        p = {
          tag: d.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
        },
        f = function (e) {
          var a = e.className,
            t = e.cssModule,
            c = e.tag,
            l = Object(s.a)(e, m),
            o = Object(d.mapToCssModules)(u()(a, "input-group-text"), t);
          return r.a.createElement(c, Object(n.a)({}, l, { className: o }));
        };
      (f.propTypes = p), (f.defaultProps = { tag: "span" }), (a.a = f);
    },
  },
]);
//# sourceMappingURL=109.2c2abdf2.chunk.js.map
