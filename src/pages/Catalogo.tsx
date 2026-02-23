import HeroBanner from "@/components/HeroBanner";
import heroCacti from "@/assets/hero-cacti.jpg";
import catalogoCacti from "@/assets/catalogo-cacti.jpg";
import bosqueDesierto from "@/assets/bosque-desierto.jpg";
import dsiLogo from "@/assets/as.png";

export default function Catalogo() {
  return (
    <main>
      <HeroBanner title="Nuestro Catálogo" image={heroCacti} height="h-64" />

      <section className="bg-section-alt py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Logo and text */}
              <div className="p-10 flex flex-col justify-between">
                <div>
                  {/* DSI Logo text */}
                  <div className="border-2 border-foreground rounded-full w-36 h-20 flex flex-col items-center justify-center mb-6 px-3">
                    <img
                      src={dsiLogo}
                      alt="DSI - Dehesa San Isidro"
                      className="h-8 w-auto object-contain"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      Dehesa San Isidro
                    </span>
                  </div>
                  <h2 className="text-4xl font-raleway font-bold text-foreground mb-2">
                    Nuestro<br />Catálogo
                  </h2>
                </div>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-8">
                  DEHESA SAN ISIDRO 2026 - FEBRERO
                </p>
              </div>

              {/* Right: image */}
              <div className="h-72 md:h-auto overflow-hidden">
                <img src={bosqueDesierto} alt="Catálogo DSI" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Catalog info */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="h-40 rounded-md overflow-hidden mb-4">
                <img src={catalogoCacti} alt="Cactáceas" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-raleway font-bold text-foreground mb-2">Cactáceas Amenazadas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ofrecemos especies catalogadas como amenazadas, en protección especial o en peligro
                de extinción, propagadas legalmente en nuestra UMA certificada.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="h-40 rounded-md overflow-hidden mb-4">
                <img src={heroCacti} alt="Colección de cactus" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-raleway font-bold text-foreground mb-2">Propagación Legal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todas nuestras plantas cuentan con respaldo legal de SEMARNAT bajo el registro
                SEMARNAT-UMA-IN-0061-GTO, garantizando su origen ético y legal.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5543529753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition-all"
            >
              Solicitar Catálogo Completo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
