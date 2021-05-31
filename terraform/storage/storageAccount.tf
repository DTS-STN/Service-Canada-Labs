resource "azurerm_storage_account" "depot-storageacct" {
  name                     = var.remote_state_storage_account_name
  resource_group_name      = var.depot_resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    Environment = var.environment_tag
    Terraform = "True"
    Branch = "Innovation, Information and Technology"
    Classification = "Unclassified"
    Directorate = "Business Solutions and Information Management"
    ProjectName = "Digital Technology Solutions"
    ProductOwner = "Dwayne Moore - Digital Technology Solutions"
    RequesterEmail = "gocmts@gmail.com"
    OvernightShutdown = false
    Department = "Employment and Social Development Canada"
    Division = ""
    Section = ""
    ProjectID = ""
    CsdID = ""
  }
}