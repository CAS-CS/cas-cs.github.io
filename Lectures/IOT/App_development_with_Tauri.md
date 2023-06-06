# How to install tauri

I prefer to use [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) (A rust package manager to install and run)


# Install Rust and its package manager

# Rust Install
[Web](https://www.rust-lang.org/tools/install)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

```bash
# to install on linux and mac
curl https://sh.rustup.rs -sSf | sh
```
or using

[windows installer](https://win.rustup.rs/)

## Prerequisites

[Instructions](https://tauri.app/v1/guides/getting-started/prerequisites/)

## Install Tauri using cargo

```bash
cargo install create-tauri-app
cargo create-tauri-app
```


```bash
# cli
cargo install tauri-cli
cargo tauri init

```

[More instructions](https://tauri.app/v1/guides/getting-started/setup/html-css-js)

To test app 


```bash
cargo tauri dev

```

If every thing works then it will show you tauri app


