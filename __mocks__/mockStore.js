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
    sclabsPageV1ByPath: {
      item: {
        _path: "/content/dam/decd-endc/content-fragments/sclabs/pages/home",
        scId: "PAGES-HOME",
        scTitleEn: "Service Canada Labs",
        scTitleFr: "Laboratoires de Service Canada",
        scPageNameEn: "/en/home",
        scPageNameFr: "/fr/accueil",
        scBreadcrumbParentPages: [],
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
        scSubject: [
          "gc:subjects/gv-government-and-politics/government-services",
        ],
        scKeywordsEn: "digital services",
        scKeywordsFr: "services numériques",
        scContentType: null,
        scOwner: null,
        scDateIssued: "2023-04-10",
        scDateModifiedOverwrite: null,
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path: "/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          width: 2932,
          height: 2078,
        },
        scSocialMediaImageFr: {
          _path: "/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/homePage_image1.png",
          width: 2932,
          height: 2078,
        },
        scSocialMediaImageAltTextEn: "People adding icons to a mobile screen",
        scSocialMediaImageAltTextFr:
          "Personnes ajoutant des icônes à un écran mobile",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _model: {
              title: "SCLabs-Comp-Content-Image-v1",
            },
            scId: "COMP-IMAGE-HOME-INTRO",
            scLabContent: [
              {
                _model: {
                  title: "SCLabs-Content-v1",
                },
                scId: "CONTENT-HOME-MAIN",
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
                            "Help us make government digital services simple and easy to use. ",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Service Canada Labs is an experimental corner of Canada.ca where we work on new ways of serving you. Here, you can explore projects in their early stages and help us improve them. We might even stop working on some ideas if we learn they're not adding value and not meeting people's needs. ",
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
                          value: "Your feedback can shape tomorrow's services",
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
                              value: "provide your feedback",
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
                  ],
                },
              },
            ],
            scLabImage: {
              _model: {
                title: "SCLabs-Image-v1",
              },
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
              scLongDescHeadingEn: null,
              scLongDescHeadingFr: null,
              scLongDescEn: {
                json: null,
              },
              scLongDescFr: {
                json: null,
              },
            },
            scLabLayout: "default",
          },
          {
            _model: {
              title: "SCLabs-Feature-v1",
            },
            scId: "FEATURE-SC-LABS-FEEDBACK-SURVEY",
            scTitleEn: "Tell us what you think of Service Canada Labs",
            scTitleFr:
              "Dites-nous ce que vous pensez des laboratoires de Service Canada",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "You can help shape this website too. Take a few minutes to tell us about your experience.",
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
                        "Vous pouvez aussi contribuer à l'élaboration de ce site Web. Prenez quelques minutes pour nous faire part de votre expérience.",
                    },
                  ],
                },
              ],
            },
            scImageEn: null,
            scImageFr: null,
            scImageAltTextEn: null,
            scImageAltTextFr: null,
            scFragments: [],
            scLabsButton: [
              {
                scId: "BUTTON-SC-LABS-FEEDBACK-SURVEY",
                scTitleEn: "Take the survey",
                scTitleFr: "Répondre au sondage",
                scDestinationURLEn:
                  "https://forms-formulaires.alpha.canada.ca/en/id/cm0mjtvrg0014330vn6blw3pi",
                scDestinationURLFr:
                  "https://forms-formulaires.alpha.canada.ca/fr/id/cm0mjtvrg0014330vn6blw3pi",
                scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
              },
            ],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-explore-projects",
            _model: {
              title: "SCLabs-Content-v1",
            },
            scId: "CONTENT-HOME-EXPLORE-PROJECTS",
            scContentEn: {
              json: [
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
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/alerts/site-features-works-in-progress",
            _model: {
              title: "SCLabs-Alert-v1",
            },
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
            scAlertType: ["gc:custom/decd-endc/alert-type/information"],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-see-all-projects",
            _model: {
              title: "SCLabs-Content-v1",
            },
            scId: "CONTENT-HOME-SEE-ALL-PROJECTS",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "/en/projects",
                      },
                      value: "See all projects",
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
                      nodeType: "link",
                      data: {
                        href: "/fr/projets",
                      },
                      value: "Consulter tous les projets",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-read-updates",
            _model: {
              title: "SCLabs-Content-v1",
            },
            scId: "CONTENT-HOME-READ-UPDATES",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Read our latest project updates",
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
                        "Consultez les récentes mises à jour de nos projets",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-see-all-updates",
            _model: {
              title: "SCLabs-Content-v1",
            },
            scId: "CONTENT-HOME-SEE-ALL-UPDATES",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "link",
                      data: {
                        href: "/en/updates",
                      },
                      value: "See all updates",
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
                      nodeType: "link",
                      data: {
                        href: "/fr/mises-a-jour",
                      },
                      value: "Consulter toutes les mises à jour",
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
            height: 1000,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2018,
            height: 1000,
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
      ],
    },
  },
};

