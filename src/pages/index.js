import Head from 'next/head';
import { MetaTags } from '../metatags';
import {
  AboutSection,
  CoursesSection,
  FAQSection,
  FooterSection,
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
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ServiceSection />
      <FAQSection />
      {/* <GallerySection />
      <ReviewsSection /> */}
      <FooterSection />
    </>
  );
}
