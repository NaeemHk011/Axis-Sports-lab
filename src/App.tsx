import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Training = lazy(() => import("./pages/Training"));
const Camps = lazy(() => import("./pages/Camps"));
const Teams = lazy(() => import("./pages/Teams"));
const Membership = lazy(() => import("./pages/Membership"));
const Contact = lazy(() => import("./pages/Contact"));
const EvaluationWorkout = lazy(() => import("./pages/EvaluationWorkout"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Rentals = lazy(() => import("./pages/Rentals"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReserveTraining = lazy(() => import("./pages/ReserveTraining"));
const CampScheduler = lazy(() => import("./pages/CampScheduler"));
const ClubTryouts = lazy(() => import("./pages/ClubTryouts"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const MembershipCheckout2DaysWeek = lazy(() => import("./pages/MembershipCheckout2DaysWeek"));
const Ebook = lazy(() => import("./pages/Ebook"));
const Consultation = lazy(() => import("./pages/Consultation"));
const SkillsTrainingBooking = lazy(() => import("./pages/SkillsTrainingBooking"));
const ShootingClassesBooking = lazy(() => import("./pages/ShootingClassesBooking"));
const PerformanceTrainingBooking = lazy(() => import("./pages/PerformanceTrainingBooking"));
const LeagueRegistration = lazy(() => import("./pages/LeagueRegistration"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const MembershipPackage = lazy(() => import("./pages/MembershipPackage"));
const AniyaFoy = lazy(() => import("./pages/AniyaFoy"));
const Athletes = lazy(() => import("./pages/Athletes"));
const AthleteProfile = lazy(() => import("./pages/AthleteProfile"));
const CoachDetail = lazy(() => import("./pages/CoachDetail"));
const TermsAndConditionsPublic = lazy(() => import("./pages/TermsAndConditions"));
const RentalTerms = lazy(() => import("./pages/RentalTerms"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RentalRequest = lazy(() => import("./pages/RentalRequest"));
const AthletePlan = lazy(() => import("./pages/AthletePlan"));
const PrivateOneOnOneTraining = lazy(() => import("./pages/Private-one-on-one-Training"));
const SemiPrivateTraining = lazy(() => import("./pages/Semi-Private-Training"));
const AxisMinisBooking = lazy(() => import("./pages/AxisMinisBooking"));
const RookieAcademy = lazy(() => import("./pages/RookieAcademy"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/training" element={<PageTransition><Training /></PageTransition>} />
        <Route path="/camps" element={<PageTransition><Camps /></PageTransition>} />
        <Route path="/teams" element={<PageTransition><Teams /></PageTransition>} />
        <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/evaluation-workout" element={<PageTransition><EvaluationWorkout /></PageTransition>} />
        <Route path="/alumni" element={<PageTransition><Alumni /></PageTransition>} />
        <Route path="/rentals" element={<PageTransition><Rentals /></PageTransition>} />
        <Route path="/reserve-training" element={<PageTransition><ReserveTraining /></PageTransition>} />
        <Route path="/campscheduler" element={<PageTransition><CampScheduler /></PageTransition>} />
        <Route path="/club-tryouts" element={<PageTransition><ClubTryouts /></PageTransition>} />
        <Route path="/newsletter" element={<PageTransition><Newsletter /></PageTransition>} />
        <Route path="/membership-checkout-2days-week" element={<PageTransition><MembershipCheckout2DaysWeek /></PageTransition>} />
        <Route path="/ebook" element={<PageTransition><Ebook /></PageTransition>} />
        <Route path="/consultation" element={<PageTransition><Consultation /></PageTransition>} />
        <Route path="/skills-training-booking" element={<PageTransition><SkillsTrainingBooking /></PageTransition>} />
        <Route path="/shooting-classes-booking" element={<PageTransition><ShootingClassesBooking /></PageTransition>} />
        <Route path="/performance-training-booking" element={<PageTransition><PerformanceTrainingBooking /></PageTransition>} />
        <Route path="/youth-league" element={<PageTransition><LeagueRegistration /></PageTransition>} />
        <Route path="/tc" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        <Route path="/join/:slug" element={<MembershipPackage />} />
        <Route path="/alumni/aniya-foy" element={<AniyaFoy />} />
        <Route path="/athletes" element={<PageTransition><Athletes /></PageTransition>} />
        <Route path="/athletes/:slug" element={<PageTransition><AthleteProfile /></PageTransition>} />
        <Route path="/coaches/:slug" element={<PageTransition><CoachDetail /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditionsPublic /></PageTransition>} />
        <Route path="/rental-terms" element={<PageTransition><RentalTerms /></PageTransition>} />
        <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/rental-request" element={<PageTransition><RentalRequest /></PageTransition>} />
        <Route path="/athletes/plan/:slug" element={<AthletePlan />} />
        <Route path="/private-one-on-one-training" element={<PageTransition><PrivateOneOnOneTraining /></PageTransition>} />
        <Route path="/semi-private-training" element={<PageTransition><SemiPrivateTraining /></PageTransition>} />
        <Route path="/AxisMinisBooking" element={<PageTransition><AxisMinisBooking /></PageTransition>} />
        <Route path="/rookie-academy" element={<RookieAcademy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    </Suspense>
  );
};

const Layout = () => {
  const location = useLocation();
  const hideChrome = location.pathname === "/tc" || location.pathname.startsWith("/join/") || location.pathname === "/alumni/aniya-foy" || location.pathname.startsWith("/athletes/plan/") || location.pathname === "/rookie-academy";
  return (
    <>
      <ScrollToTop />
      {!hideChrome && <Navbar />}
      <AnimatedRoutes />
      {!hideChrome && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