export const projectUpdates = {
  data: {
    sclabsPageV1List: {
      items: [
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
            {
              scTitleEn: "Old Age Security Benefits Estimator",
              scTitleFr:
                "Estimateur des prestations de la Sécurité de la vieillesse",
              scPageNameEn: "/en/projects/oas-benefits-estimator",
              scPageNameFr: "/fr/projets/estimateur-prestations-sv",
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
            width: 2670,
            height: 1543,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
            width: 2670,
            height: 1543,
          },
          scSocialMediaImageAltTextEn:
            " Different kinds of feedback being gathered",
          scSocialMediaImageAltTextFr:
            " Un rassemblement de différents types de rétroaction",
          scNoIndex: false,
          scNoFollow: false,
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "ESTIMATOR-REVIEWING-FEEDBACK",
              scLabContent: [
                {
                  scId: "ESTIMATOR-REVIEWING-FEEDBACK",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value: "How feedback is shaping the estimator ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "There are many ways to do usability research and use insights to improve client experience. In our beta phase, one of the ways we’re doing this is by collecting feedback from people who try the Old Age Security Benefits Estimator through a survey. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "About 450 visitors have sent responses. This has allowed us to analyze feedback and prioritize changes that are important to our clients. We can see what works and what doesn’t in order to refine the estimator based on their needs. ",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Reviewing feedback ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Every week, our product team meets for “Feedback Friday” to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We then organize the survey responses by topic (this is called “affinity mapping”). This gives us a wide view of problem areas and their progression over time. If we see the same comment come up a few times, we know we should take a closer look at what we can do to resolve the issue.",
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
                              "Façonner l’estimateur grâce à la rétroaction ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Il y a de nombreuses façons de mener des recherches sur la convivialité et d’utiliser les résultats pour améliorer l’expérience client. Dans notre phase bêta, nous avons notamment recueilli la rétroaction des personnes qui essaient l’Estimateur des prestations de la Sécurité de la vieillesse au moyen d’un sondage. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Environ 450 visiteurs y ont répondu. Cela nous a permis d’analyser la rétroaction et de prioriser les changements qui sont importants pour nos clients. Nous pouvons voir ce qui fonctionne et ce qui ne fonctionne pas afin d’améliorer l’estimateur en fonction de leurs besoins. ",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Analyse de la rétroaction ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Chaque semaine, notre équipe de produit se réunit pour le ",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "« v",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "endredi rétroactio",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "n » ",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              "afin de trier toutes les nouvelles réponses au sondage. Nous regardons les évaluations et les commentaires que les gens ont partagés avec nous sur leur expérience. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nous organisons ensuite les commentaires par thème (c’est ce qu’on appelle la ",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "« c",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "artographie des affinité",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "s »",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              "). Cela nous permet d’avoir une vue d’ensemble des problèmes et de leur évolution dans le temps. Si le même commentaire revient plusieurs fois, nous savons que nous devrions examiner de plus près ce que nous pouvons faire pour résoudre le problème. ",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              scLabImage: {
                scId: "ESTIMATOR-HOW-FEEDBACK-SHAPING",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
                  width: 2670,
                  height: 1543,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
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
                title: "SCLabs-Content-v1",
              },
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
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-FUTURE-ESTIMATE-COMMENT-1",
              scLabContent: [
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "I didn’t like having to change my birth year to get an estimate",
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
                              "Je n’aimais pas devoir changer mon année de naissance pour avoir une estimation",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We now generate results that give future estimates to those who aren’t eligible yet. ",
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
                              "Nous générons maintenant des résultats qui donnent des estimations futures aux personnes qui ne sont pas encore admissibles. ",
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
              scLabLayout: "quote",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-DEFERRED-AMOUNT-COMMENT-2",
              scLabContent: [
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "It should show the benefit to deferral if I start to receive after 65",
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
                              "On devrait montrer l’avantage d’un report si je commence à recevoir après 65 ans",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We now automatically show a personalized deferred amount to everyone older than 65. ",
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
                              "Nous affichons maintenant automatiquement un montant reporté personnalisé pour toutes les personnes âgées de plus de 65 ans.",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              scLabLayout: "quote",
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-INCOME-QUESTION-COMMENT-3",
              scLabContent: [
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "The income question isn’t clear",
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
                            value: "La question du revenu n’est pas claire",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Our new question will clarify the types of income to include and calculate how much of your work income is exempted. ",
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
                              "Notre nouvelle question clarifiera les types de revenus à inclure et calculera la part de votre revenu lié au travail qui est exemptée. ",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              scLabLayout: "quote",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-ESTIMATE-COMMENT-4",
              scLabContent: [
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "I wasn’t given an estimate",
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
                            value: "Je n’ai pas reçu d’estimation",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  scContentEn: {
                    json: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We’ve already added $0 amounts to estimates to remove ambiguity. We’re also going to be changing the look of the results to make information easier to find. ",
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
                            value: "Nous avons déjà ajouté des montants de ",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "0 $",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              " aux estimations afin de résoudre l’ambiguïté. Nous allons également modifier la présentation des résultats pour que les informations soient plus faciles à trouver. ",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              scLabLayout: "quote",
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
              scTitleFr:
                "Estimateur des prestations de la Sécurité de la vieillesse",
              scPageNameEn: "/en/projects/oas-benefits-estimator",
              scPageNameFr: "/fr/projets/estimateur-prestations-sv",
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
          scSocialMediaImageAltTextFr:
            "Personnes qui donnent de la rétroaction",
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
                            value:
                              "Making improvements based on client feedback ",
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
      ],
    },
  },
};

export const dictionaryData = {
  data: {
    dictionaryV1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sch/dictionary/opens-in-a-new-tab",
          scId: "opens-in-a-new-tab",
          scTermEn: "(Opens in a new tab)",
          scTermFr: "(S'ouvre dans un nouvel onglet)",
        },
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
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/explore-other-projects",
          scId: "EXPLORE-OTHER-PROJECTS",
          scTermEn: "Explore other projects",
          scTermFr: "Explorez d'autres projets",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/explore-the-project",
          scId: "EXPLORE-THE-PROJECT",
          scTermEn: "Explore the project",
          scTermFr: "Explorez le projet",
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
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project",
          scId: "DICTIONARY-FILTER-BY-PROJECT",
          scTermEn: "Filter by project",
          scTermFr: "Filtrer par projet",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project-status",
          scId: "DICTIONARY-FILTER-BY-PROJECT-STATUS",
          scTermEn: "Filter by project status",
          scTermFr: "Filtrer par état du projet",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/last-updated",
          scId: "LAST-UPDATED",
          scTermEn: "Last updated:",
          scTermFr: "Dernière mise à jour :",
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
          scTermEn: "Paused:",
          scTermFr: "Interrompu :",
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/posted-on",
          scId: "POSTED-ON",
          scTermEn: "Posted on:",
          scTermFr: "Publié le :",
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
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-updates",
          scId: "PROJECT-UPDATES",
          scTermEn: "Project updates",
          scTermFr: "Mises à jour du projet",
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
            "/content/dam/decd-endc/content-fragments/sclabs/dictionary/see-all-updates-project",
          scId: "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
          scTermEn: "See all updates about this project",
          scTermFr: "Consulter toutes les mises à jour de ce projet",
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
          scTermEn: "Summary:",
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
            scLabProject: {
              scTermEn: "OAS Benefits Estimator",
              scTermFr:
                "Estimateur des prestations de la Sécurité de la vieillesse",
            },
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
            scLabProject: {
              scTermEn: "OAS Benefits Estimator",
              scTermFr:
                "Estimateur des prestations de la Sécurité de la vieillesse",
            },
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
export const [oasUpdatesData] = [
  oasBenefitsEstimatorData.data.sclabsPageV1ByPath.item.scLabProjectUpdates,
];

export const playbookData = {
  data: {
    sclabsPageV1ByPath: {
      item: {
        scId: "PLAYBOOK-OVERVIEW",
        scPageNameEn: "/en/projects/digital-standards-playbook",
        scPageNameFr: "/fr/projets/guide-normes-numeriques",
        scTitleEn: "Digital Standards Playbook",
        scTitleFr: "Guide sur les normes relatives au numérique",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scLabProjectStage: ["gc:custom/decd-endc/project-stage/discovery"],
        scLabProjectSummaryEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "We want to show how to apply the Digital Standards by using them to improve the Playbook to make it more useful for public servants.",
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
                    "Par l'utilisation des normes numériques, notre objectif est d'améliorer le Guide en continu afin de le rendre plus utile pour les fonctionnaires.",
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
                    "A guide to help teams deliver services that meet client needs.",
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
                    "Un Guide pour aider les équipes à fournir des services qui répondent aux besoins de la clientèle.",
                },
              ],
            },
          ],
        },
        scLabProjectUpdates: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/digital-standards-playbook/updates/awareness-use-gaps",
            scId: "AWARENESS-USE-GAPS",
            scPageNameEn:
              "/en/projects/digital-standards-playbook/awareness-use-gaps",
            scPageNameFr:
              "/fr/projets/guide-normes-numeriques/connaissance-utilisation-lacunes",
            scTitleEn:
              "What we learned about awareness, use and gaps of the digital standards playbook",
            scTitleFr:
              "Ce que nous avons appris sur la connaissance, l'utilisation et les lacunes du guide sur les normes relatives au numérique",
            scLabProject: {
              scTermEn: "Digital Standards Playbook",
              scTermFr: "Guide sur les normes relatives au numérique",
            },
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
              "gc:subjects/pr-processes/design",
              "gc:subjects/pr-processes/standards",
              "gc:subjects/in-information-and-communications/information/government-information",
            ],
            scKeywordsEn: null,
            scKeywordsFr: null,
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: ["gc:institutions/service-canada"],
            scDateModifiedOverwrite: "2024-01-30",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
              height: 600,
              width: 900,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
              height: 600,
              width: 900,
            },
            scSocialMediaImageAltTextEn: "Woman checking a giant check list",
            scSocialMediaImageAltTextFr:
              "Femme vérifiant une liste de contrôle géante",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [
              {
                scId: "AWARENESS-USE-GAPS-FIG1",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-awareness-fig1-eng.jpg",
                  width: 1912,
                  height: 1157,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-awareness-fig1-fra.jpg",
                  width: 1912,
                  height: 1148,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn:
                  "Awareness and use of the digital standards playbook (bar graph)",
                scImageAltTextFr:
                  "Connaissance et utilisation du guide sur les normes relatives au numérique (diagramme en barres)",
                scImageCaptionEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "Figure 1",
                        },
                      ],
                    },
                  ],
                },
                scImageCaptionFr: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "Figure 1",
                        },
                      ],
                    },
                  ],
                },
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/digital-standards-playbook/updates/awareness-use-gaps-main",
                scId: "AWARENESS-USE-GAPS-MAIN-CONTENT",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Themes missing from the playbook",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            'In our survey, we gave examples of information we could add to the digital standard "Design with users." For example, why the standard is important, relevant policies, and sample activities in each service design phase. We asked people if they thought this information would be helpful.',
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
                            "Here are some of the things we heard that should be in the playbook:",
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
                          value: "Guidance on how to design with users:",
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
                                "how to convince executives to design services with users",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "how to know if a solution is the right one",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "when and how to experiment",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "how to design services in government",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "how to regularly measure success",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "how to define user groups",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "how to plan and organize user research and testing",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "how to find and compensate people who participate in user testing",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "how to collect and use data to improve services",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "how to apply this guidance no matter which process teams use to improve services",
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
                          value: "Information on:",
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
                              value: "usability and accessibility practices",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                'terms associated with digital work; for example, "digital" and "design"',
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "what kinds of government services the digital standards apply to",
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
                          value: "We also received suggestions to:",
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
                                "make sure the playbook is written in plain language",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "not put too much in the playbook",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "make sure the playbook is designed for the audience it's intended to",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "explain how to define users and make sure that user testing reflects the user population",
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
                          value: "Changing the playbook isn't enough",
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
                            "Many people shared that an update to the playbook isn't what they need to help them understand and use the digital standards in their work. Instead, they wanted help removing obstacles that make it hard to follow the standards.",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Here are some examples of the obstacles that people said need to be removed:",
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
                                "the policy requirements are unclear, and no tools exist to make them easy to find or understand",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "it's not clear if the digital standards are mandatory",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "there is no governance to ensure everyone follows the digital standards",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "the rules for managing projects and finances in departments make it hard for teams to follow the digital standards",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "teams don't have enough training and mentorship to learn how to use the digital standards",
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
                          value: "Share your feedback",
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
                            "The feedback we've received so far has been very helpful. If you haven't shared your thoughts yet, you still can. We are still collecting feedback!",
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
                            "We will be using the survey responses and comments to do some more thinking about what teams need to help them design services. Stay tuned. Our next update will explain how we're using your feedback in shaping guidance on the digital standards.",
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
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Thèmes manquants dans le guide",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Dans notre sondage, nous avons donné les exemples d'informations que nous pourrions ajouter à la norme numérique « Conception avec les utilisateurs ». Par exemple, pourquoi la norme est importante, les politiques pertinentes et des exemples d'activités dans chaque phase de conception de service. Nous avons demandé aux gens s'ils pensaient que ces informations seraient utiles.",
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
                            "Voici certains commentaires que nous avons entendus et qui devraient figurer dans le guide :",
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
                            "Des conseils sur la façon de concevoir avec les utilisateurs :",
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
                                "comment convaincre les dirigeants de concevoir des services avec les utilisateurs;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment savoir si une solution est la bonne;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "quand et comment expérimenter;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment concevoir des services au sein du gouvernement;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "comment mesurer régulièrement le succès;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment définir les groupes d'utilisateurs;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment planifier et organiser la recherche sur les utilisateurs ainsi que les essais d'utilisateurs;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment trouver et rémunérer les personnes qui participent aux tests d'utilisateurs;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment recueillir et utiliser les données pour améliorer les services;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "comment appliquer ces conseils quel que soit le processus utilisé par les équipes pour améliorer les services.",
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
                          value: "Des informations sur :",
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
                                "les pratiques en matière d'utilisabilité et d'accessibilité;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "les termes associés au travail numérique, par exemple «",
                            },
                            {
                              nodeType: "span",
                              content: [],
                              data: {
                                class: "nowrap",
                              },
                            },
                            {
                              nodeType: "text",
                              value: "numérique",
                            },
                            {
                              nodeType: "span",
                              content: [],
                              data: {
                                class: "nowrap",
                              },
                            },
                            {
                              nodeType: "text",
                              value: "» et «",
                            },
                            {
                              nodeType: "span",
                              content: [],
                              data: {
                                class: "nowrap",
                              },
                            },
                            {
                              nodeType: "text",
                              value: "conception",
                            },
                            {
                              nodeType: "span",
                              content: [],
                              data: {
                                class: "nowrap",
                              },
                            },
                            {
                              nodeType: "text",
                              value: "»;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "les types de services publics auxquels les normes numériques s'appliquent.",
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
                            "Nous avons également reçu des suggestions pour :",
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
                                "s'assurer que le guide est rédigé dans un langage simple;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "ne pas mettre trop de choses dans le guide;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "s'assurer que le guide est conçu pour son public cible;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "expliquer comment définir les utilisateurs et s'assurer que les gens qui participent aux essais représentent correctement la population d'utilisateurs.",
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
                          value: "Modifier le guide n'est pas suffisant",
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
                            "De nombreuses personnes ont mentionné qu'une mise à jour du guide n'est pas ce dont elles ont le plus besoin pour les aider à comprendre et à utiliser les normes relatives au numérique dans le cadre de leur travail. Elles souhaiteraient plutôt qu'on les aide à éliminer les obstacles qui rendent difficile le respect des normes.",
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
                            "Voici quelques exemples d'obstacles qui, selon les personnes questionnées, doivent être éliminés :",
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
                                "les exigences de la politique ne sont pas claires et il n'existe pas d'outils permettant de les trouver ou de les comprendre facilement;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "il n'est pas clair si les normes numériques sont obligatoires;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "il n'y a pas de gouvernance pour s'assurer que tout le monde respecte les normes numériques;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "les règles de gestion des projets et des finances dans les départements rendent difficile le respect des normes numériques par les équipes;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "il n'y a pas assez de formation et d'encadrement pour aider les équipes à apprendre à appliquer les normes numériques.",
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
                          value: "Faites-nous part de vos commentaires",
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
                            "Les commentaires que nous avons reçus jusqu'à maintenant ont été très utiles. Si vous n'avez pas encore fait part de vos réflexions, vous pouvez encore le faire. Nous continuons à recueillir des commentaires!",
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
                            "Nous utiliserons les réponses du sondage et les commentaires pour réfléchir davantage à ce que les équipes ont besoin pour les aider à concevoir des services. Restez à l'écoute. Notre prochaine mise à jour expliquera comment nous utilisons vos commentaires pour élaborer des orientations sur les normes relatives au numérique.",
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
                scId: "PLAYBOOK-TAKE-SURVEY",
                scTitleEn: "Take survey",
                scTitleFr: "Répondre au sondage",
                scDestinationURLEn:
                  "https://forms-formulaires.alpha.canada.ca/id/clooguv2g0052yj6368lm0kb7",
                scDestinationURLFr:
                  "https://forms-formulaires.alpha.canada.ca/fr/id/clooguv2g0052yj6368lm0kb7",
                scButtonType: ["gc:custom/decd-endc/button-type/primary"],
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
          "gc:subjects/pr-processes/standards",
          "gc:subjects/in-information-and-communications/information/government-information",
        ],
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: null,
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path:
            "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
          height: 335,
          width: 500,
        },
        scSocialMediaImageFr: {
          _path:
            "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
          height: 335,
          width: 500,
        },
        scSocialMediaImageAltTextEn:
          "Decorative image of a monitor, mobile phone and tablet.",
        scSocialMediaImageAltTextFr:
          "Image décorative d'un moniteur, d'un téléphone cellulaire et d'une tablette.",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/digital-standards-playbook/main-content",
            scId: "PLAYBOOK-MAIN-CONTENT",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Digital Standards Playbook",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Digital Standards Playbook provides guidance to Government of Canada employees who design and deliver digital services.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2023-10",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Discovery",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We want to show how to apply the Digital Standards by using them to improve the Playbook to make it more useful for public servants.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "About the Digital Standards",
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
                        "The Digital Standards are a set of 10 principles that helps the Government of Canada build user-centric services for people, businesses and communities. They guide teams through designing digital services in a way that best serves Canadians.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Digital Standards Playbook was developed to help and empower public servants to define what good services look like in Canada. The Playbook also provides practical guidance and tools to deliver services that are easy-to-use, inclusive, effective and secure.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Help improve the Playbook",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "We’re keeping the 10 principles from the ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html",
                      },
                      value: "previous Playbook",
                    },
                    {
                      nodeType: "text",
                      value:
                        ", but we’ll improve and expand on the guidance based on feedback from you! ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Take our quick survey to help us understand user awareness of the Digital Standards and gather some initial feedback on the proposed content for the Playbook.",
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
                      value: "Guide sur les normes relatives au numérique",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le Guide sur les normes relatives au numérique (normes numériques) fournit une orientation aux employés du gouvernement du Canada qui conçoivent et fournissent des services numériques.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2023-10",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Découverte",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Par l’utilisation des normes numériques, notre objectif est d’améliorer le Guide en continu afin de le rendre plus utile pour les fonctionnaires.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "À propos des normes relatives au numérique",
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
                        "Les normes relatives au numérique comprennent 10 principes directeurs qui aident le gouvernement du Canada à créer des services centrés sur l’utilisateur; incluant les personnes, les entreprises et les collectivités. Elles guident les équipes dans la conception de services numériques de manière à servir au mieux les intérêts des Canadiens.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "L’objectif du Guide sur les normes relatives au numérique est d’informer les fonctionnaires sur les normes relatives au numérique et de définir ce qu’est la prestation de services de qualité au Canada. Le Guide fournit également des conseils et des outils concrets pour fournir des services faciles à utiliser, inclusifs, efficaces et sécurisés.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Contribuer à l’amélioration du Guide",
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
                      value: "Nous conservons les 10 principes du ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html",
                      },
                      value: "Guide précédent",
                    },
                    {
                      nodeType: "text",
                      value:
                        ", mais nous améliorerons et élaborerons l’orientation en fonction de vos commentaires!",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Répondez à notre sondage rapide pour nous aider à comprendre le niveau de connaissance des utilisateurs à propos des normes relatives au numérique, cela nous permettra de recueillir les commentaires initiaux sur le contenu proposé du Guide.",
                    },
                  ],
                },
              ],
            },
            scFragments: [],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/tooltips/information-discovery",
            scId: "INFORMATION-DISCOVERY-SCLABS",
            scTitleEn: "Information",
            scTitleFr: "Information",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Discovery:",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        " Defining a problem, exploring needs and evaluating existing solutions.",
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
                      value: "Découverte : ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Définir un problème, explorer les besoins et évaluer les solutions existantes.",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "PLAYBOOK-OVERVIEW",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
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
            scId: "PLAYBOOK-TAKE-SURVEY",
            scTitleEn: "Take survey",
            scTitleFr: "Répondre au sondage",
            scDestinationURLEn:
              "https://forms-formulaires.alpha.canada.ca/id/clooguv2g0052yj6368lm0kb7",
            scDestinationURLFr:
              "https://forms-formulaires.alpha.canada.ca/fr/id/clooguv2g0052yj6368lm0kb7",
            scButtonType: ["gc:custom/decd-endc/button-type/primary"],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/digital-standards-playbook/share-thoughts",
            scId: "PLAYBOOK-SHARE-THOUGHTS",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Interested in seeing the full Playbook or want to share your thoughts? Email us at ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "mailto:servicedigital-servicesnumerique@tbs-sct.gc.ca",
                      },
                      value: "servicedigital-servicesnumerique@tbs-sct.gc.ca",
                    },
                    {
                      nodeType: "text",
                      value: ".",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Playbook will continue to evolve to better meet your needs. Expect to see updates here as we refine the content.",
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
                        "Vous souhaitez consulter le Guide complet ou nous faire part de vos commentaires? Envoyez-nous un courriel, à : ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "mailto:servicedigital-servicesnumerique@tbs-sct.gc.ca",
                      },
                      value: "servicedigital-servicesnumerique@tbs-sct.gc.ca",
                    },
                    {
                      nodeType: "text",
                      value: ".",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le Guide continuera d’évoluer de façon itérative pour mieux répondre à vos besoins. Restez à l’affût afin de constater les mises à jour en continu.",
                    },
                    {
                      nodeType: "line-break",
                      content: [],
                    },
                  ],
                },
              ],
            },
            scFragments: [],
          },
        ],
      },
    },
  },
};
export const [playbookUpdatesData] = [
  playbookData.data.sclabsPageV1ByPath.item.scLabProjectUpdates,
];

