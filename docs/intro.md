---
sidebar_position: 1
title: Protekt Documentation
sidebar_label: Introduction
---

## Overview

Welcome to Protekt, a secure and developer-friendly authentication as a service platform designed to help you add modern authentication to your applications with minimal effort.

Whether you’re building a web app, mobile app, or API service, Protekt provides the tools you need to:

- Authenticate users securely using OAuth 2.0, OpenID Connect (OIDC), or JWTs.
- Support popular sign-in methods such as email & password, social logins (Google, GitHub, LinkedIn), and passwordless authentication.
- Manage users, sessions, and permissions at scale with built-in role-based access control (RBAC).

Protekt is built for developers who want reliable, secure, and easy-to-integrate authentication without reinventing the wheel.

## Why Use Protekt?

- **Implement Authentication Quickly:** Go from sign-up to a working login system in minutes with our SDKs and pre-built UI components.

- **Security and Compliance:** Protekt meets SOC 2 Type II, GDPR, and CCPA requirements. It includes password hashing, breach detection, and secure infrastructure management.

- **Support for Scale:** Handles applications from small startups to millions of users, with a global edge network providing sub-50ms response times. Includes tenant management, role-based access control (RBAC), and SAML SSO.

- **Developer Tools:** Choose from Protekt’s pre-built login pages for speed, or fully customize your authentication flow to match your product’s experience.

## Use Cases

- **SaaS Applications**: Supports social login (Google, GitHub), email verification, and Stripe integration for user onboarding.  
- **Mobile Apps**: Offers iOS/Android SDKs with biometric authentication and offline token storage.  
- **Enterprise**: Includes SAML SSO, SCIM provisioning, and audit logging for compliance.  
- **APIs & Microservices**: Provides stateless JWT validation and permission controls for service-to-service authentication.

## Quick Start

1. Sign up for a Protekt account at [dashboard.protekt.dev](dashboard.protekt.dev)
2. Create a project in the dashboard to get your unique `CLIENT_ID` and `CLIENT_SECRET`.
3. Install the SDK for your platform (JavaScript, Python, or Node.js).

```bash
npm install @protekt/auth
```

4. Add authentication to your app in just a few lines of code:

```js
import { ProtektAuth } from "@protekt/auth";

const auth = new ProtektAuth({
  clientId: process.env.PROTEKT_CLIENT_ID,
  redirectUri: "http://localhost:3000/callback",
});

// Redirect users to Protekt login
auth.login();
```

5. Done! Your app is now secured with Protekt.

## Next Steps

- Read the [Authentication Flow Guide](/docs/features/multi-factor-auth) to understand how Protekt handles sessions and tokens.
- Check out the [API Reference](/docs/features/api) for detailed endpoint documentation.
