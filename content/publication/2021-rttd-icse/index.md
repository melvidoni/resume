---
abstract: "Testing Technical Debt (TTD) occurs due to shortcuts (non-optimal decisions) taken about testing; it is the test dimension of technical debt. R is a package-based programming ecosystem that provides an easy way to install third-party code, datasets, tests, documentation and examples. This structure makes it especially vulnerable to TTD because errors present in a package can transitively affect all packages and scripts that depend on it. Thus, TTD can effectively become a threat to the validity of all analysis written in R that rely on potentially faulty code. This two-part study provides the first analysis in this area. First, 177 systematically-selected, open-source R packages were mined and analysed to address quality of testing, testing goals, and identify potential TTD sources. Second, a survey addressed how R package developers perceive testing and face its challenges (response rate of 19.4%). Results show that testing in R packages is of low quality; the most common smells are inadequate and obscure unit testing, improper asserts, inexperienced testers and improper test design. Furthermore, skilled R developers still face challenges such as time constraints, emphasis on development rather than testing, poor tool documentation and a steep learning curve."



authors: ["Melina Vidoni"]
date: "2021-05-07T00:00:00Z"
math: true
publication_types: ["1"]
publication: "M. Vidoni, 'Evaluating Unit Testing Practices in R Packages' 2021 IEEE/ACM 43rd International Conference on Software Engineering (ICSE), 2021, pp. 1523-1534, doi: 10.1109/ICSE43902.2021.00136."
publication_short: "ICSE 2021"
featured: true
title: "Evaluating Unit Testing Practices in R Packages"
url_code: ""
url_dataset: "http://doi.org/10.5281/zenodo.4558438"
url_pdf: "publication/2021-rttd-icse.pdf"
url_project: ""
url_video: ""
doi: "10.1109/ICSE43902.2021.00136"

 
image:
  caption: ""
  focal_point: "Left"
  preview_only: true

  
  
# Projects (optional).
projects:
- 2020-rse
  

---




<br />

## Contributions


The main contributions of this study are as follows:

- This is the first study conducted to understand unit testing culture in the R packages development community. It analyses the extent to which R packages are tested by mining open, public R packages repositories hosted in GitHub, by performing a number of analysis.

- About testing practices, findings indicate that few alternative paths are tested, and test suits seem to be irrelevant since bugs are often found when tests are passing. Developers lack in-depth training, expected due to the absence of technical programming background (German et al., 2013). Moreover, there is a striking amount of manual testing, potentially due to the statistical nature of R packages, and the lack of statistically centred unit testing. 

- Regarding existing testing tools, results show that R's unit testing tools may be incomplete, lacking assertion functionalities and automatic data initialisation (e.g. Junit's `@BeforeAll`). 

- It surveys many developers to understand their perspective in testing tools and challenges faced by them when testing their R packages.


<br />


## Ethical Considerations

The methodology used in this manuscript, and described in the sections below, was approved by RMIT University Human Ethics Research Committee (HREC), with project code 2020-22968.


<br />


## Acknowledgements

The author thanks Associate Professor John Ormerod, from the School of Mathematics and Statistics at University of Sydney (Australia),
for his assistance when calculating the sample sizes for the manual analysis of the data extracted. The author also gratefully acknowledges the anonymous reviewers for their careful reading of the manuscript and their insightful comments and suggestions, as well as the R developers who participated in the survey.


<br />


## Citation:

```
@INPROCEEDINGS{Vidoni2021,
  author={Vidoni, Melina},
  booktitle={2021 IEEE/ACM 43rd International Conference on Software Engineering (ICSE)}, 
  title={Evaluating Unit Testing Practices in R Packages}, 
  year={2021},
  volume={},
  number={},
  pages={1523-1534},
  doi={10.1109/ICSE43902.2021.00136}}
```
