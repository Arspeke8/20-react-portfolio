import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contactform.css';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // handle form submit here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" className="form-control" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" className="form-control" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <Field name="message" component="textarea" className="form-control" placeholder="Message" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
