## Do we need AEM?  
- no, everything can be transferred to the github repository
- but...the process already exists, so why fix what isn't broken

## Current process (high level):
- designer creates figma file
- content manager adds content to AEM
- developer fetches content from AEM and recreates page to match figma file

## Idea:
- eliminate middle man of AEM
- developer uses figma designs to create page
- all content stored locally within github repo
- content changes are addressed via Pull Requests (PRs)
- PRs are reviewed by a committee of our peers and merged if approved
- github is the single source of truth

## Rationale:
- developer still needs to fetch content from AEM and recreate page to match figma
- this usually means custom styles, and fine control over the HTML, CSS, and JS
- AEM stores content linearly
- templating only gets you the same linear (top-to-bottom) output from the content inside of AEM
- this means any custimization of the style and layout still needs to be controlled by a developer
- templates are only suitable for pages that need a common look and feel and that also conform and behave well to an expected schema in AEM (i.e. blog posts)
- templates are not suitable for anything that needs to be customized (which is virtually everything that's not a blog post).

## Time estimate (new process): 

### transfer all existing content to repo:
- 3-6 weeks (1 developer full capacity)

### new pages additions (developer):
- 1-3 days per page (1 developer full capacity)
- depends on content 
- static content means pages are easier to build
- interactive pages need more time (inlcusion of JavaScript and ensuring accessility)
- developer checks out figma file and recreates page using existing content
- everything stored locally in github repo

## Time estimate (existing process):

### new page additions (developer):
- ?? hard to say and it depends on the content inside of AEM
- the returned data from JSON is incredibly difficult to visualize due to how deeply it's nested
- all references to content are hard-coded to the position of where the content is in the returned response from AEM when we do data fetching
- this means developer mistakes are common
- this means any changes to the content in AEM can break what displayed in our app because it's all hard-coded
- overall the time to create a page is likely 1-5 days (1 developer full capacity)

## Differences:

- it's easier to maintain content if it's in the github repo
- anybody with a github account can create a pull request to be reviewed
- changes are only made if the review is approved by a committee of our peers
- content is scoped by locale keys in a translation file versus being hardcoded using an index of its position in the AEM data fetching response (new process vs. existing process) meaning it's easier to maintain in the new process

## Pros (new process):
- higher velocity (quicker design-to-dev-to-release cycle)
- easier to maintain
- less overhead (no AEM middleman)

## Cons (new process):
- content stored locally in github
- everything is public

## Considerations
- does it make sense to modernize a dead or dying product?
- do we have the resources to commit?
- do we care enough to change an existing that's already an ingrained process?
