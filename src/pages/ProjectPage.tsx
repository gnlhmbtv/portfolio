import { Link, useParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { getProject, projectCopy } from '../data/projects'

const AUTOSCOP_APP = 'https://go.autoscop.az/app'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const { lang } = useLang()
  const labels = projectCopy[lang]
  const project = getProject(lang, slug)

  if (!project) {
    return (
      <main className="project-page">
        <Link className="back-link" to={{ pathname: '/', hash: 'works' }}>
          {labels.back}
        </Link>
        <h1>{labels.notFoundTitle}</h1>
        <p className="project-summary">{labels.notFoundBody}</p>
        <Link className="btn btn-primary" to="/">
          {labels.homeLink}
        </Link>
      </main>
    )
  }

  return (
    <main className="project-page">
      <Link className="back-link" to={{ pathname: '/', hash: 'works' }}>
        {labels.back}
      </Link>

      <p className="work-tag">{project.tag}</p>
      <h1>{project.title}</h1>
      <p className="project-summary">{project.summary}</p>

      <div className="project-meta">
        <div>
          <p className="meta-label">{labels.roleLabel}</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="meta-label">{labels.stackLabel}</p>
          <p>{project.stack}</p>
        </div>
      </div>

      {project.storeLinks && (
        <div className="store-links project-store-links">
          <a
            className="store-link"
            href={AUTOSCOP_APP}
            target="_blank"
            rel="noreferrer"
          >
            {labels.appStore} ↗
          </a>
          <a
            className="store-link"
            href={AUTOSCOP_APP}
            target="_blank"
            rel="noreferrer"
          >
            {labels.googlePlay} ↗
          </a>
          <a
            className="btn btn-primary"
            href={AUTOSCOP_APP}
            target="_blank"
            rel="noreferrer"
          >
            {labels.openApp} ↗
          </a>
        </div>
      )}

      <section className="project-block">
        <h2>{labels.overviewLabel}</h2>
        {project.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="project-block">
        <h2>{labels.highlightsLabel}</h2>
        <div className="detail-grid">
          {project.highlights.map((item) => (
            <article className="detail-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-block">
        <h2>{labels.architectureLabel}</h2>
        <div className="detail-grid">
          {project.architecture.map((item) => (
            <article className="detail-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-block two-col">
        <div>
          <h2>{labels.featuresLabel}</h2>
          <ul className="bullet-list">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{labels.technicalLabel}</h2>
          <ul className="bullet-list">
            {project.technical.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-block outcome">
        <h2>{labels.outcomeLabel}</h2>
        <p>{project.outcome}</p>
      </section>
    </main>
  )
}
