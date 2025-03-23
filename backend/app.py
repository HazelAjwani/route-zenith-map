from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv() # Load environment variables from .env

app = Flask(__name__)

TOMTOM_API_KEY = os.getenv("TOMTOM_API_KEY")

@app.route('/get_route', methods=['POST'])
def get_route():
    data = request.get_json()
    origin = data['origin']
    destination = data['destination']
    vehicle_type = data['vehicleType']
    fuel_type = data['fuelType']
    route_preference = data['routePreference']

    # Convert user inputs to TomTom API parameters
    # This section needs to be implemented based on TomTom API documentation.
    # I will provide a basic example, but you'll need to refine it.

    tomtom_url = f"https://api.tomtom.com/routing/1/calculateRoute/{origin}:{destination}/json?key={TOMTOM_API_KEY}"

    if vehicle_type == "Truck":
        tomtom_url += "&vehicleCommercial=true"
    elif vehicle_type == "Bike":
        tomtom_url += "&vehicleType=bicycle"

    if route_preference == "Greenest":
        tomtom_url += "&routeType=eco"
    elif route_preference == "Fastest":
        tomtom_url += "&routeType=fastest"

    response = requests.get(tomtom_url)

    if response.status_code == 200:
        route_data = response.json()
        return jsonify(route_data)
    else:
        return jsonify({'error': 'Failed to fetch route data'}), 500

if __name__ == '__main__':
    app.run(debug=True)
