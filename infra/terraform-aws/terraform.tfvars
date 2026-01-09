aws_region = "us-east-1"
project    = "mentora-rises"

web_image = "add path das img aq"
api_image = "add path das img aq"

web_env = {
  NODE_ENV = "production"
  NEXT_PUBLIC_TRPC_URL = "/trpc"
}

api_env = {
  NODE_ENV      = "production"
  DATABASE_URL  = "DATABASE_URL"
  REDIS_URL     = "REDIS_URL"
}
