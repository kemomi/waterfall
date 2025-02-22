
class ContentLoader {
    constructor() {
      this.page = 1;
      this.isLoading = false;
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
        rootMargin: '500px'
      });
      this.observer.observe(document.querySelector('.loading-indicator'));
    }
  
    async loadMore() {
      if (this.isLoading) return;
      
      this.isLoading = true;
      try {
        const response = await fetch(`/content/data_${this.page}.json`);
        const data = await response.json();
        this.renderItems(data);
        this.page++;
      } catch (error) {
        console.error('加载失败:', error);
      }
      this.isLoading = false;
    }
  
    renderItems(items) {
      const fragment = document.createDocumentFragment();
      
      items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <div class="model-viewer" 
               data-model="${item.model}"></div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tech-tags">
            ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        `;
        fragment.appendChild(card);
      });
  
      document.getElementById('masonryContainer').appendChild(fragment);
      masonry.positionItems(); // 调用布局更新
    }
  
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMore();
        }
      });
    }
  }
  
  // 初始化加载器
  const loader = new ContentLoader();