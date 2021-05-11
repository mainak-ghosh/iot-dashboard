import "../styles/globals.css";
//import 'tailwindcss/tailwind.css'
import { useEffect, useState, useReducer } from "react";
import { Sidebar, MapView, ChartView } from "../components";
import stationData from "./stationdata";

function MyApp({ Component, pageProps }) {

  const [stations, setStations] = useState([]);

  useEffect(() => {
    console.log("UF : station data : ", stationData);
    setStations(stationData);
    return () => {
      //cleanup
    };
  }, [stationData]);

  console.log("station data : ", stationData);
  return (
    <div className="h-screen w-full flex flex-row justify-center">
      <div className="h-screen w-full flex flex-row overflow-hidden max-w-screen4xl">
        <div>
          <Sidebar stations={stations}/>
        </div>

        <div className="flex-1 w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
