resource "azurerm_monitor_diagnostic_setting" "application-primary-diagnostics" {
  name                = "${var.application_appservice_name_primary}-ag-diagnostics-primary"
  target_resource_id = azurerm_application_gateway.application-gateway-primary.id
  storage_account_id = var.diagnostic_storage_account_id


log {
    category = "ApplicationGatewayAccessLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "ApplicationGatewayPerformanceLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "ApplicationGatewayFirewallLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  

  metric {
    category = "AllMetrics"

    retention_policy {
      enabled = true
    }
  }
}

resource "azurerm_monitor_diagnostic_setting" "application-secondary-diagnostics" {
  name                = "${var.application_appservice_name_secondary}-ag-diagnostics-secondary"
  target_resource_id = azurerm_application_gateway.application-gateway-secondary.id
  storage_account_id = var.diagnostic_storage_account_id_secondary


log {
    category = "ApplicationGatewayAccessLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "ApplicationGatewayPerformanceLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "ApplicationGatewayFirewallLog"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  

  metric {
    category = "AllMetrics"

    retention_policy {
      enabled = true
    }
  }
}