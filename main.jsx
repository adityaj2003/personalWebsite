import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BottomBar from './BottomBar';
import Home from './Home';
import Projects from './Projects';
import Chess from './Chess';
import Vision from './Vision';
import Wordle from './Wordle';
import Youtube from './Youtube';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('threejs-container').appendChild(renderer.domElement);

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
            const points1 = [new THREE.Vector3(i, -100, 0), new THREE.Vector3(i, 100, 0)];
            const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
            const line1 = new THREE.Line(geometry1, lineMaterial);
            scene.add(line1);
        }
    }
    for (let i = -100; i < 101; i += 5) {
        const points2 = [new THREE.Vector3(-100, i, 0), new THREE.Vector3(100, i, 0)];
        const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
        const line2 = new THREE.Line(geometry2, lineMaterial);
        scene.add(line2);
    }

    let t = 0;
    let x = 0;
    let y = -200;
    let z = 20;
    let u = 0;

    function animate() {
        y = -50 + 0.5 * t * t;
        z = 10 - t;
        camera.position.set(x, y, z);
        if (z < 1) {
            u += 0.000053;
            if (u < 0.03) {
                t += 0.03 - u;
            }
            camera.lookAt(0, 3000, 0);
        } else {
            t += 0.005;
            camera.lookAt(0, 0, 0);
        }
        composer.render();
    }

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    composer.addPass(bloomPass);
    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return (
    <Router>
    <div id="navigation">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div id="foregroundName">Aditya Jadhav</div>
        </Link>
        <div id="navLinks">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/projects" className="navLink">Projects</Link>
          <a href="/Aditya_Resume.pdf" className="navLink" target="_blank" rel="noopener noreferrer">Resume</a>

        </div>
      </div>
      <div id="threejs-container"></div>
      <div id="bottomBarContainer"></div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/wordle" element={<Wordle />} />  
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/semantic" element={<Semantic />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
      <BottomBar />
    </React.StrictMode>,
    document.getElementById('bottomBarContainer')
  );