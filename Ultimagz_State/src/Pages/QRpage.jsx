import React from "react";
import "./QRpage.css";
import bingkai from "./QRpage/campaign_front_asset_bingkai_n_kotak,png";

function QRpage() {
  return (
    <div className="background">
      <div className="atas">
        <img src={bingkai} alt="bingkai" />
              <p>Test</p>
      </div>
      <div className="bawah">
      <p>Test</p>
      </div>
    </div>
  );
}

export default QRpage;
