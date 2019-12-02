from flask import Flask, request
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy
from sklearn import linear_model # Le modèle linéaire
from sklearn import datasets
from sklearn.metrics import mean_squared_error, r2_score # Métriques d'évaluation

import seaborn as sns

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict', methods = ['POST'])
def predict ():
    data = request.form['X']
    file = pd.read_excel('./data/slr04.xls')
  req = request.form['predict']
  print(req)
  # if (req )
#   grayKangaroos = pd.read_excel('slr07.xls')
#   x = 'nasal_length'
#   y = 'nasal_width'
#   grayKangaroos.columns = [x, y]
#   X_train = np.expand_dims(grayKangaroos[x], axis=1)
#   Y_train = grayKangaroos[y]
#   regr = linear_model.LinearRegression()
#   regr.fit(X_train, Y_train)
#   res = regr.predict([[int(req)]])
#   # json = datas.to_json(orient='index')
#   # json = grayKangaroos.to_json(orient='index')
#   # return json
#   return str(res[0])

if __name__ == '__main__':
    app.run(
