import { useLanguage } from './hooks/useLanguage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualEngineSection } from './components/DualEngineSection';
import { PlayStoreShowcase } from './components/PlayStoreShowcase';
import { EcosystemShowcase } from './components/EcosystemShowcase';
import { ExperienceExplorer } from './components/ExperienceExplorer';
import { CredentialsVault } from './components/CredentialsVault';
import { SkillsMediaSection } from './components/SkillsMediaSection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      <main>
        <HeroSection lang={lang} />
        <DualEngineSection lang={lang} />
        <PlayStoreShowcase lang={lang} />
        <EcosystemShowcase lang={lang} />
        <ExperienceExplorer lang={lang} />
        <CredentialsVault lang={lang} />
        <SkillsMediaSection lang={lang} />
      </main>
      <ContactFooter lang={lang} />
    </div>
  );
}

export default App;
