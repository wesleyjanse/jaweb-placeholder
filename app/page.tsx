import Image from "next/image";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "wesleyjanse.business@gmail.com",
    href: "mailto:wesleyjanse.business@gmail.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+32 476 60 59 33",
    href: "tel:+32476605933",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16"
      style={{ backgroundColor: "#ffffff", color: "#011627" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-10 text-center">
        {/* Logo */}
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <Image src="/logo.svg" alt="Jaweb" width={180} height={28} priority />
        </div>

        {/* Rocket */}
        <div
          className="animate-fade-in animate-float"
          style={{ animationDelay: "100ms", willChange: "transform" }}
        >
          <Image
            src="/rocket.png"
            alt="Jaweb komt eraan"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Text content */}
        <div
          className="animate-fade-up flex flex-col gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#26C9AC" }}
          >
            Software Development Agency · Binnenkort beschikbaar
          </span>
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ color: "#011627", lineHeight: 1.2 }}
          >
            We gaan iets<br />groots lanceren
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#011627", opacity: 0.6 }}
          >
            Jaweb is een software development agency in opbouw. We bouwen digitale producten en oplossingen op maat. Neem gerust alvast contact op.
          </p>
        </div>

        {/* Divider */}
        <div
          className="animate-fade-up w-full"
          style={{ animationDelay: "300ms" }}
        >
          <div
            className="h-px w-full rounded-full"
            style={{ backgroundColor: "#26C9AC", opacity: 0.25 }}
          />
        </div>

        {/* Contact */}
        <div
          className="animate-fade-up flex w-full flex-col gap-3"
          style={{ animationDelay: "400ms" }}
        >
          {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              className="contact-link flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium"
              style={{
                color: "#011627",
                backgroundColor: "color-mix(in srgb, #26C9AC 6%, transparent)",
                border:
                  "1px solid color-mix(in srgb, #26C9AC 20%, transparent)",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#26C9AC", flexShrink: 0 }}>{icon}</span>
              <span
                style={{
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>

  );
}
