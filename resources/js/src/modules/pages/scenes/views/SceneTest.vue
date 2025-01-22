<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { getProject, types } from "@theatre/core";

import studio from "@theatre/studio";
import "@theatre/core";

// Inicializa Theatre.js studio de inmediato
studio.initialize();
const project = getProject("THREE.js x Theatre.js");
const sheet = project.sheet("Escena Principal");

const target = ref();

// Arreglando vuetify vs zindex vs theatre
// Función para inicializar el MutationObserver
function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (
                    node.nodeType === 1 &&
                    node.id === "theatrejs-studio-root"
                ) {
                    node.style.zIndex = 6200; // Asegúrate de que este valor es suficientemente alto
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    return observer;
}

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

onMounted(() => {
    let container = target.value;
    container.appendChild(renderer.domElement);
    // Ajustes de la cámara
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    animate();

    const observer = setupMutationObserver();

    // Limpiar el observer cuando el componente se desmonte
    onUnmounted(() => {
        observer.disconnect();
    });
});

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(1300, 550);

/**
 * Renderer
 */

// CREANDO LA ESCENA CON THREE JS
// Configuración de THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);

// Create and add a cube to the scene
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xf00 });
// cubeMaterial.color = new THREE.Color(0x049ef4);
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// Create and add a Torus Knot to the scene
const torusGeometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff6347 });
torusMaterial.roughness = 0.5;
const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
torusKnot.castShadow = true;
torusKnot.receiveShadow = true;
scene.add(torusKnot);

// Create a Theatre.js object with the props you want to
// animate
const torusKnotObj = sheet.object("Torus Knot", {
    // Note that the rotation is in radians
    // (full rotation: 2 * Math.PI)
    rotation: types.compound({
        x: types.number(torusKnot.rotation.x, { range: [-2, 2] }),
        y: types.number(torusKnot.rotation.y, { range: [-2, 2] }),
        z: types.number(torusKnot.rotation.z, { range: [-2, 2] }),
    }),
});

torusKnotObj.onValuesChange((values) => {
    const { x, y, z } = values.rotation;

    torusKnot.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
});

/*
 * Lights
 */

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Point light
const directionalLight = new THREE.DirectionalLight(0xff0000, 30, 0, 1);
directionalLight.position.y = 20;
directionalLight.position.z = 20;

directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.top = 20;
directionalLight.shadow.camera.right = 20;
directionalLight.shadow.camera.bottom = -20;
directionalLight.shadow.camera.left = -20;

scene.add(directionalLight);

// RectAreaLight
const rectAreaLight = new THREE.RectAreaLight(0xff0, 1, 50, 50);

rectAreaLight.position.z = 10;
rectAreaLight.position.y = -40;
rectAreaLight.position.x = -20;
rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0));

scene.add(rectAreaLight);
/*
 * Lights
 */

// Modelo cargado
const loader = new GLTFLoader();
var temp = null;
loader.load(
    "/beer.glb",
    function (gltf) {
        console.log(gltf.scene.children);
        const beerMaterial = new THREE.MeshStandardMaterial({ color: 0xf00 });
        beerMaterial.color = new THREE.Color(0x049ef4);
        // const obj = new THREE.Mesh(gltf.scene.children["mesh"], beerMaterial);
        temp = gltf.scene.children[0];
        // temp.translateY(5);
        scene.add(temp);
    },
    undefined,
    function (error) {
        console.error("An error happened while loading the model:", error);
    },
);
</script>

<template>
    <theatre-controls />
    <v-container class="fill-height">
        <v-row justify="center" align="center">
            <div class="canvas-container">
                <div ref="target" class="canvas" />
            </div>
        </v-row>
    </v-container>
</template>

<style>
.canvas-container {
    position: relative;
    width: 100%;
    height: 500px;
}

.canvas {
    width: 90%;
    height: 100%;
    z-index: 5;
}

#theatrejs-studio-root {
    margin-top: 5%;
    position: absolute;
    z-index: 3200;
}
</style>
