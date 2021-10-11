const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
// const domEvents=new THREEx.DomEvents(camera,renderer.domElement);

const geometry = new THREE.BoxGeometry(3, 0.2, 5)
const material = new THREE.MeshBasicMaterial({ color: 0x006400 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 20
// domEvents.addEventListener(camera,'keypress',()=>{
//     camera.position.z=10;
// })

const makeSphere = function (colorVal, r, w, h, x, y, z) {
  const geometry = new THREE.SphereGeometry(r, w, h)
  const material = new THREE.MeshBasicMaterial({ color: colorVal })
  const sphere = new THREE.Mesh(geometry, material)
  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  return sphere
}
const ball_1 = makeSphere(0xff0000, 0.1, 100, 100, -0.5, 0.2, 0)
const ball_2 = makeSphere(0xff0000, 0.1, 100, 100, -0.3, 0.2, 0)
const ball_3 = makeSphere(0xff0000, 0.1, 100, 100, -0.1, 0.2, 0)
const ball_4 = makeSphere(0xff0000, 0.1, 100, 100, 0.1, 0.2, 0)
const ball_5 = makeSphere(0xff0000, 0.1, 100, 100, 0.3, 0.2, 0)
const ball_6 = makeSphere(0xff0000, 0.1, 100, 100, -0.4, 0.2, 0.2)
const ball_7 = makeSphere(0xff0000, 0.1, 100, 100, -0.2, 0.2, 0.2)
const ball_8 = makeSphere(0xff0000, 0.1, 100, 100, 0, 0.2, 0.2)
const ball_9 = makeSphere(0xff0000, 0.1, 100, 100, 0.2, 0.2, 0.2)
const ball_10 = makeSphere(0xff0000, 0.1, 100, 100, -0.3, 0.2, 0.4)
const ball_11 = makeSphere(0xff0000, 0.1, 100, 100, -0.1, 0.2, 0.4)
const ball_12 = makeSphere(0xff0000, 0.1, 100, 100, 0.1, 0.2, 0.4)
const ball_13 = makeSphere(0xff0000, 0.1, 100, 100, -0.2, 0.2, 0.6)
const ball_14 = makeSphere(0xff0000, 0.1, 100, 100, 0, 0.2, 0.6)
const ball_15 = makeSphere(0xff0000, 0.1, 100, 100, -0.1, 0.2, 0.8)
const ball_16 = makeSphere(0xffffff, 0.1, 100, 100, -0.1, 0.2, 1.2)
scene.add(
  cube,
  ball_1,
  ball_2,
  ball_3,
  ball_4,
  ball_5,
  ball_6,
  ball_7,
  ball_8,
  ball_9,
  ball_10,
  ball_11,
  ball_12,
  ball_13,
  ball_14,
  ball_15,
  ball_16
)
const size = 10
const divisions = 10

const gridHelper = new THREE.GridHelper(size, divisions)
scene.add(gridHelper)
renderer.render(scene, camera)

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 38) {
    camera.position.y += 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 40) {
    camera.position.y -= 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 37) {
    camera.position.x -= 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 39) {
    camera.position.x += 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 39) {
    camera.position.x += 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 65) {
    camera.position.z -= 0.1
    renderer.render(scene, camera)
  } else if (e.keyCode == 68) {
    camera.position.z += 0.1
    renderer.render(scene, camera)
  }
})
function animate() {
  requestAnimationFrame(animate)
  if (camera.position.z >= 5) {
    camera.position.z -= 0.1
  }

  renderer.render(scene, camera)
}

console.log(cube.position.x, cube.position.y, cube.position.z)
console.log(camera.position.z)

animate();