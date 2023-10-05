
# Markov Decision Process (MDP)
#### or Finite Markov Decision Process
This problem involves evaluative feedback, as in bandits, but also an associative aspect—choosing different actions in different situations. 

MDPs are a classical formalization of sequential decision making, where actions influence not just immediate rewards, but also subsequent situations, or states, and through those future rewards.

Thus MDPs involve delayed reward and the need to tradeoff immediate and delayed reward.

> In bandit problems we estimated the value $q_*(a)$ of each action $a$, in MDPs we estimate the value $q_*(s, a)$ of each action $a$ in each state $s$, or we estimate the value $v_*(s)$ of each state given optimal action selections. 

##### These state-dependent quantities are essential to accurately assigning credit for long-term consequences to individual action selections.

---
# Agent–Environment Interface

MDPs are meant to be a straightforward framing of the problem of learning from interaction to achieve a goal. 

* The learner and decision maker is called the _agent_. 
- The thing it interacts with, comprising everything outside the agent, is called the *environment*. 
- These interact continually, the agent selecting *actions* and the environment responding to these actions and presenting new *situations* to the agent.

> The environment also gives rise to rewards, special numerical values that the agent seeks to maximize over time through its choice of actions.

---
### The agent–environment interaction in a Markov decision process
![](./L09_agentEnv01.png)

The agent and environment interact at each of a sequence of discrete time steps, $t = 0, 1, 2, 3, \ldots$ At each time step $t$, the agent receives some representation of the environment’s state, $S_t\in\mathbf{S}$, and on that basis selects an action, $A_t \in \mathbb{A}(s)$. 

**Onetime step later, in part as a consequence of its action**, the agent receives a numerical reward, $R_{t+1}\in \mathbf{R} \subset \mathbb{R,}$ and finds itself in a new state, $S_{t+1}$. 

> The MDP and agent together thereby give rise to a sequence or trajectory that begins like this:
`S0 , A0 , R1 , S1 , A1 , R2 , S2 ,A2 , R3 , . . .`

or 

```
S0 , A0 , R1; 
S1 , A1 , R2;
S2 , A2 , R3;
, . . .
```

