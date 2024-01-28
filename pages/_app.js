import "@/styles/globals.css";
import { Footer, HeroSection, NavBar } from "@/components/componentsindex";


const App = ({ Component, pageProps }) => (
   <main className="max-w-full min-w-[480px]  min-h-screen overflow-hidden">
      <NavBar />
      <div className="components-container max-w-[1200px] mx-auto  px-8">
         <Component { ...pageProps } />
      </div>
      <Footer />
   </main>
);

export default App;

