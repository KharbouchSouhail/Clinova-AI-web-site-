import { motion } from 'framer-motion'
import { Mic, FileText, Brain, Database, Lightbulb, CheckCircle, FileOutput } from 'lucide-react'
import './Workflow.css'

const Workflow = () => {
  const steps = [
    {
      icon: <Mic size={24} />,
      number: '01',
      title: 'Consultation',
      description: 'Écoute de la conversation médecin-patient en temps réel.',
      details: ['Audio de la consultation', 'Entrée manuelle si nécessaire'],
    },
    {
      icon: <FileText size={24} />,
      number: '02',
      title: 'Transcription',
      description: 'Conversion de la voix en texte avec Whisper.',
      details: ['Transcription en temps réel', 'Identification des intervenants', 'Texte structuré et éditable'],
    },
    {
      icon: <Brain size={24} />,
      number: '03',
      title: 'Extraction clinique',
      description: 'Analyse et compréhension des informations.',
      details: ['NLP + modèles médicaux', 'Extraction des éléments clés'],
    },
    {
      icon: <FileText size={24} />,
      number: '04',
      title: 'Dossier structuré',
      description: 'Organisation automatique des informations.',
      details: ['Informations administratives', 'Antécédents médicaux', 'Allergies et traitements'],
    },
    {
      icon: <Database size={24} />,
      number: '05',
      title: 'RAG médical',
      description: 'Recherche d\'informations pertinentes et fiables.',
      details: ['Base de connaissances médicale', 'Recherche sémantique', 'Sources citées et traçables'],
    },
    {
      icon: <Lightbulb size={24} />,
      number: '06',
      title: 'Suggestions',
      description: 'Hypothèses, examens, informations à vérifier.',
      details: ['Diagnostics différentiels', 'Examens complémentaires', 'Alertes (médicaments, allergies)'],
    },
    {
      icon: <CheckCircle size={24} />,
      number: '07',
      title: 'Validation médecin',
      description: 'Contrôle, modification et décision.',
      details: ['Lecture et correction', 'Ajout d\'informations', 'Validation finale'],
    },
    {
      icon: <FileOutput size={24} />,
      number: '08',
      title: 'Résultats finaux',
      description: 'Des documents prêts à l\'emploi.',
      details: ['Compte rendu de consultation', 'Résumé médical', 'Lettre d\'orientation'],
    },
  ]

  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <FileText size={14} />
            Le workflow
          </div>
          <h2 className="section-title">
            De la voix au document final
          </h2>
          <p className="section-subtitle">
            Une intégration fluide de la voix à la documentation finale,
            conçue pour ne jamais interrompre le contact visuel avec le patient.
          </p>
        </motion.div>

        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="workflow-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="workflow-step-marker">
                <div className="workflow-step-number">{step.number}</div>
                {index < steps.length - 1 && <div className="workflow-step-line" />}
              </div>
              <div className="workflow-step-card">
                <div className="workflow-step-icon">
                  {step.icon}
                </div>
                <h3 className="workflow-step-title">{step.title}</h3>
                <p className="workflow-step-description">{step.description}</p>
                <ul className="workflow-step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow
