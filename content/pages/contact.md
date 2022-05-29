---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Contact Us
sections:
  - type: ContactSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Contact us
    text: We look forward to hearing from you.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
          hideLabel: false
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextareaFormControl
          name: Message
          label: Description
          hideLabel: false
          placeholder: Your message
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: Consent
          label: >-
            I understand that this form is storing my submitted information so I
            can be contacted.
          isRequired: true
          width: full
      submitLabel: Send Message
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Contact form image
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
