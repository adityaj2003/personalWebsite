import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const spotLights = [];
for (let i = -3; i <= 3; i++) {
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(i, -5, 0);
    spotLights.push(spotLight);
    scene.add(spotLight);
}

const dirLight = new THREE.DirectionalLight(0xffffff, 100);
dirLight.position.set(1, 1, 1).normalize();
dirLight.castShadow = true;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 500;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLights = [
    new THREE.PointLight(0xffaaff, 2, 50),
    new THREE.PointLight(0xaaffff, 2, 50),
    new THREE.PointLight(0xaaffaa, 2, 50),
];

pointLights[0].position.set(-5, 0, 5);
pointLights[1].position.set(5, 0, 5);
pointLights[2].position.set(0, 5, 5);

pointLights.forEach(light => scene.add(light));

camera.position.set(0, -20, 20);
camera.lookAt(0, 0, 0);

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
for (let i = -100; i < 101; i += 5) {
    if (i !== 0) {
        const points1 = [];
        points1.push(new THREE.Vector3(i, -100, 0));
        points1.push(new THREE.Vector3(i, 100, 0));
        const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
        const line1 = new THREE.Line(geometry1, lineMaterial);
        scene.add(line1);
    }
}
for (let i = -100; i < 101; i += 5) {
    const points2 = [];
    points2.push(new THREE.Vector3(-100, i, 0));
    points2.push(new THREE.Vector3(100, i, 0));
    const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
    const line2 = new THREE.Line(geometry2, lineMaterial);
    scene.add(line2);
}

const cubeTextureLoader = new THREE.CubeTextureLoader();
const envMap = cubeTextureLoader.load([
    'path/to/posx.jpg', 'path/to/negx.jpg',
    'path/to/posy.jpg', 'path/to/negy.jpg',
    'path/to/posz.jpg', 'path/to/negz.jpg'
]);

let t = 0;
let x = 0;
let y = -200;
let z = 20;
let u = 0;
let animationEnded = false;

const tilesContainer = document.getElementById('tilesContainer');

window.addEventListener('wheel', (event) => {
    if (!animationEnded) {
        t += event.deltaY * 0.001;  // 1000x slower
        t = Math.max(0, t);  // Prevent t from going negative
    }
});

function animate() {
    if (!animationEnded) {
        y = -50 + 0.5 * t * t;
        z = 10 - t;
        camera.position.set(x, y, z);

        if (z <= 0) {
            animationEnded = true;
            camera.position.set(0, 0, 0);
            camera.lookAt(0, 0, 0);
            
            // Hide lights
            spotLights.forEach(light => {
                const lightShrinkInterval = setInterval(() => {
                    light.intensity -= 0.05;
                    if (light.intensity <= 0) {
                        clearInterval(lightShrinkInterval);
                        scene.remove(light);
                    }
                }, 50);
            });

            return;
        } else if (z < 1) {
            u += 0.000053;
            if (u < 0.03) {
                t += 0.03 - u;
            }
        }

        camera.lookAt(0, 0, 0);
        composer.render();
    }
}

// Post-processing
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
);
composer.addPass(bloomPass);

renderer.setAnimationLoop(animate);
