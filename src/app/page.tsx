'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { RegionalDataChart, GlobalPrevalenceChart } from '@/components/ChartComponents';
import Modal from '@/components/Modal';

const regionalData = {
  'UK': {
    labels: ['Harassment in Public (16-34 y/o)', 'Felt Followed (16-34 y/o)', 'Sexual Assault Since Age 16', 'Stalking (Last Year)'],
    data: [67, 29, 25, 3.1],
    source: 'ONS, YouGov'
  },
  'USA': {
    labels: ['Harassment in Public Spaces', 'First Harassment before Age 18', 'First Harassment before Age 13', 'Violent Victimization by Stranger (per 1k)'],
    data: [73, 56, 20, 11.4],
    source: 'Stop Street Harassment, NCVS'
  },
  'Europe': {
    labels: ['Physical/Sexual Violence by Non-Partner', 'Sexual Violence by Non-Partner', 'Stalking by Non-Partner', 'Cyber Harassment Since Age 15'],
    data: [20, 13, 14, 10],
    source: 'EU-GBV Survey'
  },
  'Global South': {
    labels: ['Feel Unsafe in Public (Delhi)', 'Harassment on Public Transport (Brazil)', 'Experienced VAWG on Public Transport (PNG)', 'Experienced Sexual Harassment (Egypt)'],
    data: [95, 97, 90, 99.3],
    source: 'UN Women, ActionAid'
  }
};

const theoryModals = {
  victim: {
    title: 'The User\'s Shield: A Non-Confrontational Strategy',
    content: `
      <p class="mb-4 text-gray-600">Women widely adopt phone calls as a safety tactic because it's a low-stakes, non-confrontational way to alter a threatening situation. Instead of directly challenging a potential harasser, which risks escalation, a phone call introduces a perceived third party.</p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Creates a "Social Shield":</strong> The act of being in a conversation makes the user appear occupied and socially connected, deterring unwanted approaches.</li>
        <li><strong>Invited Space:</strong> It creates a sense of "invited space" or remote companionship, which can alleviate feelings of isolation and vulnerability.</li>
        <li><strong>Plausible Deniability:</strong> It allows the user to disengage or move away under the guise of the phone call, without directly reacting to the threat.</li>
        <li><strong>Reduces "Safety Work" Burden:</strong> An easy-to-use app would formalize this intuitive tactic, reducing the cognitive load of having to feign a convincing conversation under duress.</li>
      </ul>`
  },
  perpetrator: {
    title: 'The Perpetrator\'s Calculus: Increasing Perceived Risk',
    content: `
      <p class="mb-4 text-gray-600">From a perpetrator's perspective, a woman on a phone call changes their risk-reward analysis, making them a less appealing target. This aligns with several criminological theories:</p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Rational Choice Theory (RCT):</strong> The call increases the perceived "cost" or risk of the crime (e.g., being identified, reported, or interrupted), making the potential "reward" less attractive.</li>
        <li><strong>Situational Crime Prevention (SCP):</strong> The strategy increases the effort and risk for the offender by introducing a form of surveillance and guardianship.</li>
         <li><strong>Situational Action Theory (SAT):</strong> The call alters the immediate setting by introducing a deterrent threat (the remote listener), which can trigger deliberation in the offender and lead them to see crime as a less viable option.</li>
        <li><strong>Disrupts Target Selection:</strong> Perpetrators often seek isolated or vulnerable individuals. A phone call signals connection and awareness, disrupting this selection script.</li>
      </ul>`
  },
  bystander: {
    title: 'The Remote Guardian: Simulating a Bystander',
    content: `
      <p class="mb-4 text-gray-600">A phone call effectively simulates the presence of a "capable guardian" or an active bystander, even if they are remote. This can be a powerful psychological deterrent.</p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Capable Guardianship (Routine Activities Theory):</strong> The person on the other end of the call is perceived as a guardian who could be alerted, call for help, or witness the event, increasing the risk of apprehension.</li>
        <li><strong>Simulated Bystander Intervention:</strong> The conversation can mimic bystander intervention tactics. For example, the AI asking "Are you okay? Describe the person" is a form of remote documentation and direct support.</li>
        <li><strong>Reduces Anonymity:</strong> The core fear for many perpetrators is being caught. A phone call suggests their actions are not anonymous and could have immediate consequences.</li>
        <li><strong>Psychological Impact:</strong> The simple belief that "someone is listening" can be enough to make a perpetrator reconsider their actions, breaking the sense of power and control they feel over an isolated victim.</li>
      </ul>`
  }
};

