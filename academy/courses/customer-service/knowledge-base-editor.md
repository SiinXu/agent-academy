---
name: customer-service-knowledge-base-editor
description: Agent Academy course for Knowledge base editor (Customer service). Five ordered steps of real, source-linked resources.
version: 2026-10-20
updated_at: 2026-10-20T15:07:01Z
source: https://siinxu.github.io/agent-academy/courses/customer-service/knowledge-base-editor/
---

# Knowledge base editor · Customer service

Goal: Learn to triage, answer and escalate customer requests with written policies, a help-desk MCP if allowed, and a self-check before sending.

Permissions: Read-only by default. Help-desk MCP servers (Zendesk, Freshdesk, Intercom, ...) need API keys and can send replies; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/customer-service/knowledge-base-editor.json
Skill pack: https://siinxu.github.io/agent-academy/packs/customer-service/knowledge-base-editor.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.

- [tutorial] 2_1_support_ticket_agent. A structured output agent demonstrating Pydantic schema-based responses for customer support ticket creation.
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/ai_agent_framework_crash_course/openai_sdk_crash_course/2_structured_output_agent/2_1_support_ticket_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-ai-agent-framework-crash-course-openai-sdk-crash-course-2-st.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [tutorial] 3_1_customer_support_ticket_agent. A tutorial demonstrating how to implement a structured customer support ticketing system using Google's ADK (Agent Development Kit) framework. This example shows how to create type-safe, structured support tickets with p
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/ai_agent_framework_crash_course/google_adk_crash_course/3_structured_output_agent/3_1_customer_support_ticket_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-ai-agent-framework-crash-course-google-adk-crash-course-3-st.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [tutorial] Using tool_choice=required for customer service (OpenAI cookbook). Using Tool Required for Customer Service The ChatCompletion endpoint now includes the ability to specify whether a tool must be called every time, by adding tool_choice='required' as a parameter. This adds an element of 
  source: https://github.com/openai/openai-cookbook/blob/main/examples/Using_tool_required_for_customer_service.ipynb
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/openai-openai-cookbook-examples-using-tool-required-for-customer-service-ipynb.md
  license: MIT
  needs_credentials: false, writes_external: false
- [tutorial] Customer service agent with tool use (Claude cookbook). Creating a Customer Service Agent with Client-Side Tools In this recipe, we'll demonstrate how to create a customer service chatbot using Claude 3 plus client-side tools. The chatbot will be able to look up customer info
  source: https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/customer_service_agent.ipynb
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-claude-cookbooks-tool-use-customer-service-agent-ipynb.md
  license: MIT
  needs_credentials: false, writes_external: false

## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [plugin] Customer Support plugin (Anthropic knowledge-work-plugins). A customer support plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Provides ticket triage, escalation management, 
  source: https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-customer-support.md
  license: Apache-2.0
  install: claude plugin marketplace add anthropics/knowledge-work-plugins
  needs_credentials: false, writes_external: false
- [template] FAQT. FAQ-library first-line info@ assistant.
  source: https://botsdots.site/templates/faqt
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/lLH9eC9XM05hWxSQgL6qj
  needs_credentials: false, writes_external: false
- [template] Ticket Desk. Flags urgent support tickets, drafts replies from your docs, and turns gaps into help-article drafts; never sends
  source: https://botsdots.site/templates/ticket-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/47iWfw0I5xxt6uPqKj52G
  needs_credentials: false, writes_external: false
- [template] Call FAQ Miner. Keep enablement current from real calls. Tracks questions, timestamps answers, and links back to the source recording.
  source: https://botsdots.site/templates/call-faq-miner
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/s297976f738dc390d23df
  needs_credentials: false, writes_external: false
- [template] Customer Support Desk. Sorts your support inbox, drafts replies in your voice, builds an FAQ from repeat questions, and watches for churn signals
  source: https://botsdots.site/templates/customer-support-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/SeAX2ThEH5Qu8GloOB17C
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] kb-article. Draft a knowledge base article from a resolved issue or common question. Use when a ticket resolution is worth documenting for self-service, the same question keeps coming up, a workaround needs to be published, or a kno
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/kb-article/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-kb-article-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill kb-article
  needs_credentials: false, writes_external: false
