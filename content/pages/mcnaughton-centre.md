---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: McNaughton Centre
sections:
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: McNaughton Centre
    text: >
      Located in SITE 4026, the McNaughton Centre is intended to enhance the
      learning experiences of IEEE student members at Canadian Universities and
      Colleges, as well as encouraging IEEE membership and activities, and
      interaction between the Student Branch and the Ottawa Section. Ted Glass
      (in 1979) created the first centre at the University of Manitoba in memory
      of General Andrew G. L. McNaughton, one of Canada’s most distinguished
      electrical engineers.


      The McNaughton Centre at uOttawa is proud to announce services available
      to all students.
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-36
          - pb-56
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: QuoteSection
    colors: colors-b
    quote: >-
      "This is someone else, not from our team, but she also loves fishing, so
      we thought we should highlight her."
    name: ''
    title: ''
    backgroundImage:
      type: BackgroundImage
      url: /images/bg.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 70
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-96
          - pb-10
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        textAlign: left
      title:
        textAlign: left
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-c
    title: Our Team
    subtitle: >-
      We’re a group of proffesional fisherman & friends, who love exploring the
      seas and sharing our experiences with the world.
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hugh-saturation.json
      - content/data/team/hilary-ouse.json
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: ContactSection
    colors: colors-d
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
      submitLabel: Submit form
      styles:
        submitLabel:
          textAlign: center
    media: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
