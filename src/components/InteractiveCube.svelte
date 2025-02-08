<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
  
    let canvas;
    let renderer, scene, camera, cube;
    let autoRotate = true;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
  
    onMount(async () => {
      // Scene setup
      scene = new THREE.Scene();
      // Adjusted field of view (FOV) from 75 to 50 for better perspective
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        canvas,
        alpha: true
      });
      renderer.setSize(300, 300);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      // Create materials for each face of the cube
      const textureLoader = new THREE.TextureLoader();
      const materials = [];
      
      const loadTexture = () => {
        return new Promise((resolve) => {
          textureLoader.load('/assets/me.jpg', (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            
            for (let i = 0; i < 6; i++) {
              materials.push(new THREE.MeshBasicMaterial({ 
                map: texture,
                transparent: true
              }));
            }
            resolve();
          });
        });
      };

      await loadTexture();
  
      // Increased cube size from 2 to 3.5 units
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);
  
      // Moved camera closer to the cube (from 5 to 4)
      camera.position.z = 4;
  
      const handleStart = (event) => {
        isDragging = true;
        autoRotate = false;
        const clientX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;
        previousMousePosition = { x: clientX, y: clientY };
      };

      const handleMove = (event) => {
        if (!isDragging) return;
        
        const clientX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;
        
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;
    
        cube.rotation.y += deltaX * 0.01;
        cube.rotation.x += deltaY * 0.01;
    
        previousMousePosition = { x: clientX, y: clientY };
      };

      const handleEnd = () => {
        isDragging = false;
        setTimeout(() => autoRotate = true, 2000);
      };

      // Mouse events
      canvas.addEventListener('mousedown', handleStart);
      canvas.addEventListener('mousemove', handleMove);
      canvas.addEventListener('mouseup', handleEnd);
      canvas.addEventListener('mouseleave', handleEnd);

      // Touch events
      canvas.addEventListener('touchstart', handleStart);
      canvas.addEventListener('touchmove', handleMove);
      canvas.addEventListener('touchend', handleEnd);
      canvas.addEventListener('touchcancel', handleEnd);
  
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        if (autoRotate && !isDragging) {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
      }
      animate();
    });
  
    onDestroy(() => {
      if (renderer) {
        renderer.dispose();
        if (canvas) {
          canvas.removeEventListener('mousedown', handleStart);
          canvas.removeEventListener('mousemove', handleMove);
          canvas.removeEventListener('mouseup', handleEnd);
          canvas.removeEventListener('mouseleave', handleEnd);
          canvas.removeEventListener('touchstart', handleStart);
          canvas.removeEventListener('touchmove', handleMove);
          canvas.removeEventListener('touchend', handleEnd);
          canvas.removeEventListener('touchcancel', handleEnd);
        }
      }
    });
</script>

<canvas bind:this={canvas} class="cube-canvas"> </canvas>

<style>
    .cube-canvas {
        width: 300px;
        height: 300px;
        cursor: grab;
    }

    .cube-canvas:active {
        cursor: grabbing;
    }
</style>