import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { github, linkedin, mail } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="md:flex flex-row gap-10">
        <div className="md:w-1/2 w-full">
          <h3 className="lg:text-[50px] md:text-[30px] text-xl font-extrabold">
            Let's talk with us
          </h3>
          <p className="text-[16px] text-[#F2F5F8] md:max-w-[76%] mt-2 md:mt-5">
            Questions, comments, or suggestions? Simply fill in the form and
            we'll be in touch shortly.
          </p>
          <div className="flex md:flex-col flex-row gap-5 my-5 md:my-0">
            <a href="https://github.com/Bikramai" target="_blank" className="flex flex-row items-center  gap-2 md:gap-5 md:mt-10">
              <img
                src={github}
                alt="github"
                className="w-5 h-5 bg-head rounded-full cursor-pointer"
              />
              <p className="uppercase text-sm cursor-pointer"> Github</p>
            </a>
            <a href="https://www.linkedin.com/in/bikramp/" target="_blank" className="flex flex-row items-center gap-2 md:gap-5 md:mt-5">
              <img
                src={linkedin}
                alt="github"
                className="w-5 h-5 bg-head rounded-sm cursor-pointer"
              />
              <p className="uppercase text-sm cursor-pointer"> Linkedin</p>
            </a>
            <a href="mailto:bikramphurumbo@gmail.com" target="_blank" className="flex flex-row items-center gap-2 md:gap-5 md:mt-5">
              <img
                src={mail}
                alt="github"
                className="w-5 h-5 bg-head rounded-sm cursor-pointer "
              />
              <p className="uppercase text-sm cursor-pointer"> Email</p>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-3 flex flex-col "
            >
              <div className="flex flex-row gap-4 items-center overflow-hidden mb-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="bg-[#F9F9F9] py-2 px-3 text-sm placeholder:text-secondary text-black rounded-lg outline-none border focus-visible:border-head font-medium"
                />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="bg-[#F9F9F9] py-2 px-3 text-sm placeholder:text-secondary  rounded-lg outline-none border focus-visible:border-head text-black"
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="bg-[#F9F9F9] py-2 px-3 border mb-5 text-sm placeholder:text-secondary text-black rounded-lg outline-none focus-visible:border-head font-medium"
              />
              <textarea
                rows={2}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message ..."
                className="bg-[#F9F9F9] py-2 px-3 mb-5 text-sm border  placeholder:text-secondary text-black rounded-lg outline-none focus-visible:border-head font-medium"
              />

              <button
                type="submit"
                className="bg-head py-2 px-8 rounded-full outline-none w-full text-black font-medium"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
