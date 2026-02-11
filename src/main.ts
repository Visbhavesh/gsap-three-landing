import "./style.css";import gsap from "gsap";

import { Experience } from "./three/Experience";
import { initAnimations } from "./animations/Animations";

const canvas = document.getElementById("webgl") as HTMLCanvasElement;

// Create Experience
const experience = new Experience(canvas);

// Initialize GSAP Animations
initAnimations(
  experience.objectModel.mesh,
  experience.cameraManager.camera,
  experience.objectModel.setColor.bind(experience.objectModel)
);

// ===============================
// Magnetic CTA Button Interaction
// ===============================

const cta = document.querySelector(".cta") as HTMLElement;

if (cta) {
  cta.addEventListener("mousemove", (e: MouseEvent) => {
    const rect = cta.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cta, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  cta.addEventListener("mouseleave", () => {
    gsap.to(cta, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  });
}
