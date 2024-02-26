/* This file will be used to store mock AEM data for testing purposes*/

export const notSupportedData = {
  data: {
    scLabsErrorPageByPath: {
      item: {
        scGcImages: [
          {
            scId: "SCLABS-GOC-HEADER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
            },
            scImageAltTextEn: "Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-fr.svg",
            },
            scImageAltTextFr: "Gouvernement du Canada",
          },
          {
            scId: "SCLABS-GOC-FOOTER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextEn: "Symbol of the Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextFr: "Symbole du gouvernement du Canada",
          },
        ],
        scImageList: [
          {
            scId: "SCLABS-CRACKED-LIGHTBULB",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
            scImageAltTextEn: null,
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
            scImageAltTextFr: null,
          },
          {
            scId: "SCLABS-CHROME-LOGO",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/chrome.png",
            },
            scImageAltTextEn: "The Google Chrome browser logo",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/chrome.png",
            },
            scImageAltTextFr: "Le logo du navigateur Google Chrome",
          },
          {
            scId: "SCLABS-SAFARI-LOGO",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/safari.png",
            },
            scImageAltTextEn: "The Safari browser logo",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/safari.png",
            },
            scImageAltTextFr: "Le logo du navigateur Safari",
          },
          {
            scId: "SCLABS-EDGE-LOGO",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/edge.png",
            },
            scImageAltTextEn: "The Microsoft Edge browser logo",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/edge.png",
            },
            scImageAltTextFr: "Le logo du navigateur Microsoft Edge",
          },
          {
            scId: "SCLABS-FIREFOX-LOGO",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/firefox.svg",
            },
            scImageAltTextEn: "The Mozilla Firefox browser logo",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/firefox.svg",
            },
            scImageAltTextFr: "Le logo du navigateur Mozilla Firefox",
          },
        ],
        scContentEn: {
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
        scCopyToClipboardLabelEn: "Copy link",
        scBrowserDownloadLinksEn: {
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
        scContentFr: {
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
        scCopyToClipboardLabelFr: "Copier lien",
        scBrowserDownloadLinksFr: {
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
        scGcImages: [
          {
            scId: "SCLABS-GOC-HEADER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
            },
            scImageAltTextEn: "Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-fr.svg",
            },
            scImageAltTextFr: "Gouvernement du Canada",
          },
          {
            scId: "SCLABS-GOC-FOOTER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextEn: "Symbol of the Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextFr: "Symbole du gouvernement du Canada",
          },
        ],
        scImageList: [
          {
            scId: "SCLABS-CRACKED-LIGHTBULB",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
          },
        ],
        scContentEn: {
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
              nodeType: "paragraph",
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
        scContentFr: {
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
              nodeType: "paragraph",
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
                  value: "page d'accueil des laboratoires de Service Canada",
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
        scGcImages: [
          {
            scId: "SCLABS-GOC-HEADER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-en.svg",
            },
            scImageAltTextEn: "Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/sig-blk-fr.svg",
            },
            scImageAltTextFr: "Gouvernement du Canada",
          },
          {
            scId: "SCLABS-GOC-FOOTER-IMAGE",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextEn: "Symbol of the Government of Canada",
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/wmms-blk.svg",
            },
            scImageAltTextFr: "Symbole du gouvernement du Canada",
          },
        ],
        scImageList: [
          {
            scId: "SCLABS-CRACKED-LIGHTBULB",
            scImageEn: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
            scImageFr: {
              _path: "/content/dam/decd-endc/images/sclabs/crackedbulb.svg",
            },
          },
        ],
        scContentEn: {
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
              nodeType: "paragraph",
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
        scContentFr: {
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
              nodeType: "paragraph",
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
                  value: "page d'accueil des laboratoires de Service Canada",
                },
              ],
            },
          ],
        },
      },
    },
  },
};

export const homePageData = {
  data: {
    scLabsPagev1ByPath: {
      item: {
        scId: "SCLABS-HOME-PAGE",
        scPageNameEn: "/en/home",
        scPageNameFr: "/fr/accueil",
        scTitleEn: "Service Canada Labs",
        scTitleFr: "Laboratoires de Service Canada",
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
        scBreadcrumbParentPages: [],
        scSubject: [
          "gc:subjects/gv-government-and-politics/government-services",
        ],
        scKeywordsEn: "digital services",
        scKeywordsFr: "services numériques",
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2022-12-11",
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          width: 2932,
          height: 2078,
        },
        scSocialMediaImageFr: {
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          width: 2932,
          height: 2078,
        },
        scSocialMediaImageAltTextEn: null,
        scSocialMediaImageAltTextFr: null,
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/home---main-content",
            scId: "SCLABS-HOMEPAGE-MAIN-CONTENT",
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
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Service Canada Labs is an experimental corner of Canada.ca where we work on new ways of serving you. Here, you can explore projects in their early stages and help us improve them. We might even stop working on some ideas if we learn they’re not adding value and not meeting people’s needs. ",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Your feedback can shape tomorrow’s services",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Here is how you can help:",
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
                          value: "try out our projects",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "give your feedback",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Explore our projects",
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
                      value: "Laboratoires de Service Canada",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Aidez-nous à rendre les services numériques gouvernementaux plus simples et faciles à utiliser.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Les laboratoires de Service Canada sont un espace expérimental de Canada.ca où nous travaillons sur de nouvelles façons de vous servir. Vous pouvez y explorer des projets à leur stade initial et nous aider à les améliorer. Nous pourrions cesser de travailler sur certaines idées si nous découvrons qu'elles n'apportent pas de valeur ajoutée et ne répondent pas aux besoins des gens.",
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
                        "Vos commentaires peuvent façonner les services de demain",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Comment participer :",
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
                          value: "essayer nos projets",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "donner vos commentaires",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Explorez nos projets",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "SCLABS-HOMEPAGE-IMAGE",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
              width: 2932,
              height: 2078,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
              width: 2932,
              height: 2078,
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scImageCaptionEn: {
              json: null,
            },
            scImageCaptionFr: {
              json: null,
            },
          },
          {
            scId: "SITE-FEATURES-WORKS-IN-PROGRESS",
            scTitleEn: "This site features works in progress",
            scTitleFr: "Ce site présente des travaux en cours",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "You can't actually apply for benefits or services through this experimental website. To apply for benefits and services, visit ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html",
                      },
                      value: "Service Canada",
                    },
                    {
                      nodeType: "text",
                      value: ".",
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
                        "Vous ne pouvez pas demander des services ou des prestations ici. Pour demander des prestations ou des services, visitez le site de ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.canada.ca/fr/emploi-developpement-social/ministere/portefeuille/service-canada.html",
                      },
                      value: "Service Canada",
                    },
                    {
                      nodeType: "text",
                      value: ".",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  },
};

