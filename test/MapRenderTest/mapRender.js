import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.128.0-qS9Si1DbCh3Y4U3kxP8d/mode=imports/optimized/three.js';
        
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

// we want to build a map based on a dnd map texture that will get loaded in

// create the render function
// animate function to render the scene every animation frame
function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}
  

// lets set up the scene and camera for this
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100);

// set up a renderer
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

// orbital controls to look at our ground plane
const controls = new OrbitControls(camera, canvas);
controls.target.set(0,0,0);
controls.update();

// now we want a plane that we can project a dnd map onto
const texture = new THREE.TextureLoader().load('Tavern.jpg');
const planeGeo = new THREE.PlaneGeometry( 24, 24, 1, 1 );
const planeMaterial = new THREE.MeshPhongMaterial( {map: texture} );
const plane = new THREE.Mesh(planeGeo, planeMaterial);
plane.rotation.x = Math.PI*-0.5;
plane.position.set(0,0,0);

scene.add( plane );

controls.update();

animate();