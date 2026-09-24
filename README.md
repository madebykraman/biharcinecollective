# Bihar Cine Collective

A living discovery, archive, and cultural index of cinema connected to Bihar.

## Mission

Document, connect, and make discoverable the films, people, places, history, institutions, events, education, and viewing pathways that form Bihar's relationship with cinema.

This is not another generic movie database. It is a regional cinema intelligence and discovery layer, combining structured film data with editorial context, provenance, archival material, and practical discovery.

## Product direction

Reference points include MUBI's editorial curation and cinematic presentation, Letterboxd's discovery/community primitives, and regional cultural archives. MUBI emphasizes hand-picked films, collections, retrospectives, editorial writing, and community; Letterboxd combines a film database with lists, watchlists, reviews, diaries, cast/crew discovery, and activity. The Collective should borrow interaction patterns, not imitate either product.

## Core sections

- Films
- People / Film Fraternity
- Bihar Cinema History
- Places & Locations
- Where to Watch
- Events: screenings, festivals, workshops, talks, exhibitions
- Learn: beginner's guide, filmmaking resources, institutions
- Collections / Editorial
- Archive / Timeline
- News & Updates
- Contribute

## Film record

Each film should support:

- Title, alternate titles, year, runtime
- Language(s)
- Film type: feature, short, documentary, experimental, animation, music/video, etc.
- Director, writer, producer, cinematographer, editor, cast and crew
- Bihar relationship: born in Bihar, based in Bihar, shot in Bihar, story/location connection, language/culture connection, produced by Bihar entity, subject about Bihar, festival/event connection, or other documented relationship
- District/city/location
- Synopsis
- Historical/cultural context
- Availability: cinema, OTT, YouTube, archive, rental, physical media, unavailable/unknown
- External identifiers and links: IMDb, TMDB, Wikidata, official site, festival page, YouTube/Vimeo, etc.
- Sources and provenance for every important claim
- Editorial notes / verified status
- Images/poster/stills where legally usable

## People

Index directors, actors, writers, producers, cinematographers, editors, composers, designers, technicians, exhibitors, programmers, critics, academics, educators and institutions with a documented Bihar connection.

Do not infer Bihar affiliation. Record the specific connection and source.

## Places

Cinema halls, film societies, cultural centres, universities, film schools, production houses, studios, shooting locations, archives, museums and recurring event venues.

## Events

Display-only discovery layer for film festivals, screenings, film society programmes, workshops, masterclasses, talks, retrospectives, exhibitions and relevant open calls/residencies.

Each event should retain date, venue, city, organiser, ticket/registration link, source and status.

## Discovery model

Search and browse should work across film, person, city/district, pincode where meaningful, language, decade/year, genre/form, role, place, event, availability, historical period, relationship to Bihar, source/archive and editorial collection.

## Editorial layer

The interface should feel closer to an exhibition catalogue than a utility dashboard.

Principles:

- Cinema-first typography
- Large imagery and deliberate negative space
- Strong poster/still-led layouts
- Editorial essays and timelines
- Quiet, restrained motion
- No generic SaaS cards
- No visual clutter
- No fake ratings or algorithmic authority
- Clear distinction between sourced fact, editorial interpretation, and community contribution

## Suggested homepage

1. Cinematic opening statement
2. Featured film / archival image
3. Explore Bihar through cinema
4. Films
5. People
6. Places
7. History / timeline
8. Watch / screenings
9. Learn
10. Latest additions
11. Contribute

## Data architecture

Recommended entities:

films
people
credits
places
organizations
events
venues
sources
availability
languages
genres
collections
timeline_entries
relationships
media_assets
contributions
change_log

The relationships layer is important: a person, film, place or institution may connect to Bihar in multiple documented ways.

## Provenance

Every externally sourced record should retain:

- source URL
- source name
- retrieved date
- source type
- field(s) supported
- verification state
- notes

Priority sources should include primary/official sources, reputable archives and festival/institution pages, then major databases such as IMDb/TMDB/Wikidata where appropriate.

## Research workflow

1. Discover candidate records from web, databases, communities and user submissions.
2. Normalize names, titles, dates and identifiers.
3. Establish the Bihar connection explicitly.
4. Cross-check important facts against independent sources.
5. Store source provenance.
6. Mark confidence/verification.
7. Add editorial context only after factual record is established.
8. Publish.
9. Periodically re-check time-sensitive availability and events.

## Community discovery

Research should monitor public discussion and discovery signals from X, Reddit, film forums, local cultural communities, YouTube, Instagram and relevant institutional channels.

Community discussion is a discovery signal, not automatically a factual source. Claims should be verified before entering the canonical database.

## Product phases

### Phase 1 — Foundation
- Data schema
- Seed film/person/place dataset
- Source/provenance model
- Editorial design system
- Responsive web shell
- Search and browse

### Phase 2 — Discovery
- Film/person/place detail pages
- Collections
- Timeline
- Where to watch
- Events
- Beginner guide

### Phase 3 — Community
- Contributions
- Suggestions/corrections
- User lists
- Saved films
- Optional watch history

### Phase 4 — Intelligence
- Relationship graph
- Personalised discovery
- Map exploration
- Semantic search
- Research trails
- Automated source refresh with human verification

## Research benchmarks

MUBI: editorial curation, collections, retrospectives, Notebook and community.
Letterboxd: film discovery, watchlists, lists, reviews, diary, cast/crew database and community activity.

The Collective's differentiation is regional depth, cultural memory, provenance, practical discovery and the Bihar-specific relationship graph.

## Non-goals

- Do not become a generic IMDb clone.
- Do not reproduce copyrighted database content wholesale.
- Do not present unsourced claims as facts.
- Do not turn community popularity into historical significance.
- Do not attempt streaming aggregation without rights/official links.
- Do not overbuild accounts/community before the archive and discovery layer are useful.

## Current status

Repository initialized on 24 September 2026. Next priority: research-backed schema, seed dataset and world-class editorial UI prototype.


## Research expansion — September 2026

The archive is now designed as a source-first cultural research system rather than a film list. The current research layer separates records, relationships, timeline entries and editorial collections. Every historical assertion should retain provenance and an explicit verification state. Official Bihar sources are prioritized for institutions, policy, events and Bihar-connected practitioners; film databases are metadata aids; secondary histories are used with caution; community posts are discovery leads rather than automatic evidence.

The next ingestion target is 100–300 records across films, people, places, organizations, events and archival references. Expansion should happen in batches with duplicate detection, source capture, relationship mapping and uncertainty preserved. Do not manufacture completeness: an unverified historical claim remains visibly unverified.

The Bihar State Film Development and Finance Corporation currently publishes film-production incentives, location and facilitation information, while Bihar's cultural authorities describe the state's regional-language cinema across Bhojpuri, Maithili, Magadhi and Angika. citeturn0search0turn0search8 The Bihar State Archives also provides a potential primary-source route for future historical verification. citeturn0search10
