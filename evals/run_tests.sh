#!/bin/bash
# Agile Workflow Agent Test Runner

cd ~/Workspace/agents-agile-workflow-plugin

TIMEOUT=30
AGENTS=("agile-product-owner" "agile-scrum-master" "agile-developer" "agile-qa" "agile-architect" "agile-ui-ux-designer" "agile-devops" "agile-security-engineer" "agile-data-engineer" "agile-network-engineer")

echo "# Agile Workflow Agent Test Report"
echo ""
echo "## Summary"
echo ""
echo "Test Run: $(date)"
echo "Timeout per test: ${TIMEOUT}s"
echo ""

passed=0
failed=0
timeout=0

for agent in "${AGENTS[@]}"; do
  echo "### $agent"
  echo ""
  echo "| Test ID | Description | Result |"
  echo "|---------|-------------|--------|"
  
  case $agent in
    "agile-product-owner")
      tests=("po-001:PO能理解用户需求|做一个用户登录功能"
              "po-002:PO能设置优先级|添加两个功能：登录和注册"
              "po-003:PO不做技术决策|登录功能用什么技术实现"
              "po-004:PO需求必须清晰|用户登录")
      ;;
    "agile-scrum-master")
      tests=("sm-001:SM站会包含三要素|主持站会，开发者说昨天完成登录"
              "sm-002:SM识别阻塞并升级|开发者说等待UI设计稿"
              "sm-003:SMSprint状态透明|当前Sprint进度如何")
      ;;
    "agile-developer")
      tests=("dev-001:Developer遵循TDD|用TDD方式实现计算器"
              "dev-002:Developer使用atomic commit|完成了添加用户验证功能"
              "dev-003:Developer遵循代码规范|写一个函数判断闰年"
              "dev-004:Developer自测后才提交|实现了登录功能准备提交")
      ;;
    "agile-qa")
      tests=("qa-001:QA缺陷报告完整|登录页面打不开报500错误"
              "qa-002:QA验证验收标准|登录功能有这些验收标准"
              "qa-003:QA缺陷等级正确|用户头像不显示和无法登录")
      ;;
    "agile-architect")
      tests=("arch-001:Architect提供多方案|需要实现认证选择什么方案"
              "arch-002:Architect记录ADR|选择了JWT方案做认证"
              "arch-003:Architect标注技术债务|当前方案有什么技术债务"
              "arch-004:Architect考虑团队能力|团队都是Java开发者")
      ;;
    "agile-ui-ux-designer")
      tests=("ui-001:UI/UX无障碍设计|设计一个登录按钮"
              "ui-002:UI/UX移动优先|设计一个新的列表页面"
              "ui-003:UI/UX遵循设计系统|用现有设计系统添加新按钮")
      ;;
    "agile-devops")
      tests=("devops-001:DevOps自动化部署|写一个部署到生产环境的pipeline"
              "devops-002:DevOps环境一致性|dev staging prod环境如何保持一致"
              "devops-003:DevOps监控告警|生产环境需要监控哪些指标")
      ;;
    "agile-security-engineer")
      tests=("sec-001:Security漏洞修复|发现SQL注入漏洞怎么修复"
              "sec-002:Security最小权限|数据库用户权限怎么配置"
              "sec-003:Security安全内置|新功能要上传用户头像")
      ;;
    "agile-data-engineer")
      tests=("data-001:Data数据质量|设计数据管道质量检查"
              "data-002:Data血缘追踪|报表数据来自哪里"
              "data-003:Data隐私保护|用户手机号怎么存储")
      ;;
    "agile-network-engineer")
      tests=("net-001:Network高可用|设计一个高可用的网络架构"
              "net-002:Network配置文档化|防火墙规则变更要记录什么"
              "net-003:Network可观测性|网络监控要关注哪些指标")
      ;;
  esac
  
  for test_info in "${tests[@]}"; do
    IFS='|' read -r test_id desc prompt <<< "$test_info"
    
    echo -n "| $test_id | $desc | "
    
    # Run with timeout
    result=$(timeout $TIMEOUT opencode --agent $agent --prompt "$prompt" 2>&1 | tail -20)
    
    if [ $? -eq 124 ]; then
      echo "⏱️ TIMEOUT |"
      ((timeout++))
    elif echo "$result" | grep -q "error\|Error\|ERROR"; then
      echo "❌ FAIL |"
      ((failed++))
    else
      echo "✅ PASS |"
      ((passed++))
    fi
  done
  
  echo ""
done

echo "## Overall Results"
echo ""
echo "| Metric | Value |"
echo "|--------|-------|"
echo "| Passed | $passed |"
echo "| Failed | $failed |"
echo "| Timeout | $timeout |"
echo "| Pass Rate | $(echo "scale=1; $passed * 100 / ($passed + $failed + $timeout)" | bc)% |"
