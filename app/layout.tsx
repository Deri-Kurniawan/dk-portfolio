import "@/app/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deri.my.id"),
  title: "Deri Kurniawan - Portfolio",
  description:
    "Explore the impressive DK Portfolio of Deri Kurniawan, a skilled developer showcasing web development projects, coding skills, and more.",
  keywords:
    "Deri Kurniawan, DK Portfolio, Developer, Portfolio, Web Development, Projects, Coding, Software Engineer, Frontend, Backend, Full Stack, HTML, CSS, JavaScript, React, React Native, Node.js, MySQL, Planet Scale, Express, Next.js, UI Design, Responsive Design",
  openGraph: {
    title: "Deri Kurniawan - Portfolio",
    description:
      "Discover the impressive DK Portfolio of Deri Kurniawan, a talented developer specializing in web development, coding, and software engineering.",
    url: "https://deri.my.id",
    type: "website",
    images: [
      {
        url: "https://og.deri.my.id/api/og?title=Deri%20Kurniawan%20Portfolio&tw=text-6xl_font-bold",
        width: 1280,
        height: 720,
        alt: "Deri Kurniawan Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={cn("bg-background", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme appearance="inherit" radius="large">
            <Banner />
            <div className="mx-auto max-w-[90rem]">
              <div className="flex">
                <Navbar />
                <div className="flex flex-col flex-1 px-2 pt-8 pb-20 md:px-4 lg:px-0 lg:py-6">
                  {children}
                </div>
              </div>
            </div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
