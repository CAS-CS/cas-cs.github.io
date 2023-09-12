# How do we learn ?


---
# How do we learn ?

By interacting with our environment

> ie. when a infant plays and waves its arms, it has no explicit teacher, but it have a direct sensorymotor connection to its environment. excercising this connection produces a wealth to information

- Through out our lives we use such interactions to aquire  knowledge about our self and our environment 

#### Learning from interactions is a foundational idea underlying nearly all theories of learing and intelligence

---

# What we aim to accomplish in this subject

- Explore a computational approcah to learing from interactions

- Explore learning situations and evaluate the effectivness of various learing methods

- Explore the design of machines that are effective in solving learing problems of scientific or economic interest

> We are going to explore goal-directed learing from interactions called reinforcement learning, it is different from other ML algirithms (both supervised and unsupervised)
--- 

# What is Reinforcement Learining

- Reinforcement Learining (RL) is learining what to do
- How to map situations to actions 
- So as to mazimize a numerical reward signal

The learner is not told which actions to take, but instead must discover which cations yields the most rewards by trying them. 

> In the most interesting and challenging cases, actions my affect not only the immediate rewards but alos the next situation and, through that, all subsequent rewards. 

The two distinguishable feature of RL are: 
1. Trail-and-error
2. Delayed reward 

---
# How is RL different from othere ML Algo.

Reinforcement learning (RL), supervised learning, and unsupervised learning are three distinct paradigms within machine learning, and they differ in terms of their objectives, data types, and training methodologies:

1. **Supervised Learning**:
   - **Objective**: In supervised learning, the algorithm learns to map input data to output labels based on a labeled dataset. The goal is to make predictions or classifications.
   - **Data Type**: It requires a labeled dataset, where each input example is paired with the correct output label.
   - **Training Process**: The model is trained to minimize the discrepancy between its predictions and the true labels, typically using a loss function. The learning is guided by a teacher (the labeled data).
   - **Examples**: Image classification, speech recognition, text sentiment analysis.

2. **Unsupervised Learning**:
   - **Objective**: Unsupervised learning aims to find hidden patterns or structures in unlabeled data. It doesn't have access to ground truth labels.
   - **Data Type**: It works with unlabeled data, seeking to discover relationships or groupings within the data.
   - **Training Process**: The model explores the data and tries to identify underlying structures, such as clusters, dimensions, or representations, without external supervision.
   - **Examples**: Clustering (e.g., K-means), dimensionality reduction (e.g., PCA), generative modeling (e.g., GANs).

3. **Reinforcement Learning**:
   - **Objective**: In RL, an agent interacts with an environment to maximize a cumulative reward signal over time. The agent learns to take actions that lead to favorable outcomes.
   - **Data Type**: It involves an agent, an environment, and feedback in the form of rewards (or penalties) based on the actions taken by the agent.
   - **Training Process**: The agent learns through trial and error, exploring different actions and learning from the consequences. There is no labeled dataset; instead, the agent receives delayed feedback.
   - **Examples**: Game playing (e.g., AlphaGo), robotics control, autonomous driving, recommendation systems.

Key Differences:
- **Objective**: Supervised learning aims to make predictions or classifications with labeled data, while unsupervised learning discovers hidden patterns in unlabeled data. RL focuses on learning how to make a sequence of decisions to maximize a reward signal.
  
- **Data Type**: Supervised learning uses labeled data, unsupervised learning uses unlabeled data, and RL uses an agent-environment interaction with rewards.

- **Training Process**: In supervised learning, the model is guided by labeled data to minimize prediction errors. In unsupervised learning, the model explores data to discover patterns without supervision. In RL, the agent learns through trial and error by interacting with the environment and receiving rewards.

- **Feedback**: Supervised learning has immediate feedback in the form of labels, unsupervised learning lacks explicit feedback, and RL has delayed feedback in the form of rewards, which can be sparse and only received after a sequence of actions.

> In summary, RL is distinct from supervised and unsupervised learning due to its focus on learning through interaction with an environment to optimize a long-term objective, rather than relying on labeled or unlabeled data. It is particularly well-suited for tasks involving sequential decision-making and optimization problems.


---
# Where to use RL

Reinforcement learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment to achieve a specific goal. RL has a wide range of applications in various fields. Here are some common areas where reinforcement learning is used:

1. **Game Playing**: RL has been used to create AI agents that excel in playing video games. This includes classic games like Chess and Go, as well as modern video games like Dota 2 and StarCraft II.

2. **Robotics**: RL is used in robotics to train robots to perform tasks like grasping objects, navigating through environments, and even tasks that require dexterity like folding laundry.

3. **Autonomous Vehicles**: RL is used to develop self-driving cars and drones. Agents learn to navigate complex traffic scenarios and make decisions to ensure safety and efficiency.

4. **Finance**: RL can be used in financial trading to develop algorithms that make buy/sell decisions based on market data. It can also be used for portfolio optimization.

5. **Healthcare**: RL can be used for optimizing treatment plans in healthcare. For example, it can help determine the best dosages of medications for individual patients or design personalized treatment plans.

6. **Recommendation Systems**: RL can be used to build recommendation systems that provide personalized content or product recommendations to users. Companies like Netflix and Amazon use RL for this purpose.

7. **Natural Language Processing (NLP)**: In NLP, RL can be used for dialogue systems, where agents learn to have conversations with users and provide relevant responses.

8. **Industrial Control**: RL can optimize industrial processes, such as manufacturing and supply chain management, to improve efficiency and reduce costs.

9. **Energy Management**: RL can optimize energy consumption in buildings, data centers, and smart grids to reduce energy costs and environmental impact.

10. **Healthcare Robotics**: RL can be used in the development of healthcare robots that assist with patient care, rehabilitation, and surgery.

11. **Education**: RL can be used in educational technology to provide personalized learning experiences for students, adapting content and difficulty levels based on their performance.

12. **Simulated Environments**: RL is often used in simulated environments to train agents before deploying them in the real world. This is especially important in applications like robotics and autonomous vehicles.

13. **Resource Management**: RL can optimize resource allocation in areas like agriculture (e.g., precision farming), transportation (e.g., route optimization), and logistics.

14. **Game AI**: Beyond video games, RL is used to develop AI opponents and NPCs (non-player characters) in games to make them more challenging and dynamic.

15. **Content Generation**: RL can be used to generate content, such as art, music, and text, by training agents to produce creative output.

