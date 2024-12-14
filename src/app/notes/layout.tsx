export const metadata = {
  title: "My Notes - Portfolio Anugrah Prastyo",
  description: "A collection of Anugrah Prastyo personal records.",
  openGraph: {
    title: "My Notes - Portfolio Anugrah Prastyo",
    description: "A collection of Anugrah Prastyo personal records.",
    url: "https://anugrahprastyo.my.id/notes",
  },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
