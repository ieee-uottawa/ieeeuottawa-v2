---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Events
sections:
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: This in an empty page
    text: >-
      Start adding sections by clicking the + button on the page or through the
      sidebar.
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mb-12
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedItemsSection
    colors: colors-d
    elementId: ''
    title: Featured Items
    subtitle: The section subtitle
    items:
      - type: FeaturedItem
        title: Hackathon
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
        styles:
          title:
            textAlign: left
          subtitle:
            fontWeight: 400
            fontStyle: normal
            textAlign: left
          text:
            textAlign: left
          actions:
            justifyContent: flex-start
        eventImage:
          type: ImageBlock
          url: /images/IEEE WIE.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
    actions:
      - type: Button
        label: Apply Now
        url: '#'
        style: primary
      - type: Button
        label: Learn More
        url: '#'
        style: secondary
    columns: 3
    spacingX: 16
    spacingY: 16
    enableHover: false
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
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
---
