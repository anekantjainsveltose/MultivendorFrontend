(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [209],
  {
    2245: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(11),
        o = a(12),
        r = a(14),
        s = a(13),
        i = a(1),
        c = a.n(i),
        l = a(823),
        d = a(821),
        m = a(822),
        u = a(199),
        p = a(826),
        b = a(834),
        h = (a(920), a(877)),
        f = a(878),
        E = a(870),
        C = a.n(E),
        N = (a(861), a(859), a(830)),
        S = (a(22), a(843)),
        y = a.n(S),
        g = a(62),
        k = (function (e) {
          Object(r.a)(a, e);
          var t = Object(s.a)(a);
          function a(e) {
            var o;
            return (
              Object(n.a)(this, a),
              ((o = t.call(this, e)).onEditorStateChange = function (e) {
                o.setState({
                  editorState: e,
                  description: C()(
                    Object(h.convertToRaw)(e.getCurrentContent())
                  ),
                });
              }),
              (o.submitHandler = function (e) {
                e.preventDefault(),
                  N.a
                    .post("/addTermscondition", o.state)
                    .then(function (e) {
                      console.log(e),
                        o.props.history.push(
                          "/app/termsAndCondition/tAndCList"
                        ),
                        y()("Good job!", "You clicked the button!", "success");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (o.state = {
                description: "",
                editorState: h.EditorState.createEmpty(),
              }),
              o
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    l.a,
                    null,
                    c.a.createElement(
                      d.a,
                      { className: "m-2" },
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(
                          "h1",
                          { "col-sm-6": !0, className: "float-left" },
                          "Add New Term And Condition"
                        )
                      ),
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(g.b, {
                          render: function (e) {
                            var t = e.history;
                            return c.a.createElement(
                              u.a,
                              {
                                className: " btn btn-danger float-right",
                                onClick: function () {
                                  return t.push(
                                    "/app/freshlist/termsAndCondition/TAndCList"
                                  );
                                },
                              },
                              "Back"
                            );
                          },
                        })
                      )
                    ),
                    c.a.createElement(
                      p.a,
                      null,
                      c.a.createElement(
                        b.a,
                        { onSubmit: this.submitHandler },
                        c.a.createElement(f.Editor, {
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
                        c.a.createElement("br", null),
                        c.a.createElement(
                          u.a,
                          { color: "primary" },
                          "Add New T&C"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component);
      t.default = k;
    },
    830: function (e, t, a) {
      "use strict";
      var n = a(44),
        o = a.n(n).a.create({ baseURL: "http://13.234.217.170:5000/" });
      t.a = o;
    },
    859: function (e, t, a) {},
  },
]);
//# sourceMappingURL=209.efec2152.chunk.js.map
