import ScrollRevealComponent from "./ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { zodiacImg } from "@/assets";

export default function ZCard({ zodiac }) {
  return (
    <>
      <Dialog className="z-30">
        <DialogTrigger>
          <ScrollRevealComponent>
            <Card className="py-2 xl:py-4 border-gray-700 hover:border-gray-500 z-30 bg-transparent">
              <CardHeader>
                <CardTitle>
                  <img
                    src={zodiac.image ? zodiac.image : zodiacImg}
                    className="h-32 xl:h-48 xl:w-48 object-contain w-auto mx-auto"
                    alt=""
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h1 className="text-4xl xl:text-5xl italic mb-4">
                    {zodiac.name}
                  </h1>
                  <p className="text-gray-500">{zodiac.period}</p>
                </div>
              </CardContent>
            </Card>
          </ScrollRevealComponent>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="mb-2 text-lg">
              {zodiac.name}
              <span className="text-sm ml-1.5 text-gray-300">
                ( {zodiac.period} )
              </span>
            </DialogTitle>
            <DialogDescription>{zodiac.desc}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