export const ICSData = {
  data: {
    sclabsPageV1ByPath: {
      item: {
        scId: "MAKING-EASIER-BENEFITS-PAGE",
        scPageNameEn: "/en/projects/making-easier-get-benefits",
        scPageNameFr: "/fr/projets/faciliter-obtention-prestations",
        scTitleEn: "Making it easier to get benefits",
        scTitleFr: "Faciliter l'obtention des prestations",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scLabProjectStage: ["gc:custom/decd-endc/project-stage/discovery"],
        scLabProjectSummaryEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "We're talking to Canadians to learn how we can make applying for benefits easier.",
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
                    "Nous parlons aux Canadiens pour apprendre comment nous pouvons faciliter les demandes de prestations.",
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
                    "This research will help us learn how we can improve our services.",
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
                    "Cette recherche nous aidera à savoir comment nous pouvons améliorer nos services.",
                },
              ],
            },
          ],
        },
        scLabProjectUpdates: [],
        scBreadcrumbParentPages: [
          {
            scTitleEn: "Service Canada Labs",
            scTitleFr: "Laboratoires de Service Canada",
            scPageNameEn: "/en/home",
            scPageNameFr: "/fr/accueil",
          },
        ],
        scSubject: [
          "gc:subjects/ec-economics-and-industry/benefits",
          "gc:subjects/gv-government-and-politics/government-services",
        ],
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: ["gc:institutions/service-canada"],
        scDateModifiedOverwrite: "2024-02-13",
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path:
            "/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
        },
        scSocialMediaImageFr: {
          _path:
            "/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
        },
        scSocialMediaImageAltTextEn:
          "Men and women welcoming people with disabilities",
        scSocialMediaImageAltTextFr:
          "Hommes et femmes accueillant des personnes en situation de handicap",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/integrated-channel/making-easier-benefits",
            scId: "MAKING-EASIER-BENEFITS-CONTENT",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Making it easier to get benefits",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We're doing research on the experience of applying for benefits at Service Canada. Our goal is to learn how we can make services better for you.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2023-12",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Discovery",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We're talking to Canadians to learn how we can make applying for benefits easier.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "About the research",
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
                        "Getting benefits at Service Canada should be easy, whether you use the phone, web, mail or go in person. By learning from you about what works well and what needs fixing, we'll be in a better position to meets your needs.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "To make it easier for people to get their benefits, we are exploring:",
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
                            "whether people prefer to use phone, web, mail or in person options",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "why they switch between these options",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "what’s working well and what’s not",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "what we can do in a different way to make our services easier to use",
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
                        "Want to know more about our project or have questions about our research? Email us at ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "mailto:ESDC.ICS.ATS-AST.SDI.EDSC@servicecanada.gc.ca",
                      },
                      value: "ESDC.ICS.ATS-AST.SDI.EDSC@servicecanada.gc.ca",
                    },
                    {
                      nodeType: "text",
                      value: ".",
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
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Faciliter l'obtention des prestations",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous étudions l'expérience de demande de prestations à Service Canada. Notre objectif est d'apprendre comment améliorer les services que nous vous offrons.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2023-12",
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
                      value: "Découverte",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous parlons aux Canadiens pour apprendre comment nous pouvons faciliter les demandes de prestations.",
                    },
                  ],
                },
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "À propos de la recherche",
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
                        "Il devrait être facile d'obtenir des prestations auprès de Service Canada, que ce soit par téléphone, en ligne, par courrier ou en personne. En apprenant auprès de vous ce qui fonctionne et ce qui doit être amélioré, nous serons en meilleure posture pour répondre à vos besoins.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Pour faciliter la tâche des gens lorsqu'ils tentent d'obtenir des prestations, nous explorons :",
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
                            "les options que les gens préfèrent utiliser, soit le téléphone, en ligne, le courrier ou en personne;",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "pourquoi ils passent d'une option à l'autre;",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "ce qui fonctionne bien et ce qui ne marche pas;",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "ce que nous pouvons faire de manière différente pour faciliter l'utilisation de nos services.",
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
                        "Vous voulez en savoir plus sur le projet ou vous avez des questions au sujet de notre étude? Écrivez-nous à l'adresse courriel ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "mailto:ESDC.ICS.ATS-AST.SDI.EDSC@servicecanada.gc.ca",
                      },
                      value: "ESDC.ICS.ATS-AST.SDI.EDSC@servicecanada.gc.ca",
                    },
                    {
                      nodeType: "text",
                      value: ".",
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
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/tooltips/information-discovery",
            scId: "INFORMATION-DISCOVERY-SCLABS",
            scTitleEn: "Information",
            scTitleFr: "Information",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Discovery:",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        " Defining a problem, exploring needs and evaluating existing solutions.",
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
                      value: "Découverte : ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Définir un problème, explorer les besoins et évaluer les solutions existantes.",
                    },
                  ],
                },
              ],
            },
          },
          {
            scId: "MAKING-EASIER-BENEFITS-IMAGE",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
              width: 720,
              height: 464,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
              width: 720,
              height: 464,
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "Men and women welcoming people with disabilities",
            scImageAltTextFr:
              "Hommes et femmes accueillant des personnes en situation de handicap",
            scImageCaptionEn: {
              json: null,
            },
            scImageCaptionFr: {
              json: null,
            },
          },
        ],
      },
    },
  },
};
export const [ICSUpdatesData] = [
  ICSData.data.sclabsPageV1ByPath.item.scLabProjectUpdates,
];

