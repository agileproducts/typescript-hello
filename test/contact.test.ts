import "mocha";
import {assert} from "chai";
import {contact} from "../src/lib/contact";

describe("contact", () => {
    it("should return a valid contact", (done) => {
        let validContact = { email : "bob@example.com"};
        contact(validContact, (err,contact) => {
            assert.deepEqual(contact,validContact);
            done();
        });
    });
    it("should return an error for an invalid email", (done) => {
        let invalidContact = { email : "justastring"};
        contact(invalidContact, (err,contact) => {
            assert.equal(err.message,"Not a valid email address");
            done();
        });
    });
});
