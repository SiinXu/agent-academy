# Shared Expense Bill Splitter and Settle-Up Planner

Source: https://prompts.chat/prompts/cmvw36uun0001jw07xu4uz2md_shared-expense-bill-splitter-and-settle-up-planner (prompts.chat, CC0-1.0, author: f)

---
name: shared-expense-bill-splitter-and-settle-up-planner
description: Splits a CSV ledger of shared costs for a trip, flat or event - equal, shares, exact, percent and itemized bills with tax/tip pro rata, 'all except' exclusions, several payers, refunds, repayments and multiple currencies at agreed rates - in cents, then finds the provably fewest settle-up transfers (exact zero-sum subgroup search). Returns balances, a per-person audit and a chat message. Includes a stdlib Python planner with --self-test.
---

# Shared Expense Bill Splitter and Settle-Up Planner

You turn a messy list of shared spending into a fair, checkable split and the shortest possible list of payments. You keep the ledger as a CSV the group can edit in any spreadsheet, apply the split rule each line really needs (who was there, who ordered what, who stayed fewer nights), convert currencies at rates the group agrees on, and settle everyone with the fewest transfers. Every cent is accounted for, and anyone can trace their own number line by line.

## Files in this skill

- `scripts/settle_up.py` - reads the CSV ledger, splits each line in integer cents (largest-remainder rounding), computes paid/share/net per person, and searches all zero-sum subgroups to find the minimum number of transfers (exact up to 18 people with a balance, greedy beyond) (Python 3.8+ standard library only)
- `references/split-methods.md` - the CSV format, which split to use for which cost, itemized bills with tax and tip, exclusions, payers, refunds and repayments
- `references/settle-up-and-currency.md` - why the minimum can be below "people - 1", how the search works, rounding, exchange rates and card fees, payment etiquette
- `templates/settle-up-summary.md` - the summary to hand back and paste into the group chat
- `examples/lisbon-trip.csv` - 5 friends, 11 lines: shares by nights, an excluded person, an itemized dinner, a USD booking, premium seats, two payers, a refund, GBP snacks and a repayment already made
- `examples/lisbon-settle-output.md` - the real output of the planner on that ledger
- `examples/flat-october.csv` - 6 flatmates where the minimum (4 transfers) beats paying largest debt to largest credit (5)

## Workflow

### 1. Collect the ledger
Ask for every shared cost with: what, who paid (and how much each, if several people paid), the amount and currency, and who it was for. Ask the questions that change the split: Did anyone arrive late or leave early? Did anyone skip a meal or an activity? Was a dinner shared or ordered individually? Has anyone already paid someone back? Agree the base currency and the rates (one rate per currency for the whole trip unless the group wants card statement rates). Write it as the CSV in `references/split-methods.md`, with `# people:` so typos in names are caught.

### 2. Run the planner
```
python3 scripts/settle_up.py examples/lisbon-trip.csv
python3 scripts/settle_up.py flat.csv --base GBP --rates EUR=0.86 --detail Ben
python3 scripts/settle_up.py ledger.csv --json
python3 scripts/settle_up.py --self-test
```
Exit 0 = plan printed (read the Warnings section), 2 = the ledger has an error (sums that do not match, missing rate, unknown split or name) - fix the line it names. If you cannot run code, follow the same steps by hand: convert each line to base cents, split, sum paid minus share per person, then match debtors to creditors, looking first for people or small groups whose balances cancel exactly.

### 3. Check the result with the group
- The check line must read `nets add up to 0.00`; paid and shares must be equal.
- Read the balances aloud in plain words ("Ana paid 990.00, her share is 377.31 and Eli already gave her 100.00, so she gets back 512.69").
- Point out lines that drive the result and are easy to dispute (shares by nights, itemized meals, a refund, a repayment), and offer `--detail <name>` for anyone who wants their own breakdown.
- If someone prefers to pay someone else (or cannot pay a person directly), rerun after adding the agreed transfer as a `payment` line; the plan recomputes the rest.

### 4. Deliver
Fill `templates/settle-up-summary.md`: totals, the balances table, the numbered transfers, the assumptions (rates, who was excluded where, how tax/tip was spread), and the short group-chat message. Suggest marking each transfer as done by adding it to the ledger as a `payment` line, so a second run shows everyone at 0.00.

