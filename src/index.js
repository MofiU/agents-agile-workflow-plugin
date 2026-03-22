export default async function agentsAgileWorkflowPlugin({ project, client, $, directory }) {
  
  return {
    name: 'agents-agile-workflow',
    version: '1.0.0',
    
    'session.idle': async () => {},
    
    'session.start': async ({ sessionId }) => {},
    
    'task.before': async ({ task }) => {
      const agileKeywords = ['sprint', 'backlog', 'standup', 'retro', 'review', 'blocker', 'planning'];
      const content = (task.prompt || '').toLowerCase();
      
      for (const keyword of agileKeywords) {
        if (content.includes(keyword)) {
          const agentMap = {
            'sprint': 'agile-sprint-master',
            'planning': 'agile-sprint-master',
            'backlog': 'agile-product-owner',
            'standup': 'agile-sprint-master',
            'review': 'agile-sprint-master',
            'retro': 'agile-sprint-master',
            'blocker': 'agile-sprint-master',
          };
          return {
            suggestion: {
              type: 'agent',
              agent: agentMap[keyword] || 'agile-sprint-master',
              reason: `Detected "${keyword}"`
            }
          };
        }
      }
    },
    
    'task.after': async ({ task, result }) => {},
  };
}

export const agentList = ['sprint-master', 'product-owner', 'developer-agent', 'qa-agent', 'code-reviewer'];
