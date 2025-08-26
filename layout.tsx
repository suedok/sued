export const metadata = {
  title: "SDK Tech Services",
  description: "Serviços elétricos profissionais na Geórgia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
