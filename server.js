const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "services.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "contact.html"));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`visit http://localhost:${port}`);
});
