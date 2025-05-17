export function isPasswordValid(password, passwordConfirmation) {
    
    return password !== '' && passwordConfirmation !== ''&& password.length >= 6 && password.length >= 6 && password === passwordConfirmation;
}
  