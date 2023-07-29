const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      
      const itemResults = {
        cart: [
            {
                itemID: 1,
                quantity: 2,
                unitPrice: 19.99
            },
            {
                itemID: 2,
                quantity: 1,
                unitPrice: 49.95
            }
        ]
      };
  
      return res.json(itemResults);
    }
    catch (err) {
      res.status(err.status || 500).json({
        message: err.message,
      });
    }
  }
  );
  
  module.exports = router;