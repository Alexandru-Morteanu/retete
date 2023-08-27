import "./globals.css";
export const metadata = {
  title: { default: "foodGuidly", template: "%s" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9343873586369843"
          crossOrigin="anonymous"
        ></script>
        <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'self' https://pagead2.googlesyndication.com"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
