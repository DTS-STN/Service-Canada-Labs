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
variable "primary_public_ip_fqdn" {
    type = string
}
variable "secondary_public_ip_fqdn" {
    type = string
}
variable "relative_dns_name" {
    type = string
}
variable "healthcheck_page" {
    type = string
}
variable "application_name" {
    type = string
}