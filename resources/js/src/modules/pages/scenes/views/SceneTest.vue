<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import studio from "@theatre/studio";
// Initialize Theatre.js studio
studio.initialize();
import { getProject, types } from "@theatre/core";

const project = getProject("THREE.js x Theatre.js");
const sheet = project.sheet("Animated Scene");

const target = ref();

// Configuración de THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);

// Create and add a cube to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Create and add a Torus Knot to the scene
const torusGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff6347 });
const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torusKnot);

camera.position.z = 5;

// Theatre.js object for the Torus Knot
const torusKnotObj = sheet.object("Torus Knot", {
    rotation: types.compound({
        x: types.number(torusKnot.rotation.x, { range: [-2, 2] }),
        y: types.number(torusKnot.rotation.y, { range: [-2, 2] }),
        z: types.number(torusKnot.rotation.z, { range: [-2, 2] }),
    }),
});

torusKnotObj.onValuesChange((values) => {
    torusKnot.rotation.x = values.rotation.x * Math.PI;
    torusKnot.rotation.y = values.rotation.y * Math.PI;
    torusKnot.rotation.z = values.rotation.z * Math.PI;
});

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

onMounted(() => {
    let container = target.value;
    container.appendChild(renderer.domElement);

    // Asumiendo que el contenedor de Theatre.js tiene una clase específica o puedes agregar una
    let uiContainer = document.querySelector(".theatre-js-ui-container"); // Reemplaza con el selector correcto
    if (uiContainer) {
        uiContainer.style.position = "absolute";
        uiContainer.style.top = "0";
        uiContainer.style.right = "0";
        uiContainer.style.zIndex = "100"; // Asegúrate de que este z-index sea suficientemente alto
    }
    animate();
});
</script>

<template>
    <v-container class="fill-height">
        <v-row justify="center" align="center">
            <v-col cols="12" md="8">
                <div class="canvas-container">
                    <div ref="target" class="canvas" />
                </div>
            </v-col>
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
    width: 100%;
    height: 100%;
    z-index: 5;
}
#theatrejs-studio-root {
    z-index: 2200;
}
</style>
