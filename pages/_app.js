import "@/styles/globals.css";
import { NavBar } from "@/components/componentsindex";


 const App = ({ Component, pageProps })=>(
 <div className="">
    <NavBar/>
    <Component {...pageProps}/>
 </div>
    );

 export default App;

