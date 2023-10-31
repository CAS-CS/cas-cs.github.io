
# Multi line equation 
## eqnarray and align environment

Example code

```LaTeX
\begin{equation}
\left\lfloor
\frac{a}{
\left(\frac{R}{X}^{code_b^x} \mathbf{R} 
\right)}
\right]\rfloor^{power}
\label{eq:2}
\end{equation}

```

`\\` `\newline` do not work in equation environment so we use eqnarray or align (align require amsmath package)
---
# eqnarray

```LaTeX
\begin{eqnarray}
A&=&\frac{B}{c}      \nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:11}\\
A&=&\frac{B}{c}\nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:12}
\end{eqnarray}

```
requires double alignmant character `&`

like `&=&`

`leftpart &=& right part`



---
# align

```LaTeX
\usepackage{amsmath}

\begin{eqnarray}
A&=&\frac{B}{c}      \\
&=&\frac{B_{New}}{c}\label{eqn:11}\\
A&=&\frac{B}{c}\\
&=&\frac{B_{New}}{c}\label{eqn:12}
\end{eqnarray}

```
requires single alignmant character `&`

like `=&`

`leftpart =& right part`



---

# remove equation number

\nonumber at the end of equation before \ \
```LaTeX
% 

\begin{eqnarray}
A&=&\frac{B}{c}      \nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:11}\\
A&=&\frac{B}{c}\nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:12}
\end{eqnarray}

```


---
# Font size and highlighting text

```LaTeX
{\tiny{tiny}}


\small{Small}
\footnotesize{fn}
\large{large}
\Large{Large}
\LARGE{LARGE}
\huge{huge}
\textbf{boldface}
\textif{italic}
\emph{emphasize}


```

these commands are runnaway commands they change format all the text comming after that. so to restrict its affect enclose them with curly braces like `{\tiny text to chnage size} normal text not affected by \tiny` 
---
# Font size and highlighting text
## soul package
this is often helpfull while creating response of reviewers comments

```LaTeX
\usepackge{soul}

\so{text to preview \emph{emphasized} normal again}\\
\ul{text to preview \emph{emphasized} normal again} \\
\st{text to preview \emph{emphasized} normal again}\\
\caps{text to preview \emph{emphasized} normal again}\\
\hl{text to preview \emph{emphasized} normal again}\\

```
---
# Font size and highlighting text
## change color or text

```LaTeX
\usepackge{xcolor}

\color{red}{\blindtext}
\color{red!40!black!10!blue}{\blindtext}

```

`!<number>!` numeric value as percentage to create mix of colors. 
---
# Organizing tex code in multiple small files 
## \input{} to include part of code written in different tex file

equation.tex
```LaTeX 
\[ E=mc2\]

```
main.tex
```LaTeX 
\documentclass{article}
\begin{document}
\input{equation.tex}
\end{document}

```

if we compile main.tex it will include code from equation.tex.

file 

`\input{pathToFile}` like `\input{./dir/file.tex}` 
---

# figure and graphics

```LaTeX
\usepackge{graphicx}

\includegraphics{pathToImageFile}%png,pdf,jpg,eps
\includegraphics{./imageName.jpg}%png,pdf,jpg,eps

% to change size

\includegraphics[scale=.5]{./imageName.jpg}%relative to actual image
\includegraphics[height=1cm]{./imageName.jpg}% units can be pt,em ex,cm,in,
\includegraphics[width=\textwidth]{./imageName.jpg}% units can be pt,em ex,cm,in,
\includegraphics[width=\linewidth]{./imageName.jpg}% units can be pt,em ex,cm,in,
\includegraphics[width=.5\linewidth]{./imageName.jpg}% units can be pt,em ex,cm,in,

```

width can be defines as fraction of column width with `\linewidth` or page width with `\textwidth`


---


# Floating environments: figure and table

```LaTeX

\begin{figure}[htbp!]
%\begin{center}
\centering
%\includegraphics[width=.8\linewidth]{2.jpg}
\caption{Figure name\label{fig:1}}
%\end{center}
\end{figure}

```

`optional argument after \begin{figure}[]` can be h-here,t-top,b-bottom,p-page where other floats are, ! to relax latex rules.
---


# Floating environments: figure and table

```LaTeX

\begin{table}[htbp!]
%\begin{center}
\centering
%code for table

\caption{Figure name\label{fig:1}}
%\end{center}
\end{table}


```


---
# demo code from class

