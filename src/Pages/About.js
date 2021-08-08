import React from "react";
import OurService from "../components/AboutComponents/OurServiceComponents/OurService";
import ContactUsForm from "../components/AboutComponents/ContactUsForm/ContactUsForm";
import SubmitMessage from "../components/AboutComponents/SubmitMessage/SubmitMessage";
import { useGlobalContext } from "../Global/GlobalContext";

const About = () => {
  const { formSubmitted } = useGlobalContext();
  return (
    <>
      <OurService />
      <ContactUsForm />
      {formSubmitted && <SubmitMessage />}
    </>
  );
};

export default About;
