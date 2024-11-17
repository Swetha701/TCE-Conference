"use client";

import About from "@/components/Home/About";
import AuthorGuidelines from "@/components/Home/AuthorGuidelines";
import CallForPaper from "@/components/Home/CallForPaper";
import { Hero } from "@/components/Home/Hero";
import ImportantDates from "@/components/Home/ImportantDates";
import Registration from "@/components/Home/RegistrationFeesTable";
import PaymentPage from "@/components/Home/PaymentPage";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CallForPaper />
      <ImportantDates />
      <AuthorGuidelines />
      <Registration />
      <PaymentPage /> {/* Added PaymentPage component */}
    </main>
  );
}
