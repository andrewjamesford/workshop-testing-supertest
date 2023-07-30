const request = require("supertest");
const app = require("../app");

describe("GIVEN that the GET /cart route exist", () => {
    test("WHEN there are items in the cart THEN return status 200 and an array of cart items", async () => {
        const expectedResponseData = {
            "cart":  [
                {
                    "itemID": 1,
                    "quantity": 2,
                    "unitPrice": 19.99,
                },
                {
                    "itemID": 2,
                    "quantity": 1,
                    "unitPrice": 49.95,
                }
            ]
        };

        const response = await request(app)
        .get("/api/cart")
        .set("Accept", "application/json");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponseData);
    });
});

describe.each([
    { cartTotal: 101, cartQuantity: 3, expected: 0 },
    { cartTotal: 1, cartQuantity: 3, expected: 29.99 },
    { cartTotal: -1, cartQuantity: 3, expected: 29.99 },
    { cartTotal: 199, cartQuantity: 11, expected: 49.99 },
    { cartTotal: 300, cartQuantity: 11, expected: 29.99 },
    { cartTotal: 550, cartQuantity: 10, expected: 0 },
    { cartTotal: 550, cartQuantity: 11, expected: 29.99 },
    { cartTotal: 100.01, cartQuantity: 3, expected: 0 },
    { cartTotal: 1111100.0000001, cartQuantity: 3, expected: 0 },
    { cartTotal: 20.0000001, cartQuantity: 3, expected: 29.99 },
  ])('Test a range of number inputs', ({ cartTotal, cartQuantity, expected }) => {
    test(`${cartTotal} and ${cartQuantity} returns ${expected}`, async () => {
        const response = await request(app)
        .post("/api/cart/shipping")
        .send({
            cartTotal: cartTotal,
            cartQuantity: cartQuantity
        })
        .set("Accept", "application/json");

        const expectedResponseData = {
            shippingCost: expected
        }

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponseData);
    });
  
  });