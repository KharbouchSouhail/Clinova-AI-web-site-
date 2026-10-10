import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Workflow from './components/Workflow'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Workflow />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
