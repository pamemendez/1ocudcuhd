import csv
from datetime import datetime
from dateutil import parser
import pytz
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smart_city.settings')
django.setup()

from app_smart.models import TemperaturaData, Sensor

def load_temperature_data(csv_file_path):
    print("Início da importação:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        line_count = 0
        for row in reader:
            sensor_id = int(row['sensor_id'])
            valor = float(row['valor'])
            timestamp = parser.parse(row['timestamp']) 

            sensor = Sensor.objects.get(id=sensor_id)
            TemperaturaData.objects.create(sensor=sensor, valor=valor, timestamp=timestamp)

            line_count += 1
            if line_count % 10000 == 0:
                print(f"{line_count} linhas processadas...")

    print("Fim da importação:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    print(f"os dados foram carregados de {csv_file_path}")

load_temperature_data('dados/temperatura_data.csv')