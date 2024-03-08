import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
import os
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
plt.style.use('dark_background')

for dirname, _, filenames in os.walk('Blood_samples_dataset_balanced_2(f).csv.zip'):
    for filename in filenames:
        print(os.path.join(dirname, filename));


train = pd.read_csv('Blood_samples_dataset_balanced_2(f).csv.zip');
test = pd.read_csv('Blood_samples_dataset_test.csv')
table = train.head();
table2 = test.head();
print(table);
print(table2);

table.dropna();
test.dropna();

df = pd.concat([train, test], axis=0);
tt = df.head();
print(tt);

dff = df['Disease'].unique();
print(dff);

df['Disease'] = df['Disease'].replace('Heart Di', 'Heart Disease');
print(df['Disease'].unique());

le = LabelEncoder();

df['Disease'] = le.fit_transform(df['Disease']);

y = df['Disease'];
x = df.drop('Disease', axis=1);

sns.countplot(x=y);
plt.show();

r=4;
c=6;
it=1;
for i in x.columns:
    plt.subplot(r,c,it);
    sns.kdeplot(x[i]);
    plt.grid();
    it+=1;
plt.tight_layout();
plt.show();

sns.heatmap(x.corr(),square=True);
plt.show();

