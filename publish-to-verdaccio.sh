#!/bin/bash

# How to use
# - Publish a new version
# Run `sh publish-to-verdaccio.sh 0.0.0`
# 
# - Re-Publish a version
# Run `sh publish-to-verdaccio.sh 0.0.0 --overwrite`
#

# Arguments:
## Required
PUBLISH_VERSION="$1";

## Optional
IS_OVERWRITE=$2;

# Readonly
OVERWRITE="--overwrite"
NPMRC_PROFILE="private";
VERSION_REGULAR_EXPRESSION="^([0-9]+\.){0,2}(\*|[0-9]+)$";
PRIVATE_NPM_REGISTRY="http://localhost:4873";
LIBRARY_NAME="@amfrontender/ngx-multi-keywords-highlighter"

echo "Build and Publish $LIBRARY_NAME to Verdaccio\n
 * Parameters:
  * Publish version: $1
  * Is Overwrite: $2
"

# Check the current latest version compare to the publsih version and overwrite mechanism
# @param $1 => Publish version
publishable() {
  local retrievedPackageVersion=$(retrievePackageVersion)

  if [ "$retrievedPackageVersion" == "$1" ] && [ $(isOverwrite) == "true" ]
  then
    echo "WARN! == Re-publish =="
    echo "Un-publish $LIBRARY_NAME@$1"
    unpublish $1

  elif [ "$retrievedPackageVersion" == "$1" ]
  then
    echo "ERR! == Unable to Publish =="
    echo "Cannot publish $LIBRARY_NAME@$1 over existing version: $retrievedPackageVersion"
    echo "Increase your version and try again or pass $OVERWRITE as second argument to this script"
    echo "* Example: sh publish-to-verdaccio.sh $1 $OVERWRITE"
    exit 1
  else
    echo "INFO! == Publish a new version =="
  fi
}

# Switch .npmrc profile
# @param $1 => npmrc profile name
switchNpmrc() {
  echo "Switch .npmrc profile"
  npmrc
  npmrc $1
}

validNpmrc() {
  if [ test -x "$(which npmrc)" ]
  then
    echo "Found npmrc"
  else
    echo "Not found npmrc, please check the readme.md to configure it. Or install it via: 'npm install -g npmrc'"
    read -p "Continue to install it(y/n)?" INSTALL_NPMRC
    if [ "$INSTALL_NPMRC" = "y" ]; then
      echo "1. Install the npmrc";
      echo "2. Config npmrc";
    fi
    exit 1
  fi
}

# Build the BAC library
build() {
  echo "Start building $LIBRARY_NAME..."

  npx nx build ngx-multi-keywords-highlighter

  echo "The $LIBRARY_NAME has been built successfully"
}

# Versining the package.json
# @param $1 => Standar package.json version, eg. 0.0.1
version() {
  echo "Versioning the build artifact to $1"
  cd dist/libs/ngx-multi-keywords-highlighter
  npm version --no-git-tag-version $1
}

# Unpublish a version
# @param $1 => un-publish version
unpublish() {
  echo "Start to unpublish $LIBRARY_NAME@$1"

  npm unpublish $LIBRARY_NAME@$1

  echo "Unpublished $LIBRARY_NAME@$1 successfully"
}

# Publish the BAC library
# @param $1 => Publish version
# @param $2 => NPM registry
publish () {
  echo "Ready to publish $LIBRARY_NAME@$1 to private NPM registry $2"
  npm publish --registry $2
  echo "Published $LIBRARY_NAME@$1 successfully"
  echo "Try it with command: npm install $LIBRARY_NAME@$1"
}

retrievePackageVersion() {
  echo $(npm view $LIBRARY_NAME version)
}

isOverwrite() {
  echo $([[ "$IS_OVERWRITE" == "$OVERWRITE" ]] && echo true || echo false)
}


if [ -z "$PUBLISH_VERSION" ]
then
  echo "No argument supplied"
  exit 1
elif [[ "$PUBLISH_VERSION" =~ $VERSION_REGULAR_EXPRESSION ]]
then
  echo "Validate Publish Version format: $PUBLISH_VERSION"

  # Step 1 - Switch NPMRC Profile
  switchNpmrc $NPMRC_PROFILE

  # Step 2 - Check Publishable
  publishable $PUBLISH_VERSION

  # Step 3 - Build the library
  build

  # Step 4 - Versioning
  # In the local development environemnt, the script is only modify the version for the build artifacts
  version $PUBLISH_VERSION

  # Step 5 - Publish
  publish $PUBLISH_VERSION $PRIVATE_NPM_REGISTRY

  exit 0
else
  echo "Not validate publish version: $1"
  echo "Please pass valid version with format: $VERSION_REGULAR_EXPRESSION "
  exit 1
fi
