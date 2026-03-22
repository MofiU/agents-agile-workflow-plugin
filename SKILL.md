# Agile Workflow Skill

让 AI Agent 团队按照敏捷流程工作的技能。

## 架构

```
用户 → @product-owner (primary)
              ↓ Task tool
        sprint-master (hidden)
        developer (hidden)
        qa (hidden)
        code-reviewer (hidden)
```

## 安装

```bash
git clone https://github.com/MofiU/agents-agile-workflow-plugin.git /tmp/agile
cp -r /tmp/agile/agents/*.md ~/.config/opencode/agents/
cp -r /tmp/agile/state/ ~/.config/opencode/
```

## 使用

直接和 PO 对话：

```
你：做一个登录功能
PO：好的，我来安排。

你：查看状态
PO：当前 Sprint #1，进度 3/8

你：有阻塞吗
PO：TASK-003 被阻塞，等待设计稿
```

## Agents

| Agent | 模式 | 说明 |
|-------|------|------|
| product-owner | primary | 唯一入口，和用户对话 |
| sprint-master | subagent (hidden) | Sprint 管理 |
| developer | subagent (hidden) | 开发执行 |
| qa | subagent (hidden) | 测试验证 |
| code-reviewer | subagent (hidden) | 代码评审 |

## 状态

状态文件：`state/kanban.json`

- **Sprint** - 当前 Sprint 信息
- **Board** - 看板列（TODO/IN_PROGRESS/TESTING/DONE）
- **Tickets** - 任务详情

中断后读取 kanban.json 恢复状态。
