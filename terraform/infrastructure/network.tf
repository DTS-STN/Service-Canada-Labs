resource "azurerm_virtual_network" "appservice_vnet" {
  name                = "${var.application_name}-appservice_vnet"
  resource_group_name = var.resource_group_name
  location            = var.location
  address_space       = ["10.254.0.0/16"]
}

resource "azurerm_subnet" "frontend" {
  name                 = "${var.application_name}-subnet-frontend"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.appservice_vnet.name
  address_prefixes     = ["10.254.0.0/24"]
  service_endpoints    = ["Microsoft.Web"]
}

resource "azurerm_subnet" "backend" {
  name                 = "${var.application_name}-subnet-backend"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.appservice_vnet.name
  address_prefixes     = ["10.254.2.0/24"]
}

resource "azurerm_virtual_network" "appservice_vnet_secondary" {
  name                = "${var.application_name}-appservice_vnet_secondary"
  resource_group_name = var.resource_group_name
  location            = var.backup_location
  address_space       = ["10.254.0.0/16"]
}

resource "azurerm_subnet" "frontend_secondary" {
  name                 = "${var.application_name}-subnet-frontend_secondary"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.appservice_vnet_secondary.name
  address_prefixes     = ["10.254.0.0/24"]
  service_endpoints    = ["Microsoft.Web"]
}

resource "azurerm_subnet" "backend_secondary" {
  name                 = "${var.application_name}-subnet-backend_secondary"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.appservice_vnet_secondary.name
  address_prefixes     = ["10.254.2.0/24"]
}

resource "azurerm_public_ip" "appgateway_publicip_primary" {
  name                = "${var.application_name}-appgateway_publicip_primary"
  resource_group_name = var.resource_group_name
  location            = var.location
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "primary-ip-fqdn"
}

resource "azurerm_public_ip" "appgateway_publicip_secondary" {
  name                = "${var.application_name}-appgateway_publicip_secondary"
  resource_group_name = var.resource_group_name
  location            = var.backup_location
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "secondary-ip-fqdn"
}

#&nbsp;since these variables are re-used - a locals block makes this more maintainable
locals {
  backend_address_pool_name      = "${azurerm_virtual_network.appservice_vnet.name}-beap"
  frontend_port_name             = "${azurerm_virtual_network.appservice_vnet.name}-feport"
  frontend_ip_configuration_name = "${azurerm_virtual_network.appservice_vnet.name}-feip"
  http_setting_name              = "${azurerm_virtual_network.appservice_vnet.name}-be-htst"
  listener_name                  = "${azurerm_virtual_network.appservice_vnet.name}-httplstn"
  request_routing_rule_name      = "${azurerm_virtual_network.appservice_vnet.name}-rqrt"
  redirect_configuration_name    = "${azurerm_virtual_network.appservice_vnet.name}-rdrcfg"

  backend_address_pool_name_secondary      = "${azurerm_virtual_network.appservice_vnet_secondary.name}-beap"
  frontend_port_name_secondary             = "${azurerm_virtual_network.appservice_vnet_secondary.name}-feport"
  frontend_ip_configuration_name_secondary = "${azurerm_virtual_network.appservice_vnet_secondary.name}-feip"
  http_setting_name_secondary              = "${azurerm_virtual_network.appservice_vnet_secondary.name}-be-htst"
  listener_name_secondary                  = "${azurerm_virtual_network.appservice_vnet_secondary.name}-httplstn"
  request_routing_rule_name_secondary      = "${azurerm_virtual_network.appservice_vnet_secondary.name}-rqrt"
  redirect_configuration_name_secondary    = "${azurerm_virtual_network.appservice_vnet_secondary.name}-rdrcfg"
}
