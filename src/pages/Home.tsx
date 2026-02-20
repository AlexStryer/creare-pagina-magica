import heroLandscape from "@/assets/hero-landscape.jpg";
import bosqueDesierto from "@/assets/bosque-desierto.jpg";
import heroCacti from "@/assets/hero-cacti.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import paisajismo from "@/assets/paisajismo.jpg";
import regenerativo from "@/assets/regenerativo.jpg";
import catalogoCacti from "@/assets/catalogo-cacti.jpg";
import proyectoPrincipal from "@/assets/proyecto-principal.jpg";

const impactos = [
  {
    title: "Arquitectura Sostenible",
    image: arquitectura,
    text: "Optimizamos recursos del medio ambiente para redefinir la construcción tradicional a través del diseño bioclimático, cumpliendo los tres tipos de sostenibilidad: social, económica y medioambiental.",
  },
  {
    title: "Paisajismo Sostenible",
    image: paisajismo,
    text: "Diseñamos áreas que dependen del ecosistema en que se ubica cada proyecto, reduciendo el consumo de recursos naturales y disminuyendo el impacto ambiental negativo.",
  },
  {
    title: "Diseño Regenerativo",
    image: regenerativo,
    text: "Procesos que restauran y regeneran ecosistemas dañados, buscando revitalizar activamente las comunidades en lugar de solo reducir el impacto negativo.",
  },
];

