"use strict";
var MockUser = (function () {
    function MockUser(_email, _password) {
        this._email = _email;
        this._password = _password;
    }
    Object.defineProperty(MockUser.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockUser.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    MockUser.prototype.toString = function () {
        return this.email;
    };
    return MockUser;
}());
exports.MockUser = MockUser;
//# sourceMappingURL=mockUser.js.map