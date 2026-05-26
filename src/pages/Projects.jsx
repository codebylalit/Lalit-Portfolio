import { CTA } from "../components";
import EditableImage from "../components/editing/EditableImage";
import EditableText from "../components/editing/EditableText";
import { arrow } from "../assets/icons";
import { usePortfolio } from "../hooks/usePortfolio";

const Projects = () => {
  const { data, setData, isEditMode, isAuth } = usePortfolio();
  const canEdit = isEditMode && isAuth;
  const { projects, projectsPage } = data;

  const updateProject = (index, field, value) => {
    setData((prev) => {
      const next = [...prev.projects];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, projects: next };
    });
  };

  const updateProjectsPage = (field, value) => {
    setData((prev) => ({
      ...prev,
      projectsPage: { ...prev.projectsPage, [field]: value },
    }));
  };

  return (
    <section className="max-container bg-yellow-100 text-blue-950 font-sans">
      <h1 className="head-text">
        <EditableText
          value={projectsPage.title}
          onChange={(v) => updateProjectsPage("title", v)}
        />{" "}
        <EditableText
          as="span"
          className="font-semibold"
          value={projectsPage.titleHighlight}
          onChange={(v) => updateProjectsPage("titleHighlight", v)}
        />
      </h1>

      <EditableText
        as="p"
        className="text-slate-500 mt-2 leading-relaxed"
        value={projectsPage.description}
        multiline
        onChange={(v) => updateProjectsPage("description", v)}
      />

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, i) => (
          <div className="lg:w-[400px] w-full" key={project.id}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <EditableImage
                  src={project.iconUrl}
                  alt={project.name}
                  imgClassName="w-50% h-50% object-contain"
                  onChange={(v) => updateProject(i, "iconUrl", v)}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                <EditableText
                  value={project.name}
                  onChange={(v) => updateProject(i, "name", v)}
                />
              </h4>
              <EditableText
                as="p"
                className="mt-2 text-slate-500"
                value={project.description}
                multiline
                onChange={(v) => updateProject(i, "description", v)}
              />
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  {canEdit && i === 0 ? (
                    <EditableText
                      value={projectsPage.linkLabel}
                      onChange={(v) => updateProjectsPage("linkLabel", v)}
                    />
                  ) : (
                    projectsPage.linkLabel
                  )}
                </a>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
