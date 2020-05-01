import "mocha";
import {assert} from "chai";
import {contact} from "../src/lib/contact";

describe("contact", () => {
    it("should return hello", (done) => {
        let validContact = { email : "bob@example.com"};
        assert.equal(contact(validContact),"hello");
        done();
    });
    it("should throw an error for an invalid email", () => {
        let invalidContact = { email : "justastring"};
        assert.throws(() => {
            contact(invalidContact);
        }, "Not a valid email address");           
    })
});
