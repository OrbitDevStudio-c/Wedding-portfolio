import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  Car,
  Crown,
  Gem,
  Heart,
  MapPin,
  Plane,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

const cars = [
  { brand: "Ferrari", model: "LaFerrari", note: "Hybrid couture performance with Italian drama." },
  { brand: "Bugatti", model: "Tourbillon", note: "Top favourite: sculptural, rare, and impossibly powerful.", favorite: true },
  { brand: "Pagani", model: "Utopia", note: "Hand-built art with a runway-level interior mood." },
  { brand: "BMW", model: "M4 CSL", note: "Sharp, athletic, and perfect for late-night city drives." },
  { brand: "Lamborghini", model: "Centenario", note: "A fearless collector piece with supercar theatre." },
];

const memories = [
  "Maldives",
  "Florida, USA",
  "Netherlands",
  "France",
  "Switzerland",
];

const values = [
  "Family-first but globally minded",
  "Fashion designer, model, and CEO energy",
  "Luxury cars, island escapes, and editorial shoots",
  "Soft-spoken confidence with ambitious goals",
];

const partner = [
  ["Ideal age", "20-25"],
  ["Mindset", "Loyal, polished, emotionally mature"],
  ["Lifestyle", "Travel-ready, supportive, family respectful"],
  ["Ambition", "Building a beautiful life, not just talking about it"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff6f9] text-[#321926]">
      <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-32px))] -translate-x-1/2 border border-white/70 bg-white/70 px-4 py-3 shadow-[0_18px_60px_rgba(173,70,111,0.16)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-serif text-lg tracking-[0.22em] text-[#8d3158]">
            Alica Patel
          </a>
          <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6d4257] md:flex">
            <a href="#story" className="transition hover:text-[#c32f74]">Story</a>
            <a href="#garage" className="transition hover:text-[#c32f74]">Garage</a>
            <a href="#travel" className="transition hover:text-[#c32f74]">Travel</a>
            <a href="#partner" className="transition hover:text-[#c32f74]">Partner</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#321926] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c32f74]"
          >
            <Heart size={14} />
            Connect
          </a>
        </div>
      </nav>

      <section id="home" className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#efb4cc] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a82f68]">
              <Sparkles size={14} />
              Premium bridal biodata
            </div>
            <h1 className="font-serif text-5xl leading-[0.95] text-[#321926] sm:text-7xl lg:text-8xl">
              Soft Glam.
              <span className="block italic text-[#c32f74]">Serious Ambition.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d4257]">
              Alica is a fashion designer, model, and the CEO of Ravntra, a fashion and cloth-making company created for models who want beautifully tailored statement pieces.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["CEO", "Ravntra"],
                ["20-25", "Ideal partner age"],
                ["Bugatti", "Top favourite"],
                ["5", "Dream memories"],
              ].map(([value, label]) => (
                <div key={label} className="border border-[#f0c2d2] bg-white/75 p-4 shadow-[0_16px_40px_rgba(173,70,111,0.10)]">
                  <p className="font-serif text-2xl text-[#9b285f]">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#806171]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 -top-6 h-6 border border-[#f1bfd0] bg-[#ffe4ee]" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white bg-white p-3 shadow-[0_30px_90px_rgba(139,39,86,0.22)]">
              <Image
                src="/images/hero 2.png"
                alt="Alica Patel editorial portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 border border-white/70 bg-white/[0.82] p-4 backdrop-blur-md">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b42f6d]">Fashion Designer · Model · CEO</p>
                <p className="mt-1 font-serif text-2xl text-[#321926]">Ravntra Atelier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c32f74]">The Profile</p>
            <h2 className="mt-3 font-serif text-4xl text-[#321926] sm:text-5xl">Made for a polished modern match.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = [Crown, Building2, Plane, Gem][index];
              return (
                <div key={item} className="border border-[#f2d5df] bg-[#fff7fa] p-6">
                  <Icon className="mb-5 text-[#c32f74]" size={24} />
                  <p className="text-base leading-7 text-[#5f3c4d]">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="garage" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c32f74]">Dream Car Collection</p>
              <h2 className="mt-3 font-serif text-4xl text-[#321926] sm:text-5xl">Collector garage, couture taste.</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 border border-[#f0c2d2] bg-white px-4 py-3 text-sm font-semibold text-[#9b285f]">
              <Star size={16} fill="currentColor" />
              Top fav: Bugatti
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {cars.map((car) => (
              <article
                key={car.model}
                className={`min-h-64 border p-6 shadow-[0_20px_50px_rgba(173,70,111,0.10)] ${
                  car.favorite
                    ? "border-[#c32f74] bg-[#321926] text-white"
                    : "border-[#f0c2d2] bg-white text-[#321926]"
                }`}
              >
                <Car className={car.favorite ? "text-[#ffd3e3]" : "text-[#c32f74]"} size={24} />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">{car.brand}</p>
                <h3 className="mt-2 font-serif text-3xl leading-tight">{car.model}</h3>
                <p className={`mt-5 text-sm leading-6 ${car.favorite ? "text-[#ffe6ef]" : "text-[#6d4257]"}`}>{car.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="travel" className="bg-[#321926] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#ffb7d3]">Travel Memories</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">A passport with pink sunsets.</h2>
            <p className="mt-5 text-base leading-7 text-[#ffe6ef]">
              Her dream memories are elegant, sunny, and made for cinematic photo albums.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {memories.map((place) => (
              <div key={place} className="border border-white/15 bg-white/[0.08] p-6">
                <MapPin className="mb-5 text-[#ffb7d3]" size={22} />
                <h3 className="font-serif text-3xl">{place}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c32f74]">Partner Expectations</p>
            <h2 className="mt-3 font-serif text-4xl text-[#321926] sm:text-5xl">Soft heart, sharp standards.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6d4257]">
              She is looking for someone in the 20-25 age range who respects family, supports her CEO journey, and can match her taste for travel, fashion, and a beautiful future.
            </p>
          </div>
          <div className="divide-y divide-[#f2d5df] border border-[#f2d5df]">
            {partner.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[130px_1fr] gap-4 bg-[#fff7fa] p-5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#b42f6d]">
                  <UserRound size={15} />
                  {label}
                </div>
                <p className="font-serif text-xl text-[#321926]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border border-[#f0c2d2] bg-white p-8 shadow-[0_24px_70px_rgba(173,70,111,0.14)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c32f74]">Connection</p>
              <h2 className="mt-3 font-serif text-4xl text-[#321926] sm:text-5xl">A premium match introduction.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6d4257]">
                Designed as a refined, feminine portfolio for Alica Patel: fashionable, ambitious, family-aware, and ready for a future that feels intentional.
              </p>
            </div>
            <a
              href="mailto:alicia.patel@fictional.com"
              className="inline-flex items-center justify-center gap-2 bg-[#c32f74] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#321926]"
            >
              <BriefcaseBusiness size={18} />
              Send Inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
