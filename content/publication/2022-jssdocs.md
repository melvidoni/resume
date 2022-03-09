---
title: 'Understanding Roxygen Package Documentation in R'
authors: ["Melina Vidoni"]

abstract: "R is a package-based programming ecosystem that provides an easy way to install third-party code, datasets, and examples. Thus, R developers rely heavily on the documentation of the packages they import to use them correctly and accurately. This documentation is often written using Roxygen, equivalent to Java's well-known Javadoc. This two-part study provides the first analysis in this area.
First, 379 systematically-selected, open-source R packages were mined and analysed to address the quality of their documentation in terms of presence, distribution, and completeness to identify potential sources of documentation debt of _technical debt_ that describes problems in the documentation. Second, a survey addressed how R package developers perceive documentation and face its challenges (with a response rate of 10.04%). 
Results show that _incomplete documentation_ is the most common smell, with several cases of _incorrect use_ of the Roxygen utilities. Unlike in traditional API documentation, developers do not focus on how behaviour is implemented but on common use cases and parameter documentation. Respondents considered the examples section the most useful, and commonly perceived challenges were unexplained examples, ambiguity, incompleteness and fragmented information."
  

date: "2022-02-08T00:00:00Z"
image_preview: ""
math: true
publication_types: ["3"]

publication: "In *Journal of Systems and Software*, Vol 188"
publication_short: "In *Journal of Systems and Software*, Vol 188"

featured: true

url_code: ""
url_dataset: ""
url_pdf: ""
url_project: ""
url_slides: ""
url_video: ""
doi: "10.1016/j.jss.2022.111265"


# Projects (optional).
projects:
- 2020-rse

---

### Highlights

- Mixed-methods study about documentation smells of Roxygen in R packages.
- Mined software repositories and triangulated with a developers' survey.
- Incomplete documentation and incorrect use Roxygen detected as common smells.
- R developers prioritise different documentation parts than in traditional API’s.



<br />



### Contributions

The main contributions of this study are as follows:

- This is the first study conducted to understand package documentation culture among R package developers' community. It analyses the extent to which they are documented by mining open, public repositories hosted in GitHub and performing several analysis.
- It uncovered that R packages suffer from Documentation Technical Debt. Many sections of the Roxygen documentation are _incomplete_ (in particular, references, returns, and parameters), with multiple cases indicating an _incorrect use_ of Roxygen's capabilities (i.e., family tags and topics, examples, code ownership and returns). There are indications that _outdated documentation_ may be a problem, but this was out-of-scope.
- It surveys developers to understand their perspective regarding documentation and the challenges they face when using and writing Roxygen. 
- Survey results indicate that R developers prioritise different aspects of the documentation (compared to traditional object-oriented development), focusing on parameters, returns and examples, considering the latter the most helpful section. As perceived by the developers, common challenges are unexplained examples, ambiguity, incompleteness, and fragmented information.



<br />


### Acknowledgements

This research did not receive any specific grants from funding agencies in the public, commercial, or not-for-profit sectors. The author thanks the anonymous reviewers who provided helpful comments on earlier drafts of the manuscript.


<br />


### Ethical Considerations

The methodology used in this manuscript, described in the sections below, was revised approved by the Australian National University's Human Ethics Research Committee (HREC), with project code 2021-24181.


<br />





### Citation

```
@article{Vidoni2022b,
title = "{Understanding Roxygen Package Documentation in R}",
journal = "{Journal of Systems and Software}",
volume = {188},
pages = {111265},
year = {2022},
issn = {0164-1212},
doi = {https://doi.org/10.1016/j.jss.2022.111265},
url = {https://www.sciencedirect.com/science/article/pii/S0164121222000310},
author = {Melina Vidoni},
keywords = {Software engineering, Roxygen, Api documentation, Technical debt, Mining software repositories, Developers’ survey},
}
```



<br />

### Venue Impact

The following is the venue impact, according to Scimago Journal Ranking:

<a href="https://www.scimagojr.com/journalsearch.php?q=19309&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=19309" alt="SCImago Journal &amp; Country Rank"  /></a>
