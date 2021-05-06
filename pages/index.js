import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  MapView,
  ChartView,
  QuickView,
  TitleBar,
} from "../components";

export default function Home() {
  return (
    <div className="h-screen mr-4 ml-4 mt-2">
      <TitleBar pagetitle="Home" />
 
      <div className="overflow-y-auto">
        <QuickView />

        <div className="h-full mt-6 bg-red-200 flex flex-row space-x-6">
          <ChartView />
          <MapView />
        </div>
      </div>
    </div>
  );
}
