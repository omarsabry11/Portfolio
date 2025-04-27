import React, { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { useState } from "react";
import DotsLoader from "../DotsLoader/DotsLoader";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const sendInfo = (values) => {
    setIsLoading(true);
    emailjs
      .send(
        "service_safeanu", // EmailJS Service ID
        "template_ialf9sc", // EmailJS Template ID
        values,
        "cG2v3tJaBfD6wJJio" // EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formik.resetForm();
        },
        (error) => {
          console.error("Failed to send message:", error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  const validation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: validation,
    onSubmit: sendInfo,
  });
  const notifyFilled = (msg) => toast.error(msg);

  const sendEmail = () => {
    const recipient = "omarsabry425@gmail.com";
    const subject = "Subject of your email";
    const body = "Hello, I would like to get in touch!";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+201286183936";
    const message = "Hello, I would like to get in touch!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const getParticles = useMemo(
    () => (
      <div className="opacity-70">
        <Particle></Particle>
      </div>
    ),
    []
  );

  const handleShowErrors = async () => {
    const errors = await formik.validateForm();
    if (errors.name) {
      notifyFilled(errors.name);
    } else if (errors.email) {
      notifyFilled(errors.email);
    } else if (errors.phone) {
      notifyFilled(errors.phone);
    } else if (errors.message) {
      notifyFilled(errors.message);
    }
  };
  return (
    <>
      <div className="bg-[#030714fb] min-h-lvh relative z-5 overflow-auto">
        {getParticles}
        <h2 className="mt-32 text-5xl text-center font-bold text-white">
          Contact <span className="text-[#FFC400]">US</span>
        </h2>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-[80%]  mx-auto overflow-hidden max-md:w-[90%]"
        >
          <form className="w-[90%] mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mt-20 flex flex-col gap-10">
              <div className="flex justify-between flex-wrap max-lg:gap-y-10">
                <div className="px-3 w-1/3  max-lg:w-1/2 max-md:w-full">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Name
                    </label>
                  </div>
                </div>

                <div className="px-3 w-1/3 max-lg:w-1/2 max-md:w-full">
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Email
                    </label>
                  </div>
                </div>

                <div className="px-3 w-1/3  max-lg:w-full">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-sm font-semibold text-[#662EEA] bg-[#070B18] duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Phone
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className="px-3 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      className="block px-2.5 pb-36 pt-4 w-full text-md text-white bg-[#8c5ef608] rounded-lg border-[3px] border-[#8C5EF5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFC400] peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-sm font-semibold text-[#662EEA] bg-[#070B18]  duration-300 bg-transparent transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  peer-focus:bg-[#070B18] rounded-md peer-focus:text-[#FFC400] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Enter your message...
                    </label>
                  </div>
                </div>
              </div>

              <div className="px-3">
                <motion.button
                  onClick={handleShowErrors}
                  type="submit"
                  className="bg-[#662eea] text-white font-semibold text-lg rounded-full w-full duration-300 hover:bg-[#FFC400] h-[3rem] flex justify-center items-center"
                  whileTap={{ scale: 0.85 }}
                >
                  {isLoading ? <DotsLoader></DotsLoader> : "Send"}
                </motion.button>

                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                ></ToastContainer>
              </div>
            </div>
          </form>
        </motion.div>

        <div className=" text-white fixed end-0 top-1/2 -translate-y-1/2">
          <motion.button
            onClick={sendEmail}
            className=" text-[#E8D8A2] hover:scale-110 duration-300 "
            whileTap={{ scale: 0.85 }}
          >
            <i className=" fa-regular fa-envelope fa-lg bg-[#8c5ef608] hover:border-[#FFC400]  w-14 hover:w-20 h-11  flex items-center ps-4 duration-300 border-e-0 border-[3px] border-[#662EEA]  text-[#662EEA] hover:text-[#FFC400] rounded-s-full "></i>{" "}
          </motion.button>
        </div>
        <div className="text-white fixed mt-16 end-0 top-1/2 -translate-y-1/2">
          <motion.button
            onClick={sendWhatsAppMessage}
            className=" text-[#E8D8A2] hover:scale-110  duration-300 "
            whileTap={{ scale: 0.85 }}
          >
            {" "}
            <i className=" fa-brands fa-whatsapp bg-[#8c5ef608] fa-xl w-14 hover:w-20 h-11 flex items-center ps-4 hover:border-[#FFC400]  duration-300 border-e-0 border-[3px] border-[#662EEA] text-[#662EEA] hover:text-[#FFC400] rounded-s-full"></i>
          </motion.button>
        </div>
      </div>
    </>
  );
}
