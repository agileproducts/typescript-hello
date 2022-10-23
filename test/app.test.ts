import request from "supertest";
import {assert} from "chai";
import app from "../src/app";

describe("GET /", () => {
    it("should return 200", (done) => {
        request(app).get("/").expect(200, done);
    });
});
