# Agile Workflow Plugin

AI 团队的敏捷工作流插件。基于 Multi-Agent 编排，支持中断恢复。

## 架构

```
用户 → @product-owner (primary) ← 唯一入口
              ↓ Task tool
        sprint-master (hidden)
        developer (hidden)
        qa (hidden)
        code-reviewer (hidden)
```

**只有 PO 和用户对话**，其他 Agent 输出在 PO 内部消化，不污染上下文。

## 安装

```bash
git clone https://github.com/MofiU/agents-agile-workflow-plugin.git /tmp/agile
cp -r /tmp/agile/agents/*.md ~/.config/opencode/agents/
mkdir -p ~/.config/opencode/state
cp /tmp/agile/state/kanban.json ~/.config/opencode/state/
```

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

## Agents

| Agent | 模式 | 职责 |
|-------|------|------|
| product-owner | primary | 和用户对话，内部编排 |
| sprint-master | subagent (hidden) | Sprint 管理、任务分配 |
| developer | subagent (hidden) | 功能开发 |
| qa | subagent (hidden) | 测试验证 |
| code-reviewer | subagent (hidden) | 代码评审 |

## 状态管理

状态文件：`~/.config/opencode/state/kanban.json`

- Sprint 信息
- 看板状态
- Ticket 详情

中断后读取 kanban.json 自动恢复。

## 工作流

```
用户 → PO → Sprint Master 分配任务
           → Developer 开发
           → QA 测试
           → Code Reviewer 评审
           → PO 汇报结果
```

## License

MIT
