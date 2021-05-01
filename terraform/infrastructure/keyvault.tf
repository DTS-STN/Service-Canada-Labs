resource "azurerm_key_vault" "keyvault" {
  name                        = "${var.application_name}-keyvault-${var.environment}"
  location                    = var.location
  resource_group_name         = var.resource_group_name
  tenant_id                   = var.tenant_id

  sku_name = "standard"


  
}

resource "azurerm_key_vault_secret" "alphasite-terraform-pass" {
  name     = "${var.application_name}-terraform-pass-${var.environment}"
  value    = var.client_secret
  key_vault_id = azurerm_key_vault.keyvault.id
}