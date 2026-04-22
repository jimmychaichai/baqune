import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho+B1:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-paper text-ink selection:bg-neon-pink/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
