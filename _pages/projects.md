---
layout: splash
title: Projects
permalink: /projects/

header:
  overlay_image: /assets/images/projects.png
  overlay_color: "#000"
  overlay_filter: "0.5"
  caption: "Photo credit: [Unsplash](https://unsplash.com/photos/xrVDYZRGdw4)"
excerpt: "A compilation showcasing the challenging tasks I've tackled"

tech_info: 
- excerpt: "Technology used: `Python`/`Machine Learning`/`SQL`"
---

{% include feature_row id="tech_info" type="center" %}

# Quantifying Vehicle Steering Discrepancies #

{% include figure image_path="/assets/images/steering.png" caption="Photo credit: [Unsplash](https://unsplash.com/photos/T5PvaqELSww)" %}

**Contribution:**
* Restructured and normalized complex JSON data effectively using Pandas, enabling structured analysis and tabulation of key signals. 
* Employed Matplotlib to visualize steering angles and vehicle trajectories, facilitating the visual identification of steering discrepancies. 
* Utilized feature engineering to optimize a logistic regression model designed for predicting steering discrepancies, successfully achieving an accuracy rate of 93.4%.

# Proactive Road Construction Detection System #

{% include figure image_path="/assets/images/construction.png" caption="Photo credit: [Unsplash](https://unsplash.com/photos/dQLgop4tnsc)" %}

**Contribution:**
* Leveraged BeautifulSoup to web scrape construction-related data from Department of Transportation (DOT) websites across states, ensuring real-time access to critical information.
* Applied data wrangling techniques to process and clean the acquired data, ensuring its accuracy and consistency for further analysis.
* Implemented a MySQL database system to store and manage construction data, enabling precise identification and disabling of potentially hazardous areas available to the autonomous driving system.