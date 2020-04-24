import request from "supertest";
import {assert} from "chai";
import app from "../src/app";

describe("GET /", () => {
    it("should return 200", (done) => {
        request(app).get("/").expect(200, done);
    });
});

describe("GET /form", () => {
    it("should return 200", (done) => {
        request(app)
            .get("/form")
            .expect((res) => {
                assert.include(res.text, "Form");
            })
            .expect(200,done);
    });
});

describe("POST /form", () => {
    it("should echo the payload sent", (done) => {
        request(app)
            .post("/form")
            .send("email=bob@example.com")
            .expect((res) => {
                assert.equal(res.body.email, "bob@example.com");
            })
            .expect(200,done);
    });
});