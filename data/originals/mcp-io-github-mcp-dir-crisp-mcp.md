# Crisp

### Crisp para Claude, ChatGPT e agentes de IA

Atendimento ao cliente, chat ao vivo, CRM e helpdesk no Crisp com a REST API oficial v1 completa (api.crisp.chat), conversas e mensagens, contatos/pessoas, base de conhecimento (artigos, categorias, idiomas), campanhas, operadores, visitantes e configurações do site. Consulta e operação. Autenticação por par de tokens (gerado no Crisp, em Settings, Workspace settings, Advanced configuration).

- 📊 **1 ferramenta**
- 🔒 **Somente leitura**
- 💬 **Funciona com qualquer cliente MCP**: Claude Desktop, Cursor, VS Code, Cline, Continue
- 🔑 **Login via magic-link (sem senha)**

[English version](README.en.md) · [Documentação completa](docs/) · [Skill pra agentes](skills/)

---

## Instalar em 1 clique

### Claude (Web e Desktop)

A Anthropic unificou a instalação de MCPs em `claude.ai/customize/connectors`. **O mesmo link serve pra Claude Web e Claude Desktop** (basta estar logado):

[➕ Abrir no Claude e conectar](https://claude.ai/new?modal=add-custom-connector#settings/customize-connectors)

**Manual** (se o deeplink não abrir): [claude.ai/customize/connectors](https://claude.ai/customize/connectors?surface=cowork) → **+** → **Adicionar conector personalizado** → cole **Nome** `Crisp` e **URL** `https://api.mcp.ai/p_crisp`.

### Cursor

[➕ Instalar Crisp no Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=crisp&config=eyJ1cmwiOiJodHRwczovL2FwaS5tY3AuYWkvcF9jcmlzcCJ9)

### VS Code (Copilot Chat)

[➕ Instalar Crisp no VS Code](vscode:mcp/install?name=crisp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.mcp.ai%2Fp_crisp%22%7D)

### ChatGPT, Manus, OpenClaw e mais 40+ clientes

Funciona em qualquer cliente MCP que suporte **MCP over HTTP**. A URL do servidor é sempre:

```
https://api.mcp.ai/p_crisp
```

Detalhes por cliente: [INSTALL.md](INSTALL.md).

---

## Exemplos de uso

```
Liste as conversas abertas do meu website Crisp
Quais contatos novos entraram esta semana?
Mostre os artigos publicados na base de conhecimento
```

---

## 1 ferramenta disponível

| Tool | Descrição |
|---|---|
| `search_tools` | Single entrypoint for MCP catalog. |

Detalhe de cada tool: [docs/ferramentas.md](docs/ferramentas.md)

---

## Preços

Grátis.

---

## Privacidade & LGPD

- **Somente leitura**, nenhuma ferramenta altera dados na origem.
- **Sub-processadores**: Crisp IM SAS, o LLM host que você escolher (Claude, ChatGPT, Cursor, agente próprio). Lista completa em [docs/privacidade-lgpd.md](docs/privacidade-lgpd.md).
- Os dados retornados pelas tools são enviados ao **LLM host que você escolher**, sub-processador fora do nosso controle. Recomendamos planos com opt-out de treinamento.

---

## Perguntas frequentes

**O servidor é open source?**
O servidor é proprietário (hosted). Este repositório é o wrapper público com manifestos, docs e skills — tudo MIT.

**Posso usar com agente próprio (não Claude/Cursor)?**
Sim — qualquer cliente que suporte MCP over HTTP. URL: `https://api.mcp.ai/p_crisp`.


---

## Suporte

- 📧 [crisp@mcp.ai](mailto:crisp@mcp.ai)
- 🐛 [GitHub Issues](https://github.com/mcp-dir/crisp-mcp/issues)
- 📄 [docs/](docs/)

---

## Licença

MIT — veja [LICENSE](LICENSE). O servidor MCP em `api.mcp.ai/p_crisp` é proprietário (hosted); este repositório (manifestos, docs, skills) é MIT.
