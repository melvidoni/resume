---
abstract: "GitHub is a collaborative platform for global software development, where Pull Requests (PRs) are essential to bridge code changes with version control. However, software developers often trade software quality for faster implementation, incurring Technical Debt (TD). 
When PRs are evaluated by reviewers (e.g., other developers), the latter can often detect TD instances, and this can lead to either rejection of the PR or can spark discussion about it. We investigated whether PRs' comments indicate TD by assessing three large-scale repositories: Spark, Kafka, and React. We combined a manual classification with automated detection using machine learning and deep learning models. We classified two datasets and found that 37.7% and 38.7% of the comments indicate TD, respectively. Our best model achieved an 85% F1 score in classifying TD during the validation phase. However, we also faced several challenges during this process, which may hint that TD in PR comments is discussed differently from other software artifacts (e.g., code comments, commits, issues or discussion forums). Thus, we present challenges and lessons learned meant to assist researchers in pursuing this area of research."



authors: ["Shubhashis Karmakar", "Zadia Codabux", "Melina Vidoni"]
date: "2022-06-22T00:00:00Z"
math: true
publication_types: ["1"]
publication: "in 16th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)"
publication_short: ""
featured: false
title: "An Experience Report on Technical Debt in Pull Requests: Challenges and Lessons Learned"
url_code: ""
url_dataset: ""
url_pdf: ""
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
#projects: 
#- 2020-rse
  

---

<br />


## Preliminary Results

Although we successfully classified PRCs as TD and non-TD and the TD comments as explicit and implicit, the classification process was challenging. We found that PRCs often lack the context to understand it and correctly classify it. Some PRCs were potential TD, but we could not determine whether they will eventually become a TD instance using only information in the PRC. PRCs were often ambiguous and hard to understand due to the natural language in which they were written, and the terminologies and vocabulary used differ among the developers. Lastly, more than one PRC could be related to the same debt instance, or multiple debt instances may be discussed in a PRC. We discussed some mitigation strategies for these challenges.


<br />



## Citation
```

```
