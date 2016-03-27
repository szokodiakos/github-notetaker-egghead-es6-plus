webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(159);

	var _routes = __webpack_require__(216);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: _reactRouter.hashHistory }), document.getElementById('app'));

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(159);

	var _App = __webpack_require__(217);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(218);

	var _Home2 = _interopRequireDefault(_Home);

	var _Profile = __webpack_require__(219);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.Route, { path: 'profile/:username', component: _Profile2.default }),
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default })
	);

	exports.default = routes;

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "main-container" },
	        _react2.default.createElement(
	          "nav",
	          { className: "navbar navbar-default", role: "navigation" },
	          _react2.default.createElement(
	            "div",
	            { className: "col-sm-7 col-sm-offset-2", style: { marginTop: 15 } },
	            "MENU"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	App.propTypes = {
	  children: _react2.default.PropTypes.element.isRequired
	};

	exports.default = App;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "h2",
	        { className: "text-center" },
	        "Search By Github Username Above"
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	var _UserProfile = __webpack_require__(220);

	var _UserProfile2 = _interopRequireDefault(_UserProfile);

	var _Repos = __webpack_require__(221);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Notes = __webpack_require__(222);

	var _Notes2 = _interopRequireDefault(_Notes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);

	  function Profile() {
	    _classCallCheck(this, Profile);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this));

	    _this.state = {
	      notes: ['note1', 'note2'],
	      bio: {
	        name: 'Dude'
	      },
	      repos: ['repo1', 'repo2']
	    };
	    return _this;
	  }

	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(_UserProfile2.default, { username: this.props.params.username, bioData: this.state.bio })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(_Repos2.default, { reposData: this.state.repos })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(_Notes2.default, { notesData: this.state.notes })
	        )
	      );
	    }
	  }]);

	  return Profile;
	}(_react2.default.Component);

	Profile.propTypes = {
	  params: _react2.default.PropTypes.object.isRequired
	};

	exports.default = Profile;

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserProfile = function (_React$Component) {
	  _inherits(UserProfile, _React$Component);

	  function UserProfile() {
	    _classCallCheck(this, UserProfile);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UserProfile).apply(this, arguments));
	  }

	  _createClass(UserProfile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'User Profile'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Username: ',
	          this.props.username
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Bio: ',
	          this.props.bio.name
	        )
	      );
	    }
	  }]);

	  return UserProfile;
	}(_react2.default.Component);

	UserProfile.propTypes = {
	  username: _react2.default.PropTypes.string,
	  bio: _react2.default.PropTypes.object
	};

	exports.default = UserProfile;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repos = function (_React$Component) {
	  _inherits(Repos, _React$Component);

	  function Repos() {
	    _classCallCheck(this, Repos);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Repos).apply(this, arguments));
	  }

	  _createClass(Repos, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'Repos'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'ReposData: ',
	          this.props.reposData
	        )
	      );
	    }
	  }]);

	  return Repos;
	}(_react2.default.Component);

	Repos.propTypes = {
	  reposData: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	};

	exports.default = Repos;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notes = function (_React$Component) {
	  _inherits(Notes, _React$Component);

	  function Notes() {
	    _classCallCheck(this, Notes);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Notes).apply(this, arguments));
	  }

	  _createClass(Notes, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'Notes'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'NotesData: ',
	          this.props.notesData
	        )
	      );
	    }
	  }]);

	  return Notes;
	}(_react2.default.Component);

	Notes.propTypes = {
	  notesData: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	};

	exports.default = Notes;

/***/ }

});