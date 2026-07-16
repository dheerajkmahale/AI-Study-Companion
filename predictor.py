import numpy as np
from sklearn.linear_model import LinearRegression

def predict_study_score(hours):
    """Simple model to predict score based on study hours."""
    X = np.array([[1], [2], [3], [4], [5]])
    y = np.array([50, 60, 70, 80, 90])
    model = LinearRegression().fit(X, y)
    return model.predict(np.array([[hours]]))

if __name__ == "__main__":
    print(f"Predicted score for 6 hours: {predict_study_score(6)[0]:.2f}")
