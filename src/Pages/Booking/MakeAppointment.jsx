import { publicHttp } from "@/utils/axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppointmentForm from "./AppointmentForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackagesAll } from "@/redux/reducers/PackagesSlice";
import PageLoading from "@/components/PageLoading";
import FetchError from "@/components/FetchError";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function MakeAppointment() {
  const [genders, setGenders] = useState([]);
  const [weekdays, setWeekdays] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const { packagesAll, packagesAllStatus, packagesAllError } = useSelector(
    (state) => state.packages
  );

  const fetchGenders = async () => {
    try {
      const response = await publicHttp.get("/api/genders-list");
      setGenders(response.data.data);
    } catch (err) {
      console.log("failed to fetch", err);
    }
  };

  const fetchWeekdays = async () => {
    try {
      const response = await publicHttp.get("/api/weekdays-list");
      setWeekdays(response.data.data);
    } catch (err) {
      console.log("failed to fetch", err);
    }
  };

  const goBack = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    dispatch(fetchPackagesAll());
  }, [dispatch]);

  useEffect(() => {
    fetchGenders();
    fetchWeekdays();

    // Get selected date from localStorage and convert to Date object
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      const dateObj = new Date(storedDate);
      // Check if it's a valid date
      if (!isNaN(dateObj.getTime())) {
        setSelectedDate(dateObj);
      } else {
        console.error("Invalid date stored in localStorage:", storedDate);
      }
    }
  }, []);

  if (packagesAllStatus === "loading" || packagesAllStatus === "loading") {
    return <PageLoading />;
  }

  if (packagesAllStatus === "failed") {
    return <FetchError error={packagesAllError} />;
  }

  const motionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tarot by Charm Appointment Booking",
    "description": "Book your tarot reading appointment with Tarot by Charm. Professional tarot readings, love & career insights, and spiritual guidance available online and in-person.",
    "provider": {
      "@type": "Organization",
      "name": "Tarot by Charm"
    },
    "serviceType": "Tarot Reading",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://tarotbycharm.com/appointment"
    }
  };

  return (
    <>
      <SEO 
        title="Book Tarot Reading Appointment | Tarot by Charm"
        description="Book your tarot reading appointment with Tarot by Charm. Professional tarot readings, love & career insights, and spiritual guidance. Pay with MMK or THB."
        keywords="tarot by charm appointment, tarot by charm booking, tarot by charm schedule, tarot by charm online booking, tarot by charm phone booking, tarot by charm video booking, tarot by charm instant booking, tarot by charm same day booking, tarot by charm next day booking, tarot by charm weekend booking, tarot by charm evening booking, tarot by charm morning booking, tarot by charm afternoon booking, tarot by charm urgent booking, tarot by charm emergency booking, tarot by charm priority booking, tarot by charm vip booking, tarot by charm premium booking, tarot by charm luxury booking, tarot by charm exclusive booking, tarot by charm private booking, tarot by charm confidential booking, tarot by charm discrete booking, tarot by charm anonymous booking, tarot by charm secure booking, tarot by charm safe booking, tarot by charm trusted booking, tarot by charm reliable booking, tarot by charm experienced booking, tarot by charm qualified booking, tarot by charm licensed booking, tarot by charm certified booking, tarot by charm professional booking, tarot by charm expert booking, tarot by charm master booking, tarot by charm senior booking, tarot by charm lead booking, tarot by charm head booking, tarot by charm chief booking, tarot by charm principal booking, tarot by charm director booking, tarot by charm manager booking, tarot by charm supervisor booking, tarot by charm coordinator booking, tarot by charm specialist booking, tarot by charm consultant booking, tarot by charm advisor booking, tarot by charm counselor booking, tarot by charm therapist booking, tarot by charm healer booking, tarot by charm medium booking, tarot by charm clairvoyant booking, tarot by charm intuitive booking, tarot by charm gifted booking, tarot by charm authentic booking, tarot by charm genuine booking, tarot by charm trusted booking, tarot by charm reliable booking, tarot by charm experienced booking, tarot by charm qualified booking, tarot by charm licensed booking, tarot by charm certified reader booking, tarot by charm professional reader booking, tarot by charm expert reader booking, tarot by charm master reader booking, tarot by charm senior reader booking, tarot by charm lead reader booking, tarot by charm head reader booking, tarot by charm chief reader booking, tarot by charm principal reader booking, tarot by charm director reader booking, tarot by charm manager reader booking, tarot by charm supervisor reader booking, tarot by charm coordinator reader booking, tarot by charm specialist reader booking, tarot by charm consultant reader booking, tarot by charm advisor reader booking, tarot by charm counselor reader booking, tarot by charm therapist reader booking, tarot by charm healer reader booking, tarot by charm medium reader booking, tarot by charm clairvoyant reader booking, tarot by charm intuitive reader booking, tarot by charm gifted reader booking, tarot by charm authentic reader booking, tarot by charm genuine reader booking, tarot by charm trusted reader booking, tarot by charm reliable reader booking, tarot by charm experienced reader booking, tarot by charm qualified reader booking, tarot by charm licensed reader booking, tarot by charm certified tarot reader booking, tarot by charm professional tarot reader booking, tarot by charm expert tarot reader booking, tarot by charm master tarot reader booking, tarot by charm senior tarot reader booking, tarot by charm lead tarot reader booking, tarot by charm head tarot reader booking, tarot by charm chief tarot reader booking, tarot by charm principal tarot reader booking, tarot by charm director tarot reader booking, tarot by charm manager tarot reader booking, tarot by charm supervisor tarot reader booking, tarot by charm coordinator tarot reader booking, tarot by charm specialist tarot reader booking, tarot by charm consultant tarot reader booking, tarot by charm advisor tarot reader booking, tarot by charm counselor tarot reader booking, tarot by charm therapist tarot reader booking, tarot by charm healer tarot reader booking, tarot by charm medium tarot reader booking, tarot by charm clairvoyant tarot reader booking, tarot by charm intuitive tarot reader booking, tarot by charm gifted tarot reader booking, tarot by charm authentic tarot reader booking, tarot by charm genuine tarot reader booking, tarot by charm trusted tarot reader booking, tarot by charm reliable tarot reader booking, tarot by charm experienced tarot reader booking, tarot by charm qualified tarot reader booking, tarot by charm licensed tarot reader booking, tarot by charm certified psychic reader booking, tarot by charm professional psychic reader booking, tarot by charm expert psychic reader booking, tarot by charm master psychic reader booking, tarot by charm senior psychic reader booking, tarot by charm lead psychic reader booking, tarot by charm head psychic reader booking, tarot by charm chief psychic reader booking, tarot by charm principal psychic reader booking, tarot by charm director psychic reader booking, tarot by charm manager psychic reader booking, tarot by charm supervisor psychic reader booking, tarot by charm coordinator psychic reader booking, tarot by charm specialist psychic reader booking, tarot by charm consultant psychic reader booking, tarot by charm advisor psychic reader booking, tarot by charm counselor psychic reader booking, tarot by charm therapist psychic reader booking, tarot by charm healer psychic reader booking, tarot by charm medium psychic reader booking, tarot by charm clairvoyant psychic reader booking, tarot by charm intuitive psychic reader booking, tarot by charm gifted psychic reader booking, tarot by charm authentic psychic reader booking, tarot by charm genuine psychic reader booking, tarot by charm trusted psychic reader booking, tarot by charm reliable psychic reader booking, tarot by charm experienced psychic reader booking, tarot by charm qualified psychic reader booking, tarot by charm licensed psychic reader booking, tarot by charm certified spiritual reader booking, tarot by charm professional spiritual reader booking, tarot by charm expert spiritual reader booking, tarot by charm master spiritual reader booking, tarot by charm senior spiritual reader booking, tarot by charm lead spiritual reader booking, tarot by charm head spiritual reader booking, tarot by charm chief spiritual reader booking, tarot by charm principal spiritual reader booking, tarot by charm director spiritual reader booking, tarot by charm manager spiritual reader booking, tarot by charm supervisor spiritual reader booking, tarot by charm coordinator spiritual reader booking, tarot by charm specialist spiritual reader booking, tarot by charm consultant spiritual reader booking, tarot by charm advisor spiritual reader booking, tarot by charm counselor spiritual reader booking, tarot by charm therapist spiritual reader booking, tarot by charm healer spiritual reader booking, tarot by charm medium spiritual reader booking, tarot by charm clairvoyant spiritual reader booking, tarot by charm intuitive spiritual reader booking, tarot by charm gifted spiritual reader booking, tarot by charm authentic spiritual reader booking, tarot by charm genuine spiritual reader booking, tarot by charm trusted spiritual reader booking, tarot by charm reliable spiritual reader booking, tarot by charm experienced spiritual reader booking, tarot by charm qualified spiritual reader booking, tarot by charm licensed spiritual reader booking, tarot appointment, tarot booking, tarot schedule, tarot online booking, tarot phone booking, tarot video booking, tarot instant booking, tarot same day booking, tarot next day booking, tarot weekend booking, tarot evening booking, tarot morning booking, tarot afternoon booking, tarot urgent booking, tarot emergency booking, tarot priority booking, tarot vip booking, tarot premium booking, tarot luxury booking, tarot exclusive booking, tarot private booking, tarot confidential booking, tarot discrete booking, tarot anonymous booking, tarot secure booking, tarot safe booking, tarot trusted booking, tarot reliable booking, tarot experienced booking, tarot qualified booking, tarot licensed booking, tarot certified booking, tarot professional booking, tarot expert booking, tarot master booking, tarot senior booking, tarot lead booking, tarot head booking, tarot chief booking, tarot principal booking, tarot director booking, tarot manager booking, tarot supervisor booking, tarot coordinator booking, tarot specialist booking, tarot consultant booking, tarot advisor booking, tarot counselor booking, tarot therapist booking, tarot healer booking, tarot medium booking, tarot clairvoyant booking, tarot intuitive booking, tarot gifted booking, tarot authentic booking, tarot genuine booking, tarot trusted booking, tarot reliable booking, tarot experienced booking, tarot qualified booking, tarot licensed booking, tarot certified reader booking, tarot professional reader booking, tarot expert reader booking, tarot master reader booking, tarot senior reader booking, tarot lead reader booking, tarot head reader booking, tarot chief reader booking, tarot principal reader booking, tarot director reader booking, tarot manager reader booking, tarot supervisor reader booking, tarot coordinator reader booking, tarot specialist reader booking, tarot consultant reader booking, tarot advisor reader booking, tarot counselor reader booking, tarot therapist reader booking, tarot healer reader booking, tarot medium reader booking, tarot clairvoyant reader booking, tarot intuitive reader booking, tarot gifted reader booking, tarot authentic reader booking, tarot genuine reader booking, tarot trusted reader booking, tarot reliable reader booking, tarot experienced reader booking, tarot qualified reader booking, tarot licensed reader booking, tarot certified tarot reader booking, tarot professional tarot reader booking, tarot expert tarot reader booking, tarot master tarot reader booking, tarot senior tarot reader booking, tarot lead tarot reader booking, tarot head tarot reader booking, tarot chief tarot reader booking, tarot principal tarot reader booking, tarot director tarot reader booking, tarot manager tarot reader booking, tarot supervisor tarot reader booking, tarot coordinator tarot reader booking, tarot specialist tarot reader booking, tarot consultant tarot reader booking, tarot advisor tarot reader booking, tarot counselor tarot reader booking, tarot therapist tarot reader booking, tarot healer tarot reader booking, tarot medium tarot reader booking, tarot clairvoyant tarot reader booking, tarot intuitive tarot reader booking, tarot gifted tarot reader booking, tarot authentic tarot reader booking, tarot genuine tarot reader booking, tarot trusted tarot reader booking, tarot reliable tarot reader booking, tarot experienced tarot reader booking, tarot qualified tarot reader booking, tarot licensed tarot reader booking, tarot certified psychic reader booking, tarot professional psychic reader booking, tarot expert psychic reader booking, tarot master psychic reader booking, tarot senior psychic reader booking, tarot lead psychic reader booking, tarot head psychic reader booking, tarot chief psychic reader booking, tarot principal psychic reader booking, tarot director psychic reader booking, tarot manager psychic reader booking, tarot supervisor psychic reader booking, tarot coordinator psychic reader booking, tarot specialist psychic reader booking, tarot consultant psychic reader booking, tarot advisor psychic reader booking, tarot counselor psychic reader booking, tarot therapist psychic reader booking, tarot healer psychic reader booking, tarot medium psychic reader booking, tarot clairvoyant psychic reader booking, tarot intuitive psychic reader booking, tarot gifted psychic reader booking, tarot authentic psychic reader booking, tarot genuine psychic reader booking, tarot trusted psychic reader booking, tarot reliable psychic reader booking, tarot experienced psychic reader booking, tarot qualified psychic reader booking, tarot licensed psychic reader booking, tarot certified spiritual reader booking, tarot professional spiritual reader booking, tarot expert spiritual reader booking, tarot master spiritual reader booking, tarot senior spiritual reader booking, tarot lead spiritual reader booking, tarot head spiritual reader booking, tarot chief spiritual reader booking, tarot principal spiritual reader booking, tarot director spiritual reader booking, tarot manager spiritual reader booking, tarot supervisor spiritual reader booking, tarot coordinator spiritual reader booking, tarot specialist spiritual reader booking, tarot consultant spiritual reader booking, tarot advisor spiritual reader booking, tarot counselor spiritual reader booking, tarot therapist spiritual reader booking, tarot healer spiritual reader booking, tarot medium spiritual reader booking, tarot clairvoyant spiritual reader booking, tarot intuitive spiritual reader booking, tarot gifted spiritual reader booking, tarot authentic spiritual reader booking, tarot genuine spiritual reader booking, tarot trusted spiritual reader booking, tarot reliable spiritual reader booking, tarot experienced spiritual reader booking, tarot qualified spiritual reader booking, tarot licensed spiritual reader booking, book tarot reading, book tarot appointment, book tarot session, book tarot consultation, book tarot consultation online, book tarot consultation phone, book tarot consultation video, book tarot consultation instant, book tarot consultation same day, book tarot consultation next day, book tarot consultation weekend, book tarot consultation evening, book tarot consultation morning, book tarot consultation afternoon, book tarot consultation urgent, book tarot consultation emergency, book tarot consultation priority, book tarot consultation vip, book tarot consultation premium, book tarot consultation luxury, book tarot consultation exclusive, book tarot consultation private, book tarot consultation confidential, book tarot consultation discrete, book tarot consultation anonymous, book tarot consultation secure, book tarot consultation safe, book tarot consultation trusted, book tarot consultation reliable, book tarot consultation experienced, book tarot consultation qualified, book tarot consultation licensed, book tarot consultation certified, book tarot consultation professional, book tarot consultation expert, book tarot consultation master, book tarot consultation senior, book tarot consultation lead, book tarot consultation head, book tarot consultation chief, book tarot consultation principal, book tarot consultation director, book tarot consultation manager, book tarot consultation supervisor, book tarot consultation coordinator, book tarot consultation specialist, book tarot consultation consultant, book tarot consultation advisor, book tarot consultation counselor, book tarot consultation therapist, book tarot consultation healer, book tarot consultation medium, book tarot consultation clairvoyant, book tarot consultation intuitive, book tarot consultation gifted, book tarot consultation authentic, book tarot consultation genuine, book tarot consultation trusted, book tarot consultation reliable, book tarot consultation experienced, book tarot consultation qualified, book tarot consultation licensed, book tarot consultation certified reader, book tarot consultation professional reader, book tarot consultation expert reader, book tarot consultation master reader, book tarot consultation senior reader, book tarot consultation lead reader, book tarot consultation head reader, book tarot consultation chief reader, book tarot consultation principal reader, book tarot consultation director reader, book tarot consultation manager reader, book tarot consultation supervisor reader, book tarot consultation coordinator reader, book tarot consultation specialist reader, book tarot consultation consultant reader, book tarot consultation advisor reader, book tarot consultation counselor reader, book tarot consultation therapist reader, book tarot consultation healer reader, book tarot consultation medium reader, book tarot consultation clairvoyant reader, book tarot consultation intuitive reader, book tarot consultation gifted reader, book tarot consultation authentic reader, book tarot consultation genuine reader, book tarot consultation trusted reader, book tarot consultation reliable reader, book tarot consultation experienced reader, book tarot consultation qualified reader, book tarot consultation licensed reader, book tarot consultation certified tarot reader, book tarot consultation professional tarot reader, book tarot consultation expert tarot reader, book tarot consultation master tarot reader, book tarot consultation senior tarot reader, book tarot consultation lead tarot reader, book tarot consultation head tarot reader, book tarot consultation chief tarot reader, book tarot consultation principal tarot reader, book tarot consultation director tarot reader, book tarot consultation manager tarot reader, book tarot consultation supervisor tarot reader, book tarot consultation coordinator tarot reader, book tarot consultation specialist tarot reader, book tarot consultation consultant tarot reader, book tarot consultation advisor tarot reader, book tarot consultation counselor tarot reader, book tarot consultation therapist tarot reader, book tarot consultation healer tarot reader, book tarot consultation medium tarot reader, book tarot consultation clairvoyant tarot reader, book tarot consultation intuitive tarot reader, book tarot consultation gifted tarot reader, book tarot consultation authentic tarot reader, book tarot consultation genuine tarot reader, book tarot consultation trusted tarot reader, book tarot consultation reliable tarot reader, book tarot consultation experienced tarot reader, book tarot consultation qualified tarot reader, book tarot consultation licensed tarot reader, book tarot consultation certified psychic reader, book tarot consultation professional psychic reader, book tarot consultation expert psychic reader, book tarot consultation master psychic reader, book tarot consultation senior psychic reader, book tarot consultation lead psychic reader, book tarot consultation head psychic reader, book tarot consultation chief psychic reader, book tarot consultation principal psychic reader, book tarot consultation director psychic reader, book tarot consultation manager psychic reader, book tarot consultation supervisor psychic reader, book tarot consultation coordinator psychic reader, book tarot consultation specialist psychic reader, book tarot consultation consultant psychic reader, book tarot consultation advisor psychic reader, book tarot consultation counselor psychic reader, book tarot consultation therapist psychic reader, book tarot consultation healer psychic reader, book tarot consultation medium psychic reader, book tarot consultation clairvoyant psychic reader, book tarot consultation intuitive psychic reader, book tarot consultation gifted psychic reader, book tarot consultation authentic psychic reader, book tarot consultation genuine psychic reader, book tarot consultation trusted psychic reader, book tarot consultation reliable psychic reader, book tarot consultation experienced psychic reader, book tarot consultation qualified psychic reader, book tarot consultation licensed psychic reader, book tarot consultation certified spiritual reader, book tarot consultation professional spiritual reader, book tarot consultation expert spiritual reader, book tarot consultation master spiritual reader, book tarot consultation senior spiritual reader, book tarot consultation lead spiritual reader, book tarot consultation head spiritual reader, book tarot consultation chief spiritual reader, book tarot consultation principal spiritual reader, book tarot consultation director spiritual reader, book tarot consultation manager spiritual reader, book tarot consultation supervisor spiritual reader, book tarot consultation coordinator spiritual reader, book tarot consultation specialist spiritual reader, book tarot consultation consultant spiritual reader, book tarot consultation advisor spiritual reader, book tarot consultation counselor spiritual reader, book tarot consultation therapist spiritual reader, book tarot consultation healer spiritual reader, book tarot consultation medium spiritual reader, book tarot consultation clairvoyant spiritual reader, book tarot consultation intuitive spiritual reader, book tarot consultation gifted spiritual reader, book tarot consultation authentic spiritual reader, book tarot consultation genuine spiritual reader, book tarot consultation trusted spiritual reader, book tarot consultation reliable spiritual reader, book tarot consultation experienced spiritual reader, book tarot consultation qualified spiritual reader, book tarot consultation licensed spiritual reader"
        url="/appointment"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-6 md:px-0">
      <div className="mt-24 mb-0 md:mb-auto my-10 relative">
        <button
          className="astro-border-btn absolute left-0 top-24 ss:top-5"
          onClick={() => goBack()}
        >
          <ArrowLeft size={16} /> Back
        </button>
        {/* Apply Framer Motion to header */}
        <motion.h1
          className="flex flex-col text-3xl md:text-4xl lg:text-5xl text-center"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ ...motionVariants.transition, delay: 0.2 }}
        >
          <span>
            <span className="italic">Make</span> Appointment
          </span>
          <span className="mt-4 text-lg md:text-xl xl:text-2xl italic tracking-wide text-primary-200/70">
            You can pay with MMK or THB
          </span>
        </motion.h1>
      </div>
      <AppointmentForm
        genders={genders}
        weekdays={weekdays}
        packages={packagesAll}
        selectedDate={selectedDate}
      />
    </div>
    </>
  );
}
