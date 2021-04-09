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
variable "vnet_id" {
    type = string
}
variable "subnet_name" {
    type = string
}
variable "vnet_id_secondary" {
    type = string
}
variable "subnet_name_secondary" {
    type = string
}
variable "public_ip_id_primary" {
    type = string
}
variable "public_ip_id_secondary" {
    type = string
}
variable "primary_app_service_hostname" {
    type = string
}
variable "secondary_app_service_hostname" {
    type = string
}
variable "diagnostic_storage_account_id" {
    type = string
}
variable "diagnostic_storage_account_id_secondary" {
    type = string
}
variable "healthcheck_page" {
    type = string
}
variable "app_service_name_primary" {
    type = string
}
variable "app_service_name_secondary" {
    type = string
}