import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Nouveau — Copilote clinique intelligent</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Regardez le patient,
            <br />
            <span className="hero-title-gradient">pas l'écran.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Clinova AI écoute, structure et documente la consultation en temps réel.
            Le médecin reste en contrôle et valide chaque décision.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#contact" className="btn btn-primary">
              Demander une démo
              <ArrowRight size={18} />
            </a>
            <a href="#solution" className="btn btn-secondary">
              <Play size={18} />
              Voir comment ça marche
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-number">80%</span>
              <span className="hero-stat-label">de temps administratif en moins</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">0</span>
              <span className="hero-stat-label">double saisie</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">suggestions sourcées</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero-card-title">Clinova AI Dashboard</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-waveform">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="hero-waveform-bar"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      height: `${Math.random() * 40 + 20}px`,
                    }}
                  />
                ))}
              </div>
              <div className="hero-transcript">
                <div className="hero-transcript-row">
                  <span className="hero-transcript-speaker">👨‍⚕️ Médecin</span>
                  <span className="hero-transcript-text">Depuis combien de temps avez-vous cette douleur ?</span>
                </div>
                <div className="hero-transcript-row">
                  <span className="hero-transcript-speaker">🧑 Patient</span>
                  <span className="hero-transcript-text">Depuis trois jours, surtout quand je respire profondément.</span>
                </div>
              </div>
              <div className="hero-extracted">
                <div className="hero-extracted-tag">Symptôme</div>
                <div className="hero-extracted-item">Douleur thoracique</div>
                <div className="hero-extracted-tag">Durée</div>
                <div className="hero-extracted-item">3 jours</div>
                <div className="hero-extracted-tag">Facteur aggravant</div>
                <div className="hero-extracted-item">Inspiration profonde</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
