import Navigation from "@/components/UI/Navigation";

export default function VisitorLayout({ children }) {
  return (
    <main className="flex flex-row w-full h-full">
      <Navigation />
      {children}
    </main>
  );
}
