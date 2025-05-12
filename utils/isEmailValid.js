export function isEmailValid(email) {
    const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return mailRegExp.test(email);
  }