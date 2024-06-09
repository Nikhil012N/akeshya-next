"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values));
        setSubmitting(false);
        resetForm();
      }, 400);
    },
  });

  return (
    <section id="contact" className="contact py-16">
      <div className="container mx-auto px-4">

        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8">
            <div className="contact-about">
              <h3 className="text-2xl font-bold mb-4">Akeshya</h3>
              <p>Designers, developers & marketeers capable of delivering solutions according to your needs,</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 mb-8">
  <div className="info space-y-4">
    <div className="flex items-start">
      <div className="w-1/12 flex justify-center">
        <GrLocation className="text-[#14279b] w-8 h-8" />
      </div>
      <div className="w-11/12">
        <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-1/12 flex justify-center">
        <BiMailSend className="text-[#14279b] w-8 h-8" />
      </div>
      <div className="w-11/12">
        <p>
          <Link href="mailto:nikhil012nk@gmail.com" className="text-blue-600 underline">
            info@akeshya.com
          </Link>
        </p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-1/12 flex justify-center">
        <FaPhoneAlt className="text-[#14279b] w-8 h-8" />
      </div>
      <div className="w-11/12">
        <p>+91 94942 40922</p>
      </div>
    </div>
  </div>
</div>


          <div className="w-full lg:w-2/5" data-aos="fade-up" data-aos-delay="300">
            <form className="php-email-form" onSubmit={formik.handleSubmit} name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control border rounded p-2 w-full"
                  id="name"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control border rounded p-2 w-full"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control border rounded p-2 w-full"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.subject}</div>
                ) : null}
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control border rounded p-2 w-full"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.message}</div>
                ) : null}
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
