
# Decision Tree Classification Algorithm
--------------------------------------

*   Decision Tree is a **Supervised learning technique** that can be used for both classification and Regression problems, but mostly it is preferred for solving Classification problems. It is a tree-structured classifier, where **internal nodes represent the features of a dataset, branches represent the decision rules** and **each leaf node represents the outcome.**

*   In a Decision tree, there are two nodes, which are the **Decision Node** and **Leaf Node.** Decision nodes are used to make any decision and have multiple branches, whereas Leaf nodes are the output of those decisions and do not contain any further branches.

*   The decisions or the test are performed on the basis of features of the given dataset.
*   **_It is a graphical representation for getting all the possible solutions to a problem/decision based on given conditions._**
---
# Decision Tree Classification Algorithm
-----
*   It is called a decision tree because, similar to a tree, it starts with the root node, which expands on further branches and constructs a tree-like structure.

*   In order to build a tree, we use the **CART algorithm,** which stands for **Classification and Regression Tree algorithm.**

*   A decision tree simply asks a question, and based on the answer (Yes/No), it further split the tree into subtrees.


#### Note: A decision tree can contain categorical data (YES/NO) as well as numeric data.
---

![Decision Tree Classification Algorithm](https://static.javatpoint.com/tutorial/machine-learning/images/decision-tree-classification-algorithm.png)
---
Why use Decision Trees?
-----------------------


*   Decision Trees usually mimic human thinking ability while making a decision, so it is easy to understand.

*   The logic behind the decision tree can be easily understood because it shows a tree-like structure.
---
Decision Tree Terminologies
---------------------------

*   **Root Node:** Root node is from where the decision tree starts. It represents the entire dataset, which further gets divided into two or more homogeneous sets.

*   **Leaf Node:** Leaf nodes are the final output node, and the tree cannot be segregated further after getting a leaf node.

*   **Splitting:** Splitting is the process of dividing the decision node/root node into sub-nodes according to the given conditions.

*   **Branch/Sub Tree:** A tree formed by splitting the tree.

*   **Pruning:** Pruning is the process of removing the unwanted branches from the tree.

*   **Parent/Child node:** The root node of the tree is called the parent node, and other nodes are called the child nodes.
---
# **How does the Decision Tree algorithm Work?**

In a decision tree, for predicting the class of the given dataset, the algorithm starts from the root node of the tree. 

This algorithm compares the values of root attribute with the record (real dataset) attribute and, based on the comparison, follows the branch and jumps to the next node.

For the next node, the algorithm again compares the attribute value with the other sub-nodes and move further. *It continues the process until it reaches the leaf node of the tree.*
---
# **How does the Decision Tree algorithm Work?**

*   **Step-1:** Begin the tree with the root node, says S, which contains the complete dataset.

*   **Step-2:** Find the best attribute in the dataset using **Attribute Selection Measure (ASM).**

*   **Step-3:** Divide the S into subsets that contains possible values for the best attributes.

*   **Step-4:** Generate the decision tree node, which contains the best attribute.

*   **Step-5:** Recursively make new decision trees using the subsets of the dataset created in step -3. **Continue this process until a stage is reached where you cannot further classify the nodes and called the final node as a leaf node.**
---
**Example:** 
> Suppose there is a candidate who has a job offer and wants to decide whether he should accept the offer or Not. 

So, to solve this problem, the decision tree starts with the root node (Salary attribute by ASM). 

The root node splits further into the next decision node (distance from the office) and one leaf node based on the corresponding labels. 

The next decision node further gets split into one decision node (Cab facility) and one leaf node. 

Finally, the decision node splits into two leaf nodes (Accepted offers and Declined offer). Consider the below diagram:
---
![Decision Tree Classification Algorithm](https://static.javatpoint.com/tutorial/machine-learning/images/decision-tree-classification-algorithm2.png)
---
Attribute Selection Measures (ASM)
----------------------------

While implementing a Decision tree, the main issue arises that how to select the best attribute for the root node and for sub-nodes. 

So, to solve such problems there is a technique which is called as **Attribute selection measure or ASM.** 

By this measurement, we can easily select the best attribute for the nodes of the tree. 

There are two popular techniques for ASM, which are:

*   **Information Gain**

*   **Gini Index**
---
### 1\. Information Gain:

*   Information gain is the measurement of changes in entropy after the segmentation of a dataset based on an attribute.

*   It calculates how much information a feature provides us about a class.

*   According to the value of information gain, we split the node and build the decision tree.

*   A decision tree algorithm always tries to maximize the value of information gain, and a node/attribute having the highest information gain is split first. It can be calculated using the below formula:

1.  Information Gain= Entropy(S)- \[(Weighted Avg) \*Entropy(each feature)  

**Entropy:** Entropy is a metric to measure the impurity in a given attribute. It specifies randomness in data. Entropy can be calculated as:

```
Entropy(s)= -P(yes)log2 P(yes) - P(no) log2 P(no)
```

**Where,**

*   **S= Total number of samples**
*   **P(yes)= probability of yes**
*   **P(no)= probability of no**
---
### 2\. Gini Index:

*   Gini index is a measure of impurity or purity used while creating a decision tree in the CART(Classification and Regression Tree) algorithm.

*   An attribute with the low Gini index should be preferred as compared to the high Gini index.

*   It only creates binary splits, and the CART algorithm uses the Gini index to create binary splits.

*   Gini index can be calculated using the below formula:
```
Gini Index= 1- sum(j*squr(Pj))

```


$Gini Index= 1-\sum_j{P_j}^2)$

One minus sum of squares of probabilities
---
# Pruning: Getting an Optimal Decision tree
-----------------------------------------

_Pruning is a process of deleting the unnecessary nodes from a tree in order to get the optimal decision tree._

A too-large tree increases the risk of overfitting, and a small tree may not capture all the important features of the dataset. 

Therefore, a technique that decreases the size of the learning tree without reducing accuracy is known as Pruning. 

There are mainly two types of tree **pruning** technology used:

*   **Cost Complexity Pruning**
*   **Reduced Error Pruning.**
---
Advantages of the Decision Tree
-------------------------------

*   It is simple to understand as it follows the same process which a human follow while making any decision in real-life.

*   It can be very useful for solving decision-related problems.

*   It helps to think about all the possible outcomes for a problem.

*   There is less requirement of data cleaning compared to other algorithms.
---
Disadvantages of the Decision Tree
----------------------------------

*   The decision tree contains lots of layers, which makes it complex.

*   It may have an overfitting issue, which can be resolved using the **Random Forest algorithm.**

*   For more class labels, the computational complexity of the decision tree may increase.
---
Python Implementation of Decision Tree
--------------------------------------

Steps are given below:

*   **Data Pre-processing step**

*   **Fitting a Decision-Tree algorithm to the Training set**

*   **Predicting the test result**

*   **Test accuracy of the result(Creation of Confusion matrix)**

*   **Visualizing the test set result.**
---
### 1\. Data Pre-Processing Step:

Below is the code for the pre-processing step: ( `\_ means _ ` in the code)
```
1.  # importing libraries  
2.  import numpy as nm  
3.  import matplotlib.pyplot as mtp  
4.  import pandas as pd  

6.  #importing datasets  
7.  data\_set= pd.read\_csv('user\_data.csv')  

9.  #Extracting Independent and dependent Variable  
10.  x= data\_set.iloc\[:, \[2,3\]\].values  
11.  y= data\_set.iloc\[:, 4\].values  

13.  # Splitting the dataset into training and test set.  
14.  from sklearn.model\_selection import train\_test\_split  
15.  x\_train, x\_test, y\_train, y\_test= train\_test\_split(x, y, test\_size= 0.25, random\_state=0)  

17.  #feature Scaling  
18.  from sklearn.preprocessing import StandardScaler    
19.  st\_x= StandardScaler()  
20.  x\_train= st\_x.fit\_transform(x\_train)    
21.  x\_test= st\_x.transform(x\_test)    
```
---
The data set:

![Decision Tree Classification Algorithm](https://static.javatpoint.com/tutorial/machine-learning/images/decision-tree-classification-algorithm3.png)
---
### 2\. Fitting a Decision-Tree algorithm to the Training set

Now we will fit the model to the training set. For this, we will import the **DecisionTreeClassifier** class from **sklearn.tree** library. Below is the code for it:
```python
1.  #Fitting Decision Tree classifier to the training set  
2.  From sklearn.tree import DecisionTreeClassifier  
3.  classifier= DecisionTreeClassifier(criterion='entropy', random\_state=0)  
4.  classifier.fit(x\_train, y\_train)  
```
In the above code, we have created a classifier object, in which we have passed two main parameters;

*   **"criterion='entropy':** Criterion is used to measure the quality of split, which is calculated by information gain given by entropy.
*   **random\_state=0":** For generating the random states.


```python
Out[8]: 
DecisionTreeClassifier(class_weight=None, criterion='entropy', max_depth=None,
max_features=None, max_leaf_nodes=None,
min_impurity_decrease=0.0, min_impurity_split=None,
min_samples_leaf=1, min_samples_split=2,
min_weight_fraction_leaf=0.0, presort=False,
                       random_state=0, splitter='best')

```
---
### 3\. Predicting the test result

Now we will predict the test set result. We will create a new prediction vector **y\_pred.** Below is the code for it:
```python
1.  #Predicting the test set result  
2.  y\_pred= classifier.predict(x\_test)  
```
---
### 4\. Test accuracy of the result (Creation of Confusion matrix)

In the above output, we have seen that there were some incorrect predictions, so if we want to know the number of correct and incorrect predictions, we need to use the confusion matrix. Below is the code for it:
```python
1.  #Creating the Confusion matrix  
2.  from sklearn.metrics import confusion\_matrix  
3.  cm= confusion\_matrix(y\_test, y\_pred)  
```

![Decision Tree Classification Algorithm](https://static.javatpoint.com/tutorial/machine-learning/images/decision-tree-classification-algorithm5.png)


---
### 5\. Visualizing the training set result:
?
---


---
# Reference

1. [Machine Learning in Action  by Peter Harrington]()

---

