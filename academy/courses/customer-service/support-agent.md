---
name: customer-service-support-agent
description: Agent Academy course for Support agent (Customer service). Five ordered steps of real, source-linked resources.
version: 2026-10-21
updated_at: 2026-10-21T00:40:03Z
source: https://siinxu.github.io/agent-academy/courses/customer-service/support-agent/
---

# Support agent · Customer service

Goal: Learn to triage, answer and escalate customer requests with written policies, a help-desk MCP if allowed, and a self-check before sending.

Permissions: Read-only by default. Help-desk MCP servers (Zendesk, Freshdesk, Intercom, ...) need API keys and can send replies; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/customer-service/support-agent.json
Skill pack: https://siinxu.github.io/agent-academy/packs/customer-service/support-agent.zip
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
- [awesome-list] 500 AI Agents Projects (includes customer service use cases). Curated collection of AI agent use cases across industries (incl. Customer Service, E-commerce) with links to open-source implementations, e.g. a LangGraph customer-support agent tutorial.
  source: https://github.com/ashishpatel26/500-AI-Agents-Projects
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/ashishpatel26-500-ai-agents-projects.md
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
- [template] Product Support Inbox Assistant. Helps you find and draft answers to product questions. Never sends emails without you.
  source: https://botsdots.site/templates/product-support-inbox-assistant
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/Rw8d83KAzTYQWBAtAscin
  needs_credentials: false, writes_external: false
- [template] Colombia Move. Bilingual help desk for the Colombia Move marketplace in Spanish or English
  source: https://botsdots.site/templates/colombia-move
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/mWxeafjXItbC0_VcpSwqm
  needs_credentials: false, writes_external: false
- [template] Customer Service. Customer service desk that drafts replies from your policy voice
  source: https://botsdots.site/templates/customer-service
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/zC_-D00Dam5jmHf0t62l_
  needs_credentials: false, writes_external: false
- [template] X Signal Prospector. Sits on hold with customer support so you do not have to
  source: https://botsdots.site/templates/grok-customer-support
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/1PSI6qQln1PowM5reA_8L
  needs_credentials: true, writes_external: false
- [template] XChat 고객센터 봇. 24/7 customer support bot that answers X Chat inquiries from the docs and URLs you choose, and can take a voice call when the customer wants one
  source: https://botsdots.site/templates/xchat-ec6g
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/Ec6g2olzVFKq60cC-Jy5h
  needs_credentials: false, writes_external: false
- [template] Customer Support Idiot Buffer. Calls customer support for you via a voice bridge and steers mid-call from chat
  source: https://botsdots.site/templates/customer-support-idiot-buffer
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/PMCHyvumlOdCFNRifTDJW
  needs_credentials: true, writes_external: false
- [template] Family WordPress helpdesk. A help desk for the relative who runs the family WordPress site
  source: https://botsdots.site/templates/family-wordpress-helpdesk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/7ySyCp6OurH0hlcKMAm_b
  needs_credentials: false, writes_external: false
- [template] Grok Customer Support. Eggbot-pruned Twilio to Grok Voice bridge that calls customer support for you
  source: https://botsdots.site/templates/grok-customer-support-bizp
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/BiZPnYmSfN63bjCVpn1mf
  needs_credentials: false, writes_external: false
- [template] Holly Helpdesk. Runs the support inbox and help desk as a frontline agent
  source: https://botsdots.site/templates/holly-helpdesk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/sIoeE87fILU5CzptPF29K
  needs_credentials: false, writes_external: false
- [template] HubSpot Helper. A HubSpot help desk that answers CRM, workflow, reporting and API questions with numbered steps checked against live HubSpot docs.
  source: https://botsdots.site/templates/hubspot-helper
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/YELCIJ_5UrbwjP-4pm_Fx
  needs_credentials: true, writes_external: false
- [template] Review Reply Drafter. Draft replies to public reviews from paste.
  source: https://botsdots.site/templates/review-reply-drafter
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/RFZWV8682hykNKF8UJf44
  needs_credentials: false, writes_external: false
- [template] Support Reply Drafter. Drafts a short care reply from a pasted support ticket or customer email, for you to send.
  source: https://botsdots.site/templates/support-reply-drafter
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/ghYcuP9N4ymIYZeCZPoWO
  needs_credentials: false, writes_external: false
- [template] Google Business Profile Manager. You run one Google Business Profile for a local business: draft posts and review replies, audit the listing, clear Needs Attention → 100% Completeness,
  source: https://botsdots.site/templates/google-business-profile-manager
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/IylsiGKgYwXYOOZ99_CwT
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] customer-research. Multi-source research on a customer question or topic with source attribution. Use when a customer asks something you need to look up, investigating whether a bug has been reported before, checking what was previously to
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/customer-research/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-customer-research-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill customer-research
  needs_credentials: false, writes_external: false
- [skill] draft-response. Draft a professional customer-facing response tailored to the situation and relationship. Use when answering a product question, responding to an escalation or outage, delivering bad news like a delay or won't-fix, decli
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/draft-response/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-draft-response-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill draft-response
  needs_credentials: false, writes_external: false
