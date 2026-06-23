"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/content/navigation";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";

// Situs memakai trailingSlash: true, sementara usePathname() bisa mengembalikan
// path tanpa trailing slash. Samakan kedua sisi sebelum dibandingkan agar
// highlight menu tetap akurat meski href sudah berakhiran "/".
function stripTrailingSlash(path) {
  if (!path) return "/";
  return path !== "/" ? path.replace(/\/+$/, "") || "/" : "/";
}

function isActive(pathname, href, exact = false) {
  const current = stripTrailingSlash(pathname || "/");
  const target = stripTrailingSlash(href || "/");
  if (target === "/") return current === "/";
  if (exact) return current === target;
  return current === target || current.startsWith(`${target}/`);
}

function navClassName(active) {
  return `rounded-full px-4 py-2 text-sm font-black transition ${
    active ? "bg-brand-blue text-white shadow-blue" : "text-muted hover:bg-white hover:text-charcoal"
  }`;
}

export default function HeaderClient() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-ivory/92 shadow-[0_10px_30px_rgba(23,23,23,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link href={routes.home} className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 shadow-[0_10px_25px_rgba(23,23,23,0.08)]">
            <Image src="/assets/logo/logo-transparent-attempt.png" alt="Logo BUF" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-xl font-black tracking-[-0.02em] text-charcoal">{siteConfig.name}</span>
            <span className="block max-w-[210px] truncate text-[11px] font-black uppercase tracking-[0.16em] text-muted">
              {siteConfig.legalName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => {
            const active = isActive(pathname, item.href, item.exact);
            const hasDropdown = Boolean(item.groups?.length);

            if (!hasDropdown) {
              return (
                <Link key={item.href || item.label} href={item.href} className={navClassName(active)}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href || item.label} className="group relative">
                <Link href={item.href} className={navClassName(active)}>
                  {item.label}
                </Link>

                <div className="invisible absolute left-0 top-full z-40 mt-3 w-[720px] max-w-[calc(100vw-2rem)] translate-y-2 rounded-[2rem] border border-stone-200 bg-white p-5 opacity-0 shadow-[0_28px_90px_rgba(23,23,23,0.14)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid gap-4 md:grid-cols-3">
                    {item.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">
                          {group.label}
                        </p>
                        <div className="mt-3 grid gap-1.5">
                          {group.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`rounded-2xl px-3 py-2 text-sm font-black transition ${
                                isActive(pathname, child.href) ? "bg-[#fffaf2] text-charcoal" : "text-muted hover:bg-[#fffaf2] hover:text-charcoal"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white shadow-soft lg:hidden"
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
            {mainNavigation.map((item) => {
              const hasDropdown = Boolean(item.groups?.length);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href || item.label}
                    href={item.href}
                    className={`rounded-2xl border px-4 py-3 text-sm font-black ${
                      isActive(pathname, item.href, item.exact)
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-stone-200 bg-white text-charcoal"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <details key={item.href || item.label} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                  <summary className="cursor-pointer px-4 py-3 text-sm font-black text-charcoal">
                    {item.label}
                  </summary>
                  <div className="grid gap-4 border-t border-stone-200 px-4 py-4">
                    {item.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">
                          {group.label}
                        </p>
                        <div className="mt-2 grid gap-1">
                          {group.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="rounded-xl px-3 py-2 text-sm font-bold text-muted hover:bg-[#fffaf2] hover:text-charcoal"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
