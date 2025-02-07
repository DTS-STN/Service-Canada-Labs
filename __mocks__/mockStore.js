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
    sclabsPageV1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/home",
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
                      "Service Canada Labs is an experimental corner of Canada.ca where we work on new ways of serving you. Explore and try our projects in their early stages and help us improve them by giving your feedback.",
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
                      "Les Laboratoires de Service Canada sont un espace expérimental de Canada.ca où nous travaillons sur de nouvelles façons de vous servir. Explorez et essayez nos projets à leur stade initial et aidez-nous à les améliorer en donnant vos commentaires.",
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
          scDateIssued: "2021-08-17",
          scDateModifiedOverwrite: "2024-10-23",
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
                            value:
                              "Your feedback can shape tomorrow's services",
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
              _model: {
                title: "SCLabs-Content-v1",
              },
              _path:
                "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-explore-projects",
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
              _model: {
                title: "SCLabs-Content-v1",
              },
              _path:
                "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-see-all-projects",
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
              _model: {
                title: "SCLabs-Content-v1",
              },
              _path:
                "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-read-updates",
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
              _model: {
                title: "SCLabs-Content-v1",
              },
              _path:
                "/content/dam/decd-endc/content-fragments/sclabs/components/content/home-see-all-updates",
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
      ],
    },
  },
};

