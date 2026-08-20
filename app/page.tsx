"use client";

import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight, BedDouble, Check, ChevronRight, Compass, Download, Flame, Instagram, MapPin, Menu, MessageCircle, Phone, Plane, Sparkles, Star, Train, Users, Waves, X } from "lucide-react";
import { useState } from "react";

// Hero / destination images
import manaliWinter from "./assets/manali-winter.png";
import kulluRafting from "./assets/kullu-rafting.png";
import riverRafting from "./assets/river-rafting.png";
import kasolValley from "./assets/kasol-valley.png";
import dharamshalaDhauladhar from "./assets/dharamshala-dhauladhar.png";
import amritsarGoldenTemple from "./assets/amritsar-golden-temple.png";

// Activity images (user-uploaded)
import paragliding from "./assets/paragliding.png";
import snowActivities from "./assets/snow-activities.png";
import bonfireNight from "./assets/bonfire-night.png";
import lanternFestival from "./assets/lantern-festival.png";
import neonParty from "./assets/neon-party.png";

// Hotel images (user-uploaded)
import hotelGrandMastiff from "./assets/hotel-grand-mastiff.png";
import hotelKasolCamp from "./assets/hotel-kasol-camp.png";
import hotelAngelsInn from "./assets/hotel-angels-inn.png";
import hotelNarulaAurum from "./assets/hotel-narula-aurum.png";

const formUrl = "https://forms.gle/1XbHjKRqJE4bYVD7A";

const images = {
  hero: manaliWinter.src,
  manali: manaliWinter.src,
  kullu: kulluRafting.src,
  rafting: riverRafting.src,
  kasol: kasolValley.src,
  dharamshala: dharamshalaDhauladhar.src,
  amritsar: amritsarGoldenTemple.src,
  para: paragliding.src,
  snow: snowActivities.src,
  bonfire: bonfireNight.src,
  lantern: lanternFestival.src,
  neon: neonParty.src,
  grandMastiff: hotelGrandMastiff.src,
  kasolCamp: hotelKasolCamp.src,
  angelsInn: hotelAngelsInn.src,
  narulaAurum: hotelNarulaAurum.src,
};

const stats = [
  ["11", "Days journey", Compass],
  ["10", "Nights adventure", BedDouble],
  ["100+", "Happy travelers", Users],
  ["4", "Premium hotel stays", Star],
  ["All", "Meals included", Flame],
  ["AC", "Train included", Train],
] as const;

const destinations = [
  ["Manali", "Snow peaks, cozy cafés & New Year glow", images.manali],
  ["Kullu", "A wild rush on the Beas", images.kullu],
  ["Kasol", "Pines, rivers and Himalayan calm", images.kasol],
  ["Dharamshala", "Monasteries beneath the Dhauladhar", images.dharamshala],
  ["Amritsar", "Golden moments, shared together", images.amritsar],
];

const adventures = [
  ["River Rafting", "Ride the Beas with your crew — included in the package!", Waves, images.rafting, true],
  ["Paragliding", "A sky-high Himalayan perspective. At your own expense — group discount applicable!", Plane, images.para, false],
  ["Snow Activities", "Solang's white playground awaits. At your own expense — group discount applicable on Skiing, ATV, Ziplining & more!", Sparkles, images.snow, false],
  ["Bonfire Night", "Stories, music and mountain air.", Flame, images.bonfire, true],
  ["Lantern Festival", "A little light for every big dream.", Sparkles, images.lantern, true],
  ["Neon New Year Party", "Countdown in full colour.", Star, images.neon, true],
] as const;

