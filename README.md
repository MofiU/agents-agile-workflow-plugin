# Agents Agile Workflow Plugin

AI 团队的 Sprint 协作插件。

## 安装

### 1. 安装 Agent 定义

```bash
git clone https://github.com/MofiU/agents-agile-workflow-plugin.git /tmp/agile
cp -r /tmp/agile/agents/*.md ~/.config/opencode/agents/
```

### 2. 安装插件

复制 `plugins/agile-workflow.js` 到 `~/.config/opencode/plugins/`:

```bash
cp /tmp/agile/plugins/agile-workflow.js ~/.config/opencode/plugins/
```

## 使用

直接说话，插件自动路由到合适的 Agent：

| 你说 | 路由到 |
|-----|-------|
| "开始 Sprint" | @sprint-master |
| "站会" | @sprint-master |
| "添加任务" | @product-owner |
| "开始开发" | @developer-agent |
| "测试" | @qa-agent |
| "评审 PR" | @code-reviewer |

## Agents

| Agent | 职责 |
|-------|------|
| sprint-master | 主持 Sprint、站会、跟踪状态 |
| product-owner | 定义任务、设置优先级 |
| developer-agent | 开发执行、TDD |
| qa-agent | 测试验证 |
| code-reviewer | 代码评审 |

## 工作流程

```
计划 → 执行(TDD) → 测试 → 评审 → 合并
```

## License

MIT
