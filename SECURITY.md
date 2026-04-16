# Security Policy

<<<<<<< HEAD
## Scope

This repository powers a static church website ([dodreamga.com](https://dodreamga.com)). It contains no user authentication, no database, and no server-side processing. The primary security concerns are:

- Accidental exposure of API keys, tokens, or credentials in commits
- Cross-site scripting (XSS) through user-facing content
- Compromised third-party CDN scripts

## Reporting a Vulnerability

If you discover a security issue, please **do not** open a public GitHub issue.

Instead, use GitHub's private vulnerability reporting:

1. Go to the **Security** tab of this repository
2. Click **"Report a vulnerability"**
3. Describe the issue and how to reproduce it

You can expect an initial response within 7 days. We take all reports seriously and will work to address confirmed vulnerabilities promptly.

## What Is Not a Security Issue

- The Google Apps Script web app URL in `assets/js/gallery.js` — this is a public read-only endpoint by design
- The Google Analytics measurement ID — this is intended to be public
- Church contact information visible on the site
=======
## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.
>>>>>>> e5f18d9f2a27a9b0141b4711e4daa04620eddad5
