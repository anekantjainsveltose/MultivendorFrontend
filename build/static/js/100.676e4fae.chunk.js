(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [100],
  {
    1209: function (a, e, n) {
      a.exports = n.p + "static/media/glogo.5f6d14a9.png";
    },
    2298: function (a, e, n) {
      "use strict";
      n.r(e);
      var t = n(45),
        s = n(11),
        c = n(12),
        i = n(14),
        o = n(13),
        r = n(1),
        l = n.n(r),
        m = n(910),
        d = n(821),
        u = n(822),
        b = n(823),
        v = n(824),
        p = n(834),
        f = n(835),
        h = n(841),
        g = n(832),
        N = n(199),
        k = n(1209),
        T = n.n(k),
        y = (n(22), n(44)),
        I = n.n(y),
        C = n(843),
        w = n.n(C),
        P =
          (n(931),
          (function (a) {
            Object(i.a)(n, a);
            var e = Object(o.a)(n);
            function n(a) {
              var c;
              return (
                Object(s.a)(this, n),
                ((c = e.call(this, a)).handlechange = function (a) {
                  a.preventDefault(),
                    c.setState(Object(t.a)({}, a.target.name, a.target.value));
                }),
                (c.loginHandler = function (a) {
                  a.preventDefault(),
                    I.a
                      .post(
                        "http://35.154.225.110:5000/api/admin/adminfogetpassword",
                        c.state,
                        {
                          headers: {
                            "auth-admintoken":
                              localStorage.getItem("auth-admintoken"),
                          },
                        }
                      )
                      .then(function (a) {
                        console.log(a),
                          window.localStorage.removeItem("auth-admintoken"),
                          w()(
                            "Success",
                            "Password Updated Successfully",
                            "success"
                          ),
                          c.props.history.push("/pages/login");
                      })
                      .catch(function (a) {
                        console.log(a.response);
                      });
                }),
                (c.state = { password: "", cnfmPassword: "" }),
                c
              );
            }
            return (
              Object(c.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      m.a,
                      null,
                      l.a.createElement(
                        d.a,
                        { className: "m-0 justify-content-center" },
                        l.a.createElement(
                          u.a,
                          {
                            sm: "8",
                            xl: "7",
                            lg: "10",
                            md: "8",
                            className: "d-flex justify-content-center",
                          },
                          l.a.createElement(
                            u.a,
                            { lg: "8", md: "12", className: "p-1" },
                            l.a.createElement(
                              b.a,
                              {
                                className:
                                  "rounded-0 mb-0 px-2 pb-3 login-tabs-container",
                              },
                              l.a.createElement(
                                v.a,
                                { className: "pb-1" },
                                l.a.createElement("img", {
                                  src: T.a,
                                  class: "img-fluid",
                                  alt: "...",
                                }),
                                l.a.createElement("br", null)
                              ),
                              l.a.createElement(
                                p.a,
                                { onSubmit: this.loginHandler },
                                l.a.createElement(f.a, null, "New Password"),
                                l.a.createElement(
                                  h.a,
                                  {
                                    className:
                                      "form-label-group position-relative has-icon-left",
                                  },
                                  l.a.createElement(g.a, {
                                    type: "text",
                                    name: "password",
                                    placeholder: "New Password",
                                    value: this.state.password,
                                    onChange: this.handlechange,
                                    required: !0,
                                  })
                                ),
                                l.a.createElement(
                                  f.a,
                                  null,
                                  "Confirm Password"
                                ),
                                l.a.createElement(
                                  h.a,
                                  {
                                    className:
                                      "form-label-group position-relative has-icon-left",
                                  },
                                  l.a.createElement(g.a, {
                                    type: "text",
                                    name: "cnfmPassword",
                                    placeholder: "Confirm Password",
                                    value: this.state.cnfmPassword,
                                    onChange: this.handlechange,
                                    required: !0,
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex justify-content-between",
                                  },
                                  l.a.createElement(
                                    N.a.Ripple,
                                    { color: "primary", type: "submit" },
                                    "Update"
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
              n
            );
          })(l.a.Component));
      e.default = P;
    },
    832: function (a, e, n) {
      "use strict";
      var t = n(6),
        s = n(7),
        c = n(17),
        i = n(19),
        o = n(1),
        r = n.n(o),
        l = n(2),
        m = n.n(l),
        d = n(5),
        u = n.n(d),
        b = n(4),
        v = [
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
        p = {
          children: m.a.node,
          type: m.a.string,
          size: m.a.oneOfType([m.a.number, m.a.string]),
          bsSize: m.a.string,
          valid: m.a.bool,
          invalid: m.a.bool,
          tag: b.tagPropType,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          plaintext: m.a.bool,
          addon: m.a.bool,
          className: m.a.string,
          cssModule: m.a.object,
        },
        f = (function (a) {
          function e(e) {
            var n;
            return (
              ((n = a.call(this, e) || this).getRef = n.getRef.bind(
                Object(c.a)(n)
              )),
              (n.focus = n.focus.bind(Object(c.a)(n))),
              n
            );
          }
          Object(i.a)(e, a);
          var n = e.prototype;
          return (
            (n.getRef = function (a) {
              this.props.innerRef && this.props.innerRef(a), (this.ref = a);
            }),
            (n.focus = function () {
              this.ref && this.ref.focus();
            }),
            (n.render = function () {
              var a = this.props,
                e = a.className,
                n = a.cssModule,
                c = a.type,
                i = a.bsSize,
                o = a.valid,
                l = a.invalid,
                m = a.tag,
                d = a.addon,
                p = a.plaintext,
                f = a.innerRef,
                h = Object(s.a)(a, v),
                g = ["radio", "checkbox"].indexOf(c) > -1,
                N = new RegExp("\\D", "g"),
                k = m || ("select" === c || "textarea" === c ? c : "input"),
                T = "form-control";
              p
                ? ((T += "-plaintext"), (k = m || "input"))
                : "file" === c
                ? (T += "-file")
                : "range" === c
                ? (T += "-range")
                : g && (T = d ? null : "form-check-input"),
                h.size &&
                  N.test(h.size) &&
                  (Object(b.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (i = h.size),
                  delete h.size);
              var y = Object(b.mapToCssModules)(
                u()(
                  e,
                  l && "is-invalid",
                  o && "is-valid",
                  !!i && "form-control-" + i,
                  T
                ),
                n
              );
              return (
                ("input" === k || (m && "function" === typeof m)) &&
                  (h.type = c),
                h.children &&
                  !p &&
                  "select" !== c &&
                  "string" === typeof k &&
                  "select" !== k &&
                  (Object(b.warnOnce)(
                    'Input with a type of "' +
                      c +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete h.children),
                r.a.createElement(
                  k,
                  Object(t.a)({}, h, {
                    ref: f,
                    className: y,
                    "aria-invalid": l,
                  })
                )
              );
            }),
            e
          );
        })(r.a.Component);
      (f.propTypes = p), (f.defaultProps = { type: "text" }), (e.a = f);
    },
    834: function (a, e, n) {
      "use strict";
      var t = n(6),
        s = n(7),
        c = n(17),
        i = n(19),
        o = n(1),
        r = n.n(o),
        l = n(2),
        m = n.n(l),
        d = n(5),
        u = n.n(d),
        b = n(4),
        v = ["className", "cssModule", "inline", "tag", "innerRef"],
        p = {
          children: m.a.node,
          inline: m.a.bool,
          tag: b.tagPropType,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          className: m.a.string,
          cssModule: m.a.object,
        },
        f = (function (a) {
          function e(e) {
            var n;
            return (
              ((n = a.call(this, e) || this).getRef = n.getRef.bind(
                Object(c.a)(n)
              )),
              (n.submit = n.submit.bind(Object(c.a)(n))),
              n
            );
          }
          Object(i.a)(e, a);
          var n = e.prototype;
          return (
            (n.getRef = function (a) {
              this.props.innerRef && this.props.innerRef(a), (this.ref = a);
            }),
            (n.submit = function () {
              this.ref && this.ref.submit();
            }),
            (n.render = function () {
              var a = this.props,
                e = a.className,
                n = a.cssModule,
                c = a.inline,
                i = a.tag,
                o = a.innerRef,
                l = Object(s.a)(a, v),
                m = Object(b.mapToCssModules)(u()(e, !!c && "form-inline"), n);
              return r.a.createElement(
                i,
                Object(t.a)({}, l, { ref: o, className: m })
              );
            }),
            e
          );
        })(o.Component);
      (f.propTypes = p), (f.defaultProps = { tag: "form" }), (e.a = f);
    },
    835: function (a, e, n) {
      "use strict";
      var t = n(6),
        s = n(7),
        c = n(1),
        i = n.n(c),
        o = n(2),
        r = n.n(o),
        l = n(5),
        m = n.n(l),
        d = n(4),
        u = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        b = r.a.oneOfType([r.a.number, r.a.string]),
        v = r.a.oneOfType([
          r.a.bool,
          r.a.string,
          r.a.number,
          r.a.shape({ size: b, order: b, offset: b }),
        ]),
        p = {
          children: r.a.node,
          hidden: r.a.bool,
          check: r.a.bool,
          size: r.a.string,
          for: r.a.string,
          tag: d.tagPropType,
          className: r.a.string,
          cssModule: r.a.object,
          xs: v,
          sm: v,
          md: v,
          lg: v,
          xl: v,
          widths: r.a.array,
        },
        f = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        h = function (a, e, n) {
          return !0 === n || "" === n
            ? a
              ? "col"
              : "col-" + e
            : "auto" === n
            ? a
              ? "col-auto"
              : "col-" + e + "-auto"
            : a
            ? "col-" + n
            : "col-" + e + "-" + n;
        },
        g = function (a) {
          var e = a.className,
            n = a.cssModule,
            c = a.hidden,
            o = a.widths,
            r = a.tag,
            l = a.check,
            b = a.size,
            v = a.for,
            p = Object(s.a)(a, u),
            f = [];
          o.forEach(function (e, t) {
            var s = a[e];
            if ((delete p[e], s || "" === s)) {
              var c,
                i = !t;
              if (Object(d.isObject)(s)) {
                var o,
                  r = i ? "-" : "-" + e + "-";
                (c = h(i, e, s.size)),
                  f.push(
                    Object(d.mapToCssModules)(
                      m()(
                        (((o = {})[c] = s.size || "" === s.size),
                        (o["order" + r + s.order] = s.order || 0 === s.order),
                        (o["offset" + r + s.offset] =
                          s.offset || 0 === s.offset),
                        o)
                      )
                    ),
                    n
                  );
              } else (c = h(i, e, s)), f.push(c);
            }
          });
          var g = Object(d.mapToCssModules)(
            m()(
              e,
              !!c && "sr-only",
              !!l && "form-check-label",
              !!b && "col-form-label-" + b,
              f,
              !!f.length && "col-form-label"
            ),
            n
          );
          return i.a.createElement(
            r,
            Object(t.a)({ htmlFor: v }, p, { className: g })
          );
        };
      (g.propTypes = p), (g.defaultProps = f), (e.a = g);
    },
    841: function (a, e, n) {
      "use strict";
      var t = n(6),
        s = n(7),
        c = n(1),
        i = n.n(c),
        o = n(2),
        r = n.n(o),
        l = n(5),
        m = n.n(l),
        d = n(4),
        u = [
          "className",
          "cssModule",
          "row",
          "disabled",
          "check",
          "inline",
          "tag",
        ],
        b = {
          children: r.a.node,
          row: r.a.bool,
          check: r.a.bool,
          inline: r.a.bool,
          disabled: r.a.bool,
          tag: d.tagPropType,
          className: r.a.string,
          cssModule: r.a.object,
        },
        v = function (a) {
          var e = a.className,
            n = a.cssModule,
            c = a.row,
            o = a.disabled,
            r = a.check,
            l = a.inline,
            b = a.tag,
            v = Object(s.a)(a, u),
            p = Object(d.mapToCssModules)(
              m()(
                e,
                !!c && "row",
                r ? "form-check" : "form-group",
                !(!r || !l) && "form-check-inline",
                !(!r || !o) && "disabled"
              ),
              n
            );
          return (
            "fieldset" === b && (v.disabled = o),
            i.a.createElement(b, Object(t.a)({}, v, { className: p }))
          );
        };
      (v.propTypes = b), (v.defaultProps = { tag: "div" }), (e.a = v);
    },
    910: function (a, e, n) {
      "use strict";
      var t = n(6),
        s = n(7),
        c = n(1),
        i = n.n(c),
        o = n(2),
        r = n.n(o),
        l = n(5),
        m = n.n(l),
        d = n(4),
        u = ["className", "cssModule", "fluid", "tag"],
        b = {
          tag: d.tagPropType,
          fluid: r.a.oneOfType([r.a.bool, r.a.string]),
          className: r.a.string,
          cssModule: r.a.object,
        },
        v = function (a) {
          var e = a.className,
            n = a.cssModule,
            c = a.fluid,
            o = a.tag,
            r = Object(s.a)(a, u),
            l = "container";
          !0 === c ? (l = "container-fluid") : c && (l = "container-" + c);
          var b = Object(d.mapToCssModules)(m()(e, l), n);
          return i.a.createElement(o, Object(t.a)({}, r, { className: b }));
        };
      (v.propTypes = b), (v.defaultProps = { tag: "div" }), (e.a = v);
    },
    931: function (a, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "f", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return m;
        }),
        n.d(e, "c", function () {
          return d;
        });
      var t = n(1),
        s = n.n(t),
        c = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsBasic extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsBasic\n'
          )
        ),
        i = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsVerticalLeft extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n    <div className="nav-vertical">\n      <Nav tabs className="nav-left">\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "1"\n            })}\n            onClick={() => {\n              this.toggle("1")\n            }}\n          >\n            Tab 1\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "2"\n            })}\n            onClick={() => {\n              this.toggle("2")\n            }}\n          >\n            Tab 2\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "3"\n            })}\n            onClick={() => {\n              this.toggle("3")\n            }}\n          >\n            Tab 3\n          </NavLink>\n        </NavItem>\n      </Nav>\n      <TabContent activeTab={this.state.active}>\n        <TabPane tabId="1">\n          Oat cake marzipan cake lollipop caramels wafer pie jelly\n          beans. Icing halvah chocolate cake carrot cake. Jelly beans\n          carrot cake marshmallow gingerbread chocolate cake. Gummies\n          cupcake croissant.\n        </TabPane>\n        <TabPane tabId="2">\n          Sugar plum tootsie roll biscuit caramels. Liquorice brownie\n          pastry cotton candy oat cake fruitcake jelly chupa chups.\n          Pudding caramels pastry powder cake souffl\xe9 wafer caramels.\n          Jelly-o pie cupcake.\n        </TabPane>\n        <TabPane tabId="3">\n          Biscuit ice cream halvah candy canes bear claw ice cream\n          cake chocolate bar donut. Toffee cotton candy liquorice. Oat\n          cake lemon drops gingerbread dessert caramels. Sweet dessert\n          jujubes powder sweet sesame snaps.\n        </TabPane>\n    </TabContent>\n  </div>\n    )\n  }\n}\nexport default TabsVerticalLeft\n'
          )
        ),
        o = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsVerticalRight extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n    <div className="nav-vertical">\n      <Nav tabs className="nav-right">\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "1"\n            })}\n            onClick={() => {\n              this.toggle("1")\n            }}\n          >\n            Tab 1\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "2"\n            })}\n            onClick={() => {\n              this.toggle("2")\n            }}\n          >\n            Tab 2\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "3"\n            })}\n            onClick={() => {\n              this.toggle("3")\n            }}\n          >\n            Tab 3\n          </NavLink>\n        </NavItem>\n      </Nav>\n      <TabContent activeTab={this.state.active}>\n        <TabPane tabId="1">\n          Oat cake marzipan cake lollipop caramels wafer pie jelly\n          beans. Icing halvah chocolate cake carrot cake. Jelly beans\n          carrot cake marshmallow gingerbread chocolate cake. Gummies\n          cupcake croissant.\n        </TabPane>\n        <TabPane tabId="2">\n          Sugar plum tootsie roll biscuit caramels. Liquorice brownie\n          pastry cotton candy oat cake fruitcake jelly chupa chups.\n          Pudding caramels pastry powder cake souffl\xe9 wafer caramels.\n          Jelly-o pie cupcake.\n        </TabPane>\n        <TabPane tabId="3">\n          Biscuit ice cream halvah candy canes bear claw ice cream\n          cake chocolate bar donut. Toffee cotton candy liquorice. Oat\n          cake lemon drops gingerbread dessert caramels. Sweet dessert\n          jujubes powder sweet sesame snaps.\n        </TabPane>\n    </TabContent>\n  </div>\n    )\n  }\n}\nexport default TabsVerticalRight\n'
          )
        ),
        r = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsFilled extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="nav-fill">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsFilled\n'
          )
        ),
        l = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsJustified extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="nav-justified">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsJustified\n'
          )
        ),
        m = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsCentered extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="justify-content-center">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsCentered\n'
          )
        ),
        d = s.a.createElement(
          "pre",
          null,
          s.a.createElement(
            "code",
            { className: "language-jsx" },
            '\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsEnd extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="justify-content-end">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsEnd\n'
          )
        );
    },
  },
]);
//# sourceMappingURL=100.676e4fae.chunk.js.map
