import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BAR ズキュン | 新宿御苑の大人のおしゃれ隠れ家バー',
  description:
    '新宿御苑近くの隠れ家バー「BAR ズキュン」。大人のおしゃれな時間を、ピンクとパープルのネオンが灯る空間で。',
  openGraph: {
    title: 'BAR ズキュン',
    description: '新宿御苑近くの大人のおしゃれ隠れ家バー',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
