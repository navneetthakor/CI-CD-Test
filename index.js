
// /------------------------- importing required modules----------------------
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5002;

// --------------------------- Middleware setup ----------------------------
// to enable cross origin resource sharing
app.use(cors());

// to parse the body of request (specifically for post requests)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default routes
app.get("/", (req, res) => res.json({ signal: "green" }));

 
// -------------------------- Starting backend -----------------------------
app.listen(port, () => {
  console.g("backend is listening at port no : ", port);
});
