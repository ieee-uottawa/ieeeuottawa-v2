---
title: About
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-0
          - pb-4
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: About Us
    text: >
      The IEEE uOttawa Student Branch is the official student branch for the
      University of Ottawa and the official Sub-Association for ELG/CEG/SEG
      under the ESS.


      The University of Ottawa’s IEEE Student Branch was established to provide
      professional services to improve each student’s experience on campus. This
      includes accommodating students with access to up-to-date equipment,
      internet access, textbooks and a quiet work environment.
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-32
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FeatureHighlightSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: WIE Affinity Group
    subtitle: ''
    text: >
      The mission of the IEEE uOttawa Women In Engineering is to inspire,
      engage, encourage, and empower women to pursue the engineering field.
    actions:
      - type: Button
        label: Learn More
        showIcon: true
        icon: arrowRight
        style: primary
        url: /
    backgroundImage:
      type: ImageBlock
      url: /images/IEEE WIE.png
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - elementId: ''
    variant: variant-a
    colors: colors-c
    title: Our Team
    people:
      - content/data/team/hilary-ouse.json
      - content/data/team/person-bw7qe01y6.json
      - content/data/team/dianne-ameter.json
      - content/data/team/desmond-eagle.json
      - content/data/team/hugh-saturation.json
      - content/data/team/hilary-ouse.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hugh-saturation.json
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPeopleSection
  - type: CtaSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Want to get involved with the IEEE?
    text: >
      Fill out this form and an executive will email you when there are
      opportunities for volunteering!
    actions:
      - type: Button
        label: Form
        showIcon: true
        icon: arrowRight
        url: >-
          https://docs.google.com/forms/d/e/1FAIpQLSfIdHz-ORmtsCgjEp2WpOV5ssXaC60nNpFzAY_qeRH4f7uX1w/viewform
        style: primary
    backgroundImage: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
addTitleSuffix: true
---
