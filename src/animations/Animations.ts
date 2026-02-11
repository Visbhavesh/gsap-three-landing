import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(
  mesh: THREE.Mesh,
  camera: THREE.PerspectiveCamera,
  setColor: (color: string) => void
) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  // Intro Timeline
  const intro = gsap.timeline();

  intro
    .from(mesh.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.4,
      ease: "expo.out",
    })
    .from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    }, "-=0.8")
    .from(".hero-subtitle", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.7")
    .from(".cta", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.6");

  // Scroll-driven camera dolly + tilt
  gsap.to(camera.position, {
    z: 3,
    x: 1,
    scrollTrigger: {
      trigger: ".content",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
  });

  gsap.to(camera.rotation, {
    y: -0.3,
    scrollTrigger: {
      trigger: ".content",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Object dramatic spin
  gsap.to(mesh.rotation, {
    x: Math.PI * 2,
    y: Math.PI * 4,
    scrollTrigger: {
      trigger: ".content",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });

  // Color morph effect
  ScrollTrigger.create({
    trigger: ".content",
    start: "top center",
    onEnter: () => setColor("#f43f5e"),
    onLeaveBack: () => setColor("#3b82f6"),
  });

  // Background gradient animation
  gsap.to("body", {
    background: "radial-gradient(circle at bottom, #1e293b, #000000)",
    scrollTrigger: {
      trigger: ".content",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
}
