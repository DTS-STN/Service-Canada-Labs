resource "azurerm_cosmosdb_account" "alphasite-cosmodb-dev" {
  name                = "${var.application_name}-cosmodb"
  location            = var.location
  resource_group_name = var.resource_group_name
  offer_type          = "Standard"
  kind                = "MongoDB"

  enable_automatic_failover = false

  capabilities {
    name = "EnableAggregationPipeline"
  }

  capabilities {
    name = "mongoEnableDocLevelTTL"
  }

  capabilities {
    name = "EnableMongo"
  }

  consistency_policy {
    consistency_level       = "BoundedStaleness"
    max_interval_in_seconds = 10
    max_staleness_prefix    = 200
  }

  geo_location {
    location          = var.location
    failover_priority = 0
  }
}

resource "azurerm_cosmosdb_mongo_database" "alphasite-cosmodb-database-dev" {
  name                = "${var.application_name}-cosmodb-database"
  resource_group_name = azurerm_cosmosdb_account.alphasite-cosmodb-dev.resource_group_name
  account_name        = azurerm_cosmosdb_account.alphasite-cosmodb-dev.name
  throughput          = 400
}