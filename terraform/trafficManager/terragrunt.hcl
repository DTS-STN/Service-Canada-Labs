include {
  path = find_in_parent_folders()
}

dependency "mainRg" {
  config_path = "../resourceGroups"
}

dependency "network" {
  config_path = "../infrastructure"
}

inputs = merge(
  {
    resource_group_name = dependency.mainRg.outputs.mainRgName
    location = dependency.mainRg.outputs.location
    primary_public_ip_fqdn = dependency.network.outputs.publicIpFqdn_primary
    secondary_public_ip_fqdn = dependency.network.outputs.publicIpFqdn_secondary
  }
)
