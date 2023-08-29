
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
storyblokInit({
  accessToken: process.env.STORYBLOCK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  
});