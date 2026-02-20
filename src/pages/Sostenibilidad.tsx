import HeroBanner from "@/components/HeroBanner";
import heroLandscape from "@/assets/hero-landscape.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import paisajismo from "@/assets/paisajismo.jpg";
import regenerativo from "@/assets/regenerativo.jpg";

const impactos = [
  {
    title: "ARQUITECTURA SOSTENIBLE",
    image: arquitectura,
    text: "Buscar optimizar los recursos del medio ambiente para hacerlos eficientes y redefinir el concepto de la construcción tradicional a través del diseño bioclimático. El uso de esta modalidad permite dar cumplimiento a los tres tipos de sostenibilidad: social, económica y medioambiental.",
  },
  {
    title: "PAISAJISMO SOSTENIBLE",
    image: paisajismo,
    text: "Buscar lograr un bajo consumo de los recursos naturales, es decir, que el área debería de ser diseñado dependiendo del ecosistema en el que se ubique el proyecto, disminuyendo el impacto ambiental negativo.",
  },
  {
    title: "DISEÑO REGENERATIVO",
    image: regenerativo,
    text: "Es un término que se utiliza para definir procesos que restauran, reparan o regeneran los ecosistemas dañados. Este va más allá de la sostenibilidad, buscando revitalizar y mejorar activamente los ecosistemas y comunidades, en lugar de solo reducir el impacto negativo.",
  },
];

export default function Sostenibilidad() {
  return (
    <main>
      <HeroBanner title="Nuestro Impacto" image={heroLandscape} height="h-64" />

      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {impactos.map((item) => (
              <div key={item.title}>
                <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-3 font-sans">
                  {item.title}
                </h2>
                <div className="rounded-lg overflow-hidden shadow-md mb-4 h-52">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
