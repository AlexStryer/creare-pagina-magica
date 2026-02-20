import HeroBanner from "@/components/HeroBanner";
import heroLandscape from "@/assets/hero-landscape.jpg";
import proyectoPrincipal from "@/assets/proyecto-principal.jpg";
import bosqueDesierto from "@/assets/bosque-desierto.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import paisajismo from "@/assets/paisajismo.jpg";
import regenerativo from "@/assets/regenerativo.jpg";

const galleryImages = [bosqueDesierto, arquitectura, paisajismo, regenerativo];

export default function NuestrosProyectos() {
  return (
    <main>
      <HeroBanner title="Nuestros Proyectos" image={heroLandscape} height="h-64" />

      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Image gallery left */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-lg overflow-hidden shadow-md h-52">
              <img src={proyectoPrincipal} alt="Proyecto principal" className="w-full h-full object-cover" />
            </div>
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md h-36">
                <img src={img} alt={`Galería ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Project description */}
          <div>
            <h2 className="text-3xl font-sans font-bold uppercase tracking-widest text-foreground mb-6">
              PROYECTO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              Dehesa San Isidro desarrolla proyectos integrales de conservación en zonas áridas
              del estado de Guanajuato, México. A través de nuestra UMA certificada por SEMARNAT,
              propagamos y comercializamos de forma legal cactáceas en peligro de extinción,
              contribuyendo activamente a su preservación y al desarrollo económico regional.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Nuestros proyectos abarcan desde la propagación y vivero de especies amenazadas,
              hasta el diseño de paisajismo sostenible y arquitectura bioclimática, creando
              ecosistemas productivos y resilientes en las zonas áridas que formamos parte.
              Cada proyecto es una oportunidad para demostrar que la conservación y el progreso
              económico pueden ir de la mano.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
