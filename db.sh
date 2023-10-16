sudo -u postgres psql <<EOF
-- Drop the database if it exists:
DROP DATABASE IF EXISTS sirajjunior;
\echo 'Dropped the database (if it existed).';

-- Create the database:
CREATE DATABASE sirajjunior;
\echo 'Created the database.';

\c sirajjunior;

-- Alter user password:
ALTER USER sirajjunior WITH PASSWORD 'sirajjunior';
\echo 'Password set for user sirajjunior.';

-- Grant all privileges on the database to the user:
GRANT ALL PRIVILEGES ON DATABASE sirajjunior TO sirajjunior;
\echo 'Granted all privileges on database to user sirajjunior.';

-- Grant privileges on the schema:
GRANT ALL PRIVILEGES ON SCHEMA public TO sirajjunior;
\echo 'Granted all privileges on schema public to user sirajjunior.';

-- Grant privileges on all tables in the public schema:
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO sirajjunior;
\echo 'Granted all privileges on all tables in schema public to user sirajjunior.';

-- Grant privileges on all sequences in the public schema:
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO sirajjunior;
\echo 'Granted all privileges on all sequences in schema public to user sirajjunior.';
EOF

echo "Running Django migrations..."
python manage.py migrate

echo "Making Django migrations..."
python manage.py makemigrations

echo "Applying Django migrations..."
python manage.py migrate

#echo "Creating Django superuser..."
#python manage.py createsuperuser
#
#echo "Creating Django superuser with specified credentials..."
#echo "from django.contrib.auth.models import User; User.objects.create_superuser('sirajjunior', 'sirajjunior@gmail.com', 'sirajjunior')" | python manage.py shell


python3 manage.py shell -c "import django; django.setup(); from django.contrib.auth.models import User; User.objects.create_superuser(username = 'abdullah', email='abdullah@kmmrce.com', password='P@ssword1')"
echo 'user created ...!!'
echo "Starting the Django development server..."
python manage.py runserver 0.0.0.0:8000
