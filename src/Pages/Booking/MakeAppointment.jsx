import { publicHttp } from "@/utils/axios";

import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
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
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal(".header-title", { delay: 100 });

    fetchGenders();
    fetchWeekdays();
  }, []);

  if (packagesAllStatus === "loading" || packagesAllStatus === "loading") {
    return <PageLoading />;
  }

  if (packagesAllStatus === "failed") {
    return <FetchError error={packagesAllError} />;
  }

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h1 className="header-title text-3xl md:text-4xl xl:text-5xl text-center">
          <span className="text-4xl italic">Make</span> Appointment
        </h1>
      </div>
      <AppointmentForm
        genders={genders}
        weekdays={weekdays}
        packages={packagesAll}
      />
    </div>
  );
}
