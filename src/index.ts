import { end, addCssBackName } from './utils';
import { SuperCss, Tch } from './superCss';

const setChCss = (topName: string, v: Tch) => {
  for (let key in v) {
    const name = `${topName} ${key}`;
    end(v[key] || new SuperCss(), name);
    setChCss(name, v[key]?.chData || {});
  }
};

// css
export const css = (fn: (s: () => SuperCss) => SuperCss) => {
  const data = fn(() => new SuperCss());
  const name = end(data);
  setChCss(name, data.chData);
  return name.split('.')[1];
};

// keyframes
type TkeyframesKey = 'to' | 'from' | (string & {});
type TkeyframesRecord = Partial<Record<TkeyframesKey, SuperCss>> & Record<string, SuperCss>;
export const keyframes = (fn: (s: () => SuperCss) => TkeyframesRecord) => {
  const data = fn(() => new SuperCss());
  let text = '';
  for (let key in data) {
    text += ` ${key}{${data[key].data.join(';') + ';'}}`;
  }
  const name = addCssBackName({
    value: text,
    after: '@keyframes ',
  }).split('@keyframes ')[1];
  const jrarr = ['@-moz-keyframes', '@-webkit-keyframes', '@-o-keyframes'];
  jrarr.forEach((item) => {
    addCssBackName({
      value: text,
      className: `${item} ${name}`,
      checkMap: false,
    });
  });
  return name;
};

// global css
export const global = (fn: (s: () => SuperCss) => Record<string, SuperCss>) => {
  const data = fn(() => new SuperCss());
  setChCss(' ', data);
};

// media
const getMediaCss = (topName: string, v: Tch) => {
  let data = {} as Record<string, string>;
  for (let key in v) {
    const name = `${topName} ${key}`;
    data[name] = v[key].data.join(';') + ';';
    const d = getMediaCss(name, v[key]?.chData || {});
    data = { ...data, ...d };
  }
  return data;
};
export const media = (v: string, fn: (s: () => SuperCss) => Record<string, SuperCss>) => {
  const data = fn(() => new SuperCss());
  const cssData = getMediaCss(' ', data);
  let cssText = '';
  for (let key in cssData) {
    cssText += ` ${key}{${cssData[key]}}`;
  }
  addCssBackName({
    value: cssText,
    className: `@media ${v}`,
  });
};

export default css;
