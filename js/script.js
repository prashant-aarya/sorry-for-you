// ==========================================================================
// PERSONALIZE WEBSITE HERE
// ==========================================================================
const CONFIG = {
  herName: "Nancy (Sinnu)",

  // Audio settings
  audioUrl: "audio/song.mp3",

  // Section 1 — Opening Screen
  opening: {
    smallText: "Hey Nancy (Sinnu)… ✨",
    heading: "Nancy (Sinnu), I know I messed up.",
    subtext: "I could have just sent you a simple text message, Sinnu.<br>But you deserve something genuine, creative, and built with care.",
    buttonText: "Give me a minute, Sinnu →"
  },

  // Section 2 — The Reason
  reason: {
    heading: "So Sinnu… I made this for you.",
    paragraphs: [
      "I know my behavior hurt you, Sinnu, and I completely understand why you're upset with me.",
      "I’m not here to make excuses. I built this interactive page to genuinely apologize and show you how much your friendship means to me."
    ]
  },

  // Section 3 — Photo Experience
  photos: [
    { src: "images/photo1.jpg", caption: "Special moments with Sinnu worth treasuring ✨" },
    { src: "images/photo2.jpg", caption: "A calm & gentle perspective 💖" },
    { src: "images/photo3.jpg", caption: "Quiet reflection & learning 🌸" },
    { src: "images/photo4.jpg", caption: "Thoughts straight from the heart 💌" },
    { src: "images/photo5.jpg", caption: "Looking forward to better days 🌟" }
  ],

  // Section 4 — What I Understand
  understandCards: [
    {
      id: 1,
      title: "I was wrong, Sinnu.",
      detail: "I made a mistake in how I reacted and handled things with you. Accepting full responsibility is the first step."
    },
    {
      id: 2,
      title: "I understand why it hurt.",
      detail: "Your feelings are 100% valid. My actions lacked the care, empathy, and consideration that Sinnu deserves from a true friend."
    },
    {
      id: 3,
      title: "I should have treated you better.",
      detail: "I should have paused, listened to you, and treated our friendship with the warmth and respect Sinnu deserves."
    }
  ],

  // Section 5 — A Small Timeline
  timelineHeading: "Things I Realized About Our Friendship 💡",
  timeline: [
    { num: "01", text: "I should have listened to you carefully, Sinnu." },
    { num: "02", text: "I should have truly valued your perspective." },
    { num: "03", text: "I should have been more mindful & respectful." },
    { num: "04", text: "I should have protected our friendship at all costs." }
  ],

  // Section 6 — THE APOLOGY
  apology: {
    heading: "Sinnu, I’m genuinely sorry. ❤️",
    subtext: "I don't expect you to forget everything immediately, Sinnu, nor do I expect an instant reply.<br><br>I just wanted you to know how deeply I regret my mistake."
  },

  // Section 7 — THE FINAL MESSAGE
  finalMessage: {
    heading: "One last message for you, Sinnu… ✨",
    typingLines: [
      "Nancy (Sinnu), you mean so much to me as a person and as a friend.",
      "I never want one mistake to shadow all the wonderful memories we share, Sinnu.",
      "Take all the time you need. Absolutely no pressure at all, Sinnu.",
      "I just wanted to do everything I could to make things right for you, Sinnu. 💕"
    ],
    signature: "— Dedicated to Nancy (Sinnu) with sincerity & care ✨"
  },

  // Easter Egg
  easterEggText: "P.S. Yes Sinnu, I actually coded this entire site just for you! 💖",

  // Final Interaction
  finalInteraction: {
    question: "Sinnu, what would you like to do?",
    needTimeBtn: "I need some time 😒",
    needTimeResponse: "Fair enough, Sinnu. 💜<br><br>Take all the time you need. I will completely respect that. ❤️",
    weAreGoodBtn: "Okay, we're good ❤️",
    weAreGoodResponse: "Thank you so much, Sinnu! 🎉💖<br>I promise to be a better friend from today on! ✨"
  }
};

