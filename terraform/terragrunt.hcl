# stage/terragrunt.hcl

# REMOTE STATE
remote_state {
    backend = "azurerm"
    config = {
        key = "${path_relative_to_include()}/terraform.tfstate"
        resource_group_name = "${get_env("TF_VAR_REMOTE_STATE_RESOURCE_GROUP")}"
        storage_account_name = "${get_env("TF_VAR_REMOTE_STATE_STORAGE_ACCOUNT")}"
        container_name = "${get_env("TF_VAR_APP_NAME")}"
    }
}
# GENERATE PROVIDER FOR ALL SUB-DIRS
generate "provider" {
  path = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
provider "azurerm" {
    subscription_id = "${get_env("TF_VAR_SUBSCRIPTION_ID")}"
    tenant_id = "${get_env("TF_VAR_TENANT_ID")}"
    client_id = "${get_env("TF_VAR_TERRAFORM_USER")}"
    client_secret = "${get_env("TF_VAR_TERRAFORM_PASS")}"
    features {}
   
}
terraform {
  backend "azurerm" {}
}
EOF
}


# INCLUDE COMMON VARS
terraform {
  extra_arguments "common_vars" {
    commands = ["plan", "apply", "import"]

  }
}