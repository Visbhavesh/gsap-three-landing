import * as THREE from "three";

export class Interaction {
  mesh: THREE.Mesh;
  mouseX = 0;
  mouseY = 0;

  constructor(mesh: THREE.Mesh) {
    this.mesh = mesh;

    window.addEventListener("mousemove", (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    this.update();
  }

  update() {
    const animate = () => {
      this.mesh.position.x += (this.mouseX - this.mesh.position.x) * 0.05;
      this.mesh.position.y += (-this.mouseY - this.mesh.position.y) * 0.05;
      requestAnimationFrame(animate);
    };
    animate();
  }
}
