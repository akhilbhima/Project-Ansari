import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beholding Beloved — New Mercy Community Church",
  description:
    "A journey of love & faith. New Mercy's vision for the 80,000 Devadasi women in Karnataka. Partner with us as we seek to help fund some of their most pressing needs.",
};

export default function BeholdingBelovedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Adobe Typekit — Lotus Eden + Inter */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://use.typekit.net/oqd1mgr.css" />
      {children}
    </>
  );
}
