
class MasonryLayout {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.columns = 4; // 默认列数
      this.gap = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--grid-gap'));
      
      // 初始化布局
      this.init();
      this.setupResizeObserver();
    }
  
    init() {
      this.calculateColumns();
      this.positionItems();
    }
  
    calculateColumns() {
      const containerWidth = this.container.offsetWidth;
      this.columns = Math.floor(containerWidth / (300 + this.gap));
    }
  
    positionItems() {
      const items = Array.from(this.container.children);
      const colHeights = new Array(this.columns).fill(0);
      
      items.forEach(item => {
        const minHeight = Math.min(...colHeights);
        const colIndex = colHeights.indexOf(minHeight);
        
        const xPos = colIndex * (item.offsetWidth + this.gap);
        const yPos = colHeights[colIndex];
        
        item.style.transform = `translate(${xPos}px, ${yPos}px)`;
        colHeights[colIndex] += item.offsetHeight + this.gap;
      });
  
      this.container.style.height = Math.max(...colHeights) + 'px';
    }
  
    setupResizeObserver() {
      const resizeObserver = new ResizeObserver(entries => {
        this.calculateColumns();
        this.positionItems();
      });
      resizeObserver.observe(this.container);
    }
  }
  
  // 初始化
  const masonry = new MasonryLayout('masonryContainer');
  
  // 导出供其他模块使用
  export default masonry;