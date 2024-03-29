import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promo Logic Clone App",
  description: "Generated by kajol Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          id="brightlocal-style-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/base.css?id=dd652bc4c66d171858d1e63524ac0fab"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-scrolling-logos-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/section-blocks/scrolling-logos.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-cards-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/section-blocks/cards.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-twi-panel-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/section-blocks/twi-panel.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-cta-banner-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/global-blocks/cta-banner.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-pinned-image-scroller-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/section-blocks/pinned-image-scroller.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-centered-header-with-slant-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/content-blocks/header-blocks/centered-header-with-slant.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="brightlocal-fontawesome-css"
          href="https://www.brightlocal.com/wp-content/themes/brightlocal-2023/dist/css/vendor/fontawesome/fontawesome.css"
          type="text/css"
          media="all"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
