
// 动态光标追踪效果
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  
  // 3D模型加载器
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.model-viewer').forEach(viewer => {
      const modelSrc = viewer.dataset.model;
      if (modelSrc) {
        loadGLBModel(viewer, modelSrc);
      }
    });
  });
  
  async function loadGLBModel(container, src) {
    // 实际开发中需接入Three.js加载器
    container.innerHTML = `<div class="model-loading">加载3D模型中...</div>`;
    // 示例伪代码：
    // const loader = new THREE.GLTFLoader();
    // const gltf = await loader.loadAsync(src);
    // scene.add(gltf.scene);
  }