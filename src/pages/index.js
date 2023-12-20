import Head from 'next/head';
import { MetaTags } from '../metatags';
import { HeroSection, WorkInProgressSection } from '../sections';
import { Navigation } from '../templates/Layout/Navigation/Navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kadłubowska</title>
        <MetaTags.Home />
      </Head>
      {/* <WorkInProgressSection /> */}
      <HeroSection />
      {/* <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <FooterSection /> */}
    </>
  );
}
