resource "azurerm_application_gateway" "application-gateway-v2-primary" {
  name                = "${var.application_appservice_name_primary}-ag-v2-primary"
  resource_group_name = var.resource_group_name
  location            = var.location
  enable_http2        = true


  sku {
    name     = "WAF_v2"
    tier     = "WAF_v2"
    capacity = 2
  }

  waf_configuration {
    enabled          = "true"
    firewall_mode    = "Prevention"
    rule_set_type    = "OWASP"
    rule_set_version = "3.0"
    disabled_rule_group {
      rule_group_name = "REQUEST-931-APPLICATION-ATTACK-RFI"
      rules = [931130]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-941-APPLICATION-ATTACK-XSS"
      rules = [941150]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-942-APPLICATION-ATTACK-SQLI"
      rules = [942200,942260,942340,942430,942330,942370]
    }
  }

  gateway_ip_configuration {
    name      = "subnet"
    subnet_id = var.subnet_id
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

  backend_address_pool {
    name        = "alphasiteAdminPool"
    fqdns       = [var.primary_admin_appservice_hostname]
  }

  http_listener {
    name                           = "alphasiteApiListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.api_url_dev
    require_sni                    = "true"
  }

  http_listener {
    name                           = "alphasiteApplicationListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.application_url_dev
    require_sni                    = "true"
  }

  http_listener {
    name                           = "alphasiteAdminListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.admin_url_dev
    require_sni                    = "true"
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = var.domain_wildcard
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

  probe {
    name                = "admin-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_admin_appservice_hostname
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
  
  backend_http_settings {
    name                  = "admin-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "admin-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  rewrite_rule_set {
    name = "CORS" 
      rewrite_rule {
        name = "allow-origin"
        rule_sequence = 100
          response_header_configuration {
            header_name  = "Access-Control-Allow-Origin"
            header_value = "*"
      }
    }
  }

  request_routing_rule {
    name                       = "alphasiteApplicationRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApplicationListener"
    backend_address_pool_name  = "alphasiteApplicationPool"
    backend_http_settings_name = "application-https"
    rewrite_rule_set_name = "CORS"
  }

  request_routing_rule {
    name                       = "alphasiteApiRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApiListener"
    backend_address_pool_name  = "alphasiteApiPool"
    backend_http_settings_name = "api-https"
    rewrite_rule_set_name = "CORS"
  }

  request_routing_rule {
    name                       = "alphasiteAdminRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteAdminListener"
    backend_address_pool_name  = "alphasiteAdminPool"
    backend_http_settings_name = "admin-https"
    rewrite_rule_set_name = "CORS"
  } 

}

resource "azurerm_application_gateway" "application-gateway-v2-secondary" {
  name                = "${var.application_appservice_name_secondary}-ag-v2-secondary"
  resource_group_name = var.resource_group_name
  location            = var.backup_location
  enable_http2        = true


  sku {
    name     = "WAF_v2"
    tier     = "WAF_v2"
    capacity = 2
  }

  waf_configuration {
    enabled          = "true"
    firewall_mode    = "Prevention"
    rule_set_type    = "OWASP"
    rule_set_version = "3.0"
    disabled_rule_group {
      rule_group_name = "REQUEST-931-APPLICATION-ATTACK-RFI"
      rules = [931130]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-941-APPLICATION-ATTACK-XSS"
      rules = [941150]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-942-APPLICATION-ATTACK-SQLI"
      rules = [942200,942260,942340,942430,942330,942370]
    }
  }

  gateway_ip_configuration {
    name      = "subnet"
    subnet_id = var.subnet_id_secondary
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

  backend_address_pool {
    name        = "alphasiteAdminPool"
    fqdns       = [var.secondary_admin_appservice_hostname]
  }  

  http_listener {
    name                           = "alphasiteApiListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.api_url_dev
    require_sni                    = "true"
  }

  http_listener {
    name                           = "alphasiteApplicationListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.application_url_dev
    require_sni                    = "true"
  }
  
  http_listener {
    name                           = "alphasiteAdminListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.admin_url_dev
    require_sni                    = "true"
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = var.domain_wildcard
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

  probe {
    name                = "admin-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.secondary_admin_appservice_hostname
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

  backend_http_settings {
    name                  = "admin-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "admin-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  rewrite_rule_set {
    name = "CORS" 
      rewrite_rule {
        name = "allow-origin"
        rule_sequence = 100
          response_header_configuration {
            header_name  = "Access-Control-Allow-Origin"
            header_value = "*"
      }
    }
  }

  request_routing_rule {
    name                       = "alphasiteApplicationRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApplicationListener"
    backend_address_pool_name  = "alphasiteApplicationPool"
    backend_http_settings_name = "application-https"
    rewrite_rule_set_name = "CORS"
  }

  request_routing_rule {
    name                       = "alphasiteApiRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteApiListener"
    backend_address_pool_name  = "alphasiteApiPool"
    backend_http_settings_name = "api-https"
    rewrite_rule_set_name = "CORS"
  }

  request_routing_rule {
    name                       = "alphasiteAdminRule"
    rule_type                  = "Basic"
    http_listener_name         = "alphasiteAdminListener"
    backend_address_pool_name  = "alphasiteAdminPool"
    backend_http_settings_name = "admin-https"
    rewrite_rule_set_name = "CORS"
  } 
}