export const experimentsData = {
  data: {
    scLabsPagev1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/digital-centre",
          scId: "SCLABS-DIGITAL-CENTRE",
          scTitleEn: "Service Canada Digital Centre Overview",
          scTitleFr: "Aperçu du Centre numérique de Service Canada",
          scPageNameEn: "/en/projects/digital-centre",
          scPageNameFr: "/fr/projets/centre-numerique",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Explore our projects",
              scTitleFr: "Explorer nos projets",
              scPageNameEn: "/en/projects",
              scPageNameFr: "/fr/projets",
            },
          ],
          scShortTitleEn: null,
          scShortTitleFr: null,
          scDescriptionEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Our service will allow you to discover and manage your benefits. You will be able to use it while you are logged in or not. By sharing your preferences with our staff, you will only need to tell us who you are and what you need once.",
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
                      "Notre service vous permettra de découvrir et gérer vos prestations. Vous pourrez l'utiliser en y étant connecté ou pas. En partageant vos préférences avec notre personnel, vous n'aurez à nous dire qu'une seule fois qui vous êtes et vos besoins.",
                  },
                ],
              },
            ],
          },
          scSubject: null,
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: null,
          scOwner: null,
          scDateModifiedOverwrite: "2022-12-06",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2018,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2018,
          },
          scSocialMediaImageAltTextEn: "oas benefits estimator",
          scSocialMediaImageAltTextFr: "estimateur des prestations de la sv",
          scNoIndex: false,
          scNoFollow: false,
          scFragments: [],
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/upcoming"],
          scLabProjectStage: [""],
          scDateStarted: "2023-01-16",
          scDatePaused: "2023-01-16",
          scDateEnded: "2023-01-16",
          scLabProjectSummaryEn: {
            json: null,
          },
          scLabProjectSummaryFr: {
            json: null,
          },
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/having-a-child",
          scId: "SCLABS-HAVING-A-CHILD",
          scTitleEn: "Having a Child",
          scTitleFr: "Avoir un enfant",
          scPageNameEn: "/en/projects/life-journeys",
          scPageNameFr: "/fr/projects/life-journeys",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Explore our projects",
              scTitleFr: "Explorer nos projets",
              scPageNameEn: "/en/projects",
              scPageNameFr: "/fr/projets",
            },
          ],
          scShortTitleEn: "Having a Child",
          scShortTitleFr: "Avoir un enfant",
          scDescriptionEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Major life events like having a baby can be complicated because there are so many things to know. Our service supports you by connecting you to guidance to help you make the right decision for you. Come explore this early version of our New Child Journey Information Service.",
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
                      "Les événements importants de la vie, comme avoir un bébé, peuvent être compliqués car il y a plusieurs choses à savoir. Notre service vous aide en mettant à votre disposition des conseils pour vous aider à prendre les bonnes décisions pour vous. Venez explorer cette première version du service d'information sur le parcours de l'arrivée d'un nouvel enfant.",
                  },
                ],
              },
            ],
          },
          scSubject: null,
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: null,
          scOwner: null,
          scDateModifiedOverwrite: "2022-12-06",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/life-journeys/having-a-child-baby.jpg",
            width: 1740,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/life-journeys/having-a-child-baby.jpg",
            width: 1740,
          },
          scSocialMediaImageAltTextEn: "having a child life journey",
          scSocialMediaImageAltTextFr: "parcours de vie d'avoir un enfant",
          scNoIndex: false,
          scNoFollow: false,
          scFragments: [],
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/past"],
          scLabProjectStage: [""],
          scDateStarted: "2023-01-16",
          scDatePaused: "2023-01-16",
          scDateEnded: "2023-01-16",
          scLabProjectSummaryEn: {
            json: null,
          },
          scLabProjectSummaryFr: {
            json: null,
          },
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/overview",
          scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
          scTitleEn: "Old Age Security Benefits Estimator",
          scTitleFr:
            "Estimateur des prestations de la Sécurité de la vieillesse",
          scPageNameEn: "/en/projects/oas-benefits-estimator",
          scPageNameFr: "/fr/projets/estimateur-prestations-sv",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scShortTitleEn: null,
          scShortTitleFr: null,
          scDescriptionEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Whether you’re about to retire or preparing for the future, this tool helps you understand and navigate Old Age Security benefits.",
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
                      "Si vous prenez bientôt votre retraite ou si vous vous préparez pour l'avenir, cet outil vous aide à comprendre les prestations de la Sécurité de la vieillesse et à mieux vous y orienter.",
                  },
                ],
              },
            ],
          },
          scSubject: null,
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: null,
          scOwner: null,
          scDateModifiedOverwrite: "2023-01-19",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2018,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2018,
          },
          scSocialMediaImageAltTextEn:
            "Shows a piggy bank, a calculator, a pen and a pencil",
          scSocialMediaImageAltTextFr:
            "Montre une tirelire, une calculatrice, un stylo et un crayon",
          scNoIndex: false,
          scNoFollow: false,
          scFragments: [],
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStage: ["gc:custom/decd-endc/project-stage/beta"],
          scDateStarted: "2021-09-30",
          scDatePaused: "2023-02-08",
          scDateEnded: "2023-02-08",
          scLabProjectSummaryEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We’re gathering feedback on the estimator to make it as useful as possible for Canadian seniors. ",
                  },
                ],
              },
            ],
          },
          scLabProjectSummaryFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Nous recueillons des commentaires sur l'estimateur afin de le rendre aussi utile que possible pour les aînés canadiens.",
                  },
                ],
              },
            ],
          },
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/virtual-assistant/overview",
          scId: "VIRTUAL-ASSISTANT-OVERVIEW",
          scTitleEn: "Virtual Assistant",
          scTitleFr: "Assistant virtuel",
          scPageNameEn: "/en/projects/virtual-assistant",
          scPageNameFr: "/fr/projets/assistant-virtuel",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Explore our projects",
              scTitleFr: "Explorer nos projets",
              scPageNameEn: "/en/projects",
              scPageNameFr: "/fr/projets",
            },
          ],
          scShortTitleEn: null,
          scShortTitleFr: null,
          scDescriptionEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "The Service Canada Virtual Assistant is a conversational chatbot. It is designed to help you overcome common obstacles you may face when applying for a benefit.",
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
                      "L'assistant virtuel de Service Canada est un robot conversationnel. Il est conçu pour vous aider à surmonter les obstacles fréquents que vous pourriez rencontrer lorsque vous faites une demande de prestations.",
                  },
                ],
              },
            ],
          },
          scSubject: null,
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: null,
          scOwner: null,
          scDateModifiedOverwrite: "2022-12-06",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path: "/content/dam/decd-endc/images/sclabs/virtual-assistant.png",
            width: 1950,
          },
          scSocialMediaImageFr: {
            _path: "/content/dam/decd-endc/images/sclabs/virtual-assistant.png",
            width: 1950,
          },
          scSocialMediaImageAltTextEn: "virtual concierge",
          scSocialMediaImageAltTextFr: "concierge virtuel",
          scNoIndex: false,
          scNoFollow: false,
          scFragments: [],
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/past"],
          scLabProjectStage: ["gc:custom/decd-endc/project-stage/alpha"],
          scDateStarted: "2021-12-29",
          scDatePaused: "2022-03-28",
          scDateEnded: "2022-12-18",
          scLabProjectSummaryEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We've paused work on the Virtual Assistant due to lack of funding and resources needed to address significant technical barriers to implementation.",
                  },
                ],
              },
            ],
          },
          scLabProjectSummaryFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Nous avons interrompu le travail sur l'assistant virtuel en raison du manque de financement et de ressources nécessaires pour surmonter les importants obstacles techniques à la mise en œuvre.",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
};

