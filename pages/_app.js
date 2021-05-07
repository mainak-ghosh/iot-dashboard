import "../styles/globals.css";
//import 'tailwindcss/tailwind.css'
import { Sidebar, MapView, ChartView } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-full flex flex-row justify-center">
      <div className="h-screen w-full flex flex-row overflow-hidden max-w-screen4xl">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1 w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
