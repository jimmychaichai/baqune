import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Cast from '@/components/Cast';
import News from '@/components/News';
import SystemAccess from '@/components/SystemAccess';
import SNSLinks from '@/components/SNSLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Cast />
      <News />
      <SystemAccess />
      <SNSLinks />
      <Footer />
    </main>
  );
}
