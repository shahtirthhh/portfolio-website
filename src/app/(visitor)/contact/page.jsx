"use client";
import linkedin from "../../../../public/assets/linkedin.png";
import github from "../../../../public/assets/github.png";
import x from "../../../../public/assets/x.png";
import email from "../../../../public/assets/email.png";
import Image from "next/image";

import { useFormState, useFormStatus } from "react-dom";
import { send_message_handler } from "@/actions/visitor/contact";
import { useEffect } from "react";

const Contact = () => {
  const [formState, send_message] = useFormState(send_message_handler, {});
  useEffect(() => {
    if (formState.success) {
      document.getElementById("contact_reset").click();
    }
  }, [formState]);
  return (
    <div className="flex flex-col items-center p-4 gap-6 w-full overflow-y-auto custom_scroll">
      <h1 className="text-primaryText w-full text-center font-SFPro md:text-3xl mt-10 lg:text-5xl text-2xl">
        Let's connect
      </h1>
      {formState.success && (
        <div className="flex justify-center items-center w-full md:w-1/3 mt-5 border-2 border-green-500 bg-green-100 shadow-md text-neutral-700 rounded-lg font-primary font-medium p-4 dark:bg-green-300 ">
          <p>Thanks for message, Will get back to you soon !</p>
        </div>
      )}
      <form
        action={send_message}
        className="flex flex-col justify-center items-center w-full max-w-3xl gap-6 mt-5"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <div className="flex flex-col gap-1 w-full md:w-1/3">
            <input
              type="text"
              placeholder="Name"
              className="input "
              name="name"
            />
            {formState.name && (
              <p className="text-sm font-primary ml-1 font-medium  text-red-400">
                {formState.name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full md:w-1/3">
            <input
              type="email"
              placeholder="Email"
              className="input "
              name="email"
            />
            {formState.email && (
              <p className="text-sm font-primary ml-1 font-medium  text-red-400">
                {formState.email}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-1 md:w-1/3">
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Phone"
              className="input "
              name="phone"
            />
            {formState.phone && (
              <p className="text-sm font-primary ml-1 font-medium  text-red-400">
                {formState.phone}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <textarea
            placeholder="Whassup ?"
            className="input w-full h-32 resize-none"
            name="letter"
          />
          {formState.letter && (
            <p className="text-sm font-primary ml-1 font-medium  text-red-400">
              {formState.letter}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center  gap-8 w-full">
          <SubmitButton />
          <button
            id="contact_reset"
            type="reset"
            className="disabled:bg-slate-400 flex flex-row items-center justify-center gap-2 px-3 py-2 bg-red-400 hover:bg-red-700 text-sm text-neutral-800 rounded-xl w-full md:w-1/6 transition-colors duration-300 font-medium font-primary"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex flex-row justify-around md:justify-between w-full md:w-1/3 mt-10">
        <a
          target="_blank"
          title="LinkedIn profile"
          className="hover:scale-[1.04] transition-all"
          href="https://www.linkedin.com/in/shahtirthh/"
        >
          <Image src={linkedin} className="w-8 sm:w-10 sm:h-10 h-8" priority />
        </a>
        <a
          target="_blank"
          title="Github profile"
          className="hover:scale-[1.04] transition-all"
          href="https://github.com/shahtirthhh"
        >
          <Image src={github} priority className="w-8 sm:w-10 sm:h-10 h-8" />
        </a>
        <a
          title="shahtirth0212@gmail.com"
          className="hover:scale-[1.04] transition-all"
          href="mailto:shahtirth0212@gmail.com"
        >
          <Image
            src={email}
            className="w-8  sm:w-10 sm:h-10 h-8 rounded-full"
            priority
          />
        </a>
        <a
          target="_blank"
          title="X profile"
          className="hover:scale-[1.04] transition-all"
          href="https://x.com/shahtirthhh"
        >
          <Image src={x} className="w-8 sm:w-10 sm:h-10 h-8" priority />
        </a>
      </div>
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="disabled:bg-slate-400 flex flex-row items-center whitespace-nowrap justify-center gap-2 px-3 py-2 bg-green-400 hover:bg-green-700 text-sm text-neutral-800 rounded-xl w-full md:w-1/6 transition-colors duration-300 font-medium font-primary"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
};

export default Contact;
