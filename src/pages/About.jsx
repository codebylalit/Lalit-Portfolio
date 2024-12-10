import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { projects } from "../constants"; 
import { im } from "../assets/images";
import { github, linkedin } from "../assets/icons";

const About = () => {
  return (
    <section className="max-container bg-yellow-100 text-blue-950 font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-10 lg:mt-20">
        {/* Add an image to the left */}
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] lg:w-[650px] lg:h-[350px] rounded-full overflow-hidden">
          <img src={im} alt="Lalit" className="w-full h-full object-cover" />
        </div>

        {/* Personal info shifted to the right */}
        <div className="text-center lg:text-left">
          <h1 className="head-text text-2xl lg:text-4xl">
            Hello, I'm <span className="font-semibold drop-shadow">Lalit</span>{" "}
            👋
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-slate-500 text-sm md:text-base">
            <p>
              Aspiring Software Engineer, specializing in technical education
              through hands-on learning and building applications.
            </p>
          </div>

          {/* Button Container */}
          <div className="flex justify-center lg:justify-start gap-3 mt-2">
            <button
              className="border border-black bg-transparent text-black font-semibold py-2 px-3 rounded-xl transition-colors duration-300 hover:bg-gray-600 hover:text-white text-sm md:text-base"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/1rGT_88pD1cnX7DAiO3rG3UGVStXASfY_/view?usp=sharing")
              }
            >
              Download CV
            </button>
          </div>

          {/* Socials Container */}
          <div
            id="socials-container"
            className="flex justify-center lg:justify-start mt-4 gap-3"
          >
            <img
              src={linkedin}
              alt=""
              className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/lalit-kumar-38ba99171/")
              }
            />
            <img
              src={github}
              alt=""
              className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://github.com/codebylalit")
              }
            />
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col mt-20">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a student i building projects and leveling up my skills
            <Link to="/Projects" className="text-blue-500">
              [Projects],
            </Link>{" "}
            here is some of my experiences.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
