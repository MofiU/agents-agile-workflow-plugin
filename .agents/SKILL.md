# Agile Workflow Skill

让 AI Agent 团队按照敏捷流程工作的技能。

## 工作流程

```
用户命令 → Skill 路由 → 合适的 Agent → 协作完成
```

## 路由规则

你说的话 → 激活的 Agent：

| 你说 | 激活 |
|-----|------|
| "开始 Sprint" | @sprint-master |
| "站会" | @sprint-master |
| "添加任务" | @product-owner |
| "开始开发" | @developer-agent |
| "测试" | @qa-agent |
| "评审 PR" | @code-reviewer |
| "有阻塞" | @sprint-master |

## 协作流程

### Sprint 周期

1. **计划** - Sprint Master + Product Owner 确定目标和任务
2. **执行** - Developer 开发，QA 持续测试
3. **评审** - 展示成果，收集反馈
4. **回顾** - 总结改进点

### 任务流程

```
TODO → IN_PROGRESS → TESTING → DONE
         ↓
       BLOCKED (遇到问题时)
```

## Agent 激活方式

在对话中直接 @ 他们的名字：

```
@sprint-master   开始 Sprint、站会、报告状态
@product-owner   添加任务、设置优先级
@developer-agent 实现功能、TDD
@qa-agent        测试验证、报告缺陷
@code-reviewer   评审代码、提建议
```

## 交接规则

- Developer 完成开发 → 通知 QA 测试
- QA 测试通过 → 通知 Code Reviewer 评审
- Code Reviewer 批准 → 合并
- 任何时候遇到阻塞 → 通知 Sprint Master

## 示例对话

```
你: 我们开始一个新 Sprint 吧
Sprint Master: 好的，我来主持计划会议。@product-owner，请讲解这个 Sprint 的目标。

你: 添加一个登录功能的任务
Product Owner: 已添加 TASK-001: 实现用户登录
              优先级: 高
              验收标准: 能用用户名密码登录

你: 开始做 TASK-001
Developer Agent: 我来做。开始实现...

Developer Agent: 完成了，通知 QA 测试
QA Agent: 测试中... 通过！

Code Reviewer: 代码评审通过，可以合并。
```

## 质量标准

- 每个任务有明确的验收标准
- 开发遵循 TDD（测试驱动开发）
- 代码评审通过后才能合并
- 阻塞问题立即升级给 Sprint Master
