const request = require("supertest");
const app = require("../app");

describe("GIVEN that the GET /users route exist", () => {
	test("WHEN there are users THEN return status 200 and an array of users", async () => {
		const expectedResponseData = {
			"users": [
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
			]
		};

		const response = await request(app)
			.get("/api/users")
			.set("Accept", "application/json");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedResponseData);
	});
});

describe("GIVEN that the POST /users route exist", () => {
	test("WHEN a user posted/added THEN return status 200 and a confirmation message", async () => {
		const expectedResponseData = {
			id: 6,
			message: "user added"
		};

		const response = await request(app)
			.post("/api/users")
			.set("Accept", "application/json");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedResponseData);
	});
});