import React, { useState } from "react";
import FormFieldComponent from "../FromFiledComponent";
import { formFields } from "@/helpers/formfields.js";
import ToastComponent from "../ToastComponent";
import FadeBottom from "@/animations/FadeBotton";
const ContactSectionComponent = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  console.log(BOT_TOKEN, CHAT_ID);

  const validate = () => {
    const newErrors = {};

    if (!form.username || form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone || !/^[0-9]{8,25}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 8–25 digits";
    }

    if (!form.message || form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const text = `
    📩 *New Contact Message*

👤 Username: 
-------------------------------------------------------------
${form.username}


📧 Email: 
-------------------------------------------------------------
${form.email}


📞 Phone: 
-------------------------------------------------------------
${form.phone}


💬 Message:
-------------------------------------------------------------
${form.message}
                `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      });

      showToast("success", "Message sent successfully!");
      setForm({ username: "", email: "", phone: "", message: "" });
    } catch (error) {
      showToast("error", "Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className=' container  w-full min-h-screen p-4 md:px-7'>
      {toast.show && (
        <ToastComponent type={toast.type} message={toast.message} />
      )}
      <FadeBottom delay={200}>
        <h1 className=' cursor-pointer text-2xl md:text-5xl text-center font-bold text-primary mb-10'>
          Contact
        </h1>
      </FadeBottom>

      <FadeBottom delay={300}>
        <div className=' w-full flex justify-center items-center '>
          <form
            className='flex w-[70%] flex-col gap-4 border bg-white border-gray-300 rounded-md shadow-md  p-4 md:p-6 '
            onSubmit={handleSubmit}
          >
            <h1 className=' text-xl font-bold text-center'>Contact Form</h1>
            {formFields.map((field) => (
              <FormFieldComponent
                key={field.id}
                {...field}
                value={form[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ))}
            <div className=''>
              <div className='mb-2 block'>
                <p>
                  Your message will be send to my telegram by telegram bot. I
                  will try to reply your message as soon as possible.
                </p>
              </div>
            </div>
            <button
              type='submit'
              disabled={loading}
              className='bg-primary text-white p-2 rounded hover:opacity-90 transition disabled:opacity-60'
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </FadeBottom>
    </section>
  );
};

export default ContactSectionComponent;
