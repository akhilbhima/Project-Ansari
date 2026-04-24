import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goat Sponsorship — New Mercy Community Church",
  description:
    "Partner with a family by sponsoring a pair of goats. Seeding appreciating assets for additional income streams and sustainable livelihood opportunities.",
};

export default function GoatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
