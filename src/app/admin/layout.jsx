import ScrollProgess from "@/components/UI/ScrollProgess";

export default function VisitorLayout({ children }) {
  return (
    <main className="flex flex-row w-full h-[calc(100dvh)] overflow-x-clip">
      {/* <ScrollProgess /> */}
      {children}
    </main>
  );
}
