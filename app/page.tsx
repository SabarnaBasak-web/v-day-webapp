import MemoryTimeline from "./components/MemoryTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-200 to-red-100 ">
      <div className="text-center pt-20">
        <h1 className="text-4xl font-bold text-rose-700">Our Story ❤️</h1>
        <p className="mt-4 text-gray-700">
          Scroll through our beautiful memories
        </p>
      </div>

      <MemoryTimeline />
    </main>
  );
}
