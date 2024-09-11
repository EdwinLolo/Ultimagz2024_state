import React from "react";
import "./QRpage.css";
import bingkai from "../assets/QRpage/bingkai.png";
import awan from "../assets/QRpage/campaign_front_asset_clouds.png";
import groundBlkg from "../assets/QRpage/campaign_front_asset_ground_blkg.png";
import groundDepan from "../assets/QRpage/campaign_front_asset_ground_depan.png";
import Tas from "../assets/QRpage/campaign_front_asset_tas_ransel.png";
import Book from "../assets/QRpage/campaign_front_asset_books.png"
function QRpage() {
  return (
    <div className="background">
      <div className="qr">
        <img src={bingkai} alt="bingkai" />
      </div>
      <div className="awan">
        <img src={awan} alt="awan" />
      </div>
      <div className="groundDepan">
        <img src={groundDepan} alt="ground" />
      </div>
      <div className="groundBlkg">
        <img src={groundBlkg} alt="ground" />
      </div>
      <div className="Tas">
        <img src={Tas} alt="ground" />
      </div>
      <div className="Book">
        <img src={Book} alt="ground" />
      </div>
    </div>
  );
}

export default QRpage;
