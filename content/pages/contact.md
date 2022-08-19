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
    titleFr: Contact us
    text: >
      We look forward to hearing from you. Feel free to also join the official uOttawa Engineering discord server by clicking on this link : <https://discord.gg/jPHy6uUThH>
    textFr: >
      Nous sommes très heureux de recevoir vos commentaires. N'hésitez pas à rejoindre également le serveur discord officiel de serveur discord du Génie de l'Université d'Ottawa en cliquant sur ce lien : <https://discord.gg/jPHy6uUThH>
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          labelFr: Nom
          placeholder: Your name
          placeholderFr: Votre nom
          isRequired: true
          width: 1/2
          hideLabel: false
        - type: EmailFormControl
          name: email
          label: Email
          labelFr: Email
          placeholder: Your email
          placeholderFr: Votre email
          isRequired: true
          width: 1/2
        - type: TextareaFormControl
          name: Message
          label: Description
          labelFr: Description
          hideLabel: false
          placeholder: Your message
          placeholderFr: Votre message
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: Consent
          label: >-
            I understand that this form is storing my submitted information so I can be contacted.
          labelFr: >-
            Je comprends que ce formulaire stocke les informations que j'ai soumises afin que je puisse être contacté.
          isRequired: true
          width: full
      submitLabel: Send Message
      submitLabelFr: Envoyer message
    media:
      type: ImageBlock
      url: /images/Office_Hours_W_2022.jpg
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
