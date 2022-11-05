import { useRef, useContext, createContext } from "react";
import { Children, Props, TileContextvalue, WrapperProps } from "./interface";
import { ScrollContext } from "./scroll";

export const TileContext = createContext<TileContextvalue>({
  pages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({ pages, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let currentPage = 0;

  const { current: elContainer } = containerRef;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfh = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfh,
        Math.max(-screenH, scrollY - offsetTop) + halfh
      ) / clientHeight;
    currentPage = percentY * pages;
  }
  return (
    <TileContext.Provider value={{ pages, currentPage }}>
      <div
        ref={containerRef}
        className="relative bg-black text-white"
        style={{
          height: pages * 100 + "vh",
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<Children> = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent: React.FC<Children> = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { pages, currentPage } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const containerRef = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < pages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={containerRef}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
