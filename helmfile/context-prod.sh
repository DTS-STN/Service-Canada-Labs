#!/bin/bash
echo "Logging in to Dev K8 Cluster.."
az aks get-credentials --resource-group EsDCDTSRG --name EsDCDTSRG-K8S
echo "Done."

# Since we didn't get these from the createSPN script, we have to fetch them now.
if [ -z "$DOCKER_TAG" ]
then
    export DOCKER_TAG=latest
fi
#OUR SPECIFIC SECRETS THAT NEED TO BE RETRIEVED FROM THE VAULT
export OUR_VARIABLE_HERE="$(az keyvault secret show --vault-name DTSSecrets --name dts-github-our-variable-here --query value -otsv)"
#STANDARD SECRETS THAT SHOULD BE LEFT ALONE UNLESS OTHERWISE SPECIFIED
export BASE_DOMAIN=dts-stn.com
export GITHUB_USER=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-user --query value -otsv)
export GITHUB_TOKEN=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-token --query value -otsv)
