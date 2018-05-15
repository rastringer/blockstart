'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Robin\\programming\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      // Allow for loading screens
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  // Use web3 to convert Ether values to Wei
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:
                // Refresh page once a user has contributed etc
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                // Reset loading, value of contribution amount
                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (
        // Call to above onSubmit handler to prevent auto submission
        _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement('label', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
          value: this.state.value,
          onChange: function onChange(event) {
            return _this3.setState({ value: event.target.value });
          },
          label: 'ether',
          labelPosition: 'right',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, 'Contribute!'))
      );
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFDSjthQUFRLEFBQ0MsQUFDUDtvQkFGTSxBQUVRLEFBQ2Q7QUFDQTtlQUpNLEEsQUFJRztBQUpILEFBQ04sYSxBQU1GOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRUE7O0FBSEcsMkJBR1Esd0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0IsQUFFckM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBTHRCLEFBS1QsQUFBYyxBQUErQjs7Z0NBTHBDO2dDQUFBO3VCQVFrQixjQUFBLEFBQUssSUFSdkIsQUFRa0IsQUFBUzs7bUJBQTFCO0FBUkQsb0NBQUE7Z0NBQUE7Z0NBU0MsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7QUFDQTt5QkFBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWmhDLEFBU0MsQUFBbUMsQUFHaEMsQUFBbUM7QUFISCxBQUN2QyxpQkFESTs7bUJBS047QUFDQTsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFmbEMsQUFlTCxBQUE2QztnQ0FmeEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBaUJQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBakJ2QixBQWlCUCxBQUFjLEFBQW9COzttQkFHcEM7O0FBQ0E7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FyQnZCLEFBcUJULEFBQWMsQUFBeUI7O21CQXJCOUI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkF3QkY7bUJBQ1A7O0FBQ0U7QUFDQTt3QkFBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7c0JBQW5EO3dCQUFBLEFBQ0E7QUFEQTsyQkFDQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2lCQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO29CQUFVLHlCQUFBO21CQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7aUJBSEYsQUFHUSxBQUNOO3lCQUpGLEFBSWdCOztzQkFKaEI7d0JBSEYsQUFDQSxBQUVFLEFBUUY7QUFSRTtBQUNFLDZCQU9KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtzQkFBbEQ7d0JBWEEsQUFXQSxBQUNBO0FBREE7NEJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO3NCQUFwQzt3QkFBQTtBQUFBO1dBZEYsQUFFRSxBQVlBLEFBS0g7Ozs7OztBQXBEMEIsQSxBQXVEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUm9iaW4vcHJvZ3JhbW1pbmcva2lja3N0YXJ0In0=