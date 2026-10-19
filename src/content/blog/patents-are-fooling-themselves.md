---
title: "Patents Are Fooling Themselves"
description: "Stratasys developed fused deposition modeling in 1988. In 2009 the patent expired. What followed was not a collapse. It was a boom."
pubDate: 2026-10-19
author: "Brach Janney"
---

Stratasys developed fused deposition modeling in 1988. The method, now usually called fused filament fabrication because Stratasys still owns the name, is the most popular hobbyist 3D printing process by number of machines. For years its patent kept the method in a few expensive machines. In 2009 the patent expired. What followed was not a collapse. It was a boom. Commercial printers and open designs like RepRap spread fast, and Wikipedia credits the expiry with a price drop of roughly two orders of magnitude.

I think the patent system is fooling itself about what the fence buys. If I'm wrong, fields should grow no faster after their key patents end.

## The best case for patents

The case for patents deserves to be built properly before I try to break it.

It goes like this. Invention is expensive and copying is cheap. If anyone can copy a new design the day it ships, nobody will pay for the research. A temporary monopoly fixes that. The inventor gets a protected window to earn back the cost, and the public gets the full disclosure when the window ends. Everyone wins, eventually.

There is a sharper version. A monopolist can earn more from a small fenced market than from a share of a big open one. If so, the fence isn't a delusion. It's a business plan.

## Where it breaks

The 3D printing case is the check. I can't show that Stratasys did worse under its patent. The steelman may be right about the holder: a big slice of a small pie can be rational.

So I'll claim only what the evidence supports. Patents kept the field small, and the field grew when they ended. The holder's profit and the field's growth are different things, and the patent system justifies itself by the second. A fence that pays its owner while keeping the field small fails on its own terms.

That is the delusion: a fence sold as progress that held progress back.

## The system is doubling down

Reform isn't pushing the other way. Two patent bills introduced in the Senate in 2023, PREVAIL and PERA, both strengthen patents. Both were reintroduced in May 2025 and, per Congress.gov, as of October 2026 sit in the Senate Judiciary Committee. PREVAIL would generally limit inter partes review challenges to people sued or charged with infringement. PERA would remove court-made limits on what can be patented.

Challenging a bad patent is already hard. Patent Office fees alone for inter partes review come to about $52,000 for up to 20 claims if the case goes forward, before any lawyer is paid. In the Patent Office's own data for fiscal 2026 through June, half of all petitions were denied a trial.

Fighting patents one at a time means playing the house's game at the house's prices. I'd rather not.

## How to show them: win

Arguments rarely change the mind of someone who profits from being wrong. Results do. My plan for AOSSI rests on three moves.

**1. Publish first, with dates.** A defensive publication puts a design into the public record as prior art. It has to be detailed enough for a skilled person to build from. If it is, a later patent on it becomes harder to get and easier to kill. Technical Disclosure Commons is free, dates each upload, and exists to prevent later patenting. AOSSI plans to publish its designs openly, with clear dates. Space hardware also faces export law, so AOSSI plans to review every design for export rules before it goes public.

**2. Use share-alike licenses.** AOSSI plans to license its documentation under CC-BY-SA 4.0 and its hardware under CERN-OHL-S. Share-alike means anyone can use, copy or improve the work. What they can't do is release a changed version under closed terms. CERN-OHL-S also includes a patent license, and anyone who sues claiming the design infringes their patent loses their license.

Share-alike has limits, and Prusa Research shows them. Josef Průša has written that Prusa's printers and software are under the GNU GPL, a share-alike license. Bambu Lab's slicer is a fork of PrusaSlicer, under PrusaSlicer's own share-alike license. Bambu had to share its changes, and it competed anyway. Around 2023 and 2024 Prusa closed some newer designs, citing competition. I don't think Prusa is the villain here. Share-alike makes competitors share their changes. It doesn't stop them competing. For AOSSI, open competition is the point.

**3. Build it cheaper and faster in the open.** If open space hardware gets built for less and ships sooner, a patent on yesterday's approach loses much of its power to block anyone. Nobody has to repeal anything. The patent matters a lot less.

Step three is the hard part. It involves building spacecraft.

## What I'm not claiming

AOSSI hasn't been formed yet. It hasn't built, shipped or published any designs. Everything above is a plan. I'm also not giving legal advice. Anyone acting on this should talk to a lawyer.

What I am claiming is that one well-documented case points one way. Expiry wasn't the only change. RepRap started in 2005, the same year as Arduino, a cheap open electronics board. Still, when the fence came down on 3D printing, the field grew. The people holding fences today are betting that history won't repeat. I'd like to help it repeat.

If you think I'm wrong, tell me where. I'd rather have this idea broken now than find out later. Please feel free to engage.

## Sources

- Fused filament fabrication (FDM origin, popularity, patent expiry, price drop): https://en.wikipedia.org/wiki/Fused_filament_fabrication
- RepRap project: https://en.wikipedia.org/wiki/RepRap_project
- Arduino (founded 2005): https://en.wikipedia.org/wiki/Arduino
- Prusa Research: https://en.wikipedia.org/wiki/Prusa_Research
- Josef Průša, "The state of open-source in 3D printing in 2023": https://blog.prusa3d.com/the-state-of-open-source-in-3d-printing-in-2023_76659/
- Original Prusa i3 printed parts (GPL-2.0): https://github.com/prusa3d/Original-Prusa-i3
- PrusaSlicer (AGPL-3.0): https://github.com/prusa3d/PrusaSlicer
- Bambu Studio (AGPL-3.0, based on PrusaSlicer): https://github.com/bambulab/BambuStudio
- PREVAIL Act, S.2220 (118th Congress): https://www.govinfo.gov/content/pkg/BILLS-118s2220is/html/BILLS-118s2220is.htm
- Patent Eligibility Restoration Act, S.2140 (118th Congress): https://www.govinfo.gov/content/pkg/BILLS-118s2140is/html/BILLS-118s2140is.htm
- PREVAIL Act, S.1553 (119th Congress): https://www.congress.gov/bill/119th-congress/senate-bill/1553
- Patent Eligibility Restoration Act of 2025, S.1546 (119th Congress): https://www.congress.gov/bill/119th-congress/senate-bill/1546
- USPTO fee schedule: https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule
- PTAB trial outcomes, FY26 Q3: https://www.uspto.gov/sites/default/files/documents/TrialsOutcomeRoundupFY26Q3.pdf
- Defensive publication (enabling description): https://en.wikipedia.org/wiki/Defensive_publication
- Technical Disclosure Commons FAQ: https://www.tdcommons.org/faq.html
- CERN Open Hardware Licence: https://cern-ohl.web.cern.ch/
