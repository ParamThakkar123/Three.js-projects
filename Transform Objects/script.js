import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({color: 0xff0000})
//const mesh = new THREE.Mesh(geometry, material)
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1
//scene.add(mesh)


//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
// can also write
// mesh.scale.set(2, 0.5, 0.5)

//mesh.rotation.y = 0.5

//console.log(mesh.position.length())
//console.log(mesh.position.normalize())
//console.log(mesh.position.length())

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.x = -2
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube2.position.x = 2
group.add(cube3);

group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
//console.log(mesh.position.distanceTo(camera.position))

//camera.lookAt(new THREE.Vector3(0, 0, 0))
//camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)