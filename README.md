[简体中文](docs/README.zh-CN.md) / [English](README.md) / [日本語](docs/README.ja.md) / [한국어](docs/README.ko.md) / [繁體中文](docs/README.zh-TW.md)

If you have any questions or feedback, please open a new [issue](https://github.com/zoudeying/obsidian-quick-data-management/issues/new).

<h1 align="center">Quick Data Management For Obsidian</h1>

<p align="center">
    <a href="https://github.com/zoudeying/obsidian-quick-data-management/releases"><img src="https://img.shields.io/github/v/release/zoudeying/obsidian-quick-data-management?style=flat-square" alt="release"></a>
    <a href="https://github.com/zoudeying/obsidian-quick-data-management/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zoudeying/obsidian-quick-data-management?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>

<p align="center">
  <strong>High-performance data management, automated backup, version history, and collaboration plug-in for Obsidian</strong>
  <br>
  <em>Manage and synchronise your notes in real-time across multiple devices (PC, mobile, and web) anytime, anywhere. Generate sharing links with one click, easily trace revision history or restore deleted contents, and protect your data with backup and mirroring support.</em>
</p>

## ✨ Features

- 🚀 **Minimalist Configuration**:
    - Simple initialisation: paste your remote service configuration to start using it out of the box.
    - One-click authorization available on desktop.
- 📗 **Real-time Note Synchronisation**:
    - Automatically monitors and synchronises creation, modification, and deletion of notes within the vault.
- 🖼️ **Full Attachment Support**:
    - Real-time synchronisation for images, audio, video, and other attachment assets.
- ⚙️ **Configuration Synchronisation**:
    - Synchronise settings, snippets, and themes across multiple devices without manual file copying.
- 🛂 **Exclusions and Whitelists**:
    - Customise path exclusion patterns and sync rules to tailor your data workflow.
- 🔄 **Multi-platform Support**:
    - Fully supports macOS, Windows, Android, and iOS.
- 📝 **Note History**:
    - Inspect revision history and restore previous versions of your notes when needed.
- 🛡️ **Offline Modification Merging**:
    - Automatically resolves and merges offline revisions when reconnecting to prevent data loss.
- 🔍 **Version Inspection**:
    - Check plug-in and service version information directly from the interface.
- ☁️ **Cloud Preview of Attachments**:
    - Preview remote assets on-demand without downloading large attachments locally, saving storage.
- 🗒️ **Activity Logs**:
    - Detailed logs to audit each synchronisation and file operation.

## 💖 Sponsorship and Support

- If you find this plug-in helpful and wish to support its continued development:

  | Ko-fi |
  |---|
  | [<img src="docs/images/kofi.png" alt="BuyMeACoffee" height="80">](https://ko-fi.com/zoudeying) |

## 🚀 Quick Start

**Step 1: Installation**

* **Manual Download:** Download `main.js`, `styles.css`, and `manifest.json` from the [GitHub Releases Page](https://github.com/zoudeying/obsidian-quick-data-management/releases) and place them into your vault's `.obsidian/plugins/obsidian-quick-data-management` directory.
* **BRAT Installation:** In Obsidian, open Community Plugins > Beta Reviewer's Auto-update Tester (BRAT), add `zoudeying/obsidian-quick-data-management`, and enable the plug-in.

**Step 2: Configuration**

1. Open Obsidian Settings > **Quick Data Management**.
2. Input your remote service address and authentication token.
3. Once connected, your vault will be ready for automated management.