// ==========================================================================
// APPLICATION CODE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initRender();
  initScrollProgress();
  initAmbientParticles();
  initClickHeartEffect();
  initKinderJoyModal();
  initIntersectionObserver();
  initPhotoCarousel();
  initInteractiveCards();
  initTypingEffect();
  initEasterEgg();
  initAudioPlayer();
  initFinalInteraction();
});

/* --------------------------------------------------------------------------
   1. Initial Dynamic Content Rendering
   -------------------------------------------------------------------------- */
function initRender() {
  // Hero
  document.getElementById("heroSmallText").textContent = CONFIG.opening.smallText;
  document.getElementById("heroHeading").textContent = CONFIG.opening.heading;
  document.getElementById("heroSubtext").innerHTML = CONFIG.opening.subtext.replace(/\n/g, "<br>");
  document.getElementById("heroBtnText").textContent = CONFIG.opening.buttonText;

  // Reason
  document.getElementById("reasonHeading").textContent = CONFIG.reason.heading;
  const reasonContainer = document.getElementById("reasonTextContainer");
  reasonContainer.innerHTML = CONFIG.reason.paragraphs
    .map(p => `<p>${p}</p>`)
    .join("");

  // Timeline
  document.getElementById("timelineHeading").textContent = CONFIG.timelineHeading;
  const timelineContainer = document.getElementById("timelineContainer");
  timelineContainer.innerHTML = CONFIG.timeline
    .map(
      item => `
      <div class="timeline-item reveal">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-num">${item.num}</div>
          <div class="timeline-text">${item.text}</div>
        </div>
      </div>
    `
    )
    .join("");

  // Apology
  document.getElementById("apologyHeading").textContent = CONFIG.apology.heading;
  document.getElementById("apologySubtext").innerHTML = CONFIG.apology.subtext.replace(/\n/g, "<br>");

  // Final Message
  document.getElementById("finalHeading").textContent = CONFIG.finalMessage.heading;
  document.getElementById("signatureText").textContent = CONFIG.finalMessage.signature;

  // Final Interaction
  document.getElementById("interactionQuestion").textContent = CONFIG.finalInteraction.question;
  document.getElementById("btnNeedTime").textContent = CONFIG.finalInteraction.needTimeBtn;
  document.getElementById("btnWeAreGood").textContent = CONFIG.finalInteraction.weAreGoodBtn;
}

/* --------------------------------------------------------------------------
   2. Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* --------------------------------------------------------------------------
   3. Vibrant Floating Canvas Particles & Hearts
   -------------------------------------------------------------------------- */
