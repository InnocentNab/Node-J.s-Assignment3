function getBooks(req, res) {
  //   console.log("getBooks", req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      books: [{ name: "The Last Days at Forcados High School" }],
    })
  );
}

function getAuthors(req, res) {
  //   console.log("getBooks", req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ authors: [{ name: "A.H. Mohammed" }] }));
}

module.exports = {
  getBooks,
  getAuthors,
};
