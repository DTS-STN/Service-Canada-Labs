resource "azurerm_application_gateway" "application-gateway-primary" {
  name                = "${var.app_service_name_primary}-ag-primary"
  resource_group_name = var.resource_group_name
  location            = var.location
  enable_http2        = true


  sku {
    name     = "WAF_Medium"
    tier     = "WAF"
    capacity = 2
  }

  waf_configuration {
    enabled          = "true"
    firewall_mode    = "Prevention"
    rule_set_type    = "OWASP"
    rule_set_version = "3.0"
  }

  gateway_ip_configuration {
    name      = "subnet"
    subnet_id = "${var.vnet_id}/subnets/${var.subnet_name}"
  }

  frontend_port {
    name = "https"
    port = 443
  }

  frontend_ip_configuration {
    name                 = "frontend"
    public_ip_address_id = var.public_ip_id_primary
  }

  backend_address_pool {
    name        = "AppService"
    fqdns       = [var.primary_app_service_hostname]
  }

  http_listener {
    name                           = "https"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
 
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = filebase64("../temp/dts-stn-wildcard.pfx")
  }

  probe {
    name                = "probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_app_service_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  backend_http_settings {
    name                  = "https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "probe"
    pick_host_name_from_backend_address = true
  }

  request_routing_rule {
    name                       = "https"
    rule_type                  = "Basic"
    http_listener_name         = "https"
    backend_address_pool_name  = "AppService"
    backend_http_settings_name = "https"
  }
}

resource "azurerm_application_gateway" "application-gateway-secondary" {
  name                = "${var.app_service_name_secondary}-ag-secondary"
  resource_group_name = var.resource_group_name
  location            = var.backup_location
  enable_http2        = true


  sku {
    name     = "WAF_Medium"
    tier     = "WAF"
    capacity = 2
  }

  waf_configuration {
    enabled          = "true"
    firewall_mode    = "Prevention"
    rule_set_type    = "OWASP"
    rule_set_version = "3.0"
  }

  gateway_ip_configuration {
    name      = "subnet"
    subnet_id = "${var.vnet_id_secondary}/subnets/${var.subnet_name_secondary}"
  }

  frontend_port {
    name = "https"
    port = 443
  }

  frontend_ip_configuration {
    name                 = "frontend"
    public_ip_address_id = var.public_ip_id_secondary
  }

  backend_address_pool {
    name        = "AppService"
    fqdns       = [var.secondary_app_service_hostname]
  }

  http_listener {
    name                           = "https"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
 
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = filebase64("../temp/dts-stn-wildcard.pfx")
  }

  probe {
    name                = "probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.secondary_app_service_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  backend_http_settings {
    name                  = "https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "probe"
    pick_host_name_from_backend_address = true
  }

  request_routing_rule {
    name                       = "https"
    rule_type                  = "Basic"
    http_listener_name         = "https"
    backend_address_pool_name  = "AppService"
    backend_http_settings_name = "https"
  }
}