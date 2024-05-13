doingazure.com Docusaurus SWA deployment

I used the handy tutorial at https://github.com/fearlessly-dev/swa-demo-docusaurus to get my local Docusaurus site up and running so please consult that for more details.

Create Docusaurus Site Locally

Step 0: Install Docusuarus


STEP 1: npx create-docusaurus@latest doingazure.com classic







cd doingazure.com



npx docusaurus start



The above command starts up a server and opens default web browser with the site now running at http://localhost:3000/



code .

In a separate terminal window, open VS Code. The command I used is “vscode .” - that’s vscode followed by a dot which is the current folder. So this opens VS Code with the current project.




 
Open the file docusaurus.config.js and change the title from ‘My Site’ to ‘Doing Azure’ and you should see it reflected automatically in the site already running in your browser. This is representative of the convenient and fast iterative local development experience.



Now for our final act, let’s deploy it to Azure Static Web Apps.

Part 2: Deploy Docusaurus Site to Azure Static Web Apps (SWA)

Step 0: Install Azure Static Web Apps extension for VS Code

Clean up in aisle 3

