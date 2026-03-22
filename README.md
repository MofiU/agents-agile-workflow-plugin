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

或者发布到 npm 后：

```json
{
  "plugin": [
    "@agile-workflow/agents"
  ]
}
```

安装 Agent 定义：

```bash
mkdir -p ~/.config/opencode/state
cp state/kanban.json ~/.config/opencode/state/
cp agents/*.md ~/.config/opencode/agents/
```

## 架构

```
用户 → @product-owner (primary) ← 唯一入口
              ↓ Task tool
        architect (hidden)      - 架构设计
        ui-ux-designer (hidden) - UI/UX 设计
        developer (hidden)       - 开发
        qa (hidden)              - 测试
        code-reviewer (hidden)   - 评审
        devops (hidden)          - 运维
        scrum-master (hidden)    - Sprint 管理
```

## Agents

| Agent | 模式 | 职责 |
|-------|------|------|
| product-owner | primary | 和用户对话，内部编排团队 |
| architect | subagent (hidden) | 系统架构设计 |
| ui-ux-designer | subagent (hidden) | 界面和体验设计 |
| developer | subagent (hidden) | 功能开发 |
| qa | subagent (hidden) | 测试验证 |
| code-reviewer | subagent (hidden) | 代码评审 |
| devops | subagent (hidden) | 部署运维 |
| scrum-master | subagent (hidden) | Sprint 管理 |

## 使用

和 PO 对话即可：

```
你：做一个登录功能
PO：好的，我来安排。

你：查看状态
PO：当前 Sprint #1，进度 3/8

你：有阻塞吗
PO：TASK-003 被阻塞，等待设计稿
```

## 状态管理

状态文件：`~/.config/opencode/state/kanban.json`

看板列：BACKLOG → TODO → IN_PROGRESS → TESTING → REVIEW → DONE

中断后读取 kanban.json 自动恢复。

## License

MIT
