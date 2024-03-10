const { findUser } = require("./users.function");
function authenticate(req, res, next) {
  // this takes our payload from the body
  // const { username, password } = req.body;
  // console.log("authenticate", req.body);
  // const user = findUser(req.body.username);

  //   this takes our payload from the header
  const { username, password } = req.headers;
  const user = findUser(username);
  if (!user) {
    res.statusCode = 401;
    res.end();
    return;
  }
  if (user.username !== username || user.password !== password) {
    res.statusCode = 401;
    res.end();
    return;
  }
  next(req, res);
}

module.exports = authenticate;
