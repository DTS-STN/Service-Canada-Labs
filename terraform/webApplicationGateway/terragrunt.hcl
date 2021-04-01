include {
  path = find_in_parent_folders()
}

dependency "mainRg" {
  config_path = "../resourceGroups"
}
dependency "infrastructure" {
  config_path = "../infrastructure"
}
dependency "appService" {
  config_path = "../appService"
}



inputs = merge(
{
    resource_group_name   = dependency.mainRg.outputs.mainRgName
    location  = dependency.mainRg.outputs.location
    subnet_name   = dependency.infrastructure.outputs.subnetName
    subnet_name_secondary   = dependency.infrastructure.outputs.subnetName_secondary
    vnet_id  = dependency.infrastructure.outputs.vnetId
    vnet_id_secondary  = dependency.infrastructure.outputs.vnetId_secondary
    public_ip_id_primary = dependency.infrastructure.outputs.publicIpId_primary
    public_ip_id_secondary = dependency.infrastructure.outputs.publicIpId_secondary
    app_service_name_primary = dependency.appService.outputs.primaryAppServiceName
    app_service_name_secondary = dependency.appService.outputs.secondaryAppServiceName
    diagnostic_storage_account_id  = dependency.infrastructure.outputs.diagnosticStorageAccountId
    diagnostic_storage_account_id_secondary = dependency.infrastructure.outputs.diagnosticStorageAccountId_secondary
    primary_app_service_hostname = dependency.appService.outputs.primaryAppServiceHostname
    secondary_app_service_hostname = dependency.appService.outputs.secondaryAppServiceHostname
  }
)

