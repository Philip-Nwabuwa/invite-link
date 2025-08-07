import { Calendar, MapPin, Star, Ticket } from "lucide-react";
import Image from "next/image";

import RoboticHand from "@/assets/images/robot-hand.jpg";
import Logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#7c3bed] text-white">
      <nav className="bg-white sticky top-0 z-50 items-center justify-between px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>
      </nav>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-6 py-8">
        <div className="bg-[#ff8f2e] w-fit rounded-full px-6 py-2 text-center mb-4">
          <span className="text-white font-extrabold text-lg flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-white" /> CHAMPIONS CONNECT{" "}
            <Star className="w-4 h-4 fill-white" />
          </span>
        </div>

        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#fff] via-[#ff8f2e] to-[#ff8f2e] text-transparent bg-clip-text">
            FROM AMBITION TO ACTION
          </h1>
          <p className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
            LEVEL UP • BREAK IN • BUILD WEALTH
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 md:gap-8">
          <div className="space-y-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl h-[150px] md:h-[250px] p-4 flex items-center justify-center border border-white/30">
              <Image
                src={RoboticHand}
                alt="Robotic Hand"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-black">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#7c3bed1a] size-10 rounded-full flex items-center justify-center">
                    <Calendar className="size-4 text-[#7c3bed]" />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">SAT 4TH OCT. 2025</p>
                    <p className="text-[#7c3bed]">12:00 PM BST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#7c3bed1a] size-10 rounded-full flex items-center justify-center">
                    <MapPin className="size-4 text-[#7c3bed]" />
                  </div>

                  <div>
                    <p className="font-medium text-lg">
                      Holiday Inn Birmingham M6
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      J7 Chapel Lane, Great Barr, Birmingham B43 7BG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-black relative hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#fb923c] to-[#a855f7] text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-xs font-bold">
                EARLY BIRD
                <div className="text-xs">Ends 15th Sept</div>
              </div>
              <div className="mb-3 md:mb-4">
                <h3 className="text-[#9a3cdd] text-2xl font-bold mb-2 flex items-center gap-2">
                  <Star className="size-5 fill-[#9a3cdd]" /> PREMIUM
                </h3>
                <p className="text-[#9a3cdd]">
                  Full Event Access + Premium Seats
                </p>
              </div>

              <div className="mb-3 md:mb-6">
                <div className="flex flex-col items-baseline space-x-2 mb-2">
                  <span className="text-gray-500 line-through text-lg">
                    £53.33
                  </span>
                  <span className="text-3xl font-bold text-[#9a3cdd]">
                    £39.99
                  </span>
                </div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  <span className="mr-1">🌿</span>
                  SAVE £13.34
                </div>
              </div>

              <button className="w-full bg-[#9a3cdd] text-white py-3 px-6 rounded-2xl font-bold text-lg hover:bg-[#9a3cdd]/80 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Ticket className="size-5" /> BOOK PREMIUM
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-black relative hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#fb923c] to-[#a855f7] text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-xs font-bold">
                EARLY BIRD
                <div className="text-xs">Ends 15th Sept</div>
              </div>

              <div className="mb-3 md:mb-4">
                <h3 className="text-[#6d57db] text-2xl font-bold mb-2 flex items-center gap-2">
                  <Star className="size-5 fill-[#6d57db]" /> GENERAL
                </h3>
                <p className="text-[#6d57db]">Full Event Access</p>
              </div>

              <div className="mb-3 md:mb-6">
                <div className="flex flex-col items-baseline space-x-2 mb-2">
                  <span className="text-gray-500 line-through text-lg">
                    £33.33
                  </span>
                  <span className="text-3xl font-bold text-[#6d57db]">
                    £24.99
                  </span>
                </div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  <span className="mr-1">🌿</span>
                  SAVE £8.34
                </div>
              </div>

              <button className="w-full bg-[#6d57db] text-white py-3 px-6 rounded-2xl font-bold text-lg hover:bg-[#6d57db]/80 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Ticket className="size-5" /> BOOK GENERAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
