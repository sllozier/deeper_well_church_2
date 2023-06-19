const router = require("express").Router();
const LineItem = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const lineitems = await LineItem.findAll();
    res.send(lineitems);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const lineitem = await LineItem.findByPk(req.params.id);
    res.send(lineitem);
  } catch (error) {
    next(error);
  }
});

module.exports = router; // const router = require('express').Router();
// const LineItem = require('../db')

// router.get('/lineitems', async (req, res, next) => {
//     try {
//         const lineitems = await LineItem.findAll()
//         res.send(lineitems)
//     } catch (error) {
//         next(error)
//     }
// })

// router.get('/lineitems/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id
//         const lineitem = await LineItem.findByPk(id)
//         if (lineitem) {
//             res.send(lineitem)
//         } else {
//             res.send('error: no genre available');
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// module.exports = router;
