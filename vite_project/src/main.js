import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

// scene
const scene = new THREE.Scene();

scene.background = new THREE.Color("#5f5f5f");

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;
scene.add(camera);

// object
const dodecahedronGeometry = new THREE.DodecahedronGeometry(1, 0);
const dodecahedronMaterial = new THREE.MeshLambertMaterial({
  color: 0x468f85,
  emissive: 0x468f85,
});
const dodecahedronMesh = new THREE.Mesh(
  dodecahedronGeometry,
  dodecahedronMaterial,
);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({
  color: 0x468f85,
  emissive: 0x468f85,
});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.y = -2;

scene.add(dodecahedronMesh);
scene.add(boxMesh);

// light
const light = new THREE.SpotLight(0xffffff, 1000, 0, Math.PI / 2, 0.1, 1);
light.position.set(10, 10, 10);
scene.add(light);

//renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio));
renderer.render(scene, camera);

// add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; //smoother
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;

// animations
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  dodecahedronMesh.rotation.x += 0.01;
  dodecahedronMesh.rotation.y += 0.01;

  boxMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
