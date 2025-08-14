import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "@/data";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="md:max-w-6xl mx-auto px-4 gap-4 sm:grid-cols-3 md:grid-cols-3 auto-rows-[18rem] md:auto-rows-[12rem] sm:auto-rows-[12rem] lg:auto-rows-[11rem]">
      {gridItems.map(({ id, title, description, img, imgClassName, titleClassName }) => {
        // Define spans per item based on the sketch layout
        let className = "";

        switch (id) {
          case 1:
            className = "sm:row-span-2 sm:col-span-2"; // tall and large block on left
            break;
          case 2:
            className = "sm:col-span-1"; // top-right block
            break;
          case 4:
            className = ""; // standard blocks
            break;
          case 5:
            className = "sm:row-span-2 sm:col-span-2"; // wide block
            break;
            className = ""; // standard blocks
            break;
        }

        return (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            className={className}
          />
        );
      })}
    </BentoGrid>
  );
}
