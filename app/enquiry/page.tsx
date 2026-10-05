import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function EnquiryPage() {
  const templateData: HVACTemplateData = rawData;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{commonData?.globalUI?.loadingText || 'Loading Data...'}</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      <Breadcrumb data={commonData.enquiryBreadcrumb} />
      
      {/* Enquiry Section */}
      <EnquirySection data={sectionData.Enquiry?.variants?.HVACEnquiry1} globalUI={commonData?.globalUI} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
