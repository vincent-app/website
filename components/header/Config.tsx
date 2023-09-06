"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

interface ConfigProps {
  blok: any;
}

const Config = ({ blok }: ConfigProps) => {
  return (
    <div
      className="relative border-b-2 border-gray-100 bg-white"
      {...storyblokEditable(blok)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src={blok.header_logo.filename}
                alt={blok.header_logo.alt}
                fill
              />
            </Link>
          </div>
          {blok.header_menu.map((nestedBlok) => (
            <StoryblokComponent
              className=""
              blok={nestedBlok}
              key={nestedBlok._uid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Config;
