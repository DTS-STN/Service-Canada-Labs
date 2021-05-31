resource "azurerm_app_service_slot" "app-service-primary-staging" {
    name                    = "staging"
    app_service_name        = azurerm_app_service.app-service-primary.name
    location                = var.location
    resource_group_name     = var.resource_group_name
    app_service_plan_id     = azurerm_app_service_plan.app-service-plan-primary.id
    https_only              = true
    client_affinity_enabled = true

    site_config {
        always_on = "true"

        linux_fx_version  = "DOCKER|${var.staging_docker_registry}/${var.staging_docker_container}"

        health_check_path = var.healthcheck_page # health check required in order that internal app service plan loadbalancer do not loadbalance on instance down
    }

    identity {
        type = "SystemAssigned"
    }

    app_settings = {
        "APP_SERVICE"                     = "true"
        "DOCKER_REGISTRY_SERVER_URL"      = var.staging_docker_registry
        "DOCKER_REGISTRY_SERVER_USERNAME" = var.staging_docker_registry_username
        "DOCKER_REGISTRY_SERVER_PASSWORD" = var.staging_docker_registry_password
        "SLOT_NAME"                       = "default"

    }

}

resource "azurerm_app_service_slot" "app-service-secondary-staging" {
    name                    = "staging"
    app_service_name        = azurerm_app_service.app-service-secondary.name
    location                = var.backup_location
    resource_group_name     = var.resource_group_name
    app_service_plan_id     = azurerm_app_service_plan.app-service-plan-secondary.id
    https_only              = true
    client_affinity_enabled = true

    site_config {
        always_on = "true"

        linux_fx_version  = "DOCKER|${var.staging_docker_registry}/${var.staging_docker_container}"

        health_check_path = var.healthcheck_page # health check required in order that internal app service plan loadbalancer do not loadbalance on instance down
    }

    identity {
        type = "SystemAssigned"
    }

    app_settings = {
        "APP_SERVICE"                     = "true"
        "DOCKER_REGISTRY_SERVER_URL"      = var.staging_docker_registry
        "DOCKER_REGISTRY_SERVER_USERNAME" = var.staging_docker_registry_username
        "DOCKER_REGISTRY_SERVER_PASSWORD" = var.staging_docker_registry_password
        "SLOT_NAME"                       = "default"

    }

}