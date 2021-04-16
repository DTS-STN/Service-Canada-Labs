resource "azurerm_application_gateway" "application-gateway-primary" {
  name                = "${var.application_appservice_name_primary}-ag-primary"
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
    name        = "alphasiteApplicationPool"
    fqdns       = [var.primary_application_appservice_hostname]
  }

  backend_address_pool {
    name        = "alphasiteApiPool"
    fqdns       = [var.primary_api_appservice_hostname]
  }

  http_listener {
    name                           = "alphasiteApiListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = "alphasite-api.dts-stn.com"
    require_sni                    = "true"
  }

  http_listener {
    name                           = "alphasiteApplicationListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = "alphasite.dts-stn.com"
    require_sni                    = "true"
 
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = filebase64("../temp/dts-stn-wildcard.pfx")
  }

  probe {
    name                = "application-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_application_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  probe {
    name                = "api-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_api_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  backend_http_settings {
    name                  = "application-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "application-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  backend_http_settings {
    name                  = "api-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "api-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  request_routing_rule {
    name                       = "alphasiteApplicationRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApplicationListener"
    backend_address_pool_name  = "alphasiteApplicationPool"
    backend_http_settings_name = "application-https"
  }

  request_routing_rule {
    name                       = "alphasiteApiRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApiListener"
    backend_address_pool_name  = "alphasiteApiPool"
    backend_http_settings_name = "api-https"
  }

}

resource "azurerm_application_gateway" "application-gateway-secondary" {
  name                = "${var.application_appservice_name_secondary}-ag-secondary"
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
    name        = "alphasiteApplicationPool"
    fqdns       = [var.secondary_application_appservice_hostname]
  }

  backend_address_pool {
    name        = "alphasiteApiPool"
    fqdns       = [var.secondary_api_appservice_hostname]
  }

  http_listener {
    name                           = "alphasiteApiListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = "alphasite-api.dts-stn.com"
    require_sni                    = "true"
  }

  http_listener {
    name                           = "alphasiteApplicationListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = "alphasite.dts-stn.com"
    require_sni                    = "true"
 
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = filebase64("../temp/dts-stn-wildcard.pfx")
  }

  probe {
    name                = "application-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.secondary_application_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  probe {
    name                = "api-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.secondary_api_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  backend_http_settings {
    name                  = "application-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "application-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  backend_http_settings {
    name                  = "api-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "api-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  request_routing_rule {
    name                       = "alphasiteApplicationRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApplicationListener"
    backend_address_pool_name  = "alphasiteApplicationPool"
    backend_http_settings_name = "application-https"
  }

  request_routing_rule {
    name                       = "alphasiteApiRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApiListener"
    backend_address_pool_name  = "alphasiteApiPool"
    backend_http_settings_name = "api-https"
  }
}