import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async ({ project, client, $, directory }) => {
  const agentsDir = join(directory, 'agents');
  const stateDir = join(directory, 'state');
  const stateFile = join(stateDir, 'kanban.json');

  const installAgents = async () => {
    const pluginAgentsDir = join(__dirname, '..', 'agents');
    const pluginStateFile = join(__dirname, '..', 'state', 'kanban.json');

    if (!existsSync(agentsDir)) {
      mkdirSync(agentsDir, { recursive: true });
    }

    if (existsSync(pluginAgentsDir)) {
      cpSync(pluginAgentsDir, agentsDir, { recursive: true });
    }

    if (!existsSync(stateDir)) {
      mkdirSync(stateDir, { recursive: true });
    }

    if (existsSync(pluginStateFile) && !existsSync(stateFile)) {
      writeFileSync(stateFile, readFileSync(pluginStateFile));
    }
  };

  return {
    name: 'agile-workflow',
    version: '1.0.0',

    'installation.updated': async ({ version }) => {
      await installAgents();
    },

    'session.created': async ({ sessionId }) => {
      await installAgents();

      return {
        message: `🤖 **Agile Workflow 插件已加载**

可用 Agent：
- @agile-product-owner - 产品负责人（主对话入口）
- @agile-scrum-master - Scrum Master
- @agile-developer - 开发
- @agile-qa - 测试
- @agile-architect - 架构
- @agile-ui-ux-designer - UI/UX 设计
- @agile-devops - 运维
- @agile-security-engineer - 安全
- @agile-data-engineer - 数据
- @agile-network-engineer - 网络

状态文件：${stateFile}`
      };
    },
  };
};
