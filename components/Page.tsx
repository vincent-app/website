"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

interface PageProps {
  blok: any;
}

const Page = ({ blok }: PageProps) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="page">
    {blok.body
      ? blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      : null}
  </div>
);

export default Page;
