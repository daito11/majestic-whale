---
title: Home
sidebar:
  entries:
    - title: Welcome
      url: "#intro"
      is_primary: true
    - title: "Step 1: Prima parte dell’esposizione graduale"
      url: "#one"
      is_primary: false
    - title: "Step 2: Seconda parte dell’esposizione graduale"
      url: "#two"
      is_primary: false
    - is_primary: false
      title: "Step 3: Terza parte dell’esposizione graduale"
      url: "#three"
    - title: Get in touch
      url: "#four"
      is_primary: false
sections:
  - type: intro
    title: Protocollo
    subtitle: >-
      La seguente demo racchiude l’idea di base per rendere accessibile a tutte
      le famiglie ed operatori interessati, protocolli sperimentali specifici,
      attraverso un percorso facile e fruibile per tutti. La seguente sezione è
      articolata in 3 diversi step. Ogni step racchiude un video con una
      spiegazione specifica ed articolata dell’argomento in oggetto:


      - **Step 1** riguarda l'approccio alla mascherina;

      - **Step 2** si riferisce all’incrementare il tempo di esposizione;

      - **Step 3** è inerente all’esporre gradualmente la persona ad indossare la mascherina.
    section_id: intro
    background_style: style1
    actions:
      - label: Learn more
        url: "#one"
        is_scrolly: true
        is_primary: false
    component: Intro
  - type: features
    title: STEP 1
    section_id: one
    background_style: style2
    component: Features
    subtitle: In questo video vedremo come approcciarsi alla mascherina, come
      avvicinare la persona ad uno stimolo nuovo. Qualora la persona abbia già
      raggiunto questo step, passare allo step 2.
    features_list: []
    actions:
      - is_scrolly: true
        is_primary: false
        label: Video step 1
  - features_list: []
    background_style: style1
    text: In questo video vedremo come è possibile svolgere l’esposizione
      gradualmente incrementando la distanza ed il tempo di esposizione. Qualora
      la persona abbia già raggiunto questo step, passare allo step 3.
    section_id: two
    subtitle: Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    title: Step 2
    type: features
    component: Features
    actions:
      - is_scrolly: true
        is_primary: false
        label: Video step 2
  - type: features
    title: Features Section
    section_id: three
    background_style: style1
    component: Features
    actions:
      - is_scrolly: true
        is_primary: false
        label: Video step 3
    subtitle: In questo video vedremo come esporre gradualmente la persona ad
      indossare la mascherina.
  - type: contact
    title: Get in touch
    text: Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: four
    background_style: style1
    contact_list:
      - title: Address
        text: |-
          12345 Somewhere Road #654
          Nashville, TN 00000-0000
          USA
      - title: Email
        text: user@Hyperspace.tld
        url: "#"
      - title: Phone
        text: (000) 000-0000
    social:
      title: Social
      social_icons:
        - title: Twitter
          icon: fa-twitter
          url: "#"
        - title: Facebook
          icon: fa-facebook
          url: "#"
        - title: GitHub
          icon: fa-github
          url: "#"
        - title: Instagram
          icon: fa-instagram
          url: "#"
        - title: LinkedIn
          icon: fa-linkedin
          url: "#"
    component: Contact
menus:
  main:
    title: Home
    weight: 1
template: home
---
