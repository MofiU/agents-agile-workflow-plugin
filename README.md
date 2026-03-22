# Agents Agile Workflow Plugin

Multi-agent sprint orchestration for autonomous AI teams in OpenCode.

## Installation

### Step 1: Install the plugin

Add to your `opencode.json`:

```json
{
  "plugin": [
    "agents-agile-workflow"
  ]
}
```

Or use git URL:

```json
{
  "plugin": [
    "git+https://github.com/MofiU/agents-agile-workflow-plugin.git"
  ]
}
```

### Step 2: Copy agent files

Agents must be installed separately:

```bash
# Clone the repo
git clone https://github.com/MofiU/agents-agile-workflow-plugin.git /tmp/agile-workflow-plugin

# Copy agent files to OpenCode agents directory
cp /tmp/agile-workflow/agents/*.md ~/.config/opencode/agents/
```

## Usage

After installation, activate agents in conversation:

```
@agile-sprint-master  # Sprint orchestration
@agile-product-owner  # Goal & priority definition  
@agile-developer-agent  # Task execution with TDD
@agile-qa-agent  # Quality verification
@agile-code-reviewer  # PR reviews
```

## Plugin Hooks

The plugin provides automatic agent suggestions:

- Detects agile keywords in tasks
- Suggests appropriate agent automatically
- Tracks sprint workflow state

## Agents

| Agent | File | Responsibility |
|-------|------|----------------|
| **Sprint Master** | `agents/sprint-master.md` | Orchestrates sprints, tracks metrics |
| **Product Owner** | `agents/product-owner.md` | Defines goals, prioritizes |
| **Developer Agent** | `agents/developer-agent.md` | Executes tasks, TDD |
| **QA Agent** | `agents/qa-agent.md` | Verifies quality |
| **Code Reviewer** | `agents/code-reviewer.md` | Reviews PRs |

## License

MIT
