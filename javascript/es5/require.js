'use strict';

var _profile = require('./profile.js');

var p = _interopRequireWildcard(_profile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(p.firstName);
console.log(p.lastName);
console.log(p.year);