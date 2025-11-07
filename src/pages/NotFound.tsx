export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#D4AF37] mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-[#D4AF37] text-black rounded-lg hover:bg-[#B8941E] transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
