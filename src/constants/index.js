/**
 * @deprecated Use usePortfolio() or portfolioData.js instead.
 * Re-exports default data for any legacy imports.
 */
import { getDefaultPortfolioData } from "../data/portfolioData";

const defaults = getDefaultPortfolioData();

export const skills = defaults.skills;
export const experiences = defaults.experiences;
export const socialLinks = defaults.socialLinks;
export const projects = defaults.projects;
