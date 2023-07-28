const express = require("express");
const router = express.Router();

const getUsers = async () => {
  const users = [
      {
        "ID": 1,
        "Name": "John Doe",
        "Age": 30,
        "Email": "john.doe@example.com",
        "Address": "123 Main Street, Cityville",
        "Phone": "+1 (555) 123-4567"
      },
      {
        "ID": 2,
        "Name": "Jane Smith",
        "Age": 25,
        "Email": "jane.smith@example.com",
        "Address": "456 Park Avenue, Townville",
        "Phone": "+1 (555) 987-6543"
      },
      {
        "ID": 3,
        "Name": "Robert Johnson",
        "Age": 40,
        "Email": "robert.johnson@example.com",
        "Address": "789 Oak Road, Villageland",
        "Phone": "+1 (555) 111-2222"
      },
      {
        "ID": 4,
        "Name": "Emily Williams",
        "Age": 28,
        "Email": "emily.williams@example.com",
        "Address": "567 Elm Street, Hamletville",
        "Phone": "+1 (555) 444-3333"
      },
      {
        "ID": 5,
        "Name": "Michael Brown",
        "Age": 35,
        "Email": "michael.brown@example.com",
        "Address": "101 Pine Avenue, Countryside",
        "Phone": "+1 (555) 777-8888"
      }
    ];

  return users;
}

router.get("/", async (req, res, next) => {
  try {
    const users = await getUsers();

    const userResults = {
        users: users
    };

    return res.json(userResults);
  }
  catch (err) {
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
}
);

module.exports = router;