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
        url: /mcnaughton-centre
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
      - type: Link
        label: Election Results
        altText: Election Results Link
        url: >-
          https://democracy.smallminds.dev/election/71383aee-6d57-4974-b01a-46e940e568e6/positions
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
    backgroundImage:
      type: BackgroundImage
      url: /images/W&C14.JPG
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 15
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
    text: |
      Election results for the 2023-2024 school year are out!
    textFr: >
      Les résultats de l'élection des execs de l'année scolaire 2023-2024 sont
      disponibles!
  - type: TestimonialsSection
    colors: colors-c
    elementId: ''
    variant: variant-c
    title: Sponsored By
    subtitle: ''
    testimonials:
      - quote: >
          The [IEEE Canadian
          Foundation](https://www.ieeecanadianfoundation.org/)
        quoteFr: >
          La [fondation canadienne 
          IEEE](https://www.ieeecanadianfoundation.org/)
        image:
          type: ImageBlock
          url: /images/IEEECF.jpg
          altText: A man fishing
          width: 2661
          height: 380
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
    titleFr: Sponsorisé par
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
          altText: Bulb Icon Illustration
          caption: Bulb Icon Illustration
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
        url: /mcnaughton-centre
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
        title: ELG Specialization Panel
        titleFr: Panel de spécialisation ELG
        subtitleFr: '11/04/2023, 18:30'
        text: >
          Location: STM 117


          Join IEEE uOttawa to explore 5 specializations in electrical
          engineering, gain insights from experienced alums, and prepare for a
          successful career.
        textFr: >
          Lieu: STM 117


          Rejoignez IEEE uOttawa pour explorer 5 spécialisations en génie
          électrique, obtenir des informations de la part d'anciens expérimentés
          et vous préparer à une carrière réussie.
        isIcon: false
        featuredImage:
          type: ImageBlock
          url: /images/events/2022-2023/ELG Panel.jpeg
          altText: 14th Annual Wine and Cheese Poster
          caption: 14th Annual Wine and Cheese Poster
        featuredIcon:
          label: Apple
          value: apple
        actions:
          - type: Button
            label: Learn More
            altText: Learn More Button
            url: 'https://www.instagram.com/p/CqoWH6FpfDE/'
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
        styles:
          self:
            textAlign: left
        subtitle: '04/11/2023, 6:30PM'
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
