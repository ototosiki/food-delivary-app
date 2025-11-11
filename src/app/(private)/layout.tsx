import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-16 px-10 max-w-screen-xl mx-auto">
        {children}
      </main>
    </>
  );
}