- [system-prompt] Customer Complaint Reply System. Designed for businesses and support teams that need calm, professional responses to unhappy customers without escalating tension. This prompt generates structured complaint replies that acknowledge the issue, maintain br
  source: https://prompts.chat/prompts/cmp3infd60004kv04amyiigtj_customer-complaint-reply-system
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-customer-complaint-reply-system.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [skill] churn-prevention. When the user wants to reduce churn, build cancellation flows, set up save offers, recover failed payments, or implement retention strategies. Also use when the user mentions 'churn,' 'cancel flow,' 'offboarding,' 'save 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/churn-prevention/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-churn-prevention-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill churn-prevention
  needs_credentials: false, writes_external: false
- [skill] customer-escalation. Package an escalation for engineering, product, or leadership with full context. Use when a bug needs engineering attention beyond normal support, multiple customers report the same issue, a customer is threatening to ch
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/customer-escalation/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-customer-escalation-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill customer-escalation
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] ai_customer_support_agent. This Streamlit app implements an AI-powered customer support agent for synthetic data generated using GPT-4o. The agent uses OpenAI's GPT-4o model and maintains a memory of past interactions using the Mem0 library with Q
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/single_agent_apps/ai_customer_support_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-single-agent-apps-ai-customer-support-age.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [case] OpenAI customer service agents demo (Agents SDK). This repository contains a demo of a Customer Service interface built on top of the [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/).
  source: https://github.com/openai/openai-cs-agents-demo
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/openai-openai-cs-agents-demo.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] Zendesk MCP server. A Model Context Protocol server for Zendesk.
  source: https://github.com/reminia/zendesk-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/reminia-zendesk-mcp-server.md
  license: Apache-2.0
  install: see README (uv / Claude Desktop config); needs Zendesk API token
  needs_credentials: true, writes_external: false
- [mcp] Freshdesk MCP server. A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that provides AI assistants with structured access to the [Freshdesk](https://www.freshdesk.com) customer support platform — tickets, contacts, co
  source: https://github.com/WYRE-AI/freshdesk-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/wyre-ai-freshdesk-mcp.md
  license: Apache-2.0 (LICENSE file; GitHub API reports NOASSERTION)
  install: MCP Registry: io.github.WYRE-AI/freshdesk-mcp; needs Freshdesk API key
  needs_credentials: true, writes_external: false

## Step 5: Self-check

Go through the checklist and report the result to your owner.

- [benchmark] tau2-bench (customer-service agent benchmark). τ-bench family benchmark (MIT) that simulates user–agent conversations in customer-service domains (retail, airline, telecom, banking) with tools, policies and automatic task evaluation.
  source: https://github.com/sierra-research/tau2-bench
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/sierra-research-tau2-bench.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] customer-escalation. Package an escalation for engineering, product, or leadership with full context. Use when a bug needs engineering attention beyond normal support, multiple customers report the same issue, a customer is threatening to ch
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/customer-escalation/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-customer-escalation-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill customer-escalation
  needs_credentials: false, writes_external: false

### Checklist

- [ ] Every reply answers the customer's actual question in the first two sentences.
- [ ] Refunds, cancellations and account changes follow the written policy; anything outside it is escalated, not improvised.
- [ ] Tickets are tagged with category and priority (P1-P4) before they are answered.
- [ ] No customer data, order numbers or emails are pasted into third-party tools that are not approved.
- [ ] Sending a reply, closing a ticket or issuing a refund through an MCP server happens only after the owner approved that tool.
- [ ] Knowledge-base articles cite the ticket pattern they came from and are reviewed before publishing.
- [ ] Escalations include a one-paragraph summary, what was tried, and what the customer was told.


Report back to your owner: what you learned (5 bullets), which items you installed (none without approval), and the checklist results.
