// Find the latest version by visiting https://cdn.skypack.dev/three
        

// import * as THREE from 'three';
// import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

const THREE = require("three");

// const OrbitControls = require("https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js").OrbitControls;

// animate function to render the scene every animation frame
function animate() {
	requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
}

// set up the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

// set up renderer
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({
	canvas
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

// orbital controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, -5, 0);
controls.update();

// set up a cube, material and add it to the scene
const cube_geometry = new THREE.BoxGeometry(4, 4, 4);
const cube_material = new THREE.MeshPhongMaterial( { color: '#8AC' } );
const cube = new THREE.Mesh( cube_geometry, cube_material );
cube.position.set(0, -0.5, 0);
cube.castShadow = true;
cube.receiveShadow = false;
scene.add( cube );

// set up a plane to show shadows
// Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: '#b5b5b5' } )
            const plane = new THREE.Mesh( planeGeometry, planeMaterial );
            plane.receiveShadow = true;
            plane.rotation.x = Math.PI*-0.5;
            plane.position.set(0, -5, 0);
            scene.add( plane );

            // Create a DirectionalLight and turn on shadows for the light
            const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
            light.position.set( 5, 8, 3 );
            light.rotation.x = 20;
            light.castShadow = true;
            scene.add( light );
            scene.add( light.target );

            // Set up shadow properties for the light
            light.shadow.mapSize.width = 512;
            light.shadow.mapSize.height = 512;
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 500;
            light.target.position.set(0, -5, 0);

            // add a hemisphere light to brighten up the scene
            const skyColor = 0x618aff;  // light blue
            const groundColor = 0x616d8f;  // brownish orange
            const intensity = 1;
            const light2 = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light2);

            //Create a helper for the shadow camera (turn on to see the light path)
            /*
            const helper = new THREE.CameraHelper( light.shadow.camera );
            scene.add( helper );
            */
            // pin point cameral position
            camera.position.z = 5;
            camera.position.y = 0;
            //camera.position.x = -5;

            // update camera orbital so that cube is renedered without having to 
            // click first.
            controls.update();

            // run the animate function
            animate();