const itinerary = [
  {
    title: "Mumbai → Delhi",
    description:
      "Gather at Bandra Terminus by 11:00 AM to board the DEE GARIBRATH 12216 at 12:00 PM. Settle in for an overnight train journey to Delhi as your Himalayan adventure begins.",
    meals: null,
    activity: null,
  },
  {
    title: "Delhi",
    description:
      "Arrival at Delhi Sarai Rohilla Railway Station by 11:00 AM, followed by a sightseeing tour of Delhi. In the evening, enjoy dinner and commence the overnight journey toward Manali.",
    meals: "Brunch & Dinner",
    activity: null,
  },
  {
    title: "Manali — River Rafting & New Year Glow",
    description:
      "Arrive in Kullu and head out for an exciting river rafting session on the mighty Beas River — included in your package! After rafting, check in to the hotel, freshen up and relax. In the evening, visit the famous Mall Road for shopping, local food and leisure time. Return for dinner and gear up for the Neon Party — music, lights & unlimited dance vibes. Fireworks light up the night sky to ring in the New Year!",
    meals: "Breakfast, Lunch & Dinner",
    activity: "River Rafting — Included ✓",
    activityOwn: null,
  },
  {
    title: "Solang Valley",
    description:
      "Start your day with breakfast and drive to Solang Valley for a full-day trip. Weather permitting, explore the Atal Tunnel and take in stunning snow views. Optional paid adventure activities available: Ziplining, Skiing, ATV Ride, Snow Scooter and more (at your own expense). Later in the evening, visit the iconic Hidimba Devi Temple. Overnight stay at the hotel.",
    meals: "Breakfast & Dinner",
    activity: null,
    activityOwn: "Adventure activities (Ziplining, Skiing, ATV, Snow Scooter etc.) — At your own expense",
  },
  {
    title: "Kasol Valley",
    description:
      "After breakfast, check out from the hotel. Optional paragliding session available at your own cost. Later, visit the famous R.K. Shawl Factory for authentic Himachali woollen products and drive to the scenic Kasol. Visit the beautiful Parvati Valley and explore the charming village vibes. Overnight stay in Kasol.",
    meals: "Breakfast & Dinner",
    activity: null,
    activityOwn: "Paragliding — At your own expense (Group discount applicable!)",
  },
  {
    title: "Tosh Village & Live DJ",
    description:
      "After breakfast, visit Manikaran Gurudwara for a holy dip in the famous hot water springs. Then explore the picturesque Tosh Village nestled high in the Parvati Valley. In the evening, enjoy a bonfire, Open Air DJ under the stars and dinner in Kasol. Later at night, depart for Dharamshala for an overnight journey.",
    meals: "Breakfast, Lunch at Gurudwara & Dinner",
    activity: null,
  },
  {
    title: "Dharamshala",
    description:
      "Arrive in Dharamshala in the morning, check-in and rest. Post lunch, visit the iconic Dharamshala Cricket Stadium, scenic Bhagsu Falls and the historic St. John in the Wilderness Church. Spend the evening at Namgyal Monastery and explore McLeod Ganj Market. End the magical day with a Sky Lantern Show under the stars. Dinner and overnight stay.",
    meals: "Breakfast, Lunch & Dinner",
    activity: null,
  },
  {
    title: "Amritsar — New Year's Eve",
    description:
      "Start your day with breakfast, check out and head to Amritsar. After checking in, unwind for a bit. In the afternoon, experience the electrifying energy of the Wagah Border Beating Retreat Ceremony. In the evening, release sky lanterns and capture magical moments under the stars. Come back to the hotel to celebrate New Year's Eve in style — grand 31st December party with music, dance, entertainment and a special dinner await you!",
    meals: "Breakfast & Dinner",
    activity: null,
  },
  {
    title: "Amritsar → Delhi",
    description:
      "Start the day with breakfast, check out and explore the historic Partition Museum and the poignant Jallianwala Bagh. Spend the evening shopping and soaking in the vibrant vibes of Amritsar Market. After dinner, depart for an overnight drive to Delhi.",
    meals: "Breakfast, Lunch at Gurudwara & Dinner",
    activity: null,
  },
  {
    title: "Delhi → Mumbai (Train)",
    description:
      "Reach Delhi in the morning and catch the BDTS Garib Rath (12215) departing from Delhi Sarai Rohilla at 08:55 AM. Settle in for a scenic full-day train journey to Mumbai, followed by an overnight ride.",
    meals: null,
    activity: null,
  },
  {
    title: "Mumbai — Journey's End",
    description:
      "Reach Mumbai in the morning, bringing a beautiful journey to an end. Head back home with a heart full of happy memories and experiences you'll cherish for a lifetime.",
    meals: null,
    activity: null,
  },
];

