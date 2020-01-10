"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./app/config/db.config"));

var _environment = _interopRequireDefault(require("./app/config/environment.config"));

var _socket = _interopRequireDefault(require("./app/config/socket.config"));

var _routes = _interopRequireDefault(require("./app/routes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config(); //setup Dependencies


var app = (0, _express["default"])();
(0, _db["default"])();
(0, _environment["default"])(app, _express["default"]);
(0, _routes["default"])(app); //Run application over custom port

var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at http://localhost:".concat(process.env.PORT || 3000));
}); //Setup Socket.IO

(0, _socket["default"])(server);