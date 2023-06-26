import Button from "../components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">WHAT&apos;S NEXT?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m currently looking for new experiences, think that I would suit your team? Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:stralende007@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
