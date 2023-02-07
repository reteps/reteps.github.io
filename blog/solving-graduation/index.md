---
title: Solving Graduation
date: "2-7-2023"
---

This is a semester-long project that I worked on for my [Databases class](https://alawini.web.illinois.edu/teaching/database-systems/). The project generates a valid graduation plan for you, which is easier said than done!


![](./class_signup_sheet.png)
Caption: No more spreadsheets of degree requirements please 🤩

# Problem

As I am trying to graduate in 3 years, I have spent a fair amount of time staring at a DARS report. The [degree reports](https://registrar.illinois.edu/academic-records/dars-audit/) tell me what classes I need to take in order to graduate, and what hour/course requirements I need to complete.

![](./dars_section.png)
Caption: An example section of my DARS report

This also means that I spend a lot of time cross-referencing the report with the available course list, and ensuring that I don't take too many hard classes together.

![](./course_combo.gif)
Caption: The cursed combo

# The Plan

What if I was able to take that DARS report, and available course information, to generate these schedules?

![](./genius_plan.jpg)
Caption: hehe

## Datasets

Wade Fagen-Ulmschneider (The 🐐) has released a couple of datasets:

+ The "Gen Ed" [Dataset](https://github.com/wadefagen/datasets/tree/master/geneds) details what courses satisfy which general education requirements
+ GPA [Dataset](https://github.com/wadefagen/datasets/tree/master/gpa) gets the average course GPA in each class using a series of Freedom of Information Act (FOIA) requests
+ Course Catalog [Dataset](https://github.com/wadefagen/datasets/tree/master/course-catalog) details every course section ever offered

## Making Datasets

Unfortunately, DARS reports are only offered in HTML formats. The report will need to go from something like this:

![](./html_dars.png)
Caption: Machines hate this

Into something like this:

```json
[
  {
    "name": "REQUIRED COURSES",
    "req_number": 3,
    "OK": false,
    "needs": {
      "hours": 0.0,
      "subreqs": 1,
      "courses": 0
    },
    "subreqs": [
      {
        "name": "COMPUTER SCIENCE CORE REQUIREMENTS",
        "subreq_number": 5,
        "OK": false,
        "needs": {
          "hours": 0.0,
          "courses": 1,
          "course_list": [
            [
              {
                "number": "421",
                "department": "CS"
              }
            ]
          ]
        }
      }
    ]
  },
]
```

Additionally, we need to generate course prerequisite chains.

THIS POST IS A WORK IN PROGRESS. CHECK BACK IN LATER.