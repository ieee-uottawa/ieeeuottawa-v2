---
title: Home
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: full
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-e
    backgroundSize: full
    title: Power Your Student Experience
    titleFr: Boostez votre vie étudiante
    subtitle: with the best sub-association on campus.
    subtitleFr: avec la meilleure sous-association du campus.
    actions:
      - type: Button
        label: Learn More
        url: /about
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: false
      - type: Button
        label: Office Hours
        altText: Office Hours / Heures de Bureau
        url: /office-hours
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
    backgroundImage:
      type: BackgroundImage
      url: /images/Christmas 2022.JPG
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 25
    styles:
      self:
        height: screen
        width: wide
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
  - type: FeaturedItemsSection
    colors: colors-b
    elementId: ''
    title: Come visit us in the office
    titleFr: Passez nous voir dans notre bureau
    subtitle: '800 King Edward Ave, Ottawa, ON K1N 6N5, STE 4026'
    subtitleFr: '800 King Edward Ave, Ottawa, ON K1N 6N5, STE 4026'
    items:
      - type: FeaturedItem
        title: Use our lab equipment
        titleFr: Utilisez notre équipement de laboratoire
        text: >
          Need to use a breadboard, wire strippers or CD-Rs? Need to use an
          Altera DE2 Board or an oscilloscope for a project? We got your back.
        textFr: >
          Besoin d'une planche à pain, des pinces à dénuder ou des CD-R ? Besoin
          d'utiliser une carte Altera DE2 ou un oscilloscope pour un projet ?
          Nous avons tout!
        actions: []
        styles:
          self:
            textAlign: left
        featuredImage:
          type: ImageBlock
          url: /images/circuit.svg
          altText: Circuit illustration
          caption: Caption of the image
          elementId: ''
        featuredIcon: circuit
        isIcon: true
      - type: FeaturedItem
        title: Get homework help
        titleFr: Obtenez de l'aide pour vos devoirs
        text: >
          Need to study with your friends in a quiet environment to prepare for
          your midterm? Our office is the perfect place for that.
        textFr: >
          Besoin d'étudier avec vos amis dans un environnement calme pour vous
          préparer pour votre mi-session ? Notre bureau est l'endroit idéal pour
          cela.
        actions: []
        styles:
          self:
            textAlign: left
        featuredImage:
          type: ImageBlock
          url: /images/bulb.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
        featuredIcon: bulb
        isIcon: true
      - type: FeaturedItem
        title: Borrow textbooks
        titleFr: Empruntez des manuels scolaires
        text: >
          Need to borrow a textbook for one of your courses? Take advantage of
          our carefully curated selection of EECS textbooks at no cost.
        textFr: >
          Besoin d'emprunter un manuel pour l'un de vos cours ? Profitez
          gratuitement de notre sélection de manuels EECS adapté à vos besoins.
        actions: []
        styles:
          self:
            textAlign: left
        featuredImage:
          type: ImageBlock
          url: /images/books.svg
          altText: Textbooks illustration
          caption: Caption of the image
          elementId: ''
        featuredIcon: books
        isIcon: true
    actions:
      - type: Button
        label: Office Hours
        altText: Link to Office Hours
        url: /office-hours
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    columns: 3
    spacingX: 32
    spacingY: 32
    enableHover: false
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeaturedItemsSection
    colors: colors-c
    elementId: ''
    title: Upcoming Events
    titleFr: Prochains événements
    subtitle: ''
    subtitleFr: ''
    items:
      - type: FeaturedItem
        elementId: ''
        title: Comp Eng Hangout
        titleFr: Rencontre de génie d'info
        subtitle: '11/23/2022, 6PM - 8PM'
        subtitleFr: '23/11/2022, 18:00 - 20:00'
        text: >
          Location: SITE 4026




          Drop by the IEEE office, located in STE 4026, and hang out with other
          CEG students!
        textFr: >
          Lieu: SITE 4026




          Passez au bureau de l'IEEE, situé dans le STE 4026, et passez du temps
          avec d'autres étudiants du CEG !
        isIcon: false
        featuredImage:
          type: ImageBlock
          url: /images/ceg-hangout.jpeg
          altText: Spectroscopy Seminar Poster
        featuredIcon:
          label: Apple
          value: apple
        actions:
          - type: Button
            label: Learn More
            altText: ''
            url: 'https://www.instagram.com/p/Ck6xk_Ou7m6/'
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
    actions: []
    columns: 2
    spacingX: 40
    spacingY: 16
    enableHover: false
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        margin:
          - mb-0
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeatureHighlightSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Check out our gallery
    titleFr: Visitez notre galerie de photos
    subtitle: ''
    text: |
      Visit our gallery to see photos of events we have hosted in the past.
    textFr: >
      Visitez notre galerie pour voir les photos des événements que nous avons
      organisés dans le passé.
    actions:
      - type: Button
        label: Gallery
        showIcon: true
        icon: arrowRight
        style: primary
        url: 'https://www.facebook.com/ieeeuottawa/photos'
    backgroundImage:
      type: ImageBlock
      url: /images/gridgallery.png
      backgroundSize: cover
      backgroundPosition: center
      opacity: 60
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
  - type: CtaSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Get in touch
    titleFr: Contactez-nous
    text: >
      Got a question? Event suggestions? Feedback? We want to hear it! Send us a
      message and we will get back to you as soon as we can.
    textFr: >
      Vous avez une question ? Des suggestions d'événements ? Des commentaires ?
      Nous voulons les entendre ! Envoyez-nous un message et nous vous
      répondrons dès que possible.
    actions:
      - type: Button
        label: Contact
        showIcon: true
        icon: arrowRight
        url: 'mailto:communications@ieeeuottawa.ca'
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
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: website
  - type: MetaTag
    property: 'og:image:alt'
    content: IEEE uOttawa Student Branch Logo
  - type: MetaTag
    property: 'og:url'
    content: 'https://ieeeuottawa.ca/'
  - type: MetaTag
    property: 'og:site_name'
    content: IEEE uOttawa Student Branch
  - type: MetaTag
    property: 'twitter:site'
    content: '@ieeeuottawa'
metaTitle: Powering Your Student Experience
metaDescription: >-
  The IEEE uOttawa Student Branch is the official student branch for the
  University of Ottawa and the official Sub-Association for ELG/CEG/SEG under
  the Engineering Students Society (ESS).
socialImage: /images/LOGO_HALLOWEEN.svg
---
