import React from "react";

import Welcome from "./welcome";
import DashboardHeader from "./dashboardHeader";
import EarningModal from "./earningsModal";
import VideoModal from "./videoModal";
import RoxoPlay from "./roxoPlay";
import MetaMaskLoginData from "./metaMask";


const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      {/* <MetaMaskLoginData /> */}
      <Welcome />
      <RoxoPlay />
      <EarningModal />
      <VideoModal />
    </div>
  );
};

export default Dashboard;
