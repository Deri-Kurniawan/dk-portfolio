import "@/app/globals.css";
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/app/_components/Navbar";
import Banner from "@/app/_components/Banner";
import Complementbar from "@/app/_components/Complementbar";
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
              <div className="flex h-screen overflow-y-hidden">
                <div className="w-[330px] hidden lg:block">
                  <Navbar />
                </div>

                <Flex
                  className="flex-1 px-2 pt-4 lg:pt-6 md:px-4 lg:px-0"
                  direction="column"
                >
                  {children}
                </Flex>

                <div className="w-[330px] hidden xl:block">
                  <Complementbar />
                </div>
              </div>
            </div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
