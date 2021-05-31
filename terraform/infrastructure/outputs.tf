output "subnetName" {
  value = azurerm_subnet.frontend.name
}
output "vnetId" {
  value = azurerm_virtual_network.appservice_vnet.id
}
output "subnetName_secondary" {
  value = azurerm_subnet.frontend_secondary.name
}
output "vnetId_secondary" {
  value = azurerm_virtual_network.appservice_vnet_secondary.id
}
output "publicIpId_primary" {
    value = azurerm_public_ip.appgateway_publicip_primary.id
}
output "publicIpFqdn_primary" {
    value = azurerm_public_ip.appgateway_publicip_primary.fqdn
}
output "publicIpId_secondary" {
    value = azurerm_public_ip.appgateway_publicip_secondary.id
}
output "publicIpFqdn_secondary" {
    value = azurerm_public_ip.appgateway_publicip_secondary.fqdn
}
output "subnetId" {
  value = azurerm_subnet.frontend.id
}
output "subnetId_secondary" {
  value = azurerm_subnet.frontend_secondary.id
}
output "diagnosticStorageAccountId" {
  value = azurerm_storage_account.appservice-diagnostics.id
}
output "diagnosticStorageAccountId_secondary" {
  value = azurerm_storage_account.appservice-diagnostics-secondary.id
}