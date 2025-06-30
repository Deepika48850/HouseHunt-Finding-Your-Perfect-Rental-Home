HouseHunt is a web-based application that helps users search, filter, and compare rental properties based on location, budget, number of rooms, amenities, and user preferences. It uses a combination of a clean UI, geolocation services, and optional machine learning for personalized recommendations.
📌 Project Overview:
HouseHunt is a web-based application that helps users discover, filter, and receive personalized recommendations for rental properties based on their preferences, such as location, price, size, and amenities. It combines a modern UI with geolocation support, a RESTful backend, and optional machine learning for smart recommendations.
🔧 Technologies Used:

Frontend: HTML/CSS, JavaScript or React.js + Tailwind CSS

Backend: Flask (or Django)

Database: SQLite or PostgreSQL

ML: scikit-learn + pandas + joblib

Deployment: Vercel (frontend), Render or Railway (backend)
💡 Core Features:

User registration and login (optional)

Search rental listings by location, price, rooms

Apply filters: price, room type, pet-friendly, amenities

View properties on an interactive map (Leaflet.js or Google Maps)

Save favorite listings

ML-powered recommendations (KNN / clustering)
📦 Sample ML Recommender (KNN):

Python file: ml_model/recommendation.py

import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler

def get_recommendations(user_input, df):
features = df[['price', 'bedrooms', 'bathrooms']]
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
knn = NearestNeighbors(n_neighbors=5)
knn.fit(features_scaled)
user_scaled = scaler.transform([user_input])
distances, indices = knn.kneighbors(user_scaled)
return df.iloc[indices[0]]
Features:

Filter properties by city, price, bedrooms

AI-based property recommendations

RESTful API

Modern, responsive frontend
