---
abstract: "Self-Admitted Technical Debt (SATD) is a particular case of Technical Debt (TD) where developers explicitly acknowledge their sub-optimal implementation decisions. Although previous studies have demonstrated that SATD is common in software projects and negatively impacts their maintenance, they have mostly approached software systems coded in traditional object-oriented programming (OOP), such as Java, C++ or .NET. This paper studies SATD in R packages and reports the results of a three-part study. The first part mined more than 500 R packages available on GitHub and analysed more than 164k of comments to generate a dataset. The second part administered crowd-sourcing to analyse the quality of the extracted comments, while the third part conducted a survey to address developers' perspectives regarding SATD comments. The main findings indicate that a large amount of outdated code is left commented, with SATD accounting for about 3% of comments. Code Debt was the most common type, but there were also traces of Algorithm Debt, and there is a considerable amount of comments dedicated to circumventing CRAN checks. Moreover, package authors seldom address the SATD they encounter and often add it as self-reminders."



authors: ["Melina Vidoni"]
date: "2021-02-23T00:00:00Z"
math: true
publication_types: ["1"]
publication: "In *Mining Software Repositories 2021*"
publication_short: "MSR 2021 [Preprint]"
featured: true
title: "Self-Admitted Technical Debt in R Packages: An Exploratory Study [Preprint]"
url_code: ""
url_dataset: "https://doi.org/10.5281/zenodo.4558219"
url_pdf: "publication/2021-rsatd-msr.pdf"
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
projects: ["2020-rse"]
  

---




<br />

## Contributions

More than 164k of comments were manually read and classified into 12 types of TD. The A-Survey obtained about 102 responses, while Q-Survey surpassed the expected threshold to obtain 140 complete responses. This manuscript makes the following contributions:

- An analysis of TD in R packages. Results showcase an excessive amount of outdated code left commented out, poor testing quality with comments written to avoid automation of tests, and a tendency to bypass CRAN checks. Moreover, Code and Test are the types of TD most commonly admitted, albeit Algorithm Debt was also detected. Comment quality was often deemed low and obscure, and developers indicated they seldom address it in their packages.

- A comparison with results from other studies, also exploring source code comments, but in OOP projects. This includes SATD text patterns, developers' perspectives, and types of datasets.

- A dataset of SATD comments in a large variety of R packages for use in future studies, as well as the final list of text patterns discovered in this study. See: [https://doi.org/10.5281/zenodo.4558219](https://doi.org/10.5281/zenodo.4558219)



<br />


## Ethical Considerations

The methodology used in this manuscript was approved by RMIT University Human Ethics Research Committee (HREC), with project code 	2020-23517.


<br />


## Acknowledgements

The author acknowledges Associate Professor John Ormerod from the School of Mathematics and Statistics at the University of Sydney (Australia) for his assistance when calculating the sample sizes for the survey. Additionally, the author thanks the developers who participated in the surveys and the volunteers advising on the pre-classification. Finally, the author is grateful to the anonymous reviewers for their careful reading of the manuscript and their insightful comments and suggestions.
