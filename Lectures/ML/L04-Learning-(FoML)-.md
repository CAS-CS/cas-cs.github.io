
# Cross-validation

Cross-validation is a technique in which we train our model using the subset of the data-set and then evaluate using the complementary subset of the data-set.

The three steps involved in cross-validation are as follows :

1. Reserve some portion of sample data-set.

1.    Using the rest data-set train the model.

1.   Test the model using the reserve portion of the data-set.

---

# Common Cross validation Techniques
1.  ***Leave p out cross-validation***
2.  ***Leave one out cross-validation***
3.  ***Holdout cross-validation***
4.  ***Repeated random subsampling validation***
5.  ***k-fold cross-validation***
6.  ***Stratified k-fold cross-validation***
7.  ***Time Series cross-validation***



---
# Why Cross-Validation is Important?
----------------------------------

We often randomly split the dataset into train data and test data to develop a machine learning model. The training data is used to train the ML model and the same model is tested on independent testing data to evaluate the performance of the model.

With the change in the random state of the split, the accuracy of the model also changes, so we are not able to achieve a fixed accuracy for the model. 
The testing data should be kept independent of the training data so that no data leakage occurs. 
During the development of an ML model using the training data, the model performance needs to be evaluated. Here’s the importance of cross-validation data comes into the picture.
---
# Why Cross-Validation is Important?


Data needs to split into:

*   **Training data:** Used for model development
*   **Validation data:** Used for validating the performance of the same model

![](https://miro.medium.com/max/367/1*f5EpP3dfLNdpqWGEwPIoqw.png)


In simple terms cross-validation allows us to utilize our data even better. You can further read, working, and implementation of 7 types of Cross-Validation techniques.



---
1. Leave p-out cross-validation (LpOCV):
---------------------------------

Leave p-out cross-validation (LpOCV) is an exhaustive cross-validation technique, that involves using p-observation as validation data, and remaining data is used to train the model. 

This is repeated in all ways to cut the original sample on a validation set of _p_ observations and a training set.

---
2. Leave-one-out cross-validation (LOOCV):
-----------------------------------

Leave-one-out cross-validation (LOOCV) is an exhaustive cross-validation technique. It is a category of LpOCV with the case of p=1.

![](https://miro.medium.com/max/300/1*26vyRHpqGbVAwJq_csUqZQ.gif)

([Source](https://en.wikipedia.org/wiki/File:LOOCV.gif)), LOOCV operations

For a dataset having n rows, 1st row is selected for validation, and the rest (n-1) rows are used to train the model. For the next iteration, the 2nd row is selected for validation and rest to train the model. Similarly, the process is repeated until n steps or the desired number of operations.

Both the above two cross-validation techniques are the types of **exhaustive cross-validation.** 

*Exhaustive cross-validation methods are cross-validation methods that learn and test in all possible ways.*
---
2. Leave-one-out cross-validation (LOOCV):
-----------------------------------
Pros:
-----

1.  Simple, easy to understand, and implement.

Cons:
-----

1.  The model may lead to a low bias.

2.  The computation time required is high.
---
3. Holdout cross-validation:
-----------------------------

The holdout technique is an exhaustive cross-validation method, that randomly splits the dataset into train and test data depending on data analysis.

![](https://miro.medium.com/max/367/1*kUcJBJmkSUbmkO0tm_rdyg.png)


In the case of holdout cross-validation, the dataset is randomly split into training and validation data. Generally, the split of training data is more than test data. The training data is used to induce the model and validation data is evaluates the performance of the model.

The more data is used to train the model, the better the model is. For the holdout cross-validation method, a good amount of data is isolated from training.
---
3. Holdout cross-validation:
-----------------------------

Cons:
-----

1.  Not suitable for an imbalanced dataset.

2.  A lot of data is isolated from training the model.
---
4. k-fold cross-validation:
----------------------------

In k-fold cross-validation, the original dataset is equally partitioned into k subparts or folds. 

Out of the k-folds or groups, for each iteration, one group is selected as validation data, and the remaining (k-1) groups are selected as training data.

![](https://miro.medium.com/max/350/1*2rRcNnIokzJU_-NXm29IMA.gif)

---
4. k-fold cross-validation:
----------------------------

The process is repeated for k times until each group is treated as validation and remaining as training data.

![](https://miro.medium.com/max/382/1*ZAtq4R-CnEoACJQ4HJ6YwQ.png)



The final accuracy of the model is computed by taking the mean accuracy of the k-models validation data.

![](https://miro.medium.com/max/173/1*xUaAYAI_Dql1NtfV-0ycqQ.png)

>Q. LOOCV is a variant of k-fold cross-validation where k= ??.


---
4. k-fold cross-validation:
----------------------------
Pros:
-----

1.  The model has low bias

2.  Low time complexity

3.  The entire dataset is utilized for both training and validation.

Cons:
-----

1.  Not suitable for an imbalanced dataset.
---
5. Repeated random subsampling validation:
-------------------------------------------

Repeated random subsampling validation also referred to as Monte Carlo cross-validation splits the dataset randomly into training and validation. Unlikely k-fold cross-validation split of the dataset into not in groups or folds but splits in this case in random.

The number of iterations is not fixed and decided by analysis. The results are then averaged over the splits.

![](https://miro.medium.com/max/620/1*MiLCGYdMlPkjd6OB5v_4ag.png)

(Image by Author), Repeated random subsampling validation

![](https://miro.medium.com/max/173/1*xUaAYAI_Dql1NtfV-0ycqQ.png)

---
5. Repeated random subsampling validation:
-------------------------------------------
Pros:
-----

1.  The proportion of train and validation splits is not dependent on the number of iterations or partitions.

Cons:
-----

1.  Some samples may not be selected for either training or validation.

2.  Not suitable for an imbalanced dataset.
---
6. Stratified k-fold cross-validation:
---------------------------------------

**Stratified k-fold cross-validation solved the problem of an imbalanced dataset.**

In Stratified k-fold cross-validation, the dataset is partitioned into k groups or folds such that the validation data has an **equal number of instances of target class label**. This ensures that one particular class is not over present in the validation or train data especially when the dataset is imbalanced.

![](https://miro.medium.com/max/297/1*heFAp1evlvrI_1MGHgvB8w.png)



The final score is computed by taking the mean of scores of each fold.
---
6. Stratified k-fold cross-validation:
---------------------------------------
Pros:
-----

1.  Works well for an imbalanced dataset.

Cons:
-----

1.  Now suitable for time series dataset.
---
7. Time Series cross-validation:
---------------------------------

The order of the data is very important for time-series related problem. For time-related dataset random split or k-fold split of data into train and validation may not yield good results.

For the time-series dataset, the split of data into train and validation is according to the time also referred to as **forward chaining method** or **rolling cross-validation**. 

![](https://miro.medium.com/max/552/1*c99ETyWfeteaC_564CDnLw.png)



As mentioned in the above diagram, for the 1st iteration, 1st 3 rows are considered as train data and the next instance T4 is validation data. 
---

---
# Implementation

Implementation of these cross-validations can be found out in the sklearn package. Read [this sklearn documentation](https://scikit-learn.org/stable/modules/cross_validation.html) for more details.

---

## Distance

1. manhaten distance
2. euclidean distance
3. ...

  




---
# Reference

1. [Machine Learning in Action  by Peter Harrington]()



