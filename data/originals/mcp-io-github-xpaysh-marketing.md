# xpay MCP Server

980+ AI tools available as MCP servers. Pay $0.01/call in USDC via the [x402 protocol](https://x402.org). One API key, 30+ providers — no individual provider accounts or subscriptions needed.

## Quick Start

### 1. Get your API key

Sign up at [app.xpay.sh](https://app.xpay.sh) and create an API key. Add credits to your wallet (USDC on Base).

### 2. Add to your MCP client

**Claude Desktop / Cursor / Windsurf** — add to your MCP config:

```json
{
  "mcpServers": {
    "xpay": {
      "url": "https://mcp.xpay.sh/mcp?key=YOUR_API_KEY"
    }
  }
}
```

**Claude Code CLI:**

```bash
claude mcp add --transport http "xpay" "https://mcp.xpay.sh/mcp?key=YOUR_API_KEY"
```

Replace `YOUR_API_KEY` with your key from step 1.

### 3. Use tools

Your AI assistant will automatically discover all available tools. Each tool call costs $0.01 USDC, deducted from your wallet balance.

## Collection Servers

Instead of connecting to all 980+ tools, you can connect to a focused collection:

| Collection | Endpoint | Tools | Providers |
|---|---|---|---|
| **All Tools** | `https://mcp.xpay.sh/mcp?key=YOUR_API_KEY` | 980+ | All 30+ |
| **Lead Generation** | `https://lead-gen.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~50 | Hunter, Apollo, Tomba, Sixtyfour, Fiber, Exa, Nyne |
| **Competitive Intel** | `https://compete.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~40 | Brand.dev, Coresignal, Keywords Everywhere, Exa, Firecrawl, Shofo |
| **Content Research** | `https://content.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~40 | Perplexity, Tavily, Semantic Scholar, FLUX, Ideogram, Recraft |
| **Web Scraping** | `https://scraping.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~35 | Firecrawl, Bright Data, Jina, Olostep, ScrapeGraph, Notte |
| **Developer Tools** | `https://devtools.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~30 | Context7, Code Runner, Python Execute, NPM Sentinel, PlantUML |
| **Finance** | `https://finance.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | 253 | Financial Modeling Prep, Alpha Vantage, AkShare, Polymarket |
| **Media Studio** | `https://media.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~25 | FLUX, Ideogram, Recraft, Stability AI, MiniMax, Kokoro |
| **Social Media** | `https://social.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | 96 | ScapeCreators, Shofo, YouTube |
| **Academic Research** | `https://research.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~30 | Semantic Scholar, Google Scholar, PubMed, arXiv |
| **Marketing** | `https://marketing.mcp.xpay.sh/mcp?key=YOUR_API_KEY` | ~30 | Keywords Everywhere, Brand.dev, Exa, Tavily, Ideogram |

## How It Works

1. **Get a key** — Sign up at [app.xpay.sh](https://app.xpay.sh) and add USDC credits
2. **Connect** — Add the endpoint URL (with your key) to any MCP client
3. **Call tools** — Your AI assistant discovers and calls tools naturally
4. **Auto-deduct** — Each call costs $0.01 USDC, deducted from your wallet balance

No individual provider API keys. No separate accounts. One key for 30+ providers.

## Requirements

- **API key** from [app.xpay.sh](https://app.xpay.sh)
- **USDC credits** in your xpay wallet ([add via Coinbase](https://www.coinbase.com))
- **MCP client** — Claude Desktop, Cursor, Windsurf, Claude Code CLI, Cline, etc.

## How x402 Works

[x402](https://x402.org) is an open protocol for machine-to-machine payments using HTTP 402 Payment Required. When a tool call requires payment:

1. Server responds with `402 Payment Required` + a payment invoice
2. Client signs a USDC payment on Base blockchain
3. Server verifies payment and executes the tool
4. Settlement is instant, non-custodial, and peer-to-peer

## Browse Tools

- **Hub**: [xpay.tools](https://xpay.tools)
- **Docs**: [docs.xpay.sh](https://docs.xpay.sh)
- **Platform**: [xpay.sh](https://xpay.sh)

## Related

- [`@xpaysh/x402`](https://www.npmjs.com/package/@xpaysh/x402) — x402 facilitator SDK
- [`@xpaysh/n8n-nodes-xpay`](https://www.npmjs.com/package/@xpaysh/n8n-nodes-xpay) — n8n community node
- [`@xpaysh/agent-kit-langchain`](https://www.npmjs.com/package/@xpaysh/agent-kit-langchain) — LangChain integration
- [xpay Facilitator](https://facilitator.xpay.sh) — Open x402 facilitator service

## License

MIT
