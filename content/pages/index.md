---
title: Home
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-0
          - pb-6
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-d
    backgroundSize: inset
    title: Powering Your Student Experience.
    subtitle: Brought to you by the best uOttawa sub-association on campus.
    actions:
      - type: Button
        label: Get Started
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
          - pb-96
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
          url: /images/bulb-856c66ca.svg
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
        title: 13th Annual IEEE WIE Wine and Cheese
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
        subtitle: 'April 1st, 2022 @7PM-10PM'
      - type: FeaturedItem
        title: Terra Hackathon
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
        subtitle: 'March 25th, 2022 @5PM EST - March 27th, 2022 @2PM'
      - type: FeaturedItem
        title: Battle Royale
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
        subtitle: 'March 11th, 2022'
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
      The mission of the IEEE uOttawa Women In Engineering is to inspire,
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
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
addTitleSuffix: true
metaTags: []
---
