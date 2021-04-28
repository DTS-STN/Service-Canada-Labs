generate "provider" {
  path = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
provider "azurerm" {
    subscription_id = var.subscription_id
    tenant_id = var.tenant_id
    client_id = var.client_id
    client_secret = var.client_secret
    features {}
}
terraform {
  backend "azurerm" {}
}
EOF
}

locals {
  varfile = get_env("TG_VAR_FILE")
  vardata = local.varfile != null ? jsondecode(file(local.varfile)) : {  } # some default
  subscription_id = local.vardata.subscription_id
  tenant_id = local.vardata.tenant_id
  client_id = local.vardata.client_id
  client_secret = local.vardata.client_secret
  depot_resource_group_name = local.vardata.depot_resource_group_name
  storage_account_name = local.vardata.remote_state_storage_account_name
  container_name = local.vardata.application_name

}

# REMOTE STATE
remote_state {
    backend = "azurerm"
    config = {
        key = "${path_relative_to_include()}/terraform.tfstate"
        resource_group_name = local.depot_resource_group_name
        storage_account_name = local.storage_account_name
        container_name = local.container_name
    }
}



terraform {
  extra_arguments "common_vars" {
    commands = ["plan", "apply", "import", "destroy" ]
    arguments = local.varfile != null ? ["-var-file=${local.varfile}"] : []
  }
}
