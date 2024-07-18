import React, { useState } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';
import EXPERIENCE from '../../assets/experience';

export default function Work() {
  const [work, setWork] = useState(WORK[0]);
  return (
    <div className="about work">
      <Sidebar
        items={EXPERIENCE.map((exp) => (
          <Experience
            {...exp}
            dates={[exp.dates.start, exp.dates.end ?? 'Present']}
          />
        ))}
      >
        <div className="description">
          <p className="bio">
            Third year Computer Science and Psychology student at UOttawa focused on UX Design/Product Design. Eclectic problem solver with strong foundation in user research/market research honed through experience in graphic design and various projects. Passionate about crafting intuitive designs using my experience from graphic design and web development.
          </p>
          <br/>
          <p>
            Currently studying{' '}
            <i>
              Computer Science and Psychology
            </i>{' '}
            @ University of Ottawa
          </p>
          <div className="contact">
            <a href="mailto:sam.pich@outlook.com">Email</a>
            <a href="https://github.com/sam-pich">GitHub</a>
            <a href="https://www.linkedin.com/in/sampich/">LinkedIn</a>
          </div>
          <p className="section-header pt-6">EXPERIENCE</p>
        </div>
      </Sidebar>
      <div className="intro-container">
        <p className="section-header projects-header">SELECTED WORK</p>
        <div className="project-links">
          {WORK.map((w) => (
              <p
                  onClick={() => setWork(w)}
                  className={work.name === w.name && 'selected-project'}
              >
                {w.name}
              </p>
          ))}
        </div>
        <div className="projects-container">
          <div>
            <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="project-images"
            >
              {work.images.map((img, index) => (
                  <img
                      src={`images/${img}`}
                      alt={`${work.name} number ${index}`}
                      style={{ maxWidth: `${100 / work.images.length}%` }}
                      key={`${work.name} number ${index}`}
                  />
              ))}
            </a>
            <p
                className="heading project-heading"
                id={work.name.replace(' ', '_')}
            >
              {work.name}
            </p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
            <br />
            <br />
          </div>
        </div>
        <div className="mobile-project-info">
          {WORK.map((work) => (
              <div>
                <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-images"
                >
                  {work.images.map((img, index) => (
                      <img
                          src={`images/${img}`}
                          alt={`${work.name} number ${index}`}
                          style={{ maxWidth: `${100 / work.images.length}%` }}
                          key={`${work.name} number ${index}`}
                      />
                  ))}
                </a>
                <p
                    className="heading project-heading"
                    id={work.name.replace(' ', '_')}
                >
                  {work.name}
                </p>
                <br />
                <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
                <br />
                <br />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience({ name, dates, description, position, link }) {
  return (
      <div className="experience-container">
        <div className="experience-header">
          <a href={link} target="_blank" rel="noreferrer">
            <b>{name}</b>
          </a>
          <p className="experience-dates">{dates.join('-')}</p>
        </div>
        <p className="experience-position">{position}</p>
        <p>{description}</p>
      </div>
  );
}
