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
variable "application_url_dev" {
    type = string
}
variable "api_url_dev" {
    type = string
}
variable "admin_url_dev" {
    type = string
}

variable "primary_application_appservice_hostname"{
    type = string
}
variable "application_appservice_name_primary" {
    type = string
}
variable "secondary_application_appservice_hostname" {
    type = string
}
variable "application_appservice_name_secondary" {
    type = string
}

variable "primary_api_appservice_hostname" {
    type = string
}
variable "api_appservice_name_primary" {
    type = string
}
variable "secondary_api_appservice_hostname" {
    type = string
}
variable "api_appservice_name_secondary" {
    type = string
}

variable "primary_admin_appservice_hostname" {
    type = string
}
variable "admin_appservice_name_primary" {
    type = string
}
variable "secondary_admin_appservice_hostname" {
    type = string
}
variable "admin_appservice_name_secondary" {
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
