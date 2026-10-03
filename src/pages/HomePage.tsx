import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { projectCopy } from '../data/projects'
import { copy } from '../i18n'

const EMAIL = 'mailto:gunelhumbatovaa@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/gunel-humbatova-91ba8a220/' 
const GITHUB = 'https://github.com/gnlhmbtv'

export function HomePage() {
  const { lang } = useLang()
  const t = copy[lang]
  const projects = projectCopy[lang].projects
  const labels = projectCopy[lang]

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 id="hero-title">
          {t.headline}
          <span className="muted">{t.headlineMuted}</span>
        </h1>
        <p className="hero-lead">{t.lead}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#works">
            {t.ctaWorks}
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t.ctaContact}
          </a>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="works" aria-labelledby="works-title">
        <div className="section-head">
          <h2 id="works-title">{t.worksTitle}</h2>
          <p>{t.worksLead}</p>
        </div>

        <div className="works-grid">
          {projects.map((project) => (
            <Link
              className="work-card work-card-link"
              key={project.slug}
              to={`/projects/${project.slug}`}
            >
              <p className="work-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className="desc">{project.summary}</p>
              {project.storeLinks && (
                <div className="store-links">
                  <span
                    className="store-link"
                    role="link"
                    tabIndex={0}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        event.stopPropagation()
                      }
                    }}
                  >
                    {labels.appStore} ↗
                  </span>
                  <span
                    className="store-link"
                    role="link"
                    tabIndex={0}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        event.stopPropagation()
                      }
                    }}
                  >
                    {labels.googlePlay} ↗
                  </span>
                </div>
              )}
              <p className="stack">{project.stack}</p>
              <span className="card-cta">{t.viewProject}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="about-grid">
          <h2 id="about-title">{t.aboutTitle}</h2>
          <div className="about-body">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <ul className="skills">
              {t.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="contact">
          <h2 id="contact-title">{t.contactTitle}</h2>
          <p>{t.contactLead}</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={EMAIL}>
              {t.emailMe}
            </a>
            <a
              className="btn btn-ghost"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="btn btn-ghost"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
