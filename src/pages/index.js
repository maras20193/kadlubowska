import Head from 'next/head';
import { MetaTags } from '../metatags';
import {
  AboutSection,
  CoursesSection,
  FAQSection,
  FooterSection,
  HeroSection,
  PriceSection,
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
      <PriceSection />
      <ReviewsSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
