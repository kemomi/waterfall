<!--
 * @Author: kemomi 
 * @Date: 2025-02-19 20:29:28
 * @LastEditors: kemomi 
 * @LastEditTime: 2025-02-22 15:29:32
 * @FilePath: github.com/kemomi/waterfall/README.md
-->
### 关键实现说明：
1. **响应式布局**：通过`ResizeObserver`监听容器变化，自动计算列数
2. **性能优化**：使用`createDocumentFragment`进行批量DOM操作
3. **动态交互**：CSS变量实时追踪鼠标位置实现光效
4. **模块化架构**：每个类负责单一功能（布局/加载/动画）
5. **渐进增强**：优先加载基础内容，再逐步加载3D资源

实际开发中需要：
1. 安装Three.js等依赖：`npm install three @types/three`
2. 配置Vite构建工具处理GLB等资源类型
3. 添加错误处理逻辑和加载状态提示
4. 实现完整的3D模型加载器