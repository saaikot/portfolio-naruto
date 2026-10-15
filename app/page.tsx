import Background from "@/components/Background";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Background />
      <main className="relative flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-6xl sm:text-8xl">
            <span className="naruto-gradient">BACKGROUND TEST</span>
          </h1>
          <p className="mt-6 font-mono text-xs text-muted">
            // leaves + chakra particles running
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="headband">忍</span>
            <span className="headband !border-chakra/50 !text-chakra">火</span>
            <span className="headband !border-leaf/50 !text-leaf">影</span>
            <span className="headband !border-akatsuki/50 !text-akatsuki">
              術
            </span>
          </div>
        </div>
      </main>
    </>
  );
}