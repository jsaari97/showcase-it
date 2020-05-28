import * as React from "react";
import * as THREE from "three";

export const useShowcaseCanvas = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const scene = React.useRef(new THREE.Scene());
  const camera = React.useRef(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );
  const renderer = React.useRef(new THREE.WebGLRenderer());
  const meshes = React.useRef<THREE.Object3D[]>([]);

  const animate = React.useCallback(() => {
    window.requestAnimationFrame(animate);

    // animate
    for (let i = 0; i < meshes.current.length; i++) {
      const mesh = meshes.current[i];
      mesh.rotation.x += 0.015;
      mesh.rotation.y += 0.01;
    }

    renderer.current.render(scene.current, camera.current);
  }, []);

  // init
  React.useEffect(() => {
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    meshes.current = [...meshes.current, cube];
    scene.current.add(cube);

    camera.current.position.z = 5;
  }, []);

  React.useEffect(() => {
    animate();
  }, [animate]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.appendChild(renderer.current.domElement);
    }
  }, [ref]);

  return [ref];
};
