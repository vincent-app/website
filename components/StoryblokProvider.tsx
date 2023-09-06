/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

type StoryblokProviderProps = {
  children: React.ReactNode;
};

/** Import your components */
import Page from "./Page";
import Hero from "./Hero";

const components = {
  page: Page,
  hero: Hero,
}

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: StoryblokProviderProps) {
  return children;
}