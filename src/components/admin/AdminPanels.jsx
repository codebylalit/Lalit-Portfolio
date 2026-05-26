import { useState } from "react";

import { PROJECT_THEMES } from "../../data/portfolioData";
import { generateId } from "../../utils/dataHelpers";
import { fileToBase64 } from "../../utils/imageUtils";

const Field = ({ label, children, dark }) => (
  <label
    className={`block text-sm font-medium mb-4 ${
      dark ? "text-slate-200" : "text-blue-950"
    }`}
  >
    {label}
    {children}
  </label>
);

const inputClass = (dark) =>
  `mt-1 block w-full rounded-lg border px-3 py-2 text-sm ${
    dark
      ? "bg-slate-800 border-slate-600 text-white"
      : "bg-white border-gray-200 text-gray-900"
  }`;

const ImageUploadField = ({ value, onChange, dark }) => (
  <div className="mt-2 flex items-center gap-4">
    {value && (
      <img src={value} alt="" className="w-16 h-16 object-cover rounded-lg" />
    )}
    <input
      type="file"
      accept="image/*"
      className="text-sm"
      onChange={async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
          onChange(await fileToBase64(file));
        } catch {
          /* toast handled by parent */
        }
      }}
    />
  </div>
);

export const HeroPanel = ({ data, setData, dark }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold">Hero stages (3D home)</h3>
    {data.hero.stages.map((stage, i) => (
      <div
        key={stage.id}
        className={`p-4 rounded-xl border ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <p className="text-xs font-semibold mb-3 opacity-70">Stage {i + 1}</p>
        {stage.type === "intro" ? (
          <>
            <Field label="Line 1" dark={dark}>
              <input
                className={inputClass(dark)}
                value={stage.line1}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], line1: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
            <Field label="Name" dark={dark}>
              <input
                className={inputClass(dark)}
                value={stage.name}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], name: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
            <Field label="Subtitle" dark={dark}>
              <input
                className={inputClass(dark)}
                value={stage.line2}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], line2: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
          </>
        ) : (
          <>
            <Field label="Text" dark={dark}>
              <textarea
                className={inputClass(dark)}
                rows={3}
                value={stage.text}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], text: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
            <Field label="Button" dark={dark}>
              <input
                className={inputClass(dark)}
                value={stage.buttonText}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], buttonText: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
            <Field label="Link path" dark={dark}>
              <input
                className={inputClass(dark)}
                value={stage.link}
                onChange={(e) =>
                  setData((p) => {
                    const stages = [...p.hero.stages];
                    stages[i] = { ...stages[i], link: e.target.value };
                    return { ...p, hero: { ...p.hero, stages } };
                  })
                }
              />
            </Field>
          </>
        )}
      </div>
    ))}
  </div>
);

export const AboutPanel = ({ data, setData, dark }) => (
  <div className="space-y-4">
    <Field label="Greeting" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.greeting}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, greeting: e.target.value },
          }))
        }
      />
    </Field>
    <Field label="Name" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.name}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, name: e.target.value },
          }))
        }
      />
    </Field>
    <Field label="Bio" dark={dark}>
      <textarea
        className={inputClass(dark)}
        rows={4}
        value={data.about.bio}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, bio: e.target.value },
          }))
        }
      />
    </Field>
    <Field label="Profile media" dark={dark}>
      <select
        className={inputClass(dark)}
        value={data.about.profileMediaType || "embed"}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, profileMediaType: e.target.value },
          }))
        }
      >
        <option value="embed">Pinterest embed</option>
        <option value="image">Image upload</option>
      </select>
    </Field>
    {(data.about.profileMediaType || "embed") === "embed" ? (
      <>
        <Field label="Embed URL" dark={dark}>
          <input
            className={inputClass(dark)}
            value={data.about.profileEmbedUrl || ""}
            onChange={(e) =>
              setData((p) => ({
                ...p,
                about: { ...p.about, profileEmbedUrl: e.target.value },
              }))
            }
            placeholder="https://assets.pinterest.com/ext/embed.html?id=..."
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Width" dark={dark}>
            <input
              type="number"
              className={inputClass(dark)}
              value={data.about.profileEmbedWidth ?? 345}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  about: {
                    ...p.about,
                    profileEmbedWidth: Number(e.target.value),
                  },
                }))
              }
            />
          </Field>
          <Field label="Height" dark={dark}>
            <input
              type="number"
              className={inputClass(dark)}
              value={data.about.profileEmbedHeight ?? 295}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  about: {
                    ...p.about,
                    profileEmbedHeight: Number(e.target.value),
                  },
                }))
              }
            />
          </Field>
        </div>
      </>
    ) : (
      <Field label="Profile image" dark={dark}>
        <ImageUploadField
          value={data.about.profileImage}
          dark={dark}
          onChange={(v) =>
            setData((p) => ({
              ...p,
              about: { ...p.about, profileImage: v },
            }))
          }
        />
      </Field>
    )}
    <Field label="CV link" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.cvLink}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, cvLink: e.target.value },
          }))
        }
      />
    </Field>
    <Field label="CV button text" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.cvButtonText}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, cvButtonText: e.target.value },
          }))
        }
      />
    </Field>
    <h4 className="font-semibold mt-6">About page social icons</h4>
    {data.about.aboutSocials.map((social, i) => (
      <div
        key={social.id}
        className={`p-3 rounded-lg border mb-3 ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <Field label="Link" dark={dark}>
          <input
            className={inputClass(dark)}
            value={social.link}
            onChange={(e) =>
              setData((p) => {
                const aboutSocials = [...p.about.aboutSocials];
                aboutSocials[i] = { ...aboutSocials[i], link: e.target.value };
                return { ...p, about: { ...p.about, aboutSocials } };
              })
            }
          />
        </Field>
        <Field label="Icon" dark={dark}>
          <ImageUploadField
            value={social.iconUrl}
            dark={dark}
            onChange={(v) =>
              setData((p) => {
                const aboutSocials = [...p.about.aboutSocials];
                aboutSocials[i] = { ...aboutSocials[i], iconUrl: v };
                return { ...p, about: { ...p.about, aboutSocials } };
              })
            }
          />
        </Field>
      </div>
    ))}
  </div>
);

export const SkillsPanel = ({ data, setData, dark }) => (
  <div>
    <button
      type="button"
      className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium"
      onClick={() =>
        setData((p) => ({
          ...p,
          skills: [
            ...p.skills,
            {
              id: generateId(),
              name: "New Skill",
              type: "Frontend",
              imageUrl: "",
            },
          ],
        }))
      }
    >
      + Add skill
    </button>
    {data.skills.map((skill, i) => (
      <div
        key={skill.id}
        className={`p-4 mb-4 rounded-xl border ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold opacity-70">{skill.name}</span>
          <button
            type="button"
            className="text-red-500 text-xs"
            onClick={() =>
              setData((p) => ({
                ...p,
                skills: p.skills.filter((_, idx) => idx !== i),
              }))
            }
          >
            Delete
          </button>
        </div>
        <Field label="Name" dark={dark}>
          <input
            className={inputClass(dark)}
            value={skill.name}
            onChange={(e) =>
              setData((p) => {
                const skills = [...p.skills];
                skills[i] = { ...skills[i], name: e.target.value };
                return { ...p, skills };
              })
            }
          />
        </Field>
        <Field label="Type" dark={dark}>
          <input
            className={inputClass(dark)}
            value={skill.type}
            onChange={(e) =>
              setData((p) => {
                const skills = [...p.skills];
                skills[i] = { ...skills[i], type: e.target.value };
                return { ...p, skills };
              })
            }
          />
        </Field>
        <Field label="Icon" dark={dark}>
          <ImageUploadField
            value={skill.imageUrl}
            dark={dark}
            onChange={(v) =>
              setData((p) => {
                const skills = [...p.skills];
                skills[i] = { ...skills[i], imageUrl: v };
                return { ...p, skills };
              })
            }
          />
        </Field>
      </div>
    ))}
  </div>
);

export const ProjectsPanel = ({ data, setData, dark }) => (
  <div>
    <Field label="Page description" dark={dark}>
      <textarea
        className={inputClass(dark)}
        rows={4}
        value={data.projectsPage.description}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            projectsPage: {
              ...p.projectsPage,
              description: e.target.value,
            },
          }))
        }
      />
    </Field>
    <button
      type="button"
      className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium"
      onClick={() =>
        setData((p) => ({
          ...p,
          projects: [
            ...p.projects,
            {
              id: generateId(),
              name: "New Project",
              description: "",
              link: "",
              iconUrl: "",
              theme: "btn-back-blue",
            },
          ],
        }))
      }
    >
      + Add project
    </button>
    {data.projects.map((project, i) => (
      <div
        key={project.id}
        className={`p-4 mb-4 rounded-xl border ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <div className="flex justify-between mb-2">
          <span className="font-semibold">{project.name}</span>
          <button
            type="button"
            className="text-red-500 text-xs"
            onClick={() =>
              setData((p) => ({
                ...p,
                projects: p.projects.filter((_, idx) => idx !== i),
              }))
            }
          >
            Delete
          </button>
        </div>
        {["name", "description", "link"].map((field) => (
          <Field key={field} label={field} dark={dark}>
            {field === "description" ? (
              <textarea
                className={inputClass(dark)}
                rows={2}
                value={project[field]}
                onChange={(e) =>
                  setData((p) => {
                    const projects = [...p.projects];
                    projects[i] = { ...projects[i], [field]: e.target.value };
                    return { ...p, projects };
                  })
                }
              />
            ) : (
              <input
                className={inputClass(dark)}
                value={project[field]}
                onChange={(e) =>
                  setData((p) => {
                    const projects = [...p.projects];
                    projects[i] = { ...projects[i], [field]: e.target.value };
                    return { ...p, projects };
                  })
                }
              />
            )}
          </Field>
        ))}
        <Field label="Theme" dark={dark}>
          <select
            className={inputClass(dark)}
            value={project.theme}
            onChange={(e) =>
              setData((p) => {
                const projects = [...p.projects];
                projects[i] = { ...projects[i], theme: e.target.value };
                return { ...p, projects };
              })
            }
          >
            {PROJECT_THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Icon" dark={dark}>
          <ImageUploadField
            value={project.iconUrl}
            dark={dark}
            onChange={(v) =>
              setData((p) => {
                const projects = [...p.projects];
                projects[i] = { ...projects[i], iconUrl: v };
                return { ...p, projects };
              })
            }
          />
        </Field>
      </div>
    ))}
  </div>
);

export const ExperiencePanel = ({ data, setData, dark }) => (
  <div>
    <Field label="Intro (before link)" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.experienceIntroPrefix}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, experienceIntroPrefix: e.target.value },
          }))
        }
      />
    </Field>
    <Field label="Intro (after link)" dark={dark}>
      <input
        className={inputClass(dark)}
        value={data.about.experienceIntroSuffix}
        onChange={(e) =>
          setData((p) => ({
            ...p,
            about: { ...p.about, experienceIntroSuffix: e.target.value },
          }))
        }
      />
    </Field>
    <button
      type="button"
      className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium"
      onClick={() =>
        setData((p) => ({
          ...p,
          experiences: [
            ...p.experiences,
            {
              id: generateId(),
              title: "Role",
              company_name: "Company",
              location: "",
              iconBg: "#accbe1",
              icon: "",
              date: "2024 - Present",
              points: ["Achievement"],
            },
          ],
        }))
      }
    >
      + Add experience
    </button>
    {data.experiences.map((exp, i) => (
      <div
        key={exp.id}
        className={`p-4 mb-4 rounded-xl border ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <div className="flex justify-between mb-2">
          <span className="font-semibold">{exp.title}</span>
          <button
            type="button"
            className="text-red-500 text-xs"
            onClick={() =>
              setData((p) => ({
                ...p,
                experiences: p.experiences.filter((_, idx) => idx !== i),
              }))
            }
          >
            Delete
          </button>
        </div>
        {["title", "company_name", "location", "date", "iconBg"].map((field) => (
          <Field key={field} label={field} dark={dark}>
            <input
              className={inputClass(dark)}
              value={exp[field]}
              onChange={(e) =>
                setData((p) => {
                  const experiences = [...p.experiences];
                  experiences[i] = {
                    ...experiences[i],
                    [field]: e.target.value,
                  };
                  return { ...p, experiences };
                })
              }
            />
          </Field>
        ))}
        <Field label="Icon" dark={dark}>
          <ImageUploadField
            value={exp.icon}
            dark={dark}
            onChange={(v) =>
              setData((p) => {
                const experiences = [...p.experiences];
                experiences[i] = { ...experiences[i], icon: v };
                return { ...p, experiences };
              })
            }
          />
        </Field>
        <Field label="Bullet points (one per line)" dark={dark}>
          <textarea
            className={inputClass(dark)}
            rows={5}
            value={exp.points.join("\n")}
            onChange={(e) =>
              setData((p) => {
                const experiences = [...p.experiences];
                experiences[i] = {
                  ...experiences[i],
                  points: e.target.value.split("\n").filter(Boolean),
                };
                return { ...p, experiences };
              })
            }
          />
        </Field>
      </div>
    ))}
  </div>
);

export const ContactPanel = ({ data, setData, dark }) => (
  <div className="space-y-4">
    {Object.entries(data.contact).map(([key, val]) => (
      <Field key={key} label={key} dark={dark}>
        <input
          className={inputClass(dark)}
          value={val}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              contact: { ...p.contact, [key]: e.target.value },
            }))
          }
        />
      </Field>
    ))}
  </div>
);

export const SocialPanel = ({ data, setData, dark }) => (
  <div>
    <button
      type="button"
      className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium"
      onClick={() =>
        setData((p) => ({
          ...p,
          socialLinks: [
            ...p.socialLinks,
            {
              id: generateId(),
              name: "Social",
              link: "",
              iconUrl: "",
            },
          ],
        }))
      }
    >
      + Add link
    </button>
    {data.socialLinks.map((link, i) => (
      <div
        key={link.id}
        className={`p-4 mb-4 rounded-xl border ${dark ? "border-slate-700" : "border-slate-200"}`}
      >
        <div className="flex justify-between mb-2">
          <span>{link.name}</span>
          <button
            type="button"
            className="text-red-500 text-xs"
            onClick={() =>
              setData((p) => ({
                ...p,
                socialLinks: p.socialLinks.filter((_, idx) => idx !== i),
              }))
            }
          >
            Delete
          </button>
        </div>
        <Field label="Name" dark={dark}>
          <input
            className={inputClass(dark)}
            value={link.name}
            onChange={(e) =>
              setData((p) => {
                const socialLinks = [...p.socialLinks];
                socialLinks[i] = { ...socialLinks[i], name: e.target.value };
                return { ...p, socialLinks };
              })
            }
          />
        </Field>
        <Field label="URL" dark={dark}>
          <input
            className={inputClass(dark)}
            value={link.link}
            onChange={(e) =>
              setData((p) => {
                const socialLinks = [...p.socialLinks];
                socialLinks[i] = { ...socialLinks[i], link: e.target.value };
                return { ...p, socialLinks };
              })
            }
          />
        </Field>
        <Field label="Icon" dark={dark}>
          <ImageUploadField
            value={link.iconUrl}
            dark={dark}
            onChange={(v) =>
              setData((p) => {
                const socialLinks = [...p.socialLinks];
                socialLinks[i] = { ...socialLinks[i], iconUrl: v };
                return { ...p, socialLinks };
              })
            }
          />
        </Field>
      </div>
    ))}
  </div>
);

export const NavbarPanel = ({ data, setData, dark }) => (
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold mb-3">Navbar</h4>
      <Field label="First name" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.navbar.firstName}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              navbar: { ...p.navbar, firstName: e.target.value },
            }))
          }
        />
      </Field>
      <Field label="Last name" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.navbar.lastName}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              navbar: { ...p.navbar, lastName: e.target.value },
            }))
          }
        />
      </Field>
    </div>
    <div>
      <h4 className="font-semibold mb-3">Footer</h4>
      <Field label="Copyright name" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.footer.copyrightName}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              footer: { ...p.footer, copyrightName: e.target.value },
            }))
          }
        />
      </Field>
      <Field label="Year" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.footer.year}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              footer: { ...p.footer, year: e.target.value },
            }))
          }
        />
      </Field>
    </div>
    <div>
      <h4 className="font-semibold mb-3">CTA block</h4>
      <Field label="Line 1" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.cta.text}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              cta: { ...p.cta, text: e.target.value },
            }))
          }
        />
      </Field>
      <Field label="Line 2" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.cta.textLine2}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              cta: { ...p.cta, textLine2: e.target.value },
            }))
          }
        />
      </Field>
      <Field label="Button" dark={dark}>
        <input
          className={inputClass(dark)}
          value={data.cta.buttonText}
          onChange={(e) =>
            setData((p) => ({
              ...p,
              cta: { ...p.cta, buttonText: e.target.value },
            }))
          }
        />
      </Field>
    </div>
  </div>
);

export const SettingsPanel = ({
  data,
  setData,
  dark,
  onPasswordChange,
  onExport,
  onImport,
  onReset,
  onSave,
  onToggleEdit,
}) => {
  const [newPass, setNewPass] = useState("");
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">Change admin password</h4>
        <input
          type="password"
          className={inputClass(dark)}
          placeholder="New password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <button
          type="button"
          className="mt-2 px-4 py-2 bg-blue-950 text-white rounded-lg text-sm"
          onClick={() => {
            if (newPass.length >= 4) {
              onPasswordChange(newPass);
              setNewPass("");
            }
          }}
        >
          Update password
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm"
        >
          Save all
        </button>
        <button
          type="button"
          onClick={onExport}
          className="px-4 py-2 bg-blue-950 text-white rounded-lg text-sm"
        >
          Export JSON
        </button>
        <button
          type="button"
          onClick={onImport}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Import JSON
        </button>
        <button
          type="button"
          onClick={onToggleEdit}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm"
        >
          Toggle inline edit
        </button>
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
        >
          Reset defaults
        </button>
      </div>
      <p className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
        Default password: portfolio2024 (change after first login). Data is stored
        in this browser&apos;s localStorage only.
      </p>
    </div>
  );
};
