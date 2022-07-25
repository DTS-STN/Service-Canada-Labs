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
    sCLabsPageByPath: {
      item: {
        scId: "sclabs-signup-page",
        scPageNameEn: "/signup",
        scPageNameFr: "/fr/inscription",
        scTitleEn: "Sign up to get invited to research sessions (Step 1 of 2)",
        scTitleFr:
          "S’inscrire pour être invité aux séances de recherche (étape 1 sur 2)",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scDescriptionEn: {
          json: null,
        },
        scDescriptionFr: {
          json: null,
        },
        scSubject: null,
        scKeywordsEn: null,
        scKeywordsFr: null,
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
                requiredInfo: "Indicates required information",
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
                requiredInfo: "Indique que les renseignements sont requis",
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
        ],
      },
    },
  },
};

export const homePageData = {
  data: {
    sCLabsPageByPath: {
      item: {
        scId: "sclabs-homepage",
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
            scTitleEn: "About Service Canada Labs",
            scTitleFr: null,
            scDestinationURLEn: "/about",
            scDestinationURLFr: "/fr/a-propos",
            scButtonType: null,
          },
          {
            scId: "HOMEPAGE-VIEW-PROJECTS",
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

export const digitalCentrePageData = {
  data: {
    sCLabsPageByPath: {
      item: {
        scId: "sclabs-digital-centre",
        scPageNameEn: "/projects/digital-centre",
        scPageNameFr: "/fr/projets/centre-numerique",
        scTitleEn: "Service Canada Digital Centre Overview",
        scTitleFr: "Aperçu du Centre numérique de Service Canada",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scDescriptionEn: {
          json: null,
        },
        scDescriptionFr: {
          json: null,
        },
        scSubject: null,
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2022-07-12",
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
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/didigal-centre---main-content",
            scId: "sclabs-digital-centre-main-content",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The goal of the Digital Centre is to bring the experience of visiting a Service Canada location online. Think of it as the “home base” where your new Service Canada experience will happen. Our goal is to empower you to learn about benefits and services specific to your situation, and then apply for and manage your benefits.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "This is also the place where you will create an account, have your identity verified, and later, log in with Service Canada through the Digital Centre. The Digital Centre will collect your benefit choices and profile and share this with frontline Service Canada staff. If you decide to call or visit a location, staff will already have your account information to serve you faster.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We are still thinking about how this will all work, but below are 4 ideas that we think might make it easier for you to receive benefits and services from the government. Keep in mind these are not final designs and we are looking forward to getting feedback from you on these ideas.",
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
                        "L’objectif du Centre numérique est de vous faire vivre en ligne l’expérience d’une visite d’un point de service de Service Canada. Considérez-le comme le « port d’attache » d’où vous vivrez votre nouvelle expérience avec Service Canada. Notre objectif est de vous donner les moyens de vous renseigner sur les prestations et les services propres à votre situation, puis de présenter vos demandes et de gérer vos prestations.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "C’est aussi l’endroit où vous pourrez créer un compte, où votre identité sera vérifiée et où vous vous connecterez à Service Canada par l’intermédiaire du Centre numérique. Le Centre numérique recueillera vos choix de prestations et votre profil et les communiquera au personnel de première ligne de Service Canada. Si vous décidez d’appeler ou de vous rendre dans un point de service, le personnel disposera déjà des renseignements sur votre compte pour vous servir le plus rapidement possible.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous réfléchissons toujours à la façon dont tout cela fonctionnera, mais vous trouverez ci-dessous 4 idées qui, selon nous, pourraient vous permettre de recevoir plus facilement des prestations et des services du gouvernement. Gardez à l’esprit qu’il ne s’agit pas de concepts définitifs et que nous sommes impatients d’obtenir vos commentaires sur ces idées.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---idea-1",
            scId: "sclabs-digital-centre-idea1",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Idea 1: Finding Information on Benefits and Services",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Miskomin is preparing to have her first child. She’s not sure which benefits apply to her. She lands on the Digital Centre home page and notices a “life journey” for having a child. She clicks on the link and discovers new information on applicable benefits and services for expectant First Nations mothers.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "A few months later, Miskomin realizes that she needs to apply for maternity employment insurance. She lands on the Service Canada home page again and notices a search bar. She types in the keywords and presses the search button. A list of benefits come up along with a panel with search filters. She adjusts her filters to find the maternity employment insurance that she can apply for.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Idée 1 : Trouver des renseignements sur les prestations et les services",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Miskomin se prépare à avoir son premier enfant. Elle n’est pas certaine des prestations qui s’appliquent à sa situation.. Elle atterrit sur la page d’accueil du Centre numérique et remarque un « parcours de vie » pour avoir un enfant. Elle clique sur le lien et découvre de nouveaux renseignements sur les prestations et services disponibles aux futures mamans des Premières nations.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Quelques mois plus tard, Miskomin se rend compte qu’elle doit faire une demande de prestations de maternité relevant de l’assurance-emploi. Elle atterrit de nouveau sur la page d’accueil du Centre numérique et remarque une barre de recherche. Elle entre des mots-clés et appuie sur le bouton de recherche. Une liste de prestations s’affiche ainsi que des filtres de recherche. Elle ajuste ses filtres pour trouver les prestations de maternité de l’assurance-emploi qu’elle peut demander.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---idea-2",
            scId: "sclabs-digital-centre-idea2",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Idea 2: Choosing a sign in method",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Atul lives in Alberta and has never created an account with Service Canada before. He’s presented with a couple of options to create an account with Service Canada through the Digital Centre:",
                    },
                  ],
                },
                {
                  nodeType: "ordered-list",
                  content: [
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/en/employment-social-development/services/my-account/gckey.html",
                          },
                          value: "GCKey",
                        },
                        {
                          nodeType: "text",
                          value:
                            " is a Government of Canada sign-in and it allows Atul to sign in across multiple federal government websites using a single ID.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/en/employment-social-development/services/my-account/partners.html",
                          },
                          value: "Sign in with your bank",
                        },
                        {
                          nodeType: "text",
                          value:
                            ": Atul can sign in using his online banking sign-in credentials, the same way he would with the Canada Revenue Agency. No banking information is shared with Service Canada.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/en/employment-social-development/services/my-account/province.html",
                          },
                          value: "Provincial ID",
                        },
                        {
                          nodeType: "text",
                          value:
                            ": Atul can use his MyAlberta Digital ID credentials to sign in. This is only available in Alberta and British Columbia.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Email: Atul also has the option to create an account using his email.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Idée 2 : Choisir une méthode pour ouvrir une session",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Atul vit en Alberta et n’a jamais créé de compte avec le Centre numérique de Service Canada auparavant. Des options lui sont proposées pour créer un compte avec Service Canada par l’intermédiaire du Centre numérique :",
                    },
                  ],
                },
                {
                  nodeType: "ordered-list",
                  content: [
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/fr/emploi-developpement-social/services/mon-dossier/clegc.html",
                          },
                          value: "CléGC",
                        },
                        {
                          nodeType: "text",
                          value:
                            " est une connexion au gouvernement du Canada. Il permet à Atul d’ouvrir des sessions sur plusieurs sites Web du gouvernement fédéral en utilisant un seul identifiant.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/fr/emploi-developpement-social/services/mon-dossier/partenaires.html",
                          },
                          value: "Ouvrir une session avec sa banque",
                        },
                        {
                          nodeType: "text",
                          value:
                            " : Atul peut ouvrir une session à l’aide de ses identifiants bancaires en ligne, de la même façon qu’il le ferait avec l’Agence du revenu du Canada Aucune information bancaire n’est communiquée à Service Canada.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "link",
                          data: {
                            href: "https://www.canada.ca/fr/emploi-developpement-social/services/mon-dossier/province.html",
                          },
                          value: "Identifiant provincial",
                        },
                        {
                          nodeType: "text",
                          value:
                            " : Atul peut utiliser son identifiant numérique MyAlberta pour ouvrir une session. Disponible uniquement en Alberta et en Colombie-Britannique.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Ouvrir une session avec son adresse de courrier électronique : Atul a également la possibilité de créer un compte en utilisant son adresse de courrier électronique.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---idea-3",
            scId: "sclabs-digital-centre-idea3",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Idea 3: Validating your identity",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Suming just created an account with Service Canada through the Digital Centre, but before they can access their account, they need to verify their identity with the government. This only needs to be done once. Suming is presented with 4 options:",
                    },
                  ],
                },
                {
                  nodeType: "ordered-list",
                  content: [
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Online banking: Suming can provide consent to the government to verify their identity with their bank. No bank account information is shared. This is done instantly online.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Upload ID: Suming can upload a photo of an official ID (for example, a driver’s license). The verification process may take up to 72 hours.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Access code in the mail: Suming can request an access code mailed to them through Canada Post. This could take up to 2 weeks.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Service Canada Location: Suming can visit a Service Canada location closest to them where a staff member reviews Suming’s official federal or provincial photo ID. Suming can get instant access once verified.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Idée 3 : Confirmer votre identité",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Suming vient de créer un compte avec Service Canada par l’intermédiaire du Centre numérique, mais avant de pouvoir accéder à son compte, Suming doit confirmer son identité auprès du gouvernement. Cette opération n’a besoin d’être effectuée qu’une seule fois. Les 4 options suivantes s’offrent à Suming :",
                    },
                  ],
                },
                {
                  nodeType: "ordered-list",
                  content: [
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Banque en ligne : Suming peut consentir à ce que le gouvernement confirme son identité auprès de sa banque. Aucune information sur le compte bancaire n’est partagée. Cette opération se fait instantanément en ligne.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Télécharger une pièce d’identité : Suming peut télécharger une photo d’une pièce d’identité officielle (par exemple, un permis de conduire). Le processus de vérification peut prendre jusqu’à 72 heures.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Code d’accès par la poste : Suming peut demander qu’un code d’accès lui soit envoyé par courrier par Postes Canada. Cela peut prendre jusqu’à 2 semaines.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Point de service de Service Canada : Suming peut se rendre dans un point de service de Service Canada près de son domicile où un membre du personnel examinera sa pièce d’identité officielle, qu’elle soit fédérale ou provinciale. Suming aura accès dès que son identité aura été confirmée.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---idea-4",
            scId: "sclabs-digital-centre-idea4",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Idea 4: My Account Dashboard",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Jasmine just turned 65 years old and collects Canada Pension Plan payments. She is also now eligible for the Old Age Security program where she is automatically enrolled but it is still being processed. She wants to know the status of her application, so she logs into her Service Canada Account with the Digital Centre. At the top of the page, she sees her Canada Pension Plan payment date and amount. Below that, she sees her Old Age Security application is in process and there are no major updates. Finally, she sees inactive and previous benefits such as employment insurance payments she received when she was laid off 5 years ago.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Idée 4 : Tableau de bord de mon compte",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Jasmine vient d’avoir 65 ans et reçoit des paiements du Régime de pensions du Canada. Elle est maintenant admissible au programme de la Sécurité de la vieillesse auquel elle est automatiquement inscrite, mais sa demande est toujours en cours de traitement. Elle veut connaître l’état de sa demande, alors elle se connecte à son compte avec Service Canada par l’intermédiaire du Centre numérique. En haut de la page, elle voit la date et le montant de son paiement du Régime de pensions du Canada. En dessous, elle voit que sa demande de Sécurité de la vieillesse est en cours de traitement et qu’il n’y a pas de mise à jour importante. Enfin, elle voit les prestations inactives et antérieures, comme les paiements d’assurance-emploi qu’elle a reçus lorsqu’elle a été mise à pied il y a 5 ans.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---homepage",
            scId: "sclabs-digital-centre-homepage",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 1: Homepage",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "This is what the Digital Centre home page could look like. We want to make it easier for you to find information about benefits and services. To help you, you can use a guided journey or the search engine. From top to bottom, left to right:",
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
                          value:
                            "A global navigation header with menu items such as a search bar, Benefits and services, Life journeys, Contact us and a Sign in button",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "A search bar to find benefits and services",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A section to login and create an account with Service Canada through the Digital Channel",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A section for Popular Service Canada pages for Ontario",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "A section to introduce life journeys",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A section on “How can we help you?” where a user can “Give us a call”, use a “Callback service” or “Visit in person",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 1 : Page d’accueil",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Voici à quoi pourrait ressembler la page d’accueil du Centre numérique. Nous voulons que vous puissiez trouver plus facilement des renseignements sur les prestations et les services. Pour vous aider, vous pouvez utiliser un parcours guidé ou encore le moteur de recherche. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général de navigation avec les éléments du menu tels qu’une barre de recherche, Prestations et services, Parcours de vie, Contactez-nous et un bouton « Se connecter »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une barre de recherche pour trouver des prestations et des services.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une section pour se connecter et créer un compte avec Service Canada par l’intermédiaire du Centre numérique",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une section pour les pages de Service Canada les plus consultées en Ontario",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une section pour présenter les parcours de vie.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une section « Comment pouvons-nous vous aider? » où un utilisateur peut utiliser les options « Appelez-nous », « Service de rappel » ou « Visitez-nous en personne »",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---search-results",
            scId: "sclabs-digital-centre-search-results",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 2: Search Results",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Search results of benefits and services where the user can filter by different categories including region, income level, and employment status. From top to bottom, left to right:",
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
                          value:
                            "A global navigation header with menu items such as a search bar, Benefits and services, Life journeys, Contact us and a Sign in button",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A search bar with filters which include Region, Age range, Income, Employment status",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Four search results for the term “baby” and under each search result is a button where users can “Learn more” for each search result",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 2 : Résultats de recherche",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Résultats de recherche de prestations et de services où l’utilisateur peut filtrer par différentes catégories, dont la région, le niveau de revenu et la situation d’emploi. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général de navigation avec les éléments du menu tels qu’une barre de recherche, Prestations et services, Parcours de vie, Contactez-nous et un bouton « Se connecter »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une barre de recherche avec des filtres qui comprennent la région, la tranche d’âge, le revenu, la situation d’emploi",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Quatre résultats de recherche pour le terme « bébé » et, sous chaque résultat de recherche, un bouton permettant aux utilisateurs d’« En savoir plus » pour chaque résultat de recherche",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---single-benefit",
            scId: "sclabs-digital-centre-single-benefit",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 3: Single Benefit",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Detailed information of a single benefit where users can also apply online by clicking on “Apply for this benefit”. From top to bottom, left to right:",
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
                          value:
                            "A global navigation header with menu items such as a search bar, Benefits and services, Life journeys, Contact us and a Sign in button",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "A side bar with secondary information",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The program title: “EI maternity and parental benefits: What these benefits offer”.",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Detailed information of the benefit and a button below it labelled “Apply for this benefit”",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 3 : Page de prestations",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Informations détaillées sur une prestation pour laquelle les utilisateurs peuvent faire une demande en ligne en cliquant sur « Demander cette prestation ». De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général de navigation avec les éléments du menu tels qu’une barre de recherche, Prestations et services, Parcours de vie, Contactez-nous et un bouton « Se connecter »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une barre latérale avec des informations secondaires",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Le titre du programme : « Prestations de maternité et prestations parentales de l’assurance-emploi : Ce qu’offrent ces prestations »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Des informations détaillées sur la prestation et un bouton en dessous intitulé « Demander cette prestation »",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---sign-in-method",
            scId: "sclabs-digital-centre-sign-in-method",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 1: Sign In Method",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Create an account screenshot with options to continue with GCKey, your bank, your province, or your email. A new browser tab will open if you click on one of the options. From top to bottom, left to right:",
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
                          value:
                            "A global header with just Service Canada and no menu items; we want users to focus on this specific task",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Continue with GCKey",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Continue with your bank",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Continue with your province (Alberta and British Columbia only)",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Continue with your email",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 1 : Une méthode pour ouvrir une session",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Capture d’écran de la création d’un compte avec des options pour continuer avec CléGC, votre banque, votre province, ou votre adresse de courrier électronique. Un nouvel onglet s’ouvrira dans votre navigateur si vous cliquez sur l’une de ces options. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général avec seulement Service Canada et aucun menu; nous voulons que les utilisateurs se concentrent sur cette tâche spécifique",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Continuer avec CléGC",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Continuer avec votre banque",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Continuer avec votre province (Alberta et Colombie-Britannique seulement)",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Continuer avec votre adresse de courrier électronique",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital---choose-your-bank",
            scId: "sclabs-digital-centre-choose-your-bank",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 2: Choose your bank",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choose your bank to sign in and create an account with Service Canada through the Digital Centre. No personal information is shared. From top to bottom, left to right:",
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
                          value:
                            "A global header with just Service Canada and no menu items; we want users to focus on this specific task",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A series of clickable logos for the different banks that the user can choose to sign in with",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 2 : Choisir votre banque",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choisissez votre banque pour ouvrir une session et créer un compte avec Service Canada par l’intermédiaire du Centre numérique. Aucun renseignement personnel n’est partagé. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général avec seulement Service Canada et aucun menu; nous voulons que les utilisateurs se concentrent sur cette tâche spécifique",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une liste de logos cliquables des différentes banques avec laquelle l’utilisateur peut choisir d’ouvrir une session",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---choose-your-province",
            scId: "sclabs-digital-centre-choose-your-province",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 3: Choose your province",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choose your province to sign in with Service Canada through the Digital Centre. This option is only available for Alberta and BC residents. From top to bottom, left to right:",
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
                          value:
                            "A global header with just Service Canada and no menu items; we want users to focus on this specific task",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A clickable tile with the MyAlberta ID logo which will take you to the MyAlberta ID sign in page",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A Clickable tile with the British Columbia logo which will take you to the BC government sign in page",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image 3 : Choisir votre province",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choisissez votre province pour ouvrir une session avec Service Canada par l’intermédiaire du Centre numérique. Cette option n’est disponible que pour les résidents de l’Alberta et de la Colombie-Britannique. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général avec seulement Service Canada et aucun menu; nous voulons que les utilisateurs se concentrent sur cette tâche spécifique",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une boîte arborant le logo de MyAlberta ID sur laquelle on peut cliquer pour aller à la page d’ouverture de session avec MyAlberta ID",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une boîte arborant le logo de la Colombie-Britannique sur laquelle on peut cliquer pour aller à la page d’ouverture de session avec le gouvernement de la Colombie-Britannique",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---verifying-your-identity",
            scId: "sclabs-digital-centre-verifying-your-identity",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image: Verifying your identity",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choose between 4 options of verifying your identity. From top to bottom, left to right:",
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
                          value:
                            "A global header with just Service Canada and no menu items; we want users to focus on this specific task",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Verify your identity by signing into your online banking account",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Verify your identity by uploading a copy of your photo ID",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Verify your identity by visiting a Service Canada location",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Verify your identity with a personal access code that is mailed to your home",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value: "Image : Confirmer votre identité",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Choisissez parmi 4 options de confirmation de votre identité. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général avec seulement Service Canada et aucun menu; nous voulons que les utilisateurs se concentrent sur cette tâche spécifique",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Confirmez votre identité en accédant à votre compte bancaire en ligne",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Confirmez votre identité en téléchargeant une copie de votre carte d’identité avec photo",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Confirmez votre identité en vous rendant dans un point de service de Service Canada",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Confirmez votre identité à l’aide d’un code d’accès personnel envoyé par la poste à votre domicile",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/digital-centre---myaccount-page",
            scId: "sclabs-digital-centre-myaccount-page",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Image: Service Canada Digital Centre’s MyAccount page",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "This is what the Service Canada home page could look like after signing in. From top to bottom, left to right:",
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
                          value:
                            "A global navigation header with menu items such as a search bar, Benefits and services, Life journeys, Contact us and an area where users can access Preferences and a message centre",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "A listing of “Your benefits and services”",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "A sidebar containing “Did you know?” tips and tricks and “Recommended benefits for you”",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Active benefits and services containing Canadian Pension Plan information with a button to View details",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Pending benefits and services containing Old Age Security information with a button to View details",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Inactive benefits and services containing Employment Insurance information with a button to View details",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h3",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Image : Page MonDossier du Centre numérique de Service Canada",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Voici à quoi pourrait ressembler la page d’accueil de Service Canada après s’être connecté. De haut en bas, de gauche à droite :",
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
                          value:
                            "Un en-tête général de navigation avec les éléments du menu tels qu’une barre de recherche, Prestations et services, Parcours de vie, Contactez-nous et un endroit où les utilisateurs peuvent accéder à leurs préférences et à un centre de messages",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "Une liste « Vos prestations et services »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Une barre latérale contenant des conseils et astuces « Le saviez-vous? » et des « Prestations recommandées pour vous »",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Des prestations et des services actuels contenant des renseignements sur le Régime de pensions du Canada et un bouton pour voir les détails",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Des prestations et des services en attente contenant des renseignements sur la Sécurité de la vieillesse et un bouton pour voir les détails",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Des prestations et des services inactifs contenant des renseignements sur l’assurance-emploi et un bouton pour voir les détails",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "sclabs-digital-centre-image-homepage",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.1.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.1.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "The Service Canada Digital Centre home page.",
            scImageAltTextFr:
              "Page d’accueil du Centre numérique de Service Canada.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-search-result",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.2.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.2.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "A search result page.",
            scImageAltTextFr: "Une page de résultats de recherche.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-single benefit",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.3.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-1.3.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "A benefit page with details.",
            scImageAltTextFr:
              "Une page de prestations avec les détails du programme.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-sign-in-method",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.1.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.1.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "Page where you can select the method you would like to use to create an account.",
            scImageAltTextFr:
              "Page vous permettant de sélectionner la méthode que vous souhaitez utiliser pour créer un compte.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-choose-your-bank",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.2.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.2.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "Page where you can choose your bank to sign in with.",
            scImageAltTextFr:
              "Page permettant de choisir votre banque pour ouvrir une session.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-choose-your-province",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.3.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-2.3.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "Page where you can choose your province to sign in with.",
            scImageAltTextFr:
              "Page permettant de choisir votre province pour ouvrir une session.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-verifying-your-identity",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-3.1.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-3.1.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "Page where you can choose your method of verifying your identity.",
            scImageAltTextFr:
              "Page vous permettant de choisir une méthode pour confirmer votre identité.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-digital-centre-image-myaccount-page",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-4.1.jpg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/dc-4.1.jpg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "Service Canada Digital Centre’s MyAccount page.",
            scImageAltTextFr:
              "Page MonDossier du Centre numérique de Service Canada.",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
        ],
      },
    },
  },
};

