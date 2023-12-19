import Head from 'next/head';
import { MetaTags } from '../metatags';
import { WorkInProgressSection } from '../sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kadłubowska</title>
        <MetaTags.Home />
      </Head>
      {/* <WorkInProgressSection /> */}
      {/* <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <FooterSection /> */}
    </>
  );
}
