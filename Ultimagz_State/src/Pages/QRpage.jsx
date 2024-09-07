import React from "react";
import "./QRpage.css";
import bingkai from "../assets/QRpage/bingkai.png";
import awan from "../assets/QRpage/campaign_front_asset_clouds.png";
import ground from "../assets/QRpage/ground.png";
function QRpage() {
  return (
    <div className="background">
      <div className="qr">
        <img src={bingkai} alt="bingkai" />
      </div>
      <div className="awan">
        <img src={awan} alt="awan" />
      </div>
      <div className="ground">
        <img src={ground} alt="ground" />
      </div>
    </div>
  );
}

export default QRpage;
