export function contact(inputData) {
    if(emailIsValid(inputData.email)) {
        return "hello";
    } else {
        throw new Error("Not a valid email address");
    }
}

function emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email);
}