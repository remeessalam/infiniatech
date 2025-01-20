import React, { lazy } from "react";
import bannerImg from "../assets/images/services-banner.webp";
import { ArrowLinkButton } from "../components/ArrowButtons";
import { companyDetails } from "../data/constant";

const ContactForm = lazy(() => import("../components/ContactForm"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const Services = () => {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] h-full wrapper text-white z-10 flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              Empowering Businesses with Tailored Solutions for the Digital Age
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              At {companyDetails.name}, we offer a wide range of cutting-edge
              services designed to help businesses excel in an ever-evolving
              digital landscape. Our team of experts is committed to providing
              custom solutions that address the unique needs of each client,
              leveraging the latest technologies to solve real-world problems.
              Whether you're looking to integrate blockchain, explore AI, or
              build a custom app, we’re here to help you innovate and grow.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>
      <ServicesWeProvide />
      <ContactForm />
    </>
  );
};

export default Services;
