import { Property } from 'csstype';
import * as Enums from './cssEnums';
import { base, fns, Tcss } from './utils';

type TcolorFuns = { rgb: typeof fns.rgb; rgba: typeof fns.rgba; hsl: typeof fns.hsl; hsla: typeof fns.hsla };
type TimageFuns = {
  url: typeof fns.url;
  linearGradient: typeof fns.linearGradient;
  radialGradient: typeof fns.radialGradient;
  repeatingLinearGradient: typeof fns.repeatingLinearGradient;
  repeatingRadialGradient: typeof fns.repeatingRadialGradient;
};
type TfilterFuns = {
  url: typeof fns.url;
  blur: typeof fns.blur;
  brightness: typeof fns.brightness;
  contrast: typeof fns.contrast;
  dropShadow: typeof fns.dropShadow;
  grayscale: typeof fns.grayscale;
  hueRotate: typeof fns.hueRotate;
  invert: typeof fns.invert;
  opacity: typeof fns.opacity;
  saturate: typeof fns.saturate;
  sepia: typeof fns.sepia;
};
type TtransformFuns = {
  matrix: typeof fns.matrix;
  matrix3d: typeof fns.matrix3d;
  translate: typeof fns.translate;
  translate3d: typeof fns.translate3d;
  translateX: typeof fns.translateX;
  translateY: typeof fns.translateY;
  translateZ: typeof fns.translateZ;
  scale: typeof fns.scale;
  scale3d: typeof fns.scale3d;
  scaleX: typeof fns.scaleX;
  scaleY: typeof fns.scaleY;
  scaleZ: typeof fns.scaleZ;
  rotate: typeof fns.rotate;
  rotate3d: typeof fns.rotate3d;
  rotateX: typeof fns.rotateX;
  rotateY: typeof fns.rotateY;
  rotateZ: typeof fns.rotateZ;
  skew: typeof fns.skew;
  skewX: typeof fns.skewX;
  skewY: typeof fns.skewY;
  perspective: typeof fns.perspective;
};

type Tanimation = {
  name?: Parameters<typeof SuperCss._s.animationName>[0];
  duration?: Parameters<typeof SuperCss._s.animationDuration>[0];
  timingFunction?: Parameters<typeof SuperCss._s.animationTimingFunction>[0];
  delay?: Parameters<typeof SuperCss._s.animationDelay>[0];
  iterationCount?: Parameters<typeof SuperCss._s.animationIterationCount>[0];
  direction?: Parameters<typeof SuperCss._s.animationDirection>[0];
  fillMode?: Parameters<typeof SuperCss._s.animationFillMode>[0];
  playState?: Parameters<typeof SuperCss._s.animationPlayState>[0];
};
type Tbackground = {
  color?: Parameters<typeof SuperCss._s.backgroundColor>[0];
  position?: Parameters<typeof SuperCss._s.backgroundPosition>[0];
  size?: Parameters<typeof SuperCss._s.backgroundSize>[0];
  repeat?: Parameters<typeof SuperCss._s.backgroundRepeat>[0];
  origin?: Parameters<typeof SuperCss._s.backgroundOrigin>[0];
  clip?: Parameters<typeof SuperCss._s.backgroundClip>[0];
  attachment?: Parameters<typeof SuperCss._s.backgroundAttachment>[0];
  image?: Parameters<typeof SuperCss._s.backgroundImage>[0];
};
type Tborder = {
  width?: Parameters<typeof SuperCss._s.borderWidth>[0];
  style?: Parameters<typeof SuperCss._s.borderStyle>[0];
  color?: Parameters<typeof SuperCss._s.borderColor>[0];
};
type TborderImage = {
  source?: Parameters<typeof SuperCss._s.borderImageSource>[0];
  slice?: Parameters<typeof SuperCss._s.borderImageSlice>[0];
  width?: Parameters<typeof SuperCss._s.borderImageWidth>[0];
  outset?: Parameters<typeof SuperCss._s.borderImageOutset>[0];
  repeat?: Parameters<typeof SuperCss._s.borderImageRepeat>[0];
};
type TcolumnRule = {
  width?: Parameters<typeof SuperCss._s.columnRuleWidth>[0];
  style?: Parameters<typeof SuperCss._s.columnRuleStyle>[0];
  color?: Parameters<typeof SuperCss._s.columnRuleColor>[0];
};
type Tcolumns = {
  width?: Parameters<typeof SuperCss._s.columnWidth>[0];
  count?: Parameters<typeof SuperCss._s.columnCount>[0];
};
type TflexFlow = {
  direction?: Parameters<typeof SuperCss._s.flexDirection>[0];
  wrap?: Parameters<typeof SuperCss._s.flexWrap>[0];
};
type Tflex = {
  grow?: Parameters<typeof SuperCss._s.flexGrow>[0];
  shrink?: Parameters<typeof SuperCss._s.flexShrink>[0];
  basis?: Parameters<typeof SuperCss._s.flexBasis>[0];
};
type Tfont = {
  style?: Parameters<typeof SuperCss._s.fontStyle>[0];
  variant?: Parameters<typeof SuperCss._s.fontVariant>[0];
  weight?: Parameters<typeof SuperCss._s.fontWeight>[0];
  size?: Parameters<typeof SuperCss._s.fontSize>[0];
  lineHeight?: Parameters<typeof SuperCss._s.lineHeight>[0];
  family?: Parameters<typeof SuperCss._s.fontFamily>[0];
};
type TlistStyle = {
  type?: Parameters<typeof SuperCss._s.listStyleType>[0];
  position?: Parameters<typeof SuperCss._s.listStylePosition>[0];
  image?: Parameters<typeof SuperCss._s.listStyleImage>[0];
};
type Tmargin = {
  left?: Parameters<typeof SuperCss._s.marginLeft>[0];
  right?: Parameters<typeof SuperCss._s.marginRight>[0];
  top?: Parameters<typeof SuperCss._s.marginTop>[0];
  bottom?: Parameters<typeof SuperCss._s.marginBottom>[0];
};
type Tpadding = {
  left?: Parameters<typeof SuperCss._s.paddingLeft>[0];
  right?: Parameters<typeof SuperCss._s.paddingRight>[0];
  top?: Parameters<typeof SuperCss._s.paddingTop>[0];
  bottom?: Parameters<typeof SuperCss._s.paddingBottom>[0];
};
type Toutline = {
  color?: Parameters<typeof SuperCss._s.outlineColor>[0];
  style?: Parameters<typeof SuperCss._s.outlineStyle>[0];
  width?: Parameters<typeof SuperCss._s.outlineWidth>[0];
};
type Ttransition = {
  property?: Parameters<typeof SuperCss._s.transitionProperty>[0];
  duration?: Parameters<typeof SuperCss._s.transitionDuration>[0];
  timingFunction?: Parameters<typeof SuperCss._s.transitionTimingFunction>[0];
  delay?: Parameters<typeof SuperCss._s.transitionDelay>[0];
};

