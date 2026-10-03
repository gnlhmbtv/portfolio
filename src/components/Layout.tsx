import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { copy } from '../i18n'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { lang, setLang } = useLang()
  const t = copy[lang]
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    setLangOpen(false)

    if (location.hash) {
      const id = location.hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!langRef.current?.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const closeMenus = () => {
    setMenuOpen(false)
    setLangOpen(false)
  }

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  return (
    <div className="page">
      <header className="header">
        <Link className="logo" to="/" onClick={closeMenus}>
          Gunel Humbatova.
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>

        <nav className={`nav${menuOpen ? ' open' : ''}`} aria-label="Primary">
          <a href={sectionHref('works')} onClick={closeMenus}>
            {t.navWorks}
          </a>
          <a href={sectionHref('about')} onClick={closeMenus}>
            {t.navAbout}
          </a>
          <a href={sectionHref('contact')} onClick={closeMenus}>
            {t.navContact}
          </a>

          <div className="lang" ref={langRef}>
            <button
              className="lang-btn"
              type="button"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              onClick={() => setLangOpen((open) => !open)}
            >
              {lang.toUpperCase()}
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M3 4.5 6 7.5 9 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {langOpen && (
              <ul className="lang-menu" role="listbox" aria-label="Language">
                {(['az', 'en'] as const).map((code) => (
                  <li key={code} role="option" aria-selected={lang === code}>
                    <button
                      type="button"
                      aria-current={lang === code || undefined}
                      onClick={() => {
                        setLang(code)
                        setLangOpen(false)
                      }}
                    >
                      {code.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>

      {children}

      <footer className="footer">
        <span>{t.footer}</span>
        <Link to="/">Gunel Humbatova.</Link>
      </footer>
    </div>
  )
}