const techSolutions = [
  {
    category: "Personal Safety Apps",
    icon: "📱",
    description: "Smartphone apps with features like SOS alerts, location sharing, and evidence recording.",
    examples: "Life360, bSafe, Hollie Guard, WalkSafe",
    pros: "Accessible, multi-functional, some have direct police integration and court-admissible evidence capture (Hollie Guard). Can provide peace of mind.",
    cons: "Reliant on phone battery/signal. Risk of misuse by abusers for stalking. Can place safety burden on victims. Effectiveness in preventing attacks is not robustly proven."
  },
  {
    category: "Wearable Devices",
    icon: "⌚️",
    description: "Discreet panic buttons in jewelry or smartwatches, and conceptual anti-assault clothing.",
    examples: "Smartwatch SOS, invisaWear, SHEbras (concept)",
    pros: "More discreet and accessible than a phone. Some can automatically detect falls or potential attacks (Epowar concept).",
    cons: "Often require manual activation. Anti-assault clothing heavily criticized for victim-blaming. Practicality and effectiveness in real-world scenarios are questionable."
  },
  {
    category: "Crowdsourcing Platforms",
    icon: "🗺️",
    description: "Apps and websites using community input to map safety risks and incidents.",
    examples: "SafetiPin, Ushahidi, HarassMap",
    pros: "Empowers communities to identify risks. Data can inform urban planning and policy. Increases transparency.",
    cons: "Data can be subjective or biased. May inadvertently increase fear or stigmatize areas. Impact depends on authorities acting on the data."
  },
  {
    category: "Environmental Tech",
    icon: "💡",
    description: "Smart city technologies like responsive lighting and AI-powered surveillance systems.",
    examples: "Smart Street Lighting, AI-CCTV",
    pros: "Improved lighting is linked to reduced crime and perceived safety. AI can potentially detect threats in real-time.",
    cons: "Major ethical concerns: privacy, mass surveillance, and significant risk of algorithmic bias (racial/gender). High cost and potential for misuse."
  }
];

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('UK');
  const [activeTab, setActiveTab] = useState('features');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [techModalOpen, setTechModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(techSolutions[0]);

  const handleTheoryCardClick = (modalType: keyof typeof theoryModals) => {
    setModalContent(theoryModals[modalType]);
    setModalOpen(true);
  };

  const handleTechCardClick = (tech: typeof techSolutions[0]) => {
    setSelectedTech(tech);
    setTechModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-[80vh] flex items-center gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-pastel-green font-semibold text-lg"
              >
                An Evidence-Based Innovation Platform
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-7xl font-bold leading-tight my-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Can AI Calls Shield Women from Violence?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
              >
                This interactive platform explores how artificial intelligence can transform the widely-used safety tactic of fake phone calls into a powerful deterrent against violence towards women and girls in public spaces.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
              >
                <a 
                  href="#theory" 
                  className="bg-pastel-green text-white font-bold py-4 px-8 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Explore the Science
                </a>
                <a 
                  href="#concept" 
                  className="border-2 border-pastel-green text-pastel-green font-bold py-4 px-8 rounded-full hover:bg-pastel-green hover:text-white transition-all duration-300 inline-block"
                >
                  See the Solution
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theory Section */}
      <section id="theory" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Phone Calls Deter Violence</h3>
            <p className="text-gray-600 mb-12">
              The use of a phone call as a safety strategy isn't random; it's rooted in established criminological and psychological principles. It works by subtly altering the dynamics of a situation from three key perspectives.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'victim', icon: '🚶‍♀️', title: 'The User\'s Shield', desc: 'For the user, a phone call is a non-confrontational way to signal non-isolation, creating a "social shield" and a sense of "invited space" that reduces feelings of vulnerability.' },
              { type: 'perpetrator', icon: '🤔', title: 'The Perpetrator\'s Calculus', desc: 'For a potential perpetrator, a person on the phone is no longer an easy, isolated target. The call increases the perceived risk of being identified, reported, or confronted.' },
              { type: 'bystander', icon: '👁️', title: 'The Remote Guardian', desc: 'The call simulates the presence of a "remote bystander" or "capable guardian" who is aware of the situation, disrupting the harasser\'s confidence that their actions are unobserved.' }
            ].map((card, index) => (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="glass-card p-6 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleTheoryCardClick(card.type as keyof typeof theoryModals)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 animate-float">{card.icon}</span>
                  <h4 className="font-bold text-xl text-gray-800">{card.title}</h4>
                </div>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section id="evidence" className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Statistical Reality</h3>
            <p className="text-gray-600 mb-12">
              VAWG in public spaces is a documented global crisis, and using a phone for safety is a common response. The data reveals the scale of the problem and underscores why such deterrent strategies are so prevalent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { title: 'Pervasive Underreporting', desc: 'Fewer than 10% of women who experience violence report it to the police. Street harassment is even less likely to be reported, often seen as "not serious enough" or met with fear of blame.' },
                { title: 'The "Safety Work" Burden', desc: 'Women constantly perform cognitive and emotional labor—planning routes, choosing attire, staying vigilant—to stay safe. This "safety work" is an invisible tax on their freedom.' },
                { title: 'A Common Tactic', desc: 'A GSMA report found 68-94% of women in 11 developing countries feel safer with a mobile phone, using it for reassurance and to deter harassers.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl border border-pastel-green/20"
                >
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="mb-6">
                <GlobalPrevalenceChart />
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h4 className="text-2xl font-bold mb-4">Regional Perspectives</h4>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(regionalData).map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`py-2 px-4 rounded-full transition-all duration-300 ${
                    selectedRegion === region
                      ? 'bg-pastel-green text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-pastel-mint'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
            <RegionalDataChart 
              region={selectedRegion} 
              data={regionalData[selectedRegion as keyof typeof regionalData]} 
            />
          </motion.div>
        </div>
      </section>

      {/* App Concept Section */}
      <section id="concept" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The AI-Simulated Call App</h3>
            <p className="text-gray-600 mb-8">
              Translating this deterrent strategy into a reliable app requires careful consideration of technology, user experience, and ethics. A successful app must be more than just a "fake call" button.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {[
              { id: 'features', label: 'Core Features' },
              { id: 'design', label: 'Design Principles' },
              { id: 'ethics', label: 'Ethical Considerations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 text-base font-medium transition-all duration-300 rounded-full ${
                  activeTab === tab.id
                    ? 'bg-pastel-green text-white shadow-lg'
                    : 'text-gray-600 hover:text-pastel-green hover:bg-pastel-mint'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: '🤖', title: 'Hyper-Realistic AI Voice', desc: 'Utilizes advanced text-to-speech to generate a natural, convincing human voice with varied personas and tones, crucial for believability.' },
                  { icon: '🤫', title: 'Discreet, Rapid Activation', desc: 'Can be initiated with minimal effort via physical buttons or a simple screen tap, avoiding conspicuous actions that could alert an aggressor.' },
                  { icon: '🗣️', title: 'Strategic Conversation Scripts', desc: 'The AI\'s dialogue is designed to imply guardianship or imminent arrival (e.g., "I see you, I\'m just around the corner"), maximizing deterrent effect.' },
                  { icon: '🆘', title: 'Optional Tiered Alerts', desc: 'The core function is deterrence. A secondary, opt-in feature could allow alerting trusted contacts with location data if a situation escalates.' },
                  { icon: '📸', title: 'Camouflaged Interface', desc: 'The app\'s interface mimics a standard call screen (e.g., WhatsApp), allowing discreet use without revealing it\'s a safety tool.' },
                  { icon: '✔️', title: 'User Control & Feedback', desc: 'Provides subtle feedback to the user that the app is active and offers a simple, clear way to end the simulated call at any time.' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h5 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h5>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'design' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: '🧠', title: 'Minimal Cognitive Load', desc: 'The design must be radically simple. Under stress, complex navigation fails. The core function must be accessible in one or two intuitive steps.' },
                  { icon: '👥', title: 'Survivor-Centric Co-Design', desc: 'Developed *with* women, not *for* them. Incorporating diverse lived experiences is essential to create a tool that is genuinely useful and not just technically clever.' },
                  { icon: '♿', title: 'Accessibility First', desc: 'The app must be usable by people with diverse abilities, considering factors like motor skills under stress or visual impairments.' },
                  { icon: '🚫', title: 'Avoid Feature Creep', desc: 'Resist the urge to add too many features. The app\'s primary purpose—initiating a deterrent call—must remain uncluttered and paramount.' },
                  { icon: '💡', title: 'Clear, Unambiguous Icons', desc: 'Visual elements should be instantly recognizable. Any secondary buttons (e.g., SOS, Record) must have clear icons to prevent confusion in a panic.' },
                  { icon: '🔁', title: 'Rigorous Scenario Testing', desc: 'Usability must be tested in simulated high-stress scenarios to identify and eliminate any points of friction or confusion.' }
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{principle.icon}</div>
                    <h5 className="font-bold text-lg mb-2 text-gray-800">{principle.title}</h5>
                    <p className="text-sm text-gray-600">{principle.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'ethics' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: '🔒', title: 'Privacy & Data Security', desc: 'Minimal data collection is key. Any data stored must be encrypted and protected against breaches or misuse by abusers.', color: 'border-red-200 bg-red-50' },
                  { icon: '🛡️', title: 'False Sense of Security', desc: 'The app must be marketed responsibly, clarifying it is a deterrent, not a foolproof guarantee of safety, to avoid encouraging risky behavior.', color: 'border-red-200 bg-red-50' },
                  { icon: '⚖️', title: 'Avoiding Victim Blame', desc: 'The design must not shift the burden of safety onto the user. It\'s a tool, not a replacement for societal responsibility to prevent violence.', color: 'border-red-200 bg-red-50' },
                  { icon: '📈', title: 'Risk of Escalation', desc: 'A determined perpetrator who realizes the call is fake might become more aggressive. This is a critical risk that cannot be eliminated.', color: 'border-red-200 bg-red-50' },
                  { icon: '🤖', title: 'Algorithmic Bias', desc: 'AI voices and scripts must be inclusive and relatable to diverse users to avoid being less effective for marginalized groups.', color: 'border-red-200 bg-red-50' },
                  { icon: '📋', title: 'Clear Accountability', desc: 'Clear disclaimers are needed. Who is accountable if the app fails to deter an attack? The app cannot be a substitute for emergency services.', color: 'border-red-200 bg-red-50' }
                ].map((ethical, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${ethical.color} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border`}
                  >
                    <div className="text-4xl mb-4">{ethical.icon}</div>
                    <h5 className="font-bold text-lg mb-2 text-red-800">{ethical.title}</h5>
                    <p className="text-sm text-gray-700">{ethical.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h4 className="text-2xl font-bold text-center mb-8">Current Technology Landscape</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techSolutions.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="glass-card p-6 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  onClick={() => handleTechCardClick(tech)}
                >
                  <div className="text-5xl mb-4">{tech.icon}</div>
                  <h5 className="font-bold text-lg text-gray-800">{tech.category}</h5>
                  <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section id="context" className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Beyond the App: A Holistic Approach</h3>
            <p className="text-gray-600 mb-12">
              A technology-based tool is not a silver bullet. An AI-simulated call app is most effective when situated within a broader ecosystem of prevention strategies that address the root causes and environmental factors of VAWG.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {[
              { icon: '🏙️', title: 'Environmental Design (CPTED)', desc: 'The app\'s deterrent effect is amplified in well-lit, visible spaces. It complements, but cannot replace, safe urban planning, improved lighting, and well-maintained public areas.' },
              { icon: '🎓', title: 'Education & Cultural Shift', desc: 'Long-term prevention requires challenging harmful norms. The app is a tool for individual safety, while education on consent and bystander intervention addresses root causes.' },
              { icon: '⚖️', title: 'Policy & Legal Frameworks', desc: 'Strong laws and policies create a context of accountability. The app empowers individuals, while robust policies ensure systemic response and support for survivors.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl border border-pastel-green/20"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Innovation Challenge: Principles for Impact</h3>
            <p className="text-gray-600 mb-12">
              Your goal is to build solutions that can make a real difference. As you ideate, keep these evidence-based principles in mind. They are your guide to creating tools that are ethical, effective, and truly empowering.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Be Survivor-Centric & Intersectional', desc: 'Design *with*, not *for*. Prioritize the diverse needs, safety, and agency of all women, especially those from marginalized communities. A one-size-fits-all approach will fail.' },
              { num: '02', title: 'Aim for Prevention & Empowerment', desc: 'Move beyond reactive SOS alerts. How can technology help prevent violence, support bystander action, or empower users with information and community support?' },
              { num: '03', title: 'Tackle Root Causes, Not Just Symptoms', desc: 'Explore how tech can challenge harmful norms or educate on consent. Don\'t just place the burden of safety on the victim; address perpetrator behavior.' },
              { num: '04', title: 'Embed Ethics from Day One', desc: 'Prioritize data privacy, security, and informed consent. Actively mitigate algorithmic bias. Your solution must not create new vulnerabilities.' },
              { num: '05', title: 'Integrate, Don\'t Isolate', desc: 'How can your prototype connect with existing community efforts, support services, or public infrastructure? Technology is most powerful as part of a holistic system.' },
              { num: '06', title: 'Reduce the "Safety Work" Burden', desc: 'Women already perform constant emotional and cognitive labor to stay safe. Your solution should alleviate this burden, not add to it with complex requirements.' }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-pastel-green/20"
              >
                <span className="font-bold text-lg text-pastel-green">{principle.num}.</span>
                <h4 className="font-bold text-lg my-2 text-gray-800">{principle.title}</h4>
                <p className="text-sm text-gray-600">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">This interactive platform combines research from "The Simulated Safety Net" and "Tackling Violence Against Women and Girls in Public Spaces" reports.</p>
            <p className="text-xs text-gray-400">Data synthesized from sources including UN Women, WHO, national statistics offices, and academic research to inform innovators and changemakers.</p>
          </motion.div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{modalContent.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
      </Modal>

      <Modal isOpen={techModalOpen} onClose={() => setTechModalOpen(false)}>
        <div className="text-5xl text-center mb-4">{selectedTech.icon}</div>
        <h4 className="text-2xl font-bold text-center mb-2 text-gray-800">{selectedTech.category}</h4>
        <p className="text-center text-sm text-gray-500 mb-6">Examples: {selectedTech.examples}</p>
        
        <div className="space-y-4 text-left">
          <div>
            <h5 className="font-semibold text-green-700">✓ Strengths & Potential</h5>
            <p className="text-sm text-gray-700 mt-1">{selectedTech.pros}</p>
          </div>
          <div>
            <h5 className="font-semibold text-red-700">✗ Weaknesses & Critiques</h5>
            <p className="text-sm text-gray-700 mt-1">{selectedTech.cons}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}