"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var OutTable = (function(_Component) {
  _inherits(OutTable, _Component);

  function OutTable(props) {
    _classCallCheck(this, OutTable);

    var _this = _possibleConstructorReturn(
      this,
      (OutTable.__proto__ || Object.getPrototypeOf(OutTable)).call(this, props)
    );

    _this.state = {};
    return _this;
  }

  _createClass(OutTable, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "table",
            { className: this.props.tableClassName },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                this.props.columns.map(function(c) {
                  return _react2.default.createElement(
                    "th",
                    {
                      key: c.key,
                      className:
                        c.key === -1 ? _this2.props.tableHeaderRowClass : ""
                    },
                    c.key === -1 ? "" : c.name
                  );
                })
              ),
              this.props.data.map(function(r, i) {
                return _react2.default.createElement(
                  "tr",
                  { key: i },
                  _react2.default.createElement(
                    "td",
                    { key: i, className: _this2.props.tableHeaderRowClass },
                    i
                  ),
                  _this2.props.columns.map(function(c) {
                    return _react2.default.createElement(
                      "td",
                      { key: c.key },
                      r[c.key]
                    );
                  })
                );
              })
            )
          )
        );
      }
    }
  ]);

  return OutTable;
})(_react.Component);

exports.default = OutTable;