## Example result
On `examples/lisbon-trip.csv` (5 people, 1,583.07 EUR spent) Ana paid the apartment and the fado tickets and gets back 512.69 EUR; the plan is 4 transfers: Ben pays Ana 243.17, Dara pays Ana 140.94, Eli pays Ana 128.58 and Eli pays Cem 0.85 (Eli's earlier 100.00 repayment is already counted). On `examples/flat-october.csv` Bo and Finn cancel each other out, so 6 flatmates settle in 4 transfers where paying largest debt to largest credit would take 5.

## Rules

- Never invent amounts, rates or who took part; ask, or mark the line as an assumption in the summary.
- Use one agreed rate per currency and show it; do not mix live rates into a finished split.
- Keep all arithmetic in cents and show where rounding cents went (largest remainder, ties to the person listed first).
- Do not judge spending; flag only lines that look like duplicates, typos or missing participants.
- A repayment is a `payment` line, never a negative expense; a refund is a negative expense shared by the same people as the original cost.
- Present the plan as a proposal; the group can swap who pays whom as long as each person's net is unchanged.
FILE:references/split-methods.md
# Split methods and CSV format

## Columns
`date,description,paid_by,amount,currency,split,participants,details` - header row required; any spreadsheet can export it. Optional comment lines before the header:
```
# people: Ana, Ben, Cem, Dara, Eli        (strict list: a misspelt name is an error)
# base: EUR
# rates: USD=0.92, GBP=1.16               (1 USD = 0.92 EUR)
```
Without `# people:` everyone named anywhere in the file is a member and `all` means all of them; names are matched case-insensitively.

## Choosing a split
| Cost | Split | Example `participants` / `details` |
|---|---|---|
| Groceries, taxi, fuel, shared tickets | `equal` | `all`, `Ana;Ben`, `all-Eli` |
| Accommodation when people stayed different nights, rooms of different size | `shares` | `Ana:3;Ben:3;Dara:2` (nights or room weights) |
| Tickets with different prices, a known per-person amount | `exact` | `Ana:30;Ben:45` (others in participants split the rest equally) |
| Agreed percentages (rent by income, wine for those who drank) | `percent` | `Ana:25;Ben:25;Dara:50` (must total 100) |
| Restaurant bill where people ordered separately | `itemized` | `Ana:31;Ben:28.50;shared:42` |
| Someone already paid someone back | `payment` | participants = the one recipient |

## Itemized bills
- `details` lists each person's items before tax, service and tip; `shared` is the sum of starters, bottles or anything everyone shared (split equally among `participants`).
- `amount` is the final bill. The difference (amount - items) is tax, service and tip, spread in proportion to what each person had, so a person who ordered more pays more tip. The output shows it as `+17.3% tax/tip`.
- If the items add up to more than the bill (a discount or a typo), the planner stops; enter the discount by lowering the item prices it applied to.

## Exclusions and partial participation
- `all-Eli` or `all except Eli` = everyone but Eli; chain several: `all-Bo-Finn`.
- For people present part of the time, use `shares` with nights or days instead of excluding them.
- A child or a guest paid for by one member: list them under the member's name (`shares` weight 1.5) or add them to `# people:` and settle with their parent.

## Payers
- One payer: `Ana`. Several payers on one bill: `Ben:40;Cem:20` (amounts in the row currency, must add up to `amount`).
- A card shared by a couple: treat the couple as one person or split the payer amount.

## Refunds, deposits, repayments
- Refund received after a cancellation: negative `amount`, `paid_by` = who received the money, same participants as the original cost.
- Deposit returned by a landlord: negative `amount` split the same way as the deposit.
- Money handed over between members: `payment` (from `paid_by` to the one person in `participants`). Record settle-up transfers the same way; rerunning then shows who is still open.

## Common mistakes the planner catches
- Exact amounts or percentages that do not add up, payer amounts that differ from the bill, items over the bill.
- A currency without a rate, an unknown split word, a misspelt name when `# people:` is set.
- Two identical lines (same date, description, amount and payer) - reported as a warning, not removed.
- Zero amounts - skipped with a warning.
FILE:references/settle-up-and-currency.md
# Settle-up and currency

## Net balance
For every person: `net = paid + payments sent - share - payments received`. Positive = gets money back, negative = owes. The nets always add up to exactly 0.00 because every line is split in integer cents that sum to the line total.

## Why "fewest transfers" can be less than people - 1
- Any group with k people who have a balance can settle in at most k - 1 transfers (each transfer clears at least one person).
- If the group splits into subgroups whose balances each add up to zero, each subgroup settles on its own: with g such subgroups the minimum is k - g. Example: Bo +300 and Finn -300 cancel, so 6 flatmates need 4 transfers, not 5.
- Paying the largest debt to the largest credit (the usual app approach) does not look for these subgroups and can take more transfers.
- Finding the best split into zero-sum subgroups is a hard problem in general; the planner solves it exactly for up to 18 people with a non-zero balance (dynamic programming over subsets, under a second) and falls back to the greedy plan above that, saying so.
- Within each subgroup the plan pays largest debt to largest credit, which uses exactly (subgroup size - 1) transfers.
- Several plans can have the same minimum count; any of them is fair, because each person's total in or out is fixed by their net.

## Rounding
- Each line is converted to base cents once (`amount x rate`, rounded half up), then split with the largest-remainder method: everyone gets the rounded-down amount, and the leftover cents go to the largest fractions, ties to the person listed first in `# people:`.
- Over a whole trip this moves at most a few cents per person; say so if someone asks why 10.00 / 3 is 3.34 for one person.

## Exchange rates
- Agree one rate per currency before splitting: the rate on the day most costs were paid, the average of the trip, or the rate on the payer's card statement (which includes the bank's markup).
- If the payer's card charged a foreign transaction fee, either include it in the amount (the group shares it) or leave it out (the payer absorbs it) - decide once for the whole trip.
- Enter amounts in the currency actually paid and let the planner convert; do not pre-convert some lines by hand.
- Settle in the base currency. If someone pays in another currency, convert the transfer at the same agreed rate and record it as a `payment` line in that currency.

## Payment etiquette
- Send the group-chat message with the transfers and a link to the ledger; give people a day or two to dispute a line before paying.
- Small transfers (under ~2 EUR/USD) can be waived or rolled into the next shared cost if both people agree - record that as a `payment` line so the ledger stays exact.
- When everyone has paid, add each transfer as a `payment` line and rerun: every net should be 0.00.
FILE:templates/settle-up-summary.md
# Settle-up: <trip / flat / event>, <dates>

**Group:** <Ana, Ben, Cem, Dara, Eli>   **Base currency:** <EUR>   **Total spent:** <1,583.07 EUR> over <11> lines
**Rates agreed:** <1 USD = 0.92 EUR, 1 GBP = 1.16 EUR (trip average)>

## Balances
| Person | Paid | Fair share | Already sent / received | Net |
|---|---|---|---|---|
| <Ana> | <990.00> | <377.31> | <received 100.00> | <+512.69 gets back> |
| <Ben> | <64.00> | <307.17> | <-> | <-243.17 owes> |

## Transfers (<n>, the minimum possible)
1. <Ben pays Ana 243.17 EUR>
2. <Dara pays Ana 140.94 EUR>
3. <...>

## How lines were split
- <Apartment: by nights, Dara and Eli 2 of 3 nights>
- <Airport taxi: everyone except Eli (came by train)>
- <Dinner: itemized, 17.3% tax and tip spread by what each person ordered; starters 42.00 shared>
- <Palace tickets refund: back to Ben and Cem, who paid for them>
- <Eli's 100.00 to Ana is already counted>

## Assumptions and open points
- <rates above; card fees not included>
- <check line 5 (surf lesson): was Ben in?>

## Group chat message
```
Settle-up (<EUR>, <11> lines, rates: <USD 0.92, GBP 1.16>):
- <Ben -> Ana: 243.17 EUR>
- <Dara -> Ana: 140.94 EUR>
Full table: <link to the sheet>. Shout within 2 days if a line is wrong.
```

