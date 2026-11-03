import { useState } from "react";
import type { FormEvent } from "react";

const machineLines = [
  {
    id: "excavators",
    name: "Hydraulic Excavators",
    detail:
      "From 1.5 tonne compact units to 100 tonne mining shovels. Next Gen cab design, standard grade assist, and fuel burn cut by up to a quarter against the previous series.",
    tag: "Diggers",
  },
  {
    id: "dozers",
    name: "Track-Type Tractors",
    detail:
      "The machine that cleared the first roads is still setting the standard. Electric drive options on the larger frames, semi-universal blades, and slope assist as standard.",
    tag: "Bulldozers",
  },
  {
    id: "loaders",
    name: "Wheel Loaders",
    detail:
      "Quarry, waste, or port handling. Payload weighing in the cab, so the operator loads to target every pass, no guessing, no reweighing.",
    tag: "Loaders",
  },
  {
    id: "graders",
    name: "Motor Graders",
    detail:
      "Sixteen feet of mouldboard held to millimetre tolerance. The finishing tool for roads, pads, and airports where the last pass is the one people remember.",
    tag: "Graders",
  },
  {
    id: "power",
    name: "Power Systems",
    detail:
      "Diesel and gas generator sets from 8 to 4,000 kVA, plus engines for locomotives, marine, and industrial drive. Power that starts when the grid does not.",
    tag: "Generators",
  },
  {
    id: "parts",
    name: "Attachments and Parts",
    detail:
      "Over a million line items stocked through the dealer network. A bucket, a pump, or a filter: if it wears, someone close to your site already has it.",
    tag: "Support",
  },
];

const stats = [
  { figure: "1925", label: "First track-type tractor built in California" },
  { figure: "300+", label: "Machines and attachments in the current line" },
  { figure: "190+", label: "Countries served through independent dealers" },
  { figure: "1M+", label: "Parts line items held in the dealer network" },
];

