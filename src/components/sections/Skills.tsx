import { skills } from "@/config/data";

export function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-lead">As ferramentas que uso no dia a dia para construir produtos.</p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="pb-4 border-b border-border-subtle text-sm font-medium text-text-secondary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="py-2 text-xl sm:text-2xl font-semibold tracking-tight text-text-primary [font-stretch:110%]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
