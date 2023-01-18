# Docusaurus Site Setup

## [GitHub Link](https://github.com/biohackerellie/portfolio-site/tree/main/docs)

Built using Node.js with [Docusaurus 2](https://docusaurus.io/).

Use the [Reference Guides](./Reference%20Guides/) folder for helpful guides on Markdown, as well as specifics for editing this site.

## Local Installation for development

**You must have Node.JS installed on the machine you are working from. [Installers](https://nodejs.org/en/download/)**

 Start by cloning the repo in the file directory you want to work from

*works with PS, Bash, gitbash, etc*
```
 cd /your/working/directory
 git clone https://github.com/Laurel-Public-Schools/links.git
```
Install node modules
```
cd /links
npm install
```
### Start the app
*the site will automatically spin up and only be accessible via your working machine at http://localhost:3000/*

```
npm run start
```

This command opens up a browser window. Most changes are reflected live without having to restart the server.

### Shutdown the app
```
# windows,linux 
ctrl+c

# apple
cmd+c
```


## Deployment

#### This site is deployed locally via docker but will also run on Github Pages, Vercel, etc.

To deploy locally, build the docker image from the root of the repository 
```
docker build -t <image-name>:latest .
```
*note that the period is required, that tells docker  to build from your working location*

and then make a container using the image
```
docker run --rm --name <container-name> -p 3000:3000 -d <image-name>:latest 
```

You will be able to open the static web content at http://localhost:3000

Any time updates are made to your site and are ready for live deployment, simply rebuild and run the image. *this can be done automatically on git push's via github actions or webooks*


Built by [@biohackerellie](https://www.github.com/biohackerellie)
