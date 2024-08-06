import Navigation from "@/components/UI/Navigation";
import ScrollProgess from "@/components/UI/ScrollProgess";

export default function VisitorLayout({ children }) {
  return (
    <main className="flex flex-row w-full h-full overflow-x-clip">
      <ScrollProgess />
      <Navigation />
      {children}
    </main>
  );
}
