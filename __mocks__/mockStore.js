/* This file will be used to store mock AEM data for testing purposes*/

export const notSupportedData = {
  data: {
    scLabsErrorPageByPath: {
      item: {
        sclGcImages: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
          },
        ],
        sclImagelist: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/chrome.png",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/safari.png",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/edge.png",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/firefox.svg",
          },
        ],
        sclContentEn: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Sorry, this site will not work with Internet Explorer",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Please use one of the following Web browsers to visit Service Canada Labs:",
                },
              ],
            },
          ],
        },
        sclCopyToClipboardLabelEn:
          "Copy the link below and paste in that browser.",
        sclBrowserDownloadLinksEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "If you do not have any of these browsers installed, you can download the one of your choice using the links below:",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.google.com/intl/en_ca/chrome/",
                      },
                      value: "Download Chrome",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://support.apple.com/en_CA/downloads",
                      },
                      value: "Download Safari",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.microsoft.com/en-us/edge",
                      },
                      value: "Download Edge",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.mozilla.org/en-CA/firefox/new/",
                      },
                      value: "Download Firefox",
                    },
                  ],
                },
              ],
            },
          ],
        },
        sclContentFr: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Désolé, ce site ne fonctionne pas avec Internet Explorer",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Veuillez utiliser l'un des navigateurs Web suivants pour accéder aux laboratoires de Service Canada:",
                },
              ],
            },
          ],
        },
        sclCopyToClipboardLabelFr:
          "Vous n'avez qu'à copier le lien ci-dessous et le coller dans ce navigateur.",
        sclBrowserDownloadLinksFr: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Si aucun de ces navigateurs n'est installé, vous pouvez télécharger celui de votre choix à l'aide des liens ci-dessous:",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.google.com/intl/fr_ca/chrome/",
                      },
                      value: "Télécharger Chrome",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://support.apple.com/fr_CA/downloads",
                      },
                      value: "Télécharger Safari",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.microsoft.com/fr-fr/edge",
                      },
                      value: "Télécharger Edge",
                    },
                  ],
                },
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.mozilla.org/fr-CA/firefox/new/",
                      },
                      value: "Télécharger Firefox",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};

export const error500Page = {
  data: {
    scLabsErrorPageByPath: {
      item: {
        sclGcImages: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
          },
        ],
        sclImagelist: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
          },
        ],
        sclContentEn: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value:
                    "The web site has reported an error. Please try again later.",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "Error 500",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "It may be due to server trouble or an incorrect or expired URL. If the problem persists, report the problem.",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "text",
                      value: "Return to the ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/",
                      },
                      value: "Service Canada Labs home page",
                    },
                  ],
                },
              ],
            },
          ],
        },
        sclContentFr: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Le site Web a signalé une erreur. Veuiller réessayer plus tard.",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "Erreur 500",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Cela peut être dû à un problème de serveur ou à une URL incorrecte ou expirée. Si le problème persiste, signalez-le.",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "text",
                      value: "Retournez à la ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/fr/",
                      },
                      value:
                        "page d'accueil des laboratoires de Service Canada",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};

