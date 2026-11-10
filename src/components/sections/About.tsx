import { aboutMetrics } from "@/config/data";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="section-title">Sobre mim</h2>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 max-w-[42rem]">
          <p className="text-xl sm:text-2xl leading-snug text-text-primary [text-wrap:pretty]">
            Estudante de Engenharia de Software com foco em desenvolvimento full stack.
            Gosto de resolver problemas com código e de colocar o que aprendo em projetos reais.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
            Hoje me dedico ao ecossistema web e a C#, com experiência em sistemas responsivos
            como plataformas de gestão financeira e sistemas de pedidos (PDV) com manipulação
            dinâmica de dados. Também tenho interesse em infraestrutura de nuvem (AWS) e automação
            com Python.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
            Busco desafios que me façam evoluir tecnicamente e contribuir com soluções que
            escalem e sejam bem-feitas, do back-end à interface.
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-6 border-t border-border-subtle pt-8">
            {aboutMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-text-secondary leading-snug">{metric.label}</dt>
                <dd className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary [font-stretch:112%]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
