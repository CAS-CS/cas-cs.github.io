# Introduction to PGFPlots 

PGFPlots is a package in LaTeX that builds on top of TikZ and is designed for creating high-quality plots and graphs within your LaTeX documents. It provides a user-friendly and customizable interface for creating various types of plots, including line plots, scatter plots, bar charts, and more. Additionally, PGFPlots allows you to load data from CSV files to generate plots. Here, I'll explain PGFPlots with examples, including loading data from a CSV file.

---
When using the `pgfplots` package in LaTeX to create plots with the `\addplot` command, there are numerous options and settings available to customize your plots. Here's a list of some of the common options you can use with `\addplot`:
#### Data Source:

`\addplot table {datafile.csv};`: Use data from an external CSV file.

`\addplot coordinates {(x1, y1) (x2, y2) ...};`: Manually specify data points.

#### Plot Styles:

`\addplot [style] ...;`: Apply various plot styles, such as `solid`, `dashed`, `dotted`, `only marks`, `mark=*, mark=square`, etc.

#### Line and Marker Colors:

`\addplot [color=red] ...;`: Set the color of the line or markers.

#### Line Width:

`\addplot [ultra thick] ...;`: Adjust the line width.

#### Markers:

`\addplot [mark=o] ...;`: Define marker symbols like circles, squares, etc.

#### Legend Entries:

`\addplot [...] coordinates {...} node[pos] {Legend Entry};`: Label the plot in the legend.

#### Error Bars:

`\addplot+ [error bars/.cd, x dir=both, x explicit, y dir=both, y explicit] ...;`: Add error bars to your plot.

#### Filling and Shading:

`\addplot [fill opacity=0.2, fill=blue] ...;`: Fill the area under or between curves.

#### Domain and Samples:

`\addplot [domain=xmin:xmax, samples=n] ...;`: Specify the domain and number of samples for the plot.

#### Restrict Data Range:

`\addplot [restrict x to domain=xmin:xmax, restrict y to domain=ymin:ymax] ...;`: Limit the plotted data to a specific range.

#### Interpolation:

`\addplot [smooth] ...;`: Apply curve smoothing.

#### Scaling:

`\addplot [x=scale, y=scale] ...;`: Scale the x and y coordinates.

#### Stacking:

`\addplot [stack plots=y] ...;`: Stack plots on top of each other.

#### Axis Scaling:

`\addplot [xmode=log, ymode=log] ...;`: Use logarithmic scaling for the axes.

#### Clip Plots:

`\addplot [clip] ...;`: Clip the plot to the axis boundaries.

#### Meta Information:

`\addplot [meta=color] table {datafile.csv};`: Use a separate column in the data file to assign colors or other meta information to points.

#### Custom Functions:

`\addplot {f(x)};`: Plot custom mathematical functions.

#### Coordinate Transformations:

`\addplot [x filter/.code={\pgfmathparse{\pgfmathresult - shiftX}}, y filter/.code={\pgfmathparse{\pgfmathresult - shiftY}}] ...;`: Apply custom transformations to coordinates.

#### External TikZ Code:

`\addplot+ [draw=none, mark=none] {%
    \begin{scope}[on layer=axis foreground]
        \draw (axis cs:x1,y1) -- (axis cs:x2,y2);
    \end{scope}
    };`: Add custom TikZ code to the plot.


---
### Simple Line Plot:
```latex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.17}
\begin{document}
\begin{tikzpicture}
   \begin{axis}
       \addplot[color=blue, domain=0:2*pi, samples=100]{sin(deg(x))};
   \end{axis}
\end{tikzpicture}
\end{document}
```
This code creates a basic line plot of the sine function.

---
### Scatter Plot:
```latex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.17}
\begin{document}
\begin{tikzpicture}
   \begin{axis}
       \addplot[only marks, mark=*, color=red] table {data.csv};
   \end{axis}
\end{tikzpicture}
\end{document}
```
This code creates a scatter plot using data from a CSV file named `data.csv`.

