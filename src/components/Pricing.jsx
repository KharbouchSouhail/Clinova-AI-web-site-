import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      period: '/mois',
      description: 'Pour les médecins individuels',
      features: [
        'Transcription Whisper',
        'Extraction clinique NLP',
        'Résumé automatique',
        'Support email',
        '5 consultations/jour',
      ],
      cta: 'Commencer',
      popular: false,
    },
    {
      name: 'Pro',
      price: '99',
      period: '/mois',
      description: 'Pour les cabinets et cliniques',
      features: [
        'Tout Starter',
        'RAG médical avancé',
        'Suggestions diagnostiques',
        'Génération de comptes rendus',
        'Intégration DMP',
        'Support prioritaire',
        'Consultations illimitées',
      ],
      cta: 'Essai gratuit',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      description: 'Pour les hôpitaux et réseaux',
      features: [
        'Tout Pro',
        'Licence institutionnelle',
        'API dédiée',
        'SSO & authentification',
        'SLA garanti',
        'Account manager',
        'Formation sur site',
      ],
      cta: 'Nous contacter',
      popular: false,
    },
  ]

  return (
    <section className="pricing section" id="pricing">
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
            Tarifs
          </div>
          <h2 className="section-title">
            Un plan pour chaque besoin
          </h2>
          <p className="section-subtitle">
            Commencez gratuitement, évoluez à votre rythme.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {plan.popular && (
                <div className="pricing-card-badge">Le plus populaire</div>
              )}
              <div className="pricing-card-header">
                <h3 className="pricing-card-name">{plan.name}</h3>
                <p className="pricing-card-description">{plan.description}</p>
                <div className="pricing-card-price">
                  <span className="pricing-card-amount">{plan.price}</span>
                  <span className="pricing-card-period">{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-card-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-card-cta`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
