(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [204],
  {
    2285: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = a(11),
        n = a(12),
        r = a(14),
        c = a(13),
        s = a(1),
        i = a.n(s),
        l = a(823),
        d = a(821),
        m = a(822),
        p = a(199),
        u = a(826),
        b = a(834),
        h = (a(920), a(877)),
        y = a(878),
        f = a(870),
        E = a.n(f),
        v = (a(861), a(859), a(830)),
        N = (a(22), a(843)),
        S = a.n(N),
        g = a(62),
        k = (function (e) {
          Object(r.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).onEditorStateChange = function (e) {
                n.setState({
                  editorState: e,
                  description: E()(
                    Object(h.convertToRaw)(e.getCurrentContent())
                  ),
                });
              }),
              (n.submitHandler = function (e) {
                e.preventDefault(),
                  v.a
                    .post("/addprivacy_policy", n.state)
                    .then(function (e) {
                      console.log(e),
                        n.props.history.push(
                          "/app/freshlist/privacyPolicy/privacyPolicy"
                        ),
                        S()("Good job!", "You clicked the button!", "success");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (n.state = {
                description: "",
                editorState: h.EditorState.createEmpty(),
              }),
              n
            );
          }
          return (
            Object(n.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    l.a,
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
                          "Add New Privacy Policy"
                        )
                      ),
                      i.a.createElement(
                        m.a,
                        null,
                        i.a.createElement(g.b, {
                          render: function (e) {
                            var t = e.history;
                            return i.a.createElement(
                              p.a,
                              {
                                className: " btn btn-danger float-right",
                                onClick: function () {
                                  return t.push(
                                    "/app/freshlist/privacyPolicy/privacyPolicy"
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
                      u.a,
                      null,
                      i.a.createElement(
                        b.a,
                        { onSubmit: this.submitHandler },
                        i.a.createElement(y.Editor, {
                          toolbarClassName: "demo-toolbar-absolute",
                          wrapperClassName: "demo-wrapper",
                          editorClassName: "demo-editor",
                          editorState: this.state.editorState,
                          onEditorStateChange: this.onEditorStateChange,
                          toolbar: {
                            options: [
                              "inline",
                              "blockType",
                              "fontSize",
                              "fontFamily",
                            ],
                            inline: {
                              options: [
                                "bold",
                                "italic",
                                "underline",
                                "strikethrough",
                                "monospace",
                              ],
                              bold: { className: "bordered-option-classname" },
                              italic: {
                                className: "bordered-option-classname",
                              },
                              underline: {
                                className: "bordered-option-classname",
                              },
                              strikethrough: {
                                className: "bordered-option-classname",
                              },
                              code: { className: "bordered-option-classname" },
                            },
                            blockType: {
                              className: "bordered-option-classname",
                            },
                            fontSize: {
                              className: "bordered-option-classname",
                            },
                            fontFamily: {
                              className: "bordered-option-classname",
                            },
                          },
                        }),
                        i.a.createElement("br", null),
                        i.a.createElement(
                          p.a,
                          { color: "primary" },
                          "Add New Policy"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component);
      t.default = k;
    },
    830: function (e, t, a) {
      "use strict";
      var o = a(44),
        n = a.n(o).a.create({ baseURL: "http://35.154.225.110:5000/" });
      t.a = n;
    },
    859: function (e, t, a) {},
  },
]);
//# sourceMappingURL=204.eb96a96d.chunk.js.map