export const projectUpdates = {
  data: {
    scLabsPagev1ByPath: {
      item: {
        scId: "WHAT-WE-LEARNED-BUILDING-THE-SERVICE-CANADA-VIRTUAL-ASSISTANT",
        scPageNameEn:
          "what-we-learned-building-service-canada-virtual-assistant ",
        scPageNameFr:
          "ce-que-nous-avons-appris-en-creant-assistant-virtuel-service-canada",
        scTitleEn:
          "What we learned building the Service Canada Virtual Assistant",
        scTitleFr:
          "Ce que nous avons appris en créant l'assistant virtuel de Service Canada",
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
        scDateModifiedOverwrite: "2022-12-18",
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
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/virtual-assistant/project-updates/va-update-1-content",
            scId: "VA-UPDATE-1-CONTENT",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "# What we learned building the Service Canada Virtual Assistant",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Virtual Assistant is a conversational chatbot designed to help Canadians overcome challenges they may face as they apply for and receive benefits.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "## Why was this project important to pursue?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Our goal with the Virtual Assistant was to start with user needs and build a prototype that shows how a user-friendly chatbot experience could be. From there, we can work backwards to identify what else needs to be in place to make it possible.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Many chatbots surface general information, but the Virtual Assistant provides personalized support to those who are signed into their accounts.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "By automating processes that recognize problems with applications, the four chatbot prototypes can help Canadians resolve issues with their EI or OAS applications on their own instead of having to call in for support.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "## Were you able to do research with Canadians? What did you learn?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We were able to do usability testing on one of our early designs with actual employment insurance (EI) recipients. Research participants found the chatbot to be intuitive and easy to use.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We're hoping that future user research will provide us with more feedback on how we could further improve the Virtual Assistant.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "## What has been the outcome of your work so far?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We've paused work on the Virtual Assistant due to lack of funding and resources needed to address significant technical barriers to implementation.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        'For the Virtual Assistant to work, it needs to access data from many different applications. The most effective way for applications to share data is through "application programming interfaces" (APIs), which allow two programs to talk to each other.',
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Unfortunately, the technical systems in our department can't yet provide the APIs we need to build a working version of the Virtual Assistant and no one is available to work on it right now. As a result, the Virtual Assistant is on hold until it is technically possible to launch.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Virtual Assistant is a benchmark of the type of service we aim to deliver to clients in the future, and we look forward to making it a reality.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
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
                        "# (FR) What we learned building the Service Canada Virtual Assistant",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Virtual Assistant is a conversational chatbot designed to help Canadians overcome challenges they may face as they apply for and receive benefits.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "## Why was this project important to pursue?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Our goal with the Virtual Assistant was to start with user needs and build a prototype that shows how a user-friendly chatbot experience could be. From there, we can work backwards to identify what else needs to be in place to make it possible.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Many chatbots surface general information, but the Virtual Assistant provides personalized support to those who are signed into their accounts.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "By automating processes that recognize problems with applications, the four chatbot prototypes can help Canadians resolve issues with their EI or OAS applications on their own instead of having to call in for support.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "## Were you able to do research with Canadians? What did you learn?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We were able to do usability testing on one of our early designs with actual employment insurance (EI) recipients. Research participants found the chatbot to be intuitive and easy to use.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We're hoping that future user research will provide us with more feedback on how we could further improve the Virtual Assistant.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "## What has been the outcome of your work so far?",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We've paused work on the Virtual Assistant due to lack of funding and resources needed to address significant technical barriers to implementation.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        'For the Virtual Assistant to work, it needs to access data from many different applications. The most effective way for applications to share data is through "application programming interfaces" (APIs), which allow two programs to talk to each other.',
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Unfortunately, the technical systems in our department can't yet provide the APIs we need to build a working version of the Virtual Assistant and no one is available to work on it right now. As a result, the Virtual Assistant is on hold until it is technically possible to launch.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Virtual Assistant is a benchmark of the type of service we aim to deliver to clients in the future, and we look forward to making it a reality.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "EXPLORE-THE-VIRTUAL-ASSISTANT",
            scTitleEn: "Explore the Virtual Assistant",
            scTitleFr: "Découvrez l'assistant virtuel",
            scContentEn: {
              json: null,
            },
            scContentFr: {
              json: null,
            },
            scImageEn: null,
            scImageFr: null,
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scLabsButton: [
              {
                scId: "EXPLORE-THE-VIRTUAL-ASSISTANT",
                scTitleEn: "Explore the Virtual Assistant",
                scTitleFr: "Découvrez l'assistant virtuel",
                scDestinationURLEn: "/en/projects/virtual-assistant/try-it-out",
                scDestinationURLFr: "/fr/projets/assistant-virtuel/lessayer",
                scButtonType: ["gc:custom/decd-endc/button-type/primary"],
              },
            ],
          },
        ],
      },
    },
  },
};

