import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from "@/components/home/hero";
import SocialProof from "@/components/home/socialProof";
import ProblemStatement from "@/components/home/problemStatement";
import ServicesPreview from "@/components/home/servicesPreview";
import FeaturedWork from "@/components/home/featuredWork";
import PackagesPreview from "@/components/home/packagesPreview";
import Process from "@/components/home/process";
import WhyFikrat from "@/components/home/whyFikrat";
import FinalCta from "@/components/home/finalCta";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('home.title'),
    description: t('home.description'),
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full">
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <ServicesPreview />
      <FeaturedWork />
      <PackagesPreview />
      <Process />
      <WhyFikrat />
      <FinalCta />
    </main>
  );
}
