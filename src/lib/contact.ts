export function contact(inputData, callback) {
    if(emailIsValid(inputData.email)) {
        let contact: Person = {
            email: inputData.email
        }
        callback(null,contact);
        // should be some stuff for creating a contact
    } else {
        callback(Error("Not a valid email address"), null);
    }
}

interface Person {
    email: string
}

function emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email);
}