import { SceneManager } from "./SceneManager";
import { CameraManager } from "./CameraManager";
import { RendererManager } from "./RendererManager";
import { Lights } from "./Lights";
import { ObjectModel } from "./ObjectModel";
import { Interaction } from "./Interaction";
import { FloatingParticles } from "./FloatingParticles";

export class Experience {
  sceneManager: SceneManager;
  cameraManager: CameraManager;
  rendererManager: RendererManager;
  lights: Lights;
  objectModel: ObjectModel;
  interaction: Interaction;
  particles: FloatingParticles;

  constructor(canvas: HTMLCanvasElement) {
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager();
    this.rendererManager = new RendererManager(canvas);

    this.lights = new Lights(this.sceneManager.scene);

    this.objectModel = new ObjectModel(this.sceneManager.scene);

    this.particles = new FloatingParticles(this.sceneManager.scene);

    this.interaction = new Interaction(this.objectModel.mesh);

    this.animate();
    this.resize();
  }

  animate() {
    const tick = () => {
      this.objectModel.update();
      this.particles.update();

      this.rendererManager.renderer.render(
        this.sceneManager.scene,
        this.cameraManager.camera
      );

      requestAnimationFrame(tick);
    };

    tick();
  }

  resize() {
    window.addEventListener("resize", () => {
      this.cameraManager.resize();
      this.rendererManager.resize();
    });
  }
}
