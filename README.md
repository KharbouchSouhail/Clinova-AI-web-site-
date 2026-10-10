# Clinova AI — Site Web

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.0.0-646CFF?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer%20Motion-10.16.0-FF0055?style=flat-square" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lucide%20React-0.294.0-000000?style=flat-square" alt="Lucide React" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

<p align="center">
  <strong>Votre copilote clinique intelligent.</strong><br/>
  Look at the patient, not the screen.
</p>

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Contributeurs](#contributeurs)
- [Licence](#licence)
- [Contact](#contact)

---

## 🏥 À propos

**Clinova AI** est un copilote clinique intelligent qui transforme la consultation médicale grâce à l'IA. Le système écoute ambiamment la consultation, transcrit, structure et documente automatiquement, permettant au médecin de se concentrer sur le patient plutôt que sur l'écran.

### Le problème
- **80% du temps** de consultation est consacré à l'administratif
- Surcharge cognitive : le médecin perd le contact visuel avec le patient
- Pas de continuité des soins entre médecins

### La solution
- 🎤 **Écoute ambiante** — Transcription Whisper + NLP
- 🧠 **RAG médical** — Suggestions sourcées depuis une base validée
- 📄 **Dossier partagé** — Le dossier médical suit le patient

> *L'IA prépare, le médecin décide.*

---

## ✨ Fonctionnalités

- 🎨 **Design moderne et responsive** — Mobile, tablette, desktop
- ⚡ **Animations fluides** — Framer Motion pour une expérience utilisateur premium
- 🎭 **Dashboard interactif** — Visualisation temps réel de la consultation
- 📊 **Sections commerciales** — Problème, Solution, Workflow, Témoignages, Tarifs
- 📧 **Page de contact** — Coordonnées de l'équipe
- 🌙 **Thème professionnel** — Gradients teal/cyan, ombres, glassmorphism

---

## 🛠️ Technologies

| Technologie | Version | Usage |
|-------------|---------|-------|
| **React** | 18.3.1 | Bibliothèque UI |
| **Vite** | 5.0.0 | Bundler & dev server |
| **React Router** | 6.20.0 | Routing SPA |
| **Framer Motion** | 10.16.0 | Animations |
| **Lucide React** | 0.294.0 | Icônes |
| **Inter & Space Grotesk** | — | Typographie |

---

## 🚀 Installation

### Prérequis

- **Node.js** >= 16.x
- **npm** >= 8.x ou **yarn**

### Étapes

```bash
# Cloner le dépôt
git clone <url-du-depot>

# Naviguer dans le dossier
cd clinova-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement (port 3000) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |

---

## 📁 Structure du projet

```
clinova-website/
├── index.html              # Point d'entrée HTML
├── package.json            # Dépendances & scripts
├── vite.config.js          # Configuration Vite
├── .gitignore              # Fichiers ignorés par Git
├── README.md               # Ce fichier
│
└── src/
    ├── main.jsx            # Bootstrap React
    ├── App.jsx             # Composant principal & routing
    ├── index.css           # Styles globaux & variables CSS
    │
    └── components/
        ├── Navbar.jsx/.css       # Navigation responsive
        ├── Hero.jsx/.css         # Section héro avec dashboard animé
        ├── Problem.jsx/.css      # Les 3 problèmes identifiés
        ├── Solution.jsx/.css     # Solution + transparence totale
        ├── Workflow.jsx/.css     # 8 étapes du workflow
        ├── Features.jsx/.css     # 6 fonctionnalités clés
        ├── Testimonials.jsx/.css # Témoignages médecins
        ├── Pricing.jsx/.css      # 3 plans tarifaires
        ├── CTA.jsx/.css          # Appel à l'action
        ├── Contact.jsx/.css      # Page de contact
        └── Footer.jsx/.css       # Pied de page
```

---

## 🌐 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers sont générés dans le dossier `dist/`.

### Plateformes recommandées

- **Vercel** : `vercel deploy`
- **Netlify** : Glisser-déposer le dossier `dist/`
- **GitHub Pages** : Configurer le workflow avec `dist/`

---

## 👥 Contributeurs

| Nom | Email | LinkedIn |
|-----|-------|----------|
| **Souhail Kharbouch** | kharbouch.souhail@ensam-casa.ma | [linkedin.com/in/souhail-kharbouch](https://linkedin.com/in/souhail-kharbouch) |
| **Yassine Jahjah** | jahjah.yassine@ensam-casa.ma | [linkedin.com/in/yassine-jahjah](https://www.linkedin.com/in/yassine-jahjah/) |

---

## 📄 Licence

Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

---

## 📞 Contact

- 📧 **contact@clinova-ai.fr**
- 🌐 **www.clinova-ai.fr**

---

<p align="center">
  <em>Construisons ensemble le futur de la consultation médicale.</em>
</p>