- [skill] ticket-triage. Triage and prioritize a support ticket or customer issue. Use when a new ticket comes in and needs categorization, assigning P1-P4 priority, deciding which team should handle it, or checking whether it's a duplicate or k
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/customer-support/skills/ticket-triage/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-customer-support-skills-ticket-triage-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill ticket-triage
  needs_credentials: false, writes_external: false
- [system-prompt] customer-support. Elite AI-powered customer support specialist mastering conversational AI, automated ticketing, sentiment analysis, and omnichannel support experiences. Integrates modern support tools, chatbot platforms, and CX optimizat
  source: https://github.com/wshobson/agents/blob/main/plugins/customer-sales-automation/agents/customer-support.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-customer-sales-automation-agents-customer-support.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] AI Customer Support Specialist. Act as an AI Customer Support Specialist to assist users with inquiries and provide solutions efficiently.
  source: https://prompts.chat/prompts/cmj81buvg0004tw0q1in0rkal_ai-customer-support-specialist
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-ai-customer-support-specialist.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Customer Support Reply Drafter (Empathy + Policy). Drafts support replies that stay warm, accurate, and policy-safe.
  source: https://prompts.chat/prompts/cmuvobkhb0004l307voj326w7_customer-support-reply-drafter-empathy-policy
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-customer-support-reply-drafter-empathy-policy.md
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
- [case] Customer Support Voice Agent. An OpenAI SDK powered customer support agent application that delivers voice-powered responses to questions about your knowledge base using OpenAI's GPT-4o and TTS capabilities. The system crawls through documentation we
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/voice_ai_agents/customer_support_voice_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-voice-ai-agents-customer-support-voice-agent.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [case] Customer Service. from __future__ import annotations as _annotations
  source: https://github.com/openai/openai-agents-python/tree/main/examples/customer_service
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/openai-openai-agents-python-examples-customer-service-main-py.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] io.github.codespar/mcp-shopify. MCP server for Shopify — Admin REST API (orders, products, customers, inventory, fulfillments)
  source: https://github.com/codespar/mcp-dev-latam
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-codespar-mcp-shopify.md
  license: MIT
  install: npx -y @codespar/mcp-shopify
  needs_credentials: true, writes_external: false
- [mcp] HubSpot MCP. Every HubSpot Sales Hub feature, plus offline cross-object queries, property-change-history
  source: https://github.com/Servosity/msp-skills
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-servosity-hubspot-mcp.md
  license: Apache-2.0
  needs_credentials: true, writes_external: false
- [mcp] com.mcparmory/shopify-admin. Manage products, orders, customers, inventory, and store configuration
  source: https://github.com/mcparmory/registry
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-mcparmory-shopify-admin.md
  license: MIT
  install: uvx mcparmory-shopify-admin
  needs_credentials: false, writes_external: true
- [mcp] io.github.MuhammadTalhaMT/intercom. Relays messages between two Claude Code sessions on different machines using the Channels API
  source: https://github.com/MuhammadTalhaMT/claude-intercom
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-muhammadtalhamt-intercom.md
  license: MIT
  install: npx -y claude-intercom
  needs_credentials: true, writes_external: false
- [mcp] io.github.fruggr/zendesk-mcp-server. Draft, translate and update Help Center articles and manage Zendesk tickets from your AI assistant.
  source: https://github.com/fruggr/zendesk-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-fruggr-zendesk-mcp-server.md
  license: MIT
  install: npx -y @fruggr/zendesk-mcp-server
  needs_credentials: true, writes_external: true
- [mcp] Zendesk. Zendesk MCP server for Model Context Protocol hosts
  source: https://github.com/mindstone/mcp-servers
  license: NOASSERTION
  install: npx -y @mindstone/mcp-server-zendesk
  needs_credentials: true, writes_external: false
- [mcp] HasData Shopify. The public product catalogue and collections of any Shopify storefront, as structured JSON.
  source: https://github.com/HasData/shopify-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-hasdata-shopify.md
  license: MIT
  install: npx -y @hasdata/shopify-mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.michaelrice/zendesk-mcp. Zendesk MCP server for Claude Code and other MCP clients
  source: https://github.com/michaelrice/zendesk-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-michaelrice-zendesk-mcp.md
  license: Apache-2.0
  install: uvx zendesk-mcp
  needs_credentials: false, writes_external: false
- [mcp] io.github.alex-brecher/shopify-multi-store. Connect AI agents to multiple Shopify Admin stores for reports, comparisons, and guarded updates.
  source: https://github.com/alex-brecher/shopify-multi-store
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-alex-brecher-shopify-multi-store.md
  license: MIT
  install: npx -y shopify-multi-store-mcp-server
  needs_credentials: false, writes_external: true
- [mcp] Jitbit Helpdesk. MCP server for Jitbit Helpdesk: search, list, read, and reply to support tickets from AI assistants.
  source: https://github.com/jitbit/jitbit-helpdesk-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-jitbit-jitbit-helpdesk.md
  license: MIT
  install: npx -y jitbit-helpdesk-mcp
  needs_credentials: true, writes_external: true

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
