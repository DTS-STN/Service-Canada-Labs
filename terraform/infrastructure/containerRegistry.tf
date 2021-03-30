resource "azurerm_container_registry" "devacr" {
  name                     = "${var.application_name}ACR${var.environment}"
  resource_group_name      = var.resource_group_name
  location                 = var.location
  sku                      = "Premium"
  admin_enabled            = true
}
