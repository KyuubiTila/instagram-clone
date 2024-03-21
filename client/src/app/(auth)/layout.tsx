import AuthForm from '../../../components/forms/AuthForm';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthForm children={children} />
    </>
  );
}
