import{t as e}from"./DK3Fl9T5.js";import{E as t,J as n,w as r}from"./1UEjRFCZ.js";import"./Cl8kLXk_.js";var i=e({default:()=>f,metadata:()=>a}),a={title:`AHMv2`,excerpt:`Migrate the remaining balances and non-system calls off the Polkadot Relay Chain`,start:``,updated:`2026-11-11`,progressBy:`headings`},{title:o,excerpt:s,start:c,updated:l,progressBy:u}=a,d=t(`<h2 id="abstract"><a aria-hidden="true" tabindex="-1" href="#abstract"><span class="icon icon-link"></span></a>Abstract</h2> <p>The deliverable is the <strong>Minimal Relay</strong> (<a href="https://polkadot-fellows.github.io/RFCs/approved/0032-minimal-relay.html" rel="nofollow">RFC-32</a>), i.e. the Relay Chain is left with no signed extrinsics, zero DOT and no way to fund it again, clearing the path to Parachain Service and JAM. <a href="https://github.com/paritytech/polkadot-sdk/issues/13481" rel="nofollow">AHMv2</a> is the completion of the deliverable, building on the <a href="https://hackmd.io/@seadanda/B1QIVXrwJg" rel="nofollow">Asset Hub Migration</a> completed last year where balances, staking, governance, and other user-facing functionality were migrated to the Hub.</p> <h2 id="phases--milestones"><a aria-hidden="true" tabindex="-1" href="#phases--milestones"><span class="icon icon-link"></span></a>Phases & Milestones</h2> <h3 id="code-complete"><a aria-hidden="true" tabindex="-1" href="#code-complete"><span class="icon icon-link"></span></a>Code complete</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> <a href="https://github.com/paritytech/polkadot-sdk/issues/12731" rel="nofollow">Parachain Registrar</a>: Most of the functionality is left on Relay Chain, while user facing interactions are migrated to Coretime. Bi-directional communication between Relay Chain and Coretime via XCM.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <a href="https://github.com/paritytech/polkadot-sdk/issues/12718" rel="nofollow">HRMP Channels</a>: HRMP channel management stays on the Relay Chain. Only the channel deposits are moved to Coretime.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <a href="https://github.com/paritytech/polkadot-sdk/issues/12719" rel="nofollow">Vestigial Balance Migration</a>: <ul><li>Migrate registrar and HRMP deposits along with minimum balance needed for parachain renewal to Coretime during a multi-block migration</li> <li>Free balance is teleported from Relay Chain to Asset Hub.</li> <li>Disallow teleports/reserve transfers to Relay Chain.</li></ul></li> <li class="task-list-item"><input type="checkbox" disabled=""/> Proxies that are still meaningful on Coretime are recreated there. The rest are dropped.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> No signed extrinsics on Relay Chain post migration: <ul><li>Filter out every call which accepts a signed origin.</li> <li>Parachains can still reach the Relay Chain over XCM for HRMP and registrar calls only, via rate-limited unpaid execution. Everything else in the XCM executor is restricted to system origins.</li></ul></li> <li class="task-list-item"><input type="checkbox" disabled=""/> Filter the on-demand extrinsics on the relay. Retire on-demand credits (from Coretime::Broker).</li> <li class="task-list-item"><input type="checkbox" disabled=""/> New <code>on-demand</code> pallet on Coretime with a <code>place_order</code> extrinsic paying DOT.</li></ul>`,1);function f(e){var t=d();n(8),r(e,t)}var p=e({default:()=>x,metadata:()=>m}),m={title:`Parachain Service on JAM`,excerpt:`A hardened Parachain Service for JAM plus its Cumulus integration, intended to replace the Polkadot Relay Chain, demonstrated on a testnet with cross-chain messaging.`,start:``,updated:`2026-11-09`,progressBy:`headings`},{title:h,excerpt:g,start:_,updated:v,progressBy:y}=m,b=t(`<h2 id="abstract"><a aria-hidden="true" tabindex="-1" href="#abstract"><span class="icon icon-link"></span></a>Abstract</h2> <p>The deliverable is a feature-complete, hardened <strong>Parachain Service</strong>: a JAM service whose Refine
and Accumulate logic validates parachain blocks and records their new head data. Alongside it comes
the <strong>Cumulus integration</strong> that lets an existing Cumulus collator and parachain runtime build work
packages for the service. The service covers the full parachain lifecycle (registration and
management, code upgrades, validator-key staging, service self-upgrade, forced updates and clean-up,
authorizer and coretime). It also has cross-chain messaging (XCMP) and the crypto host functions
it needs. It will be running on a testnet, with a prototyped migration path for existing Polkadot
parachains, and both specs and the code will be externally audited.</p> <h2 id="phases--milestones"><a aria-hidden="true" tabindex="-1" href="#phases--milestones"><span class="icon icon-link"></span></a>Phases & Milestones</h2> <h3 id="phase-1-specifications--onboarding-m1m2"><a aria-hidden="true" tabindex="-1" href="#phase-1-specifications--onboarding-m1m2"><span class="icon icon-link"></span></a>Phase 1: Specifications & Onboarding (M1–M2)</h3> <p>Three things run in parallel: the Parachain Service spec, the Cumulus integration spec, and the
crypto benchmarking plus harness scaffolding.</p> <h4 id="m1-get-oriented-and-start-drafting"><a aria-hidden="true" tabindex="-1" href="#m1-get-oriented-and-start-drafting"><span class="icon icon-link"></span></a>M1: get oriented and start drafting</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Onboard the team to the existing Parachain Service spec and identify the open items to close (e.g. the §8 messaging direction).</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Draft the Cumulus integration spec: candidate and work-package construction, work-package submission and networking to guarantors, the PVF entry point (<code>jam_validate_block</code>) and its inputs and outputs, authorizer and collator-token construction, and the registration handshake. Keep it minimal.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Start the crypto benchmarking.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Scaffold the JAM mock/harness the PoC will run on.</li></ul> <h4 id="m2-finalize-and-approve"><a aria-hidden="true" tabindex="-1" href="#m2-finalize-and-approve"><span class="icon icon-link"></span></a>M2: finalize and approve</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Close the Parachain Service spec’s open items and get it approved.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Get the Cumulus integration spec approved.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Produce the first crypto benchmark numbers and a shortlist of the host functions we need.</li></ul> <h4 id="gate-phase-1"><a aria-hidden="true" tabindex="-1" href="#gate-phase-1"><span class="icon icon-link"></span></a>Gate (Phase 1)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>Specs approved:</strong> Parachain Service spec approved; Cumulus integration spec approved; a crypto host-function shortlist in hand; the harness skeleton standing up.</li></ul> <h3 id="phase-2-proof-of-concept-m3"><a aria-hidden="true" tabindex="-1" href="#phase-2-proof-of-concept-m3"><span class="icon icon-link"></span></a>Phase 2: Proof of Concept (M3)</h3> <p>Built from both specs. The crypto host functions are assumed for now, so the PoC does not wait on
the Gray Paper proposal.</p> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> The service-side happy path: spawn the child PVM, run <code>jam_validate_block</code>, check the parent head and validation code, and update the head data.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> A Cumulus collator builds a candidate and work package from the integration spec, produces a PoV, and registers against the harness.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> The harness wires it all together (the data availability and preimage calls), with the crypto host functions stubbed out.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Spec audit (external, in parallel): with both specs approved, an external review of the specs runs while the PoC tests them in practice.</li></ul> <h4 id="gate-phase-2"><a aria-hidden="true" tabindex="-1" href="#gate-phase-2"><span class="icon icon-link"></span></a>Gate (Phase 2)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>Working PoC:</strong> Register a parachain, have a collator produce a block, validate it, and record the new head, demonstrated end to end on the harness, with the spec audit underway.</li></ul> <h3 id="phase-3-review--testnet-experiments-m4m5"><a aria-hidden="true" tabindex="-1" href="#phase-3-review--testnet-experiments-m4m5"><span class="icon icon-link"></span></a>Phase 3: Review & Testnet Experiments (M4–M5)</h3> <p>The code review and the testnet work run in parallel.</p> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Review the PoC, address the findings, and flesh out the paths the PoC stubbed.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Deploy the Parachain Service onto an existing testnet, wire up a collator, run the registration flow, and watch real block production. Feed what we learn back into the Cumulus spec.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Finish the crypto benchmarking and decide which host functions we need.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Submit a Gray Paper proposal or extension for the crypto host functions.</li></ul> <h4 id="gate-phase-3"><a aria-hidden="true" tabindex="-1" href="#gate-phase-3"><span class="icon icon-link"></span></a>Gate (Phase 3)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> <strong>Reviewed + testnet-running:</strong> Codebase reviewed and adjusted; the Parachain Service running in testnet experiments; crypto host-function set decided and the Gray Paper proposal submitted.</li></ul> <h3 id="phase-4-hardening--messaging-m6m12"><a aria-hidden="true" tabindex="-1" href="#phase-4-hardening--messaging-m6m12"><span class="icon icon-link"></span></a>Phase 4: Hardening & Messaging (M6–M12)</h3> <p>This is where most of the production engineering happens.</p> <h4 id="m6m8-hardening-to-feature-complete"><a aria-hidden="true" tabindex="-1" href="#m6m8-hardening-to-feature-complete"><span class="icon icon-link"></span></a>M6–M8: Hardening to feature-complete</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Take the lifecycle to production quality: code upgrades, validator-key staging, service self-upgrade, forced updates and clean-up, restricted-caller checks, and full error coverage.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Harden the Cumulus integration on the testnet: registration, recovery, and code upgrades driven from a real collator.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Authorizer and coretime work.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Once the proposed crypto host functions are accepted, integrate them, tune performance and gas metering, and check we stay within the work-report size budget.</li></ul> <h4 id="m9m11-messaging-xcmp"><a aria-hidden="true" tabindex="-1" href="#m9m11-messaging-xcmp"><span class="icon icon-link"></span></a>M9–M11: Messaging (XCMP)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Take the external XCMP spec and work out what it needs from the service: the inbound and outbound host functions, the channel state to store, and how message lifetime interacts with the data availability window. Feed any integration concerns back to the spec team.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Demonstrate messages flowing between two parachains on the testnet.</li></ul> <h4 id="m6-code--system-audit-external-runs-alongside"><a aria-hidden="true" tabindex="-1" href="#m6-code--system-audit-external-runs-alongside"><span class="icon icon-link"></span></a>M6+: Code / system audit (external, runs alongside)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> External code/system audit of the service running on the testnet, covering each area as it stabilizes; issues fixed as they come up.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Follow-up audit pass for late-landing work (e.g. the migration prototype).</li></ul> <h4 id="m10m12-migration--stabilization-in-parallel"><a aria-hidden="true" tabindex="-1" href="#m10m12-migration--stabilization-in-parallel"><span class="icon icon-link"></span></a>M10–M12: Migration & stabilization (in parallel)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Migration prototype: design and prototype the path that moves existing parachains from the relay-chain parachain host to the Parachain Service, handing over their state (ParaId, head data, validation code) and sequencing the cut-over. Demonstrated on the testnet, short of the real mainnet cut-over.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Run the full integration test suite.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Do a final pass over the spec.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> Close out the audit findings and prepare the audit hand-off.</li></ul> <h4 id="gate-phase-4"><a aria-hidden="true" tabindex="-1" href="#gate-phase-4"><span class="icon icon-link"></span></a>Gate (Phase 4)</h4> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> <strong>Project exit:</strong> A feature-complete, hardened implementation running on the testnet with
messaging, the crypto host functions in place, the migration path prototyped, and the code/system
audit done with its findings addressed.</li></ul>`,1);function x(e){var t=b();n(64),r(e,t)}var S=e({default:()=>j,metadata:()=>C}),C={title:`PolkaJAM`,excerpt:`Parity's JAM full node implementation, performant ready for the JAM network launch.`,start:`2026-08`,updated:`2026-11-09`,progressSection:`PolkaJAM`,progressBy:`items`},{title:w,excerpt:T,start:E,updated:D,progressSection:O,progressBy:k}=C,A=t(`<h2 id="abstract"><a aria-hidden="true" tabindex="-1" href="#abstract"><span class="icon icon-link"></span></a>Abstract</h2> <p>The deliverable is <strong>PolkaJAM</strong>, Parity’s full node Rust implementation of JAM. It will implement the Gray
Paper (GP 1.0) and the JAM networking protocol, and needs to be robust and fast enough to be the only
implementation running at the initial network launch. The target network is to have ~200 validators
running ~60–70 cores with a 6-second slot time. In favourable conditions it will accumulate one
work-package per core every slot, with finality lagging by no more than 2 blocks, and it will serve
5,000 simultaneously connected light nodes. Nodes must not crash, must keep memory and disk usage
bounded, must degrade gracefully under load or DoS, and must be safe to restart at once. Alongside
the node come an <strong>in-browser light node</strong> library and the <strong>testing infrastructure</strong> needed to
prove all this: stress and byzantine testnets on the Toaster, TART telemetry, and per-subsystem
randomised and performance test suites. Delivery ends with a public testnet run by non-Parity
validators and the real network launch.</p> <h2 id="phases--milestones"><a aria-hidden="true" tabindex="-1" href="#phases--milestones"><span class="icon icon-link"></span></a>Phases & Milestones</h2> <h3 id="gray-paper"><a aria-hidden="true" tabindex="-1" href="#gray-paper"><span class="icon icon-link"></span></a>Gray Paper</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-09</strong>: External 0.8 GP audit complete.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: GP 0.8.1 release. This includes the last major changes outside of the PVM; 0.8.1 to 1.0 should only include minor changes, with the exception of changes to complete the PVM gas model.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-12</strong>: GP 0.9 release. This will include the final changes to the PVM gas model and minor changes to address audit findings.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-12</strong>: External 1.0 GP audit begins.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-01</strong>: External 1.0 GP audit complete.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-01</strong>: GP “1.0” release. No big changes from 0.8.1 and 0.9; most changes should be fixes, in particular in response to the external audit. Assumed not to contain the networking spec, so it may not actually be called 1.0.</li></ul> <h3 id="toaster-tart--stress-testing"><a aria-hidden="true" tabindex="-1" href="#toaster-tart--stress-testing"><span class="icon icon-link"></span></a>Toaster, TART & stress testing</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-08</strong>: Hardware stress-tested with standard tools (i.e. not PolkaJAM). Stable machines and utilisation level identified.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-09</strong>: Dedicated testnet for JAM stress testing, with parameters matching planned launch params. Restarted daily with the latest version of PolkaJAM, except on weekends where it is left running for at least 2 full days. <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Block time to be changed to 2s when PolkaJAM is ready.</li></ul></li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-09</strong>: Stress test automatically run against the stress testnet.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-09</strong>: TART running on the stress testnet, with a basic Grafana frontend, improved over time based on requests from the JAM team. Not a deliverable; it exists only to support development.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-09</strong>: Stress test metrics tracked over time and visible on a dashboard.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-10</strong>: Validator set changes every epoch on the stress testnet.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: Machine with 9175F for PVM performance testing.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: Dedicated testnet for Parachain Service development, with cut-down parameters, restarted weekly with the latest version of PolkaJAM.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: TART instance running against the parachain testnet.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-12</strong>: Daily JAM stress test alternates between the regular stress test and a byzantine stress test, with metrics tracked and displayed separately on the dashboard. The byzantine test should ultimately cover network disruption and useful validator misbehaviours, extended over time.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-01</strong>: Light nodes introduced to the stress tests. Light nodes track finality and make small state requests.</li></ul> <h3 id="polkajam"><a aria-hidden="true" tabindex="-1" href="#polkajam"><span class="icon icon-link"></span></a>PolkaJAM</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-05</strong>: Nightly releases available at <a href="https://github.com/paritytech/polkajam-releases" rel="nofollow">https://github.com/paritytech/polkajam-releases</a>, currently implementing GP 0.6.5.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-06</strong>: GP 0.6.6 implemented.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-07</strong>: GP 0.6.7 implemented</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-08</strong>: GP 0.7.0 implemented.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-10</strong>: GP 0.7.1 implemented. GP 0.7.1 in particular combined the Accumulate and On-transfer PVM entry points and added the Registrar service privilege.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-11</strong>: GP 0.7.2 implemented. GP 0.7.2 included a variety of minor fixes.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2025-12</strong>: Proxy node support. Proxy nodes forward work-package submissions and DA requests to the active validators.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-02</strong>: Auditing subsystem broadly implemented and working.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-05</strong>: Disputes extrinsic construction implemented.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-07</strong>: WebTransport support implemented.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-09</strong>: Warp sync working.</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> <strong>2026-10</strong>: GP 0.8.0 implemented. GP 0.8.0 in particular included a new PVM gas model and support for changing the validator set size between epochs.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: PolkaJAM implements GP 0.8.1 and is functionally complete except for BEEFY. It is not expected to meet the reliability or performance requirements at this point.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: BEEFY implemented.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-11</strong>: Performance tests exist for the major subsystems: guaranteeing, availability, auditing, finality, block execution.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2026-12</strong>: 100% capacity stress test runs for 2 days on the Toaster with PolkaJAM validators and chain parameters set as they will be for launch: no node failures, 99% work-package throughput, max 2 blocks finality lag. The planned launch parameters may need adjusting to make this possible.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-01</strong>: PolkaJAM implements GP 1.0.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-02</strong>: 100% capacity stress test runs as above, with the addition of ~5000 light nodes.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-02</strong>: Byzantine stress test stable over 2 days.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>TBD</strong>: External PolkaJAM audit.</li></ul> <h3 id="launch"><a aria-hidden="true" tabindex="-1" href="#launch"><span class="icon icon-link"></span></a>Launch</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-02</strong>: Public test network with non-Parity validator nodes, running for at least a month prior to the real network launch.</li> <li class="task-list-item"><input type="checkbox" disabled=""/> <strong>2027-03</strong>: Real test network launch.</li></ul>`,1);function j(e){var t=A();n(20),r(e,t)}var M=`---
title: 'AHMv2'
excerpt: 'Migrate the remaining balances and non-system calls off the Polkadot Relay Chain'
start: ''
updated: '2026-11-11'
progressBy: 'headings'
---

## Abstract

The deliverable is the **Minimal Relay** ([RFC-32](https://polkadot-fellows.github.io/RFCs/approved/0032-minimal-relay.html)), i.e. the Relay Chain is left with no signed extrinsics, zero DOT and no way to fund it again, clearing the path to Parachain Service and JAM. [AHMv2](https://github.com/paritytech/polkadot-sdk/issues/13481) is the completion of the deliverable, building on the [Asset Hub Migration](https://hackmd.io/@seadanda/B1QIVXrwJg) completed last year where balances, staking, governance, and other user-facing functionality were migrated to the Hub. 

## Phases & Milestones

### Code complete

- [ ] [Parachain Registrar](https://github.com/paritytech/polkadot-sdk/issues/12731): Most of the functionality is left on Relay Chain, while user facing interactions are migrated to Coretime. Bi-directional communication between Relay Chain and Coretime via XCM.
- [ ] [HRMP Channels](https://github.com/paritytech/polkadot-sdk/issues/12718): HRMP channel management stays on the Relay Chain. Only the channel deposits are moved to Coretime.
- [ ] [Vestigial Balance Migration](https://github.com/paritytech/polkadot-sdk/issues/12719):
  - Migrate registrar and HRMP deposits along with minimum balance needed for parachain renewal to Coretime during a multi-block migration
  - Free balance is teleported from Relay Chain to Asset Hub.
  - Disallow teleports/reserve transfers to Relay Chain.
- [ ] Proxies that are still meaningful on Coretime are recreated there. The rest are dropped.
- [ ] No signed extrinsics on Relay Chain post migration:
  - Filter out every call which accepts a signed origin.
  - Parachains can still reach the Relay Chain over XCM for HRMP and registrar calls only, via rate-limited unpaid execution. Everything else in the XCM executor is restricted to system origins.
- [ ] Filter the on-demand extrinsics on the relay. Retire on-demand credits (from Coretime::Broker).
- [ ] New \`on-demand\` pallet on Coretime with a \`place_order\` extrinsic paying DOT.
`,N=`---
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
- [x] Draft the Cumulus integration spec: candidate and work-package construction, work-package submission and networking to guarantors, the PVF entry point (\`jam_validate_block\`) and its inputs and outputs, authorizer and collator-token construction, and the registration handshake. Keep it minimal.
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

- [x] The service-side happy path: spawn the child PVM, run \`jam_validate_block\`, check the parent head and validation code, and update the head data.
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
`,P=`---
title: 'PolkaJAM'
excerpt: "Parity's JAM full node implementation, performant ready for the JAM network launch."
start: '2026-08'
updated: '2026-11-09'
progressSection: 'PolkaJAM'
progressBy: 'items'
---

## Abstract

The deliverable is **PolkaJAM**, Parity's full node Rust implementation of JAM. It will implement the Gray
Paper (GP 1.0) and the JAM networking protocol, and needs to be robust and fast enough to be the only
implementation running at the initial network launch. The target network is to have ~200 validators
running ~60–70 cores with a 6-second slot time. In favourable conditions it will accumulate one
work-package per core every slot, with finality lagging by no more than 2 blocks, and it will serve
5,000 simultaneously connected light nodes. Nodes must not crash, must keep memory and disk usage
bounded, must degrade gracefully under load or DoS, and must be safe to restart at once. Alongside
the node come an **in-browser light node** library and the **testing infrastructure** needed to
prove all this: stress and byzantine testnets on the Toaster, TART telemetry, and per-subsystem
randomised and performance test suites. Delivery ends with a public testnet run by non-Parity
validators and the real network launch.

## Phases & Milestones

### Gray Paper

- [x] **2026-09**: External 0.8 GP audit complete.
- [ ] **2026-11**: GP 0.8.1 release. This includes the last major changes outside of the PVM; 0.8.1 to 1.0 should only include minor changes, with the exception of changes to complete the PVM gas model.
- [ ] **2026-12**: GP 0.9 release. This will include the final changes to the PVM gas model and minor changes to address audit findings.
- [ ] **2026-12**: External 1.0 GP audit begins.
- [ ] **2026-01**: External 1.0 GP audit complete.
- [ ] **2026-01**: GP "1.0" release. No big changes from 0.8.1 and 0.9; most changes should be fixes, in particular in response to the external audit. Assumed not to contain the networking spec, so it may not actually be called 1.0.

### Toaster, TART & stress testing

- [x] **2026-08**: Hardware stress-tested with standard tools (i.e. not PolkaJAM). Stable machines and utilisation level identified.
- [x] **2026-09**: Dedicated testnet for JAM stress testing, with parameters matching planned launch params. Restarted daily with the latest version of PolkaJAM, except on weekends where it is left running for at least 2 full days.
  - [ ] Block time to be changed to 2s when PolkaJAM is ready.
- [x] **2026-09**: Stress test automatically run against the stress testnet.
- [x] **2026-09**: TART running on the stress testnet, with a basic Grafana frontend, improved over time based on requests from the JAM team. Not a deliverable; it exists only to support development.
- [ ] **2026-09**: Stress test metrics tracked over time and visible on a dashboard.
- [ ] **2026-10**: Validator set changes every epoch on the stress testnet.
- [ ] **2026-11**: Machine with 9175F for PVM performance testing.
- [ ] **2026-11**: Dedicated testnet for Parachain Service development, with cut-down parameters, restarted weekly with the latest version of PolkaJAM.
- [ ] **2026-11**: TART instance running against the parachain testnet.
- [ ] **2026-12**: Daily JAM stress test alternates between the regular stress test and a byzantine stress test, with metrics tracked and displayed separately on the dashboard. The byzantine test should ultimately cover network disruption and useful validator misbehaviours, extended over time.
- [ ] **2027-01**: Light nodes introduced to the stress tests. Light nodes track finality and make small state requests.

### PolkaJAM

- [x] **2025-05**: Nightly releases available at <https://github.com/paritytech/polkajam-releases>, currently implementing GP 0.6.5.
- [x] **2025-06**: GP 0.6.6 implemented.
- [x] **2025-07**: GP 0.6.7 implemented
- [x] **2025-08**: GP 0.7.0 implemented.
- [x] **2025-10**: GP 0.7.1 implemented. GP 0.7.1 in particular combined the Accumulate and On-transfer PVM entry points and added the Registrar service privilege.
- [x] **2025-11**: GP 0.7.2 implemented. GP 0.7.2 included a variety of minor fixes.
- [x] **2025-12**: Proxy node support. Proxy nodes forward work-package submissions and DA requests to the active validators.
- [x] **2026-02**: Auditing subsystem broadly implemented and working.
- [x] **2026-05**: Disputes extrinsic construction implemented.
- [x] **2026-07**: WebTransport support implemented.
- [x] **2026-09**: Warp sync working.
- [x] **2026-10**: GP 0.8.0 implemented. GP 0.8.0 in particular included a new PVM gas model and support for changing the validator set size between epochs.
- [ ] **2026-11**: PolkaJAM implements GP 0.8.1 and is functionally complete except for BEEFY. It is not expected to meet the reliability or performance requirements at this point.
- [ ] **2026-11**: BEEFY implemented.
- [ ] **2026-11**: Performance tests exist for the major subsystems: guaranteeing, availability, auditing, finality, block execution.
- [ ] **2026-12**: 100% capacity stress test runs for 2 days on the Toaster with PolkaJAM validators and chain parameters set as they will be for launch: no node failures, 99% work-package throughput, max 2 blocks finality lag. The planned launch parameters may need adjusting to make this possible.
- [ ] **2027-01**: PolkaJAM implements GP 1.0.
- [ ] **2027-02**: 100% capacity stress test runs as above, with the addition of ~5000 light nodes.
- [ ] **2027-02**: Byzantine stress test stable over 2 days.
- [ ] **TBD**: External PolkaJAM audit.

### Launch

- [ ] **2027-02**: Public test network with non-Parity validator nodes, running for at least a month prior to the real network launch.
- [ ] **2027-03**: Real test network launch.
`,F=/^(#{1,6})\s+(.*?)\s*#*\s*$/,I=/^(\s*)[-*+]\s+\[([ xX])\]\s/,L=(e,t)=>{let n=e.findIndex(e=>F.exec(e)?.[2]===t);if(n===-1)return[];let r=F.exec(e[n])[1].length,i=e.slice(n+1),a=i.findIndex(e=>{let t=F.exec(e);return t&&t[1].length<=r});return a===-1?i:i.slice(0,a)},R=e=>e.map(e=>I.exec(e)).filter(e=>e&&e[1]===``).map(e=>e[2]!==` `),z=e=>{let t=[],n=null;for(let r of e){if(F.test(r)){n=null;continue}let e=I.exec(r);e&&(n||t.push(n=[]),n.push(e[2]!==` `))}return t.map(e=>e.every(Boolean))},B=(e,{progressSection:t,progressBy:n}={})=>{let r=L(e.split(`
`),t||`Phases & Milestones`),i=n===`headings`?z(r):R(r),a=i.length,o=i.filter(Boolean).length;return{done:o,total:a,percent:a?Math.floor(o/a*100):0}},V=Object.assign({"/src/lib/projects/minimal-relay.md":i,"/src/lib/projects/parachain-service.md":p,"/src/lib/projects/polkajam.md":S}),H=Object.assign({"/src/lib/projects/minimal-relay.md":M,"/src/lib/projects/parachain-service.md":N,"/src/lib/projects/polkajam.md":P}),U=e=>e.split(`/`).pop().slice(0,-3),W=e=>({...V[e].metadata,slug:U(e),progress:B(H[e],V[e].metadata)}),G=()=>Object.keys(V).map(W).sort((e,t)=>new Date(t.updated)-new Date(e.updated)),K=e=>{let t=`/src/lib/projects/${e}.md`;if(V[t])return{Content:V[t].default,meta:W(t)}},q=e=>{if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?e:`${String(t.getDate()).padStart(2,`0`)}/${String(t.getMonth()+1).padStart(2,`0`)}/${t.getFullYear()}`};export{K as n,G as r,q as t};