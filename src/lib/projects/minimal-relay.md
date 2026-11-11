---
title: 'Minimal Relay'
excerpt: 'Migrate the remaining balances and non-system calls off the Polkadot Relay Chain'
start: ''
updated: '2026-11-11'
progressBy: 'headings'
---

## Abstract

The deliverable is the **Minimal Relay** [RFC-32](https://polkadot-fellows.github.io/RFCs/approved/0032-minimal-relay.html), i.e. the Relay Chain is left with no user-callable extrinsics, zero DOT and no way to fund it again, clearing the path to Parachain Service and JAM. This is completion of the of work done during [Asset Hub Migraiton](https://hackmd.io/@seadanda/B1QIVXrwJg) where balances, staking, governance, and other user-facing functionality were migrated to the Hub. This is two be done in two phases AHMv2 and OnDemand Coretime Credit.

## Phases and Milestones

### AHMv2 code complete

- [ ] [Parachain Registrar](https://github.com/paritytech/polkadot-sdk/issues/12731): Most of the functionality is left on Relay Chain, while user facing interactions are migrated to Coretime. Bi-directional communication between Relay Chain and Coretime via XCM.
- [ ] [HRMP Channels](https://github.com/paritytech/polkadot-sdk/issues/12718): a pallet which registers HRMP channels from Coretime and similarly has an XCM bidirectional communication channel to the relay chain.
- [ ] [Vestigial Balance Migration](https://github.com/paritytech/polkadot-sdk/issues/12719): 
  - Migrate registrar and HRMP deposits along with minimum balance needed for parachain renewal moved to Coretime during a multi-block migration
  - Free balance is teleported from Relay Chain to Asset Hub.
  - Disallow teleports/reserve transfers to Relay Chain.
- [ ] Proxy: Move proxies to Coretime & Asset Hub. 
- [ ] Signed Extrinsics on Relay Chain post migration:
  - Call filter any extrinsic which accepts a signed origin
  - Enforce only system origins in XCM executor.

### OnDemand Coretime credits code complete

- [ ] Filter the on-demand extrinsics on the relay. Retire on-demand credits (from Coretime::Broker). 
- [ ] New extrinsic on the existing `broker` pallet to place an on-demand order paying DOT on Coretime.
