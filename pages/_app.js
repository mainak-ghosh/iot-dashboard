import '../styles/globals.css';
//import 'tailwindcss/tailwind.css'
import { Sidebar, MapView, ChartView } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen flex flex-row overflow-hidden">

      <div className="">
        <Sidebar/>
      </div>

      <div className="flex-1 w-full">
        <Component {...pageProps} />
      </div>
      
    </div>
  )
}

export default MyApp
