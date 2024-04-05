export function EmailValidation(email) {
    const re = /\S+@\S+\.\S+/
    if(!email) return "Please Enter Email."
    if(!re.test(email)) return "Ooops! We need a valid email address."
    return '' 
}