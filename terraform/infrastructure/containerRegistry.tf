resource "azurerm_container_registry" "devacr" {
  name                     = var.dev_acr
  resource_group_name      = var.resource_group_name
  location                 = var.location
  sku                      = "Premium"
  admin_enabled            = true
}
