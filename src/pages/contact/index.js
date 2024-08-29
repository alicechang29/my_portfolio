
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";



export const ContactUs = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    const formData = new FormData(form.current);
    const userName = formData.get('user_name').trim();
    const userEmail = formData.get('user_email').trim();
    const message = formData.get('message').trim();

    if (!userName || !userEmail || !message) {
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    emailjs
      .sendForm(contactConfig.serviceId, contactConfig.templateId, form.current, {
        publicKey: contactConfig.publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccess(true);
          setShowError(false);
          form.current.reset();
        },
        (error) => {
          setShowError(true);
          setShowSuccess(false);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {showSuccess && <Alert variant="success">Your message has been sent successfully!</Alert>}
            {showError && <Alert variant="danger">Failed to send your message. Please ensure form values are filled in.</Alert>}
            <form ref={form} onSubmit={sendEmail}>
              <Row className="mb-3">
                <Col>
                  <label>Name</label>
                  <input type="text" name="user_name" className="form-control" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label>Email</label>
                  <input type="email" name="user_email" className="form-control" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label>Message</label>
                  <textarea name="message" className="form-control" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <input type="submit" value="Send" className="btn btn-primary" />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );

};
