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
});

router.post("/shipping", async (req, res, next) => {
    const { cartTotal, cartQuantity } = req.body;
    let shippingCost = 29.99;
    // If there are more than 10 items and the total is less than $200 set shipping $49.99
    if (cartQuantity > 10 && cartTotal <= 200) {
        shippingCost = 49.99;
    }
    // Free shipping if over $100 and the cart quantity is less than 5 items.
    if (cartTotal > 100 && cartQuantity <= 5) {
        shippingCost = 0;
    }
    return res.json({ shippingCost: shippingCost});
});

module.exports = router;