---
### Bar Chart:
```latex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.17}
\begin{document}
\begin{tikzpicture}
   \begin{axis}[
       ybar,
       enlargelimits=0.15,
       legend style={at={(0.5,-0.15)}, anchor=north,legend columns=-1},
   ]
       \addplot table {data.csv};
       \legend{Category A, Category B, Category C}
   \end{axis}
\end{tikzpicture}
\end{document}
```
This code creates a bar chart with data loaded from a CSV file, and it includes a legend.


### Loading Data from CSV:
You can load data from a CSV file using the `\addplot table` command as shown in the examples above. The CSV file should have columns separated by commas (`,`). Here's an example of a simple `data.csv` file:
```csv
X, Y
1, 2
2, 3
3, 5
4, 4
```

In this example, the first row defines the column names, and subsequent rows contain the data points.

---
# Basic Linear plot

```tex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}

\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        xlabel={$x$},
        ylabel={$y$},
        title={Linear Axis},
    ]
        \addplot[blue, domain=0:3] {2*x + 1};
    \end{axis}
\end{tikzpicture}
\end{document}

```
---
# Basic exponential
```tex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\begin{document}
\begin{tikzpicture}
    \begin{semilogyaxis}[
        xlabel={$x$},
        ylabel={$y$},
        title={Exponential Axis},
        grid,
    ]
        \addplot[blue, domain=1:10] {exp(x^2)};
    \end{semilogyaxis}
\end{tikzpicture}
\end{document}
```

---
# Basic polar plot
```tex
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{compat=1.13}
\usepgfplotslibrary{polar}
\begin{document}
\begin{tikzpicture}
    \begin{polaraxis}[
        title={Radial Axis (Polar Plot)},
       legend pos=south east ,
    ]
        \addplot[blue,dashed,line width=1pt, domain=0:360,smooth] {1 + 0.5*sin(x)};
        \addlegendentry{blue sine}
        \addplot[red,thick, domain=0:360,smooth] {1 + 0.5*cos(x)};
        \addlegendentry{red cos}
        \addplot[green,line width=2pt,dotted, domain=0:360,smooth] {1 + 0.5*tan(x)};
        \addlegendentry{green tan}
    \end{polaraxis}
\end{tikzpicture}
\end{document}
```

---
# Important Example for origin users
Suppose your data is stored in data.csv file, you can plot it like this
# Plot from data in csv file


```tex
\begin{filecontents}{data.csv}
Index,Sine,Cosine
0,0,1
1,0.84147,0.54030
2,0.90930,-0.41615
3,0.14112,-0.98999
4,-0.75680,-0.65364
5,-0.95892,0.28366
6,-0.27942,0.96017
7,0.65699,0.75390
8,0.98936,-0.14550
9,0.41212,-0.91113
10,-0.54402,-0.83907
\end{filecontents}
%
%
\documentclass{standalone}
\usepackage{pgfplots}
\pgfplotsset{width=10cm,compat=1.18}
%
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        xlabel={$x$},
        ylabel={$y$},
        title={Multiple Columns in CSV},
    ]
        % Plot the data from the CSV file
        \addplot table [x=Index, y=Sine, col sep=comma] {data.csv};
        \addlegendentry{$\sin x$}
%
        \addplot table [x=Index, y=Cosine, col sep=comma] {data.csv};
        \addlegendentry{$\cos x$}
    \end{axis}
\end{tikzpicture}
\end{document}
```

---

To use PGFPlots, you should include `\usepackage{pgfplots}` in your LaTeX document's preamble. The `\pgfplotsset{compat=1.17}` line is used to specify the compatibility version; you can adjust it according to your needs.

PGFPlots provides extensive customization options for your plots, including axis labels, titles, legends, and much more. You can refer to the [PGFPlots documentation](https://ctan.org/pkg/pgfplots) for detailed information and examples on customizing and enhancing your plots.

[download manual from](https://in.mirrors.cicku.me/ctan/graphics/pgf/contrib/pgfplots/doc/pgfplots.pdf) https://in.mirrors.cicku.me/ctan/graphics/pgf/contrib/pgfplots/doc/pgfplots.pdf
