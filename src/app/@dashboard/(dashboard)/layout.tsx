export const metadata = {
  title: "Artificium",
  description: "AI Content Creation App",
};

// TO DO: Sidebar, TopBar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
