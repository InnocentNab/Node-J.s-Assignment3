const getBodyFromStream = require("./getPayload");
const authenticate = require("./authenticate");
const result = require("./result");

const behaviour = async (req, res) => {
  // getBodyFromStream(req, res, getBooks);
  try {
    const body = await getBodyFromStream(req);
    req.body = body;
    // console.log(body);
    if (req.url === "/books" && req.method === "GET") {
      authenticate(req, res, result.getBooks);
    } else if (req.method === "POST" && req.url === "/books") {
      res.write("Hello from Post Books");
      res.end();
      // authenticate(req, res, result.getBooks);
    } else if (req.method === "PUT" && req.url === "/books") {
      res.write("Hello from Put Books");
      res.end();
      // authenticate(req, res, result.getBooks);
    } else if (req.method === "PATCH" && req.url === "/books") {
      res.write("Hello from Patch Books");
      res.end();
      // authenticate(req, res, result.getBooks);
    } else if (req.method === "DELETE" && req.url === "/books") {
      res.write("Hello from Delete Books");
      res.end();
      // authenticate(req, res, result.getBooks);
    }

    // Authors
    if (req.url === "/authors" && req.method === "GET") {
      authenticate(req, res, result.getAuthors);
    } else if (req.url === "/authors" && req.method === "POST") {
      res.write("Hello from the Post author");
      res.end();
    } else if (req.url === "/authors" && req.method === "PUT") {
      res.write("Hello from the Put author");
      res.end();
    } else if (req.url === "/authors" && req.method === "DELETE") {
      res.write("Hello from the Delete author");
      res.end();
    } else if (req.url === "/authors" && req.method === "PATCH") {
      res.write("Hello from the Patch author");
      res.end();
    } else {
      res.end("invalid request, Please make a good request");
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
};
module.exports = behaviour;
