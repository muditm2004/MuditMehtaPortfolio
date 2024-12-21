import React, { useContext, useEffect } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Provider } from "../Context/MyContext";
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";
import { IoSend } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";

export default function ContactForm(props) {
  const { contactFormVisible, setContactFormVisible } = useContext(Provider);

  useEffect(() => {
    if (contactFormVisible) {
      const form = document.querySelector(".contactForm");

      const handleSubmit = async (e) => {
        e.preventDefault();

        document.querySelector("#submitBtn").disabled = true;
        const loadingToast = toast.loading("Sending Details...");

        const formData = {
          name: document.querySelector("#Name").value,
          email: document.querySelector("#Email").value,
          subject: document.querySelector("#Subject").value,
          msg: document.querySelector("#Message").value,
        };

        try {
          const resp = fetch("/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/JSON",
            },
            body: JSON.stringify(formData),
          }).then((response) => {
            if (response.ok) {
              toast.update(loadingToast, {
                render: "Details Recevied. Will get back to you soon.",
                type: "success",
                autoClose: 5000,
                isLoading: false,
                closeOnClick: true,
              });
            } else {
              toast.update(loadingToast, {
                render: "Something went wrong. Please try again later.",
                type: "error",
                autoClose: 5000,
                isLoading: false,
                closeOnClick: true,
              });
            }

            document.querySelector("#Name").value = "";
            document.querySelector("#Email").value = "";
            document.querySelector("#Subject").value = "";
            document.querySelector("#Message").value = "";
            document.querySelector("#submitBtn").disabled = false;
            
            // setContactFormVisible(false);

          });
        } catch {
          toast.update(loadingToast, {
            render: "Something went wrong. Please try again later.",
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeOnClick: true,
          });
        }
      };
      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, [contactFormVisible]);

  return (
    <>
      <div className="contactFormContainer">
        <ToastContainer position="top-center" />
        <motion.div
          className="contactForm"
          ref={props.reference}
          layout
          transition={{
            type: { ease: "linear" },
          }}
        >
          <div className="contactFormHeader">
            <h2>Fill the following form and we'll get in touch</h2>
            <span id="closeBtn">
              <IoCloseCircleSharp
                color="#ffffff"
                onClick={() => {
                  setContactFormVisible(false);
                }}
              />
            </span>
          </div>

          <form className="form " action="">
            <input
              type="text"
              id="Name"
              placeholder="Enter Yor Name"
              required
            />
            <input
              type="email"
              id="Email"
              placeholder="Enter Yor Email"
              required
            />
            <input
              type="subject"
              id="Subject"
              placeholder="Reason for Contacting"
            />
            <textarea
              id="Message"
              placeholder="Write your message here..."
              required
            />
            <button id="submitBtn" type="submit">
            Send <IoSendSharp />
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
