
# Azure Login Settings
variable "SUBSCRIPTION_ID" {}
variable "TENANT_ID" {}
variable "TERRAFORM_USER" {}
variable "TERRAFORM_PASS" {}

#Infrastructure Settings
variable "location" {
    type = string
}
variable "backup_location" {
    type = string
}
variable "resource_group_name" {
    type = string
}
variable "application_name" {
    type = string
}
