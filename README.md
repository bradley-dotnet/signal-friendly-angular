# Signal Friendly Angular

Many of the new signal-based features in Angular present a significant challenge to creating isolated unit tests (ie. not using `TestBed`).
One way to get around these issues is to simply avoid putting testable logic into components and services that utilize such features.

This application illustrates what such an application may look like, one that doesn't put any logic into its components and stores
in order to allow for both signal-based features and isolated tests.
