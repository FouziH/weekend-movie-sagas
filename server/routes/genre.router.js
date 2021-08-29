const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
 let sqlQuery = `SELECT  "genres".id, "genres".name FROM "genres";
`;
 pool.query(sqlQuery).then(dbRes => {
   console.log('dbRes is', dbRes)
   res.send(dbRes.rows)
 }).catch(error => {
   console.log('error got GET /genre is ', error)
     res.sendStatus(500);
 })
});

module.exports = router;