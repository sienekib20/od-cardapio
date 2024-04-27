const path = require('path');
const dotenv = require('dotenv');

class helpers {

  // Root dir
  static root() {
    return path.resolve(__dirname, '..');
  }

  // Specific dir
  static getDir(dir) {
    return path.join(this.root(), dir);
    // + dir;
  }

  // Retrieve env files
  static env(key) {
    dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
    return process.env[key];
  }

}

module.exports = { helpers };

