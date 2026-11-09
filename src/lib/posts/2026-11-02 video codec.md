---
title: "CoreVM video codec optimisations"
date: "2026-11-02"
updated: "2026-11-02"
categories:
  - "CoreVM"
#coverImage: "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
#coverWidth: 16
#coverHeight: 9
excerpt: Significant improvements to the CoreVM video codecs
---

Recently significant improvements were made to the CoreVM video codec, with no loss in output quality:


| | Before | After | Improvement
| -------- | -------- | -------- | -------- |
| Encode gas | 70M | 14M | 80% less |
| Decode gas | 64M | 12M | 81% less |
| Encoded size | 2.2MB | 1.5MB | 32% less |
