#!/bin/sh

getValue() {
  curl "$1" -s | grep "$2" | awk -F'"' '{ print $4 } '
}

getVersion() {
  getValue "$1" "version"
}

checkSiteSha() {

  site_sha=$(getValue "$1")
  sha=$(git rev-parse origin/"$3")

  if [ "$sha" = "$site_sha" ]; then
    printf "✅ %s matches sha in origin/%s ($sha) \n" "$1" "$3"
  else
    printf "🛑 %s sha's don't match\n" "$1"
    printf "$site_sha !== %s\n" "$sha"
  fi

}

printf "Running git fetch\n"
git fetch

printf "\nDevelopment Environment\n"
checkSiteSha https://alphasite.dts-stn.com/api/version version main
