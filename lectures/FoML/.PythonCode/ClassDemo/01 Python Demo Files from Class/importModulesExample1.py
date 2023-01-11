# import numpy
import numpy as np

import matplotlib as mpl
import matplotlib.pyplot as plt
# from matplotlib import pyplot as plt

a= np.arange(1,100)
b=a*2


plt.plot(a,b)
plt.show()
plt.savefig('./image.pdf')

# from numpy import *
# a=arange(1,10)
# print(a)