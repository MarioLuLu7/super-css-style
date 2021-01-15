<h1 align='center'>
  Super Css Style
</h1>

<p align='center'>
  css-in-js library width typescripts
</p>

---

## Install
```console
npm install super-css-style -S
```

## Example

### Nomal
``` jsx
import css from 'super-css-style'
// or import { css } from 'super-css-style' 

const container = css(
    s => 
    s()
    .color('#333')
    .backgroundColor('rbg(255, 255, 255)')
    .font('italic bold 12px/20px arial,sans-serif')
)

<div class={container}>some thing</div>
```

### With Method
use `v => v.m.METHOD` to view and use methods belonging to the style.
``` jsx
import css from 'super-css-style'

const container = css(
    s => 
    s()
    .color(v => v.m.rgb(22,22,22))
)

<div class={container}>some thing</div>
```

### With Property
use `v => v.p.PROPERTY` to view and use property belonging to the style.
``` jsx
import css from 'super-css-style'

const container = css(
    s => 
    s()
    .cursor(v =>v.p.Pointer)
)

<div class={container}>some thing</div>
```

### With Children
``` jsx
import css from 'super-css-style'

const container = css(
    s => 
    s()
    .color('#333')
    .ch({
        '.title': s().fontSize('20px'),
        'b': s().fontWeight(200),
        'div':s()
            .color('#333')
            .ch({
                ':nth-child(2n)': s().backgroundColor('#fafafa')
            })
    })
)

<div class={container}>
    <p class='title'>i am title</p>
    <b>bbb</b>
    <div>111</div>
    <div>222</div>
    <div>333</div>
    <div>444</div>
</div>
```

### With Union
``` jsx
import css from 'super-css-style'

const container = css(
    s => 
    s()
    .font({
        size: '12px',
        weight: 500,
        lineHeight: '30px'
    })
)

<div class={container}>some thing</div>
```

### With Keyframes
```jsx
import { css, keyframes } from 'super-css-style'

const move = keyframes(s => ({
    '0%': s().left('2px'),
    '10%': s().left('10px'),
    '70%': s().left('50px'),
    '100%': s().left('80px')
}));

const container = css(s => s().animation(`${move} 1s`));

<div class={container}>some thing</div>
```

### With Media
```jsx
import { media } from 'super-css-style'

media('screen and (max-width:240px)', s => ({
    body: s().backgroundColor('#000')
}));
```

### Global
```jsx
import { media } from 'super-css-style'

global(s => ({
  '.title': s().fontSize('12px'),
  'p': s().margin('0'),
  'p,b,span': s().fontWeight(400)
}));
```
