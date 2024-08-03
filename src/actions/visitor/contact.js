"use server";

import send_mail from "@/lib/mailer";
import { Validator } from "@/lib/validators";

export const send_message_handler = async (prevFormState, formData) => {
  const name = new Validator("Name", formData.get("name"));
  const email = new Validator("Email", formData.get("email"));
  const phone = new Validator("Phone", formData.get("phone"));
  const letter = new Validator("Letter", formData.get("letter"));

  const nameError = name.validate_string("Name", 3, 50) || name.only_alpha();
  const emailError = email.validate_string("Email", 4) || email.isEmail();
  const phoneError = phone.validate_string("Phone", 10, 10) || phone.isMobile();
  const letterError = letter.validate_string("Letter", 3, 400);

  if (nameError || emailError || phoneError || letterError)
    return {
      name: nameError,
      email: emailError,
      phone: phoneError,
      letter: letterError,
    };
  send_mail(
    "shahtirth0212@gmail.com",
    `${name.fieldValue} wants to connect`,
    `Phone:${phone.fieldValue}\nEmail:${email.fieldValue}\nLetter:${letter.fieldValue}`
  );
  return { success: true };
};
