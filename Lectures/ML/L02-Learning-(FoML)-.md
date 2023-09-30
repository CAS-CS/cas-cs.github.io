

# What is Machine Learning ?

![AI ML and DL](./01.png)
---

# Artificial Intelligence

### Artificial Intelligence is basically the mechanism to incorporate human intelligence into machines through a set of rules(algorithm). 

AI is a combination of two words: **“Artificial”** meaning something made by humans or non-natural things and **“Intelligence”** meaning the ability to understand or think accordingly. 

> Another definition could be that “AI is basically the study of training your machine(computers) to mimic a human brain and it’s thinking capabilities”. 

*AI focuses on 3 major aspects(skills): * **learning, reasoning and self-correction** * to obtain maximum efficiency possible.*

---








# Machine Learning

Machine Learning is basically the study/process which provides the system(computer) to **learn automatically** on its own **through experiences** it had and improve accordingly **without being explicitly programmed**. 

ML is an application or subset of AI. 

ML focuses on the development of programs so that it can access data to use it for themselves. The entire process makes observations on data to identify the possible patterns being formed and make better future decisions as per the examples provided to them. 

#### The major aim of ML is to allow the systems to learn by themselves through the experience without any kind of human intervention or assistance.
---










# Deep Learning

Deep Learning is basically a sub-part of the broader family of Machine Learning which makes use of Neural Networks(similar to the neurons working in our brain) to mimic human brain-like behavior. 

DL algorithms focus on information processing patterns mechanism to possibly **identify the patterns just like our human brain** does and classifies the information accordingly. 

DL works on larger sets of data when compared to ML and **prediction mechanism is self-administered by machines**.
---



# What is Learning


Any agent is said to learn from **experience** with respect to some class of tasks, and a performance measure *(P)*, 
if [the learner's] performance at tasks in the class, as measured by *P*, improves with experience.

## EXPERIENCE

## PERFORMANCE

## TASK


---


# What is ML? 


### It is basically a process of training a piece of software called an algorithm or model, to make useful predictions from data. 


---
# Types of machine learning problems

On basis of the nature of the learning **“signal”** or **“feedback”** available to a learning system

### Supervised Learning

### Unsupervised Learning

##### Reinforcement Learning

---
#    ***Supervised learning***:

The model or algorithm is presented with example inputs and their desired outputs and then finding patterns and connections between the input and the output. 
The goal is to learn a general rule that maps inputs to outputs. 
The training process continues until the model achieves the desired level of accuracy on the training data. 

Some real-life examples are:
#### Image Classification:
You train with images/labels. Then in the future you give a new image expecting that the computer will recognize the new object.
#### Market Prediction/Regression:
You train the computer with historical market data and ask the computer to predict the new price in the future.



---

# Unsupervised learning: 

No labels are given to the learning algorithm, leaving it on its own to find structure in its input. 
It is used for clustering population in different groups. 
Unsupervised learning can be a goal in itself (discovering hidden patterns in data).

#### Clustering:
You ask the computer to separate similar data into clusters, this is essential in research and science.
#### High Dimension Visualization:
Use the computer to help us visualize high dimension data.
### Generative Models:
After a model captures the probability distribution of your input data, it will be able to generate more data. This can be very useful to make your classifier more robust.

---
# Example

A simple diagram which clears the concept of supervised and unsupervised learning is shown below:  
![](https://media.geeksforgeeks.org/wp-content/uploads/supervised_learning-.png)![](https://media.geeksforgeeks.org/wp-content/uploads/unsupervised_learning-.png)   
the data in supervised learning is labelled, where as data in unsupervised learning is unlabelled.

---
## Semi-supervised learning: 

Problems where you have a large amount of input data and only some of the data is labeled, are called semi-supervised learning problems. 

These problems sit in between both supervised and unsupervised learning. 

> A photo archive where only some of the images are labeled, (e.g. dog, cat, person) and the majority are unlabeled.

---
## Reinforcement learning: 
A computer program interacts with a dynamic environment in which it must perform a certain goal (such as driving a vehicle or playing a game against an opponent). The program is provided feedback in terms of rewards and punishments as it navigates its problem space.

![](https://media.geeksforgeeks.org/wp-content/uploads/20200212121948/reinforcement_learning-11.png) 


---
# Supervised learning:
Two most common use cases of supervised learning:
## Classification
## Regression

---
# Classification: 

Inputs are divided into two or more classes, and the learner must produce a model that assigns unseen inputs to one or more (multi-label classification) of these classes and predicting whether or not something belongs to a particular class. 

This is typically tackled in a supervised way. 

Classification models can be categorized in two groups:
> Binary classification and Multiclass Classification. 

*Spam filtering is an example of binary classification, where the inputs are email (or other) messages and the classes are “spam” and “not spam”.*


---

# Regression: 

It is also a **supervised** learning problem, that predicts a numeric value and outputs are continuous rather than discrete. 

For example, predicting the stock prices using historical data.

Classification and regression on two different datasets : 
![](https://media.geeksforgeeks.org/wp-content/uploads/classification_regression.png)


---
# Most common Unsupervised learning are:

### Clustering: 
Here, a set of inputs is to be divided into groups. Unlike in classification, the groups are not known beforehand, making this typically an unsupervised task. 
### Density estimation: 
The task is to find the distribution of inputs in some space.
### Dimensionality reduction: 
It simplifies inputs by mapping them into a lower-dimensional space. *Topic modeling is a related problem, where a program is given a list of human language documents and is tasked to find out which documents cover similar topics.*

---
# Some commonly used machine learning algorithms are 

1. Linear Regression, 

1. Logistic Regression, 

1. Decision Tree, 

1. SVM(Support vector machines), 

1. Naive Bayes, 

1. KNN(K nearest neighbors), 

1. K-Means, 

1. Random Forest, etc.
---

# Terminologies of Machine Learning

### 1 Model
A model is a **specific representation** learned from data by applying some machine learning algorithm. 
A model is also called **hypothesis**.
---

# Terminologies of Machine Learning
### 2 Feature
A feature is an individual measurable property of our data. 

A set of numeric features can be conveniently described by a **feature vector**. 

Feature vectors are fed as input to the model. 

*For example, in order to predict a fruit, there may be features like color, smell, taste,... *
> **Note:** Choosing informative, discriminating and independent features is a crucial step for effective algorithms. We generally employ a **feature extractor** to extract the relevant features from the raw data.
---

# Terminologies of Machine Learning
### 3 Target (Label)
A target variable or label is the value to be predicted by our model. 

For the fruit example discussed in the features section, the label with each set of input would be the name of the fruit like apple, orange, banana, etc.
---

# Terminologies of Machine Learning
### 4 Training 
The idea is to give a set of inputs(features) and it’s expected outputs(labels), so after training, we will have a model (hypothesis) that will then map new data to one of the categories trained on.
---

# Terminologies of Machine Learning
### 5 Prediction
Once our model is ready, it can be fed a set of inputs to which it will provide a predicted output(label). 

> But make sure if the machine performs well on unseen data, then only we can say the machine performs well.
---
# ML Training and Prediction

![](https://media.geeksforgeeks.org/wp-content/uploads/training.png)











---
# Reference

1. [Machine Learning in Action  by Peter Harrington]()



