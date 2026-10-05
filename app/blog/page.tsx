import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const templateData: HVACTemplateData = rawData as any;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      
      <Breadcrumb data={commonData.blogBreadcrumb} />
      
      {/* For the main blog page, we pass a prop to show all blogs, and maybe hide the top section if needed. Let's just render the section */}
      <BlogsSection data={sectionData.Blogs?.variants?.HVACBlogs1} isListingPage={true} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
