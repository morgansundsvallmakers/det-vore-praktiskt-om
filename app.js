import * as THREE from "three";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#viewer");
const fileInput = document.querySelector("#stl-file");
const resetButton = document.querySelector("#reset-view");
const fileName = document.querySelector("#file-name");
const status = document.querySelector("#status");
const emptyState = document.querySelector("#empty-state");
const dropZone = document.querySelector("#drop-zone");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf7f3fb);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100000);
camera.position.set(100, 80, 120);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

scene.add(new THREE.HemisphereLight(0xffffff, 0x5d5268, 2.1));

const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
keyLight.position.set(3, 5, 4);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xcbb7ff, 1.3);
fillLight.position.set(-4, 2, -3);
scene.add(fillLight);

const grid = new THREE.GridHelper(200, 20, 0x9a8aa8, 0xd5cbe0);
grid.position.y = 0;
scene.add(grid);

const loader = new STLLoader();
let model = null;
let modelBounds = null;

function resizeRenderer() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== Math.floor(width * renderer.getPixelRatio()) ||
      canvas.height !== Math.floor(height * renderer.getPixelRatio())) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function frameModel() {
  if (!modelBounds) return;

  const box = modelBounds.clone();
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;

  controls.target.copy(center);

  const fov = THREE.MathUtils.degToRad(camera.fov);
  const distance = (maxDim / (2 * Math.tan(fov / 2))) * 1.6;

  camera.position.set(
    center.x + distance * 0.8,
    center.y + distance * 0.65,
    center.z + distance
  );

  camera.near = Math.max(maxDim / 1000, 0.01);
  camera.far = Math.max(maxDim * 100, 1000);
  camera.updateProjectionMatrix();

  controls.minDistance = maxDim * 0.05;
  controls.maxDistance = maxDim * 20;
  controls.update();

  const gridSize = Math.max(100, Math.ceil(maxDim * 2.5 / 10) * 10);
  scene.remove(grid);
  grid.geometry.dispose();
  grid.geometry = new THREE.GridHelper(gridSize, 20).geometry;
  scene.add(grid);
}

function loadSTL(file) {
  if (!file || !file.name.toLowerCase().endsWith(".stl")) {
    status.textContent = "Välj en fil med ändelsen .stl.";
    return;
  }

  status.textContent = "Läser modellen…";
  fileName.textContent = file.name;

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const geometry = loader.parse(reader.result);
      geometry.computeVertexNormals();

      if (model) {
        scene.remove(model);
        model.geometry.dispose();
        model.material.dispose();
      }

      const material = new THREE.MeshStandardMaterial({
        color: 0x7b68a1,
        roughness: 0.62,
        metalness: 0.04,
        side: THREE.DoubleSide
      });

      model = new THREE.Mesh(geometry, material);

      geometry.computeBoundingBox();
      const originalBox = geometry.boundingBox;
      const center = originalBox.getCenter(new THREE.Vector3());
      model.position.sub(center);

      const centeredBox = new THREE.Box3().setFromObject(model);
      const minY = centeredBox.min.y;
      model.position.y -= minY;

      scene.add(model);

      modelBounds = new THREE.Box3().setFromObject(model);
      frameModel();

      emptyState.classList.add("is-hidden");
      resetButton.disabled = false;
      status.textContent = "Modellen är klar. Vrid, zooma och panorera med mus eller touch.";
    } catch (error) {
      console.error(error);
      status.textContent = "Det gick inte att läsa STL-filen.";
    }
  });

  reader.addEventListener("error", () => {
    status.textContent = "Filen kunde inte läsas.";
  });

  reader.readAsArrayBuffer(file);
}

fileInput.addEventListener("change", () => {
  loadSTL(fileInput.files?.[0]);
});

resetButton.addEventListener("click", frameModel);

for (const eventName of ["dragenter", "dragover"]) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add("is-dragging");
  });
}

for (const eventName of ["dragleave", "drop"]) {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove("is-dragging");
  });
}

dropZone.addEventListener("drop", (event) => {
  loadSTL(event.dataTransfer?.files?.[0]);
});

function animate() {
  requestAnimationFrame(animate);
  resizeRenderer();
  controls.update();
  renderer.render(scene, camera);
}

animate();
