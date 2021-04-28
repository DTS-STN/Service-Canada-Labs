resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_resource_group" "depot" {
  name     = var.depot_resource_group_name
  location = var.location
}