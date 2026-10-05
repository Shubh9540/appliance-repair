import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { GallerySection } from '@/components/sections/GallerySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: HVACTemplateData = rawData as any;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{commonData?.globalUI?.loadingText || 'Loading Data...'}</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      
      <Breadcrumb data={commonData.galleryBreadcrumb} />
      
      <GallerySection data={sectionData.Gallery?.variants?.HVACGallery1} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
