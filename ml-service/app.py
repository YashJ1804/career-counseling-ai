from flask import Flask, request, jsonify

import joblib

import numpy as np

# LOAD MODEL
model = joblib.load("career_model.pkl")

# LOAD LABEL ENCODER
encoder = joblib.load("label_encoder.pkl")

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array([[
        data["logical"],
        data["communication"],
        data["leadership"],
        data["creativity"],
        data["technical"]
    ]])

    prediction = model.predict(features)

    career = encoder.inverse_transform(prediction)

    return jsonify({

        "success": True,

        "career_prediction": career[0]

    })

if __name__ == "__main__":

    app.run(debug=True)