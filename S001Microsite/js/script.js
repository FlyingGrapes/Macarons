
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        tabContents[index].classList.add('active');
    });
    });
});

document.addEventListener("DOMContentLoaded", function () {
$("#reflections").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    gradients: true,
    elevation: 50,
});

});


// 3js - cursoe
// cursor3d.js
// Set up the scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create a glowing sphere cursor
const geometry = new THREE.SphereGeometry(0.3, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
const cursorSphere = new THREE.Mesh(geometry, material);
scene.add(cursorSphere);

// Mouse movement listener
let mouse = { x: 0, y: 0 };
document.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  // Project mouse to 3D space
  cursorSphere.position.x = mouse.x * 10;
  cursorSphere.position.y = mouse.y * 5;

  renderer.render(scene, camera);
}

animate();

