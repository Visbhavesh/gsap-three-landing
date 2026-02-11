import * as THREE from "three";

export class Lights {
  constructor(scene: THREE.Scene) {
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(5, 5, 5);

    scene.add(ambient, directional);
  }
}
