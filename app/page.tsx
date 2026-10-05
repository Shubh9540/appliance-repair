import React from 'react';
import { HVACTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AchievementSection } from '@/components/sections/AchievementSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: HVACTemplateData = rawData;
  const sectionData = templateData?.categories?.HVAC?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.HVACTopBar1} logoData={sectionData.Header?.variants?.HVACHeader1} />
      <Header data={sectionData.Header?.variants?.HVACHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.HVACHero1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.HVACAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.HVACServices1} />
      <AchievementSection data={sectionData.Achievement?.variants?.HVACAchievement1} />
      <BlogsSection data={sectionData.Blogs?.variants?.HVACBlogs1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.HVACTestimonials1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