const industries = [
  {
    title: "Heavy construction",
    text: "Earthmoving fleets for contractors who bid against the calendar. Fuel telemetry, grade control, and uptime guarantees written into the deal.",
    img: "/images/infra-bulldozer.jpg",
    alt: "Bulldozer grading earth on an infrastructure project",
  },
  {
    title: "Mining and extraction",
    text: "Haul trucks, hydraulic shovels, and autonomous hauling built for twenty-hour shifts at altitude. Machines sized by the tonne, not by the brochure.",
    img: "/images/mining-site.jpg",
    alt: "Open-pit mine with yellow haul trucks on terraced rock",
  },
  {
    title: "Energy and transport",
    text: "Prime and standby power for hospitals, data halls, and rail. Generator sets that meet grid codes in one hundred and ninety countries.",
    img: "/images/power-generators.jpg",
    alt: "Row of industrial generator sets in a power hall",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#machines", label: "Machines" },
    { href: "#industries", label: "Industries" },
    { href: "#story", label: "Field Notes" },
    { href: "#dealers", label: "Find a Dealer" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="inline-block h-4 w-7 bg-accent" aria-hidden="true" />
          <span className="text-sm font-bold tracking-[0.22em] uppercase">
            Caterpillar
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#dealers"
          className="hidden rounded-full border border-foreground px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          Get a Quote
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-border px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium tracking-[0.1em] uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" aria-label="Introduction">
      {/* masthead */}
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="flex items-baseline justify-between border-y-2 border-foreground py-3">
          <span className="font-mono-data text-xs text-muted-foreground">
            Vol. CI, No. 1
          </span>
          <span className="font-mono-data text-xs text-muted-foreground">
            Earthmoving Quarterly
          </span>
        </div>
        <h1 className="font-display mt-10 max-w-4xl text-5xl leading-[1.02] tracking-tight md:mt-14 md:text-7xl">
          Machines that move the ground the world stands on.
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-base text-muted-foreground md:col-span-8 md:text-lg">
            For a century, Caterpillar has built the excavators, dozers,
            loaders, and power systems that dig, grade, haul, and power the
            modern world. A field guide to that work.
          </p>
          <div className="md:col-span-4 md:text-right">
            <a
              href="#machines"
              className="inline-block rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-background transition-colors hover:bg-accent hover:text-foreground"
            >
              Browse the Line
            </a>
          </div>
        </div>
      </div>
      {/* full-bleed photo */}
      <figure className="mx-auto max-w-7xl px-0 md:px-5">
        <img
          src="/images/hero-excavator.jpg"
          alt="A yellow hydraulic excavator working a dusty construction site at golden hour"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />
        <figcaption className="mx-5 mt-3 flex justify-between font-mono-data text-xs text-muted-foreground md:mx-0">
          <span>Fig. 1, A 336 excavator trenching at first light</span>
          <span className="hidden sm:inline">Reportage</span>
        </figcaption>
      </figure>
    </section>
  );
}

function Lede() {
  return (
    <section aria-label="Introduction letter" className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5">
        <p className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
          From the editor
        </p>
        <p className="font-display mt-6 text-3xl leading-snug md:text-4xl">
          A hundred years ago the first track-type tractor crawled out of a
          California workshop. The ground has not stood still since.
        </p>
        <div className="mt-8 space-y-5 text-base text-foreground/90 md:text-lg">
          <p>
            Every airport runway, every hydro dam, every kilometre of highway
            is a ledger of hours. Someone had to move the dirt first.
            Caterpillar's business is that someone: more than three hundred
            machines, the engines that drive them, and a dealer network that
            keeps them earning across a hundred and ninety countries.
          </p>
          <p>
            The yellow paint is easy to spot. The harder thing to see is the
            century of welds, castings, and field failures underneath it. This
            page is about the second part.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section aria-label="Company figures" className="bg-foreground py-14 text-background md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.figure} className="border-l border-background/25 pl-5">
            <div className="font-display text-5xl leading-none md:text-6xl">
              {s.figure}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Machines() {
  const [active, setActive] = useState(machineLines[0].id);
  const current = machineLines.find((m) => m.id === active) ?? machineLines[0];
  return (
    <section id="machines" className="py-20 md:py-28" aria-label="Machine lines">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            The line
          </h2>
          <p className="font-mono-data text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Six families, three hundred machines
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* index list */}
          <ul className="lg:col-span-5" role="tablist" aria-label="Machine families">
            {machineLines.map((m, i) => (
              <li key={m.id} className="border-b border-border">
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === m.id}
                  onClick={() => setActive(m.id)}
                  className={`group flex w-full items-baseline justify-between gap-4 py-5 text-left transition-colors ${
                    active === m.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono-data text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xl font-semibold md:text-2xl">{m.name}</span>
                  </span>
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors ${
                      active === m.id ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ul>
          {/* detail panel */}
          <div className="lg:col-span-7">
            <div
              role="tabpanel"
              className="border border-border bg-secondary/40 p-8 md:p-12"
            >
              <p className="font-mono-data text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {current.tag}
              </p>
              <h3 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
                {current.name}
              </h3>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground/90">
                {current.detail}
              </p>
              <a
                href="#dealers"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:decoration-foreground"
              >
                Request specs <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-4 font-mono-data text-xs text-muted-foreground">
              Specifications vary by region. Your dealer confirms what your
              site actually needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureQuote() {
  return (
    <section aria-label="Field quote" className="py-8 md:py-12">
      <figure className="relative mx-auto max-w-7xl md:px-5">
        <img
          src="/images/mining-site.jpg"
          alt="Open-pit mine at morning haze with yellow haul trucks on terraced benches"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />
        <figcaption className="mx-5 mt-3 flex justify-between font-mono-data text-xs text-muted-foreground md:mx-0">
          <span>Fig. 2, A mine site before the shift change</span>
          <span className="hidden sm:inline">Northern Territory</span>
        </figcaption>
        <blockquote className="relative z-10 mx-5 -mt-16 max-w-xl bg-background p-8 md:absolute md:bottom-20 md:left-16 md:mx-0 md:mt-0 md:p-10">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            “The machine is only half the story. The other half is the person
            in the seat at five in the morning.”
          </p>
          <cite className="mt-5 block text-xs font-semibold tracking-[0.18em] uppercase not-italic text-muted-foreground">
            Shift supervisor, iron ore operation
          </cite>
        </blockquote>
      </figure>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28" aria-label="Industries served">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Who it works for
          </h2>
          <p className="font-mono-data text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Three sectors, one standard
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {industries.map((ind) => (
            <article key={ind.title}>
              <img
                src={ind.img}
                alt={ind.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 text-lg font-semibold">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {ind.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="border-t border-border py-20 md:py-28" aria-label="Field notes">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="/images/operator-portrait.jpg"
            alt="Heavy equipment operator in a hard hat beside a wheel loader"
            className="aspect-[3/4] w-full object-cover"
          />
          <p className="mt-3 font-mono-data text-xs text-muted-foreground">
            Fig. 3, Twenty-two years on the sticks
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
            Field notes
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight tracking-tight md:text-5xl">
            The operator outranks the machine.
          </h2>
          <div className="mt-6 space-y-5 text-base text-foreground/90 md:text-lg">
            <p>
              Automation gets the headlines, but the cab is still built around
              a person. Seat suspension rated for a twelve-hour shift. Controls
              that work with gloves on. A display that reads at noon glare.
            </p>
            <p>
              When a mine runs autonomous trucks, a technician still walks the
              bench at dawn. When a grader finishes a runway, a pilot still
              trusts the work. The people come first, and the machines are
              engineered to keep it that way.
            </p>
          </div>
          <a
            href="#dealers"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:decoration-foreground"
          >
            Book a demo day <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Dealers() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !email) {
      setError("Please fill in both your name and work email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email address does not look right. Check it once more.");
      return;
    }
    setError("");
    setSent(true);
  }
  return (
    <section id="dealers" className="bg-foreground py-20 text-background md:py-28" aria-label="Find a dealer">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase text-background/60">
            Find a dealer
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight tracking-tight md:text-5xl">
            The machine is the easy part. The network is the point.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-background/75">
            Caterpillar sells through independent dealers, not head office.
            They hold the parts, run the workshops, and answer the phone at
            three in the morning. Leave your details and one will call you
            back within one business day.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l border-background/25 pl-4">
              <dt className="font-mono-data text-xs uppercase tracking-[0.18em] text-background/60">
                Response
              </dt>
              <dd className="mt-1 text-sm">Within one business day</dd>
            </div>
            <div className="border-l border-background/25 pl-4">
              <dt className="font-mono-data text-xs uppercase tracking-[0.18em] text-background/60">
                Coverage
              </dt>
              <dd className="mt-1 text-sm">190+ countries and territories</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          {sent ? (
            <div className="border border-background/30 p-8" role="status">
              <p className="font-display text-3xl">Request received.</p>
              <p className="mt-4 text-sm leading-relaxed text-background/75">
                Your local dealer has your details and will be in touch. For
                urgent parts, call the 24-hour line on your machine plate.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono-data text-xs uppercase tracking-[0.18em] text-background/60"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full border-0 border-b-2 border-background/40 bg-transparent pb-2 text-base text-background placeholder:text-background/40 focus:border-accent focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono-data text-xs uppercase tracking-[0.18em] text-background/60"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border-0 border-b-2 border-background/40 bg-transparent pb-2 text-base text-background placeholder:text-background/40 focus:border-accent focus:outline-none"
                  placeholder="jane@buildco.com"
                />
              </div>
              <div>
                <label
                  htmlFor="need"
                  className="font-mono-data text-xs uppercase tracking-[0.18em] text-background/60"
                >
                  What are you moving?
                </label>
                <select
                  id="need"
                  name="need"
                  className="mt-2 w-full border-0 border-b-2 border-background/40 bg-transparent pb-2 text-base text-background focus:border-accent focus:outline-none [&>option]:text-foreground"
                  defaultValue="Earth and aggregates"
                >
                  <option>Earth and aggregates</option>
                  <option>Mining overburden</option>
                  <option>Roadbuilding and grading</option>
                  <option>Standby and prime power</option>
                  <option>Parts and service</option>
                </select>
              </div>
              {error && (
                <p className="text-sm text-accent" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-full bg-accent py-4 text-sm font-bold tracking-[0.14em] uppercase text-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send to My Dealer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-background/20 bg-foreground py-10 text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-3.5 w-6 bg-accent" aria-hidden="true" />
          <span className="text-xs font-bold tracking-[0.22em] uppercase">
            Caterpillar
          </span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { href: "#machines", label: "Machines" },
            { href: "#industries", label: "Industries" },
            { href: "#story", label: "Field Notes" },
            { href: "#dealers", label: "Dealers" },
            { href: "#top", label: "Back to Top" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.14em] uppercase text-background/60 transition-colors hover:text-background"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="font-mono-data text-xs text-background/40">
          Built to build. Since 1925.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lede />
        <StatsBand />
        <Machines />
        <FeatureQuote />
        <Industries />
        <Story />
        <Dealers />
      </main>
      <Footer />
    </>
  );
}
