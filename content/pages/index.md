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
      url: /images/image_3.JPEG
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
        title: Spectroscopy Seminar
        titleFr: Séminaire sur la Spectroscopie
        subtitle: '09/30/2022, 2PM'
        subtitleFr: '30/09/2022, 14:00'
        text: >+
          Location: ARC 233 & on
          [Zoom](https://us06web.zoom.us/j/82543006085?pwd=b09oOG9weWFrckl2TXR6SmdNMkpDdz09)


          Ever wondered what ultra-narrow optical spectral features are?
          Interested in spectroscopy? This event is for you!

        textFr: >+
          Lieu: ARC 233 et sur
          [Zoom](https://us06web.zoom.us/j/82543006085?pwd=b09oOG9weWFrckl2TXR6SmdNMkpDdz09)


          Vous vous êtes déjà demandé ce que sont les caractéristiques
          spectrales optiques ultra étroites ? Vous vous intéressez à la
          spectroscopie ? Cet événement est pour vous !

        isIcon: false
        featuredImage:
          type: ImageBlock
          url: /images/events/2022-2023/spectroscopy-speaker-talk.jpeg
          altText: Spectroscopy Seminar Poster
        featuredIcon:
          label: Apple
          value: apple
        actions:
          - type: Button
            label: Learn More
            altText: ''
            url: 'https://www.instagram.com/p/Ci3p2q7tZKk/'
            showIcon: false
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
      - type: FeaturedItem
        elementId: ''
        title: Fall By-Elections
        titleFr: Élections partielles de l'automne
        subtitle: '10/05/2022, 4PM EST.'
        subtitleFr: '05/10/2022, 16:00 EST.'
        text: |
          Run for vacant positions in our execs team!

          Location: STE 4026
        textFr: >
          Lieu: STE 4026


          Présentez votre candidature aux postes vacants de notre équipe
          d'exécutifs !
        isIcon: false
        featuredImage:
          type: ImageBlock
          url: /images/events/2022-2023/fall2022-by-elections.jpeg
          altText: Fall By Elections Poster
        featuredIcon:
          label: Apple
          value: apple
        actions:
          - type: Button
            label: Learn More
            altText: ''
            url: 'https://www.instagram.com/p/Ci1Aw-hNyjR/'
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
  - type: FeaturedItemsSection
    colors: colors-c
    elementId: ''
    title: Become a member
    titleFr: Devenez membre
    subtitle: ''
    subtitleFr: Section sous-titre
    items:
      - type: FeaturedItem
        title: Faster
        titleFr: Plus rapide
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        textFr: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn More
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Smarter
        titleFr: Plus intelligent
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        textFr: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn More
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Focused
        titleFr: Concentré
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        textFr: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn More
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
    actions: []
    columns: 1
    spacingX: 16
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
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: CtaSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Become a member
    titleFr: Devenez membre
    text: >+
      Join a community of over 420,000 technology and engineering professionals
      united by a common desire to continuously learn, interact, collaborate,
      and innovate. As a Student/Graduate Student Member of IEEE, you:


      *   Network with other professionals in your local area or within a
      specific technical interest


      *   Are mentored by professional engineers and technologists


      *   Obtain access to the largest library of electrical engineering,
      computer science, and electronics technical literature as well as the
      latest technology trends, industry news, and events.

    textFr: >+
      Rejoignez une communauté de plus de 420 000 professionnels de la
      technologie et de l'ingénierie unis par un désir commun d'apprendre,
      d'interagir, de collaborer et d'innover en permanence. En tant que membre
      étudiant de l'IEEE vous aurez accès à:


      *   un réseau de professionnels dans votre région ou dans un domaine
      technique spécifique.


      *   l'encadrement par des ingénieurs et technologues professionnels


      *   la plus grande bibliothèque de littérature technique en génie
      électrique, en informatique et en électronique, ainsi qu'aux dernières
      tendances technologiques, aux nouvelles de l'industrie et aux événements.

    actions:
      - type: Button
        label: Try it now
        showIcon: true
        icon: arrowRight
        url: /
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
socialImage: /images/LOGO_BLUE 2.svg
---
