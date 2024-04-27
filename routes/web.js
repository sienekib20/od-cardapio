module.exports = function (application) {
  application.get('/', function (req, res) {
    application.app.http.controllers.app.index(application, req, res);
  });
  application.get('/create', function (req, res) {
    application.app.http.controllers.app.create(application, req, res);
  });
};