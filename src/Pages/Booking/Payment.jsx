import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAppointment } from "@/redux/reducers/AppointmentSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { number_format } from "@/utils/common";
import PaymentForm from "./PaymentForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Payment() {
  const { appointmentNo } = useParams();
  const dispatch = useDispatch();
  const { appointment, status } = useSelector((state) => state.appointment);

  useEffect(() => {
    if (status === "idle") {
      getAppointment(appointmentNo);
    }
  });

  const getAppointment = (appointmentNo) => {
    dispatch(fetchAppointment(appointmentNo));
  };

  return (
    <div className="container mx-auto mt-24 mb-20 px-6 md:px-0">
      <div className="my-10 text-center">
        <h1 className="header-title text-3xl md:text-4xl xl:text-5xl mb-4">
          Payment
        </h1>
        <h4 className="text-lg md:text-xl xl:text-2xl italic tracking-wide text-primary-200/70">
          You can pay with MMK or THB
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 py-6">
        <div className="w-full lg:w-[45%] xl:w-[35%]">
          <PaymentForm appointmentNo={appointmentNo} />
        </div>
        <div className="w-full lg:w-[55%] xl:w-[65%]">
          <h3 className="text-xl font-semibold mb-4">Your Packages</h3>
          <Card className="bg-black/20 backdrop-blur-md border-primary-500/20">
            <CardContent>
              <Table className="table-auto mt-5">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead className="text-right">Price (Ks)</TableHead>
                    <TableHead className="text-right">Price (฿)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointment?.appointment_packages?.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="md:w-[300px] lg:w-[400px]">
                        {item.package ? item.package.name : "Unknown Package"}
                      </TableCell>
                      <TableCell className="text-right">
                        {number_format(item.price)} Ks
                      </TableCell>
                      <TableCell className="text-right">
                        {number_format(item.th_price)} ฿
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="font-semibold uppercase text-right">
                      Total
                    </TableCell>
                    <TableCell className="font-semibold text-right">
                      {number_format(appointment?.total_price)} Ks
                    </TableCell>
                    <TableCell className="font-semibold text-right">
                      {number_format(appointment?.th_total_price)} ฿
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
