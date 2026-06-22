import * as THREE from "three";

// 1. create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#0f0f0f");

// 2. add the camera to the scene
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

// 3. create and add a cube object to the scene
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 64);
const material = new THREE.MeshPhongMaterial({
  color: "#468f85",
  emissive: "#468f85",
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. add lighting to the scene
const light = new THREE.SpotLight(0x9cdba6, 250, 0, Math.PI / 2, 0.1, 1);
light.position.set(10, 10, 10);
scene.add(light);

// 5. set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. animate the scene
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
  renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);
