# Create Traffic Manager API Profile
resource "azurerm_traffic_manager_profile" "traffic-manager" {
  name                   = "${var.application_name}-as-traffic-manager"
  resource_group_name    = var.resource_group_name
  traffic_routing_method = "Performance"

  dns_config {
    relative_name = var.relative_dns_name
    ttl           = 300
  }

  monitor_config {
    protocol = "https"
    port     = 443
    path     = var.healthcheck_page
  }
}


resource "azurerm_traffic_manager_endpoint" "tm-endpoint-primary" {
  name                = "${var.application_name}-tm-endpoint-primary"
  resource_group_name = var.resource_group_name
  profile_name        = azurerm_traffic_manager_profile.traffic-manager.name
  type                = "externalEndpoints"
  target              = var.primary_public_ip_fqdn
  endpoint_location   = var.location
}
resource "azurerm_traffic_manager_endpoint" "tm-endpoint-secondary" {
  name                = "${var.application_name}-tm-endpoint-secondary"
  resource_group_name = var.resource_group_name
  profile_name        = azurerm_traffic_manager_profile.traffic-manager.name
  type                = "externalEndpoints"
  target              = var.secondary_public_ip_fqdn
  endpoint_location   = var.backup_location
}