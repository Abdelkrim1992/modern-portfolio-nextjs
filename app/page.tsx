import Image from "next/image";
import { Hero } from "../components/Hero";
import { GridBackgroundDemo} from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center item-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero/> 
      </div>
    </main>
  );
}
