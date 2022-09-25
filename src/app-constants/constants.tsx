import { AiOutlineEnter } from "react-icons/ai";
import { HiBackspace } from "react-icons/hi";

export const placeHolder = [];

export const letters = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
  { key: "e" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "i" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "m" },
  { key: "n" },
  { key: "o" },
  { key: "p" },
  { key: "q" },
  { key: "r" },
  { key: "s" },
  { key: "t" },
  { key: "u" },
  { key: "v" },
  { key: "w" },
  { key: "x" },
  { key: "y" },
  { key: "z" },
];
export const keys = {
  /** q w e r t y u i o p  */
  normal1: [
    { key: "q", displayValue: "q" },
    { key: "w", displayValue: "w" },
    { key: "e", displayValue: "e" },
    { key: "r", displayValue: "r" },
    { key: "t", displayValue: "t" },
    { key: "y", displayValue: "y" },
    { key: "u", displayValue: "u" },
    { key: "i", displayValue: "i" },
    { key: "o", displayValue: "o" },
    { key: "p", displayValue: "p" },
  ],
  /** a s d f g h j k l  */
  normal2: [
    { key: "a", displayValue: "a" },
    { key: "s", displayValue: "s" },
    { key: "d", displayValue: "d" },
    { key: "f", displayValue: "f" },
    { key: "g", displayValue: "g" },
    { key: "h", displayValue: "h" },
    { key: "j", displayValue: "j" },
    { key: "k", displayValue: "k" },
    { key: "l", displayValue: "l" },
  ],
  /** delete z x c v b n m enter */
  normal3WithButtons: [
    { key: "delete", displayValue: <HiBackspace id="delete" /> },
    { key: "z", displayValue: "z" },
    { key: "x", displayValue: "x" },
    { key: "c", displayValue: "c" },
    { key: "v", displayValue: "v" },
    { key: "b", displayValue: "b" },
    { key: "n", displayValue: "n" },
    { key: "m", displayValue: "m" },
    { key: "enter", displayValue: <AiOutlineEnter id="enter" /> },
  ],
  /** ä ö ü õ š ž */
  estonianLetters: [
    { key: "õ", displayValue: "õ" },
    { key: "ä", displayValue: "ä" },
    { key: "ö", displayValue: "ö" },
    { key: "ü", displayValue: "ü" },
    { key: "š", displayValue: "š" },
    { key: "ž", displayValue: "ž" },
  ],
};
