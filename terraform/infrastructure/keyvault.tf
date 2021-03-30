resource "azurerm_key_vault" "keyvault" {
  name                        = "${var.application_name}-keyvault-${var.environment}"
  location                    = var.location
  resource_group_name         = var.resource_group_name
  tenant_id                   = var.TENANT_ID

  sku_name = "standard"


}