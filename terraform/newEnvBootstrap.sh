#!/bin/bash

VARFILE=$1

echo "Loading in variables from varfile"
echo $VARFILE
export TG_VAR_FILE=$VARFILE
# export terraform_sp_name=$(cat $VARFILE | jq -r .application_name)-terraform-sp
# export k8s_sp_name=$(cat $VARFILE | jq -r .application_name)-k8s-sp
export subscription_id=$(cat $VARFILE | jq -r .subscription_id)
export depot_resource_group_name=$(cat $VARFILE | jq -r .depot_resource_group_name)
export location=$(cat $VARFILE | jq -r .location)
export remote_state_storage_account_name=$(cat $VARFILE | jq -r .remote_state_storage_account_name)
export application_name=$(cat $VARFILE | jq -r .application_name)
# echo $terraform_sp_name

echo "Setting account"
az account set --subscription $subscription_id

echo "Cleaning Workspace"
rm -rfd $(find . -name \*.terraform -type d)
rm  $(find . -name provider.tf -type f)
echo "Done."

echo "Creating Terraform Service Principal..."
#export terraform_sp_pass=$(az ad sp create-for-rbac --name $terraform_sp_name --role Contributor | grep password | cut -c16-49)
#export terraform_sp_id=$(az ad sp list --display-name $terraform_sp_name --query [].appId -o tsv)
export terraform_sp_pass=$(az keyvault secret show --vault-name alphasite-keyvault-dev --name alphasite-terraform-pass-dev --query value -otsv)
export terraform_sp_id=$(az ad sp list --display-name marcus-terraform-sp-bdm-dev --query [].appId -o tsv)
echo "Done."

echo "Setting Terraform SP ID and Pass in VarFile"
sed -i "s/%CLIENT_ID%/$terraform_sp_id/g" $VARFILE
sed -i "s/%CLIENT_SECRET%/$terraform_sp_pass/g" $VARFILE
echo "Done"

#echo "Creating Kubernetes Service Principal..."
#export k8s_sp_pass=$(az ad sp create-for-rbac --name $k8s_sp_name --role Contributor | grep password | cut -c16-49)
#export k8s_sp_id=$(az ad sp list --display-name $k8s_sp_name --query [].appId -o tsv)
#echo "Done."

#echo "Setting Terraform SP ID and Pass in VarFile"
#sed -i "s/%K8S_SP_ID%/$k8s_sp_id/g" $VARFILE
#sed -i "s/%K8S_SP_PASS%/$k8s_sp_pass/g" $VARFILE
#echo "Done"

#echo "Waiting 30 seconds for SPs to Propogate"
#sleep 30
#echo "Done"

# echo "Creating Resource Group..."
# az group create --name $depot_resource_group_name --location $location 
# echo "Done."
# echo "Creating Storage Account..."
# az storage account create \
#     --name $remote_state_storage_account_name \
#     --resource-group $depot_resource_group_name \
#     --location $location \
#     --sku Standard_RAGRS \
#     --kind StorageV2

echo "Exporting Storage Account Key"
export AZURE_STORAGE_KEY=$(az storage account keys list -g ESdCDPSBDMDepot -n dpsstorageaccountdev --query [0].value -o tsv)
echo "Done."

# echo "Creating TFState Container In Storage Account..."
# az storage container create --account-name $remote_state_storage_account_name --name $application_name --auth-mode key
# echo "Done."

echo "Importing Resource Group To Terraform..."
pushd ./resourceGroups
terragrunt import azurerm_resource_group.depot /subscriptions/$subscription_id/resourceGroups/$depot_resource_group_name
echo "Done."
# echo "Creating Remaining Resource Groups..."
# terragrunt apply --auto-approve 
popd
# echo "Done."

echo "Importing Storage Account To Terraform..."
pushd ./storage
terragrunt import azurerm_storage_account.depot-storageacct /subscriptions/$subscription_id/resourceGroups/$depot_resource_group_name/providers/Microsoft.Storage/storageAccounts/$remote_state_storage_account_name
popd
echo "Done."