export const experimentsData = {
  data: {
    sclabsPageV1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-finder/benefits-finder",
          scId: "PAGE-BENEFITS-FINDER",
          scPageNameEn: "/en/projects/benefits-finder",
          scPageNameFr: "/fr/projets/chercheur-prestations",
          scTitleEn: "Benefits Finder",
          scTitleFr: "Chercheur de prestations",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "We're improving the Benefits Finder to make it easier for you to get the most accurate results when searching for benefits.",
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
                      "Nous améliorons le chercheur de prestations pour vous permettre d'obtenir plus facilement les meilleurs résultats lorsque vous recherchez des prestations.",
                  },
                ],
              },
            ],
          },
          scSubject: ["gc:subjects/ec-economics-and-industry/benefits"],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-07-04",
          scDateModifiedOverwrite: "2024-07-04",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/benefits-finder/benefits-finder-laptop.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-finder/benefits-finder-laptop.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/benefits-finder/benefits-finder-laptop.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-finder/benefits-finder-laptop.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageAltTextEn:
            "Laptop with magnifying glass to enlarge a photo and dollar signs.",
          scSocialMediaImageAltTextFr:
            "Ordinateur portable avec une loupe grossissant une photo et des signes de dollar.",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "The Benefits Finder helps you find government support for living expenses and major life events.",
                  },
                ],
              },
            ],
          },
          scIntroFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Le chercheur de prestations vous aide à trouver un soutien gouvernemental pour les frais de subsistance et les événements majeurs de la vie.",
                  },
                ],
              },
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/beta",
            scId: "TAG_STAGE_BETA",
            scTermEn: "beta",
            scTermFr: "bêta",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Continuing to improve a usable tool or service while collecting feedback.",
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
                        "Continuer d’améliorer un outil ou un service fonctionnel et obtenir de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2023-10-01",
          scDatePaused: null,
          scDateEnded: null,
          scLabProjectSummaryEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We're improving the Benefits Finder to make it easier for you to get the most accurate results when searching for benefits.",
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
                      "Nous améliorons le chercheur de prestations pour vous permettre d'obtenir plus facilement les meilleurs résultats lorsque vous recherchez des prestations.",
                  },
                ],
              },
            ],
          },
          scLabProjectUpdates: [],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-TRY-BETA-VERSION",
              scContentEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Try the beta version of the new Benefits Finder and let us know what you think!",
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
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Essayez la version bêta du nouveau chercheur de prestations et faites-nous part de vos commentaires!",
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
              _model: {
                title: "SCLabs-Button-v1",
              },
              scId: "BUTTON-BF-GET-STARTED",
              scTitleEn: "Get started",
              scTitleFr: "Commencer",
              scDestinationURLEn:
                "https://www.canada.ca/en/services/benefits/finder/tool.html",
              scDestinationURLFr:
                "https://www.canada.ca/fr/services/prestations/chercheur/outil.html",
              scButtonType: ["gc:custom/decd-endc/button-type/primary"],
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-BF-ABOUT",
              scContentEn: {
                json: [
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "About the Benefits Finder",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "The Benefits Finder helps you discover benefits and services that you might qualify for from Canadian, provincial and territorial governments.",
                      },
                    ],
                  },
                  {
                    nodeType: "header",
                    style: "h3",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "How we’re improving the way people find benefits",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Over the years, many things have changed, including what Canadians need and expect from Canada.ca. While the Benefits Finder has undergone some updates, it's mostly stayed the same.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Our research revealed that:",
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
                            value: "people often seek specific benefits ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "people search for benefits related to life events ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "people desire the ability to refine or edit responses without restarting ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "provincial and territorial websites offer more current information on benefits and services ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "people were puzzled by provincial and territorial benefits on a Government of Canada website ",
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
                          "Based on our research findings, we’re building a new Benefits Finder that is updated, easy to use, and has a modern look and feel.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Key features include:",
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
                            value: "benefit search functionality",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "refined results using filters like life events and topics",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "summaries of the benefits",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "exclusively federal benefits",
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
                        value: "Help design the new Benefits Finder",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "We’re working to make it easier to search for government benefits. To create a tool that meets your needs, we need your input.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "We've already gathered feedback from Canadians on the current Benefits Finder. We're now looking for what you think of the new Benefits Finder.",
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
                        value: "À propos du chercheur de prestations",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Le chercheur de prestations vous aide à découvrir les prestations et les services auxquels vous pourriez avoir droit de la part des gouvernements canadien, provinciaux et territoriaux.",
                      },
                    ],
                  },
                  {
                    nodeType: "header",
                    style: "h3",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Comment nous améliorons la façon dont les gens trouvent des prestations",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Au fil des ans, plusieurs choses ont changé, y compris ce dont les Canadiens ont besoin et ce qu'ils attendent de Canada.ca. Bien qu’il ait subi quelques mises à jour, le chercheur de prestations est essentiellement resté le même.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Nos recherches ont révélé que :",
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
                              "les gens recherchent souvent des prestations précises;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "les gens recherchent des prestations liées aux événements de la vie;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "les gens souhaitent avoir la possibilité d'affiner ou de modifier leurs réponses sans avoir à redémarrer ;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "les sites Web des provinces et des territoires offrent des renseignements plus récents sur les prestations et les services;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "les gens sont perplexes de voir des prestations provinciales et territoriales sur un site Web du gouvernement du Canada..",
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
                          "En nous appuyant sur les résultats de nos recherches, nous concevons un nouveau chercheur de prestations à jour, facile à utiliser, et à l’aspect moderne.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Les principales caractéristiques sont les suivantes :",
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
                              "la fonctionnalité de recherche de prestations;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "des résultats affinés à l'aide de filtres tels que les événements de la vie et les thèmes;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "un résumé de chaque prestation;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "des prestations exclusivement fédérales.",
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
                        value:
                          "Contribuez à la conception du nouveau chercheur de prestations",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Nous nous efforçons de faciliter la recherche de prestations gouvernementales. Pour créer un outil qui répond à vos besoins, il nous faut votre avis.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Nous avons déjà recueilli les commentaires des Canadiens sur le chercheur de prestations actuel. Nous souhaitons maintenant savoir ce que vous pensez du nouvel outil.",
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
              scId: "BUTTON-BF-TAKE-SURVEY",
              scTitleEn: "Take survey",
              scTitleFr: "Participer au sondage",
              scDestinationURLEn:
                "https://forms-formulaires.alpha.canada.ca/en/id/clwzf86mr03i2x8831c5r9zk6",
              scDestinationURLFr:
                "https://forms-formulaires.alpha.canada.ca/fr/id/clwzf86mr03i2x8831c5r9zk6",
              scButtonType: ["gc:custom/decd-endc/button-type/secondary"],
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-BF-SURVEY",
              scContentEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "This survey is to give your feedback on the new Benefits Finder. If you need help with your government benefits, contact 1 800-O-Canada.",
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
                          "Ce sondage a pour but de recueillir vos commentaires sur le nouveau chercheur de prestations. Si vous avez besoin d'aide concernant vos prestations gouvernementales, composez le 1 800-O-Canada.",
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
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-navigator/overview",
          scId: "BENEFITS-NAVIGATOR-OVERVIEW",
          scPageNameEn: "/en/projects/benefits-navigator",
          scPageNameFr: "/fr/projets/navigateur-prestations",
          scTitleEn: "Benefits Navigator",
          scTitleFr: "Navigateur de prestations",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: "2023-09-28T15:10:00.000-04:00",
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
          scSubject: [
            "gc:subjects/ec-economics-and-industry/benefits",
            "gc:subjects/in-information-and-communications/information/government-information",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-07-04",
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
          scIntroEn: {
            json: [
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
            ],
          },
          scIntroFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Le Navigateur de prestations est un outil principalement pour les professionnels qui aident les gens à recevoir leurs prestations gouvernementales.",
                  },
                ],
              },
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/alpha",
            scId: "TAG_STAGE_ALPHA",
            scTermEn: "alpha",
            scTermFr: "alpha",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Building a draft tool or service and testing it to see if it meets needs.",
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
                        "Construire une première version d’un outil ou d’un service et le tester pour savoir s’il répond aux besoins.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2022-10-01",
          scDatePaused: null,
          scDateEnded: null,
          scLabProjectSummaryEn: {
            json: [
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
          scLabProjectSummaryFr: {
            json: [
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
          scLabProjectUpdates: [
            {
              scId: "DIFFICULTIES-FACED-BY-COMMUNITY-WORKERS",
              scTitleEn:
                "Difficulties faced by community workers who help people with their benefits",
              scTitleFr:
                "Difficultés rencontrées par les travailleuses et travailleurs communautaires qui aident les gens avec leurs prestations",
              scPageNameEn:
                "/en/projects/benefits-navigator/difficulties-community-workers-help-people-benefits",
              scPageNameFr:
                "/fr/projets/navigateur-prestations/difficultes-travailleuses-travailleurs-communautaires-aident-gens-prestations",
              scDateIssued: "2023-07-31",
            },
            {
              scId: "PAGE-BN-STAYING-INFORMED-GOVERNMENT-BENEFITS-SERVICES",
              scTitleEn: "Staying informed on government benefits and services",
              scTitleFr:
                "Rester informé sur les prestations et services gouvernementaux",
              scPageNameEn:
                "/en/projects/benefits-navigator/staying-informed-government-benefits-services",
              scPageNameFr:
                "/fr/projets/navigateur-prestations/rester-informe-prestations-services-gouvernementaux",
              scDateIssued: "2024-06-21",
            },
          ],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Alert-v1",
              },
              _path:
                "/content/dam/decd-endc/content-fragments/preview-sclabs/components/alerts/projects/benefits-navigator/project-closed",
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
              _model: {
                title: "SCLabs-Content-v1",
              },
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
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "BENEFITS-NAVIGATOR-OVERVIEW-FEATURES-V2",
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
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-CONTENT-IMG-OVERVIEW-NEWS",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
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
                                value:
                                  "there are service changes or disruptions",
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
                },
              ],
              scLabImage: {
                _model: {
                  title: "SCLabs-Image-v1",
                },
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
                              value: "a list of benefits to filter the news:",
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
                                      value: "Home and Community program care",
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
                                      value: "Prestation dentaire canadienne",
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
              scLabLayout: "image-vertical-line-content",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-CONTENT-IMG-OVERVIEW-SEARCH",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
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
                },
              ],
              scLabImage: {
                _model: {
                  title: "SCLabs-Image-v1",
                },
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
                              value: "a search bar to enter the benefit name",
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
                                              value: "Remboursement d'impôt",
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
              scLabLayout: "image-vertical-line-content",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-CONTENT-IMG-OVERVIEW-LEARN",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
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
                                value:
                                  "quels sont les formulaires nécessaires;",
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
                },
              ],
              scLabImage: {
                _model: {
                  title: "SCLabs-Image-v1",
                },
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
                                      value: "sections with details, such as:",
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
                          value: "La page Sécurité de la vieillesse contient :",
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
              scLabLayout: "image-vertical-line-content",
            },
          ],
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/client-hub/dashboard-overview",
          scId: "CLIENT-HUB-DASHBOARD-OVERVIEW",
          scPageNameEn: "/en/projects/dashboard",
          scPageNameFr: "/fr/projets/tableau-de-bord",
          scTitleEn: "New dashboard for My Service Canada Account",
          scTitleFr: "Nouveau tableau de bord pour Mon dossier Service Canada",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: null,
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
          scSubject: [
            "gc:subjects/ec-economics-and-industry/benefits",
            "gc:subjects/in-information-and-communications/information/government-information",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-06-28",
          scDateModifiedOverwrite: "2024-06-21",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
            width: 1433,
            height: 937,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
            width: 1433,
            height: 937,
          },
          scSocialMediaImageAltTextEn:
            "Image of a man sitting in a chair with a laptop on his lap. Background is a screen with icons and coins.",
          scSocialMediaImageAltTextFr:
            "Image d'un homme assis dans un fauteuil avec un ordinateur portable sur les genoux. L'arrière-plan est un écran avec des icônes et des pièces de monnaie.",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
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
            ],
          },
          scIntroFr: {
            json: [
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
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/beta",
            scId: "TAG_STAGE_BETA",
            scTermEn: "beta",
            scTermFr: "bêta",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Continuing to improve a usable tool or service while collecting feedback.",
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
                        "Continuer d’améliorer un outil ou un service fonctionnel et obtenir de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2012-10-01",
          scDatePaused: null,
          scDateEnded: null,
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
          scLabProjectUpdates: [
            {
              scId: "PAGE-HUB-OVERVIEW",
              scTitleEn: "Overview of My Service Canada dashboard",
              scTitleFr:
                "Aperçu du tableau de bord de Mon dossier Service Canada",
              scPageNameEn: "/en/projects/dashboard/overview",
              scPageNameFr: "/fr/projets/tableau-de-bord/apercu",
              scDateIssued: "2024-06-21",
            },
          ],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
                            value:
                              "find contact information if you require help",
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
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/digital-standards-playbook/playbook-overview",
          scId: "PLAYBOOK-OVERVIEW",
          scPageNameEn: "/en/projects/digital-standards-playbook",
          scPageNameFr: "/fr/projets/guide-normes-numeriques",
          scTitleEn: "Digital Standards Playbook",
          scTitleFr: "Directives sur les normes relatives au numérique",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: "2024-02-15T11:11:00.000-05:00",
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
                      "Des directives pour aider les équipes à fournir des services qui répondent aux besoins de la clientèle.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/pr-processes/standards",
            "gc:subjects/in-information-and-communications/information/government-information",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-11-24",
          scDateModifiedOverwrite: "2024-10-21",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
            width: 500,
            height: 335,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
            width: 500,
            height: 335,
          },
          scSocialMediaImageAltTextEn:
            "Decorative image of a monitor, mobile phone and tablet.",
          scSocialMediaImageAltTextFr:
            "Image décorative d'un moniteur, d'un téléphone cellulaire et d'une tablette.",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
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
            ],
          },
          scIntroFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Les Directives sur les normes relatives au numérique (normes numériques) fournissent une orientation aux employés du gouvernement du Canada qui conçoivent et fournissent des services numériques.",
                  },
                ],
              },
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/live",
            scId: "TAG_STAGE_LIVE",
            scTermEn: "live",
            scTermFr: "mise en ligne",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Maintaining and updating an existing tool or service based on data and feedback.",
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
                        "Entretenir et mettre à jour un outil ou un service existant en fonction des données et de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2023-10-01",
          scDatePaused: null,
          scDateEnded: null,
          scLabProjectSummaryEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We want to show how to apply the digital standards by using them to improve the playbook to make it more useful for public servants.",
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
                      "Par l'utilisation des normes numériques, notre objectif est d'améliorer les directives en continu afin de le rendre plus utile pour les fonctionnaires.",
                  },
                ],
              },
            ],
          },
          scLabProjectUpdates: [
            {
              scId: "PAGE-DS-HOW-WE-UPDATED-PLAYBOOK",
              scTitleEn: "How we updated the Digital Standards Playbook",
              scTitleFr:
                "Comment nous avons mis à jour les Directives sur les normes relatives au numérique",
              scPageNameEn:
                "/en/projects/digital-standards-playbook/how-updated-digital-standards-playbook",
              scPageNameFr:
                "/fr/projets/guide-normes-numeriques/comment-mis-a-jour-directives-normes-numériques",
              scDateIssued: "2024-10-21",
            },
            {
              scId: "AWARENESS-USE-GAPS",
              scTitleEn:
                "What we learned about awareness, use and gaps of the Digital Standards Playbook",
              scTitleFr:
                "Ce que nous avons appris sur la connaissance, l'utilisation et les lacunes des Directives sur les normes relatives au numérique",
              scPageNameEn:
                "/en/projects/digital-standards-playbook/awareness-use-gaps",
              scPageNameFr:
                "/fr/projets/guide-normes-numeriques/connaissance-utilisation-lacunes",
              scDateIssued: "2024-01-30",
            },
          ],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-ABOUT-DIGITAL-STANDARDS",
              scContentEn: {
                json: [
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "About the digital standards",
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
                          "The digital standards are a set of 10 principles that help the Government of Canada build user-centric services for people, businesses and communities. They guide teams through designing digital services in a way that best serves Canadians.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "The Digital Standards Playbook was developed to expand on the principles to guide and empower public servants towards what good services look like. The playbook also provides practical guidance and tools to deliver services that are easy-to-use, inclusive, effective and secure.",
                      },
                    ],
                  },
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "Help improve the playbook",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          'We\'ve listened and are updating the standards based on your feedback. You can find the updated guidance on the Digital Standards Playbook with a "new version" label. New guidance is being released regularly so be sure to check back often. The new guidance now includes a survey where you can share your ideas on how we can improve.',
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
                          "Les normes relatives au numérique sont une série de 10 principes qui aident le gouvernement du Canada à concevoir des services centrés sur les utilisateurs destinés au public, aux entreprises et aux collectivités. Les normes aident les équipes à concevoir les services numériques qui répondent le mieux aux besoins de la population canadienne.",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Les Directives sur les normes relatives au numérique ont été élaborées pour approfondir les principes visant à aider les fonctionnaires à offrir de bons services. Les directives renferment également des conseils et des outils pratiques pour offrir des services faciles à utiliser, inclusifs, efficaces et sécurisés.",
                      },
                    ],
                  },
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "Contribuer à l’amélioration des directives",
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
                          "Nous avons pris connaissance de vos commentaires et sommes en train de mettre à jour les directives en fonction de ceux-ci. Vous trouverez les Directives sur les normes relatives au numérique à jour avec la mention « nouvelle version ». Nous publions régulièrement de nouveaux conseils donc assurez-vous de les consulter souvent pour en prendre connaissance. Les nouveaux conseils comportent un sondage grâce auquel vous pouvez nous faire part de vos idées sur les façons de nous améliorer.",
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
              scId: "BUTTON-DS-READ-GUIDANCE",
              scTitleEn: "Read and comment on the new guidance",
              scTitleFr: "Lire et commenter les nouvelles directives",
              scDestinationURLEn:
                "https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html",
              scDestinationURLFr:
                "https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html",
              scButtonType: ["gc:custom/decd-endc/button-type/primary"],
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "PLAYBOOK-SHARE-THOUGHTS",
              scContentEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "You can also share your thoughts and suggestions by email at ",
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
                          "The playbook will continue to evolve to better meet your needs. Expect to see updates here as we refine the content.",
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
                          "Vous pouvez également transmettre vos idées et suggestions par courriel à l'adresse ",
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
                          "Les directives continueront d'évoluer pour mieux répondre à vos besoins. Nous publierons ici les mises à jour visant à en améliorer le contenu.",
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
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/ei-indigenous/overview",
          scId: "PAGE-EI-INDIGENOUS",
          scPageNameEn: "/en/projects/transforming-ei-indigenous-peoples",
          scPageNameFr:
            "/fr/projets/transformer-assurance-emploi-peuples-autochtones",
          scTitleEn: "Transforming EI with Indigenous peoples",
          scTitleFr:
            "Transformer l'assurance-emploi avec les peuples autochtones",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "We're collaborating with First Nations, Inuit, and Métis peoples to learn about their experiences and improve EI.",
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
                      "Nous collaborons avec les Premières Nations, les Inuits et les Métis afin de connaître leurs expériences et améliorer le programme d’assurance emploi.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/ec-economics-and-industry/insurance/employment-insurance",
            "gc:subjects/ec-economics-and-industry/benefits",
            "gc:subjects/pe-persons/aboriginal-peoples",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-08-29",
          scDateModifiedOverwrite: "2024-08-29",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/ei-indigenous/ei-for-indigenous.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/ei-indigenous/ei-for-indigenous.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/ei-indigenous/ei-for-indigenous.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/ei-indigenous/ei-for-indigenous.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageAltTextEn: "People discussing",
          scSocialMediaImageAltTextFr: "Des gens qui discutent",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We're collaborating with First Nations, Inuit, and Métis peoples to learn about their experiences and improve EI.",
                  },
                ],
              },
            ],
          },
          scIntroFr: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Nous collaborons avec les Premières Nations, les Inuits et les Métis afin de connaître leurs expériences et améliorer le programme d'assurance emploi.",
                  },
                ],
              },
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/discovery",
            scId: "TAG_STAGE_DISCOVERY",
            scTermEn: "discovery",
            scTermFr: "découverte",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Defining a problem, exploring needs and evaluating existing solutions.",
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
                        "Définir un problème, explorer les besoins et évaluer les solutions existantes.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2024-06-01",
          scDatePaused: null,
          scDateEnded: null,
          scLabProjectSummaryEn: {
            json: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value:
                      "We're talking with Indigenous peoples who get EI benefits and their advocates to learn about their experiences and improve EI.",
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
                      "Nous sommes en train de consulter les Autochtones qui reçoivent des prestations d'assurance emploi et leurs porte-parole afin de connaître leurs expériences et améliorer le programme d’assurance emploi.",
                  },
                ],
              },
            ],
          },
          scLabProjectUpdates: [],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-ABOUT-EI-INDIGENOUS",
              scContentEn: {
                json: [
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "About the research ",
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
                          "Our team wants to better understand First Nations, Inuit, and Métis peoples’ experiences in dealing with Employment Insurance (EI). Our goal is to find issues that they might face when applying for and managing their EI benefits and work together to solve them.",
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
                        value: "Finding issues",
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
                          "We aim to understand the issues that Indigenous peoples might have with EI, such as:",
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
                              "obstacles finding timely information about EI benefits and how they work, which can lead to missing out on getting the help needed",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "difficulty in applying because of unclear language and requirements",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "supports that are hard to get, especially in areas with limited in-person services or steady internet",
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
                        value: "Working together",
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
                          "By working with Indigenous peoples, partners, and communities from all over the country, we’ll help ensure our solutions are:",
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
                              "adaptable and inclusive to a variety of needs and experiences",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "simple and easy to understand",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "reliable and transparent across the entire EI process",
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
                        value: "Learn more ",
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
                          "Please email our team if you have questions about this project at ",
                      },
                      {
                        nodeType: "link",
                        data: {
                          href: "mailto:edsc.recherche.ae-ei.research.esdc@servicecanada.gc.ca",
                        },
                        value:
                          "edsc.recherche.ae-ei.research.esdc@servicecanada.gc.ca",
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
                          "We’ll share new learnings and updates on Service Canada Labs as this work continues.",
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
                          "Notre équipe souhaite mieux comprendre les expériences des Premières Nations, des Inuits et des Métis concernant l'assurance-emploi. Notre objectif est de relever les problèmes auxquels ils peuvent être confrontés lorsqu'ils demandent ou gèrent leurs prestations d'assurance-emploi et de travailler ensemble pour les résoudre.",
                      },
                    ],
                  },
                  {
                    nodeType: "header",
                    style: "h2",
                    content: [
                      {
                        nodeType: "text",
                        value: "Déterminer les enjeux",
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
                          "Nous cherchons à comprendre les problèmes que les peuples autochtones pourraient rencontrer dans le cadre de l'assurance-emploi tels que :",
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
                              "des obstacles à trouver rapidement des informations sur les prestations d'assurance-emploi et leur fonctionnement, ce qui peut les empêcher d'obtenir l'aide indispensable;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "des difficultés à présenter une demande en raison d'un langage et des exigences peu clairs;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "des difficultés à obtenir du soutien, surtout dans les régions où les services en personne et les services internet réguliers sont restreints.",
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
                        value: "Travailler ensemble",
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
                          "En travaillant avec les peuples, nos partenaires et les communautés autochtones de l'ensemble du pays, nous contribuerons à faire en sorte que nos solutions soient :",
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
                              "capables de s'adapter et de s'intégrer dans une variété de besoins et d'expériences;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "simples et faciles à comprendre;",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "fiables et transparentes tout au long du processus de l'assurance-emploi.",
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
                        value: "En savoir plus",
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
                          "Si vous avez des questions concernant ce projet, envoyez un courriel à notre équipe à l'adresse suivante : ",
                      },
                      {
                        nodeType: "link",
                        data: {
                          href: "mailto:edsc.recherche.ae-ei.research.esdc@servicecanada.gc.ca",
                        },
                        value:
                          "edsc.recherche.ae-ei.research.esdc@servicecanada.gc.ca",
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
                          "Nous partagerons les résultats et les mises à jour de notre recherche sur les laboratoires de Service Canada à mesure que le travail se poursuit.",
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
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/integrated-channel/making-easier-benefits",
          scId: "MAKING-EASIER-BENEFITS-PAGE",
          scPageNameEn: "/en/projects/making-easier-get-benefits",
          scPageNameFr: "/fr/projets/faciliter-obtention-prestations",
          scTitleEn: "Making it easier to get benefits",
          scTitleFr: "Faciliter l'obtention des prestations",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: null,
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
          scSubject: [
            "gc:subjects/ec-economics-and-industry/benefits",
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-02-13",
          scDateModifiedOverwrite: "2024-02-13",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
            width: 720,
            height: 464,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/integrated-channel/men-women-people-disabilities.png",
            width: 720,
            height: 464,
          },
          scSocialMediaImageAltTextEn:
            "Men and women welcoming people with disabilities",
          scSocialMediaImageAltTextFr:
            "Hommes et femmes accueillant des personnes en situation de handicap",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
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
            ],
          },
          scIntroFr: {
            json: [
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
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/discovery",
            scId: "TAG_STAGE_DISCOVERY",
            scTermEn: "discovery",
            scTermFr: "découverte",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Defining a problem, exploring needs and evaluating existing solutions.",
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
                        "Définir un problème, explorer les besoins et évaluer les solutions existantes.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2023-12-01",
          scDatePaused: null,
          scDateEnded: null,
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
          scLabProjectUpdates: [],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-ABOUT-RESEARCH",
              scContentEn: {
                json: [
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
                          "Getting benefits at Service Canada should be easy, whether you use the phone, web, mail or go in person. By learning from you about what works well and what needs fixing, we'll be in a better position to meet your needs.",
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
                            value:
                              "pourquoi ils passent d'une option à l'autre;",
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
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/overview",
          scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
          scPageNameEn: "/en/projects/oas-benefits-estimator",
          scPageNameFr: "/fr/projets/estimateur-prestations-sv",
          scTitleEn: "Old Age Security Benefits Estimator",
          scTitleFr:
            "Estimateur des prestations de la Sécurité de la vieillesse",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
          ],
          scLabsNewExpiryDate: "2024-01-14T12:00:00.000-05:00",
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
          scSubject: [
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: "digital services",
          scKeywordsFr: "services numériques",
          scContentType: ["gc:content-types/service-description"],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-03-03",
          scDateModifiedOverwrite: "2023-03-03",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2670,
            height: 1543,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
            width: 2670,
            height: 1543,
          },
          scSocialMediaImageAltTextEn:
            " Older couple using the estimator on a computer",
          scSocialMediaImageAltTextFr:
            " Couple âgé qui utilise l'estimateur sur un ordinateur",
          scNoIndex: false,
          scNoFollow: false,
          scIntroEn: {
            json: [
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
            ],
          },
          scIntroFr: {
            json: [
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
            ],
          },
          scLabProjectStatus: ["gc:custom/decd-endc/project-status/current"],
          scLabProjectStagev2: {
            _model: {
              title: "Tag-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/tags/stage/beta",
            scId: "TAG_STAGE_BETA",
            scTermEn: "beta",
            scTermFr: "bêta",
            scDescriptionEn: {
              json: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Continuing to improve a usable tool or service while collecting feedback.",
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
                        "Continuer d’améliorer un outil ou un service fonctionnel et obtenir de la rétroaction.",
                    },
                  ],
                },
              ],
            },
          },
          scDateStarted: "2021-10-01",
          scDatePaused: null,
          scDateEnded: null,
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
          scLabProjectUpdates: [
            {
              scId: "WHAT-WE-LEARNED",
              scTitleEn:
                "What we learned on Service Canada Labs before going live on Canada.ca",
              scTitleFr:
                "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",
              scPageNameEn:
                "/en/projects/oas-benefits-estimator/what-we-learned",
              scPageNameFr:
                "/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",
              scDateIssued: "2023-07-02",
            },
            {
              scId: "HOW-FEEDBACK-SHAPING-ESTIMATOR",
              scTitleEn: "How feedback is shaping the estimator",
              scTitleFr: "Façonner l’estimateur grâce à la rétroaction",
              scPageNameEn:
                "/en/projects/oas-benefits-estimator/how-feedback-shaping",
              scPageNameFr:
                "/fr/projets/estimateur-prestations-sv/faconner-grace-retroaction",
              scDateIssued: "2023-12-12",
            },
            {
              scId: "NEW-STEP-BY-STEP-FORMAT-PAGE",
              scTitleEn: "The estimator’s new step-by-step format",
              scTitleFr: "Le nouveau format étape par étape de l’estimateur",
              scPageNameEn: "/en/projects/oas-benefits-estimator/new-format",
              scPageNameFr:
                "/fr/projets/estimateur-prestations-sv/nouveau-format",
              scDateIssued: "2024-12-04",
            },
          ],
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-ESTIMATE-YOUR-BENEFITS",
              scContentEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Estimate your benefits and let us know what you think!",
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
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Estimez vos prestations et dites-nous ce que vous en pensez!",
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
              _model: {
                title: "SCLabs-Button-v1",
              },
              scId: "TRY-THE-ESTIMATOR",
              scTitleEn: "Try the estimator",
              scTitleFr: "Essayer l'estimateur",
              scDestinationURLEn: "https://ep-be.alpha.service.canada.ca/en",
              scDestinationURLFr: "https://ep-be.alpha.service.canada.ca/fr",
              scButtonType: ["gc:custom/decd-endc/button-type/primary"],
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
              scId: "CONTENT-DISCOVER-THE-OLD-AGE-SECURITY-BENEFITS",
              scContentEn: {
                json: [
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

export const allUpdatesData = {
  data: {
    sclabsPageV1List: {
      items: [
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-navigator/updates/difficulties-community-workers",
          scId: "DIFFICULTIES-FACED-BY-COMMUNITY-WORKERS",
          scPageNameEn:
            "/en/projects/benefits-navigator/difficulties-community-workers-help-people-benefits",
          scPageNameFr:
            "/fr/projets/navigateur-prestations/difficultes-travailleuses-travailleurs-communautaires-aident-gens-prestations",
          scTitleEn:
            "Difficulties faced by community workers who help people with their benefits",
          scTitleFr:
            "Difficultés rencontrées par les travailleuses et travailleurs communautaires qui aident les gens avec leurs prestations",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Benefits Navigator",
              scTitleFr: "Navigateur de prestations",
              scPageNameEn: "/en/projects/benefits-navigator",
              scPageNameFr: "/fr/projets/navigateur-prestations",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "Describes the problems identified in our user research and other reports on access to government benefits.",
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
                      "Décrit les problèmes identifiés dans nos recherches avec les utilisateurs et d’autres rapports portant sur l'accès aux prestations gouvernementales.",
                  },
                ],
              },
            ],
          },
          scSubject: ["gc:subjects/ec-economics-and-industry/benefits"],
          scKeywordsEn: "benefits",
          scKeywordsFr: "bénéfices, prestations",
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-07-31",
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
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-navigator/overview",
            scId: "BENEFITS-NAVIGATOR-OVERVIEW",
            scTitleEn: "Benefits Navigator",
            scTitleFr: "Navigateur de prestations",
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
            scPageNameEn: "/en/projects/benefits-navigator",
            scPageNameFr: "/fr/projets/navigateur-prestations",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "NAVIGATOR-DIFFICULTIES-MAIN",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "DIFFICULTIES-COMMUNITY-WORKERS",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Difficulties faced by community workers who help people with their benefits",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Government benefits are designed to improve the lives of Canadians. Many benefits help people based on their health, job, housing, or family situation.",
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
                              "According to the 2022 Auditor General’s report, accessing these benefits can be hard for many reasons (see ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.oag-bvg.gc.ca/internet/English/parl_oag_202205_01_e_44033.html",
                            },
                            value:
                              "Access to Benefits for Hard-to-Reach Populations",
                          },
                          {
                            nodeType: "text",
                            value: ").",
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
                              "The report lists a few of those reasons. It also lists some options available to those who need help with applying.",
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
                              "The report says that people often rely on community organizations to learn about the help they could receive. We saw a similar trend in other research reports. From that, we concluded that community workers play an important role in helping people get government benefits. So, we decided to learn more about the problems that they face when they carry out this task.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Here are some problems that we identified from our own research studies and other reports.",
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
                              "It takes time to learn about government benefits",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We talked to several community workers who said it takes a lot of time and effort to become familiar with government benefits. This is because there are so many of them, they come from different sources, and they have different eligibility criteria.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "They also said it’s hard to understand information on government websites. This was also mentioned in the reports we read.",
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
                              "It's hard to stay updated on news about benefits",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "From our research, we learned that community workers try to stay updated on news about benefits, but don’t have a good way to do so.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "There isn’t one location that a person can go to see all the updates. Instead, the workers we talked to said that they made their own solutions. Some created news alerts, others subscribed to newsletters. Despite that, they were sure that they were missing some updates.",
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
                              "It's hard to understand eligibility conditions and the application process",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "The reports we read said that it’s difficult to apply for benefits because applications are long and ask for a lot of information.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "The workers we talked to said that it’s hard to know which forms people need and where to find them.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Complicated eligibility criteria make it hard to know if someone qualifies for a benefit. This can stop people from starting a long application process. Most don’t want to spend the effort if they don’t think they qualify.",
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
                              "We want to make it easier to understand government benefits",
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
                              "To fix the problems identified in our research, we want to make a tool that simplifies information about government benefits.",
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
                              "This tool will make it easier for anyone to:",
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
                                value: "be aware of benefits ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "know how to apply ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "stay updated on changes ",
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
                              "By making this information easier to understand, we believe more people will apply for the benefits to which they are entitled.",
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
                            value:
                              "Difficultés rencontrées par les travailleuses et travailleurs communautaires qui aident les gens avec leurs prestations",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Les prestations du gouvernement sont conçues pour améliorer la vie des gens. Plusieurs prestations aident les personnes selon leur état de santé, leur emploi, leur logement ou leur situation familiale.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Selon le rapport de la vérificatrice générale de 2022, l’accès aux prestations peut être difficile pour de nombreuses raisons (voir ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_202205_01_f_44033.html",
                            },
                            value:
                              "L’accès aux prestations pour les populations difficiles à joindre",
                          },
                          {
                            nodeType: "text",
                            value: ").",
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
                              "Le rapport énumère quelques-unes de ces raisons. Il énumère aussi des options disponibles pour les gens qui ont besoin d’aide pour faire la demande de prestations.",
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
                              "Le rapport explique que les gens ont souvent recours aux organismes communautaires pour en savoir plus sur l'aide qu’ils pourraient recevoir. Nous avons constaté une tendance similaire dans d’autres projets de recherche. Nous en avons conclu que les travailleuses et travailleurs communautaires jouent un rôle important en aidant les gens à obtenir des prestations gouvernementales. Nous avons donc décidé d’en savoir plus sur les obstacles rencontrés lorsqu’ils accomplissent cette tâche.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Voici quelques problèmes que nous avons identifiés dans nos recherches et d’autres rapports. ",
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
                              "Il faut du temps pour se renseigner sur les prestations",
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
                              "Nous avons parlé à plusieurs travailleuses et travailleurs communautaires qui ont dit qu’il faut beaucoup de temps et d’efforts pour se familiariser avec les prestations gouvernementales. La raison est qu’elles sont très nombreuses, proviennent de sources différentes et ont des critères d’admissibilité différents.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Ils nous ont aussi dit qu’il est difficile de comprendre l’information sur les sites Web du gouvernement. C'est également ce qui ressort des rapports que nous avons lus.",
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
                              "Il est difficile de se tenir au courant des nouveautés à propos des prestations",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nos recherches nous ont appris que les travailleuses et travailleurs communautaires essaient de se tenir au courant des nouvelles concernant les prestations, mais n'ont pas de bon moyen de le faire.",
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
                              "Il n'existe pas d'endroit où l'on peut consulter toutes les mises à jour. Au lieu de cela, les travailleuses et travailleurs auxquels nous avons parlé ont dit qu'ils avaient trouvé leurs propres solutions. Certaines personnes ont créé des alertes, d’autres se sont abonnées à des bulletins d'information. Malgré cela, elles étaient sûres que des mises à jour leur échappaient.",
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
                              "Il est difficile de comprendre les conditions d'admissibilité et la procédure de demande",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Les rapports que nous avons lus indiquent qu'il est difficile de demander des prestations parce que les formulaires sont longs et exigent beaucoup d'informations.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Les travailleuses et travailleurs auxquels nous avons parlé ont dit qu'il était difficile de savoir de quels formulaires les gens avaient besoin et où les trouver.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "La complexité des critères d'admissibilité fait qu'il est difficile de savoir si une personne a droit à une prestation. Cela peut empêcher les gens d'entamer une longue procédure de demande. La plupart ne veulent pas faire cet effort s'ils pensent qu'ils n'ont pas droit à une prestation. ",
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
                              "Nous voulons faciliter la compréhension des prestations gouvernementales ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Pour résoudre les problèmes identifiés dans nos recherches, nous voulons créer un outil qui simplifie l'information sur les prestations gouvernementales. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Cet outil permettra de mieux :",
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
                                value: "connaître les prestations;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "savoir comment présenter une demande;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "rester au courant des changements.",
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
                              "En rendant ces informations plus faciles à comprendre, nous pensons que plus de personnes demanderont les prestations auxquelles elles ont droit. ",
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
                _model: {
                  title: "SCLabs-Image-v1",
                },
                scId: "COMMUNITY-WORKERS-IMAGE",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
                  width: 555,
                  height: 321,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/community-workers.jpg",
                  width: 555,
                  height: 321,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn: "Community workers helping people",
                scImageAltTextFr:
                  "Travailleuses et travailleurs communautaires qui aident des gens",
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
          ],
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-navigator/updates/staying-informed-government-benefits-services",
          scId: "PAGE-BN-STAYING-INFORMED-GOVERNMENT-BENEFITS-SERVICES",
          scPageNameEn:
            "/en/projects/benefits-navigator/staying-informed-government-benefits-services",
          scPageNameFr:
            "/fr/projets/navigateur-prestations/rester-informe-prestations-services-gouvernementaux",
          scTitleEn: "Staying informed on government benefits and services",
          scTitleFr:
            "Rester informé sur les prestations et services gouvernementaux",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Benefits Navigator",
              scTitleFr: "Navigateur de prestations",
              scPageNameEn: "/en/projects/benefits-navigator",
              scPageNameFr: "/fr/projets/navigateur-prestations",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "This article explains why community workers have difficulties staying up to date on changes to government benefits and how we could solve this problem.",
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
                      "Cet article explique pourquoi les travailleuses et travailleurs communautaires ont de la difficulté à se tenir au courant des changements apportés aux prestations gouvernementales et comment dont nous pourrions résoudre ce problème.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-06-21",
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
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/benefits-navigator/overview",
            scId: "BENEFITS-NAVIGATOR-OVERVIEW",
            scTitleEn: "Benefits Navigator",
            scTitleFr: "Navigateur de prestations",
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
            scPageNameEn: "/en/projects/benefits-navigator",
            scPageNameFr: "/fr/projets/navigateur-prestations",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-BN-STAYING-INFORMED-MAIN",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONTENT-BN-STAY-INFORMED-MAIN",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Staying informed on government benefits and services",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "In a previous article, we talked about the ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "/en/projects/benefits-navigator/difficulties-community-workers-help-people-benefits",
                            },
                            value:
                              "difficulties faced by community workers who help people with their benefits",
                          },
                          {
                            nodeType: "text",
                            value:
                              ". One of these difficulties was staying up to date on changes to these services. If community workers are not aware of changes, then they might give the wrong advice to the people they are trying to help. This could lead to delayed or missed benefits. This is a problem not just for the community workers, but also for anyone seeking information about benefits.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "In this article, we dive more into the cause of this problem and how we could solve it.",
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
                              "The problem: information about benefits and services is spread out",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We learned from our research that there is no one source for updates about benefits. We tried to find a list of updates on Canada.ca but we couldn’t. The closest we could find was the ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/en/news.html",
                            },
                            value: "News",
                          },
                          {
                            nodeType: "text",
                            value:
                              " section. But this is a collection of news releases, media advisories and speeches. It doesn’t have a complete list of updates about benefits and services that is easy to understand.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Instead, if someone wants to find information about changes to benefits, they must search through multiple webpages or call us.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "When we talked to community workers, they confirmed that this is a pain point. To overcome this, they reported using a range of strategies to stay up to date, including:",
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
                                value: "ministerial newsletters",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "Google Alerts",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "CBC headlines and X (Twitter)",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "information from other team members or team leads",
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
                              "These community workers were frustrated ️that they had to constantly check websites. They said that there were too many sources for them to manage, and that they were sure that they were missing important updates. One community worker we spoke to even mentioned that they heard of a change to a benefit 3 months after the change took effect.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Service Canada's research says that most people go online to get information about government benefits. But only 74% find what they need in a reasonable amount of time (Client Experience Survey 2021 to 2022).",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "People should be able to quickly find updates about benefits online so that they don’t miss hearing about new benefits or important changes to them.",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "The solution: the Benefits newsfeed",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We think a newsfeed might be a solution to this problem. It’s designed to keep you informed in real time about changes to government benefits and services.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Here's what makes it special:",
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
                                value: "relevant information:",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " the newsfeed only has updates about benefits and service delivery, not press releases",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "information from all federal departments in one place:",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " information is gathered from all relevant departments, so you don't have to search in several places",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "easy-to-use search:",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " a search bar and filters allow you to find what you’re looking for",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "easy-to-understand information:",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " updates are written in plain language, and tags tell you whether a benefit or service is new or has been updated",
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
                              "Rester informé sur les prestations et services gouvernementaux",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Dans un article précédent, nous avons parlé des ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "/fr/projets/navigateur-prestations/difficultes-travailleuses-travailleurs-communautaires-aident-gens-prestations",
                            },
                            value:
                              "difficultés rencontrées par les travailleuses et travailleurs communautaires qui aident les gens avec leurs prestations",
                          },
                          {
                            nodeType: "text",
                            value:
                              ". L'une des questions soulevées était la difficulté de se tenir au courant des changements à ces services. S'ils ne connaissent pas les changements, les travailleuses et travailleurs communautaires risquent de donner des conseils erronés aux personnes qu'ils essaient d'aider. Il s'agit d'un problème non seulement pour les travailleuses et travailleurs communautaires, mais aussi pour toute personne qui veut se renseigner sur les prestations.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Dans cet article, nous examinons la cause de ce problème et la manière dont nous pourrions le résoudre.",
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
                              "Le problème : l’information sur les prestations et les services est dispersée",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nos recherches nous ont appris qu'il n'existe pas de source unique pour les mises à jour liées aux prestations. Nous avons essayé sans succès de trouver une liste de mises à jour sur Canada.ca. La meilleure source d'information est la section ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/fr/nouvelles.html",
                            },
                            value: "Nouvelles",
                          },
                          {
                            nodeType: "text",
                            value:
                              ". Toutefois, il s'agit d'une collection de communiqués de presse, d'avis aux médias, d'annonces et de discours. Il ne s'agit pas d'une liste complète de mises à jour sur les prestations et les services facile à comprendre.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Au lieu de cela, si quelqu'un veut trouver de l’information sur les changements apportés aux prestations, il doit parcourir de nombreuses pages Web ou nous appeler.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Lorsque nous avons parlé aux travailleuses et travailleurs communautaires, ils nous ont confirmé que c’était un problème. Pour le surmonter, ils ont déclaré avoir recours à différentes stratégies pour se tenir au courant, dont :",
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
                                  "les bulletins d'information ministériels;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "les alertes Google;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les actualités nationales et X (Twitter);",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les informations fournies par d'autres membres ou chefs d'équipe.",
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
                              "Ces travailleuses et travailleurs communautaires étaient frustrés ️de devoir constamment vérifier les sites Web. Ils ont déclaré qu'il y en avait trop à gérer et qu'ils étaient sûrs de manquer des mises à jour importantes. Un travailleur communautaire avec qui nous avons discuté a même mentionné qu'il avait entendu parler des changements à une prestation 3 mois après qu’ils soient entrés en vigueur.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "La recherche de Service Canada indique que la plupart des gens vont en ligne pour se renseigner sur les prestations gouvernementales. Seulement 74 % des personnes trouvent ce dont elles ont besoin dans un délai raisonnable (sondage sur l'expérience client 2021 à 2022).",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Les gens devraient pouvoir trouver rapidement les mises à jour sur les prestations en ligne pour ne pas rater les nouvelles prestations ou les changements importants.",
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
                              "La solution : un fil d’actualité pour les prestations",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nous proposons un fil d’actualité comme solution à ce problème. Il est conçu pour vous tenir informé en temps réel des modifications apportées aux prestations et services gouvernementaux.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Voici ce qui le rend unique :",
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
                                value: "des informations pertinentes :",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " le fil d'actualité ne contient que des mises à jour sur les prestations et les services, pas de communiqués de presse;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "l'information de tous les ministères fédéraux en un seul endroit :",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " les informations de tous les ministères concernés sont regroupées, vous n'avez pas à chercher à plusieurs endroits;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "une recherche facile à utiliser :",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " une barre de recherche et des filtres vous permettent de trouver rapidement ce que vous cherchez;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "de l’information facile à comprendre :",
                                format: {
                                  variants: ["strong"],
                                },
                              },
                              {
                                nodeType: "text",
                                value:
                                  " les mises à jour sont écrites en langage clair et des étiquettes indiquent si une prestation ou un service est nouveau ou a été mis à jour.",
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
                scId: "IMAGE-BN-STAYING-INFORMED",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
                  width: 900,
                  height: 600,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/benefits-newsfeed.jpg",
                  width: 900,
                  height: 600,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn: "People adding content to a web page",
                scImageAltTextFr:
                  "Personnes qui ajoutent du contenu sur une page Web",
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
                title: "SCLabs-Image-v1",
              },
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
                        value: "Image du fil d'actualité pour les prestations",
                      },
                    ],
                  },
                ],
              },
              scLongDescHeadingEn:
                "Text version of the image Benefits newsfeed",
              scLongDescHeadingFr:
                "Version textuelle de l'image Fil d'actualité pour les prestations",
              scLongDescEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Benefits newsfeed",
                        format: {
                          variants: ["strong"],
                        },
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
                            value: "Filter by benefit type",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "Search by benefit name",
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
                        value: "Result 1",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Canada Dental Care Plan | December 11, 2023 New",
                        format: {
                          "margin-left": " 40.0px",
                        },
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Launch of the Canada Dental Care Plan",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "Applications for the new Canadian Dental Care Plan (CDCP) will open in phases.",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Starting in mid-December 2023, letters will be mailed to seniors aged 87 and above who may qualify.",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Visit Canada.ca for the full schedule of when you can apply.",
                        format: {
                          "margin-left": " 40.0px",
                        },
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Result 2",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Employment Insurance | October 15, 2023 Updated",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Increase of the maximum number of weeks of Employment Insurance (EI) Sickness benefits to 26 weeks",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "Effective for claims with a start date on or after December 18, 2022, the maximum number of weeks of benefits you can receive is now extended from 15 to 26 weeks. This extension also applies to special benefits for self-employed people. For claims initiated before December 18, 2022, the maximum entitlement remains at 15 weeks.",
                        format: {
                          "margin-left": " 40.0px",
                        },
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Result 3",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Old Age Security | September 15, 2023 Updated",
                        format: {
                          "margin-left": " 40.0px",
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
                          "New Old Age Security (OAS) rates coming in October 2023",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "Starting in October 2023, your basic Old Age Security (OAS) pension will increase. The maximum monthly payment will be $707.68. For those 75 and over, the maximum OAS pension will be $778.45 per month.",
                        format: {
                          "margin-left": " 40.0px",
                        },
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
                        value: "Fil d'actualité pour les prestations",
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
                            value: "Filtrer par type de prestation",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value: "Rechercher par nom",
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
                        value: "Résultat 1",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Régime canadien de soins dentaires | 11 décembre 2023 Nouveau",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Lancement du Régime canadien de soins dentaires",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "Dans le cadre du Régime canadien de soins dentaires (RCSD), les demandes seront acceptées progressivement.",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Dès la mi-décembre 2023, des lettres seront envoyées aux personnes âgées de 87 ans et plus qui pourraient être admissibles.",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Visitez Canada.ca pour savoir quand vous pouvez faire une demande.",
                        format: {
                          "margin-left": " 40.0px",
                        },
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Résultat 2",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Assurance-emploi | 15 octobre 2023 Mis à jour",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Augmentation du nombre maximal de semaines d’indemnité de maladie de l’assurance-emploi à 26 semaines",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "Pour les demandes dont la date de début est à partir du 18 décembre 2022, le nombre maximal de semaines d’indemnité que vous pouvez recevoir passe de 15 à 26 semaines. Cette prolongation s’applique également aux prestations spéciales pour les travailleurs autonomes. Pour les demandes initiées avant le 18 décembre 2022, le nombre maximal de semaines d’indemnité reste fixé à 15.",
                        format: {
                          "margin-left": " 40.0px",
                        },
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value: "Résultat 3",
                      },
                    ],
                  },
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Sécurité de la vieillesse | 15 septembre 2023 Mis à jour",
                        format: {
                          "margin-left": " 40.0px",
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
                          "Nouveaux taux de la Sécurité de la vieillesse en vigueur à partir d’octobre 2023",
                        format: {
                          variants: ["strong"],
                          "margin-left": " 40.0px",
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
                          "À partir d’octobre 2023, votre pension de base de la Sécurité de la vieillesse (SV) augmentera. Le maximum versement mensuel sera 707,68 $. Pour les personnes âgées de 75 ans et plus, le maximum sera 778,45 $ par mois.",
                        format: {
                          "margin-left": " 40.0px",
                        },
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
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/client-hub/updates/overview",
          scId: "PAGE-HUB-OVERVIEW",
          scPageNameEn: "/en/projects/dashboard/overview",
          scPageNameFr: "/fr/projets/tableau-de-bord/apercu",
          scTitleEn: "Overview of My Service Canada dashboard",
          scTitleFr: "Aperçu du tableau de bord de Mon dossier Service Canada",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "New dashboard for My Service Canada Account",
              scTitleFr:
                "Nouveau tableau de bord pour Mon dossier Service Canada",
              scPageNameEn: "/en/projects/dashboard",
              scPageNameFr: "/fr/projets/tableau-de-bord",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "Overview of the features of the new dashboard for My Service Canada Account.",
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
                      "Aperçu des fonctionnalités du nouveau tableau de bord de Mon dossier Service Canada.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-06-21",
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
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/client-hub/dashboard-overview",
            scId: "CLIENT-HUB-DASHBOARD-OVERVIEW",
            scTitleEn: "New dashboard for My Service Canada Account",
            scTitleFr:
              "Nouveau tableau de bord pour Mon dossier Service Canada",
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
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              width: 1433,
              height: 937,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/dashboard-overview.png",
              width: 1433,
              height: 937,
            },
            scPageNameEn: "/en/projects/dashboard",
            scPageNameFr: "/fr/projets/tableau-de-bord",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-HUB-OVERVIEW-DASHBOARD",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONTENT-HUB-OVERVIEW-DASHBOARD",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h3",
                        content: [
                          {
                            nodeType: "text",
                            value: "Information is clearly presented",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "On the dashboard, you will find:",
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
                                value: "all your benefits on the same page",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "a menu to access your personal information and security settings",
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
                            value: "Information clairement présentée",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Sur le tableau de bord, vous trouverez : ",
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
                                  "toutes vos prestations sur la même page; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "un menu pour accéder à vos informations personnelles et à vos paramètres de sécurité.",
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
                scId: "IMAGE-HUB-OVERVIEW-DASHBOARD",
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
                scImageAltTextEn:
                  "My dashboard page from My Service Canada Account",
                scImageAltTextFr:
                  "Page Mon tableau de bord de Mon dossier Service Canada",
                scImageCaptionEn: {
                  json: null,
                },
                scImageCaptionFr: {
                  json: null,
                },
                scLongDescHeadingEn: "Text version of the image My dashboard",
                scLongDescHeadingFr:
                  "Version textuelle de l’image Mon tableau de bord",
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
                                        "the name of the site: My Service Canada Account",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "an “Account” menu",
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
                                        "Employment Insurance, with a link to applications, payments and claims, taxes, reports and documents, personal information",
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
                                        "Canada Pension Plan, with a link to applications, payments, taxes, documents, provisions, personal information",
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
                            "Le tableau de bord contient les éléments suivants : ",
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
                                      value:
                                        "le nom du site : Mon dossier Service Canada; ",
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
              },
              scLabLayout: "image-vertical-line-content",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-HUB-OVERVIEW-CARD",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONETNT-HUB-OVERVIEW-CARD",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h3",
                        content: [
                          {
                            nodeType: "text",
                            value: "Actions are easy to find and to complete",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "For each benefit, you will find:",
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
                                  "all the actions you can complete in the My Service Canada Account",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "actions organized by category to help you find what you are looking for",
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
                            value: "Actions faciles à trouver et à accomplir",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Pour chacune des prestations, vous trouverez : ",
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
                                  "toutes les actions que vous pouvez accomplir à partir de Mon dossier Service Canada; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les actions organisées par catégorie pour vous aider à trouver ce que vous cherchez.",
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
                scId: "IMAGE-HUB-OVERVIEW-CARD",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-card-en.png",
                  width: 759,
                  height: 498,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-card-fr.png",
                  width: 758,
                  height: 498,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn:
                  "Partial image of the Employment Insurance section of the dashboard",
                scImageAltTextFr:
                  "Image partielle de la section Assurance-emploi du tableau de bord",
                scImageCaptionEn: {
                  json: null,
                },
                scImageCaptionFr: {
                  json: null,
                },
                scLongDescHeadingEn:
                  "Text version of the image Employment Insurance",
                scLongDescHeadingFr:
                  "Version textuelle de l’image Assurance-emploi",
                scLongDescEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value: "The Employment Insurance section includes:",
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
                                "a link “Applications, payments and claims, taxes, reports and documents, personal information” to show a list of actions",
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
                              value: "actions organized by category, such as:",
                            },
                            {
                              nodeType: "line-break",
                              content: [],
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Most requested",
                                    },
                                    {
                                      nodeType: "line-break",
                                      content: [],
                                    },
                                    {
                                      nodeType: "unordered-list",
                                      content: [
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value: "View my status updates",
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
                                              value: "View my payments",
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
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Applications",
                                    },
                                    {
                                      nodeType: "line-break",
                                      content: [],
                                    },
                                    {
                                      nodeType: "unordered-list",
                                      content: [
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value: "View my status updates",
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
                                                "Apply for Employment Insurance",
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
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Payments and claims",
                                    },
                                    {
                                      nodeType: "line-break",
                                      content: [],
                                    },
                                    {
                                      nodeType: "unordered-list",
                                      content: [
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value: "View my payments",
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
                                              value: "View my latest claim",
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
                                              value: "View my past claims",
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
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Reports and documents",
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
                          value: "La section Assurance-emploi contient :",
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
                                "un lien « Demandes de prestations, paiements et demandes, impôts, rapports et documents, renseignements personnels » qui affiche une liste d’actions;",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "des actions classées par catégorie, telles que :",
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "En demande",
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
                                                "Consulter l'état de ma demande",
                                            },
                                          ],
                                        },
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value: "Consulter mes paiements",
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
                                      value: "Demandes de prestations",
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
                                                "Consulter l'état de ma demande",
                                            },
                                          ],
                                        },
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value:
                                                "Présenter une demande d'assurance-emploi",
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
                                      value: "Paiements et demandeS",
                                    },
                                    {
                                      nodeType: "unordered-list",
                                      content: [
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value: "Consulter mes paiements",
                                            },
                                          ],
                                        },
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value:
                                                "Consulter ma dernière demande",
                                            },
                                          ],
                                        },
                                        {
                                          nodeType: "list-item",
                                          content: [
                                            {
                                              nodeType: "text",
                                              value:
                                                "Consulter mes demandes antérieures",
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
                                      value: "Rapports et documents",
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
              scLabLayout: "image-vertical-line-content",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-HUB-OVERVIEW-PROFILE",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONTENT-HUB-OVERVIEW-PROFILE",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h3",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Your information can be viewed and updated in one place",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "On the profile page, you will be able to view and update your:",
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
                                value: "address",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "telephone number",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "banking information for direct deposit",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "language of correspondence",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "consent to communicate on your behalf",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "preference for email notifications (Alert me)",
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
                              "Consultation et mise à jour de vos renseignements personnels à un endroit",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Sur la page de profil, vous pourrez consulter et mettre à jour votre : ",
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
                                value: "adresse; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "numéro de téléphone; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "information bancaire pour le dépôt direct; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "langue de correspondance; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "autorisation de communiquer en votre nom; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "préférence pour les notifications par courrier électronique (Alertez-moi).",
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
                scId: "IMAGE-HUB-OVERVIEW-PROFILE",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-profile-en.png",
                  width: 759,
                  height: 498,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-profile-fr.png",
                  width: 759,
                  height: 499,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn: "Partial image of the Profile page",
                scImageAltTextFr: "Image partielle de la page Profil",
                scImageCaptionEn: {
                  json: null,
                },
                scImageCaptionFr: {
                  json: null,
                },
                scLongDescHeadingEn: "Text version of the image Profile",
                scLongDescHeadingFr: "Version textuelle de l’image Profil",
                scLongDescEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The Profile page provides access to personal information for each benefit program.",
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
                              value: "Employment Insurance:",
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Address and telephone number",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Province of residence",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Direct deposit details",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Language of correspondence",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Email notifications (Alert me)",
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
                              value: "Canada Pension Plan",
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
                            "La page Profil donne accès à vos renseignements personnels pour chaque programme de prestations. ",
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
                              value: "Assurance-emploi",
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Adresse et numéro de téléphone",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Province de résidence",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value:
                                        "Renseignements sur le dépôt direct",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Langue de correspondance",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Avis par courriel (Alertez-moi)",
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
                              value: "Régime de pensions du Canada",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
              scLabLayout: "image-vertical-line-content",
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-HUB-OVERVIEW-CONTACT",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONTENT-HUB-OVERVIEW-CONTACT",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h3",
                        content: [
                          {
                            nodeType: "text",
                            value: "Contact information is easy to find",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "On the contact us pages, you will find how to reach us:",
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
                                value: "by telephone",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "via callback",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "in person",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "by mail",
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
                            value: "Coordonnées faciles à trouver",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Sur les pages de coordonnées, vous trouverez comment nous joindre : ",
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
                                value: "par téléphone;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "par demande de rappel;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "en personne;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "par la poste.",
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
                scId: "IMAGE-HUB-OVERVIEW-CONTACT",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-contact-en.png",
                  width: 758,
                  height: 498,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/client-hub/feature-contact-fr.png",
                  width: 758,
                  height: 498,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn:
                  "Partial image of the Contact Employment Insurance page",
                scImageAltTextFr:
                  "Image partielle de la page Communiquer avec l'assurance-emploi",
                scImageCaptionEn: {
                  json: null,
                },
                scImageCaptionFr: {
                  json: null,
                },
                scLongDescHeadingEn:
                  "Text version of the image Contact Employment Insurance",
                scLongDescHeadingFr:
                  "Version textuelle de l’image Communiquer avec l'assurance-emploi",
                scLongDescEn: {
                  json: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "The Contact Employment Insurance page includes elements such as:",
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
                                "links to navigate to the information on the page:",
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Telephone",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Callback",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value:
                                        "In person at a Service Canada Centre",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Mail",
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
                                "a “Telephone” section with instructions and coordinates: Call us to speak to an Employment Insurance representative for help during the hours of operation listed below",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "telephone numbers: 1-800-206-7218 (toll-free), 1-800-529-3742 (TTY)",
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
                            "La page Communiquer avec l'assurance-emploi contient de l’information telle que :",
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
                              value: "des liens de navigation sur la page",
                            },
                            {
                              nodeType: "unordered-list",
                              content: [
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Téléphone",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Demande de rappel",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value:
                                        "En personne à un Centre Service Canada",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "list-item",
                                  content: [
                                    {
                                      nodeType: "text",
                                      value: "Poste",
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
                                "une section « Téléphone » avec des instructions et coordonnées : Appelez-nous pour parler à un représentant de l'assurance-emploi et obtenir de l'aide pendant les heures d’ouverture indiquées ci-dessous",
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          content: [
                            {
                              nodeType: "text",
                              value:
                                "des numéro de téléphone : 1-800-808-6352 (sans frais), 1-800-529-3742 (ATS)",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
              scLabLayout: "image-vertical-line-content",
            },
          ],
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/digital-standards-playbook/updates/awareness-use-gaps",
          scId: "AWARENESS-USE-GAPS",
          scPageNameEn:
            "/en/projects/digital-standards-playbook/awareness-use-gaps",
          scPageNameFr:
            "/fr/projets/guide-normes-numeriques/connaissance-utilisation-lacunes",
          scTitleEn:
            "What we learned about awareness, use and gaps of the Digital Standards Playbook",
          scTitleFr:
            "Ce que nous avons appris sur la connaissance, l'utilisation et les lacunes des Directives sur les normes relatives au numérique",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Digital Standards Playbook",
              scTitleFr: "Directives sur les normes relatives au numérique",
              scPageNameEn: "/en/projects/digital-standards-playbook",
              scPageNameFr: "/fr/projets/guide-normes-numeriques",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "Results from the first survey: awareness and use of the playbook, themes that are missing and why changing the playbook isn't enough.",
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
                      "Résultats du premier sondage : connaissance et utilisation des directives, thèmes manquants et pourquoi modifier les directives n'est pas suffisant.",
                  },
                ],
              },
            ],
          },
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
          scDateIssued: "2024-01-30",
          scDateModifiedOverwrite: "2024-01-30",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageAltTextEn: "Woman checking a giant check list",
          scSocialMediaImageAltTextFr:
            "Femme vérifiant une liste de contrôle géante",
          scNoIndex: false,
          scNoFollow: false,
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/digital-standards-playbook/playbook-overview",
            scId: "PLAYBOOK-OVERVIEW",
            scTitleEn: "Digital Standards Playbook",
            scTitleFr: "Directives sur les normes relatives au numérique",
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
                        "Des directives pour aider les équipes à fournir des services qui répondent aux besoins de la clientèle.",
                    },
                  ],
                },
              ],
            },
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
            },
            scPageNameEn: "/en/projects/digital-standards-playbook",
            scPageNameFr: "/fr/projets/guide-normes-numeriques",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "AWARENESS-USE-GAPS-INTRO-COMP",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "AWARENESS-USE-GAPS-INTRO-CONTENT",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "What we learned about awareness, use and gaps of the digital standards playbook",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "For our first survey, we wanted to learn whether people know about the ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html",
                            },
                            value:
                              "Government of Canada Digital Standards playbook",
                          },
                          {
                            nodeType: "text",
                            value:
                              " and use it. We also wanted to get feedback on our proposed changes. Here's what we've heard so far.",
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
                            value: "Awareness and use of the playbook",
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
                              "We wanted to find out if people know about and use the playbook to figure out where to focus our efforts. So far, most people who took the survey knew about the digital standards playbook.",
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
                              "Although there is a high awareness of the playbook, we saw that people are not using it very much. Only 4 out of 43 people (9%) said they used the playbook frequently.",
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
                            value:
                              "Ce que nous avons appris sur la connaissance, l'utilisation et les lacunes du guide sur les normes relatives au numérique",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Pour notre premier sondage, nous voulions savoir si les gens connaissaient le ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html",
                            },
                            value:
                              "Guide des normes relatives au numérique du gouvernement du Canada",
                          },
                          {
                            nodeType: "text",
                            value:
                              " et l'utilisaient. Nous souhaitions également obtenir de la rétroaction sur les changements proposés. Voici ce que nous avons entendu jusqu'à présent.",
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
                            value: "Connaissance et utilisation du guide",
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
                              "Nous voulions savoir si les gens connaissaient et utilisaient le guide pour déterminer où concentrer nos efforts. Jusqu'à présent, la plupart des personnes qui ont participé au sondage connaissaient le guide sur les normes relatives au numérique.",
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
                              "Bien que le guide soit très connu, nous avons constaté que les gens ne l'utilisent pas beaucoup. Seulement 4 personnes sur 43 (9 %) ont déclaré l'utiliser fréquemment.",
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
                _model: {
                  title: "SCLabs-Image-v1",
                },
                scId: "AWARENESS-USE-GAPS-INTRO-IMAGE",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
                  width: 900,
                  height: 600,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-woman-checklist.jpg",
                  width: 900,
                  height: 600,
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
                title: "SCLabs-Image-v1",
              },
              scId: "AWARENESS-USE-GAPS-FIG1",
              scImageEn: {
                _publishUrl:
                  "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-awareness-fig1v2-eng.jpg",
                width: 1912,
                height: 1157,
              },
              scImageFr: {
                _publishUrl:
                  "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-awareness-fig1v2-fra.jpg",
                width: 1912,
                height: 1157,
              },
              scImageMobileEn: null,
              scImageMobileFr: null,
              scImageAltTextEn:
                "Awareness and use of the Digital Standards Playbook (bar graph)",
              scImageAltTextFr:
                "Connaissance et utilisation des Directives sur les normes relatives au numérique (diagramme en barres)",
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
              scLongDescHeadingEn: "Figure 1 - Text version",
              scLongDescHeadingFr: "Figure 1 - Version textuelle",
              scLongDescEn: {
                json: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Awareness and use of the Digital Standards Playbook ",
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
                              '4 people answered "I am very knowledgeable of the playbook and use it frequently" ',
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              '9 people answered "I know of the playbook and use it occasionally" ',
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              '15 people answered "I know of the playbook but very rarely use it" ',
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              '15 people answered "I have no knowledge of the playbook" ',
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
                          "Connaissance et utilisation des Directives sur les normes relatives au numérique  ",
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
                              "4 personnes ont répondu « Je connais très bien les directives et je les utilise fréquemment »  ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "9 personnes ont répondu « Je connais les directives et je les utilise occasionnellement »  ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "15 personnes ont répondu « Je connais les directives, mais je ne les utilise que très rarement »  ",
                          },
                        ],
                      },
                      {
                        nodeType: "list-item",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "15 personnes ont répondu « Je n'ai aucune connaissance sur les directives »  ",
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
                            value: "how to know if a solution is the right one",
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
                        value: "Thèmes manquants dans les directives",
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
                          "Voici certains commentaires que nous avons entendus et qui devraient figurer dans les directives :",
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
                        value: "Modifier les directives n'est pas suffisant",
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
                          "De nombreuses personnes ont mentionné qu'une mise à jour des directives n'est pas ce dont elles ont le plus besoin pour les aider à comprendre et à utiliser les normes relatives au numérique dans le cadre de leur travail. Elles souhaiteraient plutôt qu'on les aide à éliminer les obstacles qui rendent difficile le respect des normes.",
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
              _model: {
                title: "SCLabs-Button-v1",
              },
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
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/digital-standards-playbook/updates/how-we-updated-playbook",
          scId: "PAGE-DS-HOW-WE-UPDATED-PLAYBOOK",
          scPageNameEn:
            "/en/projects/digital-standards-playbook/how-updated-digital-standards-playbook",
          scPageNameFr:
            "/fr/projets/guide-normes-numeriques/comment-mis-a-jour-directives-normes-numériques",
          scTitleEn: "How we updated the Digital Standards Playbook",
          scTitleFr:
            "Comment nous avons mis à jour les Directives sur les normes relatives au numérique",
          scBreadcrumbParentPages: [
            {
              scTitleEn: "Service Canada Labs",
              scTitleFr: "Laboratoires de Service Canada",
              scPageNameEn: "/en/home",
              scPageNameFr: "/fr/accueil",
            },
            {
              scTitleEn: "Digital Standards Playbook",
              scTitleFr: "Directives sur les normes relatives au numérique",
              scPageNameEn: "/en/projects/digital-standards-playbook",
              scPageNameFr: "/fr/projets/guide-normes-numeriques",
            },
          ],
          scLabsNewExpiryDate: null,
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
                      "Overview of the changes made to the Digital Standards Playbook based on the feedback received.",
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
                      "Aperçu des changements apportées aux Directives sur les normes relatives au numérique suite aux commentaires reçus.",
                  },
                ],
              },
            ],
          },
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
          scDateIssued: "2024-10-21",
          scDateModifiedOverwrite: "2024-10-21",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
            width: 900,
            height: 600,
          },
          scSocialMediaImageAltTextEn:
            "Icons representing a person, a folder, a lightbulb and a wrench",
          scSocialMediaImageAltTextFr:
            "Icônes représentant une personne, un dossier, une ampoule et une clé à molette",
          scNoIndex: false,
          scNoFollow: false,
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/digital-standards-playbook/playbook-overview",
            scId: "PLAYBOOK-OVERVIEW",
            scTitleEn: "Digital Standards Playbook",
            scTitleFr: "Directives sur les normes relatives au numérique",
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
                        "Des directives pour aider les équipes à fournir des services qui répondent aux besoins de la clientèle.",
                    },
                  ],
                },
              ],
            },
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/overview.png",
              width: 500,
              height: 335,
            },
            scPageNameEn: "/en/projects/digital-standards-playbook",
            scPageNameFr: "/fr/projets/guide-normes-numeriques",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "COMP-IMAGE-HOW-WE-UPDATED",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "CONTENT-DS-HOW-WE-UPDATED-PLAYBOOK",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "How we updated the Digital Standards Playbook",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We used the feedback received on the Digital Standards Playbook to update the guidance.",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "What's new in the playbook",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "The comments indicated that people want ",
                          },
                          {
                            nodeType: "text",
                            value: "practical guidance",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              " on how to implement the standards, specifically in the context of the Government of Canada (GC). Here are examples of what we did:",
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
                                  "developed guidance on how to design with users, from start to finish",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "organized the content into phases, so that teams know when to do the listed activities, no matter which process they use to improve services ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "added guidance on organizing user research and testing",
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
                            value: "People also wanted ",
                          },
                          {
                            nodeType: "text",
                            value: "practical resources",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              ". So, we added links to a variety of tools and resources relevant to each principle to adopt for inclusive, accessible and secure design:",
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
                                  "tools and resources on recruitment, research methods, consent and design",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "things to keep in mind when designing with users, like engaging with privacy and other teams",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "case studies to learn from",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "talent that you need on your team",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "GC policy requirements that are relevant to the digital standards",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "GC communities and training employees can join",
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
                            value: "We learned that many people wanted ",
                          },
                          {
                            nodeType: "text",
                            value: "help removing obstacles",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              " that make it hard to follow the standards. So, we clarified a few things:",
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
                                value: "digital standards are suggested steps",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "while anyone can use the playbook, it's meant to meet the needs of Government of Canada employees",
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
                            value: "What we didn't include",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Even though we used a lot of suggestions, we weren't able to include every idea we received although it may form part of future iterations.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "This includes guidance and resources on:",
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
                                  "which services digital standards apply to",
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
                                value:
                                  "how to navigate the rules for managing projects and finances in departments",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "training and mentorship to learn how to use the digital standards",
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
                            value: "What will happen now",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We will test the new digital standards as they become available and collect feedback on how we can improve to ensure that we continue to develop practical guidance.",
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
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Check out the updated digital standards as they become available. They will be identified with a “new” label on the ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html",
                            },
                            value: "Digital Standards Playbook",
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
                              "Share your thoughts and suggestions by email: ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "mailto:servicedigital-servicenumerique@tbs-sct.gc.ca",
                            },
                            value:
                              "servicedigital-servicenumerique@tbs-sct.gc.ca",
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
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Comment nous avons mis à jour les Directives sur les normes relatives au numérique",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nous avons utilisé les commentaires formulés au sujet des Directives sur les normes relatives au numérique pour mettre à jour les conseils.",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Éléments nouveaux dans les directives",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Les personnes qui ont commenté souhaitent obtenir des ",
                          },
                          {
                            nodeType: "text",
                            value: "conseils concrets",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              " sur la mise en œuvre des normes, surtout dans le contexte du gouvernement du Canada. À cette fin, nous avons notamment :",
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
                                  "élaboré des consignes sur la conception de A à Z avec les utilisateurs;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "structuré le contenu en étapes pour que les équipes sachent à quel moment exécuter les activités répertoriées, quel que soit leur processus d'amélioration des services;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "ajouté des consignes sur l'organisation de la recherche sur les utilisateurs et des essais par ces derniers.",
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
                              "Ces personnes souhaitent aussi disposer de ",
                          },
                          {
                            nodeType: "text",
                            value: "ressources concrètes",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              ". Nous avons donc ajouté des liens menant à divers outils et ressources pertinents pour chacun des principes régissant la conception inclusive, accessible et sécurisée :",
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
                                  "des outils et ressources sur le recrutement, les méthodes de recherche, le consentement et la conception;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les points à retenir dans la conception avec les utilisateurs, comme la collaboration avec les équipes, dont celle responsable de la protection des renseignements personnels;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "des études de cas qui sont source d'apprentissage;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "le talent nécessaire au sein des équipes;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les exigences politiques du gouvernement du Canada appropriées aux normes relatives au numérique;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "la formation et les communautés du gouvernement du Canada dans lesquelles les employés peuvent s'investir.",
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
                              "Selon ce que nous avons appris, nombreuses sont les personnes qui souhaitent obtenir de l'",
                          },
                          {
                            nodeType: "text",
                            value: "aide pour éliminer les obstacles",
                            format: {
                              variants: ["strong"],
                            },
                          },
                          {
                            nodeType: "text",
                            value:
                              " au respect des normes. À cet égard, nous avons tiré au clair quelques éléments :",
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
                                  "les normes relatives au numérique sont des étapes suggérées;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "bien que tout le monde puisse l'utiliser, les directives visent à répondre essentiellement aux besoins des employés du gouvernement du Canada.",
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
                            value: "Éléments exclus",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Quoique nous avons tenu compte de nombreuses suggestions, nous n'avons pu utiliser toutes les idées que nous avons reçues, mais certaines d'entre elles pourraient servir dans de futures itérations.",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nous avons notamment exclu les suggestions portant sur les sujets suivants :",
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
                                  "les types de services auxquels s'appliquent les normes relatives au numérique;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les moyens de déterminer si la solution choisie est la bonne;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "les moyens de s'y retrouver dans les règles de gestion des projets et finances au sein des ministères;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "la formation et le mentorat en lien avec l'utilisation des normes relatives au numérique.",
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
                              "Nous mettrons à l'essai les nouvelles normes au fur et à mesure qu'elles deviendront accessibles, puis nous recueillerons les commentaires sur la façon dont nous pouvons nous améliorer pour nous assurer que nous continuons à élaborer des conseils pratiques.",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Faites part de vos commentaires",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Jetez un coup d'œil aux normes relatives au numérique actualisées au fur et à mesure qu'elles deviendront accessibles. Elles porteront la mention « nouveau » dans les ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html",
                            },
                            value:
                              "Directives sur les normes relatives au numérique",
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
                              "Envoyez-nous par courriel vos réflexions et propositions à : ",
                          },
                          {
                            nodeType: "link",
                            data: {
                              href: "mailto:servicedigital-servicenumerique@tbs-sct.gc.ca",
                            },
                            value:
                              "servicedigital-servicenumerique@tbs-sct.gc.ca",
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
              scLabImage: {
                _model: {
                  title: "SCLabs-Image-v1",
                },
                scId: "IMAGE-HOW-WE-UPDATED",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
                  width: 900,
                  height: 600,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/digital-standards-playbook/digital-standards-how-we-updated.jpg",
                  width: 900,
                  height: 600,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn:
                  "Icons representing a person, a folder, a lightbulb and a wrench",
                scImageAltTextFr:
                  "Icônes représentant une personne, un dossier, une ampoule et une clé à molette",
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
          ],
        },
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/project-updates/how-feedback-is-shaping-the-estimator",
          scId: "HOW-FEEDBACK-SHAPING-ESTIMATOR",
          scPageNameEn:
            "/en/projects/oas-benefits-estimator/how-feedback-shaping",
          scPageNameFr:
            "/fr/projets/estimateur-prestations-sv/faconner-grace-retroaction",
          scTitleEn: "How feedback is shaping the estimator",
          scTitleFr: "Façonner l’estimateur grâce à la rétroaction",
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
          scLabsNewExpiryDate: "2024-01-14T08:39:00.000-05:00",
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
                      "How we use feedback to improve the Old Age Security Benefits Estimator based on client needs.",
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
                      "Comment nous utilisons la rétroaction pour améliorer l'Estimateur des prestations de la Sécurité de la vieillesse en fonction des besoins de nos clients.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: "feedback, benefits, estimator",
          scKeywordsFr: "rétroaction, prestations, estimateur",
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2023-12-12",
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
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/overview",
            scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
            scTitleEn: "Old Age Security Benefits Estimator",
            scTitleFr:
              "Estimateur des prestations de la Sécurité de la vieillesse",
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
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scPageNameEn: "/en/projects/oas-benefits-estimator",
            scPageNameFr: "/fr/projets/estimateur-prestations-sv",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "ESTIMATOR-REVIEWING-FEEDBACK",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
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
                _model: {
                  title: "SCLabs-Image-v1",
                },
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
                title: "SCLabs-Content-v1",
              },
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-COMMENT-1",
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-FUTURE-ESTIMATE",
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
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-DEFERRED-AMOUNT-COMMENT-2",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-COMMENT-2",
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-DEFERRED-AMOUNT",
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
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-COMMENT-3",
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-INCOME-QUESTION",
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
            },
            {
              _model: {
                title: "SCLabs-Comp-Content-v1",
              },
              scId: "ESTIMATOR-ESTIMATE-COMMENT-4",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-COMMENT-4",
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
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "ESTIMATOR-ESTIMATE",
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
            },
            {
              _model: {
                title: "SCLabs-Content-v1",
              },
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
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/project-updates/new-format",
          scId: "NEW-STEP-BY-STEP-FORMAT-PAGE",
          scPageNameEn: "/en/projects/oas-benefits-estimator/new-format",
          scPageNameFr: "/fr/projets/estimateur-prestations-sv/nouveau-format",
          scTitleEn: "The estimator’s new step-by-step format",
          scTitleFr: "Le nouveau format étape par étape de l’estimateur",
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
          scLabsNewExpiryDate: null,
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
                      "The Old Age Security Benefits Estimator is now presented in a step-by-step format.",
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
                      "L'Estimateur des prestations de la Sécurité de la vieillesse est maintenant présenté dans un format étape par étape.",
                  },
                ],
              },
            ],
          },
          scSubject: [
            "gc:subjects/gv-government-and-politics/government-services",
          ],
          scKeywordsEn: "estimator, oas, step-by-step, stepper, format",
          scKeywordsFr: "estimateur, sv, étape par étape, format",
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: ["gc:institutions/service-canada"],
          scDateIssued: "2024-12-04",
          scDateModifiedOverwrite: "2024-12-04",
          scAudience: null,
          scRegion: null,
          scSocialMediaImageEn: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
            width: 2670,
            height: 1710,
          },
          scSocialMediaImageFr: {
            _path:
              "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
            _publishUrl:
              "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
            width: 2670,
            height: 1710,
          },
          scSocialMediaImageAltTextEn:
            "The 1-page format was replaced by a step-by-step format.",
          scSocialMediaImageAltTextFr:
            "La format à 1 page a été remplacé par un format étape par étape.",
          scNoIndex: false,
          scNoFollow: false,
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/overview",
            scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
            scTitleEn: "Old Age Security Benefits Estimator",
            scTitleFr:
              "Estimateur des prestations de la Sécurité de la vieillesse",
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
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scPageNameEn: "/en/projects/oas-benefits-estimator",
            scPageNameFr: "/fr/projets/estimateur-prestations-sv",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "NEW-STEP-BY-STEP-FORMAT-COMPOSITE",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
                  scId: "NEW-STEP-BY-STEP-FORMAT-CONTENT",
                  scContentEn: {
                    json: [
                      {
                        nodeType: "header",
                        style: "h1",
                        content: [
                          {
                            nodeType: "text",
                            value: "The estimator’s new step-by-step format",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "In November, we changed the format of the Old Age Security Benefits Estimator. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "The 1-page format we had been using since launch had all the steps on the same page. It allowed many Canadians to get an estimate. However, we discovered that this format was not always easy to use. ",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Issues with 1-page format ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We were becoming aware of problems such as: ",
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
                                  "a lack of clarity as to how to navigate the form ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "lots of information shown at once ",
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
                            value: "Benefits of step-by-step format ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "We switched to a proven step-by-step format that will provide an easier, more consistent experience. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "This new format allows for: ",
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
                                value: "a more logical question order ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "simpler pages ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "clear navigation ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "a consistent experience with similar tools at Service Canada ",
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
                            value: "Impact on your experience ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "While the estimator may have a new look, the estimates are the same. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "If you want to share your experience with the new format, we’d love to get your comments.",
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
                              "Le nouveau format étape par étape de l’estimateur",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "En novembre, nous avons changé le format de l’Estimateur des prestations de la Sécurité de la vieillesse. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Le format à 1 page que nous utilisions depuis le lancement de l’outil présentait toutes les étapes sur la même page. Il a permis à de nombreux Canadiens d’obtenir une estimation. Cependant, nous avons découvert que ce format n’était pas toujours facile à utiliser. ",
                          },
                        ],
                      },
                      {
                        nodeType: "header",
                        style: "h2",
                        content: [
                          {
                            nodeType: "text",
                            value: "Problèmes liés au format à 1 page ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Nous avons découvert des problèmes tels qu",
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
                      {
                        nodeType: "unordered-list",
                        content: [
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "un manque de clarté quant à comment naviguer le formulaire;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "beaucoup d’information présentée en même temps.",
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
                            value: "Avantages du format étape par étape ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Nous avons opté pour un format étape par étape éprouvé qui permettra une expérience plus facile et cohérente. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Ce nouveau format perme",
                          },
                          {
                            nodeType: "span",
                            content: [
                              {
                                nodeType: "text",
                                value: "t :",
                              },
                            ],
                            data: {
                              class: "nowrap",
                            },
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
                                value: "un ordre de questions plus logique;",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "des pages plus simples; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value: "une navigation claire; ",
                              },
                            ],
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "une expérience cohérente avec des outils similaires à Service Canada. ",
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
                            value: "Effets sur votre expérience",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Bien que l’estimateur ait une nouvelle apparence, les estimations sont les mêmes. ",
                          },
                        ],
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Si vous souhaitez partager votre expérience avec ce nouveau format, nous aimerions recevoir vos commentaires.",
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
                scId: "NEW-STEP-BY-STEP-FORMAT",
                scImageEn: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
                  width: 2670,
                  height: 1710,
                },
                scImageFr: {
                  _publishUrl:
                    "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/new-step-by-step-format.jpg",
                  width: 2670,
                  height: 1710,
                },
                scImageMobileEn: null,
                scImageMobileFr: null,
                scImageAltTextEn:
                  "The 1-page format was replaced by a step-by-step format.",
                scImageAltTextFr:
                  "La format à 1 page a été remplacé par un format étape par étape.",
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
        {
          _path:
            "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/project-updates/what-we-learned",
          scId: "WHAT-WE-LEARNED",
          scPageNameEn: "/en/projects/oas-benefits-estimator/what-we-learned",
          scPageNameFr:
            "/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",
          scTitleEn:
            "What we learned on Service Canada Labs before going live on Canada.ca",
          scTitleFr:
            "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",
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
          scLabsNewExpiryDate: null,
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
                      "Here’s what we learned from the feedback collected in our alpha phase, how it’s helping us improve our tool and what’s next for our beta phase.",
                  },
                  {
                    nodeType: "line-break",
                    content: [],
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
                      "Voici ce que nous avons appris des avis recueillis au cours de notre phase alpha, comment ils nous aident à améliorer notre outil et ce qui nous attend pour notre phase bêta. ",
                  },
                ],
              },
            ],
          },
          scSubject: null,
          scKeywordsEn: null,
          scKeywordsFr: null,
          scContentType: [
            "gc:content-types/promotional-material-featured-articles",
          ],
          scOwner: null,
          scDateIssued: "2023-07-02",
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
          scLabProject: {
            _model: {
              title: "SCLabs-Page-v1",
            },
            _path:
              "/content/dam/decd-endc/content-fragments/preview-sclabs/pages/projects/oas-benefits-estimator/overview",
            scId: "OAS-BENEFITS-ESTIMATOR-OVERVIEW",
            scTitleEn: "Old Age Security Benefits Estimator",
            scTitleFr:
              "Estimateur des prestations de la Sécurité de la vieillesse",
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
            scSocialMediaImageEn: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scSocialMediaImageFr: {
              _path:
                "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              _publishUrl:
                "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/overview.jpg",
              width: 2670,
              height: 1543,
            },
            scPageNameEn: "/en/projects/oas-benefits-estimator",
            scPageNameFr: "/fr/projets/estimateur-prestations-sv",
          },
          scFragments: [
            {
              _model: {
                title: "SCLabs-Comp-Content-Image-v1",
              },
              scId: "ESTIMATOR-WHAT-WE-LEARNED",
              scLabContent: [
                {
                  _model: {
                    title: "SCLabs-Content-v1",
                  },
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
                _model: {
                  title: "SCLabs-Image-v1",
                },
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