export const virtualAssistantPageData = {
  data: {
    sCLabsPageByPath: {
      item: {
        scId: "sclabs-virtual-assistant",
        scPageNameEn: "/projects/virtual-assistant",
        scPageNameFr: "/fr/projets/assistant-virtuel",
        scTitleEn: "Virtual Assistant",
        scTitleFr: "L’assistant virtuel",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scDescriptionEn: {
          json: null,
        },
        scDescriptionFr: {
          json: null,
        },
        scSubject: null,
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2022-07-11",
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
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/virtual-assistant---the-scenario",
            scId: "sclabs-virtual-assistant-scenario",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "The Scenario",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Imagine you are someone named Mary. You ",
                    },
                    {
                      nodeType: "text",
                      value: "recently lost your job",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value: " and apply for ",
                    },
                    {
                      nodeType: "text",
                      value: "Employment Insurance",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        ". Two or three weeks later, you have not heard anything about your application, or received any money. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Looking for answers, you log into the Service Canada Digital Centre, and find a ",
                    },
                    {
                      nodeType: "text",
                      value: "new message",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value: " in your Inbox…",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Le Scénario",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Imaginez que vous vous appelez Mary. Vous ",
                    },
                    {
                      nodeType: "text",
                      value: "venez de perdre votre emploi ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value: "*et vous faites une demande *",
                      format: {
                        variants: ["strong", "emphasis"],
                      },
                    },
                    {
                      nodeType: "text",
                      value: "d'assurance-emploi",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        ". Deux ou trois semaines plus tard, vous n'avez toujours pas reçu de réponse à votre demande, ni d'argent. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "À la recherche de réponses, vous ouvrez une session au Centre numérique de Service Canada et vous voyez qu’il y a un ",
                    },
                    {
                      nodeType: "text",
                      value: "nouveau message",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value: " dans votre boîte de réception... ",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/alpha/dev/sclabs/components/content/virtual-assistant---about",
            scId: "sclabs-virtual-assistant-about",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "About the Service Canada Virtual Assistant",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Virtual Assistant is a chatbot. It can help you overcome obstacles you may face when applying for a benefit. This demo shows what it might be like for someone who is applying for Employment Insurance, but is missing a document.",
                    },
                  ],
                },
              ],
            },
            scContentFr: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "À propos de l’assistant virtuel de Service Canada",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "L'assistant virtuel est un robot conversationnel. Il peut vous aider à surmonter les obstacles que vous pourriez rencontrer lorsque vous faites une demande de prestation. Cette démonstration donne une idée de ce qui se passe lorsqu’une personne fait une demande d’assurance-emploi quand il lui manque un document.",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "sclabs-virtual-assistant-image-virtual-concierge",
            scImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/VirtualConcierge.svg",
            },
            scImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/VirtualConcierge.svg",
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "Virtual assistant logo",
            scImageAltTextFr: "Logo assistant virtuel",
            scImageCaptionEn: null,
            scImageCaptionFr: null,
          },
          {
            scId: "sclabs-button-meet-the-virtual-assistant",
            scTitleEn: "Meet the Virtual Assistant",
            scTitleFr: "Rencontrer l'assistant virtuel",
            scDestinationURLEn: "https://av-va.alpha.service.canada.ca/en",
            scDestinationURLFr: "https://av-va.alpha.service.canada.ca/fr",
            scButtonType: null,
          },
        ],
      },
    },
  },
};
