export interface WrapperProps {
  children: React.ReactNode;
  pages: number;
}

export interface TileContextvalue {
  pages: number;
  currentPage: number;
}

export interface Children {
  children: React.ReactNode;
}

export interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}
