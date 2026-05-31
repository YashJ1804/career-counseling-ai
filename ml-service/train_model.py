import pandas as pd

from sklearn.ensemble import RandomForestClassifier

from sklearn.preprocessing import LabelEncoder

import joblib

# LOAD DATASET
data = pd.read_csv("career_dataset.csv")

# FEATURES
X = data[[
    "logical",
    "communication",
    "leadership",
    "creativity",
    "technical"
]]

# TARGET
y = data["recommendation"]

# ENCODE LABELS
encoder = LabelEncoder()

y_encoded = encoder.fit_transform(y)

# TRAIN MODEL
model = RandomForestClassifier()

model.fit(X, y_encoded)

# SAVE MODEL
joblib.dump(model, "career_model.pkl")

# SAVE ENCODER
joblib.dump(encoder, "label_encoder.pkl")

print("Model Trained Successfully")