const contactInfo = [
  { label: "Sitio web", value: "dehesasanisidro.com" },
  { label: "Instagram", value: "@uma_dehesanisidro" },
  { label: "Email", value: "ventas@dehesasanisidro.com" },
  { label: "Teléfono", value: "55 4352 9753" },
  { label: "Registro SEMARNAT", value: "SEMARNAT-UMA-IN-0061-GTO" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroLandscape})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="border-2 border-white/70 rounded-full px-20 py-10 shadow-2xl backdrop-blur-sm bg-black/10 mb-8">
            <p className="text-white/80 text-xs tracking-[0.4em] uppercase font-light mb-2">Dehesa San Isidro</p>
            <h1 className="text-white text-8xl font-bold tracking-widest font-serif leading-none">DSI</h1>
            <div className="w-12 h-px bg-white/60 mx-auto my-3" />
            <p className="text-white/80 text-xs tracking-[0.3em] uppercase font-light">UMA Certificada · SEMARNAT</p>
          </div>
          <p className="text-white/90 text-xl font-light max-w-xl leading-relaxed">
            Conservación, propagación legal y venta responsable de cactáceas en peligro de extinción
          </p>
          <a
            href="#quienes-somos"
            className="mt-10 border border-white/60 text-white text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Descubrir más
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────────────── */}
      <section id="quienes-somos" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Quiénes Somos</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden h-64 shadow-xl">
                <img src={bosqueDesierto} alt="Dehesa San Isidro" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden h-44 shadow-md">
                <img src={heroCacti} alt="Cactáceas" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden h-44 shadow-md">
                <img src={catalogoCacti} alt="Catálogo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                Una UMA comprometida con la naturaleza
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                Dehesa San Isidro es nuestra Unidad de Manejo para la Conservación de La Vida Silvestre (UMA),
                buscamos promover la propagación y venta legal de especies de cactáceas catalogadas como
                amenazadas, en protección especial o en peligro de extinción.
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Misión</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ser la principal UMA especializada en cactáceas amenazadas en México, promoviendo su propagación
                    legal y venta responsable, contribuyendo a la conservación y generando beneficios económicos sostenibles.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Visión</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Construir un modelo de producción sostenible en zonas áridas que sirva de referente nacional e internacional,
                    demostrando que conservación y actividad económica pueden coexistir armónicamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UMA card */}
          <div className="mt-20 bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <div className="flex items-start gap-6 flex-wrap">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-serif font-bold text-primary text-lg">UMA</span>
                </div>
              </div>
              <div className="flex-1 min-w-xs">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">¿Qué es una UMA?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Las UMAs (Unidades de Manejo para la Conservación de la Vida Silvestre) son áreas autorizadas en México
                  donde se protege y aprovecha de forma sustentable la flora y fauna silvestre, buscando conservar los
                  ecosistemas mientras generan beneficios económicos y sociales para las comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX DIVIDER ─────────────────────────────────── */}
      <div
        className="w-full h-64 relative overflow-hidden"
        style={{
          backgroundImage: `url(${proyectoPrincipal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-dsi-olive/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-white text-2xl font-serif italic font-light text-center px-6 max-w-2xl leading-relaxed">
            "Tenemos la convicción de desarrollar esquemas de producción sostenible, creando oportunidades en las zonas áridas."
          </p>
        </div>
      </div>

      {/* ── SOSTENIBILIDAD ───────────────────────────────────── */}
      <section id="sostenibilidad" className="py-24 bg-section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Sostenibilidad</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <h2 className="text-5xl font-serif font-bold text-foreground leading-tight">
              Nuestro<br />Impacto
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Trabajamos bajo tres pilares para construir un futuro más verde y resiliente en las zonas áridas de México.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactos.map((item, i) => (
              <div key={item.title} className="group">
                <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-white/60 font-serif text-4xl font-bold leading-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO ─────────────────────────────────────────── */}
      <section id="catalogo" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Catálogo</span>
          </div>

          {/* Featured card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-card border border-border mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-between">
                <div>
                  <div className="border-2 border-foreground/30 rounded-full w-36 h-20 flex flex-col items-center justify-center mb-8">
                    <span className="font-serif text-3xl font-bold text-foreground">DSI</span>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">Dehesa San Isidro</span>
                  </div>
                  <h2 className="text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                    Nuestro<br />Catálogo
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cactáceas propagadas legalmente bajo el respaldo de SEMARNAT. Especies únicas, origen ético garantizado.
                  </p>
                </div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/60 mt-8">
                  DEHESA SAN ISIDRO · 2026
                </p>
              </div>
              <div className="h-80 md:h-auto overflow-hidden">
                <img src={bosqueDesierto} alt="Catálogo DSI" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="h-52 overflow-hidden">
                <img src={catalogoCacti} alt="Cactáceas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">Cactáceas Amenazadas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ofrecemos especies catalogadas como amenazadas, en protección especial o en peligro de extinción,
                  propagadas legalmente en nuestra UMA certificada.
                </p>
              </div>
            </div>
            <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="h-52 overflow-hidden">
                <img src={heroCacti} alt="Propagación legal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">Propagación Legal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Todas nuestras plantas cuentan con respaldo legal de SEMARNAT bajo el registro
                  SEMARNAT-UMA-IN-0061-GTO, garantizando su origen ético y legal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5543529753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Catálogo Completo
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────── */}
      <section id="contacto" className="py-24 bg-section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Contacto</span>
          </div>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-16 leading-tight">
            Hablemos
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact info */}
            <div>
              {contactInfo.map((item) => (
                <div key={item.label} className="border-b border-border py-5 flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                  <p className="text-foreground font-medium text-lg">{item.value}</p>
                </div>
              ))}

              <a
                href="https://wa.me/5543529753"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>

            {/* Logo + badge */}
            <div className="flex flex-col items-center text-center">
              <div className="border-2 border-primary/40 rounded-full w-52 h-52 flex flex-col items-center justify-center shadow-xl bg-card mb-8">
                <span className="font-serif text-7xl font-bold text-foreground leading-none">DSI</span>
                <div className="w-16 h-px bg-primary/40 my-3" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Dehesa San Isidro</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Unidad de Manejo para la Conservación de la Vida Silvestre, certificada por SEMARNAT.
              </p>
              <div className="mt-6 px-5 py-2 border border-border rounded-full">
                <span className="text-xs text-muted-foreground tracking-wide">SEMARNAT-UMA-IN-0061-GTO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-foreground text-background/80 py-10 text-center">
        <p className="font-serif text-3xl font-bold text-background mb-2">DSI</p>
        <p className="text-xs tracking-widest uppercase opacity-60 mb-4">Dehesa San Isidro</p>
        <p className="text-xs opacity-40">© 2026 Dehesa San Isidro · Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
