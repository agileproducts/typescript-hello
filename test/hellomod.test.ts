import 'mocha';
import {assert} from 'chai';
import * as hellomod from '../src/lib/hellomod';

describe("hellomod", () => {
    it("should return a greeting", (done) => {
        let qa = new hellomod.Student("Joe","The","Tester")
        assert.equal(hellomod.greeter(qa),"Hello Joe Tester");
        done();
    });
});