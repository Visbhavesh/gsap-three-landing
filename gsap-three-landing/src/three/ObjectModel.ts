import * as THREE from "three";

export class ObjectModel {
  mesh: THREE.Mesh;
  time = 0;

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.IcosahedronGeometry(1.2, 1);

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#3b82f6"),
      roughness: 0.25,
      metalness: 0.8,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }

  update() {
    this.time += 0.01;

    // Constant rotation
    this.mesh.rotation.y += 0.003;
    this.mesh.rotation.x += 0.002;

    // Subtle floating motion
    this.mesh.position.y = Math.sin(this.time) * 0.2;
  }

  setColor(hex: string) {
    (this.mesh.material as THREE.MeshStandardMaterial).color.set(hex);
  }
}
