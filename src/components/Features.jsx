import { motion } from 'framer-motion'
import { Clock, Brain, Shield, Database, Users, Zap } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <Clock size={28} />,
      title: 'Gain de temps',
      description: 'Zéro double saisie. La documentation est faite à la fin de la visite, pas pendant.',
      color: 'teal',
    },
    {
      icon: <Brain size={28} />,
      title: 'Moins de charge cognitive',
      description: 'Le médecin n\'est plus un dactylographe. L\'historique est structuré en temps réel.',
      color: 'blue',
    },
    {
      icon: <Shield size={28} />,
      title: 'Sécurité & confidentialité',
      description: 'Chiffrement intégral, environnements séparés, traçabilité totale de chaque action.',
      color: 'green',
    },
    {
      icon: <Database size={28} />,
      title: 'Accès à l\'information',
      description: 'Chaque suggestion est sourcée depuis une base de connaissances médicales validée.',
      color: 'purple',
    },
    {
      icon: <Users size={28} />,
      title: 'Continuité des soins',
      description: 'Le dossier médical suit le patient au prochain médecin. Plus de perte d\'information.',
      color: 'orange',
    },
    {
      icon: <Zap size={28} />,
      title: 'Aide à la décision',
      description: 'Hypothèses, examens, alertes — toujours sourcées, jamais en boîte noire.',
      color: 'red',
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Zap size={14} />
            Fonctionnalités
          </div>
          <h2 className="section-title">
            Les + de Clinova AI
          </h2>
          <p className="section-subtitle">
            Ensemble pour une médecine plus efficace, plus sûre et plus humaine.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`features-card features-card-${feature.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="features-card-icon">
                {feature.icon}
              </div>
              <h3 className="features-card-title">{feature.title}</h3>
              <p className="features-card-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
