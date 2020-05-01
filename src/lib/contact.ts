export function contact(inputData, callback) {
    if(emailIsValid(inputData.email)) {
        callback(null, "hello");
        // should be some stuff for creating a contact
    } else {
        callback(Error("Not a valid email address"), null);
    }
}

function emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email);
}