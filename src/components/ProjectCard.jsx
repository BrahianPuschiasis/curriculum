/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ title, description, repositories, videos, languages }) => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {}, [language]);

  return (
    <div className="mb-8 p-4 bg-white dark:bg-slate-900 shadow-md rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mb-4"></div>
      <div className="mb-4 space-y-4">
        {languages &&
          languages.map((lang, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-3 py-1 text-sm mr-2 language-badge"
              style={{
                backgroundColor: lang.backgroundColor,
                color: lang.textColor,
              }}
            >
              {lang.name}
            </span>
          ))}
      </div>
      <p>{description}</p>
      <div className="mb-4"></div>
      {repositories && (
        <div className="mt-2">
          <p className="font-semibold">{t("repositories")}:</p>
          <ul className="list-disc pl-6">
            {repositories.map((repo, index) => (
              <li key={index} className="group">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-4"></div>
      {videos && (
        <div className="mt-2">
          <p className="font-semibold">Videos:</p>
          <>
            {videos.map((video, index) => (
              <iframe
                key={index}
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectCard;
