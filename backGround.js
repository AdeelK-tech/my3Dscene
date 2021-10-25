// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// )

// const renderer = new THREE.WebGLRenderer({ antialias: true })
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)
// const domEvents=new THREEx.DomEvents(camera,renderer.domElement);
const bg_geometry = new THREE.BoxGeometry(
  window.innerWidth,
  window.innerHeight,
  0
)
const bg_material = new THREE.MeshBasicMaterial({ color: 0xffd59a })
const bg = new THREE.Mesh(bg_geometry, bg_material)
bg.translateZ(-7)
// scene.add(bg);
// renderer.render(scene,camera);

function makeCurve(rotation, clockwise, x, y) {
  const curve = new THREE.EllipseCurve(
    x,
    y, // ax, aY
    1,
    1.5, // xRadius, yRadius

    0,
    Math.PI / 2, // aStartAngle, aEndAngle
    clockwise, // aClockwise
    rotation // aRotation
  )

  const points = curve.getPoints(50)
  const curve_geometry = new THREE.BufferGeometry().setFromPoints(points)

  const curve_material = new THREE.LineBasicMaterial({ color: 0xff0000 })

  // Create the final object to add to the scene
  const ellipse = new THREE.Line(curve_geometry, curve_material)
  ellipse.translateZ(-7)
  return ellipse
}
function makePattern() {
  const curve1 = makeCurve(-1.02, false, 0.1, -0.345)
  const curve2 = makeCurve(2.115, false, 1.9, -0.41)
  const group1 = new THREE.Group()
  group1.add(curve1, curve2)
  return group1
}
const p1 = makePattern()
p1.rotation.z = 0.01
const p2 = makePattern()
p2.rotation.z = 0.99
p2.position.x = 0.1
p2.position.y = -1
const group = new THREE.Group()
group.add(p1, p2)
