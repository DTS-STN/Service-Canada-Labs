#!/bin/bash
export TF_VAR_SUBSCRIPTION_ID=$(az account show --subscription "EsDBDMDECDSub" --query 'id' --out tsv)
az account set --subscription $TF_VAR_SUBSCRIPTION_ID
export TF_VAR_TERRAFORM_PASS=$(az keyvault secret show --vault-name alphasite-keyvault-dev --name alphasite-terraform-pass-dev --query value -otsv)
export TF_VAR_TERRAFORM_USER=$(az ad sp list --display-name marcus-terraform-sp-bdm-dev --query "[].appId" -o tsv)
export TF_VAR_APP_NAME=alphasite
export TF_VAR_REMOTE_STATE_RESOURCE_GROUP=ESdCDPSBDMDepot
export TF_VAR_REMOTE_STATE_STORAGE_ACCOUNT=dpsstorageaccountdev
export TF_VAR_TENANT_ID=$(az account show --subscription "EsDBDMDECDSub" --query 'tenantId' --out tsv)


if test -f "../temp/dts-stn-wildcard.pfx"; then
    echo "TLS Cert Exists. Skipping"
else
    echo "Downloading TLS Cert."
    mkdir ../temp
    az keyvault secret download --vault-name Dtssecrets -n dts-stn-wildcard-full-cert --file ../temp/downloaded.pfx
    cat ../temp/downloaded.pfx | base64 -d > ../temp/dts-stn-wildcard.pfx
   
fi