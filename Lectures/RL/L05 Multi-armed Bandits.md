# Multi-armed Bandits

The most important feature distinguishing reinforcement learning from other types of
learning is that it uses training information that evaluates the actions taken rather than instructs by giving correct actions. This is what creates the need for active exploration


### Evaluative feedback
Purely evaluative feedback indicates how good the action taken was, but not whether it was the best or the worst action possible.

### Instructive feedback
Purely instructive feedback, on the other hand, indicates the correct action to take, independently of the action actually taken. (This kind of feedback is the basis of supervised learning)

##### we study the evaluative aspect of reinforcement learning in a simplified setting, one that does not involve learning to act in more than one situation. Called nonassociative setting.

###### The particular nonassociative, evaluative feedback problem that we explore is a simple version of the k -armed bandit problem.

---

# A k-armed Bandit Problem

You are faced repeatedly with a choice among k different options, or actions.
After each choice you receive a numerical reward chosen from a stationary probability distribution that depends on the action you selected. 

Your objective is to maximize the expected total reward over some time period, for example, over 1000 action selections, or time steps.

> The original form of the k-armed bandit problem, so named by analogy to a slot machine, or “one-armed bandit,” except that it has k levers instead of one. Each action selection is like a play of one of the slot machine’s levers, and the rewards are the payoffs for hitting the jackpot. Through repeated action selections you are to maximize your winnings by concentrating your actions on the best levers.

---

In our k-armed bandit problem, each of the k actions has an expected or mean reward given that that action is selected; let us call this the value of that action. We denote the action selected on time step t as A_t , and the corresponding reward as Rt . 
#### Value and Expected reward
The value then of an arbitrary action a, denoted q_*(a), is the expected reward given that a is selected:

q_*(a) = E[R_t | A_t = a]

If we knew the value of each action, then it would be trivial to solve the k-armed bandit problem: you would always select the action with highest value. 

We assume that you do not know the action values with certainty, although you may have estimates. 

#### Estimates
We denote the estimated value of action a at time step t as Q_t(a). We would like Q_t(a) to be close to q_*(a).


---
# Greedy and e-greedy Action
### Exploiting vs Exploring

If you maintain estimates of the action values, then at any time step there is at least one action whose estimated value is greatest. We call these the greedy actions. When you select one of these actions, we say that you are exploiting your current knowledge of the values of the actions. 

If instead you select one of the nongreedy actions, then we say you are exploring, because this enables you to improve your estimate of the nongreedy action’s
value.

---
# Action-value Methods


