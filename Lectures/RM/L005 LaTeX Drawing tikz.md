LaTeX TikZ is a powerful and widely used package for creating graphics and diagrams directly within LaTeX documents. TikZ stands for "TikZ ist kein Zeichenprogramm," which is German for "TikZ is not a drawing program." It allows you to create a wide variety of complex and customizable graphics, including flowcharts, diagrams, graphs, plots, and more, all using a simple and intuitive syntax. Here are some basic examples to get you started with TikZ:
### Drawing a Line:
   ```latex
   \documentclass{article}
   \usepackage{tikz}
   \begin{document}
   \begin{tikzpicture}
       \draw (0,0) -- (3,2);
   \end{tikzpicture}
   \end{document}
   ```
   This code creates a basic line from the point (0,0) to (3,2) within a `tikzpicture` environment.

---
### Creating a Basic Shape:
   ```latex
   \documentclass{article}
   \usepackage{tikz}
   \begin{document}
   \begin{tikzpicture}
       \draw (0,0) rectangle (3,2);
   \end{tikzpicture}
   \end{document}
   ```
   This code creates a simple rectangle from (0,0) to (3,2).

---

### Drawing a Circle:
   ```latex
   \documentclass{article}
   \usepackage{tikz}
   \begin{document}
   \begin{tikzpicture}
       \draw (2,2) circle (1);
   \end{tikzpicture}
   \end{document}
   ```
   This code draws a circle with a center at (2,2) and a radius of 1.

---

### Adding Labels:
   ```latex
   \documentclass{article}
   \usepackage{tikz}
   \begin{document}
   \begin{tikzpicture}
       \draw (0,0) -- (3,2);
       \node at (1.5, 0.3) {A};
       \node at (1.5, 2.3) {B};
   \end{tikzpicture}
   \end{document}
   ```
   This example not only draws a line but also adds labels "A" and "B" at specified coordinates.


---

### Drawing a Simple Flowchart:
   ```latex
   \documentclass{article}
   \usepackage{tikz}
   \usetikzlibrary{shapes.geometric}
   \begin{document}
   \begin{tikzpicture}
       \node (start) [draw, terminal] {Start};
       \node (process) [draw, process, below of=start] {Process};
       \node (end) [draw, terminal, below of=process] {End};
       \draw[->] (start) -- (process);
       \draw[->] (process) -- (end);
   \end{tikzpicture}
   \end{document}
   ```
   This code creates a simple flowchart with labeled nodes and arrows between them.
To use TikZ, you need to include the `\usepackage{tikz}` command in your LaTeX document's preamble. Additionally, you can use various TikZ libraries to enhance its capabilities for specific types of diagrams.

---
```tex
\documentclass{article}
\usepackage{siunitx}
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[yscale=0.5]
    \draw [line width=0.25mm, red ] (0,-1) -- (2,-1) node [right] {\SI{0.25}{\milli\meter}};;
    \draw [line width=0.1mm,  blue] (0,-2) -- (2,-2) node [right] {\SI{0.10}{\milli\meter}};;
    \draw [line width=0.05mm, red ] (0,-3) -- (2,-3) node [right] {\SI{0.05}{\milli\meter}};
    \draw [line width=0.01mm, blue] (0,-4) -- (2,-4) node [right] {\SI{0.01}{\milli\meter}};
    \draw [line width=0mm,   black] (0,-5) -- (2,-5) node [right] {\SI{0.0}{\milli\meter}};
\end{tikzpicture}

\end{document}
```


---

TikZ offers a wide range of options for customizing the appearance of your diagrams, and it's highly flexible and extensible, making it a versatile tool for creating high-quality graphics within LaTeX documents. You can refer to the TikZ documentation for more advanced features and examples: [TikZ and PGF Manual](https://ctan.org/pkg/pgf).

[Download tiks & pgf manual](https://mirror.niser.ac.in/ctan/graphics/pgf/base/doc/pgfmanual.pdf) https://mirror.niser.ac.in/ctan/graphics/pgf/base/doc/pgfmanual.pdf
