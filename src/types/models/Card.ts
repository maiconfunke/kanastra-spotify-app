export interface Card {
  coverUrl: string;
  title: string;
  shape?: string;
  subtitle: string;
  onClick?: () => void;
};