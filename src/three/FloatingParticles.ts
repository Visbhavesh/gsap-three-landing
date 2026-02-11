import * as THREE from "three";

export class FloatingParticles {
  group: THREE.Group;
  time = 0;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    const geometry = new THREE.SphereGeometry(0.08, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.5,
      metalness: 0.2,
    });

    for (let i = 0; i < 25; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      this.group.add(mesh);
    }
  }

  update() {
    this.time += 0.005;
    this.group.rotation.y = this.time;
  }
}
