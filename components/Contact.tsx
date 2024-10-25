"use client";

import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FiCheck,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiUser,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        setSubmitStatus("success");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className=" flex items-start justify-center  text-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-LightBlue-300 text-center mb-8 text-md md:text-lg bg-[#234D73] rounded-xl shadow-xl p-4 "
        >
          <span className="font-bold mr-2"> Warning: </span> Contacting me may
          result in sudden outbursts of code, random unsolicited movie trivia,
          and an irresistible urge to redesign your entire digital life. Proceed
          with caution and gusto!
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <FiUser className="absolute top-3 left-3 md:mt-3 text-blue-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-2 md:py-4 bg-[#133552] focus:border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <FiMail className="absolute md:mt-3 top-3 left-3 text-blue-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-2 md:py-4 bg-[#133552] focus:border  rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <FiMessageSquare className="absolute md:mt-3 top-3 left-3 text-blue-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={4}
              className="w-full pl-10 pr-4 py-2 md:py-4 bg-[#133552] focus:border  rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting || submitStatus === "success"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-4 flex items-center justify-center rounded-lg text-white font-medium ${
              isSubmitting || submitStatus === "success"
                ? 'bg-[#394d5e] focus:border  rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"'
                : "bg-[#3d6384] hover:bg-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300`}
          >
            {submitStatus === "success" ? (
              <>
                <FiCheck className="mr-2" />
                Message Received...You`&apos;`ll be hearing from me
              </>
            ) : (
              <>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </>
            )}
          </motion.button>
        </form>
        {/* {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-400 text-center"
          >
            Message sent successfully!
          </motion.p>
        )} */}
        {submitStatus === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-400 text-center"
          >
            An error occurred. Please try again.
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/warrenphilly"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/warren-phillips-a66a88180/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
