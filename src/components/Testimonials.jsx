import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Jean Dupont',
      role: 'Médecin Urgentiste',
      content: 'Clinova AI me permet de me concentrer sur mes patients au lieu de passer ma consultation à taper sur un clavier. C\'est un game-changer pour les urgences.',
      rating: 5,
    },
    {
      name: 'Dr. Marie Martin',
      role: 'Généraliste',
      content: 'Les suggestions sont toujours sourcées et pertinentes. Je garde le contrôle total, mais je gagne un temps précieux chaque jour.',
      rating: 5,
    },
    {
      name: 'Dr. Ahmed Benali',
      role: 'Chef de service',
      content: 'La standardisation des comptes rendus a amélioré la qualité de nos transmissions entre services. Un vrai plus pour la continuité des soins.',
      rating: 5,
    },
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Star size={14} />
            Témoignages
          </div>
          <h2 className="section-title">
            Ce qu'en disent les médecins
          </h2>
          <p className="section-subtitle">
            Des professionnels de santé qui testent et co-développent Clinova AI avec nous.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonials-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="testimonials-card-quote">
                <Quote size={32} />
              </div>
              <div className="testimonials-card-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonials-card-content">{testimonial.content}</p>
              <div className="testimonials-card-author">
                <div className="testimonials-card-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonials-card-name">{testimonial.name}</div>
                  <div className="testimonials-card-role">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
