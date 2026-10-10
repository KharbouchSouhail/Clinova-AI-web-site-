import { motion } from 'framer-motion'
import { Mail, Linkedin, User, ArrowRight } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const contacts = [
    {
      name: 'Souhail Kharbouch',
      email: 'kharbouch.souhail@ensam-casa.ma',
      linkedin: 'https://linkedin.com/in/souhail-kharbouch',
      linkedinDisplay: 'linkedin.com/in/souhail-kharbouch',
      initials: 'SK',
    },
    {
      name: 'Yassine Jahjah',
      email: 'jahjah.yassine@ensam-casa.ma',
      linkedin: 'https://www.linkedin.com/in/yassine-jahjah/',
      linkedinDisplay: 'linkedin.com/in/yassine-jahjah',
      initials: 'YJ',
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Mail size={14} />
            Contact
          </div>
          <h2 className="section-title">
            Contactez-nous
          </h2>
          <p className="section-subtitle">
            Une question, une envie de collaboration ou de démo ?
            N'hésitez pas à nous contacter directement.
          </p>
        </motion.div>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="contact-card-avatar">
                {contact.initials}
              </div>
              <h3 className="contact-card-name">{contact.name}</h3>
              <div className="contact-card-info">
                <a href={`mailto:${contact.email}`} className="contact-card-item">
                  <Mail size={18} />
                  <span>{contact.email}</span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-item"
                >
                  <Linkedin size={18} />
                  <span>{contact.linkedinDisplay}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="contact-cta-text">
            Vous souhaitez découvrir Clinova AI lors d'une démonstration personnalisée ?
          </p>
          <a href="mailto:contact@clinova-ai.fr" className="btn btn-primary">
            Demander une démo
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
