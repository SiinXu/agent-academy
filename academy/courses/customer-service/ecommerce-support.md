---
name: customer-service-ecommerce-support
description: Agent Academy course for E-commerce support (Customer service). Five ordered steps of real, source-linked resources.
version: 2026-10-29
updated_at: 2026-10-29T16:56:22Z
source: https://siinxu.github.io/agent-academy/courses/customer-service/ecommerce-support/
---

# E-commerce support · Customer service

Goal: Learn to triage, answer and escalate customer requests with written policies, a help-desk MCP if allowed, and a self-check before sending.

Permissions: Read-only by default. Help-desk MCP servers (Zendesk, Freshdesk, Intercom, ...) need API keys and can send replies; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/customer-service/ecommerce-support.json
Skill pack: https://siinxu.github.io/agent-academy/packs/customer-service/ecommerce-support.zip
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

- [plugin] ADK retail plugin. The **Retail AI Plugin** bundles two end-to-end Google Cloud retail skills for AI coding assistants (Gemini CLI, Claude Code, Antigravity, Codex) following the [Google Agent Plugins v1.0.0 specification][spec] (`plugin.j
  source: https://github.com/google/adk-recipes/tree/main/plugins/retail
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/google-adk-recipes-plugins-retail.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [template] Claims Finder. Digs through your inbox receipts for refunds, settlements and unclaimed money
  source: https://botsdots.site/templates/claims-finder
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/6VeOVsZzMkrKElrPi_kOR
  needs_credentials: false, writes_external: false
- [template] Customer Care. Handles refunds and disputes, drafts support messages
  source: https://botsdots.site/templates/customer-care
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/NIjIeUSpzESYUiJTmrAvm
  needs_credentials: false, writes_external: true
- [template] Review Desk. Drafts review replies in your shop's own voice, star-sorted, with you approving each one
  source: https://botsdots.site/templates/review-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/MuKDTS9Fq0UySwClmE8wc
  needs_credentials: false, writes_external: false
- [template] Ledger. A read-only personal finance watchdog that watches your bank, cards, and bills email, flags odd charges and upcoming bills, chases refunds.
  source: https://botsdots.site/templates/ledger-eiic
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/eIicxWVI6dT6IOHrUDO8h
  needs_credentials: false, writes_external: true
- [template] NoShipSherlock. Lost Package Desk for a store: tracks missing, stalled, and delivered-but-not-received shipments, runs carrier playbooks, and never files or refunds
  source: https://botsdots.site/templates/noshipsherlock
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/Lll9_CtLlBh_nEOWVQfMY
  needs_credentials: false, writes_external: false
- [template] Shopify Store Pulse. Every weekday morning, sends a short pulse from your Shopify store: yesterday's orders, open refunds or returns that need attention.
  source: https://botsdots.site/templates/shopify-store-pulse
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/kBSc1eU-xj4uQzFkjK7z_
  needs_credentials: true, writes_external: true
- [template] Money Finder. Finds money you're owed, like class action settlements, FTC refunds, lost 401(k)s, and forgotten balances in your email, and files honest claims.
  source: https://botsdots.site/templates/money-finder-xjfl
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/XjfLn_WyeGXzwHjPLL6jW
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] retail-product-search. Creates product search agents with semantic search and RAG on Google Cloud (Vector Search on Gemini Enterprise Agent Platform, BigQuery, embeddings). Use when the user wants to "build a product search agent", "create an 
  source: https://github.com/google/adk-recipes/blob/main/plugins/retail/skills/product-search/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/google-adk-recipes-plugins-retail-skills-product-search-skill-md.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [system-prompt] tau2 retail agent policy. At the beginning of the conversation, you have to authenticate the user identity by locating their user id via email, or via name + zip code. This has to be done even when the user already provides the user id.
  source: https://github.com/sierra-research/tau2-bench/blob/main/data/tau2/domains/retail/policy.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/sierra-research-tau2-bench-data-tau2-domains-retail-policy-md.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] retail-virtual-tryon. Creates virtual try-on agents supporting image and video (catwalk animation) try-ons on Google Cloud (Gemini image models and Veo on Gemini Enterprise Agent Platform). Handles resource setup, user photo uploading, image/
  source: https://github.com/google/adk-recipes/blob/main/plugins/retail/skills/virtual-tryon/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/google-adk-recipes-plugins-retail-skills-virtual-tryon.md
  license: Apache-2.0
  install: npx skills add google/adk-recipes --skill virtual-tryon
  needs_credentials: false, writes_external: false
- [system-prompt] tau2-bench airline agent policy. The current time is 2024-05-15 15:00:00 EST.
  source: https://github.com/sierra-research/tau2-bench/blob/main/data/tau2/domains/airline/policy.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/sierra-research-tau2-bench-data-tau2-domains-airline-policy.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] tau2-bench telecom agent policy. The current time is 2025-02-25 12:08:00 EST.
  source: https://github.com/sierra-research/tau2-bench/blob/main/data/tau2/domains/telecom/main_policy.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/sierra-research-tau2-bench-data-tau2-domains-telecom-main-policy.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] Legal Document Generator Agent Role. Generates comprehensive legal and policy documents (ToS, Privacy Policy, Cookie Policy, Community Guidelines, Content Policy, Refund Policy) tailored to a product or service.
  source: https://prompts.chat/prompts/cmmx2ya3s000hic04l0i60mil_legal-document-generator-agent-role
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-legal-document-generator-agent-role.md
  license: CC0-1.0
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
- [system-prompt] Faulty Purchase Refund and Dispute Escalation Plan (JSON). Describe a faulty product or an undelivered service and get a strict JSON plan: a case summary with the remedy to ask for, a timeline, an evidence checklist, deadlines to confirm officially, an escalation ladder from sel
  source: https://prompts.chat/prompts/cmvrrz2qk0005jt07g328hl54_faulty-purchase-refund-and-dispute-escalation-plan-json
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-faulty-purchase-refund-and-dispute-escalation-plan-json.md
  license: CC0-1.0
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
