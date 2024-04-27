class Auth {
  static validate(req, res, next) {
    console.log('Middle');

    next();
  }
}

module.exports = Auth;