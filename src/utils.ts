import { SuperCss } from './superCss';

export type TN = '' | undefined | null;
export type Tcss<T, P, F> = T | Tfn<T, P, F> | TN;
export type Tfn<T, P, F> = (d: { p: P; m: F }) => T;

export function base<T, P, F>(
  that: SuperCss,
  isImportant: boolean,
  value: Tcss<T, P, F>,
  key: string | string[],
  enums: P,
  iswebkit = false,
  ismoz = false,
  iso = false
) {
  if (value) {
    const im = isImportant ? ' !important' : '';
    let v = value;
    if (typeof value === 'function') {
      v = (value as Tfn<T, P, F>)({
        p: enums,
        m: (fns as unknown) as F,
      });
    }
    const data = v + im;
    if (Array.isArray(key)) {
      key.forEach((item) => {
        that.data.push(`${item}: ${data}`);
      });
    } else {
      that.data.push(`${key}: ${data}`);
    }
    if (iswebkit) {
      that.data.push(`-webkit-${key}: ${data}`);
    }
    if (ismoz) {
      that.data.push(`-moz-${key}: ${data}`);
    }
    if (iso) {
      that.data.push(`-o-${key}: ${data}`);
    }
  }
  return that;
}

// map
const cssMap: Record<string, string> = {};
const nameMap: Record<string, string> = {};

// append style dom in html
{
  const style = document.createElement('style');
  style.id = 'supercss';
  style.innerHTML = '';
  document?.head?.appendChild(style);
}

// supercss data to css in html and return className
export const end = (v: SuperCss, id?: string) => {
  const { data, andData } = v;
  if (!data.length) {
    return '';
  }
  let and = '';
  if (andData.length) {
    andData.forEach((item) => {
      and = getClassNameMap(item) || '';
    });
  }
  const d = data.join(';') + ';' + and;
  return addCssBackName({
    value: d,
    className: id,
    after: '.',
  });
};

// add css to html and return className
export const addCssBackName = (
  params: {
    value?: string;
    className?: string;
    after?: string;
    checkMap?: boolean;
  } = {
    checkMap: true,
  }
): string => {
  const { value, className, after, checkMap } = params;
  if (!value) {
    return '';
  }
  let _className = getCssMap(value);
  if (_className && checkMap) {
    return _className;
  } else {
    _className = className || (after || '') + 'css-' + parseInt(Math.random() * 100000 + '');
    setMap(_className, value);
    const content = ` ${_className}{${value}}`;
    appendCssToHtml(content);
    return _className;
  }
};

const setMap = (className: string, value: string) => {
  cssMap[value] = className;
  nameMap[className] = value;
};
const getCssMap = (value: string) => {
  return cssMap[value];
};
const getClassNameMap = (className: string) => {
  return nameMap[className];
};

const appendCssToHtml = (content: string) => {
  const styleDom = document.getElementById('supercss');
  if (styleDom) {
    styleDom.innerHTML = styleDom?.innerHTML + content;
  }
};

const addUnit = (v: string | number, unit: string) => v + (typeof v === 'string' ? unit : '');

export const fns = {
  rgb: (r: number, g: number, b: number) => `rgb(${r}, ${g}, ${b})`,
  rgba: (r: number, g: number, b: number, a: number) => `rgb(${r}, ${g}, ${b}, ${a})`,
  hsl: (h: number, s: string | number, l: string | number) => `hsl(${h}, ${addUnit(s, '%')}, ${addUnit(l, '%')})`,
  hsla: (h: number, s: string | number, l: string | number, a: number) =>
    `hsla(${h}, ${addUnit(s, '%')}, ${addUnit(l, '%')}, ${a})`,
  url: (url: string) => `url(${url})`,
  linearGradient: (v: string) => `linear-gradient(${v})`,
  radialGradient: (v: string) => `radial-gradient(${v})`,
  repeatingLinearGradient: (v: string) => `repeating-linear-gradient(${v})`,
  repeatingRadialGradient: (v: string) => `repeating-radial-gradient(${v})`,
  rect: (top: string, right: string, bottom: string, left: string) => `rect(${top}, ${right}, ${bottom}, ${left})`,
  blur: (v: string) => `blur(${v})`,
  brightness: (v: number | string) => `brightness(${addUnit(v, '%')})`,
  contrast: (v: number | string) => `contrast(${addUnit(v, '%')})`,
  dropShadow: (v: string) => `drop-shadow(${v})`,
  grayscale: (v: number | string) => `grayscale(${addUnit(v, '%')})`,
  hueRotate: (v: number | string) => `hue-rotate(${addUnit(v, 'deg')})`,
  invert: (v: number | string) => `invert(${addUnit(v, '%')})`,
  opacity: (v: number | string) => `opacity(${addUnit(v, '%')})`,
  saturate: (v: number | string) => `saturate(${addUnit(v, '%')})`,
  sepia: (v: number | string) => `sepia(${addUnit(v, '%')})`,
  matrix: (a: number, b: number, c: number, d: number, tx: number, ty: number) =>
    `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`,
  matrix3d: (
    a1: number,
    b1: number,
    c1: number,
    d1: number,
    a2: number,
    b2: number,
    c2: number,
    d2: number,
    a3: number,
    b3: number,
    c3: number,
    d3: number,
    a4: number,
    b4: number,
    c4: number,
    d4: number
  ) =>
    `matrix3d(${a1}, ${b1}, ${c1}, ${d1}, ${a2}, ${b2}, ${c2}, ${d2}, ${a3}, ${b3}, ${c3}, ${d3}, ${a4}, ${b4}, ${c4}, ${d4})`,
  translate: (x: string, y: string) => `translate(${x}, ${y})`,
  translate3d: (x: string, y: string, z: string) => `translate3d(${x}, ${y}, ${z})`,
  translateX: (x: string) => `translateX(${x})`,
  translateY: (y: string) => `translateX(${y})`,
  translateZ: (z: string) => `translateX(${z})`,
  scale: (x: number, y?: number) => `scale(${x}, ${y || x})`,
  scale3d: (x: number, y: number, z: number) => `scale3d(${x}, ${y}, ${z})`,
  scaleX: (v: number) => `scaleX(${v})`,
  scaleY: (v: number) => `scaleY(${v})`,
  scaleZ: (v: number) => `scaleZ(${v})`,
  rotate: (v: number | string) => `rotate(${addUnit(v, 'deg')})`,
  rotate3d: (x: number, y: number, z: number, a: number | string) => `rotate3d(${x}, ${y}, ${z}, ${addUnit(a, 'deg')})`,
  rotateX: (v: number | string) => `rotateX(${addUnit(v, 'deg')})`,
  rotateY: (v: number | string) => `rotateY(${addUnit(v, 'deg')})`,
  rotateZ: (v: number | string) => `rotateZ(${addUnit(v, 'deg')})`,
  skew: (xa: number | string, ya: number | string) => `skew(${addUnit(xa, 'deg')}, ${addUnit(ya, 'deg')})`,
  skewX: (v: number | string) => `skewX(${addUnit(v, 'deg')})`,
  skewY: (v: number | string) => `skewY(${addUnit(v, 'deg')})`,
  perspective: (v: string) => `perspective(${v})`,
};
