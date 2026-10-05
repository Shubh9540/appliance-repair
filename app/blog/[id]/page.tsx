import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailSection } from '@/components/sections/BlogDetailSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PlumbingTemplateData = rawData as any;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;
  
  const blogsData = sectionData?.Blogs?.variants?.HVACBlogs1;
  const blog = blogsData?.blogs?.find(b => b.id === id);

  if (!sectionData || !commonData || !blog) return <div className="text-black p-10">Blog Not Found</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      
      <Breadcrumb data={commonData.blogDetailBreadcrumb} />
      
      <BlogDetailSection blog={blog} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
