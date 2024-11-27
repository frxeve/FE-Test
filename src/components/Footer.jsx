import React from "react";
import TiktokIcon from "../assets/images/tiktok.png";
import InstagramIcon from "../assets/images/ig.png";
import YoutubeIcon from "../assets/images/yt.png";
import FacebookIcon from "../assets/images/fb.png";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 pb-10 ">
      <div className="box bg-[#14274E] mx-auto px-10 py-8">
        <div className="flex gap-10 flex-col md:flex-row"> 
          <div className="program mr-10 space-y-4">
            <h4 className="font-semibold text-lg">Program</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Learning Path
                </a>
              </li>
            </ul>
          </div>
          {/* Corporate Section */}
          <div className="corporate mr-10 space-y-4">
            <h4 className="font-semibold text-lg">Corporate</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>
          {/* Tentang Section */}
          <div className="space-y-4 ">
            <h4 className="font-semibold text-lg">Tentang</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Perusahaan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b hover:border-[#6BFFBF] pb-1"
                >
                  Karir
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-white mt-10 pt-4 flex flex-col sm:flex-row justify-between">
          <p className="text-sm">© Aplus 2024. Hak Cipta Dilindungi.</p>

          <div className="flex flex-col items-start gap-[8px] mt-4 sm:mt-0">
            <p className="text-sm">Ikuti Kami</p>
            <div className="flex gap-[8px]">
              <a href="#" aria-label="TikTok" className="hover:text-gray-400">
                <img src={TiktokIcon} alt="TikTok" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">
                <img src={YoutubeIcon} alt="YouTube" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
