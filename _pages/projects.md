---
layout: single
title: Projects
permalink: /projects/
author_profile: true
toc: true

header:
  overlay_image: /assets/images/projects.png
  overlay_color: "#000"
  overlay_filter: "0.5"
  caption: "Photo credit: [Unsplash](https://unsplash.com/photos/xrVDYZRGdw4)"
excerpt: "A compilation showcasing the challenging tasks I've tackled"
---

## Personal ##

### Taylor Swift Song Data Analysis ###

![image-center](/assets/images/taylor_swift.png){: .align-center}

* Extracted track data from the Spotify API using Python to analyze key audio features (tempo, energy, and danceability).
* Cleaned and normalized raw data using Pandas; removed nulls and handled duplicates.
* Created Matplotlib visualizations to explore trends in Taylor Swift’s music over time.

Click [this link to view the Taylor Swift Song Analysis GitHub repository](https://github.com/rodrigues-oscar/Taylor-Swift-Song-Analysis) for more details about this project.

### Traffic Sign Recognition Using Machine Learning ###

![image-center](/assets/images/traffic_sign.png){: .align-center}

* Developed a convolutional neural network in Python using Keras and TensorFlow to classify traffic signs from image data.
* Achieved 95.8% test accuracy across over 1,000 images, using image augmentation and dropout to improve generalization.
* Demonstrated real-time object classification performance in simulation and documented findings in a project report.

## Professional ##

### Quantifying Vehicle Steering Discrepancies ###

![image-center](/assets/images/steering.png){: .align-center}

**Contribution:**

* Restructured and normalized 500+ JSON log files using Pandas to enable structured analysis of steering behavior across autonomous vehicle test data.
* Visualized vehicle trajectory and signal data with Matplotlib to identify erratic steering patterns from 50+ vehicle tests, contributing to feature root-cause analysis.
* Engineered features and trained a logistic regression model to detect steering anomalies, achieving 93.4% accuracy and improving early error detection.

### Proactive Road Construction Detection System ###

![image-center](/assets/images/construction.png){: .align-center}

**Contribution:**

* Scraped construction and road closure data from 48 Department of Transportation (DOT) websites using Python (BeautifulSoup) to anticipate road hazards and reduce reliance on evasive event logs.
* Cleaned and normalized raw HTML data with Pandas, ensuring consistent, high-quality inputs for system integration and automation.
* Built an automated notification pipeline to preemptively flag high-risk construction zones, enabling preemptive disabling of ADAS features and reducing customer-reported issues.
