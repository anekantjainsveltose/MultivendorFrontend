(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [24],
  {
    1197: function (e, t, a) {
      "use strict";
      var n = a(45),
        l = a(11),
        r = a(12),
        s = a(14),
        c = a(13),
        m = a(1),
        u = a.n(m),
        o = a(823),
        i = a(826),
        d = a(834),
        p = a(821),
        h = a(822),
        E = a(835),
        g = a(832),
        b = a(813),
        v = a(199),
        y =
          (a(861),
          a(859),
          a(870),
          a(22),
          a(830),
          (function (e) {
            Object(s.a)(a, e);
            var t = Object(c.a)(a);
            function a(e) {
              var r;
              return (
                Object(l.a)(this, a),
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
                  e.preventDefault();
                  var t = new FormData();
                  t.append("name", r.state.name),
                    t.append("sortorder", r.state.sortorder),
                    t.append("desc", r.state.desc),
                    t.append("status", r.state.status),
                    null !== r.state.selectedFile &&
                      t.append(
                        "brand_img",
                        r.state.selectedFile,
                        r.state.selectedName
                      );
                }),
                (r.state = {
                  telephone: "",
                  customer: "",
                  customergroup: "",
                  name: "",
                  firstname: "",
                  lastname: "",
                  email: "",
                  selectedFile: null,
                  selectedName: "",
                  sortorder: "",
                  desc: "",
                  brand_img: "",
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
                    return u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        o.a,
                        null,
                        u.a.createElement(
                          i.a,
                          null,
                          u.a.createElement(
                            d.a,
                            { className: "m-1", onSubmit: this.submitHandler },
                            u.a.createElement(
                              p.a,
                              { className: "mb-2" },
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "Telephone"),
                                u.a.createElement(g.a, {
                                  type: "number",
                                  placeholder: "Telephone",
                                  name: "telephone",
                                  value: this.state.telephone,
                                  onChange: this.changeHandler,
                                })
                              ),
                              u.a.createElement("hr", null),
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "Customer"),
                                u.a.createElement(g.a, {
                                  type: "text",
                                  placeholder: "Customer",
                                  name: "customer",
                                  value: this.state.customer,
                                  onChange: this.changeHandler,
                                })
                              ),
                              u.a.createElement("hr", null),
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "Customer Group"),
                                u.a.createElement(
                                  b.a,
                                  {
                                    type: "select",
                                    placeholder: "Select Type",
                                    name: "customergroup",
                                    value: this.state.customergroup,
                                    onChange: this.changeHandler,
                                  },
                                  u.a.createElement(
                                    "option",
                                    { value: "default" },
                                    "Default"
                                  ),
                                  u.a.createElement(
                                    "option",
                                    { value: "2" },
                                    "2"
                                  ),
                                  u.a.createElement(
                                    "option",
                                    { value: "3" },
                                    "3"
                                  )
                                )
                              ),
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "FirstName"),
                                u.a.createElement(g.a, {
                                  type: "text",
                                  placeholder: "FirstName",
                                  name: "firstname",
                                  value: this.state.firstname,
                                  onChange: this.changeHandler,
                                })
                              ),
                              u.a.createElement("hr", null),
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "LastName"),
                                u.a.createElement(g.a, {
                                  type: "text",
                                  placeholder: "LastName",
                                  name: "lastname",
                                  value: this.state.lastname,
                                  onChange: this.changeHandler,
                                })
                              ),
                              u.a.createElement("hr", null),
                              u.a.createElement(
                                h.a,
                                { lg: "12", md: "12", className: "mb-2" },
                                u.a.createElement(E.a, null, "Email"),
                                u.a.createElement(g.a, {
                                  type: "email",
                                  placeholder: "Email",
                                  name: "email",
                                  value: this.state.email,
                                  onChange: this.changeHandler,
                                })
                              ),
                              u.a.createElement("hr", null)
                            ),
                            u.a.createElement(
                              p.a,
                              null,
                              u.a.createElement(
                                v.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1 right",
                                },
                                "Continue"
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
          })(m.Component));
      t.a = y;
    },
    1332: function (e, t, a) {
      "use strict";
      var n = a(31),
        l = a(45),
        r = a(11),
        s = a(12),
        c = a(14),
        m = a(13),
        u = a(1),
        o = a.n(u),
        i = a(823),
        d = a(826),
        p = a(834),
        h = a(821),
        E = a(822),
        g = a(883),
        b = a(832),
        v = a(199),
        y = a(835),
        f = a(813),
        N = (a(861), a(859), a(22), a(830), a(1008)),
        C = a(910),
        H = a(1333),
        S = (function (e) {
          Object(c.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var s;
            return (
              Object(r.a)(this, a),
              ((s = t.call(this, e)).onChangeHandler = function (e) {
                s.setState({ selectedFile: e.target.files[0] }),
                  s.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (s.changeHandler1 = function (e) {
                s.setState({ status: e.target.value });
              }),
              (s.changeHandler = function (e) {
                s.setState(Object(l.a)({}, e.target.name, e.target.value));
              }),
              (s.handleremove = function (e) {
                var t = Object(n.a)(s.state.inputlist);
                t.splice(e, 1), s.setState({ inputlist: t });
              }),
              (s.handleinputchange = function (e, t) {
                var a = e.target,
                  l = a.name,
                  r = a.value,
                  c = Object(n.a)(s.state.inputlist);
                (c[t][l] = r),
                  s.setState({ inputlist: c }),
                  console.log(s.state.inputlist);
              }),
              (s.handleClick = function () {
                s.setState({
                  inputlist: [].concat(Object(n.a)(s.state.inputlist), [
                    { selected: s.state.myvalue, attribute: "", quantity: "" },
                  ]),
                });
              }),
              (s.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", s.state.name),
                  t.append("sortorder", s.state.sortorder),
                  t.append("quantity", s.state.quantity),
                  t.append("size", s.state.size),
                  t.append("required", s.state.required),
                  t.append("desc", s.state.desc),
                  t.append("quant", s.state.quant),
                  t.append("optValue", s.state.optValue),
                  t.append("opValue", s.state.opValue),
                  t.append("status", s.state.status),
                  t.append("productName", s.state.productName),
                  t.append("quant", s.state.quant),
                  null !== s.state.selectedFile &&
                    t.append(
                      "brand_img",
                      s.state.selectedFile,
                      s.state.selectedName
                    );
              }),
              (s.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                brand_img: "",
                quantity: "",
                size: "",
                required: "",
                quant: "",
                optValue: "",
                opValue: "",
                status: "",
                inputlist: [{ selected: "", attribute: "", quantity: "" }],
              }),
              s
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      i.a,
                      null,
                      o.a.createElement(
                        d.a,
                        null,
                        o.a.createElement(
                          p.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          o.a.createElement(
                            h.a,
                            null,
                            o.a.createElement(
                              E.a,
                              { lg: "12", md: "12" },
                              o.a.createElement(
                                g.a,
                                { bordered: !0 },
                                o.a.createElement(
                                  "thead",
                                  null,
                                  o.a.createElement(
                                    "tr",
                                    null,
                                    o.a.createElement("th", null, "Product"),
                                    o.a.createElement("th", null, "Model"),
                                    o.a.createElement("th", null, "Quantity"),
                                    o.a.createElement("th", null, "Unit Price"),
                                    o.a.createElement("th", null, "Total"),
                                    o.a.createElement("th", null, "Action")
                                  )
                                ),
                                o.a.createElement(
                                  "tbody",
                                  null,
                                  this.state.inputlist.map(function (t, a) {
                                    return o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        "tr",
                                        { key: a },
                                        o.a.createElement(
                                          "td",
                                          { className: "p-0" },
                                          "Vim Bar Tum Scruber-weght 250g"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Detergent"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          o.a.createElement(b.a, {
                                            type: "text",
                                            placeholder: "Quantity",
                                            name: "name",
                                            value: "1",
                                            onChange: e.changeHandler,
                                          })
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 26.00"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 26.00"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          0 !== e.state.inputlist.length &&
                                            o.a.createElement(
                                              v.a,
                                              {
                                                color: "danger",
                                                className: "mr-1 mt-2",
                                                style: { height: "40px" },
                                                onClick: function () {
                                                  return e.handleremove(a);
                                                },
                                              },
                                              "-"
                                            )
                                        )
                                      )
                                    );
                                  })
                                )
                              )
                            )
                          )
                        ),
                        o.a.createElement(
                          "div",
                          null,
                          o.a.createElement(
                            C.a,
                            null,
                            o.a.createElement(
                              N.Tabs,
                              {
                                onSelect: function (e, t) {
                                  return console.log(t + " selected");
                                },
                              },
                              o.a.createElement(
                                N.Tab,
                                { label: "Product" },
                                o.a.createElement(
                                  "div",
                                  null,
                                  o.a.createElement(
                                    i.a,
                                    null,
                                    o.a.createElement(
                                      "div",
                                      { style: { color: "#000000" } },
                                      "Add Products(s)"
                                    ),
                                    o.a.createElement(
                                      d.a,
                                      null,
                                      o.a.createElement(
                                        p.a,
                                        {
                                          className: "m-1",
                                          onSubmit: this.submitHandler,
                                        },
                                        o.a.createElement(
                                          h.a,
                                          { className: "mb-2" },
                                          o.a.createElement(
                                            E.a,
                                            {
                                              lg: "12",
                                              md: "12",
                                              className: "mb-2",
                                            },
                                            o.a.createElement(
                                              y.a,
                                              null,
                                              "Choose Product"
                                            ),
                                            o.a.createElement(
                                              f.a,
                                              {
                                                type: "select",
                                                placeholder: "Select Type",
                                                name: "type",
                                                value: this.state.productlist,
                                                onChange: this.changeHandler,
                                              },
                                              o.a.createElement(
                                                "option",
                                                { value: "tomato" },
                                                "tomato"
                                              ),
                                              o.a.createElement(
                                                "option",
                                                { value: "onion" },
                                                "onion"
                                              ),
                                              o.a.createElement(
                                                "option",
                                                { value: "apple" },
                                                "apple"
                                              )
                                            )
                                          ),
                                          o.a.createElement(
                                            E.a,
                                            {
                                              lg: "12",
                                              md: "12",
                                              className: "mb-2",
                                            },
                                            o.a.createElement(
                                              y.a,
                                              null,
                                              "Quantity"
                                            ),
                                            o.a.createElement(b.a, {
                                              type: "text",
                                              placeholder: "Quantity",
                                              name: "quant",
                                              value: this.state.quant,
                                              onChange: this.changeHandler,
                                            })
                                          ),
                                          o.a.createElement("hr", null)
                                        ),
                                        o.a.createElement(
                                          h.a,
                                          null,
                                          o.a.createElement(
                                            "div",
                                            {
                                              style: {
                                                textAlign: "right",
                                                width: "100%",
                                              },
                                            },
                                            o.a.createElement(
                                              v.a,
                                              {
                                                color: "primary",
                                                className: "mr-1 mb-1",
                                                onClick: this.handleClick,
                                              },
                                              "Add Product"
                                            )
                                          )
                                        ),
                                        o.a.createElement(
                                          h.a,
                                          null,
                                          o.a.createElement(
                                            E.a,
                                            { className: "rrr" },
                                            o.a.createElement(
                                              v.a,
                                              {
                                                color: "secondary",
                                                type: "submit",
                                                className: "mr-1 mb-1",
                                              },
                                              "Back"
                                            ),
                                            o.a.createElement(
                                              v.a,
                                              {
                                                color: "primary",
                                                type: "submit",
                                                className: "mr-1 mb-1 ",
                                              },
                                              "Continue"
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                              o.a.createElement(
                                N.Tab,
                                { label: "Variant" },
                                o.a.createElement(H.a, null)
                              )
                            ),
                            o.a.createElement("hr", null)
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
        })(u.Component);
      t.a = S;
    },
    1333: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return y;
      });
      var n = a(45),
        l = a(11),
        r = a(12),
        s = a(14),
        c = a(13),
        m = a(1),
        u = a.n(m),
        o = a(823),
        i = a(826),
        d = a(834),
        p = a(821),
        h = a(822),
        E = a(835),
        g = a(813),
        b = a(832),
        v = a(199),
        y = (function (e) {
          Object(s.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
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
                e.preventDefault();
                var t = new FormData();
                t.append("name", r.state.name),
                  t.append("productName", r.state.productName),
                  t.append("quantity", r.state.quantity),
                  t.append("sortorder", r.state.sortorder);
              }),
              (r.state = {
                name: "",
                productlist: "",
                quantity: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
              }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      o.a,
                      null,
                      u.a.createElement(
                        "div",
                        { style: { color: "#000000" } },
                        "Add Variant(s)"
                      ),
                      u.a.createElement(
                        i.a,
                        null,
                        u.a.createElement(
                          d.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            p.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Choose Variant"),
                              u.a.createElement(
                                g.a,
                                {
                                  type: "select",
                                  placeholder: "Select Type",
                                  name: "type",
                                  value: this.state.productlist,
                                  onChange: this.changeHandler,
                                },
                                u.a.createElement(
                                  "option",
                                  { value: "1" },
                                  "1"
                                ),
                                u.a.createElement(
                                  "option",
                                  { value: "onion" },
                                  "2"
                                ),
                                u.a.createElement(
                                  "option",
                                  { value: "apple" },
                                  "3"
                                )
                              )
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Quantity"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "Quantity",
                                name: "quantity",
                                value: this.state.quantity,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement("hr", null)
                          ),
                          u.a.createElement(
                            p.a,
                            null,
                            u.a.createElement(
                              "div",
                              { style: { textAlign: "right", width: "100%" } },
                              u.a.createElement(
                                v.a,
                                { color: "primary", className: "mr-1 mb-1" },
                                "Add Variant"
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
    },
    1334: function (e, t, a) {
      "use strict";
      var n = a(45),
        l = a(11),
        r = a(12),
        s = a(14),
        c = a(13),
        m = a(1),
        u = a.n(m),
        o = a(823),
        i = a(826),
        d = a(834),
        p = a(821),
        h = a(822),
        E = a(835),
        g = a(813),
        b = a(832),
        v = a(199),
        y = (a(861), a(859), a(870), a(22), a(830)),
        f = (function (e) {
          Object(s.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
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
                e.preventDefault();
                var t = new FormData();
                t.append("name", r.state.name),
                  t.append("firstname", r.state.firstname),
                  t.append("lastname", r.state.lastname),
                  t.append("sortorder", r.state.sortorder),
                  t.append("status", r.state.status),
                  null !== r.state.selectedFile &&
                    t.append(
                      "brand_img",
                      r.state.selectedFile,
                      r.state.selectedName
                    ),
                  y.a
                    .post("/addbrand", t)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push(
                          "/app/freshlist/house/HouseProductList"
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (r.state = {
                name: "",
                firstname: "",
                lastname: "",
                email: "",
                company: "",
                adreess: "",
                address1: "",
                city: "",
                postCode: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                brand_img: "",
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
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      o.a,
                      null,
                      u.a.createElement(
                        i.a,
                        null,
                        u.a.createElement(
                          d.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            p.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Choose Address"),
                              u.a.createElement(
                                g.a,
                                {
                                  type: "select",
                                  placeholder: "Select Type",
                                  name: "address",
                                  value: this.state.address,
                                  onChange: this.changeHandler,
                                },
                                u.a.createElement(
                                  "option",
                                  { value: "default" },
                                  "...None..."
                                ),
                                u.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                u.a.createElement("option", { value: "3" }, "3")
                              )
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "FirstName"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "FirstName",
                                name: "firstname",
                                value: this.state.firstname,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement("hr", null),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "LastName"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "LastName",
                                name: "lastname",
                                value: this.state.lastname,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement("hr", null),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Address"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "Address",
                                name: "address1",
                                value: this.state.address1,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "City"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "City",
                                name: "city",
                                value: this.state.city,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "PostCode"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "PostCode",
                                name: "postCode",
                                value: this.state.postCode,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          u.a.createElement(
                            p.a,
                            null,
                            u.a.createElement(
                              v.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1 right",
                              },
                              "Continue"
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
      t.a = f;
    },
    1335: function (e, t, a) {
      "use strict";
      var n = a(45),
        l = a(11),
        r = a(12),
        s = a(14),
        c = a(13),
        m = a(1),
        u = a.n(m),
        o = a(823),
        i = a(826),
        d = a(834),
        p = a(821),
        h = a(822),
        E = a(835),
        g = a(813),
        b = a(832),
        v = a(199),
        y = (a(861), a(859), a(870), a(22), a(830)),
        f = (function (e) {
          Object(s.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
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
                e.preventDefault();
                var t = new FormData();
                t.append("name", r.state.name),
                  t.append("firstname", r.state.firstname),
                  t.append("lastname", r.state.lastname),
                  t.append("sortorder", r.state.sortorder),
                  t.append("status", r.state.status),
                  null !== r.state.selectedFile &&
                    t.append(
                      "brand_img",
                      r.state.selectedFile,
                      r.state.selectedName
                    ),
                  y.a
                    .post("/addbrand", t)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push(
                          "/app/freshlist/house/HouseProductList"
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (r.state = {
                name: "",
                firstname: "",
                lastname: "",
                email: "",
                company: "",
                adreess: "",
                address1: "",
                city: "",
                postCode: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                brand_img: "",
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
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      o.a,
                      null,
                      u.a.createElement(
                        i.a,
                        null,
                        u.a.createElement(
                          d.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            p.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Choose Address"),
                              u.a.createElement(
                                g.a,
                                {
                                  type: "select",
                                  placeholder: "Select Type",
                                  name: "address",
                                  value: this.state.address,
                                  onChange: this.changeHandler,
                                },
                                u.a.createElement(
                                  "option",
                                  { value: "default" },
                                  "...None..."
                                ),
                                u.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                u.a.createElement("option", { value: "3" }, "3")
                              )
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "FirstName"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "FirstName",
                                name: "firstname",
                                value: this.state.firstname,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement("hr", null),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "LastName"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "LastName",
                                name: "lastname",
                                value: this.state.lastname,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement("hr", null),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "Address"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "Address",
                                name: "address1",
                                value: this.state.address1,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "City"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "City",
                                name: "city",
                                value: this.state.city,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(E.a, null, "PostCode"),
                              u.a.createElement(b.a, {
                                type: "text",
                                placeholder: "PostCode",
                                name: "postCode",
                                value: this.state.postCode,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          u.a.createElement(
                            p.a,
                            null,
                            u.a.createElement(
                              v.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1 right",
                              },
                              "Continue"
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
      t.a = f;
    },
    1507: function (e, t, a) {
      "use strict";
      var n = a(31),
        l = a(45),
        r = a(11),
        s = a(12),
        c = a(14),
        m = a(13),
        u = a(1),
        o = a.n(u),
        i = a(823),
        d = a(826),
        p = a(834),
        h = a(821),
        E = a(822),
        g = a(883),
        b = a(832),
        v = a(835),
        y = a(813),
        f = a(841),
        N = a(199),
        C =
          (a(22),
          a(830),
          a(874),
          a(1008),
          a(1197),
          u.Component,
          a(1333),
          (function (e) {
            Object(c.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var s;
              return (
                Object(r.a)(this, a),
                ((s = t.call(this, e)).onChangeHandler = function (e) {
                  s.setState({ selectedFile: e.target.files[0] }),
                    s.setState({ selectedName: e.target.files[0].name }),
                    console.log(e.target.files[0]);
                }),
                (s.changeHandler1 = function (e) {
                  s.setState({ status: e.target.value });
                }),
                (s.changeHandler = function (e) {
                  s.setState(Object(l.a)({}, e.target.name, e.target.value));
                }),
                (s.handleremove = function (e) {
                  var t = Object(n.a)(s.state.inputlist);
                  t.splice(e, 1), s.setState({ inputlist: t });
                }),
                (s.handleinputchange = function (e, t) {
                  var a = e.target,
                    l = a.name,
                    r = a.value,
                    c = Object(n.a)(s.state.inputlist);
                  (c[t][l] = r),
                    s.setState({ inputlist: c }),
                    console.log(s.state.inputlist);
                }),
                (s.handleClick = function () {
                  s.setState({
                    inputlist: [].concat(Object(n.a)(s.state.inputlist), [
                      {
                        selected: s.state.myvalue,
                        attribute: "",
                        quantity: "",
                      },
                    ]),
                  });
                }),
                (s.submitHandler = function (e) {
                  e.preventDefault();
                  var t = new FormData();
                  t.append("name", s.state.name),
                    t.append("sortorder", s.state.sortorder),
                    t.append("quantity", s.state.quantity),
                    t.append("size", s.state.size),
                    t.append("required", s.state.required),
                    t.append("desc", s.state.desc),
                    t.append("quant", s.state.quant),
                    t.append("optValue", s.state.optValue),
                    t.append("opValue", s.state.opValue),
                    t.append("status", s.state.status),
                    t.append("productName", s.state.productName),
                    t.append("quant", s.state.quant);
                }),
                (s.state = {
                  name: "",
                  selectedFile: null,
                  selectedName: "",
                  sortorder: "",
                  desc: "",
                  brand_img: "",
                  quantity: "",
                  size: "",
                  required: "",
                  quant: "",
                  optValue: "",
                  opValue: "",
                  status: "",
                  inputlist: [{ selected: "", attribute: "", quantity: "" }],
                }),
                s
              );
            }
            return (
              Object(s.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        i.a,
                        null,
                        o.a.createElement(
                          d.a,
                          null,
                          o.a.createElement(
                            p.a,
                            { className: "m-1", onSubmit: this.submitHandler },
                            o.a.createElement(
                              h.a,
                              null,
                              o.a.createElement(
                                E.a,
                                { lg: "12", md: "12" },
                                o.a.createElement(
                                  g.a,
                                  { bordered: !0, className: "table" },
                                  o.a.createElement(
                                    "thead",
                                    null,
                                    o.a.createElement(
                                      "tr",
                                      { scope: "row" },
                                      o.a.createElement("th", null, "Product"),
                                      o.a.createElement("th", null, "Model"),
                                      o.a.createElement("th", null, "Quantity"),
                                      o.a.createElement(
                                        "th",
                                        null,
                                        "Unit Price"
                                      ),
                                      o.a.createElement("th", null, "Total")
                                    )
                                  ),
                                  o.a.createElement(
                                    "tbody",
                                    null,
                                    o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        "tr",
                                        { scope: "row" },
                                        o.a.createElement(
                                          "td",
                                          { className: "p-0" },
                                          "Vim Liquid Yellow Bottle -ML:750ml"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Detergent"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          o.a.createElement(b.a, {
                                            type: "text",
                                            placeholder: "Quantity",
                                            name: "name",
                                            value: "1",
                                            onChange: this.changeHandler,
                                          })
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 115.00"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 115.00"
                                        )
                                      ),
                                      o.a.createElement(
                                        "tr",
                                        { scope: "row" },
                                        o.a.createElement(
                                          "td",
                                          { className: "p-0" },
                                          "Vim Bar Tum Scruber-weght 250g"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Detergent"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          o.a.createElement(b.a, {
                                            type: "text",
                                            placeholder: "Quantity",
                                            name: "name",
                                            value: "1",
                                            onChange: this.changeHandler,
                                          })
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 26.00"
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          "Rs 26.00"
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          o.a.createElement(
                            "div",
                            null,
                            o.a.createElement(
                              p.a,
                              {
                                className: "m-1",
                                onSubmit: this.submitHandler,
                              },
                              o.a.createElement(
                                h.a,
                                { className: "mb-2" },
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(
                                    v.a,
                                    null,
                                    o.a.createElement(
                                      "span",
                                      { style: { color: "red" } },
                                      "*"
                                    ),
                                    "Shipping Method"
                                  ),
                                  o.a.createElement(
                                    y.a,
                                    {
                                      type: "select",
                                      placeholder: "Select Type",
                                      name: "customergroup",
                                    },
                                    o.a.createElement(
                                      "option",
                                      { value: "default" },
                                      "Free Shipping - 0.00"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "2" },
                                      "2"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "3" },
                                      "3"
                                    )
                                  )
                                ),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(
                                    v.a,
                                    null,
                                    o.a.createElement(
                                      "span",
                                      { style: { color: "red" } },
                                      "*"
                                    ),
                                    "Payment Method"
                                  ),
                                  o.a.createElement(
                                    y.a,
                                    {
                                      type: "select",
                                      placeholder: "Select Type",
                                      name: "customergroup",
                                    },
                                    o.a.createElement(
                                      "option",
                                      { value: "default" },
                                      "Cash On Delivery"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "2" },
                                      "Phone Pay"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "3" },
                                      "Google Pay"
                                    )
                                  )
                                ),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(v.a, null, "Coupon"),
                                  o.a.createElement(b.a, {
                                    type: "text",
                                    placeholder: "Coupon",
                                    name: "Coupon",
                                  })
                                ),
                                o.a.createElement("hr", null),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(v.a, null, "Variant"),
                                  o.a.createElement(b.a, {
                                    type: "text",
                                    placeholder: "Variant",
                                    name: "Variant",
                                  })
                                ),
                                o.a.createElement("hr", null),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(v.a, null, "Reward"),
                                  o.a.createElement(b.a, {
                                    type: "text",
                                    placeholder: "Reward",
                                    name: "Reward",
                                  })
                                ),
                                o.a.createElement("hr", null),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(v.a, null, "Order Status"),
                                  o.a.createElement(
                                    y.a,
                                    {
                                      type: "select",
                                      placeholder: "Select Type",
                                      name: "customergroup",
                                    },
                                    o.a.createElement(
                                      "option",
                                      { value: "default" },
                                      "Delivery"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "2" },
                                      "Pending"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "3" },
                                      "Appoved"
                                    )
                                  )
                                ),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(
                                    f.a,
                                    null,
                                    o.a.createElement(
                                      v.a,
                                      { for: "exampleText" },
                                      "Comment"
                                    ),
                                    o.a.createElement(b.a, {
                                      id: "exampleText",
                                      name: "text",
                                      type: "textarea",
                                      placeholder: "comment here",
                                    })
                                  )
                                ),
                                o.a.createElement(
                                  E.a,
                                  { lg: "12", md: "12", className: "mb-2" },
                                  o.a.createElement(v.a, null, "Affiliate"),
                                  o.a.createElement(b.a, {
                                    type: "text",
                                    placeholder: "Affiliate",
                                    name: "Reward",
                                  })
                                )
                              ),
                              o.a.createElement(
                                h.a,
                                null,
                                o.a.createElement(
                                  "div",
                                  { className: "text-right w-100" },
                                  o.a.createElement(
                                    N.a,
                                    {
                                      color: "primary",
                                      type: "submit",
                                      className: "mr-1 mb-1",
                                    },
                                    "Save"
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
          })(u.Component));
      t.a = C;
    },
    830: function (e, t, a) {
      "use strict";
      var n = a(44),
        l = a.n(n).a.create({ baseURL: "http://13.234.217.170:5000/" });
      t.a = l;
    },
    859: function (e, t, a) {},
    861: function (e, t, a) {},
    874: function (e, t, a) {},
  },
]);
//# sourceMappingURL=24.73de15a4.chunk.js.map
