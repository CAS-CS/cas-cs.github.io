#!/bin/sh

# npm init -y
# npm i --save-dev parcel
# "dev":"parcel ./index.html",
# "build":"parcel build ./index.html"
NIXPKGS_ALLOW_UNFREE=1
#nix-shell --sandbox --pure -p vscode firefox-devedition nodejs pkgs.nodePackages.parcel --run "code --install-extension ritwickdey.liveserver && code . && firefox 127.0.0.1:1234 && npm run dev"

#nix-shell --sandbox --pure -p vscode firefox-devedition nodejs pkgs.nodePackages.parcel --run "code --install-extension ritwickdey.liveserver && code . && firefox 127.0.0.1:5501"
#
nix-shell --sandbox --pure -p vscodium firefox-devedition nodejs pkgs.nodePackages.nodemon pkgs.nodePackages.parcel --run "codium . && npm i && npm run dev & firefox 127.0.0.1:5501"
