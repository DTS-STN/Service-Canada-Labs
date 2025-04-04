import * as React from "react";
import FragmentRender from "./FragmentRender";
import { CollapseData } from "../../__mocks__/mockStore";

export default {
  title: "Components/Fragment_Renderer/FragmentRender",
  component: FragmentRender,
  locale: "en",
};

const Template = (args) => <FragmentRender {...args} />;

export const ArticleCTA = Template.bind({});
export const TextWithImage = Template.bind({});
export const TextWithImageCollapse = Template.bind({});
export const QuoteVerticalLineContent = Template.bind({});
export const TextContent = Template.bind({});
export const TextContentQuote = Template.bind({});
export const Button = Template.bind({});
export const ImageWithCollapse = Template.bind({});

ArticleCTA.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Feature-v1",
      },
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
      scLabsButton: [
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
  ],
};

TextWithImage.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Comp-Content-Image-v1",
      },
      scId: "NAVIGATOR-DIFFICULTIES-MAIN",
      scLabContent: [
        {
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
                    value: "Access to Benefits for Hard-to-Reach Populations",
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
                    value: "It takes time to learn about government benefits",
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
                    value: "It's hard to stay updated on news about benefits",
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
                    value: "This tool will make it easier for anyone to:",
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
      },
      scLabLayout: "default",
    },
  ],
};

TextWithImageCollapse.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Comp-Content-Image-v1",
      },
      scId: "NAVIGATOR-DIFFICULTIES-MAIN",
      scLabContent: [
        {
          scId: "FEATURE-DASHBOARD",
          scContentEn: {
            json: [
              {
                nodeType: "header",
                style: "h3",
                content: [
                  {
                    nodeType: "text",
                    value: "Information is clearly presented ",
                  },
                ],
              },
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value: "On the dashboard, you will find: ",
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
                        value: "all your benefits on the same page ",
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
                    value: "Sur le tableau de bord, vous trouverez :",
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
                        value: "toutes vos prestations sur la même page;",
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
          scFragments: [
            {
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
          ],
        },
      ],
      scLabImage: {
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
        scImageAltTextFr:
          "Page Mon tableau de bord de Mon dossier Service Canada",
        scImageCaptionEn: {
          json: null,
        },
        scImageCaptionFr: {
          json: null,
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
      scLongDescHeadingEn: CollapseData.scLongDescHeadingEn,
      scLongDescHeadingFr: CollapseData.scLongDescHeadingFr,
      scLongDescEn: CollapseData.scLongDescEn,
      scLongDescFr: CollapseData.scLongDescFr,
    },
  ],
};

TextContent.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Content-v1",
      },
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
      scLabLayout: "default",
    },
  ],
};

TextContentQuote.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Content-v1",
      },
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
      scLabLayout: "quote",
    },
  ],
};

ImageWithCollapse.args = {
  locale: "en",
  fragments: [
    {
      _model: {
        title: "SCLabs-Image-v1",
      },
      scId: "NEWS-IMAGE",
      scImageEn: {
        _publishUrl: CollapseData.scImageEn._publishUrl,
        width: CollapseData.scImageEn.width,
        height: CollapseData.scImageEn.height,
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
      scImageAltTextFr: "Page Nouvelles et mises à jour sur les prestations",
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
      scLongDescHeadingEn: CollapseData.scLongDescHeadingEn,
      scLongDescHeadingFr: CollapseData.scLongDescHeadingFr,
      scLongDescEn: CollapseData.scLongDescEn,
      scLongDescFr: CollapseData.scLongDescFr,
    },
  ],
};

Button.args = {
  locale: "en",
  fragments: [
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
  ],
};

QuoteVerticalLineContent.args = {
  locale: "en",
  fragments: [
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
  ],
};
