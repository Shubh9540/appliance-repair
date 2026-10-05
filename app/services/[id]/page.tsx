import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PlumbingTemplateData = rawData as any;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;
  
  let serviceData = null;
  const serviceVariants = sectionData?.ServiceDetail?.variants;
  
  if (serviceVariants) {
    serviceData = serviceVariants[id] || serviceVariants['HVAC & AC-installation'];
  }

  if (!sectionData || !commonData || !serviceData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} />
      
      <ServiceDetailSection data={serviceData} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