export const dashboardData = {
  data: {
    sclabsPageV1ByPath: {
      item: {
        scId: "CLIENT-HUB-DASHBOARD-OVERVIEW",
        scPageNameEn: "/en/projects/dashboard",
        scPageNameFr: "/fr/projets/tableau-de-bord",
        scTitleEn: "New dashboard for My Service Canada Account",
        scTitleFr: "Nouveau tableau de bord pour Mon dossier Service Canada",
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
                    "We're introducing new changes to My Service Canada Account that will help you access your government information more easily and quickly.",
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
                    "Nous apportons des modifications à Mon dossier Service Canada qui vous aideront à obtenir vos informations sur le gouvernement plus facilement et rapidement.",
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
                    "Your Service Canada payments, benefits and services are easier to access with the modernized dashboard.",
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
                    "Vos paiements, prestations et services de Service Canada sont plus faciles à accéder grâce au tableau de bord modernisé.",
                },
              ],
            },
          ],
        },
        scLabProjectUpdates: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/client-hub/updates/overview",
            scId: "PAGE-HUB-OVERVIEW",
            scPageNameEn: "/en/projects/dashboard/overview",
            scPageNameFr: "/fr/projets/tableau-de-bord/apercu",
            scTitleEn: "Overview of My Service Canada dashboard",
            scTitleFr:
              "Aperçu du tableau de bord de Mon dossier Service Canada",
            scLabProject: {
              scTermEn: "My Service Canada Account dashboard",
              scTermFr: "Tableau de bord de Mon dossier Service Canada",
            },
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
            scKeywordsEn: null,
            scKeywordsFr: null,
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: ["gc:institutions/service-canada"],
            scDateModifiedOverwrite: "2024-06-21",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-en.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-en.png",
              width: 759,
              height: 498,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-fr.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-fr.png",
              width: 758,
              height: 498,
            },
            scSocialMediaImageAltTextEn:
              "My dashboard page from My Service Canada Account",
            scSocialMediaImageAltTextFr:
              "Page Mon tableau de bord de Mon dossier Service Canada",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/client-hub/updates/overview-intro",
                scId: "CONTENT-HUB-OVERVIEW-INTRO",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h1",
                      content: [
                        {
                          nodeType: "text",
                          value: "Overview of My Service Canada dashboard",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The My Service Canada Account dashboard provides you with all your Service Canada payments, benefits and services in one central space for easy access.",
                        },
                      ],
                    },
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Overview of features",
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
                            "Aperçu du tableau de bord de Mon dossier Service Canada",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Le tableau de bord de Mon dossier Service Canada vous permet d'accéder facilement à tous vos paiements, prestations et services de Service Canada dans un espace central.",
                        },
                      ],
                    },
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Aperçu des fonctionnalités",
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
          "gc:subjects/ec-economics-and-industry/benefits",
          "gc:subjects/in-information-and-communications/information/government-information",
        ],
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2024-06-21",
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path:
            "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
          height: 937,
          width: 1433,
        },
        scSocialMediaImageFr: {
          _path:
            "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
          height: 937,
          width: 1433,
        },
        scSocialMediaImageAltTextEn:
          "Image of a man sitting in a chair with a laptop on his lap. Background is a screen with icons and coins.",
        scSocialMediaImageAltTextFr:
          "Image d'un homme assis dans un fauteuil avec un ordinateur portable sur les genoux. L'arrière-plan est un écran avec des icônes et des pièces de monnaie.",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _model: {
              title: "SCLabs-Content-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/client-hub/dashboard-intro",
            scId: "CLIENT-HUB-INTRO",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "My Service Canada Account dashboard",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The dashboard is the new home page in the My Service Canada Account (MSCA). With one click, you can view, manage, or start an application for Service Canada benefits.",
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
                        "We're making improvements that will help you access information about your government benefits and services more quickly and easily.",
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
                      value: "Tableau de bord de Mon dossier Service Canada",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le tableau de bord est la nouvelle page d'accueil de Mon dossier Service Canada (MSCA). En un seul clic, il vous permet de consulter, de gérer ou de présenter une demande de prestations de Service Canada.",
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
                        "Nous apportons des améliorations qui vous aideront à obtenir l'information concernant vos prestations et services gouvernementaux plus rapidement et facilement.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _model: {
              title: "SCLabs-Image-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/images/projects/client-hub/dashboard-overview",
            scId: "CLIENT-HUB-OVERVIEW",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              width: 1433,
              height: 937,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              width: 1433,
              height: 937,
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
            scLongDescHeadingEn: null,
            scLongDescHeadingFr: null,
            scLongDescEn: {
              json: null,
            },
            scLongDescFr: {
              json: null,
            },
          },
          {
            _model: {
              title: "Tooltip-v1",
            },
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
            _model: {
              title: "SCLabs-Content-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/client-hub/easy-access",
            scId: "CONTENT-HUB-EASY-ACCESS",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Easy access to your payments, benefits and services",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The new dashboard is available on My Service Canada Account, you just need to sign in. ",
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
                        "Accéder plus facilement à vos paiements, prestations et services",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le nouveau tableau de bord est disponible sur Mon dossier Service Canada, il suffit de vous y connecter pour y accéder.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _model: {
              title: "SCLabs-Button-v1",
            },
            scId: "SIGN-IN-MSCA-BUTTON",
            scTitleEn: "Sign in to My Service Canada Account",
            scTitleFr: "Se connecter à Mon dossier Service Canada",
            scDestinationURLEn:
              "https://www.canada.ca/en/employment-social-development/services/my-account.html",
            scDestinationURLFr:
              "https://www.canada.ca/fr/emploi-developpement-social/services/mon-dossier.html",
            scButtonType: ["gc:custom/decd-endc/button-type/primary"],
          },
          {
            _model: {
              title: "SCLabs-Content-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/client-hub/help-common-actions",
            scId: "CONTENT-HUB-HELP-COMMON-ACTIONS",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The dashboard helps you perform common actions such as starting an application, viewing your updates, submitting information or getting help.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "It makes it simple and easy to: ",
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
                          value: "find the information you are looking for ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "start and complete what you came to do ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "view and manage your personal information for all benefits in one place ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value: "find contact information if you require help",
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
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le tableau de bord vous permet d’effectuer des actions courantes, telles que présenter des demandes, consulter vos mises à jour, soumettre de l’information et obtenir de l’aide.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Il rend les choses plus simples et plus faciles pour : ",
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
                          value: "trouver l'information que vous cherchez; ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "commencer et terminer ce que vous êtes venu faire; ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "consulter et gérer vos renseignements personnels pour toutes vos prestations en un seul endroit; ",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "trouver nos coordonnées si vous avez besoin d'aide.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            _model: {
              title: "SCLabs-Content-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/client-hub/help-improve",
            scId: "CONTENT-HUB-HELP-IMPROVE",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Help improve the dashboard",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We will continue to make improvements to the dashboard and My Service Canada Account. Our goal is for them to respond best to your needs.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Do you find the dashboard useful? Is there anything you like or dislike? Share your feedback by answering the short survey.",
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
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Contribuez à l’amélioration du tableau de bord",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous continuerons d'apporter des améliorations au tableau de bord et à Mon dossier Service Canada. Notre but est qu'ils répondent le mieux à vos besoins.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Trouvez-vous le tableau de bord utile? Quelque chose vous plaît ou vous déplaît? Donnez votre avis en répondant au court sondage.",
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
            _model: {
              title: "SCLabs-Button-v1",
            },
            scId: "BUTTON-HUB-TAKE-SURVEY",
            scTitleEn: "Take survey",
            scTitleFr: "Répondre au sondage",
            scDestinationURLEn:
              "https://forms-formulaires.alpha.canada.ca/en/id/clwayben200zex88386f9f3d7",
            scDestinationURLFr:
              "https://forms-formulaires.alpha.canada.ca/fr/id/clwayben200zex88386f9f3d7",
            scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
          },
        ],
      },
    },
  },
};
export const [dashboardUpdatesData] = [
  dashboardData.data.sclabsPageV1ByPath.item.scLabProjectUpdates,
];

