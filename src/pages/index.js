import Head from 'next/head';
import { MetaTags } from '../metatags';
import {
  AboutSection,
  CoursesSection,
  FAQSection,
  FooterSection,
  HeroSection,
  ReviewsSection,
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
      <ReviewsSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
