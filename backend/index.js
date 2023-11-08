const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
  console.log("data ", req.query);
  let { user, password } = req.query;
  res.send(`standard Get response, Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
