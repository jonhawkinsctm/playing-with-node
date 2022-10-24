const app = require("../src/app");
const request = require("supertest");

describe("/heath", () => {
    it("returns ok", () => {
        request(app)
            .get("/health")
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("ok");
            });
    });
});
