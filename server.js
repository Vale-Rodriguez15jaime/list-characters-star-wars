const express = require("express")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.static(path.join(__dirname, "build")));

app.get("/api", async (req, res) => {
  res.send({ message: "hello" });
});
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log("server in running on " + PORT));