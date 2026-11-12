---
title: 'AHMv2'
excerpt: 'Migrate the remaining balances and non-system calls off the Polkadot Relay Chain'
start: ''
updated: '2026-11-11'
progressBy: 'headings'
---

## Abstract

The deliverable is the **Minimal Relay** ([RFC-32](https://polkadot-fellows.github.io/RFCs/approved/0032-minimal-relay.html)), i.e. the Relay Chain is left with no signed extrinsics, zero DOT and no way to fund it again, clearing the path to Parachain Service and JAM. [AHMv2](https://github.com/paritytech/polkadot-sdk/issues/13481) is the completion of the deliverable, building on the [Asset Hub Migration](https://hackmd.io/@seadanda/B1QIVXrwJg) completed last year where balances, staking, governance, and other user-facing functionality were migrated to the Hub. 

## Phases & Milestones

### code complete

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
- [ ] New `on-demand` pallet on Coretime with a `place_order` extrinsic paying DOT.