export const dictionaryData = {
  data: {
    dictionaryV1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/all",
          scId: "ALL",
          scTermEn: "All",
          scTermFr: "Tous",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/ended",
          scId: "ENDED",
          scTermEn: "Ended",
          scTermFr: "Fin",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by",
          scId: "FILTER-BY",
          scTermEn: "Filter by:",
          scTermFr: "Filtrer par :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/on-this-page",
          scId: "ON-THIS-PAGE",
          scTermEn: "On this page",
          scTermFr: "Sur cette page",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/optional-information",
          scId: "OPTIONAL-INFORMATION",
          scTermEn: "Optional information",
          scTermFr: "Renseignements optionnels",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/past-projects",
          scId: "PAST-PROJECTS",
          scTermEn: "Past projects",
          scTermFr: "Projets antérieurs",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/paused",
          scId: "PAUSED",
          scTermEn: "Paused",
          scTermFr: "Interrompu :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-stage",
          scId: "PROJECT-STAGE",
          scTermEn: "Project stage:",
          scTermFr: "Phase du projet :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/required-information",
          scId: "REQUIRED-INFORMATION",
          scTermEn: "Required information",
          scTermFr: "Renseignements obligatoires",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/started",
          scId: "STARTED",
          scTermEn: "Started:",
          scTermFr: "Début :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/summary",
          scId: "SUMMARY",
          scTermEn: "Summary",
          scTermFr: "Résumé :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/upcoming-projects",
          scId: "UPCOMING-PROJECTS",
          scTermEn: "Upcoming projects",
          scTermFr: "Projets à venir",
        },
      ],
    },
  },
};

