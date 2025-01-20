import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";
import { companyDetails } from "../data/constant";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const industries = [
  {
    icon: Ambulance,
    title: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    title: "Finance",
  },
  {
    icon: Cpu,
    title: "Technology",
  },
  {
    icon: Store,
    title: "Retail &\n E-commerce",
  },
  {
    icon: Cloudy,
    title: "SaaS",
  },
  {
    icon: StickyNote,
    title: "Business Services",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
  },
  {
    icon: BrainCircuit,
    title: "AI",
  },
];

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  return (
    <>
      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" />
              <span>{isWeb ? "Web Development" : "App Development"}</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Empowering Your Business with Seamless
              <span className="gradient-text">
                {" "}
                {isWeb ? "Web Solutions" : "App Solutions"}
              </span>
              <br />
            </h1>
            <p data-aos="fade-up" className="text-white text-lg">
              {isWeb
                ? `We design and develop user-centric websites that streamline your
              business processes, boost engagement, and deliver seamless
              experiences across devices. Our solutions are tailored to meet
              your unique needs and drive measurable results.
              `
                : `Our expert team creates innovative, user-friendly mobile
            applications that bring your ideas to life. Whether it’s Android,
            iOS, or cross-platform development, we ensure your app stands out in
            the competitive digital landscape.`}
            </p>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>

      <ContactForm headline="Book A Free Consultation" />
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <LandingServices isWeb={isWeb} />
      <Portfolio page={page} />
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2
            data-aos="fade-up"
            data-aos-offset="-1100"
            className="section-heading text-center"
          >
            Industries We Serve
          </h2>
          <p data-aos="fade-up" data-aos-offset="-1100" className="text-center">
            Using powerful, industry-specific software solutions, our team can
            help you achieve your business goals.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-offset="-1100"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-secondary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <h2
          data-aos="fade-up"
          data-aos-offset="-1100"
          className="wrapper section-heading text-center"
        >
          How {companyDetails?.name} helps you deliver the best results
        </h2>
        <div
          data-aos="fade-up"
          data-aos-offset="-1100"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Collaborative Partnerships",
              desc: "We foster strong partnerships by working closely with clients, ensuring alignment with your vision and delivering results that exceed expectations.",
              styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Agility and Adaptability",
              desc: "Our team thrives on flexibility, quickly adapting to changing requirements and industry trends to keep your business ahead of the curve.",
              styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Commitment to Quality",
              desc: "Quality is at the heart of everything we do, from initial planning to final delivery, ensuring solutions that stand the test of time.",
              styles: "bg-[#B94391]",
            },
            {
              title: "Customer Satisfaction",
              desc: "Your satisfaction is our top priority. We go the extra mile to ensure our solutions not only meet but exceed your expectations.",
              styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Transparency and Accountability",
              desc: "We maintain open communication, provide regular updates, and take responsibility for delivering on our commitments to ensure your trust and confidence.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          data-aos-offset="-1100"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-xs">
              We prioritize your success, understand your unique needs, and
              deliver tailored solutions that drive your business growth.
            </p>
            <div className="pt-7">
              <ArrowScrollButton to="contact">Let's Chat</ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          data-aos-offset="-1100"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Choose {companyDetails.name}?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="-1100"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h1 className="section-heading text-white mb-4">
                  Wide-ranging Expertise{" "}
                </h1>
                <p className="md:text-lg text-white font-semibold">
                  Our team brings deep knowledge across multiple technological
                  domains, allowing us to provide comprehensive solutions
                  tailored to your business.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt=""
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="-1100"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                {" "}
                <h1 className="section-heading text-white mb-4">
                  Tailored Solutions{" "}
                </h1>
                <p className="md:text-lg text-white font-semibold">
                  We understand that every business is unique. That’s why we
                  take the time to create customized solutions that align with
                  your specific goals.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="-1100"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h1 className="section-heading text-white mb-4">
                  Innovation at the Core
                </h1>
                <p className="md:text-lg text-white font-semibold">
                  We are always at the cutting edge of technology, ensuring your
                  business benefits from the latest advancements and
                  innovations.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="-1100"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h1 className="section-heading text-white mb-4">
                  Proven Success
                </h1>
                <p className="md:text-lg text-white font-semibold">
                  Our portfolio speaks for itself. We’ve successfully delivered
                  results for clients across various industries and built
                  lasting relationships based on trust and excellence.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      <ContactForm id="contact" />
    </>
  );
};

export default LandingPage;
