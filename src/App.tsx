/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NeuralVortexBackground } from './components/ui/NeuralVortexBackground';
import { CursorGlow } from './components/ui/CursorGlow';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactFooter } from './components/ui/contact-footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <CursorGlow />
      <NeuralVortexBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CredentialsSection />
      </main>
      
      <ContactFooter />
    </div>
  );
}
