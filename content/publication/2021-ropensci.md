---
abstract: "**Context:** Technical Debt (TD) is a metaphor used to describe code that is not quite right. Although TD studies have gained momentum, TD has yet to be studied as thoroughly in non-object-oriented or scientific software such as R. R is a multi-paradigm programming language, whose popularity in data science and statistical applications has amplified in recent years. Due to R's inherent ability to expand through user-contributed packages, several community-led organizations were created to organize and peer-review packages in a concerted effort to increase their quality. Nonetheless, it is well-known that most R users do not have a technical programming background, being from multiple disciplines. 

**Objective:** The goal of this study is to investigate TD in the documentation of the peer-review of R packages led by rOpenSci. 

**Method:** We collected over 5,000 comments from 157 packages that had been reviewed and approved to be published at rOpenSci. We manually analyzed a sample dataset of these comments posted by package authors, editors of rOpenSci, and reviewers during the review process to investigate the types of TD present in these reviews. 

**Results:** The findings of our study include (i) a taxonomy of TD  derived from our analysis of the peer-reviews (ii) documentation debt as being the most prevalent type of debt (iii) different user roles are concerned with different types of TD. For instance, reviewers tend to report some types of TD more than other roles, and the types of TD they report are different from those reported by the authors of a package. 

**Conclusion:** TD analysis in scientific software or peer-review is almost non-existent. Our study is a pioneer, but within the context of R packages. However, our findings can serve as a starting point for replication studies, given our public datasets, to perform similar analyses in other scientific software or to investigate the rationale behind our findings."



authors: ["Zadia Codabux", "Melina Vidoni", "Fatemeh Fard"]
date: "2021-02-23T00:00:00Z"
math: true
publication_types: ["1"]
publication: "In *Mining Software Repositories 2021*"
publication_short: "MSR 2021 [Preprint]"
featured: true
title: "Technical Debt in the Peer-Review Documentation of R Packages: a rOpenSci Case Study [Preprint]"
url_code: ""
url_dataset: "http://doi.org/10.5281/zenodo.4589573"
url_pdf: "publication/2021-msr-ropensci.pdf"
url_project: ""
url_slides: ""
url_video: ""

 
image:
  caption: ""
  focal_point: "Left"
  preview_only: true

url_custom:
  name: "DOI"
  url: ""
  
  
# Projects (optional).
#projects: ["2020-rse"]
  


# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- 2020-rse

---




<br />

## Contributions


The main contributions of this study are as follows:

- This is the first study that investigates TD in the R package peer-reviewing documentation. We use a new source of data to explore TD, compared to most studies from the literature which analyze source code.  

- We propose a taxonomy of TD, extended to incorporate specific concepts related to R packages.

- A dataset of manually labelled TD instances in R  peer-reviews documentation is made available publicly. Available [here](http://doi.org/10.5281/zenodo.4589573).



<br />


## Ethical Considerations

The methodology used in this manuscript, and described in the sections below, was approved by RMIT University Human Ethics Research Committee (HREC), with project code 2020-22643-11528.


<br />


## Acknowledgements

We kindly thank Scott Chamberlain, Noam Ross and Karthik Ram, Associate Editors of rOpenSci, who enabled us to conduct this study. We also gratefully acknowledge the anonymous reviewers, whose insight and critique helped improve the quality of this work. This work is partially supported by Natural Sciences and Engineering
Research Council of Canada RGPIN-2019-05175.
