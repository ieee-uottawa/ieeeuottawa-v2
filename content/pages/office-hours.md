---
layout: PageLayout
addTitleSuffix: true
title: Office Hours
sections:
  - type: TextSection
    colors: colors-d
    elementId: ''
    variant: variant-a
    title: Office Hours
    titleFr: Heures de bureau
    subtitle: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-10
          - pb-11
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: HeroSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Get in touch
    titleFr: Écrivez-nous
    subtitle: Fresh. Better. Faster.
    subtitleFr: Sous-titre
    text: ''
    textFr: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Join adventure
        showIcon: true
        icon: arrowRight
        style: primary
        url: /
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Hero image
    backgroundImage: null
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Contact us
    titleFr: Contactez-nous
    text: >
      We look forward to hearing from you. Feel free to also join the official
      uOttawa Engineering discord server by clicking on this link :
      <https://discord.gg/jPHy6uUThH>
    textFr: >
      Nous sommes très heureux de recevoir vos commentaires. N'hésitez pas à
      rejoindre également le serveur discord officiel de serveur discord du
      Génie de l'Université d'Ottawa en cliquant sur ce lien :
      <https://discord.gg/jPHy6uUThH>
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: webmaster@ieeeuottawa.ca
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
            I understand that this form is storing my submitted information so I
            can be contacted.
          labelFr: >-
            Je comprends que ce formulaire stocke les informations que j'ai
            soumises afin que je puisse être contacté.
          isRequired: true
          width: full
      submitLabel: Send Message
      submitLabelFr: Envoyer message
    media:
      type: ImageBlock
      url: /images/office-hours-soon.gif
      width: 828
      height: 1032
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
metaDescription: Check out our office hours.
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: website
  - type: MetaTag
    property: 'og:image:alt'
    content: IEEE uOttawa Student Branch Logo
  - type: MetaTag
    property: 'og:url'
    content: 'https://ieeeuottawa.ca/contact'
  - type: MetaTag
    property: 'og:site_name'
    content: IEEE uOttawa Student Branch
  - type: MetaTag
    property: 'twitter:site'
    content: '@ieeeuottawa'
metaTitle: Office Hours
---
