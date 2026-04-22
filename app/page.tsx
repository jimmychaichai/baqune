import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Cast from '@/components/Cast';
import News from '@/components/News';
import SystemAccess from '@/components/SystemAccess';
import SNSLinks from '@/components/SNSLinks';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import ScrollProgress from '@/components/ScrollProgress';
import NeonCursor from '@/components/NeonCursor';
import GrainOverlay from '@/components/GrainOverlay';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <NeonCursor />
      <GrainOverlay />
      <Header />
      <Hero />
      <Marquee />
      <Cast />
      <Marquee />
      <News />
      <SystemAccess />
      <SNSLinks />
      <Footer />
    </main>
  );
}
