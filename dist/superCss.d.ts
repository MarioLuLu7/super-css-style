import { Property } from 'csstype';
import * as Enums from './cssEnums';
import { fns, Tcss } from './utils';
declare type TcolorFuns = {
    rgb: typeof fns.rgb;
    rgba: typeof fns.rgba;
    hsl: typeof fns.hsl;
    hsla: typeof fns.hsla;
};
declare type TimageFuns = {
    url: typeof fns.url;
    linearGradient: typeof fns.linearGradient;
    radialGradient: typeof fns.radialGradient;
    repeatingLinearGradient: typeof fns.repeatingLinearGradient;
    repeatingRadialGradient: typeof fns.repeatingRadialGradient;
};
declare type TfilterFuns = {
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
declare type TtransformFuns = {
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
declare type Tanimation = {
    name?: Parameters<typeof SuperCss._s.animationName>[0];
    duration?: Parameters<typeof SuperCss._s.animationDuration>[0];
    timingFunction?: Parameters<typeof SuperCss._s.animationTimingFunction>[0];
    delay?: Parameters<typeof SuperCss._s.animationDelay>[0];
    iterationCount?: Parameters<typeof SuperCss._s.animationIterationCount>[0];
    direction?: Parameters<typeof SuperCss._s.animationDirection>[0];
    fillMode?: Parameters<typeof SuperCss._s.animationFillMode>[0];
    playState?: Parameters<typeof SuperCss._s.animationPlayState>[0];
};
declare type Tbackground = {
    color?: Parameters<typeof SuperCss._s.backgroundColor>[0];
    position?: Parameters<typeof SuperCss._s.backgroundPosition>[0];
    size?: Parameters<typeof SuperCss._s.backgroundSize>[0];
    repeat?: Parameters<typeof SuperCss._s.backgroundRepeat>[0];
    origin?: Parameters<typeof SuperCss._s.backgroundOrigin>[0];
    clip?: Parameters<typeof SuperCss._s.backgroundClip>[0];
    attachment?: Parameters<typeof SuperCss._s.backgroundAttachment>[0];
    image?: Parameters<typeof SuperCss._s.backgroundImage>[0];
};
declare type Tborder = {
    width?: Parameters<typeof SuperCss._s.borderWidth>[0];
    style?: Parameters<typeof SuperCss._s.borderStyle>[0];
    color?: Parameters<typeof SuperCss._s.borderColor>[0];
};
declare type TborderImage = {
    source?: Parameters<typeof SuperCss._s.borderImageSource>[0];
    slice?: Parameters<typeof SuperCss._s.borderImageSlice>[0];
    width?: Parameters<typeof SuperCss._s.borderImageWidth>[0];
    outset?: Parameters<typeof SuperCss._s.borderImageOutset>[0];
    repeat?: Parameters<typeof SuperCss._s.borderImageRepeat>[0];
};
declare type TcolumnRule = {
    width?: Parameters<typeof SuperCss._s.columnRuleWidth>[0];
    style?: Parameters<typeof SuperCss._s.columnRuleStyle>[0];
    color?: Parameters<typeof SuperCss._s.columnRuleColor>[0];
};
declare type Tcolumns = {
    width?: Parameters<typeof SuperCss._s.columnWidth>[0];
    count?: Parameters<typeof SuperCss._s.columnCount>[0];
};
declare type TflexFlow = {
    direction?: Parameters<typeof SuperCss._s.flexDirection>[0];
    wrap?: Parameters<typeof SuperCss._s.flexWrap>[0];
};
declare type Tflex = {
    grow?: Parameters<typeof SuperCss._s.flexGrow>[0];
    shrink?: Parameters<typeof SuperCss._s.flexShrink>[0];
    basis?: Parameters<typeof SuperCss._s.flexBasis>[0];
};
declare type Tfont = {
    style?: Parameters<typeof SuperCss._s.fontStyle>[0];
    variant?: Parameters<typeof SuperCss._s.fontVariant>[0];
    weight?: Parameters<typeof SuperCss._s.fontWeight>[0];
    size?: Parameters<typeof SuperCss._s.fontSize>[0];
    lineHeight?: Parameters<typeof SuperCss._s.lineHeight>[0];
    family?: Parameters<typeof SuperCss._s.fontFamily>[0];
};
declare type TlistStyle = {
    type?: Parameters<typeof SuperCss._s.listStyleType>[0];
    position?: Parameters<typeof SuperCss._s.listStylePosition>[0];
    image?: Parameters<typeof SuperCss._s.listStyleImage>[0];
};
declare type Tmargin = {
    left?: Parameters<typeof SuperCss._s.marginLeft>[0];
    right?: Parameters<typeof SuperCss._s.marginRight>[0];
    top?: Parameters<typeof SuperCss._s.marginTop>[0];
    bottom?: Parameters<typeof SuperCss._s.marginBottom>[0];
};
declare type Tpadding = {
    left?: Parameters<typeof SuperCss._s.paddingLeft>[0];
    right?: Parameters<typeof SuperCss._s.paddingRight>[0];
    top?: Parameters<typeof SuperCss._s.paddingTop>[0];
    bottom?: Parameters<typeof SuperCss._s.paddingBottom>[0];
};
declare type Toutline = {
    color?: Parameters<typeof SuperCss._s.outlineColor>[0];
    style?: Parameters<typeof SuperCss._s.outlineStyle>[0];
    width?: Parameters<typeof SuperCss._s.outlineWidth>[0];
};
declare type Ttransition = {
    property?: Parameters<typeof SuperCss._s.transitionProperty>[0];
    duration?: Parameters<typeof SuperCss._s.transitionDuration>[0];
    timingFunction?: Parameters<typeof SuperCss._s.transitionTimingFunction>[0];
    delay?: Parameters<typeof SuperCss._s.transitionDelay>[0];
};
declare type Tps = ':active' | '::after' | '::backdrop' | '::before' | ':checked' | '::cue' | ':dir' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | '::first-letter' | '::first-line' | ':first-of-type' | ':focus' | ':fullscreen' | ':hover' | ':in-range' | ':indeterminate' | ':invalid' | ':lang' | ':last-child' | ':last-of-type' | ':left' | ':link' | '::marker' | ':not' | ':nth-child' | ':nth-last-child' | ':nth-last-of-type' | ':nth-of-type' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | '::placeholder' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | '::selection' | '::slotted' | ':target' | ':valid' | ':visited' | (string & {});
export declare type Tch = Partial<Record<Tps, SuperCss>> & Record<string, SuperCss>;
declare class BaseCss {
    data: string[];
    chData: Tch;
    ch(v: Tch): this;
    andData: string[];
    and(v: string): this;
}
export declare class SuperCss extends BaseCss {
    static _s: SuperCss;
    alignContent(v: Tcss<Property.AlignContent, typeof Enums.AlignContent, {}>, isImportant?: boolean): SuperCss;
    alignItems(v: Tcss<Property.AlignItems, typeof Enums.AlignItems, {}>, isImportant?: boolean): SuperCss;
    alignSelf(v: Tcss<Property.AlignSelf, typeof Enums.AlignSelf, {}>, isImportant?: boolean): SuperCss;
    all(v: Tcss<Property.All, typeof Enums.All, {}>, isImportant?: boolean): SuperCss;
    animationDelay(v: Tcss<Property.AnimationDelay, typeof Enums.AnimationDelay, {}>, isImportant?: boolean): SuperCss;
    animationDirection(v: Tcss<Property.AnimationDirection, typeof Enums.AnimationDirection, {}>, isImportant?: boolean): SuperCss;
    animationDuration(v: Tcss<Property.AnimationDuration, typeof Enums.AnimationDuration, {}>, isImportant?: boolean): SuperCss;
    animationFillMode(v: Tcss<Property.AnimationFillMode, typeof Enums.AnimationFillMode, {}>, isImportant?: boolean): SuperCss;
    animationIterationCount(v: Tcss<Property.AnimationIterationCount, typeof Enums.AnimationIterationCount, {}>, isImportant?: boolean): SuperCss;
    animationName(v: Tcss<Property.AnimationName, typeof Enums.AnimationName, {}>, isImportant?: boolean): SuperCss;
    animationPlayState(v: Tcss<Property.AnimationPlayState, typeof Enums.AnimationPlayState, {}>, isImportant?: boolean): SuperCss;
    animationTimingFunction(v: Tcss<Property.AnimationTimingFunction, typeof Enums.AnimationTimingFunction, {}>, isImportant?: boolean): SuperCss;
    animation(v: Tanimation | Property.Animation, isImportant?: boolean): SuperCss;
    appearance(v: Tcss<Property.Appearance, typeof Enums.Appearance, {}>, isImportant?: boolean): SuperCss;
    backfaceVisibility(v: Tcss<Property.BackfaceVisibility, typeof Enums.BackfaceVisibility, {}>, isImportant?: boolean): SuperCss;
    backgroundAttachment(v: Tcss<Property.BackgroundAttachment, typeof Enums.BackgroundAttachment, {}>, isImportant?: boolean): SuperCss;
    backgroundBlendMode(v: Tcss<Property.BackgroundBlendMode, typeof Enums.BackgroundBlendMode, {}>, isImportant?: boolean): SuperCss;
    backgroundClip(v: Tcss<Property.BackgroundClip, typeof Enums.BackgroundClip, {}>, isImportant?: boolean): SuperCss;
    backgroundColor(v: Tcss<Property.BackgroundColor, typeof Enums.BackgroundColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    backgroundImage(v: Tcss<Property.BackgroundImage, typeof Enums.BackgroundImage, TimageFuns>, isImportant?: boolean): SuperCss;
    backgroundOrigin(v: Tcss<Property.BackgroundOrigin, typeof Enums.BackgroundOrigin, {}>, isImportant?: boolean): SuperCss;
    backgroundPosition(v: Tcss<Property.BackgroundPosition, typeof Enums.BackgroundPosition, {}>, isImportant?: boolean): SuperCss;
    backgroundRepeat(v: Tcss<Property.BackgroundRepeat, typeof Enums.BackgroundRepeat, {}>, isImportant?: boolean): SuperCss;
    backgroundSize(v: Tcss<Property.BackgroundSize, typeof Enums.BackgroundSize, {}>, isImportant?: boolean): SuperCss;
    background(v: Tbackground | Property.Background, isImportant?: boolean): SuperCss;
    borderCollapse(v: Tcss<Property.BorderCollapse, typeof Enums.BorderCollapse, {}>, isImportant?: boolean): SuperCss;
    borderSpacing(v: Tcss<Property.BorderSpacing, typeof Enums.BorderSpacing, {}>, isImportant?: boolean): SuperCss;
    borderRadius(v: Tcss<Property.BorderRadius, typeof Enums.BorderRadius, {}>, isImportant?: boolean): SuperCss;
    borderBottomLeftRadius(v: Tcss<Property.BorderBottomLeftRadius, typeof Enums.BorderBottomLeftRadius, {}>, isImportant?: boolean): SuperCss;
    borderBottomRightRadius(v: Tcss<Property.BorderBottomRightRadius, typeof Enums.BorderBottomRightRadius, {}>, isImportant?: boolean): SuperCss;
    borderTopLeftRadius(v: Tcss<Property.BorderTopLeftRadius, typeof Enums.BorderTopLeftRadius, {}>, isImportant?: boolean): SuperCss;
    borderTopRightRadius(v: Tcss<Property.BorderTopRightRadius, typeof Enums.BorderTopRightRadius, {}>, isImportant?: boolean): SuperCss;
    borderStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant?: boolean): SuperCss;
    borderWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant?: boolean): SuperCss;
    borderColor(v: Tcss<Property.BorderColor, typeof Enums.BorderColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    border(v: Tborder | Property.Border, isImportant?: boolean): SuperCss;
    borderBottomStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant?: boolean): SuperCss;
    borderBottomWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant?: boolean): SuperCss;
    borderBottomColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    borderBottom(v: Tborder | Property.BorderBottom, isImportant?: boolean): SuperCss;
    borderTopStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant?: boolean): SuperCss;
    borderTopWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant?: boolean): SuperCss;
    borderTopColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    borderTop(v: Tborder | Property.BorderTop, isImportant?: boolean): SuperCss;
    borderLeftStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant?: boolean): SuperCss;
    borderLeftWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant?: boolean): SuperCss;
    borderLeftColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    borderLeft(v: Tborder | Property.BorderLeft, isImportant?: boolean): SuperCss;
    borderRightStyle(v: Tcss<Property.BorderStyle, typeof Enums.BorderStyle, {}>, isImportant?: boolean): SuperCss;
    borderRightWidth(v: Tcss<Property.BorderWidth, typeof Enums.BorderWidth, {}>, isImportant?: boolean): SuperCss;
    borderRightColor(v: Tcss<Property.BorderBottomColor, typeof Enums.BorderColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    borderRight(v: Tborder | Property.BorderRight, isImportant?: boolean): SuperCss;
    borderImageOutset(v: Tcss<Property.BorderImageOutset, typeof Enums.BorderImageOutset, {}>, isImportant?: boolean): SuperCss;
    borderImageRepeat(v: Tcss<Property.BorderImageRepeat, typeof Enums.BorderImageRepeat, {}>, isImportant?: boolean): SuperCss;
    borderImageSlice(v: Tcss<Property.BorderImageSlice, typeof Enums.BorderImageSlice, {}>, isImportant?: boolean): SuperCss;
    borderImageSource(v: Tcss<Property.BorderImageSource, typeof Enums.BorderImageSource, {}>, isImportant?: boolean): SuperCss;
    borderImageWidth(v: Tcss<Property.BorderImageWidth, typeof Enums.BorderImageWidth, TimageFuns>, isImportant?: boolean): SuperCss;
    borderImage(v: TborderImage | Property.BorderImage, isImportant?: boolean): SuperCss;
    bottom(v: Tcss<Property.Bottom, typeof Enums.Bottom, {}>, isImportant?: boolean): SuperCss;
    boxAlign(v: Tcss<Property.BoxAlign, typeof Enums.BoxAlign, {}>, isImportant?: boolean): SuperCss;
    boxDirection(v: Tcss<Property.BoxDirection, typeof Enums.BoxDirection, {}>, isImportant?: boolean): SuperCss;
    boxFlex(v: Tcss<Property.BoxFlex, typeof Enums.BoxFlex, {}>, isImportant?: boolean): SuperCss;
    boxOrdinalGroup(v: Tcss<Property.BoxOrdinalGroup, typeof Enums.BoxOrdinalGroup, {}>, isImportant?: boolean): SuperCss;
    boxOrient(v: Tcss<Property.BoxOrient, typeof Enums.BoxOrient, {}>, isImportant?: boolean): SuperCss;
    boxPack(v: Tcss<Property.BoxPack, typeof Enums.BoxPack, {}>, isImportant?: boolean): SuperCss;
    boxShadow(v: Tcss<Property.BoxShadow, typeof Enums.BoxShadow, {}>, isImportant?: boolean): SuperCss;
    boxSizing(v: Tcss<Property.BoxSizing, typeof Enums.BoxSizing, {}>, isImportant?: boolean): SuperCss;
    captionSide(v: Tcss<Property.CaptionSide, typeof Enums.CaptionSide, {}>, isImportant?: boolean): SuperCss;
    clear(v: Tcss<Property.Clear, typeof Enums.Clear, {}>, isImportant?: boolean): SuperCss;
    clip(v: Tcss<Property.Clip, typeof Enums.Clip, {
        rect: typeof fns.rect;
    }>, isImportant?: boolean): SuperCss;
    color(v: Tcss<Property.Color, typeof Enums.Color, TcolorFuns>, isImportant?: boolean): SuperCss;
    columnFill(v: Tcss<Property.ColumnFill, typeof Enums.ColumnFill, {}>, isImportant?: boolean): SuperCss;
    columnGap(v: Tcss<Property.ColumnGap, typeof Enums.ColumnGap, {}>, isImportant?: boolean): SuperCss;
    columnSpan(v: Tcss<Property.ColumnSpan, typeof Enums.ColumnSpan, {}>, isImportant?: boolean): SuperCss;
    columnCount(v: Tcss<Property.ColumnCount, typeof Enums.ColumnCount, {}>, isImportant?: boolean): SuperCss;
    columnWidth(v: Tcss<Property.ColumnWidth, typeof Enums.ColumnWidth, {}>, isImportant?: boolean): SuperCss;
    columns(v: Tcolumns | Property.Columns, isImportant?: boolean): SuperCss;
    columnRuleColor(v: Tcss<Property.ColumnRuleColor, typeof Enums.ColumnRuleColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    columnRuleStyle(v: Tcss<Property.ColumnRuleStyle, typeof Enums.ColumnRuleStyle, {}>, isImportant?: boolean): SuperCss;
    columnRuleWidth(v: Tcss<Property.ColumnRuleWidth, typeof Enums.ColumnRuleWidth, {}>, isImportant?: boolean): SuperCss;
    columnRule(v: TcolumnRule | Property.ColumnRule, isImportant?: boolean): SuperCss;
    content(v: Tcss<Property.Content, typeof Enums.Content, {}>, isImportant?: boolean): SuperCss;
    counterIncrement(v: Tcss<Property.CounterIncrement, typeof Enums.CounterIncrement, {}>, isImportant?: boolean): SuperCss;
    counterReset(v: Tcss<Property.CounterReset, typeof Enums.CounterReset, {}>, isImportant?: boolean): SuperCss;
    cursor(v: Tcss<Property.Cursor, typeof Enums.Cursor, {
        url: typeof fns.url;
    }>, isImportant?: boolean): SuperCss;
    direction(v: Tcss<Property.Direction, typeof Enums.Direction, {}>, isImportant?: boolean): SuperCss;
    display(v: Tcss<Property.Display, typeof Enums.Display, {}>, isImportant?: boolean): SuperCss;
    emptyCells(v: Tcss<Property.EmptyCells, typeof Enums.EmptyCells, {}>, isImportant?: boolean): SuperCss;
    filter(v: Tcss<Property.Filter, typeof Enums.Filter, TfilterFuns>, isImportant?: boolean): SuperCss;
    flexBasis(v: Tcss<Property.FlexBasis, typeof Enums.FlexBasis, {}>, isImportant?: boolean): SuperCss;
    flexGrow(v: Tcss<Property.FlexGrow, typeof Enums.FlexGrow, {}>, isImportant?: boolean): SuperCss;
    flexShrink(v: Tcss<Property.FlexShrink, typeof Enums.FlexShrink, {}>, isImportant?: boolean): SuperCss;
    flex(v: Tflex | Property.Flex, isImportant?: boolean): SuperCss;
    flexDirection(v: Tcss<Property.FlexDirection, typeof Enums.FlexDirection, {}>, isImportant?: boolean): SuperCss;
    flexWrap(v: Tcss<Property.FlexWrap, typeof Enums.FlexWrap, {}>, isImportant?: boolean): SuperCss;
    flexFlow(v: TflexFlow | Property.FlexFlow, isImportant?: boolean): SuperCss;
    float(v: Tcss<Property.Float, typeof Enums.Float, {}>, isImportant?: boolean): SuperCss;
    fontFamily(v: Tcss<Property.FontFamily, typeof Enums.FontFamily, {}>, isImportant?: boolean): SuperCss;
    fontSize(v: Tcss<Property.FontSize, typeof Enums.FontSize, {}>, isImportant?: boolean): SuperCss;
    fontSizeAdjust(v: Tcss<Property.FontSizeAdjust, typeof Enums.FontSizeAdjust, {}>, isImportant?: boolean): SuperCss;
    fontStretch(v: Tcss<Property.FontStretch, typeof Enums.FontStretch, {}>, isImportant?: boolean): SuperCss;
    fontStyle(v: Tcss<Property.FontStyle, typeof Enums.FontStyle, {}>, isImportant?: boolean): SuperCss;
    fontVariant(v: Tcss<Property.FontVariant, typeof Enums.FontVariant, {}>, isImportant?: boolean): SuperCss;
    fontWeight(v: Tcss<Property.FontWeight, typeof Enums.FontWeight, {}>, isImportant?: boolean): SuperCss;
    lineHeight(v: Tcss<Property.LineHeight, typeof Enums.LineHeight, {}>, isImportant?: boolean): SuperCss;
    font(v: Tfont | Property.Font, isImportant?: boolean): SuperCss;
    height(v: Tcss<Property.Height, typeof Enums.Height, {}>, isImportant?: boolean): SuperCss;
    justifyContent(v: Tcss<Property.JustifyContent, typeof Enums.JustifyContent, {}>, isImportant?: boolean): SuperCss;
    left(v: Tcss<Property.Left, typeof Enums.Left, {}>, isImportant?: boolean): SuperCss;
    letterSpacing(v: Tcss<Property.LetterSpacing, typeof Enums.LetterSpacing, {}>, isImportant?: boolean): SuperCss;
    listStyleImage(v: Tcss<Property.ListStyleImage, typeof Enums.ListStyleImage, {
        url: typeof fns.url;
    }>, isImportant?: boolean): SuperCss;
    listStylePosition(v: Tcss<Property.ListStylePosition, typeof Enums.ListStylePosition, {}>, isImportant?: boolean): SuperCss;
    listStyleType(v: Tcss<Property.ListStyleType, typeof Enums.ListStyleType, {}>, isImportant?: boolean): SuperCss;
    listStyle(v: TlistStyle | Property.ListStyle, isImportant?: boolean): SuperCss;
    marginTop(v: Tcss<Property.MarginTop, typeof Enums.MarginTop, {}>, isImportant?: boolean): SuperCss;
    marginBottom(v: Tcss<Property.MarginBottom, typeof Enums.MarginBottom, {}>, isImportant?: boolean): SuperCss;
    marginLeft(v: Tcss<Property.MarginLeft, typeof Enums.MarginLeft, {}>, isImportant?: boolean): SuperCss;
    marginRight(v: Tcss<Property.MarginRight, typeof Enums.MarginRight, {}>, isImportant?: boolean): SuperCss;
    margin(v: Tmargin | Property.Margin, isImportant?: boolean): SuperCss;
    maxHeight(v: Tcss<Property.MaxHeight, typeof Enums.MaxHeight, {}>, isImportant?: boolean): SuperCss;
    maxWidth(v: Tcss<Property.MaxWidth, typeof Enums.MaxWidth, {}>, isImportant?: boolean): SuperCss;
    minHeight(v: Tcss<Property.MinHeight, typeof Enums.MinHeight, {}>, isImportant?: boolean): SuperCss;
    minWidth(v: Tcss<Property.MinWidth, typeof Enums.MinWidth, {}>, isImportant?: boolean): SuperCss;
    mixBlendMode(v: Tcss<Property.MixBlendMode, typeof Enums.MixBlendMode, {}>, isImportant?: boolean): SuperCss;
    objectFit(v: Tcss<Property.ObjectFit, typeof Enums.ObjectFit, {}>, isImportant?: boolean): SuperCss;
    objectPosition(v: Tcss<Property.ObjectPosition, typeof Enums.ObjectPosition, {}>, isImportant?: boolean): SuperCss;
    opacity(v: Tcss<Property.Opacity, typeof Enums.Opacity, {}>, isImportant?: boolean): SuperCss;
    order(v: Tcss<Property.Order, typeof Enums.Order, {}>, isImportant?: boolean): SuperCss;
    outlineOffset(v: Tcss<Property.OutlineOffset, typeof Enums.OutlineOffset, {}>, isImportant?: boolean): SuperCss;
    outlineColor(v: Tcss<Property.OutlineColor, typeof Enums.OutlineColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    outlineStyle(v: Tcss<Property.OutlineStyle, typeof Enums.OutlineStyle, {}>, isImportant?: boolean): SuperCss;
    outlineWidth(v: Tcss<Property.OutlineWidth, typeof Enums.OutlineWidth, {}>, isImportant?: boolean): SuperCss;
    outline(v: Toutline | Property.Outline, isImportant?: boolean): SuperCss;
    overflow(v: Tcss<Property.Overflow, typeof Enums.Overflow, {}>, isImportant?: boolean): SuperCss;
    overflowX(v: Tcss<Property.OverflowX, typeof Enums.OverflowX, {}>, isImportant?: boolean): SuperCss;
    overflowY(v: Tcss<Property.OverflowY, typeof Enums.OverflowY, {}>, isImportant?: boolean): SuperCss;
    paddingTop(v: Tcss<Property.PaddingTop, typeof Enums.PaddingTop, {}>, isImportant?: boolean): SuperCss;
    paddingBottom(v: Tcss<Property.PaddingBottom, typeof Enums.PaddingBottom, {}>, isImportant?: boolean): SuperCss;
    paddingLeft(v: Tcss<Property.PaddingLeft, typeof Enums.PaddingLeft, {}>, isImportant?: boolean): SuperCss;
    paddingRight(v: Tcss<Property.PaddingRight, typeof Enums.PaddingRight, {}>, isImportant?: boolean): SuperCss;
    padding(v: Tpadding | Property.Padding, isImportant?: boolean): SuperCss;
    pageBreakAfter(v: Tcss<Property.PageBreakAfter, typeof Enums.PageBreakAfter, {}>, isImportant?: boolean): SuperCss;
    pageBreakBefore(v: Tcss<Property.PageBreakBefore, typeof Enums.PageBreakBefore, {}>, isImportant?: boolean): SuperCss;
    pageBreakInside(v: Tcss<Property.PageBreakInside, typeof Enums.PageBreakInside, {}>, isImportant?: boolean): SuperCss;
    perspective(v: Tcss<Property.Perspective, typeof Enums.Perspective, {}>, isImportant?: boolean): SuperCss;
    perspectiveOrigin(v: Tcss<Property.PerspectiveOrigin, typeof Enums.PerspectiveOrigin, {}>, isImportant?: boolean): SuperCss;
    position(v: Tcss<Property.Position, typeof Enums.Position, {}>, isImportant?: boolean): SuperCss;
    quotes(v: Tcss<Property.Quotes, typeof Enums.Quotes, {}>, isImportant?: boolean): SuperCss;
    resize(v: Tcss<Property.Resize, typeof Enums.Resize, {}>, isImportant?: boolean): SuperCss;
    right(v: Tcss<Property.Right, typeof Enums.Right, {}>, isImportant?: boolean): SuperCss;
    tabSize(v: Tcss<Property.TabSize, typeof Enums.TabSize, {}>, isImportant?: boolean): SuperCss;
    tableLayout(v: Tcss<Property.TableLayout, typeof Enums.TableLayout, {}>, isImportant?: boolean): SuperCss;
    textAlign(v: Tcss<Property.TextAlign, typeof Enums.TextAlign, {}>, isImportant?: boolean): SuperCss;
    textAlignLast(v: Tcss<Property.TextAlignLast, typeof Enums.TextAlignLast, {}>, isImportant?: boolean): SuperCss;
    textDecoration(v: Tcss<Property.TextDecoration, typeof Enums.TextDecoration, {}>, isImportant?: boolean): SuperCss;
    textDecorationColor(v: Tcss<Property.TextDecorationColor, typeof Enums.TextDecorationColor, TcolorFuns>, isImportant?: boolean): SuperCss;
    textDecorationLine(v: Tcss<Property.TextDecorationLine, typeof Enums.TextDecorationLine, {}>, isImportant?: boolean): SuperCss;
    textDecorationStyle(v: Tcss<Property.TextDecorationStyle, typeof Enums.TextDecorationStyle, {}>, isImportant?: boolean): SuperCss;
    textIndent(v: Tcss<Property.TextIndent, typeof Enums.TextIndent, {}>, isImportant?: boolean): SuperCss;
    textJustify(v: Tcss<Property.TextJustify, typeof Enums.TextJustify, {}>, isImportant?: boolean): SuperCss;
    textOverflow(v: Tcss<Property.TextOverflow, typeof Enums.TextOverflow, {}>, isImportant?: boolean): SuperCss;
    textShadow(v: Tcss<Property.TextShadow, typeof Enums.TextShadow, {}>, isImportant?: boolean): SuperCss;
    textTransform(v: Tcss<Property.TextTransform, typeof Enums.TextTransform, {}>, isImportant?: boolean): SuperCss;
    top(v: Tcss<Property.Top, typeof Enums.Top, {}>, isImportant?: boolean): SuperCss;
    transform(v: Tcss<Property.Transform, typeof Enums.Transform, TtransformFuns>, isImportant?: boolean): SuperCss;
    transformOrigin(v: Tcss<Property.TransformOrigin, typeof Enums.TransformOrigin, {}>, isImportant?: boolean): SuperCss;
    transformStyle(v: Tcss<Property.TransformStyle, typeof Enums.TransformStyle, {}>, isImportant?: boolean): SuperCss;
    transitionDelay(v: Tcss<Property.TransitionDelay, typeof Enums.TransitionDelay, {}>, isImportant?: boolean): SuperCss;
    transitionDuration(v: Tcss<Property.TransitionDuration, typeof Enums.TransitionDuration, {}>, isImportant?: boolean): SuperCss;
    transitionProperty(v: Tcss<Property.TransitionProperty, typeof Enums.TransitionProperty, {}>, isImportant?: boolean): SuperCss;
    transitionTimingFunction(v: Tcss<Property.TransitionTimingFunction, typeof Enums.TransitionTimingFunction, {}>, isImportant?: boolean): SuperCss;
    transition(v: Ttransition | Property.Transition, isImportant?: boolean): SuperCss;
    unicodeBidi(v: Tcss<Property.UnicodeBidi, typeof Enums.UnicodeBidi, {}>, isImportant?: boolean): SuperCss;
    verticalAlign(v: Tcss<Property.VerticalAlign, typeof Enums.VerticalAlign, {}>, isImportant?: boolean): SuperCss;
    visibility(v: Tcss<Property.Visibility, typeof Enums.Visibility, {}>, isImportant?: boolean): SuperCss;
    whiteSpace(v: Tcss<Property.WhiteSpace, typeof Enums.WhiteSpace, {}>, isImportant?: boolean): SuperCss;
    width(v: Tcss<Property.Width, typeof Enums.Width, {}>, isImportant?: boolean): SuperCss;
    wordBreak(v: Tcss<Property.WordBreak, typeof Enums.WordBreak, {}>, isImportant?: boolean): SuperCss;
    wordSpacing(v: Tcss<Property.WordSpacing, typeof Enums.WordSpacing, {}>, isImportant?: boolean): SuperCss;
    wordSrap(v: Tcss<Property.WordWrap, typeof Enums.WordWrap, {}>, isImportant?: boolean): SuperCss;
    writingMode(v: Tcss<Property.WritingMode, typeof Enums.WritingMode, {}>, isImportant?: boolean): SuperCss;
    zIndex(v: Tcss<Property.ZIndex, typeof Enums.ZIndex, {}>, isImportant?: boolean): SuperCss;
}
export {};
