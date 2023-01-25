const express = require('express');
const router = express.Router();
const {pool} = require("../db.js")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows] = await pool.promise().query("select * from users")

  res.json(rows)
});



router.get('/ping', async function(req, res, next) {
  const result =  await pool.promise().query("select * from users")
  console.log(result[0])
  res.json(result[0])
});

router.get('/create', async function(req, res, next) {
  const result =  await pool.promise().query("INSERT INTO USERS(NAME) VALUES('kitty')")
  console.log(result[0])
  res.json(result[0])
});

module.exports = router;
