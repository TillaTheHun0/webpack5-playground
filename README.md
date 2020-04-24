# Webpack 5 Playground

This is a playground to experiment with Webpack 5, in particular its new `ModuleFederationPlugin`

## Getting Started

`yarn && yarn dev`

This will start 3 webpack dev servers and 1 storybook server:

Webpack Dev Servers:

- The Header Server (`http://localhost:3001`)
- The Footer Server (`http://localhost:3002`)
- The App Server (`http://localhost:3000`)

Storybook Server:

- The "Design System" (Chakra-UI 'cause I ain't writing no fancy components. This is just to explore Storybook as a Webpack 5 remote entrypoint) (`http://localhost:6006`)

The Main App pulls dependencies from the Header, Footer, and Design System servers, at runtime, and "stitches" them together to form a full application. It's magic 🌟

## Why

Typically, frontends are monolithic, having a manifest of dependencies, usually a `package.json`, and is deployed altogether as a single artifact. Any components that the application depends on is ususally included as a _versioned_ dependency in the `package.json` and then imported throughout the project. This works great for small applications.

As an application grows, different teams may have responsibility over different parts of the app or components the app depends on. Addtionally when new versions of the components are published, versions have to be bumped in the main application `package.json`, new artifact be built, and deployed, in order for those components to truly be "live". We now have multiple teams coupled to single release cycle -- Welcome to the Monolith!

This repo is cutting against that approach, and is effectively an experiment in a microfrontend architecture. There is a lot of baggage with the term "microfrontend", but here is a nice writeup about this approach [here](https://martinfowler.com/articles/micro-frontends.html)

## What's in the repo

In this repo, we have the Header, Footer, Design System, and App "teams". These teams are responsible for parts of an application, developing, testing, and _deploying_ those pieces. The most valuable thing this approach gains us is that development teams can ship new versions of their parts of the application, live to production, without having to depend on the release cycle of the main application. The pieces are "stitched" at runtime in the main application using Webpack 5 Module Federation. **This feature is still in beta**

![Dataflow](./docs/diagram.png)
