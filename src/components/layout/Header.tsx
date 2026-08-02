export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-yellow-400">
          Volt<span className="text-blue-400">Shine</span>
        </h1>

        <nav className="hidden gap-8 text-sm text-white lg:flex">
          <a href="#">Home</a>
          <a href="#">Battery</a>
          <a href="#">Windshield</a>
          <a href="#">Detailing</a>
          <a href="#">UPS</a>
          <a href="#">Solar</a>
        </nav>

        <button className="rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-black">
          WhatsApp
        </button>
      </div>
    </header>
  );
}