](mailto:prateekrajgautam@gmail.com)



---
# Common documentclass

`\documentclass{elsarticle},
\documentclass{IEEEtran},
\documentclass{report},
\documentclass{book},
`
### Optional Arguments

`\documentclass[optional,arguments]{article}`

`\documentclass[onecolumn,twocolumn,
a4paper,letterpaper,
10pt,11pt,12pt,
oneside,twoside]{article}`

---


# Single and Double column

### \onecolumn
change layout to single column

### \twocolumn
change layout to double column

* ***causes pagebreak and unused space***

---

# multicol package

```LaTeX
\usepackage{multicol}% In PREAMBLE


\begin{multicol}{<NumberOfColumns>}

\end{multicols}



\begin{multicols}{2}

\end{multicols}


  
```
* *Do not cause pagebreaks* different height columns

---

# adjmulticols
`\usepackage{adjmulticols}`

```LaTeX
\begin{adjmulticols}{<number>}{<h>inner margin>}{<outer margini>}
text
\end{adjmulticols}
%For example,
\begin{adjmulticols}{2}{12pt}{-1in}
Text Text Text
\end{adjmulticols}
```
* *Do not cause pagebreaks* equal height columns







---

# setspace 

`\usepackage{setspace}`

change line spacing

```latex
\singlespacing
\doublespacing
\onehalfspacing
```

---
# Equation 

underscore for subscript and carrot for superscript


```latex 
\begin{equation} 
A_b =c^2 
\end{equation}
```  


group with { }

```latex
\begin{equation}
A^{grouped}_{long subscript}
\end{equation}
\
```

---
# Equation 
## Large bracket with \left( and \right)


```latex 
\begin{equation} 
\left[
\right]
\end{equation}

\begin{equation} 
\left\{
\right\}
\end{equation}

\begin{equation} 
\left\{
\right.
\end{equation}
```  
\lceil \rceil, \lfloor \rfloor



---
# Equation 
## Large bracket with \left( and \right)


```latex 


\begin{equation}
\left\lfloor\left[
\frac{a}{\left(\frac{R}{X}^{code_b^x} \mathbf{R} \right)}
\right]\rfloor^{power}
\label{eq:2}
\end{equation}
```
---
# Equation 
## label and ref equation
```latex
\begin{equation}
\overrightarrow{F}=m|a|\hat{a}
\label{eq:force}
\end{equation}
\blindtext equation \ref{eq:force}

```

# demo code from class

```latex
\documentclass[letterpaper,12pt,onecolumn]{article}

%10pt, 12pt,11pt
%PREAMBLE

%\usepackage{fullpage}%geometry


\usepackage{blindtext,setspace}
\usepackage{multicol}



\begin{document}

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


\end{document}

```




---
# Reference


![https://t.me/+CgEoOwoKmpgwMzBl](./telegramGroup.png)


[https://t.me/+CgEoOwoKmpgwMzBl](https://t.me/+CgEoOwoKmpgwMzBl)

