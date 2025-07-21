# Adding a Knowledge Sidecar to PTC Windchill

In automotive manufacturing, PLM systems like **PTC Windchill**, Siemens Teamcenter, and Dassault ENOVIA are essential for managing complex product data, but they weren’t built to manage the **knowledge** that surrounds it. The decisions, fixes, and lessons that engineers accumulate over time rarely make it into structured product records. That’s where **Phlow** comes in. Acting as a **knowledge sidecar**, Phlow complements your PLM by capturing and surfacing the tacit, cross-functional insights that don’t live in CAD models or change orders but are critical to building better products, faster.

## Context

At Protogen Corp, a Tier 1 automotive supplier, engineers and project teams rely on PTC Windchill to manage product data and lifecycle processes. The PLM system handles BOMs, part hierarchies, revisions, and change orders with precision, but every time a product issue came up, teams hit a wall.

- Where were the discussions around past failures?
- Who had flagged this issue two quarters ago?
- What workaround had the assembly team discovered in the last generation of the part?

None of that was in Windchill. It lived in documents, inboxes, hallway conversations, or had already walked out the door.

## The Challenge

Windchill excelled at tracking structured product data.  
But tacit knowledge, the critical lessons, fixes, and decisions around each part, was nowhere to be found.

The company faced three core issues:

- Tribal knowledge stayed tribal, known only to those who’d been there before
- No context across silos: Manufacturing, R&D, and Quality each kept separate notes
- Slow onboarding: New engineers couldn’t see the “why” behind the data

PLM had the what. The organisation lacked the how and why.

## What Phlow Did

Protogen adopted Phlow as a knowledge sidecar to Windchill, without disrupting its core PLM workflows.

Here’s how it worked:

- **Lightweight Integration**: Phlow synced part names and numbers from Windchill into its graph database. No duplication of files or ownership, just smart metadata alignment.
- **Live Lookup**: When a user viewed a part in Phlow, the system pulled the latest info directly from Windchill’s API, always up to date, always read-only.
- **Knowledge Anchoring**: Users could now add wiki articles, blogs, lessons learned, documents, and discussions to any part, without rigid templates or formal gatekeeping.
- **Skill Linking**: Knowledge wasn’t just attached to parts. It was also linked to competency areas, helping identify experts and connect the dots across products.

Whether someone searched for a failure mode, a workaround, or best practices for assembly under tight tolerances, Phlow returned connected knowledge, across teams, formats, and roles.

## Outcome

With Phlow in place, Protogen saw an immediate shift:

- Faster resolution of issues during production and testing
- Fewer repeated mistakes; past lessons were now discoverable and accessible
- Shorter onboarding cycles for new engineers, who could now explore not just data but context
- Improved collaboration across R&D, Manufacturing, and Quality, who now contributed to the same living knowledge graph

> “_Windchill tells me what version of the part I’m holding. Phlow tells me why we made it that way — and what went wrong before._”
>
> – Engineering team member

## Why This Matters

PLM systems like Windchill are built for product data, they’re not built for human knowledge.

Phlow doesn’t replace your PLM. It rides alongside it, turning isolated expertise into connected knowledge, and static records into dynamic insight.

In a high-stakes industry where every redesign, delay, or defect costs time and trust, Phlow gives suppliers an edge: The ability to learn once, and apply it everywhere.
