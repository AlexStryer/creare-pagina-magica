interface HeroBannerProps {
  title: string;
  image: string;
  height?: string;
}

export default function HeroBanner({ title, image, height = "h-64" }: HeroBannerProps) {
  return (
    <div
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase text-center drop-shadow-lg px-4 font-sans">
        {title}
      </h1>
    </div>
  );
}