const hotels = [
  ["Grand Mastiff Manali", "Premium Stay Highlight", "Manali", images.grandMastiff, ["Heated rooms", "Mountain views", "In-house dining"]],
  ["Kasol Adventure Camp", "Riverside escape", "Kasol", images.kasolCamp, ["Bonfire setup", "Camp meals", "Valley views"]],
  ["Angels Inn Dharamshala", "Serene comfort", "Dharamshala", images.angelsInn, ["Modern rooms", "Breakfast", "Great location"]],
  ["Narula Aurum Amritsar", "City luxury", "Amritsar", images.narulaAurum, ["Premium stay", "Wi-Fi", "Restaurant"]],
] as const;

const faqs = [
  ["Is rafting included?", "Yes! River rafting on the Beas is fully included in your package, subject to weather and local safety conditions."],
  ["Is paragliding included?", "Paragliding is available during the trip but is at your own expense. It is not included in the package price."],
  ["What other activities are at my own expense?", "Activities like Ziplining, Skiing, ATV Ride, Snow Scooter in Solang Valley and Paragliding in Kasol are optional and payable on the spot."],
  ["What is the cancellation policy?", "Our travel team will share the applicable cancellation terms with your booking confirmation."],
  ["Are meals included?", "Yes — the expedition includes the meals listed in each day's itinerary. Most days include Breakfast & Dinner; some include Lunch too."],
  ["Can girls join solo?", "Absolutely. Our trips are designed to be welcoming, social and well coordinated for solo travellers."],
  ["How are room allocations done?", "Rooms are arranged on a group-sharing basis, with allocations finalized by the trip team."],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function CTA({ children = "Reserve Your Seat", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={formUrl}
      target="_blank"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-adventure px-6 py-3.5 font-bold text-white transition active:scale-95 hover:-translate-y-0.5 hover:bg-[#e85f00] ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-slate text-white">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(90deg,rgba(4,20,37,.82),rgba(4,20,37,.3) 57%,rgba(4,20,37,.7)),url(${images.hero})` }}
        />
        <div className="noise absolute inset-0 opacity-20" />
        {Array.from({ length: 25 }).map((_, i) => (
          <i key={i} className="snow" style={{ left: `${(i * 31) % 100}%`, animationDuration: `${7 + (i % 8)}s`, animationDelay: `-${i % 10}s` }} />
        ))}

        {/* Nav */}
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#top" className="font-display text-base font-extrabold leading-tight tracking-tight sm:text-xl">
            The Manali <span className="text-adventure">New Year</span>
            <span className="block text-[9px] font-bold uppercase tracking-[.18em] text-white/65">Carnival 2026</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#journey">Journey</a>
            <a href="#stay">Stays</a>
            <a href="#itinerary">Itinerary</a>
            <CTA className="!px-5 !py-2.5 !text-sm" />
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menu && (
          <div className="absolute right-4 top-20 z-30 flex w-56 flex-col gap-3 rounded-2xl bg-white p-5 text-slate shadow-xl md:hidden">
            <a href="#journey" className="font-semibold" onClick={() => setMenu(false)}>Journey</a>
            <a href="#stay" className="font-semibold" onClick={() => setMenu(false)}>Stays</a>
            <a href="#itinerary" className="font-semibold" onClick={() => setMenu(false)}>Itinerary</a>
            <CTA className="!px-4 !py-2.5 !text-sm" />
          </div>
        )}

        {/* Hero content */}
        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-center px-5 pb-24 pt-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
              <Sparkles size={14} className="text-adventure" /> 24 DEC 2026 - 03 JAN 2027
            </div>
            <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              HIMACHAL<br />
              <span className="text-[#ffc18c]">NEW YEAR</span> EXPEDITION<br />
              2026-27
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Manali <span className="text-adventure">•</span> Kullu <span className="text-adventure">•</span> Kasol <span className="text-adventure">•</span> Dharamshala <span className="text-adventure">•</span> Amritsar
            </p>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              A 10-day story of snow, starlight, strangers who become your favorite people, and one unforgettable countdown.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTA />
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <Download size={17} /> Explore itinerary
              </a>
            </div>
          </Reveal>

          {/* Desktop badge strip */}
          <div className="absolute bottom-10 right-5 hidden max-w-[430px] grid-cols-2 gap-2 lg:grid">
            {["River Rafting", "Paragliding", "Neon New Year Party", "Premium Hotels"].map((t) => (
              <div key={t} className="glass rounded-xl px-4 py-3 text-xs font-bold">
                <Check size={14} className="mr-1 inline text-adventure" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="journey" className="bg-[#f5f8fa] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">Your story begins here</p>
            <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display max-w-2xl text-2xl font-extrabold leading-tight text-slate sm:text-4xl">
                The kind of trip you'll still talk about years from now.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-slate/65">
                Built for people who want more than a checklist: every mile feels like part of the celebration.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(([number, label, Icon]) => (
              <Reveal key={String(label)} className="h-full">
                <div className="h-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <Icon size={20} className="text-adventure" />
                  <p className="mt-5 font-display text-2xl font-extrabold text-himalayan">{number}</p>
                  <p className="mt-1 text-xs font-semibold text-slate/65">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">Five chapters. One epic expedition.</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate sm:text-4xl">Where the mountains lead.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {destinations.map(([city, copy, img]) => (
              <Reveal key={String(city)}>
                <article className="group relative h-72 overflow-hidden rounded-2xl bg-slate sm:h-80">
                  <img src={String(img)} alt={`${city}, Himachal`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061624]/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-display text-xl font-extrabold">{city}</p>
                    <p className="mt-1 text-xs text-white/70">{copy}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#ffc18c] opacity-0 transition group-hover:opacity-100">
                      Discover <ChevronRight size={14} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVENTURES ── */}
      <section className="bg-forest px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">More than sightseeing</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-4xl">
              Turn up the altitude.<br />
              <span className="text-[#ffc18c]">Turn up the story.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {adventures.map(([title, copy, Icon, img, included]) => (
              <Reveal key={String(title)}>
                <article className="group relative h-64 overflow-hidden rounded-2xl sm:h-72">
                  <img src={String(img)} alt={String(title)} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  {included !== undefined && (
                    <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide ${included ? "bg-green-500/90 text-white" : "bg-orange-500/90 text-white"}`}>
                      {included ? "✓ Included" : "Own expense"}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-adventure">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-white/70">{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY ── */}
      <section id="itinerary" className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="section-label">The route</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate sm:text-4xl">Eleven days, one brilliant escape.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate/60">Every day has a destination. Every destination has a feeling.</p>
          </Reveal>
          {/* Detailed itinerary cards */}
          <div className="relative mx-auto mt-10 max-w-3xl before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-himalayan/20">
            {itinerary.map((item, i) => (
              <Reveal key={item.title} className="relative mb-6 flex items-start">
                <div className="ml-12 w-[calc(100%-3rem)] rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-adventure">Day {i + 1}</p>
                  <p className="mt-1 font-display text-base font-bold text-slate sm:text-lg">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate/65">{item.description}</p>
                  {item.activity && (
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      <Check size={13} /> {item.activity}
                    </p>
                  )}
                  {(item as any).activityOwn && (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-adventure">
                      ⚡ {(item as any).activityOwn}
                    </p>
                  )}
                  {item.meals && (
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate/55">
                      <Flame size={13} className="text-adventure" />
                      <span className="font-bold text-slate/75">Meals:</span> {item.meals}
                    </p>
                  )}
                </div>
                <div className="absolute left-2 top-5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-himalayan text-[10px] font-extrabold text-white">
                  {i + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTELS ── */}
      <section id="stay" className="bg-[#f5f8fa] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">Rest well. Roam further.</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate sm:text-4xl">Your stays, curated.</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.map(([name, tag, place, img, amenities]) => (
              <Reveal key={String(name)}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <div className="relative h-48">
                    <img src={String(img)} alt={String(name)} className="h-full w-full object-cover" />
                    {tag === "Premium Stay Highlight" && (
                      <span className="absolute left-3 top-3 rounded-full bg-adventure px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display font-bold text-slate">{name}</h3>
                        <p className="mt-1 flex items-center gap-1 text-xs text-slate/55">
                          <MapPin size={12} />{place}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star size={13} fill="currentColor" />4.8
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(amenities as readonly string[]).map((a) => (
                        <span key={a} className="rounded-full bg-[#f5f8fa] px-2 py-1 text-[10px] font-semibold text-slate/65">{a}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUP DISCOUNT ── */}
      <section className="relative overflow-hidden bg-himalayan px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-adventure/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-label text-[#ffc18c]">Squad goals, unlocked</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-4xl">Travel Together. Save Together.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Bringing your crew? Group discounts will be decided face-to-face during our campus meet. Come say hello, share your group size, and we'll work out the best possible offer together.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 text-left">
              <Users className="shrink-0 text-[#ffc18c]" />
              <span>
                <strong className="block font-display text-base text-white">Campus-exclusive discussion</strong>
                <span className="text-xs text-white/65">Discount details are finalized in person.</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="px-5 py-16 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate shadow-2xl">
          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            <div className="p-8 text-white sm:p-12">
              <p className="section-label">One decision. A hundred memories.</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-4xl">
                Your New Year,<br /><span className="text-[#ffc18c]">made legendary.</span>
              </h2>
              <div className="mt-8 space-y-3 text-sm text-white/75">
                {["AC train tickets", "Premium hotel stays", "River Rafting (Beas)", "Meals included", "Sightseeing & local transfers", "Driver, parking & toll charges"].map((x) => (
                  <p key={x} className="flex items-center gap-2"><Check size={16} className="text-adventure" />{x}</p>
                ))}
                <p className="mt-2 text-xs text-white/45">* All other adventure activities (Paragliding, Skiing, Ziplining, ATV etc.) are at your own expense.</p>
              </div>
            </div>
            <div className="m-3 rounded-2xl bg-white p-7 text-slate sm:m-5">
              <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-adventure">Early Bird Offer</span>
              <p className="mt-5 text-sm text-slate/50 line-through">₹17,999</p>
              <p className="font-display text-4xl font-extrabold text-himalayan">₹16,999</p>
              <p className="mt-1 text-xs text-slate/50">per traveller</p>
              <div className="my-6 h-px bg-slate-100" />
              <p className="text-xs font-bold text-slate/55">Easy installment plan</p>
              <p className="mt-2 font-display text-sm font-bold">₹4,999 + ₹5,999 + ₹5,999</p>
              <CTA className="mt-7 w-full">Reserve My Seat</CTA>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-[#f5f8fa] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <p className="section-label">The Manali New Year Carnival 2026</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-slate sm:text-4xl">
                Trusted by travellers who came for a trip and left with a tribe.
              </h2>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[images.manali, images.para, images.bonfire].map((x) => (
                    <img key={x} src={x} className="h-11 w-11 rounded-full border-2 border-white object-cover" alt="Carnival traveler" />
                  ))}
                </div>
                <div>
                  <p className="font-display text-xl font-extrabold text-himalayan">100+ Happy Travelers</p>
                  <p className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-4xl leading-none text-adventure">"</p>
                <p className="mt-2 font-display text-lg font-bold leading-relaxed text-slate sm:text-xl">
                  The Manali New Year Carnival 2026 made every detail feel effortless — and every moment feel huge.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={images.para} className="h-11 w-11 rounded-full object-cover" alt="Traveler review" />
                  <div>
                    <p className="text-sm font-bold">Aarav & the mountain crew</p>
                    <p className="text-xs text-slate/55">Google Reviews style testimonial</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="section-label">Good to know</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate sm:text-4xl">Questions, answered.</h2>
          </Reveal>
          <AccordionPrimitive.Root type="single" collapsible className="mt-9 space-y-3">
            {faqs.map(([q, a], i) => (
              <AccordionPrimitive.Item value={`faq-${i}`} key={q} className="rounded-xl border border-slate-100 px-5">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-5 text-left font-display font-bold text-slate">
                    {q}<ChevronRight size={18} />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="pb-5 text-sm leading-relaxed text-slate/65">{a}</AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" className="bg-forest px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="section-label">The mountains are calling</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-4xl">Ready to make this your story?</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Lock in your spot for the most electric New Year escape of 2026-27. Our team will take it from there.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a href="tel:+919152861504" className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10 active:bg-white/20">
                <span className="rounded-full bg-white/10 p-2"><Phone size={16} /></span>
                Aniket Lonkar · 9152861504
              </a>
              <a href="tel:+918369576147" className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10 active:bg-white/20">
                <span className="rounded-full bg-white/10 p-2"><Phone size={16} /></span>
                Tanmay Lalge · 8369576147
              </a>
              <a href="https://instagram.com/tripscape_adventures" target="_blank" className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10 active:bg-white/20">
                <span className="rounded-full bg-white/10 p-2"><Instagram size={16} /></span>
                Follow us on Instagram
              </a>
            </div>
          </Reveal>
          <Reveal>
            <form action={formUrl} target="_blank" className="grid gap-4 rounded-2xl bg-white p-6 text-slate sm:grid-cols-2 sm:p-8">
              <div className="sm:col-span-2">
                <p className="font-display text-xl font-extrabold">Reserve your adventure</p>
                <p className="mt-1 text-xs text-slate/55">We'll redirect you to the secure registration form.</p>
              </div>
              {[["Name", "text"], ["Phone", "tel"], ["Email", "email"], ["College", "text"], ["Emergency contact", "tel"], ["Travel group size", "number"]].map(([label, type]) => (
                <label key={label} className="text-xs font-bold text-slate/70">
                  {label}
                  <input required type={type} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm font-normal outline-none focus:border-himalayan" />
                </label>
              ))}
              <button className="sm:col-span-2 rounded-full bg-adventure px-6 py-3.5 font-bold text-white transition hover:bg-[#e85f00] active:scale-95">
                Continue to Registration <ArrowRight className="ml-1 inline" size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#091923] px-5 pb-28 pt-12 text-white/65 lg:px-8 lg:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row">
          <div>
            <p className="font-display text-xl font-extrabold text-white">
              The Manali <span className="text-adventure">New Year</span> Carnival 2026
            </p>
            <p className="mt-3 max-w-sm text-sm italic">"Travel is the only thing you buy that makes you richer."</p>
          </div>
          <div className="flex items-center gap-3">
            <a className="rounded-full bg-white/10 p-3 hover:bg-adventure" href="tel:+919152861504"><Phone size={18} /></a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-adventure" href="https://wa.me/919152861504"><MessageCircle size={18} /></a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-adventure" href="https://instagram.com/tripscape_adventures"><Instagram size={18} /></a>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed inset-x-0 bottom-0 z-30 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,.12)] backdrop-blur lg:hidden">
        <CTA className="w-full">Reserve Now</CTA>
      </div>

    </main>
  );
}
