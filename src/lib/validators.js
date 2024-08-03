const digits = /^[0-9]+$/;
const alpha = /^[A-Za-z ]+$/;
const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export class Validator {
  constructor(fieldName, fieldValue) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
  }
  only_alpha(msg = `${this.fieldName} must contain alphabets only`) {
    if (!alpha.test(this.fieldValue)) return msg;
  }
  only_digits(msg = `${this.fieldName} must contain numerics only`) {
    if (!digits.test(this.fieldValue)) return msg;
  }
  isEmail(msg = `Invalid email`) {
    if (!email.test(this.fieldValue)) return msg;
  }
  isMobile(msg = "Invalid phone number") {
    if (!digits.test(this.fieldValue) || this.fieldValue.length !== 10)
      return msg;
  }
  validate_string(
    fieldName,
    min,
    max,
    msg = `${fieldName} must be ${min} to ${max} long`
  ) {
    const field = this.fieldValue;

    if (!field) return `${this.fieldName} is required`;

    if (field.length > max || field.length < min) return msg;
  }
}
