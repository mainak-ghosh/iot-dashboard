import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

import {
  MapView,
  ChartView,
  QuickView,
  TitleBar,
} from "../components";

export default function Home({googleMapsApiKey}) {
  return (
    <div className="h-full pr-4 pl-4">
      <div className="sticky top-0 bg-gray-100 pt-1 pb-1">
        <TitleBar pagetitle="Home"/>
      </div>

      <div className="overflow-y-auto">
        <QuickView />

        <div>
            <h1 className="pt-2 pb-2 text-lg font-semibold">Data Visualization</h1>
            <hr></hr>
        </div>

        <div className="h-full grid lg:grid-cols-4 gap-2 lg:gap-3 mt-2 pt-4 pb-4">
          <div className="h-full lg:col-span-3">
            <ChartView />
          </div>
          <MapView googleMapsApiKey={googleMapsApiKey}/>    
          
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the environmental variables
  const googleMapsApiKey = process.env.GOOGLE_MAP_API_KEY;
  console.log("ssrendering api key:",googleMapsApiKey);
  if (!googleMapsApiKey) {
    return {
      notFound: true,
    }
  }
  return {
    props: {googleMapsApiKey}, // will be passed to the page component as props
  }
}
