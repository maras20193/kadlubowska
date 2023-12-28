import Head from 'next/head';
import { MetaTags } from '../metatags';
import {
  AboutSection,
  CoursesSection,
  FAQSection,
  HeroSection,
  ServiceSection,
} from '../sections';

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
      <ServiceSection />
      <FAQSection />
      {/* <GallerySection />
      <ReviewsSection />
      <FooterSection /> */}
    </>
  );
}
