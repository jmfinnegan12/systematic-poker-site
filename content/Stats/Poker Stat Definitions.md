# Poker Stat Definitions
Handy list of brief explanations of poker stats

## On Optimal Ranges

The ranges listed here are **empirical heuristics**, not mathematically derived optima. They come primarily from population-level analysis of winning regulars at 6-max NL, as documented across poker training sites, solver studies, and coaching literature. The reasoning is roughly: if a large sample of winning players at a given stake cluster within a range, deviating significantly from it is a signal worth investigating.

A few important caveats:

- **GTO doesn't map cleanly to stat ranges.** Solver outputs are strategy profiles, not frequency targets — a GTO player's VPIP or 3-bet% depends heavily on what opponents are doing. The ranges here approximate what GTO-influenced play looks like in a typical 6-max pool, not a universal equilibrium.
- **Interdependencies matter more than individual stats.** VPIP and PFR should stay close together (a wide gap means too much calling). High ATS should pair with a lower Fold to 3-Bet. No stat should be read in isolation.
- **Stake and pool matter.** These ranges are calibrated for mid-stakes online 6-max. Optimal play at microstakes (vs. recreational pools) often looks different — e.g., higher VPIP/PFR gap can be fine when opponents are very passive.
- **Some ranges are more subjective than others.** VPIP and PFR have strong theoretical grounding and tight empirical consensus. Ranges for CBet%, Check-Raise%, and WWSF are wider and more context-dependent — treat those bounds loosely.

Use these ranges as a starting point for leak detection, not as targets to optimize toward blindly.

**Adapting ranges to opponent pool data.** Because Ignition is anonymous, opponent study means understanding the pool at each stake level and identifying player types in real time rather than building individual profiles. That data should directly inform how far to deviate from the default ranges above. The core principle is counter-exploitation: each stat has a direction you should push it when the pool skews a particular way. A pool with high Fold to 3-Bet rewards an inflated 3-Bet% well beyond the 6–9% default; a pool with high Fold to CBet rewards a higher CBet% and larger sizing; a loose-passive pool (high VPIP, low PFR) rewards tightening your own VPIP/PFR, widening your value range, and reducing bluff frequency. Conversely, a pool that defends well and calls too much should push you toward the lower end of aggression ranges and toward thinner, more frequent value bets. The player-type taxonomy (nit, TAG, LAG, fish, maniac) maps directly onto stat signatures — each type has a characteristic stat profile — so once you've identified a type in real time, the exploit is essentially knowing which of your own stats to push up or down in response. The ranges in this file represent a reasonable default against a balanced, unknown pool; treat them as the baseline you deviate from, not the target you return to.

## Summary

| Stat                 | Pre/Post Flop | Summary                                              | Optimal Range (6max) |
| -------------------- | ------------- | ---------------------------------------------------- | -------------------- |
| [[VPIP]]             | Preflop       | How often you voluntarily put money in preflop       | 19–25%               |
| [[PFR]]              | Preflop       | How often you enter the pot with a raise             | 16–22%               |
| [[3-Bet]]            | Preflop       | How often you re-raise when facing an open           | 6–9%                 |
| [[Fold to 3-Bet]]    | Preflop       | How often you fold your open to a 3-bet              | 50–65%               |
| [[ATS]]              | Preflop       | How often you raise in late position when folded to  | 30–50%               |
| [[Fold to BB Steal]] | Preflop       | How often you fold the BB to a steal raise           | 55–70%               |
| [[AF]]               | Postflop      | Ratio of aggressive to passive postflop actions      | 2–4                  |
| [[CBet]]             | Postflop      | How often you bet the flop after raising preflop     | 45–70%               |
| [[Fold to CBet]]     | Postflop      | How often you fold when facing a continuation bet    | 35–55%               |
| [[Check-Raise]]      | Postflop      | How often you check-raise when given the opportunity | 8–15%                |
| [[WTSD]]             | Postflop      | How often you reach showdown after seeing the flop   | 25–30%               |
| [[W$SD]]             | Postflop      | How often you win money when you reach showdown      | 50–60%               |
| [[WWSF]]             | Postflop      | How often you win the pot after seeing the flop      | 42–50%               |
| [[Win Rate]]         | Overall       | Percentage of hands won                              | N/A                  |
| [[BB per 100]]       | Overall       | Net profit in big blinds per 100 hands               | 5+ BB/100            |

---

## Preflop
- [[VPIP]]
- [[PFR]]
- [[3-Bet]]
- [[Fold to 3-Bet]]
- [[ATS]]
- [[Fold to BB Steal]]

## Postflop
- [[AF]]
- [[CBet]]
- [[Fold to CBet]]
- [[Check-Raise]]
- [[WTSD]]
- [[W$SD]]
- [[WWSF]]

## Overall
- [[Win Rate]]
- [[BB per 100]]