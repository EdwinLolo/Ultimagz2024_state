import React from "react";

// Importing images
import frame from "../assets/MainPage/campaignbackA4frame 50_.png";
import bgmain from "../assets/MainPage/website_asset_bg.png";
import cloud from "../assets/MainPage/website_asset_cloud.png";
import thirdlayer from "../assets/MainPage/website_asset_land_3rd_layer.png";
import frontlayer from "../assets/MainPage/website_asset_land_front_layer.png";
import frontlayer_road from "../assets/MainPage/website_asset_land_front_layer_w_road.png";
import midlayer_road from "../assets/MainPage/website_asset_land_mid_layer_w_road.png";
import midlayer from "../assets/MainPage/website_asset_land_mid_layer.png";
import purp_gradient from "../assets/MainPage/website_asset_purp_gradient.png";
import rabbit from "../assets/MainPage/website_asset_rabbit.png";
import turq_gradient from "../assets/MainPage/website_asset_turq_gradient.png";
import turtle from "../assets/MainPage/website_asset_turtle.png";
import umn from "../assets/MainPage/website_asset_umn.png";
import frame2 from "../assets/MainPage/Frame2.png";

// Importing css
import "./StyleMainPage.css";

function MainPage() {
  return (
    <div className="PembungkusMainPage">
      <div className="z-10 Judul">
        <h1 className="pt-6 font-sans text-3xl min-[360px]:pt-16 min-[360px]:text-4xl font-bold text-center text-white md:text-6xl lg:text-5xl md:pt-10 lg:pt-4">
          ULTIMAGZ
        </h1>
      </div>
      {/* <div className="bg_main">
        <img src={bgmain} alt="bgmain" />
      </div> */}
      <div className="z-0 awan">
        <img src={cloud} alt="cloud" />
      </div>
      <div className="frame2">
        <img src={frame2} alt="frame" />
      </div>

      <div className="flex z-50 flex-col font-sans py-44 min-[360px]:py-72 min-[400px]:py-64 md:py-40 min-[800px]:py-48 min-[1000px]:py-48 framing">
        {/* <img src={frame} alt="frame" /> */}
        <div className="break-words px-14 xl:px-72 lg:px-40 md:px-28 Wordingan">
          <h1 className="m-5 text-xl min-[360px]:text-2xl md:text-3xl font-bold text-center text-green-700 xl:text-5xl">
            REGISTRASI
          </h1>
          <p className="text-purple-900 text-sm min-[360px]:text-lg md:text-xl xl:text-lg xxl:text-xl">
            1. Periode pendaftaran dilakukan dari tanggal{" "}
            <span className="font-bold">26 s.d. 12 September 2024.</span> <br />
            2. Pendaftaran "Camping" dilakukan dengan mengikuti rangkaian
            regulasi yang meliputi registrasi online/OTS, mengunggah Twibbon,
            mengunggah Story Instagram, dan menulis kotak aspirasi. <br />
            3. Peserta mengunggah Twibbon di akun Instagram pribadi atau college
            dengan minimal 300 followers sebelum rangkaian selanjutnya.
            <br /> 4. Setelah mengunggah Twibbon, Peserta mengunggah Story
            Instagram dan menulis kotak aspirasi secara langsung di booth
            "Camping".
            <br /> 5. Peserta akan mendapatkan 1 SKKM minat dan bakat setelah
            mengikuti keseluruhan rangkaian "Camping" ULTIMAGZ.
          </p>
        </div>
        <div className="break-words px-14 xl:px-72 lg:px-40 md:px-28 Wordingan2 ">
          <h1 className="m-5 text-xl min-[360px]:text-2xl md:text-3xl font-bold text-center text-green-700 xl:text-5xl">
            KETENTUAN TWIBBON & BOOTH CAMPING
          </h1>
          <p className="text-purple-900 text-sm min-[360px]:text-lg md:text-xl xl:text-lg xxl:text-xl">
            1. Peserta wajib mengunggah foto diri sendiri dengan Twibbon pada
            akun Instagram melalui link berikut{" "}
            <a
              href="https://twb.nz/campingultimagz"
              target="_blank"
              className="z-50 font-bold"
            >
              https://twb.nz/campingultimagz
            </a>{" "}
            <br /> 2. Akun Instagram baik pribadi maupun collage yang digunakan
            oleh peserta tidak boleh private.
            <br /> 3. Peserta wajib follow dan tag akun @ultimagz.
            <br /> 4. Peserta wajib mencantumkan caption, hashtag, dan tag pada
            Twibbon yang tertera pada link di atas. <br />
            5.Setelah mengunggah Twibbon, peserta wajib melampirkan bukti dan
            mengisi Google Form melalui link berikut <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfE_glin9UXIAOfJHAmSUYM8UdDKyfYCdHEXsiWPUVaUfWnGQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 font-bold"
            >
              https://docs.google.com/forms/d/e/1FAIpQLSfE_glin9UXIAOfJHAmSUYM8UdDKyfYCdHEXsiWPUVaUfWnGQ/viewform
            </a>
            <br />
            6. Dilarang menghapus Twibbon sampai poin SKKM diturunkan.
            <br />
            7. Setelah mengunggah Twibbon di akun Instagram pribadi, peserta
            dapat menuju booth "Camping" di gedung Duntuk rangkaian selanjutnya.
            <br /> 8. Peserta diarahkan untuk melihat mini exhibition ULTIMAGZ
            dan mengunggah Story Instagram dengan mencantumkan @ultimagz
            #FromAspirationTolnspiration #CampusLivingWithUltimagz
            #ActionForChange
            <br /> 9. Rangkaian terakhir peserta menulis kotak aspirasi tentang
            kampus atau perkuliahan dengan mencantumkan nama dan jurusan atau
            anonim.
            <br /> 10. Setelah melakukan keseluruhan rangkaian, peserta dapat
            mengisi Google Form untuk mendapatkan SKKM.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
