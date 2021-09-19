import React from "react";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState("false");
  const hcaptchaRef = React.useRef(null);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(true);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //hanle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Execute the hCaptcha when the form is submitted
    hcaptchaRef.current.execute();
  };
  
  const onHCaptchaChange = async (captchaCode) => {
    // If the hCaptcha code is null or undefined indicating that
    // the hCaptcha was expired then return early
    if (!captchaCode) {
      return;
    }
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/email", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
          hcaptchaRef: captchaCode
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        setShowSuccessMessage(false);
        setShowFailureMessage("There was some problem while submitting the form.");
        setButtonText("Send");
        throw new Error(error.message);
      } else {
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
        setShowSuccessMessage("Email has been sent successfully.");
        setShowFailureMessage(false);
        setButtonText("Sent");
      }
    }
    console.log(fullname, email, subject, message);
  }

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="lg:px-48 dark:g-white-500 text-lg font-semibold">
            Please fill out the form below to request a quote for a project,
            inquire about a collaboration, or simply say hello.
          </h1>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg flex flex-col lg:px-48 dark:g-white-500"
          >
            <label
              htmlFor="fullname"
              className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              Full name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="bg-transparent border-b py-2 focus:outline-none font-light text-gray-50"
            />

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent border-b py-2 focus:outline-none font-light text-gray-50"
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="bg-transparent border-b py-2 focus:outline-none font-light text-gray-50"
            />

            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-transparent border-b py-2 focus:outline-none font-light text-gray-50"
            ></textarea>
            <HCaptcha
              id="test"
              size="invisible"
              ref={hcaptchaRef}
              sitekey={process.env.HCAPTCHA_PUBLIC}
              onVerify={onHCaptchaChange}
            />
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                disabled={buttonState}
                className="px-10 mt-8 py-2 bg-[#ffffff] text-gray-900 font-light rounded-md text-lg flex flex-row items-center"
              >
                {buttonText}
              </button>
              {showSuccessMessage}
              {showFailureMessage}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
