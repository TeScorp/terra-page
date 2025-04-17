import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/project-1.jpg",
      title: "Full stack doctor Appointment",
      tags: ["API", "MERN", "Development"],
      projectLink: "https://github.com/TeScorp/TerraCare.git",
    },
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
