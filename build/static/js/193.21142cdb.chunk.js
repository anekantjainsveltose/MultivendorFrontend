(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [193],
  {
    2182: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(45),
        r = a(11),
        i = a(12),
        l = a(14),
        s = a(13),
        c = a(1),
        o = a.n(c),
        u = a(821),
        d = a(822),
        m = a(823),
        p = a(826),
        f = a(819),
        g = a(599),
        h = a(596),
        b = a(185),
        v = a(832),
        E = a(199),
        w = (a(44), a(830), a(104)),
        z = a(838),
        S = a(322),
        y = a(319),
        N = a(275),
        P = a(22),
        R =
          (a(836),
          a(831),
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(s.a)(a);
            function a() {
              var e, i;
              Object(r.a)(this, a);
              for (
                var l = arguments.length, s = new Array(l), c = 0;
                c < l;
                c++
              )
                s[c] = arguments[c];
              return (
                ((i = t.call.apply(t, [this].concat(s))).state = {
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
                      headerName: "Date",
                      field: "createdAt",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.createdAt)
                        );
                      },
                    },
                    {
                      headerName: "Product Name",
                      field: "productname",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.productname)
                        );
                      },
                    },
                    {
                      headerName: "Hubs",
                      field: "hubs",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.hubs)
                        );
                      },
                    },
                    {
                      headerName: "Total Sale",
                      field: "totalsale",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.totalsale)
                        );
                      },
                    },
                    {
                      headerName: "Completed Status",
                      field: "status",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("span", null, e.data.status)
                        );
                      },
                    },
                    ((e = { headerName: "Actions", field: "sortorder" }),
                    Object(n.a)(e, "field", "transactions"),
                    Object(n.a)(e, "width", 150),
                    Object(n.a)(e, "cellRendererFramework", function (e) {
                      return o.a.createElement(
                        "div",
                        { className: "actions cursor-pointer" },
                        o.a.createElement(S.a, {
                          className: "mr-50",
                          size: "25px",
                          color: "green",
                          onClick: function () {
                            return P.a.push(
                              "/app/freshlist/customer/viewCustomer/".concat(
                                e.data._id
                              )
                            );
                          },
                        }),
                        o.a.createElement(y.a, {
                          className: "mr-50",
                          size: "25px",
                          color: "blue",
                          onClick: function () {
                            return P.a.push(
                              "/app/freshlist/customer/editCustomer/".concat(
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
              Object(i.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      a = t.rowData,
                      n = t.columnDefs,
                      r = t.defaultColDef;
                    return (
                      console.log(a),
                      o.a.createElement(
                        u.a,
                        { className: "app-user-list" },
                        o.a.createElement(d.a, { sm: "12" }),
                        o.a.createElement(
                          d.a,
                          { sm: "12" },
                          o.a.createElement(
                            m.a,
                            null,
                            o.a.createElement(
                              u.a,
                              { className: "m-2" },
                              o.a.createElement(
                                d.a,
                                null,
                                o.a.createElement(
                                  "h1",
                                  { sm: "6", className: "float-left" },
                                  "Total Sales"
                                )
                              )
                            ),
                            o.a.createElement(
                              p.a,
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
                                          f.a,
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
                                            o.a.createElement(N.a, {
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
                                            onChange: function (t) {
                                              return e.updateSearchQuery(
                                                t.target.value
                                              );
                                            },
                                            value: this.state.value,
                                          })
                                        ),
                                        o.a.createElement(
                                          "div",
                                          { className: "export-btn" },
                                          o.a.createElement(
                                            E.a.Ripple,
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
                                      w.a.Consumer,
                                      null,
                                      function (t) {
                                        return o.a.createElement(
                                          z.AgGridReact,
                                          {
                                            gridOptions: {},
                                            rowSelection: "multiple",
                                            defaultColDef: r,
                                            columnDefs: n,
                                            rowData: a,
                                            onGridReady: e.onGridReady,
                                            colResizeDefault: "shift",
                                            animateRows: !0,
                                            floatingFilter: !1,
                                            pagination: !0,
                                            paginationPageSize:
                                              e.state.paginationPageSize,
                                            pivotPanelShow: "always",
                                            enableRtl:
                                              "rtl" === t.state.direction,
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
              a
            );
          })(o.a.Component));
      t.default = R;
    },
    830: function (e, t, a) {
      "use strict";
      var n = a(44),
        r = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000/" });
      t.a = r;
    },
    831: function (e, t, a) {},
    832: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        i = a(17),
        l = a(19),
        s = a(1),
        c = a.n(s),
        o = a(2),
        u = a.n(o),
        d = a(5),
        m = a.n(d),
        p = a(4),
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
        g = {
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
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(i.a)(a)
              )),
              (a.focus = a.focus.bind(Object(i.a)(a))),
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
                i = e.type,
                l = e.bsSize,
                s = e.valid,
                o = e.invalid,
                u = e.tag,
                d = e.addon,
                g = e.plaintext,
                h = e.innerRef,
                b = Object(r.a)(e, f),
                v = ["radio", "checkbox"].indexOf(i) > -1,
                E = new RegExp("\\D", "g"),
                w = u || ("select" === i || "textarea" === i ? i : "input"),
                z = "form-control";
              g
                ? ((z += "-plaintext"), (w = u || "input"))
                : "file" === i
                ? (z += "-file")
                : "range" === i
                ? (z += "-range")
                : v && (z = d ? null : "form-check-input"),
                b.size &&
                  E.test(b.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = b.size),
                  delete b.size);
              var S = Object(p.mapToCssModules)(
                m()(
                  t,
                  o && "is-invalid",
                  s && "is-valid",
                  !!l && "form-control-" + l,
                  z
                ),
                a
              );
              return (
                ("input" === w || (u && "function" === typeof u)) &&
                  (b.type = i),
                b.children &&
                  !g &&
                  "select" !== i &&
                  "string" === typeof w &&
                  "select" !== w &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      i +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete b.children),
                c.a.createElement(
                  w,
                  Object(n.a)({}, b, {
                    ref: h,
                    className: S,
                    "aria-invalid": o,
                  })
                )
              );
            }),
            t
          );
        })(c.a.Component);
      (h.propTypes = g), (h.defaultProps = { type: "text" }), (t.a = h);
    },
  },
]);
//# sourceMappingURL=193.21142cdb.chunk.js.map