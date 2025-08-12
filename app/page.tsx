import BentoGridDemo from "@/components/ui/Grid";
import { Hero } from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center item-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-6xl w-full">
        <FloatingNav className="" navItems={[
          {name:'Home', link:'/'},
          {name:'About', link:'/about'}
        ]}/>
        <Hero/> 
        <BentoGridDemo />
      </div>
    </main>
  );
}
