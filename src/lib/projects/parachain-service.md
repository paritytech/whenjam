---
title: 'Parachain Service on JAM'
excerpt: 'A hardened Parachain Service for JAM plus its Cumulus integration, intended to replace the Polkadot Relay Chain, demonstrated on a testnet with cross-chain messaging.'
start: ''
updated: '2026-11-09'
progressBy: 'headings'
---

## Abstract

The deliverable is a feature-complete, hardened **Parachain Service**: a JAM service whose Refine
and Accumulate logic validates parachain blocks and records their new head data. Alongside it comes
the **Cumulus integration** that lets an existing Cumulus collator and parachain runtime build work
packages for the service. The service covers the full parachain lifecycle (registration and
management, code upgrades, validator-key staging, service self-upgrade, forced updates and clean-up,
authorizer and coretime). It also has cross-chain messaging (XCMP) and the crypto host functions
it needs. It will be running on a testnet, with a prototyped migration path for existing Polkadot
parachains, and both specs and the code will be externally audited.

## Phases & Milestones

### Phase 1: Specifications & Onboarding (M1–M2)

Three things run in parallel: the Parachain Service spec, the Cumulus integration spec, and the
crypto benchmarking plus harness scaffolding.

#### M1: get oriented and start drafting

- [x] Onboard the team to the existing Parachain Service spec and identify the open items to close (e.g. the §8 messaging direction).
- [x] Draft the Cumulus integration spec: candidate and work-package construction, work-package submission and networking to guarantors, the PVF entry point (`jam_validate_block`) and its inputs and outputs, authorizer and collator-token construction, and the registration handshake. Keep it minimal.
- [x] Start the crypto benchmarking.
- [x] Scaffold the JAM mock/harness the PoC will run on.

#### M2: finalize and approve

- [x] Close the Parachain Service spec's open items and get it approved.
- [x] Get the Cumulus integration spec approved.
- [x] Produce the first crypto benchmark numbers and a shortlist of the host functions we need.

#### Gate (Phase 1)

- [x] **Specs approved:** Parachain Service spec approved; Cumulus integration spec approved; a crypto host-function shortlist in hand; the harness skeleton standing up.

### Phase 2: Proof of Concept (M3)

Built from both specs. The crypto host functions are assumed for now, so the PoC does not wait on
the Gray Paper proposal.

- [x] The service-side happy path: spawn the child PVM, run `jam_validate_block`, check the parent head and validation code, and update the head data.
- [x] A Cumulus collator builds a candidate and work package from the integration spec, produces a PoV, and registers against the harness.
- [x] The harness wires it all together (the data availability and preimage calls), with the crypto host functions stubbed out.
- [x] Spec audit (external, in parallel): with both specs approved, an external review of the specs runs while the PoC tests them in practice.

#### Gate (Phase 2)

- [x] **Working PoC:** Register a parachain, have a collator produce a block, validate it, and record the new head, demonstrated end to end on the harness, with the spec audit underway.

### Phase 3: Review & Testnet Experiments (M4–M5)

The code review and the testnet work run in parallel.

- [ ] Review the PoC, address the findings, and flesh out the paths the PoC stubbed.
- [ ] Deploy the Parachain Service onto an existing testnet, wire up a collator, run the registration flow, and watch real block production. Feed what we learn back into the Cumulus spec.
- [x] Finish the crypto benchmarking and decide which host functions we need.
- [ ] Submit a Gray Paper proposal or extension for the crypto host functions.

#### Gate (Phase 3)

- [ ] **Reviewed + testnet-running:** Codebase reviewed and adjusted; the Parachain Service running in testnet experiments; crypto host-function set decided and the Gray Paper proposal submitted.

### Phase 4: Hardening & Messaging (M6–M12)

This is where most of the production engineering happens.

#### M6–M8: Hardening to feature-complete

- [ ] Take the lifecycle to production quality: code upgrades, validator-key staging, service self-upgrade, forced updates and clean-up, restricted-caller checks, and full error coverage.
- [ ] Harden the Cumulus integration on the testnet: registration, recovery, and code upgrades driven from a real collator.
- [ ] Authorizer and coretime work.
- [ ] Once the proposed crypto host functions are accepted, integrate them, tune performance and gas metering, and check we stay within the work-report size budget.

#### M9–M11: Messaging (XCMP)

- [ ] Take the external XCMP spec and work out what it needs from the service: the inbound and outbound host functions, the channel state to store, and how message lifetime interacts with the data availability window. Feed any integration concerns back to the spec team.
- [ ] Demonstrate messages flowing between two parachains on the testnet.

#### M6+: Code / system audit (external, runs alongside)

- [ ] External code/system audit of the service running on the testnet, covering each area as it stabilizes; issues fixed as they come up.
- [ ] Follow-up audit pass for late-landing work (e.g. the migration prototype).

#### M10–M12: Migration & stabilization (in parallel)

- [ ] Migration prototype: design and prototype the path that moves existing parachains from the relay-chain parachain host to the Parachain Service, handing over their state (ParaId, head data, validation code) and sequencing the cut-over. Demonstrated on the testnet, short of the real mainnet cut-over.
- [ ] Run the full integration test suite.
- [ ] Do a final pass over the spec.
- [ ] Close out the audit findings and prepare the audit hand-off.

#### Gate (Phase 4)

- [ ] **Project exit:** A feature-complete, hardened implementation running on the testnet with
messaging, the crypto host functions in place, the migration path prototyped, and the code/system
audit done with its findings addressed.
