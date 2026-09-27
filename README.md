# A Little Something I Built For You 🤍

A premium, emotional, cinematic, mobile-first interactive apology website built with vanilla HTML5, CSS3, and JavaScript. Designed with a dark luxury aesthetic to communicate genuine effort, sincerity, and respect.

---

## 🌟 Features

- **Dark Luxury Aesthetic**: Charcoal gradients, glassmorphism panels, soft gold highlights, and ambient floating canvas particles.
- **Mobile-First Design**: Optimized for smart devices from `320px` width upward (iPhone, Pixel, Galaxy, etc.), with touch-friendly controls and zero horizontal scrolling.
- **Dynamic Content Configuration**: Easily customize all text, timeline items, photos, captions, and responses in a single configuration block at the top of `js/script.js`.
- **Cinematic Photo Experience**: Touch-carousel with dot indicators and tap-to-expand lightbox preview.
- **Interactive Cards**: Smooth expandable reflection drawers for deeper thoughts ("I was wrong", "I understand why it hurt", etc.).
- **Minimal Vertical Timeline**: Clean numbered nodes highlighting personal realizations.
- **Typing Reveal Effect**: Naturally typed out final message as the user scrolls into view.
- **Respectful Final Interaction**: Interactive choice buttons ("I need some time 😒" vs "Okay, we're good ❤️") with zero pressure or guilt-tripping.
- **Ambient Audio Support**: Built-in music button with fallback Web Audio API ambient synth if no audio file is provided.
- **Hidden Easter Egg**: Tap the final signature 5 times to reveal a subtle secret message.
- **Accessibility & Reduced Motion**: Full support for `prefers-reduced-motion` to keep animations subtle and smooth.

---

## 📁 File Structure

```text
/
├── index.html        # Main HTML5 structure & semantic elements
├── css/
│   └── style.css     # Mobile-first CSS design system & glassmorphic tokens
├── js/
│   └── script.js     # Personalization CONFIG & interactive app logic
├── images/
│   ├── photo1.jpg    # Photo 1 (Replace with your custom photo)
│   ├── photo2.jpg    # Photo 2
│   ├── photo3.jpg    # Photo 3
│   ├── photo4.jpg    # Photo 4
│   └── photo5.jpg    # Photo 5
├── audio/
│   └── song.mp3      # (Optional) Background music track
└── README.md         # Project documentation
```

---

## ✏️ How to Personalize

To personalize this website for your friend, open `js/script.js` and edit the **`CONFIG`** object at the very top of the file:

```javascript
// ===============================
// PERSONALIZE WEBSITE HERE
// ===============================
const CONFIG = {
  herName: "Friend", // Her name

  opening: {
    smallText: "Hey…",
    heading: "I know I messed up.",
    subtext: "I could have just sent you a message.\nBut I wanted to make something instead.",
    buttonText: "Give me a minute →"
  },
  
  // Custom photos and captions
  photos: [
    { src: "images/photo1.jpg", caption: "Some moments are worth keeping." },
    { src: "images/photo2.jpg", caption: "A calm perspective matters." },
    // ...
  ],

  // ... Update timeline, apology text, and final message as needed ...
};
```

---

## 📸 Replacing Photos & Audio

1. **Photos**: Place your 5 personal photos inside the `images/` directory named `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, and `photo5.jpg`.
2. **Music**: (Optional) Place your background song in `audio/song.mp3`. If omitted or missing, the website will automatically play a calming ambient synth chord using Web Audio API so it always works smoothly!

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or launch a simple local development server:

### Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your mobile browser or dev tools.

### Using VS Code Live Server / Vite / npx:
```bash
npx serve .
```

---

*Crafted with sincerity and care.*
