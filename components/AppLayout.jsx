import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "BUF — Berkah Utami Furniture",
  description: "Jasa interior custom Banyumas",
};

export default function AppLayout({ children }) {
  return React.createElement(
    "html",
    { lang: "id-ID" },
    React.createElement(
      "body",
      null,
      React.createElement(Header),
      children,
      React.createElement(Footer)
    )
  );
}
