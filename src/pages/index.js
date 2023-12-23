import Head from 'next/head';
import { MetaTags } from '../metatags';
import { AboutSection, CoursesSection, HeroSection } from '../sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kadłubowska</title>
        <MetaTags.Home />
      </Head>
      {/* <WorkInProgressSection /> */}
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      {/* <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <FooterSection /> */}
    </>
  );
}
