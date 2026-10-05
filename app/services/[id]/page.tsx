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
  const sectionData = templateData?.categories?.Plumbing?.sections;
  const commonData = templateData?.common;
  
  // Find the service variant based on the ID (or fallback)
  // For this template, the JSON structure stores ServiceDetail as an object with variant keys.
  // We'll just grab the first one if we can't find it exactly, or specifically match "Plumbing & AC-installation".
  let serviceData = null;
  const serviceVariants = sectionData?.ServiceDetail?.variants;
  
  if (serviceVariants) {
    serviceData = serviceVariants['Plumbing & AC-installation'];
    // In a real app we'd map ID to variant key:
    // const key = Object.keys(serviceVariants).find(k => serviceVariants[k].id === id);
    // if (key) serviceData = serviceVariants[key];
  }

  if (!sectionData || !commonData || !serviceData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PlumbingTopBar1} logoData={sectionData.Header?.variants?.PlumbingHeader1} />
      <Header data={sectionData.Header?.variants?.PlumbingHeader1} />
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} />
      
      <ServiceDetailSection data={serviceData} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
