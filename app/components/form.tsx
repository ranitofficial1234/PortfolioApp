"use client";
import React, { FormEvent } from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you! Message received successfully.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow h-32 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
