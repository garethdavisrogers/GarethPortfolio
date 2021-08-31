import React from "react";
import emailjs from "emailjs-com";
import { useInput } from "./useInput";
import { ToastContainer, toast } from "react-toastify";

export default function Email(props) {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const {
    value: subject,
    bind: bindSubject,
    reset: resetSubject,
  } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const resetFunctions = [resetName, resetSubject, resetEmail, resetBody];
    resetFunctions.forEach((f) => f());
    const templateParams = {
      name: name,
      subject: subject,
      email: email,
      body: body,
    };
    emailjs
      .send(
        "GDRPortfolioSite",
        "template_eelbztq",
        templateParams,
        "user_hFbYHPUFkNLYtl302s9yM"
      )
      .then(() => {
        toast.info(
          "Thank you for your message!  I will try to get back to you as soon as possible."
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="email">
      <div className="form-header">
        <h2>
          <u>Email Me</u>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="email-form">
        <div>
          <label>Name</label>
          <input type="text" {...bindName} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...bindEmail} />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" {...bindSubject} />
        </div>
        <div>
          <label>Body</label>
          <textarea type="text" {...bindBody} />
        </div>
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
