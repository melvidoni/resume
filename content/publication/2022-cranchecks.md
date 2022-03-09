---
abstract: "R is a package-based, multi-paradigm programming language for scientific software. It provides an easy way to install third-party code, datasets, tests, documentation and examples through CRAN (Comprehensive R Archive Network). Prior works indicated developers tend to code workarounds to bypass CRAN's automated checks (performed when submitting a package) instead of fixing the code--doing so reduces packages' quality. It may become a threat to those analyses written in R that rely on miss-checked code. This preliminary study card-sorted source code comments and analysed StackOverflow (SO) conversations discussing CRAN checks to understand developers' attitudes. We determined that about a quarter of SO posts aim to bypass a check with a workaround; the most affected are code-related problems, package dependencies, installation and feasibility. We analyse these checks and outline future steps to improve similar automated analyses."



authors: ["Pranjay Kumar", "Davin Ie", Melina Vidoni"]
date: "2022-03-10T00:00:00Z"
math: true
publication_types: ["1"]
publication: "in IEEE/ACM 30th International Conference on Program Comprehension (ICPC), 2022"
publication_short: ""
featured: true
title: "On the Developers' Attitude Towards CRAN Checks"
url_code: ""
url_dataset: "https://doi.org/10.5281/zenodo.6342280"
url_pdf: "publication/2022-cranchecks.pdf"
url_project: ""
url_slides: ""
url_video: ""

 

image:
  caption: ""
  focal_point: "Left"
  preview_only: true

#links:
#- name: "DOI"
#  url: ""
  
  
# Projects (optional).
projects: 
- 2020-rse
  

---

<br />


## Preliminary Results

Preliminary results indicate that coverage calculations are prone to manipulation since developers alter it with the `nocov` tags in comments. Source code comments indicate the introduction of "Build Debt", followed by "Code" and "Defect Debt", with checks related to "R Code Quality" being the most exposed. 

In StackOverflow, checks about "Description", "R Code", and "Package Structure" are the most queried, with about a third of enquiries resulting in an _avoidance_ behaviour. Moreover, there was a peak of enquiries of any type during 2020.



<br />



## Related Works

- ["Self-Admitted Technical Debt in R Packages: An Exploratory Study"](/publication/2021-rsatd)
- ["Technical Debt in the Peer-Review Documentation of R Packages: a rOpenSci Case Study"](/publication/2021-ropensci)


<br />



## Citation
```
@INPROCEEDINGS {Kumar2022,
author = {P. Kumar and D. Ie and M.  Vidoni},
booktitle = {IEEE/ACM 30th International Conference on Program Comprehension (ICPC)},
title = {On the Developers' Attitude Towards CRAN Checks},
year = {2022},
volume = {},
issn = {},
pages = {},
doi = {},
publisher = {IEEE Computer Society},
address = {Pittsburng, USA},
}
```
