import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Idrissa Massaly
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Développeur Full Stack & Spécialiste IoT
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Étudiant en Master 2 IoT passionné par l'innovation technologique et le développement de solutions avancées
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com/massalyjr9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/idrissa-massaly-154b8022b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:idrissamassaly09@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a href="#education" className="animate-bounce inline-block">
            <ChevronDown size={32} className="text-gray-400" />
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Formation</h2>
          <div className="space-y-8">
            <Education 
              title="Master Internet Of Things (IOT)"
              school="Université Bourgogne Franche-Comté"
              location="Montbéliard"
              period="2023 - Present"
            />
            <Education 
              title="Licence Génie Logiciel et Système d'Information"
              school="Ecole Supérieure Polytechnique"
              location="Dakar, Sénégal"
              period="2022 - 2023"
            />
            <Education 
              title="Diplôme supérieure de Technologies"
              school="Ecole Supérieure Polytechnique"
              location="Dakar, Sénégal"
              period="2020 - 2022"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Expérience</h2>
          <div className="space-y-8">
            <Experience
              title="Développeur Full Stack"
              company="Mu-Car & E-Takhawal"
              location="Bourgogne Franche-Comté, Montbéliard"
              period="Depuis sept. 2023"
              description={[
                "Mise en place d'un système de transport multimodale incluant le covoiturage",
                "Coordination avec les autorités locales pour les autorisations",
                "Mise en place d'un système de paiement en ligne sécurisé",
                "Analyse des données de fréquentation et des retours utilisateurs",
                "Présentation du projet à ROADEF 2024"
              ]}
            />
            <Experience
              title="Développeur Mobile"
              company="Département Génie Informatique, ESP"
              location="Dakar, Sénégal"
              period="Mai 2023 - Juil. 2023"
              description={[
                "Développement d'une application mobile de livraison de repas",
                "Implémentation du suivi en temps réel avec Flutter et Firebase",
                "Gestion des profils utilisateurs et des commandes"
              ]}
            />
            <Experience
              title="Développeur Web"
              company="Département Génie Informatique, ESP"
              location="Dakar, Sénégal"
              period="Juin 2022- Sept. 2022"
              description={[
                "Développement d'une application de gestion de stocks",
                "Suivie des stocks restants après ventes et approvisionnement",
                "Gestion des clients et des fournisseurs"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Projets Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Mu-Car & E-Takhawal"
              description="Système de transport multimodal incluant le covoiturage sur Belfort Montbéliard-Héricourt et Dakar-Thiès"
              image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
              tags={['React', 'Node.js', 'MongoDB']}
            />
            <ProjectCard 
              title="Application de Livraison"
              description="Application mobile de livraison de repas avec suivi en temps réel"
              image="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800"
              tags={['Flutter', 'Dart', 'Firebase']}
            />
            <ProjectCard 
              title="Gestion de Stocks LG"
              description="Application web de gestion de stocks pour LG Future Store"
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
              tags={['PHP', 'MySQL', 'JavaScript','HTML', 'CSS']}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge name="Full-stack development" level="Expert" />
            <SkillBadge name="IoT" level="Expert" />
            <SkillBadge name="Flutter/Dart" level="Avancé" />
            <SkillBadge name="Python" level="Avancé" />
            <SkillBadge name="AWS" level="Intermédiaire" />
            <SkillBadge name="Machine Learning" level="Intermédiaire" />
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Langues</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillBadge name="Français" level="Expert" />
              <SkillBadge name="Anglais" level="Avancé" />
              <SkillBadge name="Wolof" level="Avancé" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Intéressé par des opportunités de collaboration ou d'innovation technologique ? N'hésitez pas à me contacter !
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 - Idrissa Massaly - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;