export default function Home() {
  const events = [
    {
      title: "GRIP IT & GIVE BACK — St. Joachim FUNdraiser",
      date: "September 28, 2025",
      time: "8:00 AM Shotgun",
      course: "Redwood Canyon Golf Course",
      location: "Castro Valley, CA",
      highlights: ["$10,000 Hole-in-One", "$2,500 Putting Contest", "Awards, Trophies & Raffles", "Lunch Reception"],
      cta: "Sign Up",
    },
    {
      title: "8th Maharlika GCBA Tournament (2× FEDUP Qualifier)",
      date: "October 12, 2025",
      time: "8:20 AM Straight Tee Times",
      course: "Baylands Golf Links",
      location: "Palo Alto, CA",
      highlights: ["Range Balls", "Tournament Prizes", "2× FEDUP points"],
      cta: "Register",
    },
  ];

  const sponsors = [
    { name: "Peninsula Golf", sub: "San Mateo, CA", phone: "650-345-8008" },
    { name: "Grocery Outlet", sub: "North Stockton" },
    { name: "Farmers Insurance", sub: "Patrick Rodriguez" },
    { name: "Cadillac", sub: "Bay Area Partner" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 text-white grid place-content-center font-extrabold">A</div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">ASTIG GOLF</div>
              <div className="text-xs text-neutral-500">Drama Free Zone · Astig Way</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-neutral-600" href="#about">About</a>
            <a className="hover:text-neutral-600" href="#events">Tournaments</a>
            <a className="hover:text-neutral-600" href="#join">Join</a>
            <a className="hover:text-neutral-600" href="#sponsors">Sponsors</a>
            <a className="hover:text-neutral-600" href="#contact">Contact</a>
            <a href="#join" className="inline-flex rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:opacity-90">Join</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#c7f9ff_0%,transparent_60%)] opacity-60" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Bay Area Golf · Community · Good Vibes
            </h1>
            <p className="mt-4 text-neutral-700 md:text-lg max-w-prose">
              ASTIG brings golfers together for competitive play, community service, and unforgettable tournaments across Northern California—and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#events" className="rounded-2xl px-5 py-3 bg-neutral-900 text-white hover:opacity-90">See Tournaments</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border border-neutral-300 hover:bg-neutral-100">Contact Us</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div>🏆 Prizes</div>
              <div>👥 Camaraderie</div>
              <div>🚩 System 36 & GHIN</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-300 shadow-xl border overflow-hidden grid place-content-center text-center p-8">
              <div className="text-7xl">⛳️</div>
              <p className="mt-2 text-neutral-600">Replace with Baylands / Redwood Canyon hero image</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-xl font-semibold mb-2">Our Mission</div>
            <p className="text-neutral-700">
              We grow the game with inclusive events, competitive formats, and a culture of respect—the <span className="font-semibold">Astig Way</span>.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-xl font-semibold mb-2">What We Run</div>
            <p className="text-neutral-700">Monthly tournaments, charity fundraisers, Ryder Cup-style matches, skins, and travel golf.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-xl font-semibold mb-2">How to Join</div>
            <p className="text-neutral-700">Play a tournament, volunteer, or become a sponsor. New golfers welcome!</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Tournaments</h2>
            <a href="#join" className="text-sm text-neutral-600 hover:text-neutral-800 flex items-center gap-1">
              Become a member <span aria-hidden>›</span>
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div key={e.title} className="rounded-2xl border bg-white p-6">
                <div className="text-xl font-semibold leading-tight">{e.title}</div>
                <div className="text-sm text-neutral-700 space-y-2 mt-2">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div>📅 {e.date} · {e.time}</div>
                    <div>📍 {e.course} — {e.location}</div>
                  </div>
                  <ul className="list-disc pl-5">
                    {e.highlights.map((h) => (<li key={h}>{h}</li>))}
                  </ul>
                  <div className="pt-2">
                    <a href="#join" className="rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:opacity-90 inline-block">{e.cta}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-500">* Replace dates, fees, and sign-up links with your live info or Google Forms.</p>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join ASTIG</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              Become part of a competitive, welcoming community. We use System 36 for most events and support GHIN handicaps via NCGA. Members get early sign-ups, sponsor perks, and priority for travel golf.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://forms.gle/" target="_blank" className="rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:opacity-90">Request Membership</a>
              <a href="#events" className="rounded-2xl px-4 py-2 border border-neutral-300 hover:bg-neutral-100">View Schedule</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-xl font-semibold mb-4">Quick Interest Form</div>
            <form className="grid gap-3">
              <input className="border rounded-xl px-3 py-2" placeholder="Full Name" />
              <input className="border rounded-xl px-3 py-2" placeholder="Email" type="email" />
              <input className="border rounded-xl px-3 py-2" placeholder="Mobile" type="tel" />
              <textarea className="border rounded-xl px-3 py-2" placeholder="Tell us about your golf experience (optional)" rows={4} />
              <button type="button" className="rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:opacity-90">Submit</button>
            </form>
            <p className="text-xs text-neutral-500 mt-2">* Swap this for a Google Form link to collect responses.</p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sponsors & Partners</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sponsors.map((s) => (
              <div key={s.name} className="rounded-2xl border bg-white p-6">
                <div className="text-lg font-semibold">{s.name}</div>
                <div className="text-xs text-neutral-500">{s.sub}</div>
                {s.phone && <div className="text-xs text-neutral-500 mt-2">{s.phone}</div>}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a className="rounded-2xl px-4 py-2 border border-neutral-300 hover:bg-neutral-100 inline-block" href="#contact">Become a Sponsor</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">Questions about tournaments, partnerships, or volunteering? Send us a note.</p>
            <div className="mt-6 grid gap-3 text-sm text-neutral-700">
              <div>✉️ info@astiggolf.org</div>
              <div>📱 (510) 000-0000</div>
              <div>📸 @astig_golf</div>
              <div>📘 Facebook Group</div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-xl font-semibold mb-4">Contact Form</div>
            <form className="grid gap-3">
              <input className="border rounded-xl px-3 py-2" placeholder="Full Name" />
              <input className="border rounded-xl px-3 py-2" placeholder="Email" type="email" />
              <textarea className="border rounded-xl px-3 py-2" placeholder="Message" rows={5} />
              <button type="button" className="rounded-2xl px-4 py-2 bg-neutral-900 text-white hover:opacity-90">Send</button>
            </form>
            <p className="text-xs text-neutral-500 mt-2">* Link this to your email or a Google Form.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} ASTIG Golf. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-neutral-800">About</a>
            <a href="#events" className="hover:text-neutral-800">Schedule</a>
            <a href="#contact" className="hover:text-neutral-800">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
