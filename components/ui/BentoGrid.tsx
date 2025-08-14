import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImGit } from "react-icons/im";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import CopyButton from "./CopyButton";
import CopyToClipboard from "./CopyButton";
import { clipboardConfig } from "@/lib/clipboard-config";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none relative overflow-hidden",
        className,
      )}
      style={{
        background: '#0f0c29',
        backgroundColor: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
      }}
    >
      <div className="absolute inset-0">
        {img && (
          <div className={cn(
            "w-full h-full",
            id === 5 && "flex justify-end items-end"
          )}>
            <img
              src={img}
              alt={title as string}
              className={cn(
                "object-cover group-hover/bento:scale-105 transition-all duration-300",
                id === 5 ? "sm:w-150 sm:h-150 md:w-100 md:h-100 lg:w-100 lg:h-100" : "h-full w-full"
              )}
            />
          </div>
        )}

        <div className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={title as string}
              className="object-cover object-center"/>
          )}
        </div>
        { id === 6 && (
          <BackgroundGradientAnimation/>
        )}

        { id === 2 && (
          <GridGlobe/>
        )}
      </div>

      <div className={cn(
        "relative z-10 transition duration-200 group-hover/bento:translate-x-2",
        titleClassName
      )}>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
      { id === 6 && (
        <div className="flex justify-center items-center">
          <CopyToClipboard text={clipboardConfig.text} />
        </div>
      )}
    </div>
  );
};
