import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: HVACTemplateData = rawData;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      <Breadcrumb data={commonData.servicesBreadcrumb} />
      
      {/* Services Section */}
      <ServicesSection data={sectionData.Services?.variants?.HVACServices1} hideButton={true} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
