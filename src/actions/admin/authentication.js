"use server";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import Session from "@/model/Session";
import { lucia } from "@/lib/lucia_adapter";
import { cookies } from "next/headers";

import { connect } from "@/lib/database";
import { Validator } from "@/lib/validators";
import User from "@/model/User";

export const login_handler = async (prevState, formData) => {
  const email = new Validator("Email", formData.get("email"));
  const password = new Validator("Password", formData.get("password"));

  const emailError = email.validate_string("Email", 3, 50) || email.isEmail();
  const passwordError = password.validate_string("Password", 3, 50);
  if (passwordError || emailError)
    return {
      email: emailError,
      password: passwordError,
    };
  connect();
  const user = await User.findOne({ email: email.fieldValue });
  console.log(user);
  if (!user) return { error: true, msg: "No account found !" };
  const validPassword = await bcrypt.compare(
    password.fieldValue,
    user.password
  );
  if (!validPassword) {
    return { error: true, msg: "Incorrect password !" };
  }
  const session = await lucia.createSession(user._id.toString(), {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  redirect("/admin/dashboard");
};
export const validate_session = async (sessionId) => {
  await connect();

  const session = await Session.findOne({ _id: sessionId });

  if (!session || new Date(session.expires_at) < new Date()) {
    return { session: null, user: null };
  }

  const user = { id: session.user_id }; //user detail
  return { session: { id: session._id, fresh: true }, user: user };
};
export const verify_auth = async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionId = sessionCookie.value;
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await validate_session(sessionId);
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}

  return result;
};
