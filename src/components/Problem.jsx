import { motion } from 'framer-motion'
import { AlertTriangle, Brain, FileX } from 'lucide-react'
import './Problem.css'

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle size={28} />,
      title: 'Surcharge administrative',
      description: '80% du temps de consultation est consacré à la saisie — notes, dossiers, logiciels. Seulement 20% pour le vrai travail clinique.',
      stat: '80/20',
    },
    {
      icon: <Brain size={28} />,
      title: 'Surcharge cognitive',
      description: 'Le médecin doit mémoriser l\'historique, raisonner tout en tapant, et perd le contact visuel avec le patient.',
      stat: '-50%',
    },
    {
      icon: <FileX size={28} />,
      title: 'Pas de continuité des soins',
      description: 'Quand un patient voit un nouveau médecin, historique et examens sont refaits car le dossier n\'est pas disponible.',
      stat: '0%',
    },
  ]

  return (
    <section className="problem section" id="problem">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <AlertTriangle size={14} />
            Le problème
          </div>
          <h2 className="section-title">
            Le paradoxe de la consultation moderne
          </h2>
          <p className="section-subtitle">
            Les médecins passent plus de temps devant un écran qu'avec leurs patients.
            Cette accumulation crée une surcharge insoutenable.
          </p>
        </motion.div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="problem-card-icon">
                {problem.icon}
              </div>
              <div className="problem-card-stat">
                {problem.stat}
              </div>
              <h3 className="problem-card-title">{problem.title}</h3>
              <p className="problem-card-description">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-callout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="problem-callout-icon">
            <AlertTriangle size={24} />
          </div>
          <p>
            <strong>Cette accumulation crée une surcharge cognitive et administrative insoutenable</strong>,
            particulièrement dans les services à forte activité comme les urgences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