main.tex
```latex
\documentclass[letterpaper,12pt,onecolumn]{article}

%10pt, 12pt,11pt
%PREAMBLE

%\usepackage{fullpage}%geometry


\usepackage{blindtext,setspace,soul}
\usepackage{multicol,xcolor,graphicx}

\usepackage{amsmath}

\begin{document}
\section{Table}

\begin{table}[t]
%\begin{center}
\centering
\caption{table name\label{tab:1}}
\end{table}
\section{figures}

\blindtext
%
\begin{figure}[ht]
%\begin{center}
\centering
%\includegraphics[width=.8\linewidth]{2.jpg}
\caption{Figure name\label{fig:1}}
%\end{center}
\end{figure}
\blindtext
\begin{figure}
%\includegraphics[width=.8\linewidth]{2.jpg}
\caption{Figure name\label{fig:1}}
\end{figure}
\blindtext
\blindtext
\begin{figure}
\begin{center}
%\includegraphics[width=.8\linewidth]{2.jpg}
\caption{Figure name\label{fig:1}}
\end{center}
\end{figure}
\blindtext
%\input{oldDemo}


\end{document}

```

---
# demo code from class
oldDemo.tex
```latex
{\tiny{tiny}}

{
\small{Small}
\footnotesize{fn}
\large{large}
\Large{Large}
\LARGE{LARGE}}
{\huge{huge}
}
\section{equations}
\color{red!40!black!10!blue}{\blindtext}
\so{adsfasdfavs asdfas\emph{emphasdfasdf} a sfvasdf}\\
\ul{adsfasdfavs asdfas\emph{emphasdfasdf} a sfvasdf}\\
\st{adsfasdfavs asdfas\emph{emphasdfasdf} a sfvasdf}\\
\caps{adsfasdfavs asdfas\emph{emphasdfasdf} a sfvasdf}\\
\hl{adsfasdfavs asdfas\emph{emphasdfasdf} a sfvasdf}\\
%i am defining eqn \eqref{eq:1}

%\begin{equation}
\begin{eqnarray}
A&=&\frac{B}{c}      \nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:11}\\
A&=&\frac{B}{c}\nonumber\\
&=&\frac{B_{New}}{c}\label{eqn:12}
\end{eqnarray}

\begin{equation}
A+v\int_{0}^{\Omega} \sum_{i=0}^{\Omega}=\frac{B}{c}
\label{eq:2}
\end{equation}

\[
\]

\begin{equation}
\left\lfloor
\frac{a}{
\left(\frac{R}{X}^{code_b^x} \mathbf{R} 
\right)}
\right]\rfloor^{power}
\label{eq:2}
\end{equation}


\begin{equation}
\left\{\frac{a}{eqn}\right.
\label{eq:2}
\end{equation}


\begin{equation}
\left.\frac{a}{eqn}\right]
\label{eq:2}
\end{equation}


\doublespacing
\textbf{\blindtext}
\textit{\blindtext}
$E=mc^2$ $\eta$ $\int$ ${\sqrt\delta\Delta}$
$$\frac{num}{den}$$
\singlespacing
\onehalfspacing
\begin{equation}
F=ma
\label{eq:force}
\end{equation}



\begin{equation}
\overrightarrow{F}=m\vec{a}
\label{eq:force}
\end{equation}


\begin{equation}
F=ma\hat{a}
\label{eq:force}
\end{equation}
\blindtext equation \ref{eq:force}
%MAIN SECTION or DOCUMENT CONTENT

%\chapter{some new chapter}
%\part{A}
%\chapter{main chapter}

\label{fig:name}
{tab:name}






\begin{multicols}{3}

%first section
\section{Introduction}\label{sec:intro}
hello latex
hi \LaTeX
this is some random        
\subsection{subsection}     
\blindtext 
\subsubsection{subsection}    \blindtext  
\paragraph{paragraph heading} \blindtext
\subsection{subsection}        text 
\label{introTwo}
this is some random textadflksjdf;laksjdf
this is some random textasdfasdgasdgsdagasdgag asldgoijasdg
\end{multicols}











% second part

%
% \part{B}
%\chapter{ 2 main chapter}

\section{Introduction}
hello latex

\ref{intro} Refering here\\

\ref{introTwo} refer intro two\\
hi \LaTeX
this is some random        
\subsection{subsection}     
\blindtext 
\subsubsection{subsection}    \blindtext  
\paragraph{paragraph heading} \blindtext
\subsection{subsection}        text 

this is some random textadflksjdf;laksjdf
this is some random textasdfasdgasdgsdagasdgag asldgoijasdg aldsfgokapdofgpadofitextasdfasdg
asdgsdagasdgag asldgoijasdg aldsfgokapdofgpadofitextasdfasdg
asdgsdagasdgag asldgoijasdg aldsfgokapdofgpadofi
\par PARAGRAPH his is some random text
this is some random text
this is some random text

\section{METHOD}
this is some random text
this is some random text
this is some random text

\section{RESULTS}
\par PARAGRAPH his is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
\par\noindent NOINDENT PARAGRAPH his is some random text
this is some random text
this is some random text.\\NEWLINE this is some random text
this is some random text
this is some random text
\par PARAGRAPH his is \newline NEWLINE some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random textt
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random textt
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random textt
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random textt
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random text
this is some random textt
```

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

