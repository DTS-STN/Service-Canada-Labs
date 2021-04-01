include {
  path = find_in_parent_folders()
}

dependency "mainRg" {
  config_path = "../resourceGroups"
}

dependency "infrastructure" {
  config_path = "../infrastructure"
}


inputs = merge(
  {
    resource_group_name   = dependency.mainRg.outputs.mainRgName
    location  = dependency.mainRg.outputs.location
    subnet_id   = dependency.infrastructure.outputs.subnetId
    subnet_id_secondary   = dependency.infrastructure.outputs.subnetId_secondary
    diagnostic_storage_account_id = dependency.infrastructure.outputs.diagnosticStorageAccountId
    secondary_diagnostic_storage_account_id = dependency.infrastructure.outputs.diagnosticStorageAccountId_secondary
  }
)
