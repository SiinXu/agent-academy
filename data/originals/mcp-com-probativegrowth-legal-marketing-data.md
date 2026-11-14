# Legal-marketing open data

Published by [Probative Growth](https://probativegrowth.com/), a marketing agency for US law firms (SEO and ads, at published monthly prices). Prices: [probativegrowth.com/pricing](https://probativegrowth.com/pricing/) · About: [probativegrowth.com/about](https://probativegrowth.com/about/)

Open, citable datasets on US law-firm marketing, maintained by [Probative Growth](https://probativegrowth.com/data/): lawyer advertising rules for all 50 states and DC, bar ad filing and fees, ethics opinions, ad-platform policies, attorney fee caps, federal MDL dockets, Spanish-language demand, and official court, complaint, crash, price and wage statistics.

Each dataset names its sources, and each public-source record carries its source and the date checked. Each dataset has a DOI on Zenodo. Not legal advice: check the source and your own counsel before you rely on a rule.

- **How much.** 96 datasets as plain CSV and JSON. The main CSV files hold 153,447 rows in all.
- **How fresh.** Every row has a `lastChecked` date: the day its source was last read. The newest `lastChecked` date in each of the 96 main files falls between 2026-10-25 and 2026-11-13. The newest dataset version here was released on 2026-11-13.
- **How to use it.** Free under CC BY 4.0. Credit "Probative Growth" and link the dataset page.

## Start here

Load any file with a few lines of Python (standard library only):

```python
import csv, io, urllib.request
def rows(name):
    url = f"https://raw.githubusercontent.com/ops864/legal-marketing-data/main/data/{name}/{name}.csv"
    return list(csv.DictReader(io.TextIOWrapper(urllib.request.urlopen(url), encoding="utf-8", newline="")))
```

| File | What it holds | Rows | Last checked at source | Example |
|---|---|---|---|---|
| [`data/rules/rules.csv`](data/rules/rules.csv) | The lawyer advertising rule for one state and topic, with the official words quoted | 433 | 2026-11-13 | `[r['text'] for r in rows('rules') if r['state']=='TX' and r['topic']=='filing']` |
| [`data/limitations/limitations.csv`](data/limitations/limitations.csv) | The deadline to sue, by state and claim type, with the statute section | 225 | 2026-10-28 | `[(r['period'], r['statuteCite']) for r in rows('limitations') if r['jurisdiction']=='AK' and r['claimType']=='pi']` |
| [`data/deserts/deserts.csv`](data/deserts/deserts.csv) | Law offices per 10,000 residents in every county; each state row counts its counties under 1 per 10,000 | 3,196 | 2026-10-28 | `sorted(((int(r['value']), r['areaName']) for r in rows('deserts') if r['areaType']=='state'), reverse=True)[:5]` |
| [`data/fatal-crashes/fatal-crashes.csv`](data/fatal-crashes/fatal-crashes.csv) | Fatal crashes and deaths by county, with truck, motorcycle and pedestrian counts | 3,197 | 2026-10-27 | `sorted(((int(r['fatalities']), r['areaName']) for r in rows('fatal-crashes') if r['areaType']=='county' and r['fatalities']), reverse=True)[:5]` |
| [`data/bankruptcy/bankruptcy.csv`](data/bankruptcy/bankruptcy.csv) | Bankruptcy cases by chapter for every county, court district and state | 3,284 | 2026-10-28 | `sorted(((int(r['ch13']), r['areaName']) for r in rows('bankruptcy') if r['areaType']=='state' and r['ch13']), reverse=True)[:5]` |
| [`data/evictions/evictions.csv`](data/evictions/evictions.csv) | Eviction filings by county and state | 1,499 | 2026-10-29 | `sorted(((int(r['filings_total']), r['jurisdiction']) for r in rows('evictions') if r['level']=='state' and r['filings_total']), reverse=True)[:5]` |
| [`data/eeoc-charges/eeoc-charges.csv`](data/eeoc-charges/eeoc-charges.csv) | Job discrimination charges by state and basis | 658 | 2026-10-27 | `{r['basisLabel']: int(r['value']) for r in rows('eeoc-charges') if r['jurisdiction']=='TX'}` |
| [`data/civil-filings/civil-filings.csv`](data/civil-filings/civil-filings.csv) | Federal civil cases filed, by type of case and court district | 3,239 | 2026-10-27 | `sorted(((int(r['value']), r['districtName']) for r in rows('civil-filings') if r['category']=='all' and r['district']!='US' and r['value']), reverse=True)[:5]` |
| [`data/legal-need/legal-need.csv`](data/legal-need/legal-need.csv) | People who may need a lawyer in each county: older adults, noncitizens, veterans, Spanish speakers | 3,196 | 2026-10-31 | `sorted(((float(r['spanish_lep_pct']), r['name']) for r in rows('legal-need') if r['level']=='county' and r['spanish_lep_pct']), reverse=True)[:5]` |
| [`data/crosswalks/crosswalks.csv`](data/crosswalks/crosswalks.csv) | The join keys: practice areas, federal case codes, states, court districts and counties | 3,703 | 2026-11-13 | `[(r['code'], r['name']) for r in rows('crosswalks') if r['table']=='PRACTICE'][:5]` |

Each folder also has a `starter.ipynb` notebook that loads the data and works through example questions (on Kaggle, import it from its GitHub link), and a `README.txt` that explains every column.

## All 96 datasets

"Refresh" is how often the source is re-read. "Last checked at source" is the newest `lastChecked` date in the file.

| Dataset (page) | Folder | Rows | Refresh | Last checked at source | Version | DOI |
|---|---|---|---|---|---|---|
| [Lawyer advertising rules by state (50 states and DC)](https://probativegrowth.com/resources/lawyer-advertising-rules-by-state/) | [`data/rules/`](data/rules/) | 433 | when the source publishes | 2026-11-13 | 1.5.0 | [10.5281/zenodo.23958753](https://doi.org/10.5281/zenodo.23958753) |
| [Google search-ad costs for lawyer searches by practice area and state: top-of-page bid bands and competition (Google Ads Keyword Planner)](https://probativegrowth.com/data/ad-costs/) | [`data/ad-costs/`](data/ad-costs/) | 2,725 | yearly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23851278](https://doi.org/10.5281/zenodo.23851278) |
| [Attorneys by county in Ohio, California, Michigan, Idaho, Arizona, Washington and Pennsylvania, from each bar's public counts](https://probativegrowth.com/data/attorneys/) | [`data/attorneys/`](data/attorneys/) | 312 | quarterly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23962861](https://doi.org/10.5281/zenodo.23962861) |
| [Civil aviation accidents by state, year and type of operation (NTSB), 2008 to 2026](https://probativegrowth.com/data/aviation-accidents/) | [`data/aviation-accidents/`](data/aviation-accidents/) | 985 | monthly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24116037](https://doi.org/10.5281/zenodo.24116037) |
| [Bankruptcy filings by chapter, court district, state and county, quarterly (U.S. Courts)](https://probativegrowth.com/research/bankruptcy-filings-by-county/) | [`data/bankruptcy/`](data/bankruptcy/) | 3,284 | quarterly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23962892](https://doi.org/10.5281/zenodo.23962892) |
| [The new-lawyer pipeline by jurisdiction: bar exam pass rates and new admissions, 2025](https://probativegrowth.com/data/bar-pipeline/) | [`data/bar-pipeline/`](data/bar-pipeline/) | 56 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23962982](https://doi.org/10.5281/zenodo.23962982) |
| [Probative benchmarks, 2025–2026](https://probativegrowth.com/research/benchmarks/) | [`data/benchmarks/`](data/benchmarks/) | 58 | when the source publishes | 2026-10-30 | 5.0.0 | [10.5281/zenodo.24098530](https://doi.org/10.5281/zenodo.24098530) |
| [Recreational boating accidents by state and year: incidents, deaths, injuries and damage (U.S. Coast Guard), 2019 to 2024](https://probativegrowth.com/data/boating-accidents/) | [`data/boating-accidents/`](data/boating-accidents/) | 342 | yearly | 2026-10-30 | 2.0.0 | [10.5281/zenodo.23962985](https://doi.org/10.5281/zenodo.23962985) |
| [New business applications by county (Census Business Formation Statistics)](https://probativegrowth.com/data/business-applications/) | [`data/business-applications/`](data/business-applications/) | 3,208 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23898091](https://doi.org/10.5281/zenodo.23898091) |
| [California court filings by county: civil, criminal, family, juvenile, probate and appeals, fiscal years 2023–24 and 2024–25](https://probativegrowth.com/data/ca-courts/) | [`data/ca-courts/`](data/ca-courts/) | 2,301 | yearly | 2026-10-26 | 2.0.0 | [10.5281/zenodo.23963026](https://doi.org/10.5281/zenodo.23963026) |
| [Board-certified lawyers by practice area and state: specialist counts from official state lists (Tennessee and Minnesota)](https://probativegrowth.com/data/certified-specialists/) | [`data/certified-specialists/`](data/certified-specialists/) | 115 | quarterly | 2026-10-31 | 1.0.0 | [10.5281/zenodo.23850651](https://doi.org/10.5281/zenodo.23850651) |
| [Deadlines to file an employment-discrimination charge: the federal EEOC limit and each state agency's own limit](https://probativegrowth.com/data/charge-deadlines/) | [`data/charge-deadlines/`](data/charge-deadlines/) | 37 | quarterly | 2026-11-10 | 1.0.1 | [10.5281/zenodo.24116038](https://doi.org/10.5281/zenodo.24116038) |
| [Child support by state (OCSE): collections, cases, orders and arrears, fiscal years 2021 to 2025](https://probativegrowth.com/data/child-support/) | [`data/child-support/`](data/child-support/) | 55 | yearly | 2026-11-04 | 1.0.0 | [10.5281/zenodo.24011319](https://doi.org/10.5281/zenodo.24011319) |
| [Federal civil filings by nature of suit and district, 12-month periods since 2018](https://probativegrowth.com/research/federal-civil-filings-by-type/) | [`data/civil-filings/`](data/civil-filings/) | 3,239 | quarterly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23963129](https://doi.org/10.5281/zenodo.23963129) |
| [CFPB complaints about debt collection, credit reporting and debt management, by state and month](https://probativegrowth.com/research/consumer-finance-complaints-by-state/) | [`data/consumer-complaints/`](data/consumer-complaints/) | 171 | monthly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23963181](https://doi.org/10.5281/zenodo.23963181) |
| [FTC Consumer Sentinel reports by state: fraud, identity theft and imposter scams, 2024 Data Book](https://probativegrowth.com/data/consumer-sentinel/) | [`data/consumer-sentinel/`](data/consumer-sentinel/) | 212 | yearly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23963186](https://doi.org/10.5281/zenodo.23963186) |
| [County income and migration from IRS tax returns](https://probativegrowth.com/data/county-income/) | [`data/county-income/`](data/county-income/) | 3,195 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963195](https://doi.org/10.5281/zenodo.23963195) |
| [Small-claims dollar limits by state: the most a claim can seek in each state's small-claims court](https://probativegrowth.com/data/court-fees/) | [`data/court-fees/`](data/court-fees/) | 51 | quarterly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23792752](https://doi.org/10.5281/zenodo.23792752) |
| [Crime and arrests by county and state: violent and property crime, DUI and drug arrests (FBI)](https://probativegrowth.com/data/crime-data/) | [`data/crime-data/`](data/crime-data/) | 3,078 | quarterly | 2026-10-28 | 2.1.0 | [10.5281/zenodo.24011321](https://doi.org/10.5281/zenodo.24011321) |
| [Federal criminal cases by offense and district (U.S. Courts Tables D-1, D-2 and D-3)](https://probativegrowth.com/data/criminal-filings/) | [`data/criminal-filings/`](data/criminal-filings/) | 2,023 | quarterly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23963315](https://doi.org/10.5281/zenodo.23963315) |
| [Legal market crosswalks: practice areas, federal case codes, states, federal districts and counties](https://probativegrowth.com/data/crosswalks/) | [`data/crosswalks/`](data/crosswalks/) | 3,703 | yearly | 2026-11-13 | 2.3.0 | [10.5281/zenodo.24181503](https://doi.org/10.5281/zenodo.24181503) |
| [Demand per law office, by state: residents, bankruptcy cases, fatal crashes, divorces, Spanish speakers and evictions for each law office](https://probativegrowth.com/data/demand-per-law-office/) | [`data/demand-per-law-office/`](data/demand-per-law-office/) | 334 | quarterly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23851281](https://doi.org/10.5281/zenodo.23851281) |
| [Legal deserts: law offices and lawyers per resident in every U.S. county](https://probativegrowth.com/research/legal-deserts/) | [`data/deserts/`](data/deserts/) | 3,196 | quarterly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23963393](https://doi.org/10.5281/zenodo.23963393) |
| [Medical device adverse event reports by product code and quarter (FDA MAUDE via openFDA)](https://probativegrowth.com/data/device-events/) | [`data/device-events/`](data/device-events/) | 2,079 | monthly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963431](https://doi.org/10.5281/zenodo.23963431) |
| [Social Security disability hearing waits and workloads by hearing office](https://probativegrowth.com/data/disability-hearings/) | [`data/disability-hearings/`](data/disability-hearings/) | 159 | monthly | 2026-10-28 | 1.0.1 | [10.5281/zenodo.23898096](https://doi.org/10.5281/zenodo.23898096) |
| [Serious drug adverse event reports by active ingredient (openFDA FAERS)](https://probativegrowth.com/data/drug-events/) | [`data/drug-events/`](data/drug-events/) | 313 | quarterly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963449](https://doi.org/10.5281/zenodo.23963449) |
| [Employment discrimination charges to the EEOC, by state and basis, FY 2009 to FY 2025](https://probativegrowth.com/data/eeoc-charges/) | [`data/eeoc-charges/`](data/eeoc-charges/) | 658 | yearly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23898101](https://doi.org/10.5281/zenodo.23898101) |
| [Eviction laws by state and territory: notice, cure, just cause, fees and timing (LSC)](https://probativegrowth.com/data/eviction-laws/) | [`data/eviction-laws/`](data/eviction-laws/) | 57 | when the source publishes | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963453](https://doi.org/10.5281/zenodo.23963453) |
| [Eviction filings by county and year (LSC Civil Court Data Initiative)](https://probativegrowth.com/data/evictions/) | [`data/evictions/`](data/evictions/) | 1,499 | quarterly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963459](https://doi.org/10.5281/zenodo.23963459) |
| [Fair housing complaints by county and basis: Fair Housing Act cases filed with HUD, 2006 to June 2020](https://probativegrowth.com/data/fair-housing/) | [`data/fair-housing/`](data/fair-housing/) | 2,790 | when the source publishes | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963466](https://doi.org/10.5281/zenodo.23963466) |
| [Fatal crashes by county and type: trucks, motorcycles, pedestrians and bicyclists, NHTSA FARS 2019 to 2024](https://probativegrowth.com/research/fatal-crashes-by-county/) | [`data/fatal-crashes/`](data/fatal-crashes/) | 3,197 | yearly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23963480](https://doi.org/10.5281/zenodo.23963480) |
| [Federal civil cases filed, by county of the plaintiff's residence, case type and year (Federal Judicial Center)](https://probativegrowth.com/data/federal-filings-county/) | [`data/federal-filings-county/`](data/federal-filings-county/) | 3,559 | quarterly | 2026-10-28 | 2.0.1 | [10.5281/zenodo.24024299](https://doi.org/10.5281/zenodo.24024299) |
| [Federal sentencing by district and offense: individuals sentenced, prison rates and sentence lengths, fiscal years 2021 to 2025](https://probativegrowth.com/data/federal-sentencing/) | [`data/federal-sentencing/`](data/federal-sentencing/) | 793 | yearly | 2026-11-04 | 1.0.1 | [10.5281/zenodo.24022955](https://doi.org/10.5281/zenodo.24022955) |
| [Attorney fee caps and contingency-fee rules, by state and federal program](https://probativegrowth.com/research/attorney-fee-caps-by-state/) | [`data/fees/`](data/fees/) | 79 | when the source publishes | 2026-10-28 | 3.0.1 | [10.5281/zenodo.23969434](https://doi.org/10.5281/zenodo.23969434) |
| [What US state bars charge, and require, to file or review lawyer advertising](https://probativegrowth.com/research/lawyer-ad-filing-fees/) | [`data/filing/`](data/filing/) | 51 | when the source publishes | 2026-11-11 | 3.1.0 | [10.5281/zenodo.24184382](https://doi.org/10.5281/zenodo.24184382) |
| [The US legal market in numbers: headline findings from Probative's open datasets](https://probativegrowth.com/research/us-legal-market-in-numbers/) | [`data/findings/`](data/findings/) | 20 | quarterly | 2026-11-10 | 1.1.0 | [10.5281/zenodo.23748830](https://doi.org/10.5281/zenodo.23748830) |
| [US law firm websites: practices, Spanish, intake, by state, county and practice area](https://probativegrowth.com/data/firm-web-census/) | [`data/firm-web-census/`](data/firm-web-census/) | 5,807 | when the source publishes | 2026-11-09 | 3.2.1 | [10.5281/zenodo.24148921](https://doi.org/10.5281/zenodo.24148921) |
| [Flood insurance claims by county and year (FEMA NFIP, OpenFEMA), 1978 to 2026](https://probativegrowth.com/data/flood-claims/) | [`data/flood-claims/`](data/flood-claims/) | 2,988 | monthly | 2026-10-31 | 1.0.0 | [10.5281/zenodo.23845801](https://doi.org/10.5281/zenodo.23845801) |
| [New green cards (lawful permanent residents) by county, country of birth and class of admission](https://probativegrowth.com/data/green-cards/) | [`data/green-cards/`](data/green-cards/) | 483 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963657](https://doi.org/10.5281/zenodo.23963657) |
| [Hospital patient-safety ratings by state and county: PSI 90 and healthcare-associated infections (CMS Care Compare)](https://probativegrowth.com/data/hospital-safety/) | [`data/hospital-safety/`](data/hospital-safety/) | 473 | quarterly | 2026-10-30 | 2.0.0 | [10.5281/zenodo.23963670](https://doi.org/10.5281/zenodo.23963670) |
| [How long federal civil cases take: outcomes, class actions and pro se share by district, nature of suit and year](https://probativegrowth.com/research/how-long-federal-civil-cases-take/) | [`data/idb-civil/`](data/idb-civil/) | 1,709 | quarterly | 2026-10-27 | 2.0.0 | [10.5281/zenodo.23898111](https://doi.org/10.5281/zenodo.23898111) |
| [Special education disputes by state (IDEA Part B): complaints, mediation and due process, school years 2012-13 to 2023-24](https://probativegrowth.com/data/idea-disputes/) | [`data/idea-disputes/`](data/idea-disputes/) | 57 | yearly | 2026-11-04 | 1.0.0 | [10.5281/zenodo.24011352](https://doi.org/10.5281/zenodo.24011352) |
| [Immigration court backlog, representation and asylum outcomes (EOIR workload statistics and case data)](https://probativegrowth.com/data/immigration-courts/) | [`data/immigration-courts/`](data/immigration-courts/) | 155 | monthly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24183839](https://doi.org/10.5281/zenodo.24183839) |
| [Injury deaths by county and state (CDC): drug overdose, suicide, homicide and firearm injury](https://probativegrowth.com/data/injury-deaths/) | [`data/injury-deaths/`](data/injury-deaths/) | 3,194 | monthly | 2026-11-09 | 1.0.1 | [10.5281/zenodo.24116039](https://doi.org/10.5281/zenodo.24116039) |
| [IRS Data Book by state: returns filed, gross tax collections and refunds, fiscal years 2019 to 2025](https://probativegrowth.com/data/irs-databook/) | [`data/irs-databook/`](data/irs-databook/) | 371 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963674](https://doi.org/10.5281/zenodo.23963674) |
| [Spanish-speaking demand vs Spanish-speaking lawyer supply, by state and metro](https://probativegrowth.com/data/language/) | [`data/language/`](data/language/) | 2,069 | yearly | 2026-10-25 | 2.0.0 | [10.5281/zenodo.23898117](https://doi.org/10.5281/zenodo.23898117) |
| [US law-firm websites and AI crawlers: crawler-file rules, text before JavaScript, snippet limits and Spanish pages, by state and market](https://probativegrowth.com/data/law-firm-ai-readiness/) | [`data/law-firm-ai-readiness/`](data/law-firm-ai-readiness/) | 77 | when the source publishes | 2026-11-06 | 1.0.0 | [10.5281/zenodo.24015038](https://doi.org/10.5281/zenodo.24015038) |
| [Law firm size, solos and receipts, by state: Census SUSB 2022, Nonemployer Statistics 2024 and Economic Census 2022](https://probativegrowth.com/research/law-firm-size-and-revenue/) | [`data/law-firm-economy/`](data/law-firm-economy/) | 481 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23898123](https://doi.org/10.5281/zenodo.23898123) |
| [US law-firm websites: Spanish pages, online booking, live chat, structured data, HTTPS and 24/7 intake, by state and practice area](https://probativegrowth.com/data/law-firm-websites/) | [`data/law-firm-websites/`](data/law-firm-websites/) | 1,088 | quarterly | 2026-10-30 | 1.0.1 | [10.5281/zenodo.23963678](https://doi.org/10.5281/zenodo.23963678) |
| [Law offices, jobs and pay by county, with solo-practice counts: BLS QCEW, Census CBP and Nonemployer Statistics](https://probativegrowth.com/research/law-firm-competition-by-county/) | [`data/law-offices/`](data/law-offices/) | 3,196 | quarterly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23963687](https://doi.org/10.5281/zenodo.23963687) |
| [Lawyer, paralegal and legal-staff pay by state and metro (BLS OEWS)](https://probativegrowth.com/data/lawyer-wages/) | [`data/lawyer-wages/`](data/lawyer-wages/) | 1,239 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23898132](https://doi.org/10.5281/zenodo.23898132) |
| [Legal-aid, public-interest-law and civil-rights nonprofits by county, from the IRS exempt-organization list](https://probativegrowth.com/data/legal-aid-orgs/) | [`data/legal-aid-orgs/`](data/legal-aid-orgs/) | 3,196 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116040](https://doi.org/10.5281/zenodo.24116040) |
| [Legal marketing and intake hiring demand: pay, headcount and openings (Bureau of Labor Statistics)](https://probativegrowth.com/data/legal-hiring-demand/) | [`data/legal-hiring-demand/`](data/legal-hiring-demand/) | 608 | monthly | 2026-11-09 | 1.0.2 | [10.5281/zenodo.24116041](https://doi.org/10.5281/zenodo.24116041) |
| [Legal need by county: who may need a lawyer, from the American Community Survey](https://probativegrowth.com/data/legal-need/) | [`data/legal-need/`](data/legal-need/) | 3,196 | yearly | 2026-10-31 | 1.1.1 | [10.5281/zenodo.23957291](https://doi.org/10.5281/zenodo.23957291) |
| [Legal-services prices and jobs, monthly (BLS CPI, PPI and CES)](https://probativegrowth.com/data/legal-prices/) | [`data/legal-prices/`](data/legal-prices/) | 1,877 | monthly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24116042](https://doi.org/10.5281/zenodo.24116042) |
| [Legal profession figures: lawyer and paralegal jobs and pay, and the civil legal-help gap, each re-read at the issuing source](https://probativegrowth.com/data/legal-profession-figures/) | [`data/legal-profession-figures/`](data/legal-profession-figures/) | 7 | quarterly | 2026-10-31 | 1.0.0 | [10.5281/zenodo.23851292](https://doi.org/10.5281/zenodo.23851292) |
| [Statutes of limitations by state: personal injury, medical malpractice, wrongful death, product liability and property damage](https://probativegrowth.com/research/statute-of-limitations-by-state/) | [`data/limitations/`](data/limitations/) | 225 | when the source publishes | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23963806](https://doi.org/10.5281/zenodo.23963806) |
| [Marriage and divorce rates by state (CDC NCHS), 1990 to 2024](https://probativegrowth.com/data/marriage-divorce/) | [`data/marriage-divorce/`](data/marriage-divorce/) | 99 | yearly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23845898](https://doi.org/10.5281/zenodo.23845898) |
| [Mass-tort docket tracker, federal MDL pending actions by month since 2019](https://probativegrowth.com/research/mass-tort-mdl-tracker/) | [`data/mdl/`](data/mdl/) | 178 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116044](https://doi.org/10.5281/zenodo.24116044) |
| [Mine accidents, injuries and illnesses by state, county and degree of injury (MSHA), 2000 to 2026](https://probativegrowth.com/data/mine-accidents/) | [`data/mine-accidents/`](data/mine-accidents/) | 3,243 | monthly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24116045](https://doi.org/10.5281/zenodo.24116045) |
| [Mortgage delinquency by county and state (CFPB Mortgage Performance Trends), monthly from 2008](https://probativegrowth.com/data/mortgage-delinquency/) | [`data/mortgage-delinquency/`](data/mortgage-delinquency/) | 561 | quarterly | 2026-11-09 | 1.0.1 | [10.5281/zenodo.24116047](https://doi.org/10.5281/zenodo.24116047) |
| [Mortgage applications, loans and denials by county: home purchase and refinance lending from HMDA](https://probativegrowth.com/data/mortgage-lending/) | [`data/mortgage-lending/`](data/mortgage-lending/) | 3,194 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23963883](https://doi.org/10.5281/zenodo.23963883) |
| [Noncitizen population by state and county (Census ACS, table B05001)](https://probativegrowth.com/data/noncitizen-population/) | [`data/noncitizen-population/`](data/noncitizen-population/) | 3,196 | yearly | 2026-10-31 | 2.0.0 | [10.5281/zenodo.23963957](https://doi.org/10.5281/zenodo.23963957) |
| [Nursing home fines and harm citations by county: CMS penalties, actual-harm, immediate-jeopardy and abuse citations](https://probativegrowth.com/data/nursing-homes/) | [`data/nursing-homes/`](data/nursing-homes/) | 2,900 | monthly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24116048](https://doi.org/10.5281/zenodo.24116048) |
| [Attorneys registered with the New York courts, by county, status and year of admission (NYS Office of Court Administration)](https://probativegrowth.com/data/ny-attorneys/) | [`data/ny-attorneys/`](data/ny-attorneys/) | 130 | quarterly | 2026-11-09 | 2.0.1 | [10.5281/zenodo.24116050](https://doi.org/10.5281/zenodo.24116050) |
| [New York workers' compensation claims by county and accident year](https://probativegrowth.com/data/ny-workers-comp/) | [`data/ny-workers-comp/`](data/ny-workers-comp/) | 1,728 | quarterly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23964068](https://doi.org/10.5281/zenodo.23964068) |
| [Legal-marketing ethics opinions, 2004–2026](https://probativegrowth.com/data/opinions/) | [`data/opinions/`](data/opinions/) | 261 | when the source publishes | 2026-11-11 | 2.0.2 | [10.5281/zenodo.24114753](https://doi.org/10.5281/zenodo.24114753) |
| [OSHA inspections and penalties by state and industry (DOL enforcement data)](https://probativegrowth.com/data/osha-enforcement/) | [`data/osha-enforcement/`](data/osha-enforcement/) | 1,174 | yearly | 2026-10-28 | 1.0.0 | [10.5281/zenodo.23850661](https://doi.org/10.5281/zenodo.23850661) |
| [Legal ad-platform policy tracker](https://probativegrowth.com/data/platforms/) | [`data/platforms/`](data/platforms/) | 58 | when the source publishes | 2026-10-25 | 2.0.0 | [10.5281/zenodo.23898135](https://doi.org/10.5281/zenodo.23898135) |
| [Deaths, births, migration and older residents by county (Census population estimates), 2020 to 2025](https://probativegrowth.com/data/population-change/) | [`data/population-change/`](data/population-change/) | 3,196 | yearly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23845912](https://doi.org/10.5281/zenodo.23845912) |
| [Official public statistics behind the practice and state pages: bankruptcy, employment, immigration and personal injury](https://probativegrowth.com/data/practice-official/) | [`data/practice-official/`](data/practice-official/) | 170 | quarterly | 2026-10-27 | 1.1.0 | [10.5281/zenodo.24116055](https://doi.org/10.5281/zenodo.24116055) |
| [Consumer product recalls by year and hazard (CPSC recall notices)](https://probativegrowth.com/data/product-recalls/) | [`data/product-recalls/`](data/product-recalls/) | 29 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116056](https://doi.org/10.5281/zenodo.24116056) |
| [Railroad casualties and crossing incidents by county (FRA Forms 55a, 57 and 54)](https://probativegrowth.com/data/rail-casualties/) | [`data/rail-casualties/`](data/rail-casualties/) | 2,372 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116057](https://doi.org/10.5281/zenodo.24116057) |
| [Referral-fee and fee-splitting rules for lawyers, by state](https://probativegrowth.com/resources/attorney-referral-fee-rules-by-state/) | [`data/referral/`](data/referral/) | 47 | when the source publishes | 2026-11-04 | 2.0.0 | [10.5281/zenodo.23964121](https://doi.org/10.5281/zenodo.23964121) |
| [Unwanted-call and text-message complaints to the FCC, by state and month](https://probativegrowth.com/data/robocall-complaints/) | [`data/robocall-complaints/`](data/robocall-complaints/) | 114 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116058](https://doi.org/10.5281/zenodo.24116058) |
| [Google searches for a lawyer by practice area and state, English and Spanish (Google Ads Keyword Planner, Trends and Autocomplete)](https://probativegrowth.com/data/search-demand/) | [`data/search-demand/`](data/search-demand/) | 5,694 | yearly | 2026-10-30 | 1.3.0 | [10.5281/zenodo.24116059](https://doi.org/10.5281/zenodo.24116059) |
| [Google search landscape for legal searches: directories, videos, People Also Ask and how concentrated the top 10 is](https://probativegrowth.com/data/serp-landscape/) | [`data/serp-landscape/`](data/serp-landscape/) | 998 | yearly | 2026-10-30 | 1.1.0 | [10.5281/zenodo.23964129](https://doi.org/10.5281/zenodo.23964129) |
| [Social Security beneficiaries by state (SSA): retirement, survivors and disability, counts and monthly amounts, December 2025](https://probativegrowth.com/data/ssa-beneficiaries/) | [`data/ssa-beneficiaries/`](data/ssa-beneficiaries/) | 57 | yearly | 2026-11-04 | 1.0.1 | [10.5281/zenodo.24022958](https://doi.org/10.5281/zenodo.24022958) |
| [State civil-rights agency complaints and charges: figures printed in state annual reports](https://probativegrowth.com/data/state-civil-rights/) | [`data/state-civil-rights/`](data/state-civil-rights/) | 10 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23964131](https://doi.org/10.5281/zenodo.23964131) |
| [State trial-court case filings by county, court level and case type: Texas, Washington, Maryland, Indiana, Wisconsin, Virginia, Pennsylvania, Oregon, West Virginia, Nebraska, Maine, California, Louisiana and Hawaii](https://probativegrowth.com/data/state-courts/) | [`data/state-courts/`](data/state-courts/) | 13,180 | yearly | 2026-10-30 | 2.0.0 | [10.5281/zenodo.23964136](https://doi.org/10.5281/zenodo.23964136) |
| [State labor agency wage claims: figures printed in state reports](https://probativegrowth.com/data/state-wage-claims/) | [`data/state-wage-claims/`](data/state-wage-claims/) | 3 | yearly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23753046](https://doi.org/10.5281/zenodo.23753046) |
| [TCPA and ADA federal lawsuits filed, by district and fiscal year](https://probativegrowth.com/data/tcpa-ada-filings/) | [`data/tcpa-ada-filings/`](data/tcpa-ada-filings/) | 1,598 | quarterly | 2026-11-13 | 1.0.0 | [10.5281/zenodo.24187571](https://doi.org/10.5281/zenodo.24187571) |
| [Toxic chemical releases by county (EPA Toxics Release Inventory)](https://probativegrowth.com/data/toxic-releases/) | [`data/toxic-releases/`](data/toxic-releases/) | 2,494 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23964168](https://doi.org/10.5281/zenodo.23964168) |
| [Truck and bus crashes by county, state and year (FMCSA crash file)](https://probativegrowth.com/data/truck-crashes/) | [`data/truck-crashes/`](data/truck-crashes/) | 3,255 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116060](https://doi.org/10.5281/zenodo.24116060) |
| [Texas employers without workers' compensation coverage (non-subscribers), by county](https://probativegrowth.com/data/tx-nonsubscribers/) | [`data/tx-nonsubscribers/`](data/tx-nonsubscribers/) | 239 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116061](https://doi.org/10.5281/zenodo.24116061) |
| [County and state unemployment: BLS Local Area Unemployment Statistics, annual averages and latest month](https://probativegrowth.com/data/unemployment/) | [`data/unemployment/`](data/unemployment/) | 3,273 | monthly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23964225](https://doi.org/10.5281/zenodo.23964225) |
| [Union membership and representation by state (BLS Union Members), 2024 and 2025](https://probativegrowth.com/data/union-membership/) | [`data/union-membership/`](data/union-membership/) | 52 | yearly | 2026-10-30 | 1.0.0 | [10.5281/zenodo.23845987](https://doi.org/10.5281/zenodo.23845987) |
| [USCIS naturalization and green card applications by field office](https://probativegrowth.com/data/uscis-offices/) | [`data/uscis-offices/`](data/uscis-offices/) | 200 | quarterly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23964258](https://doi.org/10.5281/zenodo.23964258) |
| [VA disability compensation recipients by county and combined rating](https://probativegrowth.com/data/va-compensation/) | [`data/va-compensation/`](data/va-compensation/) | 3,187 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23898138](https://doi.org/10.5281/zenodo.23898138) |
| [VA disability compensation, pension and survivor dollars by county (VA GDX report)](https://probativegrowth.com/data/va-spending/) | [`data/va-spending/`](data/va-spending/) | 3,281 | yearly | 2026-10-29 | 2.0.0 | [10.5281/zenodo.23964263](https://doi.org/10.5281/zenodo.23964263) |
| [Vehicle safety complaints by state, make and model year (NHTSA complaint file)](https://probativegrowth.com/data/vehicle-complaints/) | [`data/vehicle-complaints/`](data/vehicle-complaints/) | 4,040 | monthly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23964283](https://doi.org/10.5281/zenodo.23964283) |
| [VA-accredited attorneys and claims agents per veteran, by state, with county counts and Board of Veterans' Appeals outcomes by type of representation](https://probativegrowth.com/data/veterans-representation/) | [`data/veterans-representation/`](data/veterans-representation/) | 73 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116062](https://doi.org/10.5281/zenodo.24116062) |
| [Wage-and-hour and OSHA enforcement by county, state, act and industry (U.S. Department of Labor)](https://probativegrowth.com/data/wage-enforcement/) | [`data/wage-enforcement/`](data/wage-enforcement/) | 5,008 | monthly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23898146](https://doi.org/10.5281/zenodo.23898146) |
| [WARN Act layoff and closure notices by county: California and Texas](https://probativegrowth.com/data/warn-layoffs/) | [`data/warn-layoffs/`](data/warn-layoffs/) | 315 | monthly | 2026-11-10 | 2.0.1 | [10.5281/zenodo.24116063](https://doi.org/10.5281/zenodo.24116063) |
| [Workers' compensation maximum weekly benefit by state: the cap on total-disability pay in each state](https://probativegrowth.com/data/wc-benefits/) | [`data/wc-benefits/`](data/wc-benefits/) | 35 | monthly | 2026-11-05 | 1.1.1 | [10.5281/zenodo.23969440](https://doi.org/10.5281/zenodo.23969440) |
| [Workplace injuries and fatal work injuries by state and industry (BLS SOII and CFOI)](https://probativegrowth.com/data/work-injuries/) | [`data/work-injuries/`](data/work-injuries/) | 2,942 | yearly | 2026-10-28 | 2.0.0 | [10.5281/zenodo.23898154](https://doi.org/10.5281/zenodo.23898154) |

Each folder holds the full CSV and JSON, `README.txt` (the columns), `changes.json` (the change log), `openapi.json`, `croissant.json` ([Croissant](https://mlcommons.org/croissant/) metadata), `CITATION.cff` and `starter.ipynb`. The root has a [Frictionless](https://frictionlessdata.io/) `datapackage.json` that describes every CSV and its columns. Each dataset version has a tagged release with the CSV, the JSON and the README.

## How to cite

Cite the dataset you used, with its DOI from the table above. The pattern:

> Probative Growth, *dataset title*, year released, https://doi.org/DOI

For example:

> Probative Growth, Lawyer advertising rules by state (50 states and DC), 2026, https://doi.org/10.5281/zenodo.23958753

Every folder has a ready `CITATION.cff` for its own version, and the dataset page (first column) shows the same citation with BibTeX and RIS. GitHub's "Cite this repository" button gives the citation for the collection as a whole; the root `CITATION.cff` lists each dataset with its own DOI under `references`.

Found a wrong value? [Report it here](https://github.com/ops864/legal-marketing-data/issues/new?template=correction.yml).

## Live API and MCP server

- JSON API: <https://probativegrowth.com/data/v1/index.json> (the same records, sharded by state, metro or topic).
- MCP server (read-only, no auth): `https://probativegrowth.com/mcp`. Listed in the official MCP Registry as `com.probativegrowth/legal-marketing-data`.
- Docs: <https://probativegrowth.com/resources/rules-api/>

## Install the MCP server

Streamable HTTP, no key, no sign-in. Step-by-step setup for AI agents is in [`llms-install.md`](llms-install.md).

One click: [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=probative&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprobativegrowth.com%2Fmcp%22%7D) · [Add to Cursor](https://cursor.com/en/install-mcp?name=probative&config=eyJ1cmwiOiJodHRwczovL3Byb2JhdGl2ZWdyb3d0aC5jb20vbWNwIn0=) (each opens the app and asks you to confirm).

- Claude (web and desktop): Customize, then Connectors, then add a custom connector with the URL `https://probativegrowth.com/mcp` and no sign-in.
- Claude Code: `claude mcp add --transport http probative https://probativegrowth.com/mcp`, or install this repo as a plugin: `/plugin marketplace add ops864/legal-marketing-data` then `/plugin install legal-marketing-data@probative`
- ChatGPT: in developer mode, create a connector with the URL above and no authentication.
- VS Code (`.vscode/mcp.json`): `{"servers": {"probative": {"type": "http", "url": "https://probativegrowth.com/mcp"}}}`, or `code --add-mcp '{"name":"probative","type":"http","url":"https://probativegrowth.com/mcp"}'`
- Cursor (`mcp.json`): `{"mcpServers": {"probative": {"url": "https://probativegrowth.com/mcp"}}}`. Cursor also reads `.cursor-plugin/` in this repo.
- Windsurf (Cascade, MCP config file): `{"mcpServers": {"probative": {"serverUrl": "https://probativegrowth.com/mcp"}}}`
- Cline (`cline_mcp_settings.json`): `{"mcpServers": {"probative": {"type": "streamableHttp", "url": "https://probativegrowth.com/mcp"}}}` (without `type`, Cline assumes the older SSE transport)
- Gemini CLI: `gemini mcp add --transport http probative https://probativegrowth.com/mcp`, or `gemini extensions install https://github.com/ops864/legal-marketing-data` (reads `gemini-extension.json`)
- OpenAI Codex: in `~/.codex/config.toml`, `[mcp_servers.probative]` with `url = "https://probativegrowth.com/mcp"`

Each dataset also has its own smaller server:

- `https://probativegrowth.com/mcp/rules`: Lawyer advertising rules for all 50 states and DC, each with its source and status.
- `https://probativegrowth.com/mcp/ad-costs`: Google search-ad top-of-page bid bands and competition for lawyer searches, for the whole US, all 50 states and DC.
- `https://probativegrowth.com/mcp/attorneys`: Attorneys by county for OH, CA, MI, ID, AZ, WA and PA from each bar's public counts, per 10,000 residents, with status and as-of date.
- `https://probativegrowth.com/mcp/aviation-accidents`: NTSB civil aviation accidents by state and year, 2008 to 2026: accidents, deaths, injuries and type of operation.
- `https://probativegrowth.com/mcp/bankruptcy`: Bankruptcy filings by chapter, court district, state and county, quarterly from U.S. Courts tables F-5A, F-2 and F.
- `https://probativegrowth.com/mcp/bar-pipeline`: New lawyers by jurisdiction: bar exam pass rates and admissions, 2025.
- `https://probativegrowth.com/mcp/benchmarks`: Probative's law-firm marketing benchmarks, approximate and shown as ranges.
- `https://probativegrowth.com/mcp/boating-accidents`: USCG recreational boating incidents by state and year, 2019 to 2024: incidents, deaths, injuries and damage in dollars.
- `https://probativegrowth.com/mcp/business-applications`: Census new business applications by county, 2005-2025: latest count, change over a year and since 2019, state sums.
- `https://probativegrowth.com/mcp/ca-courts`: Cases filed in each California county's superior court, by case type.
- `https://probativegrowth.com/mcp/certified-specialists`: Board-certified lawyer counts by practice area and state from official state lists (Tennessee, Minnesota).
- `https://probativegrowth.com/mcp/charge-deadlines`: Deadlines to file an employment-discrimination charge, federal and by state, with the statute and verbatim quote.
- `https://probativegrowth.com/mcp/child-support`: OCSE child support collections, cases, orders, current support and arrears by state and fiscal year.
- `https://probativegrowth.com/mcp/civil-filings`: Federal civil filings by nature of suit and district since 2018.
- `https://probativegrowth.com/mcp/consumer-complaints`: CFPB complaints about debt collection, credit reporting and debt management, by state and month since 2018.
- `https://probativegrowth.com/mcp/consumer-sentinel`: FTC Consumer Sentinel reports by state: fraud, identity theft and imposter scams per 100,000 people (2024 Data Book).
- `https://probativegrowth.com/mcp/county-income`: IRS income and migration by county: returns, adjusted gross income, change per return, net moves in and out of other states.
- `https://probativegrowth.com/mcp/court-fees`: Small-claims dollar limits by state, with the statute or court page and the verbatim quote.
- `https://probativegrowth.com/mcp/crime-data`: FBI crime and DUI arrests by county and state, plus drug, fraud, forgery and embezzlement arrests by state, with reporting coverage.
- `https://probativegrowth.com/mcp/criminal-filings`: Federal criminal defendants by offense and district, U.S. Courts Tables D-1 to D-3, every half-year since 2017.
- `https://probativegrowth.com/mcp/crosswalks`: Join keys for every dataset: practice areas, federal case codes, states, federal districts and counties.
- `https://probativegrowth.com/mcp/demand-per-law-office`: Demand per law office by state: residents, bankruptcies, fatal crashes, divorces, Spanish speakers and evictions per law office, in thirds.
- `https://probativegrowth.com/mcp/deserts`: Law offices and lawyers per resident in every US county (legal deserts).
- `https://probativegrowth.com/mcp/device-events`: FDA medical device adverse event reports by product code and quarter: reports, deaths, injuries, malfunctions (top 300 codes).
- `https://probativegrowth.com/mcp/disability-hearings`: SSA disability hearing waits, cases pending and processing times by hearing office.
- `https://probativegrowth.com/mcp/drug-events`: FDA FAERS drug adverse event reports by active ingredient and quarter: serious, deaths, top reactions, MDL tags.
- `https://probativegrowth.com/mcp/eeoc-charges`: EEOC workplace-discrimination charges by state and basis, FY2009 to FY2025.
- `https://probativegrowth.com/mcp/eviction-laws`: Eviction laws of every state, DC and five territories (Jan. 2021): notice, cure, just cause, late fees, timing, with the statute.
- `https://probativegrowth.com/mcp/evictions`: Eviction filings by county and year from LSC's Civil Court Data Initiative, with filings per 100 renter households.
- `https://probativegrowth.com/mcp/fair-housing`: HUD fair housing cases filed 2006 to June 2020 by state, county and basis (race, disability, familial status and more).
- `https://probativegrowth.com/mcp/fatal-crashes`: NHTSA fatal crashes by county since 2019: trucks, motorcycles, pedestrians and bicyclists.
- `https://probativegrowth.com/mcp/federal-filings-county`: Federal civil cases filed by plaintiff county, state, district and case type, ten years, with out-of-state totals.
- `https://probativegrowth.com/mcp/federal-sentencing`: U.S. Sentencing Commission counts, prison rates and sentence lengths by federal district and offense type, fiscal years 2021 to 2025.
- `https://probativegrowth.com/mcp/fees`: Attorney fee caps and contingency-fee limits by state and federal program, plus a fee-cap calculator.
- `https://probativegrowth.com/mcp/filing`: What each state bar charges and requires to file or review lawyer ads.
- `https://probativegrowth.com/mcp/findings`: Headline US legal-market counts, each with its denominator, limits and source dataset DOI.
- `https://probativegrowth.com/mcp/firm-web-census`: US law firms by state, county and practice: firms per practice, Spanish pages, 24/7 intake, coverage vs Census counts.
- `https://probativegrowth.com/mcp/flood-claims`: FEMA NFIP flood insurance claims and dollars paid by county, state and year of loss, 1978-2026, with the top storm since 2016.
- `https://probativegrowth.com/mcp/green-cards`: New green cards (lawful permanent residents) in the top 200 counties by class of admission and country of birth, with state totals.
- `https://probativegrowth.com/mcp/hospital-safety`: CMS Care Compare hospital patient-safety (PSI 90) and infection ratings by state and county, rated against the national benchmark.
- `https://probativegrowth.com/mcp/idb-civil`: Federal civil case outcomes (FJC IDB): time to disposition, how cases end, class actions and pro se share, by district and type.
- `https://probativegrowth.com/mcp/idea-disputes`: Department of Education IDEA Part B counts of state complaints, mediation and due process complaints by state and school year.
- `https://probativegrowth.com/mcp/immigration-courts`: Immigration court backlog, representation and asylum outcomes by state and court, from EOIR workload statistics and case data.
- `https://probativegrowth.com/mcp/injury-deaths`: CDC deaths from drug overdose, suicide, homicide and firearm injury by county, state and year, with the trailing twelve months.
- `https://probativegrowth.com/mcp/irs-databook`: IRS Data Book by state, fiscal years 2019 to 2025: returns filed, gross collections and refunds issued.
- `https://probativegrowth.com/mcp/language`: Spanish speakers with limited English per Spanish-speaking lawyer, by state and metro.
- `https://probativegrowth.com/mcp/law-firm-ai-readiness`: US law-firm websites by state and market: rules for 8 AI crawlers and controls, text before JavaScript, FAQ markup, Spanish pages.
- `https://probativegrowth.com/mcp/law-firm-economy`: Law firms by size and state (Census SUSB, Nonemployer Statistics, Economic Census): firm counts, receipts and solo practices.
- `https://probativegrowth.com/mcp/law-firm-websites`: US law-firm website census: Spanish pages, booking, chat, schema and HTTPS by state and practice, with Spanish demand per website.
- `https://probativegrowth.com/mcp/law-offices`: Law offices, jobs and pay by county, with solo-practice counts (BLS, Census).
- `https://probativegrowth.com/mcp/lawyer-wages`: Lawyer and paralegal pay by state and metro from BLS OEWS: employment, mean and median wages and percentiles.
- `https://probativegrowth.com/mcp/legal-aid-orgs`: Legal-aid, public-interest-law and civil-rights nonprofits per county, state and US, by type and revenue band (IRS EO BMF).
- `https://probativegrowth.com/mcp/legal-hiring-demand`: Pay bands and headcounts for law-firm marketing, web and intake roles by state, plus monthly legal services employment and openings.
- `https://probativegrowth.com/mcp/legal-need`: Who may need a lawyer in every US county (Census ACS): 65+, 75+, 85+, living alone, noncitizens, LEP, divorced, veterans, renters.
- `https://probativegrowth.com/mcp/legal-prices`: Legal-services prices and jobs, monthly from BLS: the CPI and PPI legal-services indexes and legal-services employment.
- `https://probativegrowth.com/mcp/legal-profession-figures`: Legal profession figures: BLS lawyer and paralegal jobs and pay, LSC justice gap, each re-read at source with its quote.
- `https://probativegrowth.com/mcp/limitations`: Statutes of limitations by state for five kinds of civil claim, quoted from the code.
- `https://probativegrowth.com/mcp/marriage-divorce`: CDC NCHS divorce and marriage rates per 1,000 residents by state, 1990-2024, and national divorce and marriage counts since 2000.
- `https://probativegrowth.com/mcp/mdl`: Pending actions in every federal MDL, monthly since 2019.
- `https://probativegrowth.com/mcp/mine-accidents`: MSHA mine accident, injury and illness reports by state, county and degree of injury, 2000 to 2026, coal and metal/nonmetal.
- `https://probativegrowth.com/mcp/mortgage-delinquency`: CFPB share of mortgages 90+ and 30-89 days delinquent by county and state, monthly since 2008, with the change and the 2008-2025 high.
- `https://probativegrowth.com/mcp/mortgage-lending`: HMDA home-purchase and refinance applications, loans, dollars and denial rates by county, state and US.
- `https://probativegrowth.com/mcp/noncitizen-population`: Noncitizen and naturalized-citizen residents by state and county from Census ACS table B05001, with margins of error.
- `https://probativegrowth.com/mcp/nursing-homes`: Nursing home fines, harm and abuse citations by county and state, from CMS, monthly.
- `https://probativegrowth.com/mcp/ny-attorneys`: New York attorneys by county of office, registration status and admission decade, per 10,000 residents, from the court registry.
- `https://probativegrowth.com/mcp/ny-workers-comp`: New York workers' compensation claims by county and accident year: attorney share, controverted, hearings, permanent disability.
- `https://probativegrowth.com/mcp/opinions`: State and ABA ethics opinions on lawyer advertising and marketing, 2015 to 2026.
- `https://probativegrowth.com/mcp/osha-enforcement`: OSHA inspections, violations and current penalties by state and industry from the DOL enforcement files, latest year and ten-year window.
- `https://probativegrowth.com/mcp/platforms`: Ad-platform policies that touch law-firm ads: Google, Microsoft, Meta, LinkedIn, YouTube, ChatGPT.
- `https://probativegrowth.com/mcp/population-change`: Census county deaths, births, international and domestic migration, and residents 65+, 75+ and 85+, Vintage 2025 (years 2020 to 2025).
- `https://probativegrowth.com/mcp/practice-official`: Official statistics (U.S. Courts, EEOC, EOIR, NHTSA FARS) quoted on the practice x state pages, one sourced sentence per record.
- `https://probativegrowth.com/mcp/product-recalls`: CPSC consumer product recalls by year and hazard class, with the notices that report an injury or a death.
- `https://probativegrowth.com/mcp/rail-casualties`: Railroad casualties, crossing incidents and train accidents by county from FRA Forms 55a, 57 and 54, by who was hurt.
- `https://probativegrowth.com/mcp/referral`: Referral-fee and fee-splitting rules for lawyers, by state.
- `https://probativegrowth.com/mcp/robocall-complaints`: FCC complaints about unwanted calls and texts, by state and month.
- `https://probativegrowth.com/mcp/search-demand`: Monthly Google lawyer searches by practice, EN and ES, for the whole US, all 50 states and DC, with suggestions and searches per firm.
- `https://probativegrowth.com/mcp/serp-landscape`: Google search landscape for legal searches: directories, videos, People Also Ask and concentration, by practice, search type and language.
- `https://probativegrowth.com/mcp/ssa-beneficiaries`: SSA OASDI beneficiaries and monthly benefit amounts by state and type of benefit.
- `https://probativegrowth.com/mcp/state-civil-rights`: State civil-rights agency complaint and charge counts with the source document and quote for each figure.
- `https://probativegrowth.com/mcp/state-courts`: State trial-court case filings by county and case type (TX WA MD IN WI VA PA OR WV NE ME CA LA HI), by practice area, with county FIPS.
- `https://probativegrowth.com/mcp/state-wage-claims`: State labor agency wage claim counts with the source document and quote for each figure.
- `https://probativegrowth.com/mcp/tcpa-ada-filings`: TCPA (code 485) and ADA-other (code 446) federal cases filed, by district court and fiscal year, from the FJC civil case file.
- `https://probativegrowth.com/mcp/toxic-releases`: EPA TRI toxic chemical releases by county: facilities, pounds on site, carcinogens, PFAS, benzene, lead, ethylene oxide.
- `https://probativegrowth.com/mcp/truck-crashes`: FMCSA truck and bus crashes by county, state and year: fatal and injury crashes, deaths and injuries, ten years.
- `https://probativegrowth.com/mcp/tx-nonsubscribers`: Texas employers with no workers' compensation coverage (DWC Form-005 filings), counted by county, 2024 to 2026.
- `https://probativegrowth.com/mcp/unemployment`: BLS county and state unemployment rate, unemployed and labor force, annual averages and the latest month.
- `https://probativegrowth.com/mcp/union-membership`: BLS union members and workers represented by unions by state, 2024-2025: thousands and percent of employed wage and salary workers.
- `https://probativegrowth.com/mcp/uscis-offices`: USCIS naturalization (N-400) and green card (I-485) applications received, decided and pending, by field office and quarter.
- `https://probativegrowth.com/mcp/va-compensation`: VA disability compensation recipients by county and combined rating (0-20% to 100%), age, sex, FY2025 vs FY2024.
- `https://probativegrowth.com/mcp/va-spending`: VA compensation, pension and survivor benefit dollars by county, FY2025, with the year-earlier change.
- `https://probativegrowth.com/mcp/vehicle-complaints`: NHTSA vehicle safety complaints by state, make, model year and component: crashes, fires, injuries, deaths, recalls.
- `https://probativegrowth.com/mcp/veterans-representation`: VA-accredited attorneys and claims agents per veteran by state, county counts, and appeals outcomes by representation.
- `https://probativegrowth.com/mcp/wage-enforcement`: DOL wage-and-hour back wages and OSHA inspections, violations and penalties by county, state, law and industry, ten years.
- `https://probativegrowth.com/mcp/warn-layoffs`: WARN layoff and closure notices and employees by county and month for California and Texas.
- `https://probativegrowth.com/mcp/wc-benefits`: Workers' compensation maximum weekly benefit by state, with the period, the agency source and the verbatim quote.
- `https://probativegrowth.com/mcp/work-injuries`: Workplace injuries and fatal work injuries by state and industry, from BLS SOII and CFOI: rates, case counts and the riskiest sectors.

## Mirrors

- Hugging Face: <https://huggingface.co/datasets/ProbativeGrowth/legal-marketing-data> (CSV and JSON, one config per dataset)
- Kaggle: <https://www.kaggle.com/datasets/probativeoperations/legal-marketing-open-data-us> (CSV and JSON, with the data dictionaries)
- Zenodo: <https://zenodo.org/communities/probative-legal-marketing-data/> (every version, with its DOI)

## License

CC BY 4.0. Credit "Probative Growth" and link the dataset page. See `LICENSE`.

## How this repository stays current

The site is the source of truth: <https://probativegrowth.com/data/>. This repository is a copy of the published files, and this page is written from those files each time they are copied, counts and dates included. When a dataset gets a new version on the site, the same files are pushed here and a tagged release is made for that version. Each dataset's `changes.json` and its Zenodo versions record what changed and when, and `mirror.json` lists the version, DOI and row count of every dataset in this copy.
