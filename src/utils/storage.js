import {
  DEFAULT_PROFILE_IMAGE,
  getDefaultPortfolioData,
} from "../data/portfolioData";

const isValidImageSrc = (src) =>
  typeof src === "string" && src.trim().length > 0;

export const STORAGE_KEY = "portfolio_cms_data";

export const loadPortfolioData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
};

export const savePortfolioData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const clearPortfolioData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportPortfolioJson = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const importPortfolioJson = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed || typeof parsed !== "object") {
          reject(new Error("Invalid JSON structure"));
          return;
        }
        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });

export const mergeWithDefaults = (stored) => {
  const defaults = getDefaultPortfolioData();
  if (!stored) return defaults;
  return {
    ...defaults,
    ...stored,
    meta: { ...defaults.meta, ...stored.meta },
    navbar: { ...defaults.navbar, ...stored.navbar },
    hero: { ...defaults.hero, ...stored.hero },
    about: {
      ...defaults.about,
      ...stored.about,
      profileMediaType:
        stored.about?.profileMediaType === "embed" &&
        isValidImageSrc(stored.about?.profileEmbedUrl)
          ? "embed"
          : "image",
      profileImage: isValidImageSrc(stored.about?.profileImage)
        ? stored.about.profileImage
        : DEFAULT_PROFILE_IMAGE,
      profileEmbedUrl:
        stored.about?.profileEmbedUrl ?? defaults.about.profileEmbedUrl,
      profileEmbedWidth:
        stored.about?.profileEmbedWidth ?? defaults.about.profileEmbedWidth,
      profileEmbedHeight:
        stored.about?.profileEmbedHeight ?? defaults.about.profileEmbedHeight,
      experienceIntroPrefix:
        stored.about?.experienceIntroPrefix ??
        stored.about?.experienceIntro?.split("[Projects]")[0] ??
        defaults.about.experienceIntroPrefix,
      experienceIntroSuffix:
        stored.about?.experienceIntroSuffix ??
        stored.about?.experienceIntro?.split("[Projects]")[1] ??
        defaults.about.experienceIntroSuffix,
    },
    contact: { ...defaults.contact, ...stored.contact },
    cta: { ...defaults.cta, ...stored.cta },
    footer: { ...defaults.footer, ...stored.footer },
    projectsPage: { ...defaults.projectsPage, ...stored.projectsPage },
    settings: { ...defaults.settings, ...stored.settings },
    skills: stored.skills?.length ? stored.skills : defaults.skills,
    experiences: stored.experiences?.length
      ? stored.experiences
      : defaults.experiences,
    projects: stored.projects?.length ? stored.projects : defaults.projects,
    socialLinks: stored.socialLinks?.length
      ? stored.socialLinks
      : defaults.socialLinks,
  };
};
