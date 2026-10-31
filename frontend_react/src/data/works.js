// Taken from Suchith_Kumar_FullStack.pdf.
// These are internal IG Group projects — there is no public repo or demo to link,
// and screenshots would be confidential, so the cards are case studies rather than
// the usual screenshot + GitHub/live-site card.
const works = [
  {
    title: 'Auto-Invest — Recurring Investment Engine',
    context: 'IG Group · Singapore & Australia · 2025',
    description:
      'IG’s recurring-investment engine, built in TypeScript on AWS Lambda. A synchronous REST CRUD path serves the mobile portfolio screen, kept deliberately separate from the asynchronous execution pipeline.',
    highlights: [
      '45,000+ live buy orders from 7,000+ client schedules at a 99.6% execution success rate',
      '75,000+ lifecycle events published to EventBridge triggering Braze email notifications',
      'AI-first delivery with Claude Code, cutting development time by ~70%',
    ],
    tech: ['TypeScript', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'API Gateway'],
  },
  {
    title: 'Apple Pay UAE — Automatic Currency Conversion',
    context: 'IG Group · United Arab Emirates · 2025',
    description:
      'End-to-end delivery of automatic AED-to-USD conversion for Apple Pay deposits across five Java and Spring Boot services backed by Oracle, letting UAE clients fund USD accounts in their card currency. Rolled out in stages behind a JMX feature flag with per-account targeting.',
    highlights: [
      '30,000+ card authorisations at a 95% success rate, totalling over USD 70M',
      '20,000+ withdrawals totalling USD 40M via multi-currency withdrawal on the same path',
      'Staged rollout behind a feature flag with per-account targeting',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Oracle'],
  },
  {
    title: 'UAE Crypto CFD Appropriateness Assessment',
    context: 'IG Group · United Arab Emirates · 2024–25',
    description:
      'Replaced a manual, support-mediated compliance gate with a self-service in-platform assessment. Clients previously had to contact IG and wait for Trading Services to lift a trading restriction by hand; the restriction now lifts automatically on submission.',
    highlights: [
      'Time-to-trade cut from 4 days to 2 minutes',
      '1,200+ manual reviews per month removed',
      'Restriction lifecycle built across multiple Spring Boot services over Kafka',
      'Client journey delivered across two React micro-frontends via interop',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'React', 'Micro-frontends'],
  },
];

export default works;
