export declare type TValue = number | string;
export declare type TI = 'inherit';
export declare type TA = 'auto';
export declare type TD = 'initial' | TI;
export declare type TN<T> = undefined | null | T;
export declare type Tcolor = string | 'transparent' | TI;
export declare type TalignContent = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | TD;
export declare type TalignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | TD;
export declare type TalignSelf = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | TD;
export declare type Tall = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'balleline' | TD;
export declare type TanimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | TD;
export declare type TanimationFillMode = 'none' | 'forwards' | 'backwards' | 'both' | TD;
export declare type TanimationIterationCount = number | 'infinite';
export declare type TanimationName = string | 'none';
export declare type TanimationPlayState = 'paused' | 'running';
export declare type TanimationTimingFunction = string | 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier(0, 0, 0, 0)';
export interface Ianimation {
    delay?: string;
    direction?: TanimationDirection;
    duration?: string;
    fillMode?: TanimationFillMode;
    iterationCount?: TanimationIterationCount;
    name?: TanimationName;
    playState?: TanimationPlayState;
    timingFunction?: TanimationTimingFunction;
}
export declare type Tappearance = 'normal' | 'icon' | 'window' | 'button' | 'menu' | 'field';
export declare type TbackfaceVisibility = 'visible' | 'hidden';
export declare type TbackgroundAttachment = 'scroll' | 'fixed' | 'local' | TD;
export declare type TbackgroundBlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'saturation' | 'color' | 'luminosity';
export declare type TbackgroundClip = 'border-box' | 'padding-box' | 'content-box';
export declare type TbackgroundImage = string | 'url()' | 'linear-gradient()' | 'radial-gradient()' | 'repeating-linear-gradient()' | 'repeating-radial-gradient()' | 'none' | TI;
export declare type TbackgroundOrigin = 'padding-box' | 'border-box' | 'content-box';
export declare type TbackgroundPosition = string | TI;
export declare type TbackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | TI;
export declare type TbackgroundSize = string | 'cover' | 'contain';
export interface Ibackground {
    color?: Tcolor;
    image?: TbackgroundImage;
    position?: TbackgroundPosition;
    size?: TbackgroundSize;
    repeat?: TbackgroundRepeat;
    origin?: TbackgroundOrigin;
    clip?: TbackgroundClip;
    attachment?: TbackgroundAttachment;
}
export interface Iborder {
    width?: TborderWidth;
    style?: TborderStyle;
    color?: Tcolor;
}
export declare type TborderCollapse = 'collapse' | 'separate' | TI;
export declare type TborderImageRepeat = 'stretch' | 'repeat' | 'round' | 'space' | TD;
export declare type TborderImageSlice = string | 'fill';
export declare type TborderImageSource = string | 'url()' | 'none';
export declare type TborderImageWidth = TValue | TA;
export declare type TborderSpacing = string | TI;
export declare type TborderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | TI;
export declare type TborderWidth = TValue | 'thin' | 'medium' | 'thick' | TI;
export declare type TpositionValue = TValue | TI | TA;
export declare type TboxAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export declare type TboxboxDirection = 'normal' | 'reverse' | TI;
export declare type TboxOrient = 'horizontal' | 'vertical' | 'inline-axis' | 'block-axis' | TI;
export declare type TboxPack = 'start' | 'end' | 'center' | 'justify';
export declare type TboxSizing = 'content-box' | 'border-box' | TI;
export declare type TcaptionSide = 'top' | 'bottom' | TI;
export declare type Tclear = 'left' | 'right' | 'both' | 'none' | TI;
export declare type Tclip = string | 'rect (top, right, bottom, left)' | TA | TI;
export interface Icolumns {
    width?: TcolumnWidth;
    count?: TcolumnCount;
}
export declare type TcolumnCount = string | TA;
export declare type TcolumnFill = 'balance' | TA;
export declare type TcolumnGap = 'normal' | TValue;
export declare type TcolumnSpan = '1' | 'all';
export declare type TcolumnWidth = TValue | TA;
export interface IcolumnRule {
    width?: TcolumnRuleWidth;
    style?: TcolumnRuleStyle;
    color?: Tcolor;
}
export declare type TcolumnRuleStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
export declare type TcolumnRuleWidth = 'thin' | 'medium' | 'thick' | TValue;
export declare type Tcontent = string | 'none' | 'normal' | 'counter' | 'attr' | 'open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote	' | 'url()' | TI;
export declare type TcounterIncrement = string | 'none' | TI;
export declare type TcounterReset = string | 'none' | TI;
export declare type Tcursor = string | 'url()' | 'default' | 'crosshair' | 'pointer' | 'move' | 'e-resize' | 'ne-resize' | 'nw-resize' | 'n-resize' | 'se-resize' | 'sw-resize' | 's-resize' | 'w-resize' | 'text' | 'wait' | 'help' | TA;
export declare type Tdirection = 'ltr' | 'rtl' | TI;
export declare type Tdisplay = 'none' | 'block' | 'inline' | 'inline-block' | 'list-item' | 'run-in' | 'compact' | 'marker' | 'table' | 'inline-table' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-column-group' | 'table-column' | 'table-cell' | 'table-caption' | TI;
export declare type TemptyCells = 'hide' | 'show' | TI;
export declare type Tfilter = string | 'none' | 'blur(px)' | 'brightness(%)' | 'contrast(%)' | 'drop-shadow(h-shadow v-shadow blur spread color)' | 'grayscale(%)' | 'hue-rotate(deg)' | 'invert(%)' | 'opacity(%)' | 'saturate(%)' | 'sepia(%)' | 'url()' | TD;
export declare type Tflex = 'none' | 'flex-grow' | 'flex-shrink' | 'flex-basis' | TA | TD;
export declare type TflexBasis = TValue | TA | TD;
export declare type TflexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | TD;
export declare type TflexFlow = 'flex-direction' | 'flex-wrap' | TD;
export declare type TflexShrink = number | TD;
export declare type TflexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | TD;
export declare type Tfloat = 'left' | 'right' | 'none' | TI;
