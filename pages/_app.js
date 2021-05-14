import "../styles/globals.css";
//import 'tailwindcss/tailwind.css'
import { useEffect, useState, useReducer } from "react";
import { Sidebar } from "../components";
import stationData from "../stationdata";
import simulatedData from "../iotDeviceSimulator"

function MyApp({ Component, pageProps }) {
  // Locations data stored in this state
  const [stations, setStations] = useState([]);

  // The selected location state of the dashboard
  const [selectedStation, setSelectedStation] = useState({
    selectedStationId: "",
    selectedStationName: "",
    selectedSubStationName: "",
    selectedDeviceId: "",
  });

  // Initially fetch station data and set the states.
  useEffect(() => {
    console.log("UF : station data : ", stationData);
    setStations(stationData);
    setSelectedStation({
      ...selectedStation,
      selectedStationId: stationData[0].stationId,
      selectedStationName: stationData[0].stationName,
      selectedDeviceId: stationData[0].subStations[0].deviceId,
      selectedSubStationName:stationData[0].subStations[0].subStationName
    });
  }, []);

  // Data from Iot device
  useEffect(() => {
    console.log("Data from simulator: ", simulatedData);
  }, [])

  return (
    <div className="h-screen w-full flex flex-row justify-center">
      <div className="h-screen w-full flex flex-row overflow-hidden max-w-screen4xl">
        <div>
          <Sidebar
            stations={stations}
          />
        </div>

        <div className="flex-1 w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
