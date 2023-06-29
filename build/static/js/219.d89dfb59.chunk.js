(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [219],
  {
    2278: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(45),
        r = t(11),
        i = t(12),
        l = t(14),
        s = t(13),
        c = t(1),
        o = t.n(c),
        d = t(821),
        u = t(822),
        m = t(823),
        f = t(826),
        p = t(819),
        g = t(599),
        h = t(596),
        b = t(185),
        v = t(832),
        w = t(199),
        E = (t(44), t(104)),
        S = t(838),
        z = t(322),
        y = t(275),
        N = t(22),
        P =
          (t(836),
          t(831),
          (function (e) {
            Object(l.a)(t, e);
            var a = Object(s.a)(t);
            function t() {
              var e, i;
              Object(r.a)(this, t);
              for (
                var l = arguments.length, s = new Array(l), c = 0;
                c < l;
                c++
              )
                s[c] = arguments[c];
              return (
                ((i = a.call.apply(a, [this].concat(s))).state = {
                  rowData: [],
                  paginationPageSize: 20,
                  currenPageSize: "",
                  getPageSize: "",
                  defaultColDef: {
                    sortable: !0,
                    editable: !0,
                    resizable: !0,
                    suppressMenu: !0,
                  },
                  columnDefs: [
                    {
                      headerName: "S.No",
                      valueGetter: "node.rowIndex + 1",
                      field: "node.rowIndex + 1",
                      width: 150,
                      filter: !0,
                    },
                    {
                      headerName: "Name",
                      field: "subscriptions",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.subscriptions)
                        );
                      },
                    },
                    {
                      headerName: "Product Name",
                      field: "product",
                      filter: !0,
                      width: 190,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          o.a.createElement("span", null, e.data.product)
                        );
                      },
                    },
                    {
                      headerName: "How Many Day",
                      field: "validity",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.validity)
                        );
                      },
                    },
                    {
                      headerName: "How Many Orders Placed",
                      field: "orders",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.orders)
                        );
                      },
                    },
                    {
                      headerName: "How Many Remaining",
                      field: "remaining",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.remaining)
                        );
                      },
                    },
                    {
                      headerName: "Status",
                      field: "status",
                      filter: !0,
                      width: 150,
                      cellRendererFramework: function (e) {
                        return "Block" === e.value
                          ? o.a.createElement(
                              "div",
                              { className: "badge badge-pill badge-success" },
                              e.data.status
                            )
                          : "Unblock" === e.value
                          ? o.a.createElement(
                              "div",
                              { className: "badge badge-pill badge-warning" },
                              e.data.status
                            )
                          : null;
                      },
                    },
                    ((e = { headerName: "Actions", field: "sortorder" }),
                    Object(n.a)(e, "field", "transactions"),
                    Object(n.a)(e, "width", 150),
                    Object(n.a)(e, "cellRendererFramework", function (e) {
                      return o.a.createElement(
                        "div",
                        { className: "actions cursor-pointer" },
                        o.a.createElement(z.a, {
                          className: "mr-50",
                          size: "25px",
                          color: "green",
                          onClick: function () {
                            return N.a.push(
                              "/app/freshlist/subscriber/viewSubscriber/".concat(
                                e.data._id
                              )
                            );
                          },
                        })
                      );
                    }),
                    e),
                  ],
                }),
                (i.onGridReady = function (e) {
                  (i.gridApi = e.api),
                    (i.gridColumnApi = e.columnApi),
                    i.setState({
                      currenPageSize: i.gridApi.paginationGetCurrentPage() + 1,
                      getPageSize: i.gridApi.paginationGetPageSize(),
                      totalPages: i.gridApi.paginationGetTotalPages(),
                    });
                }),
                (i.updateSearchQuery = function (e) {
                  i.gridApi.setQuickFilter(e);
                }),
                (i.filterSize = function (e) {
                  i.gridApi &&
                    (i.gridApi.paginationSetPageSize(Number(e)),
                    i.setState({ currenPageSize: e, getPageSize: e }));
                }),
                i
              );
            }
            return (
              Object(i.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      a = this.state,
                      t = a.rowData,
                      n = a.columnDefs,
                      r = a.defaultColDef;
                    return (
                      console.log(t),
                      o.a.createElement(
                        d.a,
                        { className: "app-user-list" },
                        o.a.createElement(u.a, { sm: "12" }),
                        o.a.createElement(
                          u.a,
                          { sm: "12" },
                          o.a.createElement(
                            m.a,
                            null,
                            o.a.createElement(
                              d.a,
                              { className: "m-2" },
                              o.a.createElement(
                                u.a,
                                null,
                                o.a.createElement(
                                  "h1",
                                  { sm: "6", className: "float-left" },
                                  "SuggestedProducts"
                                )
                              )
                            ),
                            o.a.createElement(
                              f.a,
                              null,
                              null === this.state.rowData
                                ? null
                                : o.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "ag-theme-material w-100 my-2 ag-grid-table",
                                    },
                                    o.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex flex-wrap justify-content-between align-items-center",
                                      },
                                      o.a.createElement(
                                        "div",
                                        { className: "mb-1" },
                                        o.a.createElement(
                                          p.a,
                                          { className: "p-1 ag-dropdown" },
                                          o.a.createElement(
                                            g.a,
                                            { tag: "div" },
                                            this.gridApi
                                              ? this.state.currenPageSize
                                              : "" * this.state.getPageSize -
                                                  (this.state.getPageSize - 1),
                                            " ",
                                            "-",
                                            " ",
                                            this.state.rowData.length -
                                              this.state.currenPageSize *
                                                this.state.getPageSize >
                                              0
                                              ? this.state.currenPageSize *
                                                  this.state.getPageSize
                                              : this.state.rowData.length,
                                            " ",
                                            "of ",
                                            this.state.rowData.length,
                                            o.a.createElement(y.a, {
                                              className: "ml-50",
                                              size: 15,
                                            })
                                          ),
                                          o.a.createElement(
                                            h.a,
                                            { right: !0 },
                                            o.a.createElement(
                                              b.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(20);
                                                },
                                              },
                                              "20"
                                            ),
                                            o.a.createElement(
                                              b.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(50);
                                                },
                                              },
                                              "50"
                                            ),
                                            o.a.createElement(
                                              b.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(100);
                                                },
                                              },
                                              "100"
                                            ),
                                            o.a.createElement(
                                              b.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(134);
                                                },
                                              },
                                              "134"
                                            )
                                          )
                                        )
                                      ),
                                      o.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "d-flex flex-wrap justify-content-between mb-1",
                                        },
                                        o.a.createElement(
                                          "div",
                                          { className: "table-input mr-1" },
                                          o.a.createElement(v.a, {
                                            placeholder: "search...",
                                            onChange: function (a) {
                                              return e.updateSearchQuery(
                                                a.target.value
                                              );
                                            },
                                            value: this.state.value,
                                          })
                                        ),
                                        o.a.createElement(
                                          "div",
                                          { className: "export-btn" },
                                          o.a.createElement(
                                            w.a.Ripple,
                                            {
                                              color: "primary",
                                              onClick: function () {
                                                return e.gridApi.exportDataAsCsv();
                                              },
                                            },
                                            "Export as CSV"
                                          )
                                        )
                                      )
                                    ),
                                    o.a.createElement(
                                      E.a.Consumer,
                                      null,
                                      function (a) {
                                        return o.a.createElement(
                                          S.AgGridReact,
                                          {
                                            gridOptions: {},
                                            rowSelection: "multiple",
                                            defaultColDef: r,
                                            columnDefs: n,
                                            rowData: t,
                                            onGridReady: e.onGridReady,
                                            colResizeDefault: "shift",
                                            animateRows: !0,
                                            floatingFilter: !1,
                                            pagination: !0,
                                            paginationPageSize:
                                              e.state.paginationPageSize,
                                            pivotPanelShow: "always",
                                            enableRtl:
                                              "rtl" === a.state.direction,
                                          }
                                        );
                                      }
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
          })(o.a.Component));
      a.default = P;
    },
    831: function (e, a, t) {},
    832: function (e, a, t) {
      "use strict";
      var n = t(6),
        r = t(7),
        i = t(17),
        l = t(19),
        s = t(1),
        c = t.n(s),
        o = t(2),
        d = t.n(o),
        u = t(5),
        m = t.n(u),
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
        g = {
          children: d.a.node,
          type: d.a.string,
          size: d.a.oneOfType([d.a.number, d.a.string]),
          bsSize: d.a.string,
          valid: d.a.bool,
          invalid: d.a.bool,
          tag: f.tagPropType,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          plaintext: d.a.bool,
          addon: d.a.bool,
          className: d.a.string,
          cssModule: d.a.object,
        },
        h = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(i.a)(t)
              )),
              (t.focus = t.focus.bind(Object(i.a)(t))),
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
                i = e.type,
                l = e.bsSize,
                s = e.valid,
                o = e.invalid,
                d = e.tag,
                u = e.addon,
                g = e.plaintext,
                h = e.innerRef,
                b = Object(r.a)(e, p),
                v = ["radio", "checkbox"].indexOf(i) > -1,
                w = new RegExp("\\D", "g"),
                E = d || ("select" === i || "textarea" === i ? i : "input"),
                S = "form-control";
              g
                ? ((S += "-plaintext"), (E = d || "input"))
                : "file" === i
                ? (S += "-file")
                : "range" === i
                ? (S += "-range")
                : v && (S = u ? null : "form-check-input"),
                b.size &&
                  w.test(b.size) &&
                  (Object(f.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = b.size),
                  delete b.size);
              var z = Object(f.mapToCssModules)(
                m()(
                  a,
                  o && "is-invalid",
                  s && "is-valid",
                  !!l && "form-control-" + l,
                  S
                ),
                t
              );
              return (
                ("input" === E || (d && "function" === typeof d)) &&
                  (b.type = i),
                b.children &&
                  !g &&
                  "select" !== i &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(f.warnOnce)(
                    'Input with a type of "' +
                      i +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete b.children),
                c.a.createElement(
                  E,
                  Object(n.a)({}, b, {
                    ref: h,
                    className: z,
                    "aria-invalid": o,
                  })
                )
              );
            }),
            a
          );
        })(c.a.Component);
      (h.propTypes = g), (h.defaultProps = { type: "text" }), (a.a = h);
    },
  },
]);
//# sourceMappingURL=219.d89dfb59.chunk.js.map
