export default async ({ project, client, $, directory }) => {
  return {
    name: 'agile-workflow',
    version: '1.0.0',

    'session.created': async ({ sessionId }) => ({
      message: `🤖 **Agile Workflow 插件已加载**

可用 Agent：
- @product-owner - 产品负责人（主对话入口）
- @architect - 架构师
- @ui-ux-designer - UI/UX 设计师
- @developer - 开发工程师
- @qa - 测试工程师
- @devops - 运维工程师
- @scrum-master - Scrum Master

状态文件：~/.config/opencode/state/kanban.json`
    }),
  };
};
