import { publicHttp } from "@/utils/axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppointmentForm from "./AppointmentForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackagesAll } from "@/redux/reducers/PackagesSlice";
import PageLoading from "@/components/PageLoading";
import FetchError from "@/components/FetchError";

export default function MakeAppointment() {
  const [genders, setGenders] = useState([]);
  const [weekdays, setWeekdays] = useState([]);
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (packagesAllStatus === "idle") {
      dispatch(fetchPackagesAll());
    }
  }, [packagesAllStatus, dispatch]);

  useEffect(() => {
    fetchGenders();
    fetchWeekdays();
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

  return (
    <div className="container mx-auto px-6 md:px-0">
      <div className="mt-24 mb-0 md:mb-auto my-10">
        {/* Apply Framer Motion to header */}
        <motion.h1
          className="header-title text-3xl md:text-4xl lg:text-5xl text-center"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ ...motionVariants.transition, delay: 0.2 }}
        >
          <span className="italic">Make</span> Appointment
          <span className="mt-4 text-lg md:text-xl xl:text-2xl italic tracking-wide text-primary-200/70">
            You can pay with MMK or THB
          </span>
        </motion.h1>
      </div>
      <AppointmentForm
        genders={genders}
        weekdays={weekdays}
        packages={packagesAll}
      />
    </div>
  );
}
