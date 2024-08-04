import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

import { Lucia, TimeSpan } from "lucia";

export const adapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users")
);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  sessionExpiresIn: new TimeSpan(1, "h"),
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
});
