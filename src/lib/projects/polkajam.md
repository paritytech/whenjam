---
title: 'PolkaJAM'
excerpt: "Parity's JAM full node implementation, performant ready for the JAM network launch."
start: '2026-08'
updated: '2026-11-09'
progressSection: 'PolkaJAM'
progressBy: 'items'
---

## Abstract

The deliverable is **PolkaJAM**, Parity's full node implementation of JAM. It will implement the Gray
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

- [ ] **2026-08**: GP 0.9 release. This should include the last major changes; 0.9 to 1.0 should only be minor changes.
- [ ] **2026-09**: External GP audit begins.
- [ ] **2026-12**: External GP audit complete.
- [ ] **2026-12**: GP "1.0" release. No big changes from 0.9; most changes should be fixes, in particular in response to the external audit. Assumed not to contain the networking spec, so it may not actually be called 1.0.

### Toaster, TART & stress testing

- [ ] **2026-08**: Hardware stress-tested with standard tools (i.e. not PolkaJAM). Stable machines and utilisation level identified.
- [ ] **2026-09**: Dedicated testnet for JAM stress testing, with parameters matching planned launch params. Restarted daily with the latest version of PolkaJAM, except on weekends where it is left running for at least 2 full days.
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

- [ ] **2026-10**: PolkaJAM implements GP 0.9 and is functionally complete except for BEEFY. No optimisation or robustness work yet; it is not expected to meet the reliability or performance requirements at this point.
- [ ] **2026-11**: BEEFY implemented.
- [ ] **2026-11**: Performance tests exist for the major subsystems: guaranteeing, availability, auditing, finality, block execution.
- [ ] **2026-12**: 100% capacity stress test runs for 2 days on the Toaster with PolkaJAM validators and chain parameters set as they will be for launch: no node failures, 99% work-package throughput, max 2 blocks finality lag. The planned launch parameters may need adjusting to make this possible.
- [ ] **2027-01**: PolkaJAM implements GP 1.0.
- [ ] **2027-02**: 100% capacity stress test runs as above, with the addition of ~5000 light nodes.
- [ ] **2027-02**: Byzantine stress test stable over 2 days.
- [ ] **TBD**: External PolkaJAM audit.

### Launch

- [ ] **2027-02**: Public test network with non-Parity validator nodes, running for at least a month prior to the real network launch.
- [ ] **2027-03**: Real network launch.
