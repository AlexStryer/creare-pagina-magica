import heroLandscape from "@/assets/hero-landscape.jpg";
import bosqueDesierto from "@/assets/bosque-desierto.jpg";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroLandscape})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center">
          {/* DSI logo oval */}
          <div className="border-4 border-white rounded-full px-16 py-8 text-center shadow-2xl bg-black/20">
            <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-1">Dehesa San Isidro</p>
            <h1 className="text-white text-7xl font-bold tracking-widest font-serif">DSI</h1>
            <div className="w-8 h-px bg-white mx-auto my-2" />
            <p className="text-white text-xs tracking-[0.25em] uppercase font-light">Dehesa San Isidro</p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: About DSI */}
          <div>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Dehesa San Isidro es nuestra Unidad de Manejo para la Conservación de La Vida
              Silvestre (UMA), buscamos promover la propagación y venta legal de especies de
              cactáceas catalogadas como amenazadas, en protección especial o en peligro de
              extinción.
            </p>
            <p className="text-foreground text-center text-lg leading-relaxed italic font-light">
              Tenemos la convicción de desarrollar esquemas de producción sostenible,
              creando oportunidades de crecimiento en las zonas áridas.
            </p>
          </div>

          {/* Right: What is a UMA */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">¿Qué es una UMA?</h2>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Las UMAs (Unidades de Manejo para la Conservación de la Vida Silvestre) son
              áreas autorizadas en México donde se protege y aprovecha de forma sustentable
              la flora y fauna silvestre, buscando conservar los ecosistemas mientras generan
              beneficios económicos y sociales para las comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary image band */}
      <section
        className="w-full h-48 relative"
        style={{
          backgroundImage: `url(${bosqueDesierto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dsi-olive/20" />
      </section>
    </main>
  );
}
