index = async function (application, req, res) {
  return res.render('index', {});
};

create = async function (application, req, res) {
  return res.render('create', {});
};


module.exports = {
  index, create
}