---
title: 'Parachain Service on JAM'
excerpt: 'A hardened Parachain Service for JAM plus its Cumulus integration, demonstrated on a testnet with cross-chain messaging.'
start: ''
updated: '2026-11-09'
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

## Scope

### In scope

- **Parachain Service specification**: finish the existing spec and get it approved.
- **Cumulus integration specification**: a minimal spec covering how a Cumulus-based collator and
  parachain runtime interact with the Parachain Service (candidate/work-package construction,
  work-package submission / networking to guarantors, PVF entry point, authorizer/token
  construction).
- **A feature-complete Parachain Service implementation**: the full service, i.e. Refine +
  Accumulate, code-upgrade lifecycle, validator-key staging, service self-upgrade, forced updates /
  clean-up, parachain registration and management, and authorizer/coretime. Demonstrated end-to-end
  on a testnet.
- **Crypto host-function benchmarking & Gray Paper proposal**: benchmark candidate crypto host
  functions (hashing, signature verification), decide which are required, and propose them to the
  Gray Paper or write an extension. These can run inside the VM for now and move over to real host
  functions once they are available, so this never blocks the rest of the work.
- **Messaging (XCMP) integration**: implement cross-chain messaging against the XCMP specification,
  which an external team writes. We build against it; we do not write it.
- **Polkadot → JAM migration**: design and prototype the migration path that moves existing
  parachains from the relay-chain parachain host to the Parachain Service (state hand-over,
  ParaId/head/validation-code carry-over, cut-over sequencing). Runs in parallel during the last
  3 months (M10–M12).

### Out of scope

- **Launching the testnet.** We experiment on an existing/available testnet.
- **A zombienet that can run JAM networks.** We need this to spin up test networks, but building it
  is a separate effort. We assume it exists before the testnet work starts.
- **The XCMP specification.** Authoring the XCMP spec is owned by an external team. We implement
  against it (M9–M11); writing the spec itself is out of scope and a hard input dependency.
- **Mainnet rollout.** The deliverable runs on a testnet. Neither a production network launch nor
  the Polkadot → JAM migration cut-over on mainnet is part of this project; the migration is
  designed, implemented and tested (M10–M12).
- **Coretime chain and Asset Hub internal logic.** Only their Parachain-Service-facing calls are in
  scope; their internal economics, deposit policy, and governance are owned by those teams.

### Assumptions

- The Parachain Service spec is mostly complete; M1–M2 are onboarding, closing remaining open items,
  and approval, not authoring from scratch.
- A zombienet that can run JAM networks exists before the testnet work starts (M4), and an existing
  testnet environment is available for the M4+ experiments.
- The Coretime chain and Asset Hub exist as counterparties; we implement only the calls the
  Parachain Service makes to / receives from them.
- The PoC may build against provisional crypto host functions; the benchmarking and Gray Paper work
  runs on its own and is reconciled during the review phase.
- Crypto benchmarking is part-time work for one engineer.

## Phases & Milestones

### Phase 1: Specifications & Onboarding (M1–M2)

Three things run in parallel: the Parachain Service spec, the Cumulus integration spec, and the
crypto benchmarking plus harness scaffolding.

#### M1: get oriented and start drafting

- [ ] Onboard the team to the existing Parachain Service spec and identify the open items to close (e.g. the §8 messaging direction).
- [ ] Draft the Cumulus integration spec: candidate and work-package construction, work-package submission and networking to guarantors, the PVF entry point (`jam_validate_block`) and its inputs and outputs, authorizer and collator-token construction, and the registration handshake. Keep it minimal.
- [ ] Start the crypto benchmarking.
- [ ] Scaffold the JAM mock/harness the PoC will run on.

#### M2: finalize and approve

- [ ] Close the Parachain Service spec's open items and get it approved.
- [ ] Get the Cumulus integration spec approved.
- [ ] Produce the first crypto benchmark numbers and a shortlist of the host functions we need.

#### Gate

