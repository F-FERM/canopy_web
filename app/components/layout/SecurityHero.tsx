"use client";
import Image from "next/image";

export default function SecurityHero() {
  return (
    <section className="security-hero">
      {/* Decorative dot pattern top-left */}
      <div className="dot-pattern" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>

      <div className="hero-inner">
        {/* LEFT: Text Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="badge">
            <span className="badge-icon" aria-hidden="true">
              {/* Shield icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L3 7V12C3 16.97 6.96 21.61 12 23C17.04 21.61 21 16.97 21 12V7L12 2Z"
                  fill="#E8490F"
                />
              </svg>
            </span>
            <span>TRUSTED SECURITY PARTNER</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Highly Trained &amp; <br />
            Experienced{" "}
            <span className="highlight">
              Security <br />
              Services
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub">
            Providing professional security solutions to protect people,
            property, and businesses with trained and reliable security
            personnel.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button className="btn-primary">
              Explore
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </button>
            <button className="btn-outline">Contact</button>
          </div>
        </div>

        {/* RIGHT: Image Card */}
        <div className="hero-image-card">
          <div className="image-wrapper">
            {/* Replace src with your actual image */}
            <Image
              src="/Images/Frame.png"
              alt="Security guard on duty at a facility entrance"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Overlay label */}
            <div className="image-overlay">
              <h3 className="overlay-title">General Security</h3>
              <p className="overlay-desc">
                Trained security personnel providing 24/7 protection, access
                control, patrolling, and risk prevention to ensure safety of
                people and property.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Reset / base ─────────────────────────────────── */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ── Section wrapper ──────────────────────────────── */
        .security-hero {
          position: relative;
          background: #ffffff;
          width: 100%;
          min-height: 340px;
          padding: 48px 60px;
          overflow: hidden;
          display: flex;
          align-items: center;
          font-family: "Segoe UI", sans-serif;
        }

        /* ── Dot pattern (top-left corner decoration) ─────── */
        .dot-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 180px;
          height: 180px;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 6px;
          padding: 14px;
          opacity: 0.18;
          pointer-events: none;
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a1a2e;
        }

        /* ── Inner layout ─────────────────────────────────── */
        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 56px;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Left column ──────────────────────────────────── */
        .hero-content {
          flex: 0 0 auto;
          width: 340px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Badge */
        .badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #e8490f;
          text-transform: uppercase;
        }
        .badge-icon {
          display: flex;
          align-items: center;
        }

        /* Heading */
        .hero-heading {
          font-size: 30px;
          font-weight: 800;
          line-height: 1.25;
          color: #111111;
          letter-spacing: -0.3px;
        }
        .highlight {
          color: #e8490f;
        }

        /* Subtext */
        .hero-sub {
          font-size: 13px;
          line-height: 1.65;
          color: #777777;
          max-width: 320px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 4px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e8490f;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 11px 22px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            transform 0.15s ease;
        }
        .btn-primary:hover {
          background: #c93d0a;
          transform: translateY(-1px);
        }
        .btn-arrow {
          font-size: 15px;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #111111;
          border: 1.5px solid #cccccc;
          border-radius: 6px;
          padding: 11px 22px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition:
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.15s ease;
        }
        .btn-outline:hover {
          border-color: #e8490f;
          color: #e8490f;
          transform: translateY(-1px);
        }

        /* ── Right column: image card ─────────────────────── */
        .hero-image-card {
          flex: 1 1 auto;
          min-height: 260px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        /* Gradient overlay at the bottom */
        .image-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0, 0, 0, 0.72) 100%
          );
          border-radius: 14px;
        }

        /* Text overlay */
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 18px 20px 20px;
          color: #ffffff;
        }

        .overlay-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 5px;
          line-height: 1.3;
        }

        .overlay-desc {
          font-size: 11.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.85);
          max-width: 420px;
        }

        /* ── Responsive ───────────────────────────────────── */
        @media (max-width: 768px) {
          .security-hero {
            padding: 36px 24px 40px;
          }
          .hero-inner {
            flex-direction: column;
            gap: 32px;
          }
          .hero-content {
            width: 100%;
          }
          .hero-image-card {
            width: 100%;
          }
          .image-wrapper {
            height: 240px;
          }
          .hero-heading {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
