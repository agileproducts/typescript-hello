import request from "supertest";
import {assert} from "chai";
import app from "../src/app";

describe("GET /fileupload", () => {
  it("should return 200", (done) => {
    request(app)
      .get("/fileupload")
      .expect(200, done);
  });
});