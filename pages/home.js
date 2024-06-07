import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect } from "react";
import Card from "../components/molecules/Card";
import aemServiceInstance from "../services/aemServiceInstance";
import { Heading } from "../components/molecules/Heading";
import { ContextualAlert } from "../components/molecules/ContextualAlert";
import Image from "next/image";
import { Link } from "../components/atoms/Link";
import { ExploreUpdates } from "../components/organisms/ExploreUpdates";
import FragmentRender from "../components/fragment_renderer/FragmentRender";

export default function Home(props) {
  const pageData = props.pageData?.item;
  const experimentsData = props.experimentsData;
  const dictionary = props.dictionary;
  const updatesData = [
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/how-feedback-is-shaping-the-estimator",
      scId: "HOW-FEEDBACK-SHAPING-ESTIMATOR",
      scPageNameEn: "/en/projects/oas-benefits-estimator/how-feedback-shaping",
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
      scSubject: ["gc:subjects/gv-government-and-politics/government-services"],
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
                        value: "Façonner l’estimateur grâce à la rétroaction ",
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

  const currentProjects = experimentsData.filter((project) => {
    return (
      project.scLabProjectStatus[0] ===
      "gc:custom/decd-endc/project-status/current"
    );
  });

  const sortedProjects = (objects) => {
    // Order to sort the projects
    const sortOrder = [
      "Making it easier to get benefits",
      "Digital Standards Playbook",
      "My Service Canada Account dashboard",
      "Benefits Navigator",
      "Old Age Security Benefits Estimator",
    ];
    // Create a lookup for efficient ordering
    const titleOrder = {};
    for (let i = 0; i < sortOrder.length; i++) {
      titleOrder[sortOrder[i]] = i;
    }

    // Sort the objects based on the lookup
    const sorted = objects.sort((a, b) => {
      return titleOrder[a.scTitleEn] - titleOrder[b.scTitleEn];
    });
    // Trim to first 3 projects
    return sorted.slice(0, 3);
  };

  const displayCurrentProjects = sortedProjects(currentProjects).map(
    (project) => (
      <li key={project.scId} className="list-none ml-0">
        <Card
          showImage
          showTag={
            project.scLabsNewExpiryDate &&
            Date.now() <= new Date(project.scLabsNewExpiryDate)
          }
          tagLabel={
            props.locale === "en" ? "New update" : "Nouvelle mise à jour"
          }
          tag="new_update"
          imgSrc={
            props.locale === "en"
              ? project.scSocialMediaImageEn._publishUrl
              : project.scSocialMediaImageFr._publishUrl
          }
          imgAlt={
            props.locale === "en"
              ? project.scSocialMediaImageAltTextEn
              : project.scSocialMediaImageAltTextFr
          }
          imgHeight={
            project.scSocialMediaImageEn.height
              ? project.scSocialMediaImageEn.height
              : ""
          }
          imgWidth={
            project.scSocialMediaImageEn.width
              ? project.scSocialMediaImageEn.width
              : ""
          }
          title={props.locale === "en" ? project.scTitleEn : project.scTitleFr}
          href={
            props.locale === "en" ? project.scPageNameEn : project.scPageNameFr
          }
          description={
            props.locale === "en"
              ? project.scDescriptionEn.json[0].content[0].value
              : project.scDescriptionFr.json[0].content[0].value
          }
        />
      </li>
    )
  );

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
      >
        <Head>
          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
          </title>
          <meta
            name="description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta
            name="keywords"
            content={
              props.locale === "en"
                ? pageData.scKeywordsEn
                : pageData.scKeywordsFr
            }
          />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={pageData.scSubject}
          />
          <meta
            name="dcterms.creator"
            content={
              props.locale === "en"
                ? "Employment and Social Development Canada"
                : "Emploi et Développement social Canada"
            }
          />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-03-18" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="og:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="og:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="og:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="twitter:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="twitter:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="twitter:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
        </Head>
        <div className="mt-24">
          <FragmentRender
            locale={props.locale}
            fragments={[pageData.scFragments[0]]}
          />
        </div>
        <div className="layout-container">
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[1].scContentEn.json[0].content[0].value
              : pageData.scFragments[1].scContentFr.json[0].content[0]
                  .value}{" "}
          </h2>
          <div className="mb-8">
            <ContextualAlert
              id="info-alert"
              type="info"
              alert_icon_alt_text="info icon"
              alert_icon_id="info icon"
              message_heading={
                props.locale === "en"
                  ? pageData.scFragments[2].scTitleEn
                  : pageData.scFragments[2].scTitleFr
              }
              message_body={
                props.locale === "en" ? (
                  <>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[2].scContentEn.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[2].scContentEn.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                ) : (
                  <>
                    {
                      pageData.scFragments[2].scContentFr.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[2].scContentFr.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[2].scContentFr.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                )
              }
            />
          </div>
          <div className="mb-4">
            <ul className="grid lg:grid-cols-3 gap-6 list-none ml-0">
              {displayCurrentProjects}
            </ul>
            <div className="mt-6 flex justify-end">
              <Link
                id="projectsLink"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[3].scContentEn.json[0].content[0]
                        .data.href
                    : pageData.scFragments[3].scContentFr.json[0].content[0]
                        .data.href
                }
                lang={props.locale}
                text={
                  props.locale === "en"
                    ? pageData.scFragments[3].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[3].scContentFr.json[0].content[0]
                        .value
                }
              />
            </div>
          </div>
        </div>
        <section>
          <ExploreUpdates
            locale={props.locale}
            updatesData={updatesData}
            dictionary={dictionary}
            heading={
              props.locale === "en"
                ? pageData.scFragments[4].scContentEn.json[0].content[0].value
                : pageData.scFragments[4].scContentFr.json[0].content[0].value
            }
            linkLabel={
              props.locale === "en"
                ? pageData.scFragments[5].scContentEn.json[0].content[0].value
                : pageData.scFragments[5].scContentFr.json[0].content[0].value
            }
            href={
              props.locale === "en"
                ? pageData.scFragments[5].scContentEn.json[0].content[0].data
                    .href
                : pageData.scFragments[5].scContentFr.json[0].content[0].data
                    .href
            }
          />
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data: pageData } = await aemServiceInstance.getFragment(
    "homePageQuery"
  );
  const { data: experimentsData } = await aemServiceInstance.getFragment(
    "projectQuery"
  );
  // const { data: updatesData } = await aemServiceInstance.getFragment(
  //   "updatesQuery"
  // )
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      experimentsData: experimentsData.sclabsPageV1List.items,
      // updatesData:
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
