"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/content/navigation";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import WhatsappLink from "@/components/ui/WhatsappLink";

function isActive(pathname, href, exact = false) {
  if (href === routes.home) return pathname === routes.home;
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function HeaderClient() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-ivory/90 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href={routes.home} className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 shadow-soft">
            <Image src="/assets/logo/logo-transparent-attempt.png" alt="Logo BUF" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-[-0.03em] text-charcoal">{siteConfig.name}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">{siteConfig.legalName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href || item.label}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                isActive(pathname, item.href, item.exact)
                  ? "bg-brand-blue/10 text-brand-blue"
                  : "text-muted hover:bg-white hover:text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <WhatsappLink className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-black text-white shadow-blue transition hover:-translate-y-0.5 hover:bg-brand-blue-dark">
            Konsultasi
          </WhatsappLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white shadow-soft lg:hidden"
          aria-label="Buka menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-charcoal" />
            <span className="block h-0.5 w-5 rounded-full bg-charcoal" />
            <span className="block h-0.5 w-5 rounded-full bg-charcoal" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone-200/70 bg-ivory px-4 pb-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-3">
            {mainNavigation.map((item) => (
              <Link
                key={item.href || item.label}
                href={item.href}
                className={`rounded-2xl border px-4 py-3 text-sm font-black ${
                  isActive(pathname, item.href, item.exact)
                    ? "border-brand-blue/20 bg-brand-blue/10 text-brand-blue"
                    : "border-stone-200 bg-white text-charcoal"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <WhatsappLink className="rounded-2xl bg-brand-blue px-4 py-3 text-center text-sm font-black text-white shadow-blue">
              Konsultasi WhatsApp
            </WhatsappLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
