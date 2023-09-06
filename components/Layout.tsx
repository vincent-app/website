import Config from "./header/Config";

interface LayoutProps {
  children: React.ReactNode;
  story: any;
}

const Layout = ({ children, story }: LayoutProps) => (
  <div>
    <Config blok={story.content} />
    {children}
  </div>
);

export default Layout;
