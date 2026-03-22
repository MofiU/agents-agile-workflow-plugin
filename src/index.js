export default async ({ project, client, $, directory }) => {
  return {
    name: 'agile-workflow',
    version: '1.0.0',

    'session.created': async ({ sessionId }) => ({
      message: `🤖 **Agile Workflow 插件已加载**

可用 Agent：
- @product-owner - 产品负责人（主对话入口）
- @scrum-master - Scrum Master
- @developer - 开发
- @qa - 测试
- @architect - 架构
- @ui-ux-designer - UI/UX 设计
- @devops - 运维
- @security-engineer - 安全
- @data-engineer - 数据
- @network-engineer - 网络

状态文件：~/.config/opencode/state/kanban.json`
    }),
  };
};
