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
    <div className="h-screen pr-4 pl-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pt-1 pb-1">
        <TitleBar pagetitle="Home"/>
      </div>

      <div className="overflow-y-auto">
        <QuickView />

        <div>
            <h1 className="pt-2 pb-2 text-lg font-semibold">Data Visualization</h1>
            <hr></hr>
        </div>

        <div className="h-full grid lg:grid-cols-3 gap-3 mt-2 pt-4 pb-4">
          <div className="h-full lg:col-span-2">
            <ChartView />
          </div>
          <MapView />    
          
        </div>
      </div>
    </div>
  );
}