export const oasBenefitsEstimatorData = {
  data: {
    sclabsPageV1ByPath: {
      item: {
        scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
        scPageNameEn: "/en/projects/oas-benefits-estimator",
        scPageNameFr: "/fr/projets/estimateur-prestations-sv",
        scTitleEn: "Old Age Security Benefits Estimator",
        scTitleFr: "Estimateur des prestations de la Sécurité de la vieillesse",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scLabProjectStage: ["gc:custom/decd-endc/project-stage/beta"],
        scLabProjectSummaryEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "We’re improving the estimator to make it as useful as possible for Canadian seniors. ",
                },
              ],
            },
          ],
        },
        scLabProjectSummaryFr: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Nous améliorons l'estimateur afin de le rendre aussi utile que possible pour les aînés canadiens. ",
                },
              ],
            },
          ],
        },
        scDescriptionEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Whether you’re about to retire or preparing for the future, this tool helps you understand and navigate Old Age Security benefits.",
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
                    "Si vous prenez bientôt votre retraite ou si vous vous préparez pour l'avenir, cet outil vous aide à comprendre les prestations de la Sécurité de la vieillesse et à mieux vous y orienter.",
                },
              ],
            },
          ],
        },
        scLabProjectUpdates: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/what-we-learned",
            scId: "WHAT-WE-LEARNED",
            scPageNameEn: "/en/projects/oas-benefits-estimator/what-we-learned",
            scPageNameFr:
              "/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",
            scTitleEn:
              "What we learned on Service Canada Labs before going live on Canada.ca",
            scTitleFr:
              "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",
            scShortTitleEn: null,
            scShortTitleFr: null,
            scBreadcrumbParentPages: [
              {
                scTitleEn: "Service Canada Labs",
                scTitleFr: "Laboratoires de Service Canada",
                scPageNameEn: "/en/home",
                scPageNameFr: "/fr/accueil",
              },
            ],
            scSubject: null,
            scKeywordsEn: null,
            scKeywordsFr: null,
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: null,
            scDateModifiedOverwrite: "2023-07-02",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
              height: 1543,
              width: 2670,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
              height: 1543,
              width: 2670,
            },
            scSocialMediaImageAltTextEn: "People giving feedback",
            scSocialMediaImageAltTextFr:
              "Personnes qui donnent de la rétroaction",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [
              {
                scId: "GIVE-FEEDBACK-OAS-ESTIMATOR",
                scTitleEn: "Give feedback",
                scTitleFr: "Fournir des commentaires",
                scDestinationURLEn:
                  "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=eng",
                scDestinationURLFr:
                  "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=fra",
                scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
              },
            ],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/how-feedback-is-shaping-the-estimator",
            scId: "HOW-FEEDBACK-SHAPING-ESTIMATOR",
            scPageNameEn:
              "/en/projects/oas-benefits-estimator/how-feedback-shaping",
            scPageNameFr:
              "/fr/projets/estimateur-prestations-sv/faconner-grace-retroaction",
            scTitleEn: "How feedback is shaping the estimator",
            scTitleFr: "Façonner l’estimateur grâce à la rétroaction",
            scShortTitleEn: null,
            scShortTitleFr: null,
            scBreadcrumbParentPages: [
              {
                scTitleEn: "Service Canada Labs",
                scTitleFr: "Laboratoires de Service Canada",
                scPageNameEn: "/en/home",
                scPageNameFr: "/fr/accueil",
              },
            ],
            scSubject: [
              "gc:subjects/gv-government-and-politics/government-services",
            ],
            scKeywordsEn: "feedback, benefits, estimator",
            scKeywordsFr: "rétroaction, prestations, estimateur",
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: ["gc:institutions/service-canada"],
            scDateModifiedOverwrite: "2023-12-12",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
              height: 1543,
              width: 2670,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
              height: 1543,
              width: 2670,
            },
            scSocialMediaImageAltTextEn:
              " Different kinds of feedback being gathered",
            scSocialMediaImageAltTextFr:
              " Un rassemblement de différents types de rétroaction",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/oas-benefits-estimator/project-updates/how-feedback-shaping-estimator/using-feedback",
                scId: "ESTIMATOR-USING-FEEDBACK",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Using feedback",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The estimator has proven to be user-friendly, but that didn't mean it was serving everyone’s needs. In fact, the initial feedback suggested there were specific things we needed to fix. Below, we show how we’ve used feedback with examples inspired by real survey responses. ",
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
                          value: "Utilisation de la rétroaction",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "L’estimateur a bien montré être convivial, mais cela ne veut pas dire qu’il répondait aux besoins de tout le monde. En effet, les commentaires initiaux suggéraient qu’il y avait des choses spécifiques que nous devions corriger. Nous montrons ci-dessous comment nous avons utilisé la rétroaction à l’aide d’exemples inspirés de vraies réponses au sondage. ",
                        },
                      ],
                    },
                  ],
                },
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/oas-benefits-estimator/project-updates/how-feedback-shaping-estimator/using-feedback-2",
                scId: "ESTIMATOR-USING-FEEDBACK-2",
                scContentEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Having access to feedback and being able to make quick updates has allowed us to add features like these and improve where you told us it matters most. We still have a lot of work to do and can’t address every pain point. But by grouping the feedback by topic, we can identify the most common concerns and prioritize solutions. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Here are examples of comments that represent common feedback themes and how we plan to address them: ",
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
                            "En ayant accès aux commentaires et en pouvant faire des mises à jour rapides, nous avons pu ajouter des fonctionnalités comme celles-ci et améliorer ce qui était le plus important pour vous. Nous avons encore beaucoup de travail à faire et nous ne pouvons pas résoudre toutes les difficultés. Mais en regroupant les commentaires par thème, nous pouvons identifier les problèmes les plus courants et prioriser les solutions. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Voici des exemples de commentaires qui illustrent des thèmes communs de la rétroaction et comment nous comptons y répondr",
                        },
                        {
                          nodeType: "span",
                          content: [
                            {
                              nodeType: "text",
                              value: "e :",
                            },
                          ],
                          data: {
                            class: "nowrap",
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/oas-benefits-estimator/project-updates/how-feedback-shaping-estimator/measuring-success",
                scId: "ESTIMATOR-MEASURING-SUCCESS",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Measuring success ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "After we implement solutions, we’re able to tell if an issue has been resolved through comments and ratings. If we’ve made the right improvements, we stop seeing the issue mentioned, and the ratings start showing positive trends. This allows us to measure the success of our new features and make sure that we’ve improved our clients’ experience. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "For example, we can look at our data from before and after the 2 initial fixes mentioned above. If we compare survey ratings from July to those in October, we see that: ",
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
                                "20% more people felt that the tool provided the information they needed ",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "15% more people said that the tool made them more aware of the benefits available to them ",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "To make sure the estimator stays user-friendly as it evolves, we’re also tracking its ease of use, which has stayed roughly the same at 80%. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "By looking at comments and analytics together, we can see how the changes were received and which pain points are resolved. ",
                        },
                      ],
                    },
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "What we’re doing next ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "We’ll keep monitoring our success indicators as we release updated versions of the estimator. In the meantime, keep sending us comments about your experience. We’re listening! ",
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
                          value: "Mesure du succès ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Après avoir mis en œuvre des solutions, nous pouvons savoir si un problème a été réglé grâce aux commentaires et aux évaluations. Si nous avons apporté les bonnes améliorations, le problème n’est plus mentionné et les évaluations montrent des tendances positives. Cela nous permet de mesurer le succès de nos nouvelles fonctionnalités et de nous assurer que nous avons amélioré l’expérience de nos clients. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Par exemple, nous pouvons regarder nos données avant et après les ",
                        },
                        {
                          nodeType: "span",
                          content: [
                            {
                              nodeType: "text",
                              value: "2 premières",
                            },
                          ],
                          data: {
                            class: "nowrap",
                          },
                        },
                        {
                          nodeType: "text",
                          value:
                            " corrections mentionnées ci-dessus. Si nous comparons les résultats du sondage de juillet à ceux d'octobre, nous constatons que : ",
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
                                "20 % plus de personnes ont trouvé que l’outil leur avait fourni les informations recherchées; ",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "15 % plus de personnes ont indiqué que l'outil les avait renseignés sur les prestations qui leur sont offertes. ",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Pour nous assurer que l’estimateur reste convivial à mesure qu’il évolue, nous surveillons également sa facilité d'utilisation, qui est restée stable à environ ",
                        },
                        {
                          nodeType: "span",
                          content: [
                            {
                              nodeType: "text",
                              value: "80 %",
                            },
                          ],
                          data: {
                            class: "nowrap",
                          },
                        },
                        {
                          nodeType: "text",
                          value: ". ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "En tenant compte à la fois des commentaires et des données analytiques, nous pouvons voir comment les changements ont été reçus et quelles sources de difficultés ont été éliminées. ",
                        },
                      ],
                    },
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Ce qui nous attend ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Nous surveillerons nos indicateurs de succès à mesure que nous publierons de nouvelles versions de l'estimateur. Entre-temps, continuez à nous envoyer des commentaires sur votre expérience. Nous sommes à l'écoute! ",
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        ],
        scBreadcrumbParentPages: [
          {
            scTitleEn: "Service Canada Labs",
            scTitleFr: "Laboratoires de Service Canada",
            scPageNameEn: "/en/home",
            scPageNameFr: "/fr/accueil",
          },
        ],
        scSubject: [
          "gc:subjects/gv-government-and-politics/government-services",
        ],
        scKeywordsEn: "digital services",
        scKeywordsFr: "services numériques",
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2023-03-03",
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path:
            "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
          height: 1543,
          width: 2670,
        },
        scSocialMediaImageFr: {
          _path:
            "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
          height: 1543,
          width: 2670,
        },
        scSocialMediaImageAltTextEn:
          " Older couple using the estimator on a computer",
        scSocialMediaImageAltTextFr:
          " Couple âgé qui utilise l'estimateur sur un ordinateur",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/oas-benefits-estimator/main-content",
            scId: "OAS-BENEFITS-ESTIMATOR-MAIN-CONTENT",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Old Age Security Benefits Estimator",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "This estimator helps you find the Old Age Security (OAS) benefits you're eligible for and estimates your monthly payments.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2021-10",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Beta",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We’re improving the estimator to make it as useful as possible for Canadian seniors.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Estimate your benefits and let us know what you think! ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Discover the Old Age Security benefits",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Whether you’re going through a life event or about to retire, this tool helps you understand and navigate Old Age Security benefits. You don’t even have to sign in. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "By launching the Old Age Security Benefits Estimator, we want to make access to benefits easier, from the discovery to the application process.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Old Age Security Benefits Estimator will let you know if you’re eligible and when you can apply. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "If you haven’t already, let us know what you think of the estimator.",
                      format: {
                        variants: ["strong"],
                      },
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
                      value:
                        "Estimateur des prestations de la Sécurité de la vieillesse",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Cet estimateur vous aide à trouver les prestations de la Sécurité de la vieillesse (SV) auxquelles vous êtes admissible et estime vos paiements mensuels.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2021-10",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Bêta",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous améliorons l'estimateur afin de le rendre aussi utile que possible pour les aînés canadiens. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Estimez vos prestations et dites-nous ce que vous en pensez! ",
                      format: {
                        variants: ["strong"],
                      },
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
                        "Découvrez les prestations de la Sécurité de la vieillesse ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Si vous traversez un événement de la vie ou prenez bientôt votre retraite, cet outil vous aide à comprendre les prestations de la Sécurité de la vieillesse et à mieux vous y orienter. Vous n'avez même pas besoin d'ouvrir une session.   ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "En lançant l'Estimateur des prestations de la Sécurité de la vieillesse, nous voulons faciliter l'accès aux prestations, du processus de découverte à celui de la demande.   ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "L'Estimateur des prestations de la Sécurité de la vieillesse vous permettra de savoir si vous êtes admissible et quand vous pouvez présenter votre demande. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Si vous ne l’avez pas déjà fait, dites-nous ce que vous pensez de l’estimateur. ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "OVERVIEW",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn: "Older couple using the estimator on a computer",
            scImageAltTextFr:
              "Couple âgé qui utilise l'estimateur sur un ordinateur",
            scImageCaptionEn: {
              json: null,
            },
            scImageCaptionFr: {
              json: null,
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/tooltips/information-beta",
            scId: "INFORMATION-BETA-SCLABS",
            scTitleEn: "Information",
            scTitleFr: "Information",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Beta: ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Continuing to improve a usable tool or service while collecting feedback.",
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
                      value: "Bêta : ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Continuer d’améliorer un outil ou un service fonctionnel et obtenir de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/beta-definition",
            scId: "BETA-DEFINITION",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Beta: ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Continuing to improve a usable tool or service while collecting feedback.",
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
                      value: "Bêta :",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        " Continuer d’améliorer un outil ou un service fonctionnel et obtenir de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "TRY-THE-ESTIMATOR",
            scTitleEn: "Try the estimator",
            scTitleFr: "Essayer l'estimateur",
            scDestinationURLEn: "https://ep-be.alpha.service.canada.ca/en",
            scDestinationURLFr: "https://ep-be.alpha.service.canada.ca/fr",
            scButtonType: ["gc:custom/decd-endc/button-type/primary"],
          },
          {
            scId: "GIVE-FEEDBACK-OAS-ESTIMATOR",
            scTitleEn: "Give feedback",
            scTitleFr: "Fournir des commentaires",
            scDestinationURLEn:
              "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=eng",
            scDestinationURLFr:
              "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=fra",
            scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
          },
        ],
      },
    },
  },
};

