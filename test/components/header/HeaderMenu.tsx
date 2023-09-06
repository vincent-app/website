import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface HeaderMenuProps {
  blok: any;
}

const HeaderMenu = ({ blok }: HeaderMenuProps) => (
  <div
    className="hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0"
    {...storyblokEditable({ blok })}
  >
    {blok.links.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default HeaderMenu;
