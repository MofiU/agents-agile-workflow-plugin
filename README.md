# Agents Agile Workflow Plugin

AI 团队的 Sprint 协作插件。

## 安装

### Step 1: 配置插件

编辑 `~/.config/opencode/opencode.json`:

```json
{
  "plugin": [
    "git+https://github.com/MofiU/agents-agile-workflow-plugin.git"
  ]
}
```

### Step 2: 安装 Agent 定义

```bash
git clone https://github.com/MofiU/agents-agile-workflow-plugin.git /tmp/agile-plugin
cp /tmp/agile-plugin/agents/*.md ~/.config/opencode/agents/
```

## 使用

直接说话，插件自动路由到合适的 Agent：

| 你说 | 路由到 |
|-----|-------|
| "开始一个 Sprint" | sprint-master |
| "开个站会" | sprint-master |
| "添加一个任务" | product-owner |
| "开始开发 XXX" | developer-agent |
| "测试一下" | qa-agent |
| "评审这个 PR" | code-reviewer |
| "有阻塞" | sprint-master |

## 角色

| Agent | 职责 |
|-------|------|
| sprint-master | 主持 Sprint、跟踪状态、协调 |
| product-owner | 定义任务、优先级 |
| developer-agent | 开发执行 |
| qa-agent | 测试验证 |
| code-reviewer | 代码评审 |

## 协议

协作协议在 `protocols/sprint-protocol.md`。

## License

MIT
