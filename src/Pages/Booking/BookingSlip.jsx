import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchAppointment } from "@/redux/reducers/AppointmentSlice";
import { formatDate, number_format } from "@/utils/common";
import {
  Receipt,
  Calendar,
  Package,
  Download,
  User,
  ListTodo,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import html2canvas from "html2canvas";

const BookingSlip = () => {
  const { appointmentNo } = useParams();
  const dispatch = useDispatch();
  const { appointment, status } = useSelector((state) => state.appointment);
  const slipRef = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      getAppointment(appointmentNo);
    }
  });

  const getAppointment = (appointmentNo) => {
    dispatch(fetchAppointment(appointmentNo));
  };

  const downloadImage = () => {
    const input = slipRef.current;
    html2canvas(input, { backgroundColor: "#000" }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `booking-slip-${appointmentNo}.png`;
      link.click();
    });
  };

  return (
    <>
      <Card
        className="bg-black/20 backdrop-blur-md border-primary-500/20 text-primary-200 w-full max-w-lg mx-auto my-10 mt-24 px-6 md:px-0"
        ref={slipRef}
      >
        <CardHeader className="text-center border-b">
          <div className="flex justify-center gap-2">
            <Receipt className="size-8 text-primary" />
            <CardTitle className="text-2xl font-bold">Booking Slip</CardTitle>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>Thank you for your booking!</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Appointment Details */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5" />
              Appointment Details
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Appointment No:</div>
              <div className="font-medium">{appointment?.appointment_no}</div>
              <div className="text-gray-500">Appointment Date:</div>
              <div className="font-medium">
                {formatDate(appointment?.appointment_date, "DD-MM-YYYY")}
              </div>
            </div>
          </div>
          <Separator />
          {/* Customer Details */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <User className="h-5 w-5" />
              Customer Information
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Name:</div>
              <div className="font-medium">{appointment?.user?.name}</div>
              <div className="text-gray-500">Phone:</div>
              <div className="font-medium">{appointment?.user?.phone}</div>
              <div className="text-gray-500">Email:</div>
              <div className="font-medium">{appointment?.user?.email}</div>
            </div>
          </div>
          <Separator />
          {/* Package Details */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Package className="h-5 w-5" />
              Package Details
            </h3>
            <table className="w-full text-sm mb-4">
              <tbody>
                {appointment?.appointment_packages?.map((item, index) => (
                  <tr key={index}>
                    <td className="py-1">
                      {item.package ? item.package.name : "Unknown Package"}
                    </td>
                    <td className="text-right">
                      {number_format(item.price)} Ks
                    </td>
                    <td className="text-right">
                      {number_format(item.th_price)} ฿
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3} className="py-2">
                    <Separator />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="text-lg">
                  <td className="font-semibold">Total</td>
                  <td className="text-right font-bold text-primary-500">
                    {number_format(appointment?.total_price)} Ks
                  </td>
                  <td className="text-right font-bold text-primary-500">
                    {number_format(appointment?.th_total_price)} ฿
                  </td>
                </tr>
              </tfoot>
            </table>
            <p className="text-gray-500">
              မှတ်ချက်။ Booking Date အတွင်း admin ဘက်များမှ
              တစ်စုံတစ်ယောက်အကြောင်းပြန်ခြင်းမရှိပါက{" "}
              <a
                href="https://www.facebook.com/messages/t/472003349323395"
                target="_blank"
                className="underline underline-offset-2 text-primary-500"
              >
                Facebook Messenger
              </a>{" "}
              တွင် ဤ slip အားပြသ၍ မေးမြန်းနိုင်ပါသည်။
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mb-10 gap-4">
        <Link
          to="/user/bookings-list"
          className="astro-border-btn italic font-bold"
        >
          <ListTodo className="h-5 w-5" /> View Your Bookings
        </Link>
        <button className="astro-primary-btn" onClick={downloadImage}>
          <Download className="h-5 w-5" /> Download Image
        </button>
      </div>
    </>
  );
};

export default BookingSlip;
