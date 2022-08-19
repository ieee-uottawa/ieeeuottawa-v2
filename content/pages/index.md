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
    title: Powering Your Student Experience.
    titleFr: Rendre votre experience étudiante électrisante.
    subtitle: Brought to you by the best uOttawa sub-association on campus.
    subtitleFr: La meilleure sous-association de l'Université d'Ottawa sur le campus.
    actions:
      - type: Button
        label: Learn More
        url: /about
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: true
      - type: Button
        label: Get Involved
        altText: ''
        url: /about/#get-involved
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
        padding:
          - pt-20
          - pb-80
          - pr-12
          - pl-12
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
    title: Come to our office
    subtitle: '800 King Edward Ave, Ottawa, ON K1N 6N5, Room 4026'
    items:
      - type: FeaturedItem
        title: Purchase lab supplies
        titleFr: Achetez des matériaux de laboratoire
        text: >
          Need to buy a breadboard, wire strippers or CD-Rs? Need to use an
          Altera DE2 Board or an oscilloscope for a project? Look no further. We
          got you covered. Visit our office to get all the equipment you need.
        textFr: >
          Vous devez acheter une planche à pain, des pinces à dénuder ou des
          CD-R ? Vous avez besoin d'utiliser une carte Altera DE2 ou un
          oscilloscope pour un projet ? Ne cherchez pas plus loin. Nous avons
          tout ce qu'il vous faut. Visitez notre bureau pour obtenir tout le
          matériel dont vous avez besoin.
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
          your midterm? Our office is the perfect place for that. Plus, you can
          also seek academic help from our executives during their office hours.
        textFr: >
          Besoin d'étudier avec vos amis dans un environnement calme pour vous
          préparer pour votre mi-session ? Notre bureau est l'endroit idéal pour
          cela. De plus, vous pouvez également demander une aide académique à
          nos execs pendant leurs heures de bureau.
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
        titleFr: Empruntez des manuels
        text: >
          Need to borrow a textbook for one of your courses? Our office contains
          a carefully curated selection of textbooks covering a wide variety of
          EECS subjects. The best part? You can borrow them at no cost!
        textFr: >
          Vous avez besoin d'emprunter un manuel pour l'un de vos cours ? Notre
          bureau contient une excellente sélection de manuels couvrant une
          grande variété de sujets de l'EECS. Et le meilleur ? Vous pouvez les
          emprunter gratuitement !
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
    actions: []
    columns: 3
    spacingX: 16
    spacingY: 16
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
    subtitle: There are currently no upcoming events planned. Check again soon!
    subtitleFr: Il n'y a actuellement aucun événement prévu. Repassez bientôt !
    items: []
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
        margin:
          - mb-0
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-b
    title: Get in touch
    titleFr: Contactez-nous
    text: >
      Got a question? Event suggestions? Feedback? We want to hear it! Send us a
      message and we will get back to you as soon as we can.
    textFr: >
      Vous avez une question ? Des suggestions d'événements ? Des commentaires ?
      Nous voulons les entendre ! Envoyez-nous un message et nous vous
      répondrons dès que possible.
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          labelFr: Prénom
          hideLabel: true
          placeholder: First Name
          placeholderFr: Prénom
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          labelFr: Nom de famille
          hideLabel: true
          placeholder: Nom de famille
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          labelFr: Email
          hideLabel: true
          placeholder: Email
          placeholderFr: Email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: Message
          label: Message
          labelFr: Message
          hideLabel: false
          placeholder: This is the beginning of your message...
          placeholderFr: Votre message ici...
          isRequired: true
          width: full
      submitLabel: Submit form
      submitLabelFr: Soumettre
      styles:
        submitLabel:
          textAlign: center
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
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
addTitleSuffix: true
metaTags: []
---
