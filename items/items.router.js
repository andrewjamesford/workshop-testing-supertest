const express = require("express");
const router = express.Router();

const getItems = async () => {
  const items = [
    {
      "ID": 1,
      "Name": "Widget X",
      "Description": "The amazing Widget X is designed to make your life easier.",
      "Price": 19.99,
      "Category": "Electronics",
      "Stock": 50
    },
    {
      "ID": 2,
      "Name": "Super Blender 2000",
      "Description": "Blend anything with the Super Blender 2000. It's super!",
      "Price": 49.95,
      "Category": "Kitchen Appliances",
      "Stock": 25
    },
    {
      "ID": 3,
      "Name": "Gamer's Paradise",
      "Description": "Experience gaming like never before with the Gamer's Paradise console.",
      "Price": 299.99,
      "Category": "Gaming",
      "Stock": 10
    },
    {
      "ID": 4,
      "Name": "Luxury Watch",
      "Description": "Elegant and stylish, the Luxury Watch is a statement of class.",
      "Price": 199.95,
      "Category": "Fashion",
      "Stock": 100
    },
    {
      "ID": 5,
      "Name": "Smart Home Hub",
      "Description": "Control your entire home with the Smart Home Hub. A hub for smart living.",
      "Price": 129.99,
      "Category": "Home Automation",
      "Stock": 30
    }
  ];

  return items;
}

router.get("/", async (req, res, next) => {
  try {
    const items = await getItems();

    const itemResults = {
      items: items
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