

## Fix: Typewriter Cursor Stops at End of Text

### Problem
The typewriter effect uses `width: 0` to `width: 100%`, but since the element is inside a full-width container, `100%` means the entire screen width -- not the width of the text. This causes the cursor to travel far past "RICHARDSON HALL PRESENTS" to the right edge of the screen.

### Solution
Two CSS changes are needed:

1. **Constrain the typewriter width to the text content** -- Change `width: 100%` in the `@keyframes typewriter` to use `max-content` (or a `ch`-based width), and wrap the element so it only grows to fit its text. The cleanest approach is to use `width: max-content` as the final state and add `max-width: max-content` on the `.typewriter` class so it never exceeds the text length.

2. **Hide the cursor immediately after typing finishes** -- Add an `animation-end` state that sets `border-right-color: transparent` using the `forwards` fill mode on the blink-caret animation (already partially done), and ensure the timing is correct so the cursor vanishes right when the text finishes revealing.

### Technical Details

**File: `src/index.css`**

- In the `@keyframes typewriter`, change the `to` state from `width: 100%` to `width: max-content` (or a precise `ch` value like `25ch` matching "Richardson Hall Presents").
- On the `.typewriter` class, add `max-width: max-content` so the element never stretches beyond its text.
- Adjust the `blink-caret` animation so it ends (with `border-color: transparent`) right when the typewriter animation completes (~3s mark = 0.5s delay + 2.5s typing). The current config of `4 iterations x 0.75s = 3s + 0.5s delay = ends at 3.5s` is close but we'll fine-tune it.

The key fix:
```css
.typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: max-content;
    border-right: 2px solid hsl(var(--primary));
    animation:
      typewriter 2.5s steps(24, end) 0.5s 1 normal both,
      blink-caret 0.75s step-end 4 0.5s forwards;
  }
```

And in the keyframes, ensure we animate to the natural text width rather than full container width. Since `max-content` isn't animatable in all browsers, we'll use a `ch`-based approach (`25ch` for "Richardson Hall Presents") as a reliable fallback.

**File: `src/pages/Home.tsx`**

- No changes needed if the CSS fix is sufficient. The `text-center` on the parent container will still center the inline-block element.

