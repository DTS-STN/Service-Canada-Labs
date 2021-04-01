resource "azurerm_monitor_diagnostic_setting" "ag-primary-diagnostics" {
  name               = "${var.application_name}-diagnostics-${var.location}"
  target_resource_id = azurerm_app_service.app-service-primary.id
  storage_account_id = var.diagnostic_storage_account_id



log {
    category = "AppServiceAntivirusScanAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceHTTPLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceConsoleLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAppLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceFileAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }    
log {
    category = "AppServiceIPSecAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServicePlatformLogs"
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
  name               = "${var.application_name}-diagnostics-${var.backup_location}"
  target_resource_id = azurerm_app_service.app-service-secondary.id
  storage_account_id = var.secondary_diagnostic_storage_account_id



log {
    category = "AppServiceAntivirusScanAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceHTTPLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceConsoleLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAppLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceFileAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }    
log {
    category = "AppServiceIPSecAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServicePlatformLogs"
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