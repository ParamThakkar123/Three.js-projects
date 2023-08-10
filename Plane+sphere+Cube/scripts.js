import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0xEEEEEE);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

plane.rotation.x = -0.5 * Math.PI;

plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;

scene.add(plane);

const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;

scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;

scene.add(sphere);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

renderer.render(scene, camera);
