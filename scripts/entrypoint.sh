#!/bin/sh

# Wait for PostgreSQL to be ready
until psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

# Run Prisma commands
npx prisma generate
npx prisma migrate deploy

# Execute the main container command
exec "$@"
