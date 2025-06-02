import React from 'react';
import { personalInfo, skills, projects } from './data';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <header style={{ textAlign: 'center' }}>
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          style={{ width: 150, borderRadius: '50%' }}
        />
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.title}</h3>
        <p style={{ maxWidth: 600, margin: 'auto' }}>{personalInfo.description}</p>
        <div style={{ marginTop: 10 }}>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" style={{ margin: 5 }}>GitHub</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: 5 }}>LinkedIn</a>
          <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ margin: 5 }}>Instagram</a>
          <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ margin: 5 }}>Facebook</a>
        </div>
      </header>

      <section style={{ marginTop: 40 }}>
        <h2>المهارات</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>المشاريع</h2>
        {projects.map(project => (
          <div key={project.title} style={{ marginBottom: 20, padding: 10, border: '1px solid #ddd', borderRadius: 8 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>التقنيات:</strong> {project.technologies.join(', ')}</p>
            {project.liveLink !== "#" && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>عرض مباشر</a>}
            {project.repoLink !== "#" && <a href={project.repoLink} target="_blank" rel="noopener noreferrer">كود المشروع</a>}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
