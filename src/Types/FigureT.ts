// Import types
import { CatT } from "./CatT";
// Import constants
import { left, right } from "../Constants/index";

export type FigureT = {
  isScreenWidthLessOrEqual?: boolean;
  index?: number;
  page?: number;
  rotateDirection?: typeof left | typeof right;
  cat: CatT;
  handleVoteCat?: () => void;
};

export type FigureCatST = {
  order?: number;
  index?: number;
  page?: number;
  rotateDirection?: string;
};

export type ImageCatST = { width: string; height: string };
