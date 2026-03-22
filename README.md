# Agile Workflow Plugin

AI 团队的敏捷工作流插件。基于 Multi-Agent 编排，支持中断恢复。

## 安装

在 `opencode.json` 中添加：

```json
{
  "plugin": [
    "git+https://github.com/MofiU/agents-agile-workflow-plugin.git"
  ]
}
```

插件会自动安装 Agent 定义和状态文件。

## 团队角色

| Agent | 模式 | 职责 |
|-------|------|------|
| agile-product-owner | primary | 和用户对话，产品待办 |
| agile-scrum-master | subagent | Sprint 推进 |
| agile-developer | subagent | 开发 |
| agile-qa | subagent | 测试 |
| agile-architect | subagent | 架构 |
| agile-ui-ux-designer | subagent | 界面设计 |
| agile-devops | subagent | 运维部署 |
| agile-security-engineer | subagent | 安全 |
| agile-data-engineer | subagent | 数据工程 |
| agile-network-engineer | subagent | 网络 |

## 状态管理

状态文件：`~/.config/opencode/state/kanban.json`

看板列：BACKLOG → TODO → IN_PROGRESS → TESTING → REVIEW → DONE

中断后读取 kanban.json 自动恢复。

## License

MIT