- [ ] **G1 (M2): Specs approved.** Parachain Service spec approved; Cumulus integration spec approved; a crypto host-function shortlist in hand; the harness skeleton standing up.

### Phase 2: Proof of Concept (M3)

Built from both specs. The crypto host functions are assumed for now, so the PoC does not wait on
the Gray Paper proposal.

- [ ] The service-side happy path: spawn the child PVM, run `jam_validate_block`, check the parent head and validation code, and update the head data.
- [ ] A Cumulus collator builds a candidate and work package from the integration spec, produces a PoV, and registers against the harness.
- [ ] The harness wires it all together (the data availability and preimage calls), with the crypto host functions stubbed out.
- [ ] Spec audit (external, in parallel): with both specs approved, an external review of the specs runs while the PoC tests them in practice.

#### Gate

- [ ] **G2 (M3): Working PoC.** Register a parachain, have a collator produce a block, validate it, and record the new head, demonstrated end to end on the harness, with the spec audit underway.

### Phase 3: Review & Testnet Experiments (M4–M5)

The code review and the testnet work run in parallel.

- [ ] Review the PoC, address the findings, and flesh out the paths the PoC stubbed.
- [ ] Deploy the Parachain Service onto an existing testnet, wire up a collator, run the registration flow, and watch real block production. Feed what we learn back into the Cumulus spec.
- [ ] Finish the crypto benchmarking and decide which host functions we need.
- [ ] Submit a Gray Paper proposal or extension for the crypto host functions.

#### Gate

- [ ] **G3 (M5): Reviewed + testnet-running.** Codebase reviewed and adjusted; the Parachain Service running in testnet experiments; crypto host-function set decided and the Gray Paper proposal submitted.

### Phase 4: Hardening & Messaging (M6–M12)

This is where most of the production engineering happens.

#### M6–M8: Hardening to feature-complete

- [ ] Take the lifecycle to production quality: code upgrades, validator-key staging, service self-upgrade, forced updates and clean-up, restricted-caller checks, and full error coverage.
- [ ] Harden the Cumulus integration on the testnet: registration, recovery, and code upgrades driven from a real collator.
- [ ] Authorizer and coretime work.
- [ ] Once the proposed crypto host functions are accepted, integrate them, tune performance and gas metering, and check we stay within the work-report size budget.
- [ ] **G4 (M8): Feature-complete service.** Full lifecycle hardened; crypto running in-VM behind a stable interface, with real host functions swapped in if available by then.

#### M9–M11: Messaging (XCMP)

- [ ] Take the external XCMP spec and work out what it needs from the service: the inbound and outbound host functions, the channel state to store, and how message lifetime interacts with the data availability window. Feed any integration concerns back to the spec team.
- [ ] Demonstrate messages flowing between two parachains on the testnet.
- [ ] **G5 (M11): Messaging working.** XCMP design signed off and demonstrated between two parachains on testnet.

#### M6+: Code / system audit (external, runs alongside)

- [ ] External code/system audit of the service running on the testnet, covering each area as it stabilizes; issues fixed as they come up.
- [ ] Follow-up audit pass for late-landing work (e.g. the migration prototype).

#### M10–M12: Migration & stabilization (in parallel)

- [ ] Migration prototype: design and prototype the path that moves existing parachains from the relay-chain parachain host to the Parachain Service, handing over their state (ParaId, head data, validation code) and sequencing the cut-over. Demonstrated on the testnet, short of the real mainnet cut-over.
- [ ] Run the full integration test suite.
- [ ] Do a final pass over the spec.
- [ ] Close out the audit findings and prepare the audit hand-off.
- [ ] **G6 (M12): Migration prototyped.** Polkadot → JAM migration path designed and demonstrated on testnet (short of mainnet cut-over).
- [ ] **G7 (M12): Audited & stable.** Integration suite green; external audit complete on the stable system with findings addressed, and any late-landing work scheduled for a follow-up pass.
