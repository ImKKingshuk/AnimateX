<h1 align="center">AnimateX</h1>

<p align="center">
AnimateX: Effortless Animations for Your Web Apps! 🚀 Easily add stunning, smooth, and customizable animations. AnimateX simplifies animation handling with intuitive props and a flexible API. ✨🎭
</p>

<br> <br>

## 🎯 Features

- **Simple & Powerful**: Easily animate any component with smooth, customizable transitions.
- **Multiple Animation Types**: Supports `fade`, `zoom`, `slide`, `flip`, `rotate`, `bounce`, and more.
- **Viewport Awareness**: Animations trigger only when elements enter the viewport.
- **Highly Customizable**: Control `duration`, `delay`, `easing`, and trigger behavior.
- **TypeScript Support**: Fully typed for better developer experience.

## 📦 Installation

Install `AnimateX` using your preferred package manager:

### Bun

```bash
bun add animatex
```

### npm

```bash
npm install animatex
```

### pnpm

```bash
pnpm add animatex
```

### yarn

```bash
yarn add animatex
```

## ⚡ API Reference

### `<AnimateX />` Component

Wrap any element with `<AnimateX>` to animate it.

| Prop        | Type                                                     | Default     | Description                                                         |
| ----------- | -------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| `animation` | See `Animation Types Table` for all available animations | `"fade-up"` | Type of animation.                                                  |
| `duration`  | `number`                                                 | `0.75`      | Duration of the animation in seconds.                               |
| `delay`     | `number`                                                 | `0`         | Delay before the animation starts (seconds).                        |
| `once`      | `boolean`                                                | `false`     | If `true`, animation plays only once.                               |
| `threshold` | `number` (0 - 1)                                         | `0.2`       | Percentage of element visibility required to trigger the animation. |

## 🎭 Available Animation Types

| Animation Name      | Description                                 |
| ------------------- | ------------------------------------------- |
| `"fade-up"`         | Fades in while moving up.                   |
| `"fade-down"`       | Fades in while moving down.                 |
| `"fade-left"`       | Fades in while moving left.                 |
| `"fade-right"`      | Fades in while moving right.                |
| `"zoom-in"`         | Smoothly zooms in.                          |
| `"zoom-in-left"`    | Zooms in from the left.                     |
| `"zoom-in-right"`   | Zooms in from the right.                    |
| `"zoom-out"`        | Smoothly zooms out.                         |
| `"flip-x"`          | Flips along the X-axis.                     |
| `"flip-y"`          | Flips along the Y-axis.                     |
| `"flip"`            | Flips in both directions.                   |
| `"rotate"`          | Rotates the element.                        |
| `"rotate-in"`       | Rotates in from an initial angle.           |
| `"rotate-out"`      | Rotates out to a final angle.               |
| `"bounce"`          | Bounces the element in place.               |
| `"flash"`           | Flashes the element on and off.             |
| `"pulse"`           | Slightly grows and shrinks.                 |
| `"rubberBand"`      | Stretches and contracts like a rubber band. |
| `"shakeX"`          | Shakes the element side to side.            |
| `"shakeY"`          | Shakes the element up and down.             |
| `"headShake"`       | A slight left-right head shake.             |
| `"swing"`           | Swings the element like a pendulum.         |
| `"tada"`            | Expands and shakes like a tada effect.      |
| `"wobble"`          | Wobbles side to side.                       |
| `"jello"`           | Wobbles like jello.                         |
| `"heartBeat"`       | A pulsing heartbeat effect.                 |
| `"slide-in-left"`   | Slides in from the left.                    |
| `"slide-in-right"`  | Slides in from the right.                   |
| `"slide-in-up"`     | Slides in from the bottom.                  |
| `"slide-in-down"`   | Slides in from the top.                     |
| `"slide-out-left"`  | Slides out to the left.                     |
| `"slide-out-right"` | Slides out to the right.                    |
| `"slide-out-up"`    | Slides out to the top.                      |
| `"slide-out-down"`  | Slides out to the bottom.                   |
| `"back-in-down"`    | Moves backward while sliding in down.       |
| `"back-in-up"`      | Moves backward while sliding in up.         |
| `"back-in-left"`    | Moves backward while sliding in left.       |
| `"back-in-right"`   | Moves backward while sliding in right.      |
| `"back-out-down"`   | Moves forward while sliding out down.       |
| `"back-out-up"`     | Moves forward while sliding out up.         |
| `"back-out-left"`   | Moves forward while sliding out left.       |
| `"back-out-right"`  | Moves forward while sliding out right.      |
| `"hinge"`           | Hangs and falls like a hinge.               |
| `"jackInTheBox"`    | Expands and bounces into visibility.        |
| `"rollIn"`          | Rolls in from the side.                     |
| `"rollOut"`         | Rolls out to the side.                      |

## 🚀 Usage

### **Basic Example**

```tsx
import AnimateX from 'animatex';

const MyComponent = () => {
  return (
    <AnimateX animation="zoom-in" duration={1} delay={0.2}>
      <h1>Hello Animation! 🎉</h1>
    </AnimateX>
  );
};

export default MyComponent;
```

### **Triggering on Scroll (Viewport Detection)**

```tsx
import AnimateX from 'animatex';

const ScrollAnimation = () => {
  return (
    <AnimateX animation="slide-left" once threshold={0.3}>
      <p>This text slides in when it enters the viewport! 👀</p>
    </AnimateX>
  );
};

export default ScrollAnimation;
```

## License

This project is licensed under the GPL-3.0-or-later License.
