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
    colors: colors-b
    backgroundSize: full
    title: Powering Your Student Experience.
    subtitle: Brought to you by the best uOttawa sub-association on campus.
    actions:
      - type: Button
        label: Learn More
        url: 'https://www.stackbit.com/'
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: true
    backgroundImage:
      type: BackgroundImage
      url: /images/image_3.JPEG
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 25
    styles:
      self:
        height: auto
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
    colors: colors-d
    elementId: ''
    title: Come to our office
    subtitle: '800 King Edward Ave, Ottawa, ON K1N 6N5, Room 4026'
    items:
      - type: FeaturedItem
        title: Purchase lab supplies
        text: >
          Need to buy a breadboard, wire strippers or CD-Rs? Need to use an
          Altera DE2 Board or an oscilloscope for a project? Look no further. We
          got you covered. Visit our office to get all the equipment you need.
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
      - type: FeaturedItem
        title: Get homework help
        text: >
          Need to study with your friends in a quiet environment to prepare for
          your midterm? Our office is the perfect place for that. Plus, you can
          also seek academic help from our executives during their office hours.
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
      - type: FeaturedItem
        title: Borrow textbooks
        text: >
          Need to borrow a textbook for one of your courses? Our office contains
          a carefully curated selection of textbooks covering a wide variety of
          EECS subjects. The best part? You can borrow them at no cost!
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
    subtitle: ''
    items:
      - type: FeaturedItem
        text: >
          There are no events planned for the coming weeks. Check back another
          time :)
        actions: []
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
  - type: FeatureHighlightSection
    colors: colors-d
    backgroundSize: full
    title: Shop our merch
    text: >
      Shop our embroidered hoodies, crew necks, t-shirts and stickers to
      fiercely represent your IEEE-ness!
    actions:
      - type: Link
        label: Shop now
        url: 'https://ieee-uottawa.square.site/'
        showIcon: true
        icon: arrowRight
        altText: Shop now button
    backgroundImage:
      type: BackgroundImage
      url: /images/pexels-andrea-piacquadio-845434.jpg
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 90
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-72
          - pr-4
          - pl-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeatureHighlightSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: WIE Finally Meet!
    subtitle: ''
    text: >
      The mission of the IEEE uOttawa Women In Engineering (WIE) is to inspire,
      engage, encourage, and empower women to pursue the engineering field.
    actions:
      - type: Button
        label: Learn More
        showIcon: true
        icon: arrowRight
        style: primary
        url: 'https://www.celebratewie.ca/'
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
  - type: ContactSection
    colors: colors-d
    title: Get in touch
    text: >
      Got a question? Event suggestions? Feedback? We want to hear it! Send us a
      message and we will get back to you shortly.
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: Message
          label: Message
          hideLabel: true
          placeholder: Write message
          isRequired: true
          width: full
          type: TextFormControl
        - type: TextareaFormControl
          name: Message
          label: Message
          hideLabel: false
          placeholder: This is the beginning of your message...
          isRequired: true
          width: full
      submitLabel: Submit form
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
