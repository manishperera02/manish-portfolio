import ReactGA from "react-ga4";

export const initGA = () => {
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  }
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

// Generic Custom Event Tracking
export const trackEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Contact Form Submissions
export const trackContactSubmit = (formName = "Contact Form") => {
  ReactGA.event({
    category: "Contact",
    action: "form_submission",
    label: formName,
  });
};

// Resume/CV Download Tracking
export const trackResumeDownload = (fileName = "Manish_Resume.pdf") => {
  ReactGA.event({
    category: "Download",
    action: "resume_download",
    label: fileName,
  });
};

// Project Link Click Tracking (GitHub / Live Demo)
export const trackProjectClick = (projectName, linkType, url) => {
  ReactGA.event({
    category: "Project",
    action: `click_${linkType}`, // e.g., 'click_github' or 'click_demo'
    label: `${projectName} - ${url}`,
  });
};

// Social Media Button Click Tracking
export const trackSocialClick = (platform, destination = "") => {
  ReactGA.event({
    category: "Social",
    action: "social_click",
    label: `${platform}${destination ? ` - ${destination}` : ''}`,
  });
};

// Outbound Link Click Tracking
export const trackOutboundLink = (url, label = "") => {
  ReactGA.event({
    category: "Outbound Link",
    action: "click",
    label: label || url,
  });
};

export default ReactGA;
