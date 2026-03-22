# Sprint Protocol

AI 团队协作协议。

---

## 角色

| 角色 | 职责 |
|-----|------|
| Sprint Master | 主持 Sprint、跟踪状态、协调 |
| Product Owner | 定义任务优先级 |
| Developer | 执行开发 |
| QA | 验证质量 |
| Code Reviewer | 评审代码 |

---

## 状态

**Sprint**: BACKLOG → PLANNING → IN_PROGRESS → REVIEW → DONE
**Task**: TODO → IN_PROGRESS → TESTING → DONE

---

## 命令

| 命令 | 执行者 | 说明 |
|-----|-------|------|
| @ sprint start | Sprint Master | 开始新 Sprint |
| @ sprint standup | Sprint Master | 站会 |
| @ sprint status | Sprint Master | 查看状态 |
| @ task add | Product Owner | 添加任务 |
| @ task assign | Sprint Master | 分配任务 |
| @ task complete | Developer | 完成任务 |
| @ blocker | Sprint Master | 报告阻塞 |
| @ pr review | Code Reviewer | 评审代码 |

---

## 交接格式

**Developer → QA**:
```
任务: TASK-001
变更: [file list]
备注: [any notes]
```

**Developer → Code Reviewer**:
```
PR: [url]
任务: TASK-001
自评: [self review notes]
```
