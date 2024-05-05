#!/bin/bash

LAST_RELEASE_VERSION=$1
NEXT_RELEASE_VERSION=$2

# Update lib version
sed -i '' "s/$LAST_RELEASE_VERSION/$NEXT_RELEASE_VERSION/g" libs/ngx-multi-keywords-highlighter/src/lib/core/version.ts

# Update package.json and package-lock.json version
PACKAGE_JSON_FILE="package.json"
PACKAGE_LOCK_JSON_FILE="package-lock.json"

jq --arg NEXT_RELEASE_VERSION "$NEXT_RELEASE_VERSION" '.version = $NEXT_RELEASE_VERSION' "$PACKAGE_JSON_FILE" > "tmp-package.json" && mv "tmp-package.json" "$PACKAGE_JSON_FILE"
jq --arg NEXT_RELEASE_VERSION "$NEXT_RELEASE_VERSION" '.packages."".version = $NEXT_RELEASE_VERSION | .version = $NEXT_RELEASE_VERSION' "$PACKAGE_LOCK_JSON_FILE" > "tmp-package-lock.json" && mv "tmp-package-lock.json" "$PACKAGE_LOCK_JSON_FILE"

# Update compodoc version
sed -i '' "s/$LAST_RELEASE_VERSION/$NEXT_RELEASE_VERSION/g" .compodocrc.yaml
