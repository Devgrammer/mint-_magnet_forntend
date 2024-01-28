import "@/styles/globals.css";
import { Footer, NavBar } from "@/components/componentsindex";


 const App = ({ Component, pageProps })=>(
    <main className="w-full min-w-[480px] min-h-screen overflow-hidden">
    <NavBar/>
    <Component {...pageProps}/>
    <Footer/>
 </main>
    );

 export default App;

