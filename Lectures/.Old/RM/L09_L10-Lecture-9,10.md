](mailto:prateekrajgautam@gmail.com)






---

# tabular env.





```LaTeX

\begin{table}[t]
\begin{tabular}{|lcrp{2cm}|}
&&&&\\
\hline
&&&&\\
\cline{2-4}
&&&&

\end{tabular}
\end{table}

```




---

# Table of contents

## List of figures and list of tables



```LaTeX

.
.
.
\usepackage[colorlinks=true,linkcolor=black]{hyperref}
%MAIN DOCUMENT
\begin{document}

\tableofcontents\pagebreak

\listoffigures
\newpage\listoftables

\pagebreak
.
.
.

```
use `hyperref` package at the end of preamble

---

# Define your own macro (function) with 

## \def\CommandName{CommandDefnition}




```LaTeX
%PREAMBLE
\def\some{This is some random text.}
\def\mytitle{This is my title}



```


use as `\some` in document.

---

# Reference / Bibliography






```LaTeX
\bibliographystyle{plain}% IEEEtran,num,plain
\bibliography{referenceFileName}% .bib file storing BibTeX entries

```

Compile sequence to include reference form bib file
1. PdfLaTeX
1. BibTeX
1. PdfLaTeX
1. PdfLaTeX

> Reference includes papers referred in the text, bibliography includes related papers that may not have been referred in the text (`\nocite{*}`) can be used include all the references store in .bib file


---

# .bib  database for BibTeX

```bib
%refe

@ARTICLE{refkey,  
author={Sun, Qiangjian and Long, Junhua and Li, Xuefei and Dai, Pan and Zhang, Yi and Xuan, Jingjing and Wang, Xia and Chen, Zhitao and Wu, Xiaoxu and Lu, Shulong},
 journal={IEEE Electron Device Letters},
 title={The Diffusion Effect of Copper on the Flexible GaInP/GaAs Solar Cells},  
  year={2022}, 
   volume={43}, 
    number={4}, 
     pages={584-587}, 
      doi={10.1109/LED.2022.3156377}
      }





@article{issac2015adaptive,
  title={An adaptive threshold based image processing technique for improved glaucoma detection and classification},
  author={Issac, Ashish and Sarathi, M Partha and Dutta, Malay Kishore},
  journal={Computer methods and programs in biomedicine},
  volume={122},
  number={2},
  pages={229--244},
  year={2015},
  publisher={Elsevier}
}

@article{RAY20115016,
title = {Carbon sequestration and annual increase of carbon stock in a mangrove forest},
journal = {Atmospheric Environment},
volume = {45},
number = {28},
pages = {5016-5024},
year = {2011},
issn = {1352-2310},
doi = {https://doi.org/10.1016/j.atmosenv.2011.04.074},
url = {https://www.sciencedirect.com/science/article/pii/S1352231011004638},
author = {R. Ray and D. Ganguly and C. Chowdhury and M. Dey and S. Das and M.K. Dutta and S.K. Mandal and N. Majumder and T.K. De and S.K. Mukhopadhyay and T.K. Jana},
keywords = {Carbon stock, Tropical mangrove forest, Above ground biomass, Live below ground biomass, Taxon density, Environmental constrains},
abstract = {Here we show carbon stock is lower in the tropical mangrove forest than in the terrestrial tropical forest and their annual increase exhibits faster turn over than the tropical forest. Variable for above ground biomass are in decreasing order of importance, breast height diameter (d), height (H) and wood density (ρ). The above ground biomass (AGB) and live below ground biomass (LBGB) held different biomass (39.93 ± 14.05 t C ha−1 versus 9.61 ± 3.37 t C ha−1). Carbon accrual to live biomass (4.71–6.54 Mg C ha−1 a−1) is more than offset by losses from litter fall (4.85 Mg C ha−1 a−1), and carbon sequestration differs significantly between live biomass (1.69 Mg C ha−1 a−1) and sediment (0.012 Mg C ha−1 a−1). Growth specific analyses of taxon density suggest that changes in resource availability and environmental constrains could be the cause of the annual increase in carbon stocks in the Sundarbans mangrove forest in contrast to the disturbance – recovery hypotheses.}
}


```


---

# Frontpage design

## use of vspace minipage boxedminipage hfill 



```LaTeX

{\centering


  Progress report\\
  {\huge \textbf{\mytitle\\}}
  \vspace{24pt}%2cm,1in,
  by\\
  
  {\textbf\Large{\myauthor}}\\
  
  
  
  \begin{minipage}{\textwidth}
  
  \begin{minipage}{.45\textwidth}
  %\blindtext
  \centering
  \includegraphics[width=.6\textwidth]{./img/caslogo.png}
  \end{minipage}\hfill
  \begin{minipage}{.45\textwidth}
  %\blindtext
  \centering
  \includegraphics[width=.6\textwidth]{./img/aktulogo.png}
  \end{minipage}
  
  \end{minipage}
  
  
  
  
  \begin{center}
  \today
  \end{center}
  }
  

```


---

# hyperref

## for clickable links in pdf



```LaTeX
%preamble
\usepackage[colorlinks=true,linkcolor=black]{hyperref}

```
`\input{texFileName}` to include tex file in main document

---

# \newcommand

## create your own command



```LaTeX
%preamble
\newcommand{\MP}[2]{\begin{minipage}{#1}#2\end{minipage}}


%use as

\MP{width}{content In minipage}

```


---

# template selector and download

for IEEE templates visit
[template-selector.ieee.org](https://template-selector.ieee.org)

and select journal or conference

ie. for springer format check here
[http://www.mnnit.ac.in/vcas2018/templates/](http://www.mnnit.ac.in/vcas2018/templates/)

* each conference provide their specific LaTeX template

---
# Reference

.image[
![https://t.me/+pyS3-Wq2NjowYTk1](./
telegramGroup.png)
]

[https://t.me/+pyS3-Wq2NjowYTk1](https://t.me/+pyS3-Wq2NjowYTk1)

