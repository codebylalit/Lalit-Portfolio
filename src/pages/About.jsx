import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
import ProfileMedia from "../components/ProfileMedia";
import EditableImage from "../components/editing/EditableImage";
import EditableText from "../components/editing/EditableText";
import { usePortfolio } from "../hooks/usePortfolio";

const About = () => {
  const { data, setData, isEditMode, isAuth } = usePortfolio();
  const { about, skills, experiences } = data;
  const canEdit = isEditMode && isAuth;

  const updateAbout = (field, value) => {
    setData((prev) => ({
      ...prev,
      about: { ...prev.about, [field]: value },
    }));
  };

  const updateSkill = (index, field, value) => {
    setData((prev) => {
      const next = [...prev.skills];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, skills: next };
    });
  };

  const updateExperience = (index, field, value) => {
    setData((prev) => {
      const next = [...prev.experiences];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, experiences: next };
    });
  };

  const updateExperiencePoint = (expIndex, pointIndex, value) => {
    setData((prev) => {
      const next = [...prev.experiences];
      const points = [...next[expIndex].points];
      points[pointIndex] = value;
      next[expIndex] = { ...next[expIndex], points };
      return { ...prev, experiences: next };
    });
  };

  const updateAboutSocial = (index, field, value) => {
    setData((prev) => {
      const aboutSocials = [...prev.about.aboutSocials];
      aboutSocials[index] = { ...aboutSocials[index], [field]: value };
      return { ...prev, about: { ...prev.about, aboutSocials } };
    });
  };

  return (
    <section className="max-container bg-yellow-100 text-blue-950 font-sans">
      <div className="about-hero mt-8 sm:mt-12 lg:mt-16">
        <div className="about-hero-media">
          <ProfileMedia
            about={about}
            onImageChange={(v) => updateAbout("profileImage", v)}
          />
        </div>

        <div className="about-hero-content">
          <h1 className="head-text text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-tight">
            <EditableText
              value={about.greeting}
              onChange={(v) => updateAbout("greeting", v)}
            />{" "}
            <EditableText
              as="span"
              className="font-semibold drop-shadow"
              value={about.name}
              onChange={(v) => updateAbout("name", v)}
            />{" "}
            <EditableText
              value={about.emoji}
              onChange={(v) => updateAbout("emoji", v)}
            />
          </h1>

          <div className="mt-5 sm:mt-6 flex flex-col gap-4 text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            <EditableText
              as="p"
              value={about.bio}
              multiline
              onChange={(v) => updateAbout("bio", v)}
            />
          </div>

          <div className="flex justify-center lg:justify-start gap-3 mt-6 sm:mt-7">
            <button
              type="button"
              className="border-2 border-blue-950 bg-transparent text-blue-950 font-semibold py-2.5 px-5 rounded-xl transition-colors duration-300 hover:bg-blue-950 hover:text-white text-base sm:text-lg"
              onClick={() => {
                if (!canEdit) window.location.href = about.cvLink;
              }}
            >
              {canEdit ? (
                <EditableText
                  value={about.cvButtonText}
                  onChange={(v) => updateAbout("cvButtonText", v)}
                />
              ) : (
                about.cvButtonText
              )}
            </button>
          </div>

          <div
            id="socials-container"
            className="flex justify-center lg:justify-start mt-5 gap-4"
          >
            {about.aboutSocials.map((social, i) => (
              <div
                key={social.id}
                role="button"
                tabIndex={0}
                className="cursor-pointer"
                onClick={() => {
                  if (!canEdit) window.location.href = social.link;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !canEdit) {
                    window.location.href = social.link;
                  }
                }}
              >
                <EditableImage
                  src={social.iconUrl}
                  alt={social.name}
                  imgClassName="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  onChange={(v) => updateAboutSocial(i, "iconUrl", v)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col mt-20">
        <h3 className="subhead-text">
          <EditableText
            value={about.skillsTitle}
            onChange={(v) => updateAbout("skillsTitle", v)}
          />
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, i) => (
            <div className="block-container w-20 h-20" key={skill.id}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <EditableImage
                  src={skill.imageUrl}
                  alt={skill.name}
                  imgClassName="w-1/2 h-1/2 object-contain"
                  onChange={(v) => updateSkill(i, "imageUrl", v)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">
          <EditableText
            value={about.experienceSectionTitle}
            onChange={(v) => updateAbout("experienceSectionTitle", v)}
          />
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            <EditableText
              as="span"
              value={about.experienceIntroPrefix}
              onChange={(v) => updateAbout("experienceIntroPrefix", v)}
            />
            <Link to={about.experienceIntroLinkPath} className="text-blue-500">
              {about.experienceIntroLinkText}
            </Link>
            <EditableText
              as="span"
              value={about.experienceIntroSuffix}
              onChange={(v) => updateAbout("experienceIntroSuffix", v)}
            />
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, expIndex) => (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <EditableImage
                      src={experience.icon}
                      alt={experience.company_name}
                      imgClassName="w-[100%] h-[100%] object-contain rounded-full"
                      onChange={(v) => updateExperience(expIndex, "icon", v)}
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
                    <EditableText
                      value={experience.title}
                      onChange={(v) => updateExperience(expIndex, "title", v)}
                    />
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    <EditableText
                      value={experience.company_name}
                      onChange={(v) =>
                        updateExperience(expIndex, "company_name", v)
                      }
                    />
                  </p>
                  {experience.location ? (
                    <p
                      className="text-black-500/70 font-normal text-sm"
                      style={{ margin: "4px 0 0 0" }}
                    >
                      <EditableText
                        value={experience.location}
                        onChange={(v) =>
                          updateExperience(expIndex, "location", v)
                        }
                      />
                    </p>
                  ) : null}
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`${experience.id}-point-${pointIndex}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      <EditableText
                        value={point}
                        onChange={(v) =>
                          updateExperiencePoint(expIndex, pointIndex, v)
                        }
                      />
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
