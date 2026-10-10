import { motion } from 'framer-motion'
import { ArrowRight, Play, Users } from 'lucide-react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta section" id="contact">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-bg">
            <div className="cta-gradient" />
            <div className="cta-grid" />
          </div>
          <div className="cta-content">
            <h2 className="cta-title">
              Construisons ensemble le futur de la consultation
            </h2>
            <p className="cta-subtitle">
              Nous voulons développer Clinova AI avec les médecins, pas seulement pour les médecins.
              Votre expertise du terrain est la seule façon d'éviter de construire une technologie impressionnante mais inutile.
            </p>
            <div className="cta-actions">
              <a href="mailto:contact@clinova-ai.fr" className="btn btn-primary cta-btn-primary">
                Demander une démo
                <ArrowRight size={18} />
              </a>
              <a href="mailto:contact@clinova-ai.fr" className="btn btn-outline cta-btn-outline">
                <Users size={18} />
                Rejoignez-nous
              </a>
            </div>
            <p className="cta-note">
              Simulation d'une consultation de bout en bout sur données synthétiques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