export const error404Page = {
  data: {
    scLabsErrorPageByPath: {
      item: {
        sclGcImages: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
          },
          {
            _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
          },
        ],
        sclImagelist: [
          {
            _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
          },
        ],
        sclContentEn: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value: "We couldn't find that page",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "Error 404",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "We're sorry you ended up here. Sometimes a page gets moved or deleted, but hopefully we can help you find what you're looking for.",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "text",
                      value: "Return to the ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/",
                      },
                      value: "Service Canada Labs home page",
                    },
                  ],
                },
              ],
            },
          ],
        },
        sclContentFr: {
          json: [
            {
              nodeType: "header",
              style: "h1",
              content: [
                {
                  nodeType: "text",
                  value: "Nous ne trouvons pas cette page",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "Erreur 404",
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Nous sommes désolés que vous ayez abouti ici. Il arrive parfois qu'une page ait été déplacée ou supprimée. Heureusement, nous pouvons vous aider à trouver ce que vous cherchez.",
                },
              ],
            },
            {
              nodeType: "unordered-list",
              content: [
                {
                  nodeType: "list-item",
                  content: [
                    {
                      nodeType: "text",
                      value: "Retournez à la ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/fr/",
                      },
                      value:
                        "page d'accueil des laboratoires de Service Canada",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};

export const signupPage = {
  data: {
    sclabsSignupList: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/alpha/sclabs/pages/signup",
          form: {
            formFields: {
              en: {
                label: {
                  email: "Email",
                  confirmEmail: "Confirm email address",
                  yearOfBirth: "What is your year of birth",
                  language:
                    "What language would you like us to contact you in?",
                  province: "What province/territory do you live in?",
                  gender: "Which term best describes your gender identity?",
                  indigenous:
                    "Do you identify as Indigenous; that is First Nations, Métis, or Inuit?",
                  disability: "Do you identify as a person with a disability?",
                  minority:
                    "Do you identify as a member of a visible minority in Canada?",
                  income:
                    "What is your approximate annual household income (before taxes)?",
                  publicServant:
                    "Are you currently working as a public servant?",
                },
                option: {
                  yes: "yes",
                  no: "no",
                  notSure: "I'm not sure",
                  notApply: "Does not apply to me",
                  preferNotAnswer: "I prefer not to answer",
                  english: "English",
                  french: "French",
                  woman: "Woman",
                  man: "Man",
                  another: "Another",
                  anotherDetail: "If 'Another' please specify",
                  firstNations: "First Nations",
                  metis: "Métis",
                  inuk: "Inuk (Inuit)",
                  income1: "Less than $30,000",
                  income2: "$30,001 to $59,999",
                  income3: "$60,000 to $99,999",
                  income4: "$100,000 to $149,999",
                  income5: "$150,000 or more",
                  assistiveTech:
                    "If 'Yes', what assistive technology will you need in order to participate in an online research session with us?",
                  personalInfo:
                    "Do not include any personal, medical or financial details, such as your name, social insurance number (SIN), home or business address, phone number or any case or file numbers.",
                  province: {
                    AB: "Alberta",
                    BC: "British Columbia",
                    MB: "Manitoba",
                    NB: "New Brunswick",
                    NL: "Newfoundland and Labrador",
                    NT: "Northwest Territory",
                    NS: "Nova Scotia",
                    NU: "Nunavut",
                    ON: "Ontario",
                    PE: "Prince Edward Island",
                    QC: "Quebec",
                    SK: "Saskatchewan",
                    YT: "Yukon",
                    other: "Other",
                  },
                  minority: {
                    detail:
                      "If 'yes', select the options that you identify with.",
                    black: "Black",
                    chinese: "Chinese",
                    filipino: "Filipino",
                    japanese: "Japanese",
                    korean: "Korean",
                    latinAmerican:
                      "Non-White Latin American (including: indigenous persons from Central and South America, etc.)",
                    southAsian:
                      "South Asian/East Indian (including: Indian from India; Bangladeshi; Pakistani; East Indian from Guyana, Trinidad, East Africa; etc.)",
                    sea: "South-East Asian (including: Burmese; Cambodian; Laotian; Thai; Vietnamese; etc.)",
                    nonWhite:
                      "Non-White West Asian, North African or Arab (including: Egyptian; Libyan; Lebanese; Iranian; etc.)",
                    mixedOrigin:
                      "Person of Mixed Origin (with one parent in one of the visible minority groups)",
                    another: "Another visible minority",
                    anotherDetail:
                      "If 'Another visible minority group', please specify",
                  },
                },
                errorMsg: {
                  error: "Error",
                  invalidEmail: "Must be a valid email",
                  emailMustMatch: "Emails must match",
                  age: "Must be at least 18 years old",
                  emailRequired: "Email - This field is required",
                  yearOfBirthRequired: "Year of birth - This field is required",
                  language:
                    "What language would you like us to contact you in - This field is required",
                  agreeToConditions:
                    "You must agree to conditions before sign up",
                  errorRegistered:
                    "It looks like you have previously registered with us. Check your inbox for the validation email!",
                  errorUnknown:
                    "An unknown error has occurred during your registration. Please contact experience@servicecanada.gc.ca to continue your registration or try again later",
                },
                agreeToConditions:
                  "I have read, understood and agree to the above. I affirm that I am 18 years old, or older. I understand that I can withdraw from this participant pool, or any research study at any time without consequence.",
                privacy: "Read the full privacy policy",
                privacyLink: "/signup/privacy",
                submit: "Submit",
                clearForm: "Clear my information from this form",
              },
              fr: {
                label: {
                  email: "Adresse de courrier électronique",
                  confirmEmail: "Confirmer l'adresse courriel",
                  yearOfBirth: "En quelle année êtes-vous né?",
                  language:
                    "Dans quelle langue souhaitez-vous que nous communiquions avec vous?",
                  province: "Dans quelle province ou territoire résidez-vous?",
                  gender:
                    "Lequel de ces choix décrit le mieux votre identité de genre?",
                  indigenous:
                    "Vous identifiez-vous comme étant une personne autochtone, c’est-à-dire membre des peuples des Premières Nations, Métis ou Inuits?",
                  disability:
                    "Vous identifiez-vous comme une personne en situation de handicap?",
                  minority:
                    "Vous identifiez-vous comme étant membre d’une minorité visible au Canada?",
                  income:
                    "Quel est le revenu annuel approximatif de votre ménage (avant impôts)?",
                  publicServant:
                    "Travaillez-vous actuellement en tant que fonctionnaire?",
                },
                option: {
                  yes: "Oui",
                  no: "Non",
                  notSure: "Je ne suis pas certain",
                  notApply: "Ne s’applique pas à moi",
                  preferNotAnswer: "Je préfère ne pas répondre",
                  english: "Anglais",
                  french: "Français",
                  woman: "Femme",
                  man: "Homme",
                  another: "Un autre genre",
                  anotherDetail:
                    "Si vous indiquez « Un autre genre », veuillez préciser.",
                  firstNations: "Premières nations",
                  metis: "Métis",
                  inuk: "Inuit",
                  income1: "Moins de 30 000 $",
                  income2: "De 30 001 $ à 59 999 $",
                  income3: "De 60 000 $ à 99 999 $",
                  income4: "De 100 000 $ à 149 999 $",
                  income5: "150 000 $ ou plus",
                  assistiveTech:
                    "Si la réponse est « oui », de quelles technologie d’assistance aurez-vous besoin pour participer à une séance de recherche en ligne avec nous?",
                  personalInfo:
                    "Ne pas inclure de renseignements personnels, médicaux ou financiers, comme par exemple, un numéro d’assurance sociale (NAS), une adresse de domicile ou de lieu de travail, un numéro de téléphone ou numéro de dossier.",
                  province: {
                    AB: "Alberta",
                    BC: "Colombie-Britannique",
                    MB: "Manitoba",
                    NB: "Nouveau-Brunswick",
                    NL: "Terre-Neuve-et-Labrador",
                    NT: "Territoires du Nord-Ouest",
                    NS: "Nouvelle-Écosse",
                    NU: "Nunavut",
                    ON: "Ontario",
                    PE: "île du Prince-Édouard",
                    QC: "Québec",
                    SK: "Saskatchewan",
                    YT: "Yukon",
                    other: "Autres",
                  },
                  minority: {
                    detail:
                      "Si vous avez répondu « Oui », sélectionnez les options auxquelles vous vous identifiez.",
                    black: "Noirs",
                    chinese: "Chinois",
                    filipino: "Philippin",
                    japanese: "Japonais",
                    korean: "Coréen",
                    latinAmerican:
                      "Latino-Américain non blanc (incluant : Amérindiens de l’Amérique centrale et de l’Amérique du Sud, etc.)",
                    southAsian:
                      "Asiatique du Sud/Indien de l’Est (incluant : Indien de l’Inde, Bangladais, Pakistanais, Indien de l’Est originaire de la Guyane, de la Trinité, de l’Afrique orientale, etc.)",
                    sea: "Asiatique du Sud-Est (incluant : Birman, Cambodgien, Laotien, Thaïlandais, Vietnamien, etc.)",
                    nonWhite:
                      "Asiatique de l’Ouest non blanc, Nord-Africain non blanc ou Arabe (incluant : Égyptien, Libyen, Libanais, Iranien, etc.)",
                    mixedOrigin:
                      "Personnes d’origine mixte (dont l’un des parents provient de l’un des groupes de minorité visible)",
                    another: "Autre groupe de minorité visiblecollapsed",
                    anotherDetail:
                      "Si vous avez répondu « Autre groupe des minorités visibles », veuillez préciser.",
                  },
                },
                errorMsg: {
                  error: "Erreur",
                  invalidEmail:
                    "Doit être une adresse de courrier électronique valide",
                  emailMustMatch: "les courriels doivent être identiques",
                  age: "Vous devez être âgé de 18 ans ou plus",
                  emailRequired:
                    "Adresse de courrier électronique - Ce champ est obligatoire",
                  yearOfBirthRequired:
                    "Année de naissance - Ce champ est obligatoire",
                  language:
                    "Langue pour communiquer avec vous - Ce champ est obligatoire",
                  agreeToConditions:
                    "Vous devez accepter les conditions avant de vous inscrire",
                  errorRegistered:
                    "Il semble que vous vous soyez déjà enregistré auprès de nous. Vérifiez votre boîte de réception pour l’email de validation !",
                  errorUnknown:
                    "Une erreur inconnue s’est produite lors de votre inscription. Veuillez contacter experience@servicecanada.gc.ca pour poursuivre votre inscription ou réessayer plus tard",
                },
                agreeToConditions:
                  "J’ai lu, compris et accepté ce qui précède. J’affirme que j’ai 18 ans ou plus. Je comprends que je peux me retirer de ce groupe de participants ou de toute étude de recherche à tout moment, sans conséquence.",
                privacy:
                  "Lire la politique en matière de protection des renseignements personnels dans son intégralité",
                privacyLink:
                  "/fr/inscription/protection-renseignements-personnels",
                submit: "Soumettre",
                clearForm: "Effacer mes renseignements du formulaire",
              },
            },
          },
          title: "Sign up to get invited to research sessions (Step 1 of 2)",
          titleFr:
            "S’inscrire pour être invité aux séances de recherche (étape 1 sur 2)",
          requiredInformation: "Indicates required information",
          requiredInformationFr: "Indique que les renseignements sont requis",
          url: "/signup",
          urlFr: "/fr/inscription",
        },
      ],
    },
  },
};

export const homePageData = {
  data: {
    sCLabsPageByPath: {
      item: {
        scId: "sclabs-homepage",
        scPublishProd: false,
        scPageNameEn: "/home",
        scPageNameFr: "/fr/accueil",
        scTitleEn: "Your feedback can shape tomorrow’s services",
        scTitleFr: null,
        scShortTitleEn: "Home - Service Canada Labs",
        scShortTitleFr: "Accueil - Laboratoires de Service Canada",
        scDescriptionEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "An early look at what Service Canada is up to. Explore our projects. Share your feedback. Sign-up to get notified of ways to support the future of digital government.",
                },
              ],
            },
          ],
        },
        scDescriptionFr: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Un aperçu des activités de Service Canada. Explorez nos projets. Faites-nous part de vos commentaires. Inscrivez-vous pour être informé des façons de soutenir l'avenir du gouvernement numérique.",
                },
              ],
            },
          ],
        },
        scSubject: null,
        scKeywordsEn: "digital services",
        scKeywordsFr: "services numériques",
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: null,
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: null,
        scSocialMediaImageFr: null,
        scSocialMediaImageAltTextEn: null,
        scSocialMediaImageAltTextFr: null,
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/home---main-content",
            scId: "HOME-MAIN-CONTENT",
            scPublishProd: false,
            scTitleEn: null,
            scTitleFr: null,
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Service Canada Labs",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Help us make government digital services simple and easy to use.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Your feedback can shape tomorrow’s services.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Service Canada Labs is an experimental corner of Canada.ca. Here, you can explore projects in their early stages and help us improve them. We might even stop working on some ideas if we learn they are not adding value and not meeting people’s needs.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Service Canada Labs(FR)",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Help us make government digital services simple and easy to use. (FR)",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Your feedback can shape tomorrow’s services. (FR)",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Service Canada Labs is an experimental corner of Canada.ca. Here, you can explore projects in their early stages and help us improve them. We might even stop working on some ideas if we learn they are not adding value and not meeting people’s needs. (FR)",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "HOMEPAGE-MAIN-IMAGE",
            scPublishProd: false,
            scTitleEn: null,
            scTitleFr: null,
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image1.png",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image1.png",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-homepage-button-about",
            scPublishProd: false,
            scTitleEn: "About Service Canada Labs",
            scTitleFr: null,
            scDestinationURLEn: "/about",
            scDestinationURLFr: "/fr/a-propos",
            scButtonType: null,
          },
          {
            scId: "HOMEPAGE-VIEW-PROJECTS",
            scPublishProd: false,
            scTitleEn: "Try out current projects",
            scTitleFr: null,
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Explore projects that are works in progress and let us know what you think by sharing anonymous feedback.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Explore projects that are works in progress and let us know what you think by sharing anonymous feedback. (FR)",
                    },
                  ],
                },
              ],
            },
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image2.png",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image2.png",
            },
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scLabsButton: [
              {
                scId: "sclabs-homepage-button-projects",
                scPublishProd: false,
                scTitleEn: "View projects",
                scTitleFr: null,
                scDestinationURLEn: "/projects",
                scDestinationURLFr: "/fr/projets",
                scButtonType: null,
              },
            ],
          },
          {
            scId: "SIGN-UP-TO-GET-INVITED-TO-RESEARCH-SESSIONS",
            scPublishProd: false,
            scTitleEn: "Sign up to participate in user research",
            scTitleFr:
              "Inscrivez-vous pour être invité aux séances de recherche",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Receive invitations to fill out quick surveys or take part in user research sessions. Participation is always voluntary and you can opt out at any time.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous vous invitons à analyser nos idées expérimentales et à participer à des entretiens de recherche afin d’améliorer Service Canada au bénéfice de tous. Chaque commentaire nous aide à nous assurer que nos services sont simples et faciles à utiliser.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Votre participation n’aura aucune conséquence sur votre accès aux services gouvernementaux. Vous pouvez vous ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "https://alpha.service.canada.ca/fr/desabonnement",
                      },
                      value: "désabonner",
                    },
                    {
                      nodeType: "text",
                      value: " à tout moment.",
                    },
                  ],
                },
              ],
            },
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image3.png",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/homePage_image3.png",
            },
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scLabsButton: [
              {
                scId: "sclabs-homepage-button-signup",
                scPublishProd: false,
                scTitleEn: "Sign up to participate in user research",
                scTitleFr: null,
                scDestinationURLEn: "/signup-info",
                scDestinationURLFr: "/fr/inscription-info",
                scButtonType: null,
              },
            ],
          },
        ],
      },
    },
  },
};
