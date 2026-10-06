import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Products | Kayal Achagam",
  description:
    "Explore printing services, e-services, online payments, publications, and Tamil heritage merchandise at Kayal Achagam Centre, Paramakudi.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
