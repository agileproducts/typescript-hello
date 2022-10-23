import request from "supertest";
import {assert} from "chai";
import app from "../src/app";

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

describe("POST /form-handler", () => {
  it("should redirect to the receipt page", (done) => {
      request(app)
          .post("/form-handler")
          .send("email=bob@example.com")
          .expect((res) => {
              assert.equal(res.header['location'], "/form-receipt");
          })
          .expect(303,done);
  });
  it("should show an error if an email is not supplied", (done) => {
      request(app)
          .post("/form-handler")
          .send("email=")
          .expect((res) => {
              assert.equal(res.header['location'], "/form");
          })
          .expect(303,done);
  });
});

describe("GET /form-receipt", () => {
  it("should display the form receipt page", (done) => {
      request(app)
          .get("/form-receipt")
          .expect((res) => {
              assert.include(res.text, "Thank you")
          })
          .expect(200,done)
  });
});