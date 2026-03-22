export default async function agentsAgileWorkflowPlugin({ project, client, $, directory }) {
  
  const commandMap = [
    { cmd: /^(sprint|冲刺)\s*(start|开始)/i, agent: 'sprint-master' },
    { cmd: /^(sprint|冲刺)\s*(standup|站会)/i, agent: 'sprint-master' },
    { cmd: /^(sprint|冲刺)\s*(status|状态)/i, agent: 'sprint-master' },
    { cmd: /^(task|task|任务)\s*(add|new|添加)/i, agent: 'product-owner' },
    { cmd: /^(task|task|任务)\s*(assign|分配)/i, agent: 'sprint-master' },
    { cmd: /^(task|task|任务)\s*(start|开始)/i, agent: 'developer-agent' },
    { cmd: /^(task|task|任务)\s*(complete|done|完成)/i, agent: 'developer-agent' },
    { cmd: /^(task|task|任务)\s*(test|测试)/i, agent: 'qa-agent' },
    { cmd: /^(pr|pull request|代码评审)/i, agent: 'code-reviewer' },
    { cmd: /^(blocker|阻塞)/i, agent: 'sprint-master' },
    { cmd: /^(backlog|待办)/i, agent: 'product-owner' },
    { cmd: /^(sprint|冲刺)\s*(review|评审)/i, agent: 'sprint-master' },
    { cmd: /^(sprint|冲刺)\s*(retro|回顾)/i, agent: 'sprint-master' },
  ];

  const keywordMap = {
    'sprint': 'sprint-master',
    'standup': 'sprint-master',
    '站会': 'sprint-master',
    'planning': 'sprint-master',
    'blocker': 'sprint-master',
    '阻塞': 'sprint-master',
    'backlog': 'product-owner',
    '待办': 'product-owner',
    'priority': 'product-owner',
    '优先级': 'product-owner',
    'develop': 'developer-agent',
    '开发': 'developer-agent',
    'test': 'qa-agent',
    '测试': 'qa-agent',
    'review': 'code-reviewer',
    'pr': 'code-reviewer',
  };

  return {
    name: 'agents-agile-workflow',
    version: '1.0.0',

    'session.start': async () => ({
      message: `🤖 **Agile Workflow 已激活**

命令:
- @ sprint start / standup / status
- @ task add / assign / complete
- @ blocker
- @ pr review

直接说需求也行，我会路由到合适的 Agent。`
    }),

    'task.before': async ({ task }) => {
      const text = (task.prompt || '').toLowerCase();

      for (const { cmd, agent } of commandMap) {
        if (cmd.test(text)) {
          return { suggestion: { type: 'agent', agent, reason: `命令匹配` } };
        }
      }

      for (const [keyword, agent] of Object.entries(keywordMap)) {
        if (text.includes(keyword)) {
          return { suggestion: { type: 'agent', agent, reason: `关键字 "${keyword}"` } };
        }
      }

      return null;
    },
  };
}