type Tps =
  | ':active'
  | '::after'
  | '::backdrop'
  | '::before'
  | ':checked'
  | '::cue'
  | ':dir'
  | ':disabled'
  | ':empty'
  | ':enabled'
  | ':first'
  | ':first-child'
  | '::first-letter'
  | '::first-line'
  | ':first-of-type'
  | ':focus'
  | ':fullscreen'
  | ':hover'
  | ':in-range'
  | ':indeterminate'
  | ':invalid'
  | ':lang'
  | ':last-child'
  | ':last-of-type'
  | ':left'
  | ':link'
  | '::marker'
  | ':not'
  | ':nth-child'
  | ':nth-last-child'
  | ':nth-last-of-type'
  | ':nth-of-type'
  | ':only-child'
  | ':only-of-type'
  | ':optional'
  | ':out-of-range'
  | '::placeholder'
  | ':read-only'
  | ':read-write'
  | ':required'
  | ':right'
  | ':root'
  | ':scope'
  | '::selection'
  | '::slotted'
  | ':target'
  | ':valid'
  | ':visited'
  | (string & {});

export type Tch = Partial<Record<Tps, SuperCss>> & Record<string, SuperCss>;

class BaseCss {
  data: string[] = [];

  chData = {} as Tch;
  ch(v: Tch) {
    this.chData = v;
    return this;
  }

  andData: string[] = [];
  and(v: string) {
    const d = `.${v}`;
    !this.andData.includes(d) && this.andData.push(d);
    return this;
  }
}

export class SuperCss extends BaseCss {
  static _s = new SuperCss();

  alignContent(v: Tcss<Property.AlignContent, typeof Enums.AlignContent, {}>, isImportant = false) {
    return base(this, isImportant, v, 'align-content', Enums.AlignContent, true);
  }
  alignItems(v: Tcss<Property.AlignItems, typeof Enums.AlignItems, {}>, isImportant = false) {
    return base(this, isImportant, v, 'align-items', Enums.AlignItems, true);
  }
  alignSelf(v: Tcss<Property.AlignSelf, typeof Enums.AlignSelf, {}>, isImportant = false) {
    return base(this, isImportant, v, 'align-items', Enums.AlignSelf, true);
  }

  all(v: Tcss<Property.All, typeof Enums.All, {}>, isImportant = false) {
    return base(this, isImportant, v, 'all', Enums.All);
  }