**When paid:** add each transfer as a `payment` line and rerun - every net should read 0.00.
FILE:examples/lisbon-trip.csv
# people: Ana, Ben, Cem, Dara, Eli
# base: EUR
# rates: USD=0.92, GBP=1.16
date,description,paid_by,amount,currency,split,participants,details
2026-10-02,Apartment 3 nights (Dara and Eli 2 nights),Ana,840.00,EUR,shares,all,Ana:3;Ben:3;Cem:3;Dara:2;Eli:2
2026-10-02,Airport taxi (Eli came by train),Ben,48.00,EUR,equal,all-Eli,
2026-10-02,Groceries for the flat,Eli,63.75,EUR,equal,all,
2026-10-03,Dinner at Taberna do Mar,Cem,212.40,EUR,itemized,all,Ana:31;Ben:28.50;Cem:24;Dara:36;Eli:19.50;shared:42
2026-10-03,Surf lesson (booked on a US site),Dara,180.00,USD,equal,Ana;Dara;Eli,
2026-10-03,Fado tickets (premium seats for Dara and Eli),Ana,150.00,EUR,exact,all-Cem,Ana:30;Ben:30;Dara:45;Eli:45
2026-10-04,Train to Sintra,Ben:40;Cem:20,60.00,EUR,equal,all,
2026-10-04,Wine for the flat,Dara,36.00,EUR,percent,,Ana:25;Ben:25;Dara:50
2026-10-04,Palace tickets refunded (rain),Ben,-24.00,EUR,equal,Ben;Cem,
2026-10-05,Snacks at the London layover,Cem,27.00,GBP,equal,all,
2026-10-05,Eli paid Ana back for the apartment,Eli,100.00,EUR,payment,Ana,
FILE:examples/lisbon-settle-output.md
# Settle-up plan

Base currency: EUR   People: 5   Lines: 11   Total spent: 1,583.07 EUR
Rates used: 1 GBP = 1.16 EUR, 1 USD = 0.92 EUR

## Expenses

| # | Date | What | Paid by | Amount | In EUR | Split | Among |
|---|---|---|---|---|---|---|---|
| 1 | 2026-10-02 | Apartment 3 nights (Dara and Eli 2 nights) | Ana | 840.00 EUR | 840.00 | shares | all |
| 2 | 2026-10-02 | Airport taxi (Eli came by train) | Ben | 48.00 EUR | 48.00 | equal | Ana, Ben, Cem, Dara |
| 3 | 2026-10-02 | Groceries for the flat | Eli | 63.75 EUR | 63.75 | equal | all |
| 4 | 2026-10-03 | Dinner at Taberna do Mar | Cem | 212.40 EUR | 212.40 | itemized (+17.3% tax/tip) | all |
| 5 | 2026-10-03 | Surf lesson (booked on a US site) | Dara | 180.00 USD | 165.60 | equal | Ana, Dara, Eli |
| 6 | 2026-10-03 | Fado tickets (premium seats for Dara and Eli) | Ana | 150.00 EUR | 150.00 | exact | Ana, Ben, Dara, Eli |
| 7 | 2026-10-04 | Train to Sintra | Ben 40.00, Cem 20.00 | 60.00 EUR | 60.00 | equal | all |
| 8 | 2026-10-04 | Wine for the flat | Dara | 36.00 EUR | 36.00 | percent | Ana, Ben, Dara |
| 9 | 2026-10-04 | Palace tickets refunded (rain) | Ben | -24.00 EUR | -24.00 | equal | Ben, Cem |
| 10 | 2026-10-05 | Snacks at the London layover | Cem | 27.00 GBP | 31.32 | equal | all |
| 11 | 2026-10-05 | Eli paid Ana back for the apartment | Eli | 100.00 EUR | 100.00 | payment | to Ana |

## Balances

| Person | Paid | Share | Sent | Received | Net |
|---|---|---|---|---|---|
| Ana | 990.00 | 377.31 | 0.00 | 100.00 | 512.69 (gets back) |
| Ben | 64.00 | 307.17 | 0.00 | 0.00 | -243.17 (owes) |
| Cem | 263.72 | 262.87 | 0.00 | 0.00 | 0.85 (gets back) |
| Dara | 201.60 | 342.54 | 0.00 | 0.00 | -140.94 (owes) |
| Eli | 63.75 | 293.18 | 100.00 | 0.00 | -129.43 (owes) |

Check: nets add up to 0.00 (paid 1,583.07 = shares 1,583.07).

## Transfers (4)

1. Ben pays Ana **243.17 EUR**
2. Dara pays Ana **140.94 EUR**
3. Eli pays Ana **128.58 EUR**
4. Eli pays Cem **0.85 EUR**

Minimum possible: 4 transfers for 5 people with a balance (no smaller subgroup evens out on its own).

## Message for the group chat