export const benefitsNavigatorData = {
  data: {
    sclabsPageV1ByPath: {
      item: {
        scId: "BENEFITS-NAVIGATOR-OVERVIEW",
        scPageNameEn: "/en/projects/benefits-navigator",
        scPageNameFr: "/fr/projets/navigateur-prestations",
        scTitleEn: "Benefits Navigator",
        scTitleFr: "Navigateur de prestations",
        scShortTitleEn: null,
        scShortTitleFr: null,
        scLabProjectStage: ["gc:custom/decd-endc/project-stage/alpha"],
        scLabProjectSummaryEn: {
          json: null,
        },
        scLabProjectSummaryFr: {
          json: null,
        },
        scDescriptionEn: {
          json: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "This project is closed. Whether for yourself or someone else, this tool was designed to make it easier to stay up to date and navigate government benefits.",
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
                    "Ce projet est terminé. Que ce soit pour vous-même ou pour quelqu'un d'autre, cet outil visait à vous aider à rester informé et à explorer les prestations gouvernementales plus facilement.",
                },
              ],
            },
          ],
        },
        scLabProjectUpdates: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/benefits-navigator/updates/difficulties-community-workers",
            scId: "DIFFICULTIES-FACED-BY-COMMUNITY-WORKERS",
            scPageNameEn:
              "/en/projects/benefits-navigator/difficulties-community-workers-help-people-benefits",
            scPageNameFr:
              "/fr/projets/navigateur-prestations/difficultes-travailleuses-travailleurs-communautaires-aident-gens-prestations",
            scTitleEn:
              "Difficulties faced by community workers who help people with their benefits",
            scTitleFr:
              "Difficultés rencontrées par les travailleuses et travailleurs communautaires qui aident les gens avec leurs prestations",
            scLabProject: {
              scTermEn: "Benefits Navigator",
              scTermFr: "Navigateur de prestations",
            },
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
            scSubject: ["gc:subjects/ec-economics-and-industry/benefits"],
            scKeywordsEn: "benefits",
            scKeywordsFr: "bénéfices, prestations",
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: ["gc:institutions/service-canada"],
            scDateModifiedOverwrite: "2023-07-31",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
              width: 555,
              height: 321,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
              width: 555,
              height: 321,
            },
            scSocialMediaImageAltTextEn: "Community workers helping people",
            scSocialMediaImageAltTextFr:
              "Travailleuses et travailleurs communautaires qui aident des gens",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/benefits-navigator/updates/staying-informed-government-benefits-services",
            scId: "PAGE-BN-STAYING-INFORMED-GOVERNMENT-BENEFITS-SERVICES",
            scPageNameEn:
              "/en/projects/benefits-navigator/staying-informed-government-benefits-services",
            scPageNameFr:
              "/fr/projets/navigateur-prestations/rester-informe-prestations-services-gouvernementaux",
            scTitleEn: "Staying informed on government benefits and services",
            scTitleFr:
              "Rester informé sur les prestations et services gouvernementaux",
            scLabProject: {
              scTermEn: "Benefits Navigator",
              scTermFr: "Navigateur de prestations",
            },
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
            scKeywordsEn: null,
            scKeywordsFr: null,
            scContentType: [
              "gc:content-types/promotional-material-featured-articles",
            ],
            scOwner: ["gc:institutions/service-canada"],
            scDateModifiedOverwrite: "2024-06-21",
            scAudience: null,
            scRegion: null,
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
              width: 900,
              height: 600,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
              width: 900,
              height: 600,
            },
            scSocialMediaImageAltTextEn: "People adding content to a web page",
            scSocialMediaImageAltTextFr:
              "Personnes qui ajoutent du contenu à une page Web",
            scNoIndex: false,
            scNoFollow: false,
            scFragments: [
              {
                scId: "IMAGE-BN-STAYING-INFORMED-NEWSFEED",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/bn-article-newsfeed-screen-en.jpg",
                  width: 1912,
                  height: 1249,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/bn-article-newsfeed-screen-fr.jpg",
                  width: 1912,
                  height: 1322,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn: "Benefits newsfeed",
                scImageAltTextFr: "Fil d'actualité pour les prestations",
                scImageCaptionEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "Image of the Benefits newsfeed",
                        },
                      ],
                    },
                  ],
                },
                scImageCaptionFr: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Image du fil d'actualité pour les prestations",
                        },
                      ],
                    },
                  ],
                },
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/updates/staying-informed-next",
                scId: "CONTENT-BN-STAYING-INFORMED-NEXT",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h2",
                      content: [
                        {
                          nodeType: "text",
                          value: "Next Steps",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The Benefits newsfeed is just one idea to help people learn about government benefits. Other ideas that are being explored include improving the Canada Benefits Finder and exploring if artificial intelligence can provide personalized information about government benefits. You may see some of these ideas here on Service Canada Labs. Stay tuned!",
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
                          value: "Prochaines étapes",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Le fil d'actualité pour les prestations n'est qu'une idée parmi d'autres pour aider les gens à s'informer sur les prestations gouvernementales. D'autres idées sont à l'étude, comme l'amélioration du Chercheur de prestations du Canada et l'utilisation de l'intelligence artificielle pour fournir des informations personnalisées sur les prestations du gouvernement. Vous verrez peut-être certaines de ces idées ici, sur le site des laboratoires de Service Canada. Restez à l'écoute!",
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
          "gc:subjects/ec-economics-and-industry/benefits",
          "gc:subjects/in-information-and-communications/information/government-information",
        ],
        scKeywordsEn: null,
        scKeywordsFr: null,
        scContentType: null,
        scOwner: null,
        scDateModifiedOverwrite: "2024-07-11",
        scAudience: null,
        scRegion: null,
        scSocialMediaImageEn: {
          _path:
            "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
          width: 359,
          height: 260,
        },
        scSocialMediaImageFr: {
          _path:
            "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
          _publishUrl:
            "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
          width: 359,
          height: 260,
        },
        scSocialMediaImageAltTextEn:
          "People sitting on puzzle pieces or standing next to them.",
        scSocialMediaImageAltTextFr:
          "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
        scNoIndex: false,
        scNoFollow: false,
        scFragments: [
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/alerts/projects/benefits-navigator/project-closed",
            scId: "ALERT-BN-PROJECT-CLOSED",
            scTitleEn: "This project is closed",
            scTitleFr: "Ce projet est terminé",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We're no longer collecting feedback. What we learned from this project will be used to improve the Canada ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/en/projects/benefits-finder",
                      },
                      value: "Benefits Finder",
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
                        "Nous ne recueillons plus de commentaires. Ce que nous avons appris dans le cadre de ce projet sera utilisé pour améliorer le ",
                    },
                    {
                      nodeType: "link",
                      data: {
                        href: "/fr/projets/chercheur-prestations",
                      },
                      value: "chercheur de prestations",
                    },
                    {
                      nodeType: "text",
                      value: " du Canada.",
                    },
                  ],
                },
              ],
            },
            scAlertType: ["gc:custom/decd-endc/alert-type/warning"],
          },
          {
            scId: "OVERVIEW-IMAGE",
            scImageEn: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
              width: 359,
              height: 260,
            },
            scImageFr: {
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
              width: 359,
              height: 260,
            },
            scImageMobileEn: null,
            scImageMobileFr: null,
            scImageAltTextEn:
              "People sitting on puzzle pieces or standing next to them.",
            scImageAltTextFr:
              "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
            scImageCaptionEn: {
              json: null,
            },
            scImageCaptionFr: {
              json: null,
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/tooltips/information-alpha",
            scId: "INFORMATION-ALPHA-SCLABS",
            scTitleEn: "Information",
            scTitleFr: "Information",
            scContentEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Alpha:",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        " Building a draft tool or service and testing it to see if it meets needs.",
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
                      value: "Alpha : ",
                      format: {
                        variants: ["strong"],
                      },
                    },
                    {
                      nodeType: "text",
                      value:
                        "Construire une première version d’un outil ou d’un service et le tester pour savoir s’il répond aux besoins.",
                    },
                  ],
                },
              ],
            },
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/intro",
            scId: "BENEFITS-NAVIGATOR-INTRO",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h1",
                  content: [
                    {
                      nodeType: "text",
                      value: "Benefits Navigator",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "The Benefits Navigator is a tool mainly for professionals who help people with their government benefits.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2022-10",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "Alpha",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "We’re gathering feedback to learn whether the Benefits Navigator could be a helpful tool.",
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
                      value: "Navigateur de prestations",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le Navigateur de prestations est un outil principalement pour les professionnels qui aident les gens à recevoir leurs prestations gouvernementales. ",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "2022-10",
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
                      value: "Alpha",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Nous recueillons des commentaires pour savoir si un Navigateur de prestations pourrait être utile.",
                    },
                  ],
                },
              ],
            },
            scFragments: [],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/about",
            scId: "BENEFITS-NAVIGATOR-ABOUT",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "About the Benefits Navigator",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Whether for yourself or someone else, this tool will make it easier for you to stay up to date and navigate government benefits.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value: "The Benefits Navigator has 3 main features:",
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
                            "a newsfeed to help you stay up to date about benefits",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "a list of all benefits in one place that you can search",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "guidance pages to help understand the benefits and application process",
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
                        "Read more about each feature and let us know what you think!",
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
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "À propos du Navigateur de prestations",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Que ce soit pour vous ou pour quelqu'un d'autre, cet outil vous permettra de rester informé et de vous y retrouver plus facilement dans les prestations gouvernementales.",
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Le Navigateur de prestations comprend 3 fonctionnalités principales :",
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
                            "un fil d'actualité pour vous aider à rester informé sur les prestations;",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "une liste de toutes les prestations, avec possibilité de recherche, en un seul endroit;",
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "des pages explicatives pour vous aider à comprendre les prestations et la procédure de demande.",
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
                        "Découvrez chaque fonctionnalité et faites-nous part de vos commentaires!",
                    },
                  ],
                },
              ],
            },
            scFragments: [],
          },
          {
            _path:
              "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/overview-features",
            scId: "BENEFITS-NAVIGATOR-OVERVIEW-FEATURES",
            scContentEn: {
              json: [
                {
                  nodeType: "header",
                  style: "h2",
                  content: [
                    {
                      nodeType: "text",
                      value: "Overview of features",
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
                      value: "Aperçu des fonctionnalités",
                    },
                  ],
                },
              ],
            },
            scFragments: [
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/news",
                scId: "BENEFITS-NAVIGATOR-NEWS",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h3",
                      content: [
                        {
                          nodeType: "text",
                          value: "Stay up to date on government benefits",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "The newsfeed will tell you when:",
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
                              value: "new benefits are added",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "changes are made to existing benefits",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "there are service changes or disruptions",
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
                            "Restez informé sur les prestations gouvernementales",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "Le fil d’actualité vous informera des :",
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
                              value: "nouvelles prestations;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "modifications apportées aux prestations existantes;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "changements ou des interruptions de service.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                scFragments: [
                  {
                    scId: "NEWS-IMAGE",
                    scImageEn: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/news-en.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageFr: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/news-fr.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageMobileEn: null,
                    scImageMobileFr: null,
                    scImageAltTextEn: "Benefit news and updates page",
                    scImageAltTextFr:
                      "Page Nouvelles et mises à jour sur les prestations",
                    scImageCaptionEn: {
                      json: null,
                    },
                    scImageCaptionFr: {
                      json: null,
                    },
                    scLongDescHeadingEn:
                      "Text version of the image Benefit news and updates",
                    scLongDescHeadingFr:
                      "Version textuelle de l'image Nouvelles et mises à jour sur les prestations",
                    scLongDescEn: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "The Benefit news and updates page contains 3 sections:",
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
                                    "a search bar to search by benefit name or source",
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "a list of benefits to filter the news:",
                                },
                                {
                                  nodeType: "unordered-list",
                                  content: [
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Old Age Security",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Guaranteed Income Supplement",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Allowance for the survivor",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Canada Pension Plan",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Post-Retirement Benefit",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Employment Insurance",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Canada Dental Benefit",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Home and Community program care",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Disability tax credit",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Refund of Federal Excise Tax on Gas",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "a list of benefit news and updates with details. For example:",
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
                                            "Service disruption - Service Canada June 29, 2023 (update)",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "OAS pension amounts - July to September 2023 (update)",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Grocery rebate will be issued July 5, 2023 (new)",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    scLongDescFr: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "La page Nouvelles et mises à jour sur les prestations contient 3 sections :",
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
                                    "une barre de recherche où on peut rechercher par le nom de la prestation ou la source",
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "une liste de prestations pour filtrer les nouvelles :",
                                },
                                {
                                  nodeType: "unordered-list",
                                  content: [
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Sécurité de la vieillesse",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Supplément de revenu garanti",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Allocation au survivant",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Régime de pensions du Canada",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Post retirement benefit",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "Assurance-emploi",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Prestation dentaire canadienne",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Programme de soins à domicile et en milieu communautaire",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Crédit d’impôt pour les personnes handicapées",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Remboursement de la taxe d'accise sur l'essence",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "une liste de nouvelles et de mises à jour. Par exemple :",
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
                                            "Interruption de service : Service Canada, 29 juin 2023 (mise à jour)",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Montant de la pension de la Sécurité de la vieillesse de juillet à septembre 2023 (mise à jour)",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Le remboursement pour l’épicerie sera émis le 5 juillet 2023 (nouvelle)",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/search",
                scId: "BENEFITS-NAVIGATOR-SEARCH",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h3",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Search and filter a list of benefits and forms",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "The list will offer:",
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
                              value: "many ways to discover or find benefits",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "summaries of the benefits displayed on the same page",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "all forms in one place",
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
                            "Recherchez dans une liste de prestations et de formulaires et filtrez vos résultats",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "La liste offrira :",
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
                                "plusieurs façons de découvrir et de trouver des prestations;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "des résumés de prestations sur la même page;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "tous les formulaires regroupés en un seul endroit.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                scFragments: [
                  {
                    scId: "SEARCH-IMAGE",
                    scImageEn: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/search-en.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageFr: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/search-fr.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageMobileEn: null,
                    scImageMobileFr: null,
                    scImageAltTextEn: "Search for federal benefits page",
                    scImageAltTextFr: "Page Recherche de prestations fédérales",
                    scImageCaptionEn: {
                      json: null,
                    },
                    scImageCaptionFr: {
                      json: null,
                    },
                    scLongDescHeadingEn:
                      "Text version of the image Search for federal benefits",
                    scLongDescHeadingFr:
                      "Version textuelle de l'image Recherche de prestations fédérales",
                    scLongDescEn: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "The Search for federal benefits page contains 3 sections:",
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
                                    "a search bar to enter the benefit name",
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value: "3 filters:",
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
                                            "Select benefits, with the option of selecting:",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Disability",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Pensions",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Health",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Temporary Income",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Caregiving",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Payout, with the option of selecting:",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Income",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Lump Sum",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Tax Credit",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Tax Refund",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Service",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Eligibility Based On, with the option of selecting:",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Income",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Contribution",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Residence",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Situation",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "a list of benefits with details. Examples include:",
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
                                            "Canada Pension Plan (CPP) Retirement Pension: up to $256.67 per month, application required, based on contribution, online or in person, less than 15 minutes",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Old Age Security: up to $700 per month, application required, automatic benefit, online or in person, 15 to 30 minutes, tax-filing required, based on residence",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Canada Pension Plan Disability (CPP-D)",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    scLongDescFr: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "La page Recherche de prestations fédérales contient 3 sections :",
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
                                    "une barre de recherche où on peut entrer le nom de la prestation",
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value: "3 filtres :",
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
                                            "Sélectionner des prestations, avec l'option de sélectionner :",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Invalidité",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Pensions",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Santé",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Revenu temporaire",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Proches aidants",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Paiements, avec l'option de sélectionner :",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Revenu",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Montant forfaitaire",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Crédit d'impôt",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Remboursement d'impôt",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Service",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Admissibilité selon, avec l'option de sélectionner :",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Revenu",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Contributions",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Résidence",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Situation",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "une liste de prestations avec des détails. Par exemple :",
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
                                            "Pension de retraite du Régime de pensions du Canada (RPC) : jusqu’à 256,67 $ par mois, demande obligatoire, selon la contribution, en ligne ou en personne, moins de 15 minutes",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Sécurité de la vieillesse : jusqu’à 700 $ par mois, demande obligatoire, inscription automatique, en ligne ou en personne, 15 à 30 minutes, déclaration de revenus obligatoire, selon le lieu de résidence",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "Prestations d'invalidité du Régime de pensions du Canada",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              {
                _path:
                  "/content/dam/decd-endc/content-fragments/sclabs/components/content/projects/benefits-navigator/learn",
                scId: "BENEFITS-NAVIGATOR-LEARN",
                scContentEn: {
                  json: [
                    {
                      nodeType: "header",
                      style: "h3",
                      content: [
                        {
                          nodeType: "text",
                          value: "Learn about benefits",
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The navigator will provide clear information about benefits, such as:",
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
                              value: "who can apply",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "how much you could get",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "how to apply",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "what forms are needed",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "other important information",
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
                          value: "Apprenez-en davantage sur les prestations",
                          format: {
                            variants: ["strong"],
                          },
                        },
                      ],
                    },
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Le navigateur fournira de l’information claire sur les prestations, tel que :",
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
                              value: "qui peut faire une demande;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "quel montant vous pourriez recevoir;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "comment faire une demande;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "quels sont les formulaires nécessaires;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value: "d'autres informations importantes.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                scFragments: [
                  {
                    scId: "OAS-IMAGE",
                    scImageEn: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/oas-en.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageFr: {
                      _publishUrl:
                        "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/oas-fr.png",
                      width: 1363,
                      height: 890,
                    },
                    scImageMobileEn: null,
                    scImageMobileFr: null,
                    scImageAltTextEn: "Old Age Security page",
                    scImageAltTextFr: "Page de la Sécurité de la vieillesse",
                    scImageCaptionEn: {
                      json: null,
                    },
                    scImageCaptionFr: {
                      json: null,
                    },
                    scLongDescHeadingEn:
                      "Text version of the image Old Age Security",
                    scLongDescHeadingFr:
                      "Version textuelle de l'image Sécurité de la vieillesse",
                    scLongDescEn: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value: "The Old Age Security page has:",
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
                                  value: "on the left:",
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
                                            "the sections that can be found on the page:",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Who can apply",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Payment",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "When to start",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "How to apply",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Timeline",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "How to appeal",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Common tasks",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Related benefits",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            'a "Eligibility" heading with a “Estimate your payment” button',
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "news",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value: "in the centre:",
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
                                            "sections with details, such as:",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "About",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Who can apply",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Payment : based on age $1300.00",
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
                                                            "What can affect payment",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      nodeType: "list-item",
                                                      content: [
                                                        {
                                                          nodeType: "text",
                                                          value:
                                                            "Payment logistics",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    scLongDescFr: {
                      json: [
                        {
                          nodeType: "paragraph",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "La page Sécurité de la vieillesse contient :",
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
                                  value: "à gauche : ",
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
                                            "la liste des sections qui se trouvent sur la page :",
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
                                                    "Qui peut faire une demande",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Versements",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Quand commencer",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Comment présenter une demande",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Échéanciers",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Comment contester une décision",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Tâches courantes",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "Prestations connexes",
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value:
                                            "un sous-titre “Admissibilité” avec un bouton “Estimer vos versements”",
                                        },
                                      ],
                                    },
                                    {
                                      nodeType: "list-item",
                                      content: [
                                        {
                                          nodeType: "text",
                                          value: "des nouvelles",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              nodeType: "list-item",
                              content: [
                                {
                                  nodeType: "text",
                                  value: "au centre :",
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
                                            "les sections avec les détails, par exemple :",
                                        },
                                        {
                                          nodeType: "unordered-list",
                                          content: [
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value: "À propos",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Qui peut faire une demande",
                                                },
                                              ],
                                            },
                                            {
                                              nodeType: "list-item",
                                              content: [
                                                {
                                                  nodeType: "text",
                                                  value:
                                                    "Versements : selon votre âge 1300,00 $",
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
                                                            "Facteurs ayant une incidence sur vos versement",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      nodeType: "list-item",
                                                      content: [
                                                        {
                                                          nodeType: "text",
                                                          value:
                                                            "Logistique de vos versements",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
};
export const [benefitsNavigatorUpdatesData] = [
  benefitsNavigatorData.data.sclabsPageV1ByPath.item.scLabProjectUpdates,
];

export const CollapseData = {
  scId: "FEATURE-DASHBOARD",
  scImageEn: {
    _publishUrl:
      "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-en.png",
    width: 759,
    height: 498,
  },
  scImageFr: {
    _publishUrl:
      "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-dashboard-fr.png",
    width: 758,
    height: 498,
  },
  scImageMobileEn: null,
  scImageMobileFr: null,
  scImageAltTextEn: "My dashboard page from My Service Canada Account",
  scImageAltTextFr: "Page Mon tableau de bord de Mon dossier Service Canada",
  scImageCaptionEn: {
    json: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Figure 1",
          },
        ],
      },
    ],
  },
  scImageCaptionFr: {
    json: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Figure 1",
          },
        ],
      },
    ],
  },
  scLongDescHeadingEn: "Text version of the image My dashboard",
  scLongDescHeadingFr: "Version textuelle de l’image Mon tableau de bord",
  scLongDescEn: {
    json: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "The dashboard page includes: ",
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
                value: "a heading with: ",
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
                          "the name of the site: My Service Canada Account ",
                      },
                    ],
                  },
                  {
                    nodeType: "list-item",
                    content: [
                      {
                        nodeType: "text",
                        value: "an “Account” menu ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "list-item",
            content: [
              {
                nodeType: "text",
                value: "benefits, such as: ",
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
                          "Employment Insurance, with a link to applications, payments and claims, taxes, reports and documents, personal information ",
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
                          "Canada Pension Plan, with a link to applications, payments, taxes, documents, provisions, personal information ",
                      },
                      {
                        nodeType: "line-break",
                        content: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  scLongDescFr: {
    json: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Le tableau de bord contient les éléments suivants : ",
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
                value: "un en-tête avec : ",
              },
              {
                nodeType: "unordered-list",
                content: [
                  {
                    nodeType: "list-item",
                    content: [
                      {
                        nodeType: "text",
                        value: "le nom du site : Mon dossier Service Canada; ",
                      },
                    ],
                  },
                  {
                    nodeType: "list-item",
                    content: [
                      {
                        nodeType: "text",
                        value: "un menu « Compte »; ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "list-item",
            content: [
              {
                nodeType: "text",
                value: "des prestations, telles que : ",
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
                          "Assurance-emploi, avec un lien vers les demandes de prestations, paiements et demandes, impôts, rapports et documents, renseignements personnels; ",
                      },
                    ],
                  },
                  {
                    nodeType: "list-item",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Régime de pensions du Canada, avec un lien vers les demandes de prestations, paiements, impôts, documents, clauses, renseignements personnels.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
