const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("feedback");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
