# Agile Workflow Evals

测试套件用于验证 Agent 和工作流是否符合预期行为。

## 结构

```
evals/
├── evals.json    # 测试用例和断言
└── README.md     # 本文件
```

## 运行测试

### 方式 1: OpenCode CLI

```bash
opencode eval run --skill agile-workflow
```

### 方式 2: 手动测试

每个测试用例可以手动运行：

```bash
# 测试 PO-001
opencode --prompt "做一个用户登录功能" @agile-product-owner

# 检查输出是否包含用户故事格式
```

## 测试类型

### Agent 测试

每个 Agent 有 3-4 个测试用例，验证：

- **agile-product-owner**: 需求理解、优先级设置、不做技术决策
- **agile-developer**: TDD、atomic commit、代码规范
- **agile-qa**: 缺陷报告、验收标准覆盖
- **agile-scrum-master**: 站会、看板更新、阻塞升级
- **agile-architect**: trade-offs、ADR、技术债务
- **agile-ui-ux-designer**: 无障碍、移动优先、设计系统
- **agile-devops**: CI/CD、环境一致性、监控
- **agile-security-engineer**: 漏洞修复、最小权限、安全内置
- **agile-data-engineer**: 数据质量、血缘、隐私保护
- **agile-network-engineer**: 高可用、配置文档、监控

### 工作流测试

验证多个 Agent 协作的完整流程：

- `wf-001`: 需求 → 开发 → 测试
- `wf-002`: Sprint 完整周期
- `wf-003`: 缺陷处理
- `wf-004`: 阻塞升级
- `wf-005`: 安全内嵌

## 断言类型

| 类型 | 说明 |
|-----|------|
| `contains` | 输出包含指定内容 |
| `not_contains` | 输出不包含指定内容 |
| `pattern` | 正则匹配 |
| `first_action` | 第一步动作符合预期 |
| `multiple_options` | 提供多个选项 |
| `tradeoffs_explained` | 权衡被解释 |
| `escalates` | 正确升级阻塞 |
| `all_criteria_covered` | 所有验收标准被覆盖 |
| `mobile_first` | 移动优先 |
| `is_automated` | 自动化部署 |
| `principle_of_least_privilege` | 最小权限原则 |
| `no_single_point_of_failure` | 无单点故障 |
| `correct_agent_sequence` | Agent 调用顺序正确 |

## 添加新测试

1. 在 `evals.json` 中添加测试用例
2. 指定 `input`（输入）和 `assertions`（断言）
3. 运行测试验证

## 预期结果

所有测试应该：

- Agent 输出符合其角色定义
- 工作流中 Agent 调用顺序正确
- 断言检查通过率 > 80%
