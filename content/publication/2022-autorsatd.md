---
title: 'Self-Admitted Technical Debt in R: Detection and Causes'
authors: ["Rishab Sharma", "Ramin Shahbazi", "Fatemeh H. Fard", "Zadia Codabux", "Melina Vidoni"]

abstract: "Self-Admitted Technical Debt (SATD) is primarily studied in Object-Oriented (OO) languages and traditionally commercial software. However, scientific software coded in dynamically-typed languages such as R differs in paradigm, and the source code comments' semantics are different (i.e., more aligned with algorithms and statistics when compared to traditional software). Additionally, many Software Engineering topics are understudied in scientific software development, with SATD detection remaining a challenge for this domain. This gap adds complexity since prior works determined SATD in scientific software does not adjust to many of the keywords identified for OO SATD, possibly hindering its automated detection.
Therefore, we investigated how classification models (traditional machine learning, deep neural networks, and deep neural Pre-Trained Language Models (PTMs)) automatically detect SATD in R packages. This study aims to study the capabilities of these models to classify different TD types in this domain and manually analyze the causes of each in a representative sample. 
Our results show that PTMs (i.e., RoBERTa) outperform other models and work well when the number of comments labelled as a particular SATD type has low occurrences. We also found that some SATD types are more challenging to detect.
We manually identified sixteen causes, including eight new causes detected by our study. The most common cause was _failure to remember_, in agreement with previous studies. 
These findings will help the R package authors automatically identify SATD in their source code and improve their code quality. In the future,  checklists for R developers can also be developed by scientific communities such as rOpenSci to guarantee a higher quality of packages before submission."
  

date: "2022-08-25T00:00:00Z"
image_preview: ""
math: true
publication_types: ["3"]

publication: "In *Automated Software Engineering Journal*, Vol X"
publication_short: "In *Automated Software Engineering Journal*, Vol X"

featured: true

url_code: ""
url_dataset: ""
url_pdf: ""
url_project: ""
url_slides: ""
url_video: ""
doi: "10.1007/s10515-022-00358-6"


# Projects (optional).
projects:
- 2020-rse

---

### Contributions

- This is the first automated detection analysis of SATD in R programming, specifically for R packages.
- Likewise, PTMs for SATD detection have not been used before.
- An augmented corpus (from 8 to 16) of plausible causes of SATD,  extracted from 1,345 comments. It expands on previously proposed categories and is publicly shared.
- The automated detection of 12 types of SATD compared to 5 types in other SATD studies.





<br />


### Acknowledgements

This study is partly supported by the Natural Sciences and Engineering Research Council of Canada, RGPIN-2021-04232 and DGECR-2021-00283 at the University of Saskatchewan, and RGPIN-2019-05175 at the University of British Columbia. We thank ANU for the open access support.


<br />





### Citation

```
@article{Sharma2022,
title = "{Self-Admitted Technical Debt in R: Detection and Causes}",
journal = "{Automated Software Engineering Journal}",
volume = {X},
pages = {1-24},
year = {2022},
issn = {0928-8910},
doi = {10.1007/s10515-022-00358-6},
author = {Rishab Sharma and Ramin Shahbazi and Fatemeh H. Fard and Zadia Codabux and Melina Vidoni},
keywords = {Software engineering, self-admitted technical debt, machine learning, natural language processing},
}
```



<br />

### Venue Impact

The following is the venue impact, according to Scimago Journal Ranking:

<a href="https://www.scimagojr.com/journalsearch.php?q=24145&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank"><img border="0" src="https://www.scimagojr.com/journal_img.php?id=24145" alt="SCImago Journal &amp; Country Rank"  /></a>
