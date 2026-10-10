import { Stethoscope, Mail, Globe } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">
                <Stethoscope size={20} />
              </div>
              <span className="footer-logo-text">
                Clinova<span className="footer-logo-accent">AI</span>
              </span>
            </a>
            <p className="footer-tagline">
              Votre copilote clinique intelligent.
              Look at the patient, not the screen.
            </p>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Produit</h4>
            <a href="#solution" className="footer-link">Solution</a>
            <a href="#features" className="footer-link">Fonctionnalités</a>
            <a href="#pricing" className="footer-link">Tarifs</a>
            <a href="#workflow" className="footer-link">Workflow</a>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Entreprise</h4>
            <a href="#problem" className="footer-link">À propos</a>
            <a href="#testimonials" className="footer-link">Témoignages</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="footer-contact">
            <h4 className="footer-links-title">Contact</h4>
            <a href="mailto:contact@clinova-ai.fr" className="footer-contact-item">
              <Mail size={16} />
              contact@clinova-ai.fr
            </a>
            <a href="https://www.clinova-ai.fr" className="footer-contact-item">
              <Globe size={16} />
              www.clinova-ai.fr
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Clinova AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