export const oasUpdatesData = [
  {
    _path:
      "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/what-we-learned",
    scId: "WHAT-WE-LEARNED",
    scPageNameEn: "/en/projects/oas-benefits-estimator/what-we-learned",
    scPageNameFr:
      "/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",
    scTitleEn:
      "What we learned on Service Canada Labs before going live on Canada.ca",
    scTitleFr:
      "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",
    scShortTitleEn: null,
    scShortTitleFr: null,
    scBreadcrumbParentPages: [
      {
        scTitleEn: "Service Canada Labs",
        scTitleFr: "Laboratoires de Service Canada",
        scPageNameEn: "/en/home",
        scPageNameFr: "/fr/accueil",
      },
      {
        scTitleEn: "Old Age Security Benefits Estimator",
        scTitleFr: "Estimateur des prestations de la Sécurité de la vieillesse",
        scPageNameEn: "/en/projects/oas-benefits-estimator",
        scPageNameFr: "/fr/projets/estimateur-prestations-sv",
      },
    ],
    scSubject: null,
    scKeywordsEn: null,
    scKeywordsFr: null,
    scContentType: ["gc:content-types/promotional-material-featured-articles"],
    scOwner: null,
    scDateModifiedOverwrite: "2023-07-02",
    scAudience: null,
    scRegion: null,
    scSocialMediaImageEn: {
      _path:
        "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
      _publishUrl:
        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
      width: 2670,
      height: 1543,
    },
    scSocialMediaImageFr: {
      _path:
        "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
      _publishUrl:
        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
      width: 2670,
      height: 1543,
    },
    scSocialMediaImageAltTextEn: "People giving feedback",
    scSocialMediaImageAltTextFr: "Personnes qui donnent de la rétroaction",
    scNoIndex: false,
    scNoFollow: false,
    scFragments: [
      {
        _model: {
          title: "SCLabs-Comp-Content-Image-v1",
        },
        scId: "ESTIMATOR-WHAT-WE-LEARNED",
        scLabContent: [
          {
            scId: "OAS-BENEFITS-ESTIMATOR-WHAT-WE-LEARNED",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "What we learned on Service Canada Labs before going live on Canada.ca",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "On April 12, 2023, we released an alpha version of the Old Age Security Benefits Estimator to the public. The tool was still in an early development phase, but it was working. We knew the earlier we let everyone use it, the earlier we'd get real feedback.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Since then, over 4,000 people tried it out, and around 200 provided feedback. Here’s what we learned from the feedback collected in our alpha phase, how it’s helping us improve our tool and what’s next for our beta phase.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Asking experts what they think ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Ideally, the estimator could save someone a trip or a call to Service Canada. That's why we wanted to know if it answered the most common questions about Old Age Security benefits. To find out, we asked Service Canada employees. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "They confirmed that the estimator was able to give answers to common questions about: ",
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
                          value: "who these benefits are for ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "how much they can expect to receive ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "when they can expect to receive a letter from Service Canada ",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "They told us about other questions they get often, and if they found any missing information. Some even gave us ideas to make this tool even more useful for Canadians. We'll be assessing these during our beta phase and will use this information to continuously improve the estimator. ",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Using data to improve questions ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We were lucky enough to be able to use data from a similar tool while we were on Service Canada Labs. This helped us gather information about the questions we were asking. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "In alpha, entering an income in the estimator was optional. We wanted to give clients a choice. However, we realized, through our survey, that people were looking for a precise amount in the results. Only providing the maximum income to receive a benefit wasn’t enough. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The other tool required clients to enter an income. So, we looked at their data. There was nothing to indicate that people didn’t want to do this. The question didn’t stop them from using the tool. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "To give better results, we decided to require income in our beta estimator. This way, we can provide an amount to everyone whose income qualifies, while being confident that the tool is just as easy to use. ",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Making improvements based on client feedback ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Our main goal for the alpha phase was to get people using the tool and get as much feedback as possible. Anyone who used our tool during our alpha phase could give us their thoughts through an anonymous feedback survey. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We read all the comments and ratings and found it very valuable. Through our survey, we found out that: ",
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
                          value: "90% thought the tool was easy to use ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "73% were more aware of the benefits available to them ",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Some were satisfied, some had questions, and others wanted to see different features. From the survey responses, we’ve identified the main improvements clients want to see. Many wanted: ",
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
                            "the ability to get an estimate from a younger age ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "more clarity about which types of income affect benefits ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "to have more information about their partner’s results ",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We’ve already started working on these features and other adjustments. For example, in the beta version now on Canada.ca, we’ve added more detailed and visible results for partners. We’re looking forward to having this improvement and other tweaks make the tool better for Canadians. ",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Share your feedback ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We’re still collecting and addressing feedback! The estimator is still in active development and will be evolving to better meet your needs throughout the beta. Expect to see some changes! ",
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
                      value:
                        "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le 12 avril 2023, nous avons publié une version alpha de l’Estimateur des prestations de la Sécurité de la vieillesse. L’outil était encore dans une phase de développement préliminaire, mais il fonctionnait. Nous savions que nous pourrions obtenir de la véritable rétroaction plus tôt si nous permettions à tout le monde de l’utiliser. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Depuis, plus de 4 000 personnes l’ont essayé et environ 200 ont donné leur rétroaction. Voici ce que nous avons appris des avis recueillis au cours de notre phase alpha, comment ils nous aident à améliorer notre outil et ce qui nous attend pour notre phase bêta. ",
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
                      value: "Demander aux experts ce qu’ils en pensent ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Idéalement, l’estimateur pourrait épargner à quelqu’un un voyage ou un appel à Service Canada. Voilà pourquoi nous voulions savoir s’il répondait aux questions les plus fréquentes sur les prestations de la Sécurité de la vieillesse. Pour le savoir, nous avons consulté les employés de Service Canada. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Ils ont confirmé que l’estimateur répondait aux questions les plus courantes concernant : ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
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
                          value: "à qui s’adressent ces prestations; ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "le montant qu’ils peuvent s’attendre à recevoir; ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "quand ils peuvent s’attendre à recevoir une lettre de Service Canada. ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Ils nous ont fait part d’autres questions qui leur sont souvent posées et nous ont dit s’ils avaient trouvé des informations manquantes. Certains nous ont même donné des idées pour rendre cet outil encore plus utile pour la population canadienne. Nous évaluerons ces idées au cours de notre phase bêta et nous utiliserons ces informations pour continuer à améliorer l’estimateur. ",
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
                        "Utiliser des données pour améliorer les questions ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous avions la chance de pouvoir utiliser les données d’un outil similaire lorsque nous étions sur les laboratoires de Service Canada. Cela nous a permis de recueillir des informations sur nos questions. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Dans la version alpha, il était facultatif de saisir un revenu dans I’estimateur. Nous voulions donner le choix aux clients. Cependant, nous nous sommes rendu compte, grâce à notre sondage, que les gens recherchaient un montant précis dans les résultats. Indiquer le revenu maximum pour recevoir une prestation n’était pas suffisant. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "L’autre outil exigeait que les clients entrent un revenu. Nous avons donc examiné leurs données. Rien n’indiquait que les gens ne voulaient pas remplir ce champ. La question ne les empêchait pas d’utiliser l’outil. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Pour fournir de meilleurs résultats, nous avons décidé d’exiger un revenu dans notre estimateur bêta. De cette manière, nous pouvons fournir un montant à toutes les personnes dont le revenu est admissible, tout en étant assurés que l’outil est tout aussi facile à utiliser. ",
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
                        "Apporter des améliorations à partir de la rétroaction des clients ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Notre objectif principal pour la phase alpha était d’amener les gens à utiliser l’outil et de recevoir le plus de rétroaction possible. Toute personne ayant utilisé notre outil pendant la phase alpha pouvait nous faire part de ses impressions en répondant à un sondage anonyme. ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous avons lu tous les commentaires et évaluations et les avons trouvés très utiles. Notre sondage nous a permis de constater que : ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
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
                            "90 % ont trouvé que l’outil était facile à utiliser; ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "73 % étaient plus conscients des prestations qui leur étaient offertes. ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Certains étaient satisfaits, certains avaient des questions et d’autres voulaient voir d’autres fonctionnalités. À partir des réponses au sondage, nous avons identifié les principales améliorations souhaitées par les clients. De nombreuses personnes voulaient : ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
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
                            "pouvoir obtenir une estimation d’un plus jeune âge;   ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "plus de clarté sur les types de revenus qui affectent les prestations;  ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "avoir plus d’information sur les résultats de leur partenaire.   ",
                        },
                        {
                          nodeType: "line-break",
                          content: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous avons déjà commencé à travailler sur ces fonctionnalités et sur d’autres ajustements. Par exemple, dans la version bêta actuellement disponible sur Canada.ca, nous avons ajouté des résultats plus détaillés et plus visibles pour les partenaires. Nous avons hâte de voir cette amélioration et d’autres mises à jour améliorer l’outil pour tous. ",
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
                      value: "Partagez votre avis ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous continuons à recueillir et à intégrer la rétroaction! L’estimateur est encore en développement actif et évoluera pour mieux répondre à vos besoins tout au long de la version bêta. Attendez-vous à voir des changements! ",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        scLabImage: {
          scId: "WHAT-WE-LEARNED",
          scImageEn: {
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
            width: 2670,
            height: 1543,
          },
          scImageFr: {
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
            width: 2670,
            height: 1543,
          },
          scImageMobileEn: null,
          scImageMobileFr: null,
          scImageAltTextEn: null,
          scImageAltTextFr: null,
          scImageCaptionEn: {
            json: null,
          },
          scImageCaptionFr: {
            json: null,
          },
        },
        scLabLayout: "default",
      },
      {
        _model: {
          title: "SCLabs-Button-v1",
        },
        scId: "GIVE-FEEDBACK-OAS-ESTIMATOR",
        scTitleEn: "Give feedback",
        scTitleFr: "Fournir des commentaires",
        scDestinationURLEn:
          "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=eng",
        scDestinationURLFr:
          "https://srv217.services.gc.ca/ihst4/Intro.aspx?cid=74938e05-8e91-42a9-8e9d-29daf79f6fe0&lc=fra",
        scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
      },
    ],
  },
];
