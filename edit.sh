#!/bin/sh
NIXPKGS_ALLOW_UNFREE=1
nix-shell --sandbox --pure -p vscode firefox-devedition --run "code --install-extension ritwickdey.liveserver && code . && firefox"