function initAmbientParticles() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particleCount = prefersReduced ? 20 : 55;
  const particles = [];
  const palette = ["#ff758c", "#ff7eb3", "#9d4edd", "#00f2fe", "#ffbe0b", "#ffffff"];

  for (let i = 0; i < particleCount; i++) {
    const isHeart = Math.random() < 0.25;
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      color: palette[Math.floor(Math.random() * palette.length)],
      alpha: Math.random() * 0.6 + 0.25,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      isHeart: isHeart,
      heartSize: Math.random() * 8 + 8,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02
    });
  }

  function drawHeart(x, y, size, color, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    const d = size / 2;
    ctx.moveTo(0, d / 4);
    ctx.quadraticCurveTo(0, -d, -d / 2, -d);
    ctx.quadraticCurveTo(-d, -d, -d, -d / 4);
    ctx.quadraticCurveTo(-d, d / 2, 0, d);
    ctx.quadraticCurveTo(d, d / 2, d, -d / 4);
    ctx.quadraticCurveTo(d, -d, d / 2, -d);
    ctx.quadraticCurveTo(0, -d, 0, d / 4);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      if (p.isHeart) {
        drawHeart(p.x, p.y, p.heartSize, p.color, p.alpha, p.rotation);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* Floating Click Heart & Treats Effect (Sunflowers, Chocolates, Kinder Joy & Hearts) */
function initClickHeartEffect() {
  const emojis = ["🌻", "🍫", "🥚", "💖", "✨", "🌸", "💕", "🍬", "⭐", "❤️"];
  window.addEventListener("click", (e) => {
    // Ignore clicks on buttons/interactive elements to avoid cluttering button feedback
    if (e.target.closest("button, a, .interactive-card")) return;

    const treat = document.createElement("div");
    treat.className = "click-floating-heart";
    treat.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    treat.style.left = `${e.clientX - 14}px`;
    treat.style.top = `${e.clientY - 14}px`;
    document.body.appendChild(treat);

    setTimeout(() => treat.remove(), 1200);
  });
}

/* Kinder Joy Surprise Modal Logic */
function initKinderJoyModal() {
  const openBtn = document.getElementById("openKinderJoyBtn");
  const modal = document.getElementById("kinderJoyModal");
  const closeBtn = document.getElementById("kinderJoyClose");

  if (!openBtn || !modal || !closeBtn) return;

  function openModal() {
    modal.classList.add("active");
    triggerKinderJoyConfetti();
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal();
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function triggerKinderJoyConfetti() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const treats = ["🌻", "🍫", "🥚", "✨", "💖", "🎉", "🍬"];
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.textContent = treats[Math.floor(Math.random() * treats.length)];
    el.style.position = "fixed";
    el.style.left = `${45 + (Math.random() - 0.5) * 30}%`;
    el.style.top = `${50 + (Math.random() - 0.5) * 20}%`;
    el.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
    el.style.pointerEvents = "none";
    el.style.zIndex = "3000";
    el.style.transition = "all 1.6s cubic-bezier(0.16, 1, 0.3, 1)";
    document.body.appendChild(el);

    setTimeout(() => {
      const tx = (Math.random() - 0.5) * 300;
      const ty = -Math.random() * 250 - 80;
      el.style.transform = `translate(${tx}px, ${ty}px) rotate(${(Math.random() - 0.5) * 120}deg) scale(1.3)`;
      el.style.opacity = "0";
    }, 30 * i);

    setTimeout(() => el.remove(), 2000);
  }
}

/* --------------------------------------------------------------------------
   4. Intersection Observer for Smooth Scroll Reveal
   -------------------------------------------------------------------------- */
function initIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. Photo Gallery & Lightbox Modal
   -------------------------------------------------------------------------- */
function initPhotoCarousel() {
  const carousel = document.getElementById("photoCarousel");
  const dotsContainer = document.getElementById("carouselDots");
  if (!carousel) return;

  // Render photo cards
  carousel.innerHTML = CONFIG.photos
    .map(
      (photo, idx) => `
      <div class="photo-card" data-index="${idx}">
        <div class="photo-img-wrapper">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\' viewBox=\\'0 0 400 300\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23151824\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23e2b17a\\' font-family=\\'serif\\' font-size=\\'18\\' text-anchor=\\'middle\\'>Photo ${idx + 1}</text></svg>'">
        </div>
        <div class="photo-caption">${photo.caption}</div>
      </div>
    `
    )
    .join("");

  // Render dots
  dotsContainer.innerHTML = CONFIG.photos
    .map((_, i) => `<div class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></div>`)
    .join("");

  // Update dots on scroll
  const cards = carousel.querySelectorAll(".photo-card");
  const dots = dotsContainer.querySelectorAll(".dot");

  carousel.addEventListener("scroll", () => {
    const scrollPos = carousel.scrollLeft;
    const cardWidth = cards[0]?.offsetWidth || 1;
    const activeIndex = Math.round(scrollPos / (cardWidth + 16));

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  carousel.addEventListener("click", e => {
    const card = e.target.closest(".photo-card");
    if (!card) return;
    const idx = parseInt(card.dataset.index, 10);
    const photo = CONFIG.photos[idx];

    if (photo) {
      lightboxImg.src = photo.src;
      lightboxCaption.textContent = photo.caption;
      lightbox.classList.add("active");
    }
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Cards (Section 4)
   -------------------------------------------------------------------------- */
function initInteractiveCards() {
  const container = document.getElementById("understandCardsContainer");
  if (!container) return;

  container.innerHTML = CONFIG.understandCards
    .map(
      card => `
      <div class="glass-card interactive-card" data-id="${card.id}">
        <div class="interactive-card-header">
          <h3 class="interactive-card-title">${card.title}</h3>
          <div class="interactive-card-icon">↓</div>
        </div>
        <div class="interactive-card-content">
          <p>${card.detail}</p>
        </div>
      </div>
    `
    )
    .join("");

  container.addEventListener("click", e => {
    const card = e.target.closest(".interactive-card");
    if (!card) return;

    const isOpen = card.classList.contains("open");
    // Close others
    container.querySelectorAll(".interactive-card").forEach(c => c.classList.remove("open"));

    if (!isOpen) {
      card.classList.add("open");
    }
  });
}

/* --------------------------------------------------------------------------
   7. Typing Animation (Section 7)
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const container = document.getElementById("typingContainer");
  const section = document.getElementById("sectionFinal");
  if (!container || !section) return;

  let hasStarted = false;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          startTyping();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);

  async function startTyping() {
    container.innerHTML = "";
    const lines = CONFIG.finalMessage.typingLines;

    for (let i = 0; i < lines.length; i++) {
      const lineText = lines[i];
      const p = document.createElement("p");
      p.style.marginBottom = "14px";
      p.style.opacity = "0";
      p.style.transform = "translateY(10px)";
      p.style.transition = "all 0.4s ease";
      container.appendChild(p);

      // Fade line in
      await new Promise(r => setTimeout(r, 100));
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";

      // Type text character by character
      for (let j = 0; j < lineText.length; j++) {
        p.textContent += lineText[j];
        const delay = lineText[j] === "." || lineText[j] === "," ? 120 : 35;
        await new Promise(r => setTimeout(r, delay));
      }

      await new Promise(r => setTimeout(r, 400));
    }

    // Append cursor at the end
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    container.appendChild(cursor);
  }
}

/* --------------------------------------------------------------------------
   8. Easter Egg Interaction (Signature 5 Taps)
   -------------------------------------------------------------------------- */
function initEasterEgg() {
  const signature = document.getElementById("signatureText");
  const toast = document.getElementById("easterEggToast");
  if (!signature || !toast) return;

  toast.textContent = CONFIG.easterEggText;
  let tapCount = 0;
  let resetTimer = null;

  signature.addEventListener("click", () => {
    tapCount++;

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      tapCount = 0;
    }, 2000);

    if (tapCount >= 5) {
      toast.classList.add("active");
      setTimeout(() => {
        toast.classList.remove("active");
      }, 4500);
      tapCount = 0;
    }
  });
}

/* --------------------------------------------------------------------------
   9. Background Audio Player & Web Audio API Synth Fallback
   -------------------------------------------------------------------------- */
function initAudioPlayer() {
  const btn = document.getElementById("musicToggleBtn");
  if (!btn) return;

  const audio = new Audio();
  audio.src = CONFIG.audioUrl;
  audio.loop = true;

  let isPlaying = false;
  let synthContext = null;
  let synthOscillators = [];
  let synthGain = null;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      // Try playing audio file
      audio
        .play()
        .then(() => {
          isPlaying = true;
          btn.classList.add("playing");
        })
        .catch(err => {
          console.log("Audio file playback fallback to Web Audio Ambient Synth", err);
          startAmbientSynth();
          isPlaying = true;
          btn.classList.add("playing");
        });
    } else {
      audio.pause();
      stopAmbientSynth();
      isPlaying = false;
      btn.classList.remove("playing");
    }
  });

  function startAmbientSynth() {
    if (synthContext) {
      synthContext.resume();
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    synthContext = new AudioContext();
    synthGain = synthContext.createGain();
    synthGain.gain.setValueAtTime(0.001, synthContext.currentTime);
    synthGain.gain.exponentialRampToValueAtTime(0.12, synthContext.currentTime + 3);
    synthGain.connect(synthContext.destination);

    // Warm ambient relaxation chord frequencies (F#m7: F#, A, C#, E)
    const freqs = [185.0, 220.0, 277.18, 329.63];

    freqs.forEach(freq => {
      const osc = synthContext.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, synthContext.currentTime);

      const oscGain = synthContext.createGain();
      oscGain.gain.value = 0.25;

      osc.connect(oscGain);
      oscGain.connect(synthGain);
      osc.start();
      synthOscillators.push(osc);
    });
  }

  function stopAmbientSynth() {
    if (synthGain && synthContext) {
      synthGain.gain.exponentialRampToValueAtTime(0.001, synthContext.currentTime + 1);
      setTimeout(() => {
        synthContext.suspend();
      }, 1000);
    }
  }
}

/* --------------------------------------------------------------------------
   10. Final Decision Buttons Interaction
   -------------------------------------------------------------------------- */
function initFinalInteraction() {
  const btnNeedTime = document.getElementById("btnNeedTime");
  const btnWeAreGood = document.getElementById("btnWeAreGood");
  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("resultText");

  if (!btnNeedTime || !btnWeAreGood || !resultCard) return;

  btnNeedTime.addEventListener("click", () => {
    resultText.innerHTML = CONFIG.finalInteraction.needTimeResponse.replace(/\n/g, "<br>");
    resultCard.classList.add("active");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  btnWeAreGood.addEventListener("click", () => {
    resultText.innerHTML = CONFIG.finalInteraction.weAreGoodResponse.replace(/\n/g, "<br>");
    resultCard.classList.add("active");
    triggerSuccessSparkles();
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function triggerSuccessSparkles() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const colors = ["#ff758c", "#ff7eb3", "#9d4edd", "#00f2fe", "#ffbe0b", "#ff2a85"];
  const emojis = ["💖", "✨", "🌸", "🎉", "🌟", "💕", "❤️", "🎈"];

  // Burst 1: Multi-colored glowing particles
  for (let i = 0; i < 45; i++) {
    const sparkle = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 4;
    sparkle.style.position = "fixed";
    sparkle.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
    sparkle.style.top = `${60 + (Math.random() - 0.5) * 20}%`;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.borderRadius = "50%";
    sparkle.style.backgroundColor = color;
    sparkle.style.boxShadow = `0 0 15px ${color}`;
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "3000";
    sparkle.style.transition = "all 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
    document.body.appendChild(sparkle);

    setTimeout(() => {
      const tx = (Math.random() - 0.5) * 400;
      const ty = -Math.random() * 300 - 50;
      sparkle.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
      sparkle.style.opacity = "0";
    }, 20);

    setTimeout(() => sparkle.remove(), 1500);
  }

  // Burst 2: Floating Celebration Emojis
  for (let i = 0; i < 20; i++) {
    const emojiEl = document.createElement("div");
    emojiEl.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emojiEl.style.position = "fixed";
    emojiEl.style.left = `${20 + Math.random() * 60}%`;
    emojiEl.style.top = `${70 + Math.random() * 10}%`;
    emojiEl.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
    emojiEl.style.pointerEvents = "none";
    emojiEl.style.zIndex = "3001";
    emojiEl.style.opacity = "1";
    emojiEl.style.transition = "all 2s cubic-bezier(0.16, 1, 0.3, 1)";
    document.body.appendChild(emojiEl);

    setTimeout(() => {
      const tx = (Math.random() - 0.5) * 180;
      const ty = -Math.random() * 250 - 100;
      emojiEl.style.transform = `translate(${tx}px, ${ty}px) scale(1.4) rotate(${(Math.random() - 0.5) * 60}deg)`;
      emojiEl.style.opacity = "0";
    }, 40 * i);

    setTimeout(() => emojiEl.remove(), 2400);
  }
}