  animationDelay(v: Tcss<Property.AnimationDelay, typeof Enums.AnimationDelay, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-delay', Enums.AnimationDelay, true, true);
  }
  animationDirection(v: Tcss<Property.AnimationDirection, typeof Enums.AnimationDirection, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-direction', Enums.AnimationDirection, true, true);
  }
  animationDuration(v: Tcss<Property.AnimationDuration, typeof Enums.AnimationDuration, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-direction', Enums.AnimationDuration, true, true);
  }
  animationFillMode(v: Tcss<Property.AnimationFillMode, typeof Enums.AnimationFillMode, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-fill-mode', Enums.AnimationFillMode, true, true);
  }
  animationIterationCount(
    v: Tcss<Property.AnimationIterationCount, typeof Enums.AnimationIterationCount, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'animation-iteration-count', Enums.AnimationIterationCount, true, true);
  }
  animationName(v: Tcss<Property.AnimationName, typeof Enums.AnimationName, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-name', Enums.AnimationName, true, true);
  }
  animationPlayState(v: Tcss<Property.AnimationPlayState, typeof Enums.AnimationPlayState, {}>, isImportant = false) {
    return base(this, isImportant, v, 'animation-name', Enums.AnimationPlayState, true, true);
  }
  animationTimingFunction(
    v: Tcss<Property.AnimationTimingFunction, typeof Enums.AnimationTimingFunction, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'animation-name', Enums.AnimationTimingFunction, true, true);
  }
  animation(v: Tanimation | Property.Animation, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'animation', Enums.Animation);
    } else {
      const d = v as Tanimation;
      return this.animationName(d.name, isImportant)
        .animationDuration(d.duration, isImportant)
        .animationTimingFunction(d.timingFunction, isImportant)
        .animationDelay(d.delay, isImportant)
        .animationIterationCount(d.iterationCount, isImportant)
        .animationDirection(d.direction, isImportant)
        .animationFillMode(d.fillMode, isImportant)
        .animationPlayState(d.playState, isImportant);
    }
  }

  appearance(v: Tcss<Property.Appearance, typeof Enums.Appearance, {}>, isImportant = false) {
    return base(this, isImportant, v, 'appearance', Enums.Appearance, true, true);
  }

  backfaceVisibility(v: Tcss<Property.BackfaceVisibility, typeof Enums.BackfaceVisibility, {}>, isImportant = false) {
    return base(
      this,
      isImportant,
      v,
      ['backface-visibility', '-ms-backface-visibility'],
      Enums.BackfaceVisibility,
      true,
      true
    );
  }

  backgroundAttachment(
    v: Tcss<Property.BackgroundAttachment, typeof Enums.BackgroundAttachment, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'background-attachment', Enums.BackgroundAttachment);
  }
  backgroundBlendMode(
    v: Tcss<Property.BackgroundBlendMode, typeof Enums.BackgroundBlendMode, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'background-blend-mode', Enums.BackgroundBlendMode);
  }
  backgroundClip(v: Tcss<Property.BackgroundClip, typeof Enums.BackgroundClip, {}>, isImportant = false) {
    return base(this, isImportant, v, 'background-clip', Enums.BackgroundClip);
  }
  backgroundColor(v: Tcss<Property.BackgroundColor, typeof Enums.BackgroundColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'background-color', Enums.BackgroundColor);
  }
  backgroundImage(v: Tcss<Property.BackgroundImage, typeof Enums.BackgroundImage, TimageFuns>, isImportant = false) {
    return base(this, isImportant, v, 'background-image', Enums.BackgroundImage);
  }
  backgroundOrigin(v: Tcss<Property.BackgroundOrigin, typeof Enums.BackgroundOrigin, {}>, isImportant = false) {
    return base(this, isImportant, v, 'background-origin', Enums.BackgroundOrigin);
  }
  backgroundPosition(v: Tcss<Property.BackgroundPosition, typeof Enums.BackgroundPosition, {}>, isImportant = false) {
    return base(this, isImportant, v, 'background-position', Enums.BackgroundPosition);
  }
  backgroundRepeat(v: Tcss<Property.BackgroundRepeat, typeof Enums.BackgroundRepeat, {}>, isImportant = false) {
    return base(this, isImportant, v, 'background-repeat', Enums.BackgroundRepeat);
  }
  backgroundSize(v: Tcss<Property.BackgroundSize, typeof Enums.BackgroundSize, {}>, isImportant = false) {
    return base(this, isImportant, v, 'background-size', Enums.BackgroundSize);
  }
  background(v: Tbackground | Property.Background, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'background', Enums.Background);
    } else {
      const d = v as Tbackground;
      return this.backgroundColor(d.color, isImportant)
        .backgroundPosition(d.position, isImportant)
        .backgroundSize(d.size, isImportant)
        .backgroundRepeat(d.repeat, isImportant)
        .backgroundOrigin(d.origin, isImportant)
        .backgroundClip(d.clip, isImportant)
        .backgroundAttachment(d.attachment, isImportant)
        .backgroundImage(d.image, isImportant);
    }
  }

  borderCollapse(v: Tcss<Property.BorderCollapse, typeof Enums.BorderCollapse, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-collapse', Enums.BorderCollapse);
  }
  borderSpacing(v: Tcss<Property.BorderSpacing, typeof Enums.BorderSpacing, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-spacing', Enums.BorderSpacing);
  }

  borderRadius(v: Tcss<Property.BorderRadius, typeof Enums.BorderRadius, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-radius', Enums.BorderRadius);
  }
  borderBottomLeftRadius(
    v: Tcss<Property.BorderBottomLeftRadius, typeof Enums.BorderBottomLeftRadius, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'border-bottom-left-radius', Enums.BorderBottomLeftRadius);
  }
  borderBottomRightRadius(
    v: Tcss<Property.BorderBottomRightRadius, typeof Enums.BorderBottomRightRadius, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'borderr-bottom-right-radius', Enums.BorderBottomRightRadius);
  }
  borderTopLeftRadius(
    v: Tcss<Property.BorderTopLeftRadius, typeof Enums.BorderTopLeftRadius, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'border-top-left-radius', Enums.BorderTopLeftRadius);
  }
  borderTopRightRadius(
    v: Tcss<Property.BorderTopRightRadius, typeof Enums.BorderTopRightRadius, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'borderr-top-right-radius', Enums.BorderTopRightRadius);
  }

  borderStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-style', Enums.BorderStyle);
  }
  borderWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-width', Enums.BorderWidth);
  }
  borderColor(v: Tcss<Property.BorderColor, typeof Enums.BorderColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-color', Enums.BorderColor);
  }
  border(v: Tborder | Property.Border, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border', Enums.Border);
    } else {
      const d = v as Tborder;
      return this.borderWidth(d.width, isImportant).borderStyle(d.style, isImportant).borderColor(d.color, isImportant);
    }
  }

  borderBottomStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-bottom-style', Enums.BorderStyle);
  }
  borderBottomWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-bottom-width', Enums.BorderWidth);
  }
  borderBottomColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-bottom-color', Enums.BorderColor);
  }
  borderBottom(v: Tborder | Property.BorderBottom, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border-bottom', Enums.BorderBottom);
    } else {
      const d = v as Tborder;
      return this.borderBottomWidth(d.width, isImportant)
        .borderBottomStyle(d.style, isImportant)
        .borderBottomColor(d.color, isImportant);
    }
  }

  borderTopStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-top-style', Enums.BorderStyle);
  }
  borderTopWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-top-width', Enums.BorderWidth);
  }
  borderTopColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-top-color', Enums.BorderColor);
  }
  borderTop(v: Tborder | Property.BorderTop, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border-top', Enums.BorderTop);
    } else {
      const d = v as Tborder;
      return this.borderTopWidth(d.width, isImportant)
        .borderTopStyle(d.style, isImportant)
        .borderTopColor(d.color, isImportant);
    }
  }

  borderLeftStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-left-style', Enums.BorderStyle);
  }
  borderLeftWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-left-width', Enums.BorderWidth);
  }
  borderLeftColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-left-color', Enums.BorderColor);
  }
  borderLeft(v: Tborder | Property.BorderLeft, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border-left', Enums.BorderLeft);
    } else {
      const d = v as Tborder;
      return this.borderLeftWidth(d.width, isImportant)
        .borderLeftStyle(d.style, isImportant)
        .borderLeftColor(d.color, isImportant);
    }
  }

  borderRightStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-right-style', Enums.BorderStyle);
  }
  borderRightWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-right-width', Enums.BorderWidth);
  }
  borderRightColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-right-color', Enums.BorderColor);
  }
  borderRight(v: Tborder | Property.BorderRight, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border-right', Enums.BorderRight);
    } else {
      const d = v as Tborder;
      return this.borderRightWidth(d.width, isImportant)
        .borderRightStyle(d.style, isImportant)
        .borderRightColor(d.color, isImportant);
    }
  }

  borderImageOutset(v: Tcss<Property.BorderImageOutset, typeof Enums.BorderImageOutset, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-image-outset', Enums.BorderImageOutset);
  }
  borderImageRepeat(v: Tcss<Property.BorderImageRepeat, typeof Enums.BorderImageRepeat, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-image-repeat', Enums.BorderImageRepeat);
  }
  borderImageSlice(v: Tcss<Property.BorderImageSlice, typeof Enums.BorderImageSlice, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-image-slice', Enums.BorderImageSlice);
  }
  borderImageSource(v: Tcss<Property.BorderImageSource, typeof Enums.BorderImageSource, {}>, isImportant = false) {
    return base(this, isImportant, v, 'border-image-source', Enums.BorderImageSource);
  }
  borderImageWidth(v: Tcss<Property.BorderImageWidth, typeof Enums.BorderImageWidth, TimageFuns>, isImportant = false) {
    return base(this, isImportant, v, 'border-image-source', Enums.BorderImageWidth);
  }
  borderImage(v: TborderImage | Property.BorderImage, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'border-image', Enums.BorderImage);
    } else {
      const d = v as TborderImage;
      return this.borderImageSource(d.source, isImportant)
        .borderImageSlice(d.slice, isImportant)
        .borderImageWidth(d.width, isImportant)
        .borderImageOutset(d.outset, isImportant)
        .borderImageRepeat(d.repeat, isImportant);
    }
  }

  bottom(v: Tcss<Property.Bottom, typeof Enums.Bottom, {}>, isImportant = false) {
    return base(this, isImportant, v, 'bottom', Enums.Bottom);
  }

  boxAlign(v: Tcss<Property.BoxAlign, typeof Enums.BoxAlign, {}>, isImportant = false) {
    return base(this, isImportant, v, ['box-align', '-ms-flex-align'], Enums.BoxAlign, true, true);
  }
  boxDirection(v: Tcss<Property.BoxDirection, typeof Enums.BoxDirection, {}>, isImportant = false) {
    return base(this, isImportant, v, ['box-direction', '-ms-flex-direction'], Enums.BoxDirection, true, true);
  }
  boxFlex(v: Tcss<Property.BoxFlex, typeof Enums.BoxFlex, {}>, isImportant = false) {
    return base(this, isImportant, v, ['box-flex', '-ms-flex'], Enums.BoxFlex, true, true);
  }
  boxOrdinalGroup(v: Tcss<Property.BoxOrdinalGroup, typeof Enums.BoxOrdinalGroup, {}>, isImportant = false) {
    return base(this, isImportant, v, ['box-ordinal-group', '-ms-flex-order'], Enums.BoxOrdinalGroup, true, true);
  }
  boxOrient(v: Tcss<Property.BoxOrient, typeof Enums.BoxOrient, {}>, isImportant = false) {
    return base(this, isImportant, v, 'box-orient', Enums.BoxOrient, true, true);
  }
  boxPack(v: Tcss<Property.BoxPack, typeof Enums.BoxPack, {}>, isImportant = false) {
    return base(this, isImportant, v, ['box-pack', '-ms-flex-pack'], Enums.BoxPack, true, true);
  }

  boxShadow(v: Tcss<Property.BoxShadow, typeof Enums.BoxShadow, {}>, isImportant = false) {
    return base(this, isImportant, v, 'box-shadow', Enums.BoxShadow);
  }
  boxSizing(v: Tcss<Property.BoxSizing, typeof Enums.BoxSizing, {}>, isImportant = false) {
    return base(this, isImportant, v, 'box-sizing', Enums.BoxSizing, true, true);
  }

  captionSide(v: Tcss<Property.CaptionSide, typeof Enums.CaptionSide, {}>, isImportant = false) {
    return base(this, isImportant, v, 'box-side', Enums.CaptionSide);
  }

  clear(v: Tcss<Property.Clear, typeof Enums.Clear, {}>, isImportant = false) {
    return base(this, isImportant, v, 'clear', Enums.Clear);
  }

  clip(v: Tcss<Property.Clip, typeof Enums.Clip, { rect: typeof fns.rect }>, isImportant = false) {
    return base(this, isImportant, v, 'clip', Enums.Clip);
  }

  color(v: Tcss<Property.Color, typeof Enums.Color, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'color', Enums.Color);
  }

  columnFill(v: Tcss<Property.ColumnFill, typeof Enums.ColumnFill, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-fill', Enums.ColumnFill, false, true);
  }
  columnGap(v: Tcss<Property.ColumnGap, typeof Enums.ColumnGap, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-gap', Enums.ColumnGap, true, true);
  }
  columnSpan(v: Tcss<Property.ColumnSpan, typeof Enums.ColumnSpan, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-span', Enums.ColumnSpan, true);
  }

  columnCount(v: Tcss<Property.ColumnCount, typeof Enums.ColumnCount, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-count', Enums.ColumnCount, true, true);
  }
  columnWidth(v: Tcss<Property.ColumnWidth, typeof Enums.ColumnWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-width', Enums.ColumnWidth, true, true);
  }
  columns(v: Tcolumns | Property.Columns, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'columns', Enums.Columns, true, true);
    } else {
      const d = v as Tcolumns;
      return this.columnWidth(d.width, isImportant).columnCount(d.count, isImportant);
    }
  }

  columnRuleColor(v: Tcss<Property.ColumnRuleColor, typeof Enums.ColumnRuleColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'column-rule-color', Enums.ColumnRuleColor, true, true);
  }
  columnRuleStyle(v: Tcss<Property.ColumnRuleStyle, typeof Enums.ColumnRuleStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-rule-style', Enums.ColumnRuleStyle, true, true);
  }
  columnRuleWidth(v: Tcss<Property.ColumnRuleWidth, typeof Enums.ColumnRuleWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'column-rule-width', Enums.ColumnRuleWidth, true, true);
  }
  columnRule(v: TcolumnRule | Property.ColumnRule, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'column-rule', Enums.ColumnRule, true, true);
    } else {
      const d = v as TcolumnRule;
      return this.columnRuleWidth(d.width, isImportant)
        .columnRuleStyle(d.style, isImportant)
        .columnRuleColor(d.color, isImportant);
    }
  }

  content(v: Tcss<Property.Content, typeof Enums.Content, {}>, isImportant = false) {
    return base(this, isImportant, v, 'content', Enums.Content);
  }

  counterIncrement(v: Tcss<Property.CounterIncrement, typeof Enums.CounterIncrement, {}>, isImportant = false) {
    return base(this, isImportant, v, 'counter-increment', Enums.CounterIncrement);
  }
  counterReset(v: Tcss<Property.CounterReset, typeof Enums.CounterReset, {}>, isImportant = false) {
    return base(this, isImportant, v, 'counter-reset', Enums.CounterReset);
  }

  cursor(v: Tcss<Property.Cursor, typeof Enums.Cursor, { url: typeof fns.url }>, isImportant = false) {
    return base(this, isImportant, v, 'cursor', Enums.Cursor);
  }

  direction(v: Tcss<Property.Direction, typeof Enums.Direction, {}>, isImportant = false) {
    return base(this, isImportant, v, 'direction', Enums.Direction);
  }

  display(v: Tcss<Property.Display, typeof Enums.Display, {}>, isImportant = false) {
    if (v === Enums.Display.Box) {
      this.display('-ms-flexbox');
      this.display('-moz-box');
      this.display('-ms-flexbox');
    }
    return base(this, isImportant, v, 'display', Enums.Display);
  }

  emptyCells(v: Tcss<Property.EmptyCells, typeof Enums.EmptyCells, {}>, isImportant = false) {
    return base(this, isImportant, v, 'empty-cells', Enums.EmptyCells);
  }

  filter(v: Tcss<Property.Filter, typeof Enums.Filter, TfilterFuns>, isImportant = false) {
    return base(this, isImportant, v, 'filter', Enums.Filter);
  }

  flexBasis(v: Tcss<Property.FlexBasis, typeof Enums.FlexBasis, {}>, isImportant = false) {
    return base(this, isImportant, v, ['flex-basis', '-ms-flex-basis'], Enums.FlexBasis, true, true);
  }
  flexGrow(v: Tcss<Property.FlexGrow, typeof Enums.FlexGrow, {}>, isImportant = false) {
    return base(this, isImportant, v, ['flex-grow', '-ms-flex-grow'], Enums.FlexGrow, true, true);
  }
  flexShrink(v: Tcss<Property.FlexShrink, typeof Enums.FlexShrink, {}>, isImportant = false) {
    return base(this, isImportant, v, ['flex-shrink', '-ms-flex-shrink'], Enums.FlexShrink, true, true);
  }
  flex(v: Tflex | Property.Flex, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, ['flex', '-ms-flex'], Enums.Flex, true, true);
    } else {
      const d = v as Tflex;
      return this.flexGrow(d.grow, isImportant).flexBasis(d.basis, isImportant).flexShrink(d.shrink, isImportant);
    }
  }
  flexDirection(v: Tcss<Property.FlexDirection, typeof Enums.FlexDirection, {}>, isImportant = false) {
    return base(this, isImportant, v, ['flex-direction', '-ms-flex-direction'], Enums.FlexDirection, true, true);
  }
  flexWrap(v: Tcss<Property.FlexWrap, typeof Enums.FlexWrap, {}>, isImportant = false) {
    return base(this, isImportant, v, ['flex-wrap', '-ms-flex-wrap'], Enums.FlexWrap, true, true);
  }
  flexFlow(v: TflexFlow | Property.FlexFlow, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, ['flex-flow', '-ms-flex-flow'], Enums.FlexFlow, true, true);
    } else {
      const d = v as TflexFlow;
      return this.flexDirection(d.direction, isImportant).flexWrap(d.wrap, isImportant);
    }
  }

  float(v: Tcss<Property.Float, typeof Enums.Float, {}>, isImportant = false) {
    return base(this, isImportant, v, 'float', Enums.Float);
  }

  fontFamily(v: Tcss<Property.FontFamily, typeof Enums.FontFamily, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-family', Enums.FontFamily);
  }
  fontSize(v: Tcss<Property.FontSize, typeof Enums.FontSize, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-size', Enums.FontSize);
  }
  fontSizeAdjust(v: Tcss<Property.FontSizeAdjust, typeof Enums.FontSizeAdjust, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-size-adjust', Enums.FontSizeAdjust);
  }
  fontStretch(v: Tcss<Property.FontStretch, typeof Enums.FontStretch, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-stretch', Enums.FontStretch);
  }
  fontStyle(v: Tcss<Property.FontStyle, typeof Enums.FontStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-style', Enums.FontStyle);
  }
  fontVariant(v: Tcss<Property.FontVariant, typeof Enums.FontVariant, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-variant', Enums.FontVariant);
  }
  fontWeight(v: Tcss<Property.FontWeight, typeof Enums.FontWeight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'font-weight', Enums.FontWeight);
  }
  lineHeight(v: Tcss<Property.LineHeight, typeof Enums.LineHeight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'line-height', Enums.LineHeight);
  }
  font(v: Tfont | Property.Font, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'font', Enums.Font);
    } else {
      const d = v as Tfont;
      return this.fontSize(d.size, isImportant)
        .fontVariant(d.variant, isImportant)
        .fontWeight(d.weight, isImportant)
        .fontStyle(d.style, isImportant)
        .lineHeight(d.lineHeight, isImportant)
        .fontFamily(d.family, isImportant);
    }
  }

  height(v: Tcss<Property.Height, typeof Enums.Height, {}>, isImportant = false) {
    return base(this, isImportant, v, 'height', Enums.Height);
  }

  justifyContent(v: Tcss<Property.JustifyContent, typeof Enums.JustifyContent, {}>, isImportant = false) {
    return base(this, isImportant, v, 'justify-content', Enums.JustifyContent, true, true);
  }

  left(v: Tcss<Property.Left, typeof Enums.Left, {}>, isImportant = false) {
    return base(this, isImportant, v, 'left', Enums.Left);
  }

  letterSpacing(v: Tcss<Property.LetterSpacing, typeof Enums.LetterSpacing, {}>, isImportant = false) {
    return base(this, isImportant, v, 'letter-spacing', Enums.LetterSpacing);
  }

  listStyleImage(
    v: Tcss<Property.ListStyleImage, typeof Enums.ListStyleImage, { url: typeof fns.url }>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'list-style-image', Enums.ListStyleImage);
  }
  listStylePosition(v: Tcss<Property.ListStylePosition, typeof Enums.ListStylePosition, {}>, isImportant = false) {
    return base(this, isImportant, v, 'list-style-position', Enums.ListStylePosition);
  }
  listStyleType(v: Tcss<Property.ListStyleType, typeof Enums.ListStyleType, {}>, isImportant = false) {
    return base(this, isImportant, v, 'list-style-type', Enums.ListStyleType);
  }
  listStyle(v: TlistStyle | Property.ListStyle, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'list-style', Enums.ListStyle);
    } else {
      const d = v as TlistStyle;
      return this.listStyleType(d.type, isImportant)
        .listStylePosition(d.position, isImportant)
        .listStyleImage(d.image, isImportant);
    }
  }

  marginTop(v: Tcss<Property.MarginTop, typeof Enums.MarginTop, {}>, isImportant = false) {
    return base(this, isImportant, v, 'margin-top', Enums.MarginTop);
  }
  marginBottom(v: Tcss<Property.MarginBottom, typeof Enums.MarginBottom, {}>, isImportant = false) {
    return base(this, isImportant, v, 'margin-bottom', Enums.MarginBottom);
  }
  marginLeft(v: Tcss<Property.MarginLeft, typeof Enums.MarginLeft, {}>, isImportant = false) {
    return base(this, isImportant, v, 'margin-left', Enums.MarginLeft);
  }
  marginRight(v: Tcss<Property.MarginRight, typeof Enums.MarginRight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'margin-right', Enums.MarginRight);
  }
  margin(v: Tmargin | Property.Margin, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'margin', Enums.Margin);
    } else {
      const d = v as Tmargin;
      return this.marginTop(d.top, isImportant)
        .marginBottom(d.bottom, isImportant)
        .marginLeft(d.left, isImportant)
        .marginRight(d.right, isImportant);
    }
  }

  maxHeight(v: Tcss<Property.MaxHeight, typeof Enums.MaxHeight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'max-height', Enums.MaxHeight);
  }
  maxWidth(v: Tcss<Property.MaxWidth, typeof Enums.MaxWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'max-width', Enums.MaxWidth);
  }
  minHeight(v: Tcss<Property.MinHeight, typeof Enums.MinHeight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'min-height', Enums.MinHeight);
  }
  minWidth(v: Tcss<Property.MinWidth, typeof Enums.MinWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'min-width', Enums.MinWidth);
  }

  mixBlendMode(v: Tcss<Property.MixBlendMode, typeof Enums.MixBlendMode, {}>, isImportant = false) {
    return base(this, isImportant, v, 'mix-blend-mode', Enums.MixBlendMode);
  }

  objectFit(v: Tcss<Property.ObjectFit, typeof Enums.ObjectFit, {}>, isImportant = false) {
    return base(this, isImportant, v, 'object-fit', Enums.ObjectFit);
  }
  objectPosition(v: Tcss<Property.ObjectPosition, typeof Enums.ObjectPosition, {}>, isImportant = false) {
    return base(this, isImportant, v, 'object-position', Enums.ObjectPosition);
  }

  opacity(v: Tcss<Property.Opacity, typeof Enums.Opacity, {}>, isImportant = false) {
    return base(this, isImportant, v, 'opacity', Enums.Opacity);
  }

  order(v: Tcss<Property.Order, typeof Enums.Order, {}>, isImportant = false) {
    return base(this, isImportant, v, 'order', Enums.Order, true, true);
  }

  outlineOffset(v: Tcss<Property.OutlineOffset, typeof Enums.OutlineOffset, {}>, isImportant = false) {
    return base(this, isImportant, v, 'outline-offset', Enums.OutlineOffset);
  }
  outlineColor(v: Tcss<Property.OutlineColor, typeof Enums.OutlineColor, TcolorFuns>, isImportant = false) {
    return base(this, isImportant, v, 'outline-color', Enums.OutlineColor);
  }
  outlineStyle(v: Tcss<Property.OutlineStyle, typeof Enums.OutlineStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'outline-style', Enums.OutlineStyle);
  }
  outlineWidth(v: Tcss<Property.OutlineWidth, typeof Enums.OutlineWidth, {}>, isImportant = false) {
    return base(this, isImportant, v, 'outline-width', Enums.OutlineWidth);
  }
  outline(v: Toutline | Property.Outline, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'outline', Enums.Outline);
    } else {
      const d = v as Toutline;
      return this.outlineColor(d.color, isImportant)
        .outlineStyle(d.style, isImportant)
        .outlineWidth(d.width, isImportant);
    }
  }

  overflow(v: Tcss<Property.Overflow, typeof Enums.Overflow, {}>, isImportant = false) {
    return base(this, isImportant, v, 'overflow', Enums.Overflow);
  }
  overflowX(v: Tcss<Property.OverflowX, typeof Enums.OverflowX, {}>, isImportant = false) {
    return base(this, isImportant, v, 'overflow-x', Enums.OverflowX);
  }
  overflowY(v: Tcss<Property.OverflowY, typeof Enums.OverflowY, {}>, isImportant = false) {
    return base(this, isImportant, v, 'overflow-y', Enums.OverflowY);
  }

  paddingTop(v: Tcss<Property.PaddingTop, typeof Enums.PaddingTop, {}>, isImportant = false) {
    return base(this, isImportant, v, 'padding-top', Enums.PaddingTop);
  }
  paddingBottom(v: Tcss<Property.PaddingBottom, typeof Enums.PaddingBottom, {}>, isImportant = false) {
    return base(this, isImportant, v, 'padding-bottom', Enums.PaddingBottom);
  }
  paddingLeft(v: Tcss<Property.PaddingLeft, typeof Enums.PaddingLeft, {}>, isImportant = false) {
    return base(this, isImportant, v, 'padding-left', Enums.PaddingLeft);
  }
  paddingRight(v: Tcss<Property.PaddingRight, typeof Enums.PaddingRight, {}>, isImportant = false) {
    return base(this, isImportant, v, 'padding-right', Enums.PaddingRight);
  }
  padding(v: Tpadding | Property.Padding, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'padding', Enums.Padding);
    } else {
      const d = v as Tpadding;
      return this.paddingTop(d.top, isImportant)
        .paddingBottom(d.bottom, isImportant)
        .paddingLeft(d.left, isImportant)
        .paddingRight(d.right, isImportant);
    }
  }

  pageBreakAfter(v: Tcss<Property.PageBreakAfter, typeof Enums.PageBreakAfter, {}>, isImportant = false) {
    return base(this, isImportant, v, 'page-break-after', Enums.PageBreakAfter);
  }
  pageBreakBefore(v: Tcss<Property.PageBreakBefore, typeof Enums.PageBreakBefore, {}>, isImportant = false) {
    return base(this, isImportant, v, 'page-break-before', Enums.PageBreakBefore);
  }
  pageBreakInside(v: Tcss<Property.PageBreakInside, typeof Enums.PageBreakInside, {}>, isImportant = false) {
    return base(this, isImportant, v, 'page-break-inside', Enums.PageBreakInside);
  }

  perspective(v: Tcss<Property.Perspective, typeof Enums.Perspective, {}>, isImportant = false) {
    return base(this, isImportant, v, 'perspective', Enums.Perspective, true, true);
  }
  perspectiveOrigin(v: Tcss<Property.PerspectiveOrigin, typeof Enums.PerspectiveOrigin, {}>, isImportant = false) {
    return base(this, isImportant, v, 'perspective-origin', Enums.PerspectiveOrigin, true, true);
  }

  position(v: Tcss<Property.Position, typeof Enums.Position, {}>, isImportant = false) {
    return base(this, isImportant, v, 'position', Enums.Position);
  }

  quotes(v: Tcss<Property.Quotes, typeof Enums.Quotes, {}>, isImportant = false) {
    return base(this, isImportant, v, 'quotes', Enums.Quotes);
  }

  resize(v: Tcss<Property.Resize, typeof Enums.Resize, {}>, isImportant = false) {
    return base(this, isImportant, v, 'resize', Enums.Resize);
  }

  right(v: Tcss<Property.Right, typeof Enums.Right, {}>, isImportant = false) {
    return base(this, isImportant, v, 'right', Enums.Right);
  }

  tabSize(v: Tcss<Property.TabSize, typeof Enums.TabSize, {}>, isImportant = false) {
    return base(this, isImportant, v, 'tab-size', Enums.TabSize, false, true, true);
  }

  tableLayout(v: Tcss<Property.TableLayout, typeof Enums.TableLayout, {}>, isImportant = false) {
    return base(this, isImportant, v, 'table-layout', Enums.TableLayout);
  }

  textAlign(v: Tcss<Property.TextAlign, typeof Enums.TextAlign, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-align', Enums.TextAlign);
  }
  textAlignLast(v: Tcss<Property.TextAlignLast, typeof Enums.TextAlignLast, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-align-last', Enums.TextAlignLast, false, true);
  }
  textDecoration(v: Tcss<Property.TextDecoration, typeof Enums.TextDecoration, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-decoration', Enums.TextDecoration);
  }
  textDecorationColor(
    v: Tcss<Property.TextDecorationColor, typeof Enums.TextDecorationColor, TcolorFuns>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'text-decoration-color', Enums.TextDecorationColor, false, true);
  }
  textDecorationLine(v: Tcss<Property.TextDecorationLine, typeof Enums.TextDecorationLine, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-decoration-line', Enums.TextDecorationLine, false, true);
  }
  textDecorationStyle(
    v: Tcss<Property.TextDecorationStyle, typeof Enums.TextDecorationStyle, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'text-decoration-style', Enums.TextDecorationStyle, false, true);
  }
  textIndent(v: Tcss<Property.TextIndent, typeof Enums.TextIndent, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-indent', Enums.TextIndent);
  }
  textJustify(v: Tcss<Property.TextJustify, typeof Enums.TextJustify, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-justify', Enums.TextJustify);
  }
  textOverflow(v: Tcss<Property.TextOverflow, typeof Enums.TextOverflow, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-overflow', Enums.TextOverflow, false, false, true);
  }
  textShadow(v: Tcss<Property.TextShadow, typeof Enums.TextShadow, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-shadow', Enums.TextShadow);
  }
  textTransform(v: Tcss<Property.TextTransform, typeof Enums.TextTransform, {}>, isImportant = false) {
    return base(this, isImportant, v, 'text-transform', Enums.TextTransform);
  }

  top(v: Tcss<Property.Top, typeof Enums.Top, {}>, isImportant = false) {
    return base(this, isImportant, v, 'top', Enums.Top);
  }

  transform(v: Tcss<Property.Transform, typeof Enums.Transform, TtransformFuns>, isImportant = false) {
    return base(this, isImportant, v, ['transform', '-ms-transform'], Enums.Transform, true, true);
  }
  transformOrigin(v: Tcss<Property.TransformOrigin, typeof Enums.TransformOrigin, {}>, isImportant = false) {
    return base(this, isImportant, v, ['transform-origin', '-ms-transform-origin'], Enums.TransformOrigin, true, true);
  }
  transformStyle(v: Tcss<Property.TransformStyle, typeof Enums.TransformStyle, {}>, isImportant = false) {
    return base(this, isImportant, v, 'transform-style', Enums.TransformStyle, true, true);
  }

  transitionDelay(v: Tcss<Property.TransitionDelay, typeof Enums.TransitionDelay, {}>, isImportant = false) {
    return base(this, isImportant, v, 'transition-delay', Enums.TransitionDelay, true, true, true);
  }
  transitionDuration(v: Tcss<Property.TransitionDuration, typeof Enums.TransitionDuration, {}>, isImportant = false) {
    return base(this, isImportant, v, 'transition-duration', Enums.TransitionDuration, true, true, true);
  }
  transitionProperty(v: Tcss<Property.TransitionProperty, typeof Enums.TransitionProperty, {}>, isImportant = false) {
    return base(this, isImportant, v, 'transition-property', Enums.TransitionProperty, true, true, true);
  }
  transitionTimingFunction(
    v: Tcss<Property.TransitionTimingFunction, typeof Enums.TransitionTimingFunction, {}>,
    isImportant = false
  ) {
    return base(this, isImportant, v, 'transition-timing-function', Enums.TransitionTimingFunction, true, true, true);
  }
  transition(v: Ttransition | Property.Transition, isImportant = false) {
    if (typeof v === 'string') {
      return base(this, isImportant, v, 'transition', Enums.Transition, true, true, true);
    } else {
      const d = v as Ttransition;
      return this.transitionProperty(d.property, isImportant)
        .transitionDuration(d.duration, isImportant)
        .transitionTimingFunction(d.timingFunction, isImportant)
        .transitionDelay(d.delay, isImportant);
    }
  }

  unicodeBidi(v: Tcss<Property.UnicodeBidi, typeof Enums.UnicodeBidi, {}>, isImportant = false) {
    return base(this, isImportant, v, 'unicode-bidi', Enums.UnicodeBidi);
  }

  verticalAlign(v: Tcss<Property.VerticalAlign, typeof Enums.VerticalAlign, {}>, isImportant = false) {
    return base(this, isImportant, v, 'vertical-align', Enums.VerticalAlign);
  }

  visibility(v: Tcss<Property.Visibility, typeof Enums.Visibility, {}>, isImportant = false) {
    return base(this, isImportant, v, 'visibility', Enums.Visibility);
  }

  whiteSpace(v: Tcss<Property.WhiteSpace, typeof Enums.WhiteSpace, {}>, isImportant = false) {
    return base(this, isImportant, v, 'white-space', Enums.WhiteSpace);
  }

  width(v: Tcss<Property.Width, typeof Enums.Width, {}>, isImportant = false) {
    return base(this, isImportant, v, 'width', Enums.Width);
  }

  wordBreak(v: Tcss<Property.WordBreak, typeof Enums.WordBreak, {}>, isImportant = false) {
    return base(this, isImportant, v, 'word-break', Enums.WordBreak);
  }
  wordSpacing(v: Tcss<Property.WordSpacing, typeof Enums.WordSpacing, {}>, isImportant = false) {
    return base(this, isImportant, v, 'word-spacing', Enums.WordSpacing);
  }
  wordSrap(v: Tcss<Property.WordWrap, typeof Enums.WordWrap, {}>, isImportant = false) {
    return base(this, isImportant, v, 'word-wrap', Enums.WordWrap);
  }

  writingMode(v: Tcss<Property.WritingMode, typeof Enums.WritingMode, {}>, isImportant = false) {
    return base(this, isImportant, v, 'writing-mode', Enums.WritingMode);
  }

  zIndex(v: Tcss<Property.ZIndex, typeof Enums.ZIndex, {}>, isImportant = false) {
    return base(this, isImportant, v, 'z-index', Enums.ZIndex);
  }
}
