export default function RootLayout({
  dashboard,
  auth,
}: {
  dashboard: React.ReactNode;
  auth: React.ReactNode;
}) {
  const isLoggedIn = false;

  return (
    <html lang="en">
      <body>{isLoggedIn ? dashboard : auth}</body>
    </html>
  );
}
