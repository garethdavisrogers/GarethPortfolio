import React from "react";
import ResumeComponents from "./ResumeComponents";

export default function Resume() {
  const applications = ResumeComponents.applications;
  const professionalExperience = ResumeComponents.professionalExperience;
  return (
    <div>
      <div className="applications">
        <h2>Applications:</h2>
        <div>
          {applications.map((app) => (
            <div key={app.repoLink}>
              <h3>{app.name}</h3>
              <a href={app.repoLink}>GitHubRepo</a>
              <h4>{app.description}</h4>
              <ul>
                {app.bulletPoints.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="applications">
        <h2>Selected Professional Experience:</h2>
        <div>
          {professionalExperience.map((job) => (
            <div key={job.company}>
              <h3>{job.company}</h3>
              <h4>{job.position}</h4>
              <ul>
                {job.bulletPoints.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
