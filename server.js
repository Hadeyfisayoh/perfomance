const express = require("express");
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => [res.send(`Performance example: ${process.pid}`)]);

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding ! ${process.pid}`);
});

const PORT = 3000;
console.log("Running srver.js .....");

console.log("Worker process started");
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
