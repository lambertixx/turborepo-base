variable "aws_region" {
  type    = string
  default = "sa-east-1"
}

variable "project" {
  type    = string
  default = "mentora-rises"
}

variable "web_image" {
  type = string
  # ex: "123456789012.dkr.ecr.sa-east-1.amazonaws.com/mentora-web:latest"
}

variable "api_image" {
  type = string
  # ex: "123456789012.dkr.ecr.sa-east-1.amazonaws.com/mentora-api:latest"
}

variable "web_port" {
  type    = number
  default = 3000
}

variable "api_port" {
  type    = number
  default = 4000
}

variable "desired_web" {
  type    = number
  default = 1
}

variable "desired_api" {
  type    = number
  default = 1
}

# Path(s) que devem ir pro API no ALB
variable "api_path_patterns" {
  type    = list(string)
  default = ["/trpc*", "/health*", "/api/trpc*"]
}

# Env vars do API (coloque aqui o que precisar)
variable "api_env" {
  type      = map(string)
  default   = {}
  sensitive = true
}

# Env vars do WEB (ex: NEXT_PUBLIC_TRPC_URL=/trpc)
variable "web_env" {
  type      = map(string)
  default   = {}
  sensitive = true
}
