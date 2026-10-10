import { motion } from 'framer-motion'
import { Mic, Database, FileCheck, Check, X } from 'lucide-react'
import './Solution.css'

const Solution = () => {
  const solutions = [
    {
      icon: <Mic size={24} />,
      title: 'Écoute ambiante',
      description: 'Whisper transcription + NLP transforment la consultation en dossier structuré en temps réel.',
    },
    {
      icon: <Database size={24} />,
      title: 'RAG médical',
      description: 'Suggestions sourcées (hypothèses, examens, alertes) depuis une base de connaissances validée.',
    },
    {
      icon: <FileCheck size={24} />,
      title: 'Dossier partagé',
      description: 'Rapports et lettres de référence générés. Le dossier suit le patient au prochain médecin.',
    },
  ]

  const doList = [
    'Transcrire et structurer la consultation',
    'Rechercher des protocoles dans la base RAG',
    'Résumer l\'histoire clinique',
    'Alerter (interactions, allergies connues)',
    'Proposer des axes d\'examens',
    'Assister sous le contrôle du médecin',
  ]

  const dontList = [
    'Remplacer le médecin ou son jugement',
    'Prendre la décision médicale finale',
    'Garantir un diagnostic correct à 100%',
    'Servir de source médicale infaillible',
    'Prescrire automatiquement un traitement',
    'Être utilisé sans validation humaine',
  ]

  return (
    <section className="solution section" id="solution">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Check size={14} />
            La solution
          </div>
          <h2 className="section-title">
            L'IA prépare, le médecin décide
          </h2>
          <p className="section-subtitle">
            Clinova AI est un assistant numérique, pas un médecin virtuel.
            L'intelligence artificielle prépare et organise ; l'expertise humaine garde le contrôle total.
          </p>
        </motion.div>

        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="solution-card-icon">
                {solution.icon}
              </div>
              <h3 className="solution-card-title">{solution.title}</h3>
              <p className="solution-card-description">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="solution-transparency"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="transparency-grid">
            <div className="transparency-card transparency-do">
              <h3 className="transparency-title">
                <Check size={20} />
                Clinova AI est conçu pour...
              </h3>
              <ul className="transparency-list">
                {doList.map((item, index) => (
                  <li key={index}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="transparency-card transparency-dont">
              <h3 className="transparency-title">
                <X size={20} />
                Clinova AI ne prétendra jamais...
              </h3>
              <ul className="transparency-list">
                {dontList.map((item, index) => (
                  <li key={index}>
                    <X size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution
