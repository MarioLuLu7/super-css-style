import { SuperCss } from './superCss';
export declare const css: (fn: (s: () => SuperCss) => SuperCss) => string;
declare type TkeyframesKey = 'to' | 'from' | (string & {});
declare type TkeyframesRecord = Partial<Record<TkeyframesKey, SuperCss>> & Record<string, SuperCss>;
export declare const keyframes: (fn: (s: () => SuperCss) => TkeyframesRecord) => string;
export declare const global: (fn: (s: () => SuperCss) => Record<string, SuperCss>) => void;
export declare const media: (v: string, fn: (s: () => SuperCss) => Record<string, SuperCss>) => void;
export default css;