```
Settle-up (EUR, 11 lines, rates: GBP 1.16, USD 0.92):
- Ben -> Ana: 243.17 EUR
- Dara -> Ana: 140.94 EUR
- Eli -> Ana: 128.58 EUR
- Eli -> Cem: 0.85 EUR
Full table in the shared sheet. Shout within 2 days if a line is wrong.
```
FILE:examples/flat-october.csv
# people: Asha, Bo, Chen, Dev, Ema, Finn
# base: EUR
date,description,paid_by,amount,currency,split,participants,details
2026-10-01,Festival tickets for Bo and Finn,Bo,600,EUR,exact,Bo;Finn,Bo:300;Finn:300
2026-10-31,October groceries (Bo and Finn on tour),Asha,800,EUR,equal,all-Bo-Finn,
2026-10-31,Electricity Sep-Oct (Bo and Finn on tour),Chen,600,EUR,equal,all-Bo-Finn,
2026-10-20,Second-hand sofa (Dev and Ema's part),Asha,250,EUR,exact,Dev;Ema,Dev:150;Ema:100
FILE:scripts/settle_up.py
#!/usr/bin/env python3
"""Shared expense bill splitter and settle-up planner (Python 3.8+ standard library only).

Reads a CSV ledger of shared costs (a trip, a flat, an event), splits every line in
integer cents, and finds the SMALLEST possible number of transfers that settles the group
(exact search over zero-sum subgroups, not just "at most people - 1").

CSV columns (header row required, extra columns ignored):
  date,description,paid_by,amount,currency,split,participants,details

  paid_by       Ana            one payer
                Ana:40;Ben:20  several payers (amounts in the row currency, must add up)
  amount        total in the row currency; negative = refund received by paid_by
  currency      blank = base currency
  split         equal | shares | exact | percent | itemized | payment
  participants  all | Ana;Ben;Cem | all-Eli (everyone except Eli) | blank = names in details
  details       shares:   Ana:3;Ben:2          (people in participants but not listed get 1)
                exact:    Ana:30;Ben:45        (rest, if any, split equally among the other participants)
                percent:  Ana:50;Ben:30;Cem:20 (must total 100)
                itemized: Ana:18;Ben:22.50;shared:12  (item prices before tax/tip; "shared"
                          items are split equally; amount - items = tax/service/tip, split in
                          proportion to what each person ordered)
                payment:  (none) paid_by gave `amount` to the one person in participants

Comment lines at the top set the group and the rates (or use the CLI flags):
  # people: Ana, Ben, Cem
  # base: EUR
  # rates: USD=0.92, GBP=1.16      (1 unit of that currency = rate units of base)

Usage:
  python3 settle_up.py ledger.csv [--base EUR] [--rates USD=0.92,GBP=1.16] [--people Ana,Ben]
                                  [--detail Ana] [--json]
  python3 settle_up.py --self-test

Exit codes: 0 = settled plan printed, 2 = bad input (unknown split, sums that do not
match, missing exchange rate, unknown person in a strict list).
"""
import argparse
import csv
import io
import json
import re
import sys
from decimal import Decimal, ROUND_HALF_UP, InvalidOperation

MAX_EXACT = 18  # people with a non-zero balance for the exact minimum search (2^18 states)
SPLITS = ("equal", "shares", "exact", "percent", "itemized", "payment")


class LedgerError(ValueError):
    pass


def dec(s, what):
    try:
        return Decimal(str(s).replace(",", "").strip())
    except (InvalidOperation, AttributeError):
        raise LedgerError("%s: %r is not a number" % (what, s))


def to_cents(amount):
    return int((amount * 100).quantize(Decimal("1"), rounding=ROUND_HALF_UP))


def fmt(cents, cur=""):
    sign = "-" if cents < 0 else ""
    c = abs(cents)
    s = "%s%d.%02d" % (sign, c // 100, c % 100)
    s = re.sub(r"(\d)(?=(\d{3})+\.)", r"\1,", s)
    return (s + " " + cur).strip()


def allocate(total, weights, order):
    """Split integer `total` cents in proportion to `weights` (dict name -> Decimal >= 0).
    Largest remainder method; ties go to the earlier name in `order`. Sum is exact."""
    names = [n for n in order if n in weights]
    wsum = sum(weights[n] for n in names)
    if wsum <= 0:
        raise LedgerError("weights add up to zero")
    sign = -1 if total < 0 else 1
    t = abs(total)
    raw = {n: Decimal(t) * weights[n] / wsum for n in names}
    base = {n: int(raw[n]) for n in names}
    left = t - sum(base.values())
    rank = sorted(names, key=lambda n: (-(raw[n] - base[n]), order.index(n)))
    for n in rank[:left]:
        base[n] += 1
    return {n: sign * v for n, v in base.items() if v}


def parse_pairs(text, what):
    out = {}
    for part in [p for p in re.split(r"[;|]", text or "") if p.strip()]:
        if ":" not in part:
            raise LedgerError("%s: %r should look like Name:value" % (what, part.strip()))
        k, v = part.split(":", 1)
        k = k.strip()
        out[k] = out.get(k, Decimal(0)) + dec(v, what)
    return out


class Ledger:
    def __init__(self, text, base=None, rates=None, people=None):
        self.warnings = []
        self.base = base
        self.rates = {}
        self.people = []
        self._canon = {}
        header_people = None
        body = []
        for line in text.splitlines():
            s = line.strip()
            if s.startswith("#"):
                m = re.match(r"#\s*(people|base|rates?)\s*:\s*(.*)$", s, re.I)
                if m:
                    key, val = m.group(1).lower(), m.group(2)
                    if key == "people":
                        header_people = [p.strip() for p in re.split(r"[,;]", val) if p.strip()]
                    elif key == "base" and not self.base:
                        self.base = val.strip().upper()
                    elif key.startswith("rate"):
                        self._add_rates(val)
                continue
            body.append(line)
        self.base = (self.base or "EUR").upper()
        if rates:
            self._add_rates(rates)
        self.rates[self.base] = Decimal(1)
        for p in (people or header_people or []):
            self._person(p, declare=True)
        self.strict = bool(people or header_people)
        rows = list(csv.DictReader(io.StringIO("\n".join(body))))
        if not rows:
            raise LedgerError("no expense rows found (need a header row and at least one line)")
        need = {"description", "paid_by", "amount", "split"}
        cols = {c.strip().lower() for c in rows[0].keys() if c}
        if not need <= cols:
            raise LedgerError("missing CSV columns: %s" % ", ".join(sorted(need - cols)))
        self.rows = []
        for r in rows:
            r = {(k or "").strip().lower(): (v or "").strip() for k, v in r.items()}
            if not any(r.values()):
                continue
            self.rows.append(r)
        # first pass: learn every name when no people list was given
        if not self.strict:
            for r in self.rows:
                for p in self._names_in(r):
                    self._person(p, declare=True)
        self.lines = [self._line(n, r) for n, r in enumerate(self.rows, 1)]
        self._check_duplicates()

    # -- people and rates
    def _add_rates(self, text):
        for part in re.split(r"[,;]", text):
            if not part.strip():
                continue
            if "=" not in part:
                raise LedgerError("rate %r should look like USD=0.92" % part.strip())
            k, v = part.split("=", 1)
            r = dec(v, "rate " + k.strip())
            if r <= 0:
                raise LedgerError("rate for %s must be positive" % k.strip())
            self.rates[k.strip().upper()] = r

    def _person(self, name, declare=False):
        key = name.strip().lower()
        if not key:
            raise LedgerError("empty person name")
        if key in self._canon:
            canon = self._canon[key]
            if canon != name.strip() and declare:
                self.warnings.append("'%s' and '%s' treated as the same person" % (canon, name.strip()))
            return canon
        if not declare:
            raise LedgerError("unknown person %r (not in the people list)" % name.strip())
        self._canon[key] = name.strip()
        self.people.append(name.strip())
        return name.strip()

    def _names_in(self, r):
        names = []
        pb = r.get("paid_by", "")
        names += list(parse_pairs(pb, "paid_by").keys()) if ":" in pb else [pb]
        part = r.get("participants", "")
        if part and not part.lower().startswith("all"):
            names += [p for p in re.split(r"[;|]", part) if p.strip()]
        if r.get("split", "").lower() != "payment":
            names += [k for k in parse_pairs(r.get("details", ""), "details") if k.lower() != "shared"]
        return [n for n in names if n.strip()]

    def _participants(self, r, ln):
        part = r.get("participants", "").strip()
        if not part:
            return None
        if part.lower().startswith("all"):
            rest = part[3:].strip()
            excl = []
            if rest:
                rest = re.sub(r"^(except|but|without)\s+", "", rest.lstrip("-").strip(), flags=re.I)
                excl = [self._person(x) for x in re.split(r"[-;|,]", rest) if x.strip()]
            return [p for p in self.people if p not in excl]
        return [self._person(p) for p in re.split(r"[;|]", part) if p.strip()]

    # -- one CSV line -> paid / share in base cents
    def _line(self, ln, r):
        desc = r.get("description") or "line %d" % ln
        where = "line %d (%s)" % (ln, desc)
        split = (r.get("split") or "equal").lower()
        if split not in SPLITS:
            raise LedgerError("%s: unknown split %r (use %s)" % (where, split, ", ".join(SPLITS)))
        cur = (r.get("currency") or self.base).upper()
        if cur not in self.rates:
            raise LedgerError("%s: no exchange rate for %s (add '# rates: %s=...' or --rates)" % (where, cur, cur))
        amount = dec(r.get("amount"), where + " amount")
        if amount == 0:
            self.warnings.append("%s has amount 0 and was skipped" % where)
        total = to_cents(amount * self.rates[cur])
        # payers
        pb = r.get("paid_by", "")
        if ":" in pb:
            pays = {self._person(k): v for k, v in parse_pairs(pb, where + " paid_by").items()}
            if sum(pays.values()) != amount:
                raise LedgerError("%s: payers add up to %s but amount is %s" % (where, sum(pays.values()), amount))
            paid = allocate(total, {k: abs(v) for k, v in pays.items()}, self.people) if total else {}
            if total < 0:
                paid = {k: -abs(v) for k, v in paid.items()}
        else:
            paid = {self._person(pb): total} if total else {}
        people = self._participants(r, ln)
        details = parse_pairs(r.get("details", ""), where + " details") if split != "payment" else {}
        share = {}
        if split == "payment":
            if not people or len(people) != 1:
                raise LedgerError("%s: a payment needs exactly one recipient in participants" % where)
            share = {people[0]: total}
        elif split == "equal":
            people = people or self.people
            share = allocate(total, {p: Decimal(1) for p in people}, self.people)
        elif split == "shares":
            d = {self._person(k): v for k, v in details.items()}
            people = people or list(d)
            w = {p: d.get(p, Decimal(1)) for p in people}
            extra = [p for p in d if p not in people]
            if extra:
                raise LedgerError("%s: %s in details but not in participants" % (where, ", ".join(extra)))
            if any(v < 0 for v in w.values()):
                raise LedgerError("%s: shares cannot be negative" % where)
            share = allocate(total, w, self.people)
        elif split == "percent":
            d = {self._person(k): v for k, v in details.items()}
            if sum(d.values()) != 100:
                raise LedgerError("%s: percentages add up to %s, not 100" % (where, sum(d.values())))
            people = list(d)
            share = allocate(total, d, self.people)
        elif split == "exact":
            d = {self._person(k): v for k, v in details.items()}
            people = people or list(d)
            fixed = sum(d.values())
            rest_people = [p for p in people if p not in d]
            if fixed > abs(amount) or (fixed != abs(amount) and not rest_people):
                raise LedgerError("%s: exact amounts add up to %s but the bill is %s" % (where, fixed, amount))
            w = dict(d)
            if rest_people:
                each = (abs(amount) - fixed) / len(rest_people)
                for p in rest_people:
                    w[p] = each
            share = allocate(total, w, self.people)
        elif split == "itemized":
            people = people or self.people
            shared = details.pop("shared", details.pop("Shared", Decimal(0)))
            d = {self._person(k): v for k, v in details.items()}
            items = sum(d.values()) + shared
            if items > abs(amount):
                raise LedgerError("%s: items add up to %s, more than the bill %s" % (where, items, amount))
            per = {p: d.get(p, Decimal(0)) + (shared / len(people) if shared else 0) for p in people}
            for p in d:
                if p not in per:
                    per[p] = d[p]
            if sum(per.values()) <= 0:
                raise LedgerError("%s: no items to split" % where)
            # tax/tip proportional to each person's items == allocate the total by item weights
            share = allocate(total, per, self.people)
        rec = {"n": ln, "date": r.get("date", ""), "desc": desc, "split": split, "currency": cur,
               "amount": amount, "total": total, "paid": paid, "share": share,
               "among": sorted(share, key=self.people.index)}
        if split == "itemized":
            rec["extra_pct"] = (abs(amount) - items) / items * 100 if items else Decimal(0)
        if sum(paid.values()) != sum(share.values()):
            raise LedgerError("%s: internal rounding error" % where)  # never expected
        return rec

    def _check_duplicates(self):
        seen = {}
        for l in self.lines:
            key = (l["date"], l["desc"].lower(), l["total"], tuple(sorted(l["paid"])))
            if key in seen:
                self.warnings.append("line %d looks like a duplicate of line %d (%s, %s)" % (l["n"], seen[key], l["desc"], fmt(l["total"], self.base)))
            else:
                seen[key] = l["n"]

    def balances(self):
        b = {p: {"paid": 0, "share": 0, "sent": 0, "received": 0} for p in self.people}
        for l in self.lines:
            if l["split"] == "payment":
                for p, c in l["paid"].items():
                    b[p]["sent"] += c
                for p, c in l["share"].items():
                    b[p]["received"] += c
            else:
                for p, c in l["paid"].items():
                    b[p]["paid"] += c
                for p, c in l["share"].items():
                    b[p]["share"] += c
        for p in b:
            b[p]["net"] = b[p]["paid"] + b[p]["sent"] - b[p]["share"] - b[p]["received"]
        return b


# ----------------------------------------------------------------------------- settle-up

def greedy(net, order):
    """Largest debtor pays largest creditor until everyone is even (at most k-1 transfers)."""
    cred = {p: v for p, v in net.items() if v > 0}
    debt = {p: -v for p, v in net.items() if v < 0}
    out = []
    while cred and debt:
        c = max(cred, key=lambda p: (cred[p], -order.index(p)))
        d = max(debt, key=lambda p: (debt[p], -order.index(p)))
        x = min(cred[c], debt[d])
        out.append((d, c, x))
        cred[c] -= x
        debt[d] -= x
        if not cred[c]:
            del cred[c]
        if not debt[d]:
            del debt[d]
    return out


def minimal(net, order):
    """Fewest transfers: n - (max number of disjoint zero-sum groups). Returns (transfers, groups, exact)."""
    people = [p for p in order if net.get(p)]
    n = len(people)
    if n == 0:
        return [], [], True
    if n > MAX_EXACT:
        return greedy(net, order), [people], False
    vals = [net[p] for p in people]
    size = 1 << n
    sums = [0] * size
    for m in range(1, size):
        low = m & -m
        sums[m] = sums[m ^ low] + vals[low.bit_length() - 1]
    dp = [0] * size
    for m in range(1, size):
        best = 0
        mm = m
        while mm:
            low = mm & -mm
            v = dp[m ^ low]
            if v > best:
                best = v
            mm ^= low
        dp[m] = best + (1 if sums[m] == 0 else 0)
    # walk down, cutting a group at each zero-sum checkpoint
    groups, m, last = [], size - 1, size - 1
    while m:
        mm, pick = m, None
        target = dp[m] - (1 if sums[m] == 0 else 0)
        while mm:
            low = mm & -mm
            if dp[m ^ low] == target:
                pick = low
                break
            mm ^= low
        m ^= pick
        if sums[m] == 0:
            groups.append(last ^ m)
            last = m
    out, named = [], []
    for g in reversed(groups):
        members = [people[i] for i in range(n) if g >> i & 1]
        named.append(members)
        out += greedy({p: net[p] for p in members}, order)
    return out, named, True


# ----------------------------------------------------------------------------- output

def render(led, detail=None):
    b = led.balances()
    net = {p: b[p]["net"] for p in led.people}
    tr, groups, exact = minimal(net, led.people)
    gr = greedy(net, led.people)
    B = led.base
    o = ["# Settle-up plan", "",
         "Base currency: %s   People: %d   Lines: %d   Total spent: %s" % (
             B, len(led.people), len(led.lines),
             fmt(sum(l["total"] for l in led.lines if l["split"] != "payment"), B))]
    others = sorted(c for c in led.rates if c != B)
    if others:
        o.append("Rates used: " + ", ".join("1 %s = %s %s" % (c, led.rates[c].normalize(), B) for c in others))
    o += ["", "## Expenses", "", "| # | Date | What | Paid by | Amount | In %s | Split | Among |" % B, "|---|---|---|---|---|---|---|---|"]
    for l in led.lines:
        payer = ", ".join("%s %s" % (p, fmt(c)) if len(l["paid"]) > 1 else p for p, c in l["paid"].items())
        among = "all" if len(l["among"]) == len(led.people) and l["split"] != "payment" else ", ".join(l["among"])
        split = l["split"] + (" (+%.1f%% tax/tip)" % l["extra_pct"] if l["split"] == "itemized" else "")
        if l["split"] == "payment":
            among = "to " + among
        o.append("| %d | %s | %s | %s | %s %s | %s | %s | %s |" % (l["n"], l["date"], l["desc"].replace("|", "/"), payer,
                                                               fmt(to_cents(l["amount"])), l["currency"], fmt(l["total"]), split, among))
    o += ["", "## Balances", "", "| Person | Paid | Share | Sent | Received | Net |", "|---|---|---|---|---|---|"]
    for p in led.people:
        x = b[p]
        state = "gets back" if x["net"] > 0 else ("owes" if x["net"] < 0 else "even")
        o.append("| %s | %s | %s | %s | %s | %s (%s) |" % (p, fmt(x["paid"]), fmt(x["share"]), fmt(x["sent"]), fmt(x["received"]),
                                                       fmt(x["net"]), state))
    o.append("")
    o.append("Check: nets add up to %s (paid %s = shares %s)." % (fmt(sum(net.values())), fmt(sum(x["paid"] for x in b.values())),
                                                                fmt(sum(x["share"] for x in b.values()))))
    nz = sum(1 for v in net.values() if v)
    o += ["", "## Transfers (%d)" % len(tr), ""]
    if not tr:
        o.append("Everyone is even. Nothing to pay.")
    else:
        for i, (d, c, x) in enumerate(tr, 1):
            o.append("%d. %s pays %s **%s**" % (i, d, c, fmt(x, B)))
        o.append("")
        if exact:
            if len(groups) > 1:
                o.append("Minimum possible: %d transfers. The group splits into %d sets that settle among themselves (%s), so %d people need only %d transfers; paying largest debt to largest credit would take %d." % (
                    len(tr), len(groups), "; ".join(" + ".join(g) for g in groups), nz, len(tr), len(gr)))
            else:
                o.append("Minimum possible: %d transfers for %d people with a balance (no smaller subgroup evens out on its own)." % (len(tr), nz))
        else:
            o.append("%d people have a balance; exact minimum search skipped (limit %d), greedy plan uses at most %d transfers." % (nz, MAX_EXACT, nz - 1))
    if detail:
        p = led._person(detail)
        o += ["", "## Detail: %s" % p, "", "| # | What | Paid | Share | Running net |", "|---|---|---|---|---|"]
        run = 0
        for l in led.lines:
            pd, sh = l["paid"].get(p, 0), l["share"].get(p, 0)
            if not pd and not sh:
                continue
            run += pd - sh
            o.append("| %d | %s | %s | %s | %s |" % (l["n"], l["desc"], fmt(pd), fmt(sh), fmt(run)))
    if led.warnings:
        o += ["", "## Warnings", ""] + ["- " + w for w in led.warnings]
    o += ["", "## Message for the group chat", "", "```"]
    msg = ["Settle-up (%s, %d lines, rates: %s):" % (B, len(led.lines), ", ".join("%s %s" % (c, led.rates[c].normalize()) for c in others) or "none")]
    msg += ["- %s -> %s: %s" % (d, c, fmt(x, B)) for d, c, x in tr] or ["- everyone is even"]
    msg.append("Full table in the shared sheet. Shout within 2 days if a line is wrong.")
    o += msg + ["```"]
    return "\n".join(o) + "\n"


def as_json(led):
    b = led.balances()
    net = {p: b[p]["net"] for p in led.people}
    tr, groups, exact = minimal(net, led.people)
    return {"base": led.base, "people": led.people, "balances_cents": b,
            "transfers": [{"from": d, "to": c, "cents": x} for d, c, x in tr],
            "groups": groups, "exact_minimum": exact, "warnings": led.warnings}


# ----------------------------------------------------------------------------- self-test

def self_test():
    import random
    cases = []

    def case(name, fn):
        try:
            ok, err = bool(fn()), ""
        except Exception as e:  # noqa
            ok, err = False, repr(e)
        cases.append((name, ok, err))

    H = "date,description,paid_by,amount,currency,split,participants,details\n"

    def L(rows, **kw):
        return Ledger(H + rows, **kw)

    def nets(led):
        b = led.balances()
        return {p: b[p]["net"] for p in led.people}

    def raises(fn):
        try:
            fn()
        except LedgerError:
            return True
        return False

    case("equal split to the cent", lambda: nets(L(",Taxi,Ana,10.00,,equal,Ana;Ben;Cem,\n")) == {"Ana": 666, "Ben": -333, "Cem": -333})
    case("remainder cent goes to first in order", lambda: L(",X,Ana,0.10,,equal,Ana;Ben;Cem,\n").lines[0]["share"] == {"Ana": 4, "Ben": 3, "Cem": 3})
    case("all minus exclusion", lambda: Ledger("# people: Ana, Ben, Cem\n" + H + ",X,Ana,30,,equal,all-Cem,\n").lines[0]["among"] == ["Ana", "Ben"])
    case("all except words", lambda: Ledger("# people: Ana, Ben, Cem\n" + H + ",X,Ana,30,,equal,all except Ben,\n").lines[0]["among"] == ["Ana", "Cem"])
    case("shares weights", lambda: L(",Room,Ana,100,,shares,,Ana:3;Ben:1\n").lines[0]["share"] == {"Ana": 7500, "Ben": 2500})
    case("shares default 1 for unlisted participants", lambda: L(",Room,Ana,90,,shares,Ana;Ben;Cem,Ana:2;Ben:0\n").lines[0]["share"] == {"Ana": 6000, "Cem": 3000})
    case("exact amounts", lambda: L(",Tickets,Ana,75,,exact,,Ana:30;Ben:45\n").lines[0]["share"] == {"Ana": 3000, "Ben": 4500})
    case("exact with rest split equally", lambda: L(",T,Ana,100,,exact,Ana;Ben;Cem,Ana:40\n").lines[0]["share"] == {"Ana": 4000, "Ben": 3000, "Cem": 3000})
    case("exact mismatch rejected", lambda: raises(lambda: L(",T,Ana,80,,exact,,Ana:30;Ben:45\n")))
    case("percent", lambda: L(",Wine,Ana,36,,percent,,Ana:25;Ben:25;Cem:50\n").lines[0]["share"] == {"Ana": 900, "Ben": 900, "Cem": 1800})
    case("percent not 100 rejected", lambda: raises(lambda: L(",W,Ana,36,,percent,,Ana:25;Ben:25\n")))
    case("itemized with shared and tax/tip", lambda: L(",Dinner,Ana,66,,itemized,Ana;Ben,Ana:20;Ben:30;shared:10\n").lines[0]["share"] == {"Ana": 2750, "Ben": 3850})
    case("itemized over bill rejected", lambda: raises(lambda: L(",D,Ana,40,,itemized,Ana;Ben,Ana:20;Ben:30\n")))
    case("payment row", lambda: nets(L(",Food,Ana,20,,equal,Ana;Ben,\n,Paid back,Ben,10,,payment,Ana,\n")) == {"Ana": 0, "Ben": 0})
    case("payment needs one recipient", lambda: raises(lambda: L(",P,Ben,10,,payment,Ana;Cem,\n")))
    case("several payers", lambda: L(",Train,Ana:40;Ben:20,60,,equal,Ana;Ben;Cem,\n").lines[0]["paid"] == {"Ana": 4000, "Ben": 2000})
    case("several payers must add up", lambda: raises(lambda: L(",Train,Ana:40;Ben:10,60,,equal,Ana;Ben,\n")))
    case("refund (negative amount)", lambda: nets(L(",Museum refund,Ben,-24,,equal,Ben;Cem,\n")) == {"Ben": -1200, "Cem": 1200})
    case("currency conversion", lambda: L(",Surf,Ana,100,USD,equal,Ana;Ben,\n", rates="USD=0.92").lines[0]["total"] == 9200)
    case("rates from comment line", lambda: Ledger("# base: EUR\n# rates: USD=0.92, GBP=1.16\n" + H + ",S,Ana,10,GBP,equal,Ana;Ben,\n").lines[0]["total"] == 1160)
    case("missing rate rejected", lambda: raises(lambda: L(",S,Ana,10,CHF,equal,Ana;Ben,\n")))
    case("unknown split rejected", lambda: raises(lambda: L(",S,Ana,10,,halves,Ana;Ben,\n")))
    case("strict people list rejects typo", lambda: raises(lambda: Ledger("# people: Ana, Ben\n" + H + ",S,Anna,10,,equal,all,\n")))
    case("case-insensitive names merge", lambda: L(",A,Ana,10,,equal,ana;Ben,\n").people == ["Ana", "Ben"])
    case("duplicate line warning", lambda: any("duplicate" in w for w in L("1,Taxi,Ana,10,,equal,Ana;Ben,\n1,Taxi,Ana,10,,equal,Ana;Ben,\n").warnings))
    case("missing columns rejected", lambda: raises(lambda: Ledger("what,who\nx,y\n")))
    case("bad number rejected", lambda: raises(lambda: L(",S,Ana,ten,,equal,Ana;Ben,\n")))
    # minimum transfers
    case("zero-sum pairs found (4 people -> 2 transfers)", lambda: len(minimal({"A": 500, "B": -500, "C": 300, "D": -300}, list("ABCD"))[0]) == 2)
    case("no zero-sum subgroup -> people - 1 transfers", lambda: len(greedy({"A": 600, "B": 400, "C": -500, "D": -500}, list("ABCD"))) == 3 and len(minimal({"A": 600, "B": 400, "C": -500, "D": -500}, list("ABCD"))[0]) == 3)
    case("min beats greedy on 6 people", lambda: (lambda n: len(minimal(n, list("ABCDEF"))[0]) == 4 and len(greedy(n, list("ABCDEF"))) == 5)({"A": 700, "B": 300, "C": 250, "D": -500, "E": -450, "F": -300}))
    case("everyone even -> no transfers", lambda: minimal({"A": 0, "B": 0}, ["A", "B"])[0] == [])

    def brute_min(net):
        ps = [p for p in net if net[p]]
        best = len(ps) - 1 if ps else 0
        for parts in _partitions(ps):
            if all(sum(net[p] for p in g) == 0 for g in parts):
                best = min(best, len(ps) - len(parts))
        return best

    def check_random():
        rnd = random.Random(7)
        for _ in range(60):
            k = rnd.randint(2, 7)
            vals = [rnd.choice([-1, 1]) * rnd.choice([100, 200, 300, 500, 250, 50]) for _ in range(k - 1)]
            vals.append(-sum(vals))
            net = {chr(65 + i): v for i, v in enumerate(vals)}
            tr = minimal(net, list(net))[0]
            bal = dict(net)
            for d, c, x in tr:
                assert x > 0
                bal[d] += x
                bal[c] -= x
            if any(bal.values()) or len(tr) != brute_min(net):
                return False
        return True
    case("minimal == brute force on 60 random groups and settles everyone", check_random)
    case("transfers settle the example-like ledger", lambda: _settles(L(",Flat,Ana,840,,shares,,Ana:3;Ben:3;Cem:2\n,Food,Cem,63.75,,equal,all,\n,Wine,Ben,36,,percent,,Ana:25;Ben:25;Cem:50\n")))
    case("render has transfers and chat message", lambda: "Message for the group chat" in render(L(",Taxi,Ana,10,,equal,Ana;Ben,\n")))
    case("detail view", lambda: "Detail: Ben" in render(L(",Taxi,Ana,10,,equal,Ana;Ben,\n"), "ben"))
    case("json output", lambda: as_json(L(",Taxi,Ana,10,,equal,Ana;Ben,\n"))["transfers"] == [{"from": "Ben", "to": "Ana", "cents": 500}])
    case("format thousands", lambda: fmt(123456789, "EUR") == "1,234,567.89 EUR" and fmt(-5) == "-0.05")

    passed = sum(1 for _, ok, _ in cases if ok)
    for name, ok, err in cases:
        print(("PASS " if ok else "FAIL ") + name + ((" " + err) if err else ""))
    print("%d/%d passed" % (passed, len(cases)))
    return 0 if passed == len(cases) else 1


def _partitions(items):
    if not items:
        yield []
        return
    first, rest = items[0], items[1:]
    for p in _partitions(rest):
        for i in range(len(p)):
            yield p[:i] + [[first] + p[i]] + p[i + 1:]
        yield [[first]] + p


def _settles(led):
    b = led.balances()
    net = {p: b[p]["net"] for p in led.people}
    for d, c, x in minimal(net, led.people)[0]:
        net[d] += x
        net[c] -= x
    return not any(net.values())


def main(argv=None):
    ap = argparse.ArgumentParser(description="Split shared expenses and plan the fewest settle-up transfers.")
    ap.add_argument("file", nargs="?", help="CSV ledger ('-' = stdin)")
    ap.add_argument("--base", default=None, help="base currency (default: '# base:' line or EUR)")
    ap.add_argument("--rates", default=None, help="USD=0.92,GBP=1.16 (1 unit = rate units of base)")
    ap.add_argument("--people", default=None, help="comma-separated group members (strict: typos are errors)")
    ap.add_argument("--detail", default=None, help="show the line-by-line breakdown for one person")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    a = ap.parse_args(argv)
    if a.self_test:
        return self_test()
    if not a.file:
        ap.error("give a CSV ledger or --self-test")
    try:
        text = sys.stdin.read() if a.file == "-" else open(a.file, encoding="utf-8-sig").read()
        people = [p.strip() for p in a.people.split(",")] if a.people else None
        led = Ledger(text, a.base, a.rates, people)
        out = json.dumps(as_json(led), indent=2) + "\n" if a.json else render(led, a.detail)
    except (OSError, LedgerError) as e:
        print("error: %s" % e, file=sys.stderr)
        return 2
    sys.stdout.write(out)
    return 0


if __name__ == "__main__":
    sys.exit(main())
