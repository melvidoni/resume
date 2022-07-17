---
title: 'analyzeR: A SonarQube Plugin for Analyzing Object-Oriented R Packages'
authors: ["Pranav Chandramouli", "Zadia Codabux", "Melina Vidoni"]

abstract: "Automated Static Analysis Tools (ASATs) analyze source-code to capture defects and ensure higher quality. SonarQube is a renown ASAT that supports mainstream programming languages. However, R programming is not included. R is an increasingly popular multi-paradigm and package-based programming environment for scientific programming. Nevertheless, R's Object-Oriented (OO) functionalities are implemented through three different systems: S3, S4, and R6, and seldom used by developers.
We present **analyzeR**, an advanced SonarQube plugin to examine R packages built in any of the current OO models. It implements widely-used, commonly-accepted OO metrics and displays the results using SonarQube's graphical interface for increased usability, implementing an array of metrics."
  

date: "2022-06-01T00:00:00Z"
image_preview: ""
math: true
publication_types: ["3"]

publication: "In *SoftwareX*, Vol 19C"
publication_short: "In *SoftwareX*, Vol 19C"

featured: true

url_code: "https://github.com/tdresearchgroup/analyzeR-SonarQubePlugin"
url_dataset: ""
url_pdf: "publication/2022-analyzer.pdf"
url_project: ""
url_slides: ""
url_video: ""
doi: "10.1016/j.softx.2022.101113"


# Projects (optional).
projects:
- 2020-rse

---

### Highlights


Therefore, **analyzeR** was designed to assist with static code analysis on three types of R's OO implementations (S3, S4, and R6) while maintaining a seamless, unique and user-friendly process. It is an expansible SonarQube plugin that can be easily adapted into existing CI environments, and its results can be compared to those offered for other programming languages.

The metrics available in **analyzeR** are the following (release 2022/06): Lines of Code, Number of Public Methods, Number of Fields, Number of Method Calls, Number of Internal Method Calls, Number of External Method Calls, Weighted Methods per Class, Average Method Complexity, Response for a Class, Between Object Classes, Afferent Coupling, Efferent Coupling, Martin's Instability, Lack of Cohesion in Methods, ata  Access Metrics, Number of Private Fields, Number of Private Methods.






<br />


### Acknowledgements

This study is partly supported by the Natural Sciences and Engineering Research Council of Canada , RGPIN-2021-04232 and DGECR-2021-00283 at the University of Saskatchewan.



<br />





### Citation

```
@article{Chandramouli2022,
title = "{analyzeR: A SonarQube plugin for analyzing object-oriented R Packages}",
journal = {SoftwareX},
volume = {19},
pages = {101113},
year = {2022},
issn = {2352-7110},
doi = {https://doi.org/10.1016/j.softx.2022.101113},
url = {https://www.sciencedirect.com/science/article/pii/S2352711022000747},
author = {Pranav Chandramouli and Zadia Codabux and Melina Vidoni},
keywords = {SonarQube, R packages, Static code analysis, Object-oriented, R plugin},
}
```



<br />


### Venue Impact

The following is the venue impact, according to Scimago Journal Ranking:


<a href="https://www.scimagojr.com/journalsearch.php?q=21100422153&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=21100422153" alt="SCImago Journal &amp; Country Rank"  /></a>
