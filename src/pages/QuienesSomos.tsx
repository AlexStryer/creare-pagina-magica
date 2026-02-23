import HeroBanner from "@/components/HeroBanner";
import heroCacti from "@/assets/hero-cacti.jpg";
import bosqueDesierto from "@/assets/bosque-desierto.jpg";
import paisajismo from "@/assets/paisajismo.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import regenerativo from "@/assets/regenerativo.jpg";

const images = [bosqueDesierto, paisajismo, arquitectura, regenerativo];

export default function QuienesSomos() {
  return (
    <main>
      <HeroBanner title="Quiénes Somos" image={heroCacti} height="h-64" />

      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-lg overflow-hidden shadow-md h-56">
              <img src={bosqueDesierto} alt="Bosque del desierto" className="w-full h-full object-cover" />
            </div>
            {images.slice(1).map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md h-40">
                <img src={img} alt={`Imagen ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Misión</h2>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Ser la principal Unidad de Manejo para la Conservación de la Vida Silvestre (UMA)
                especializada en cactáceas amenazadas en México. Promovemos la propagación legal,
                el estudio científico y la venta responsable de estas especies, contribuyendo
                activamente a su conservación mientras generamos beneficios económicos sostenibles
                para nuestras comunidades y socios.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-raleway font-semibold text-foreground mb-4">Visión</h2>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Construir un modelo de producción sostenible en zonas áridas que sirva de
                referente nacional e internacional. Aspiramos a demostrar que la conservación
                de ecosistemas y la actividad económica pueden coexistir de manera armónica,
                generando valor para las personas y el planeta a través del manejo responsable
                de la vida silvestre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
