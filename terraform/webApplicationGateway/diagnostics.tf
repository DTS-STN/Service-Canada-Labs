resource "azurerm_monitor_diagnostic_setting" "ag-primary-diagnostics" {
  name                = "${var.app_service_name_primary}-ag-diagnostics-primary"
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

resource "azurerm_monitor_diagnostic_setting" "ag-secondary-diagnostics" {
  name                = "${var.app_service_name_primary}-ag-diagnostics-secondary"
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