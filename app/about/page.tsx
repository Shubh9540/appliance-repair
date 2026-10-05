import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutFirmSection } from '@/components/sections/AboutFirmSection';
import { AchievementSection } from '@/components/sections/AchievementSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: HVACTemplateData = rawData;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      <Breadcrumb data={commonData.aboutBreadcrumb} />
      
      {/* 1. About Firm Section (Specific to About Page) */}
      <AboutFirmSection data={sectionData.AboutFirm?.variants?.HVACAboutFirm1} hideButton={true} />

      {/* 2. Achievement Section */}
      <AchievementSection data={sectionData.Achievement?.variants?.HVACAchievement1} />

      {/* 3. Team Section */}
      <TeamSection data={sectionData.Team?.variants?.HVACTeam1} />

      {/* 4. FAQ Section */}
      <FaqSection data={sectionData.Faq?.variants?.HVACFaq1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
