import Head from 'next/head';
import { MetaTags } from '../metatags';
import { AboutSection, HeroSection, WorkInProgressSection } from '../sections';

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
      {/* <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <FooterSection /> */}
    </>
  );
}
