# React-flask-clock

Simple website that displays the current time. Made using the React and Flask frameworks, inspired by [https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project).

## Step 1. Create the React App.

* Use 'create-react-app' to create the default React application.
* Configure a proxy to the Backend in package.json. Make sure to use "http://127..." (the number).
* Start the server with 'npm start'.

## Step 2. Create the Flask API Backend.

* Create the 'api' directory, which will contain the Flask Backend.
* Initialize a python virtual environment using the pre-installed venv tool.
* Use pip to install the flask and python-dotenv packages. Python-dotenv allows environment variables to be automically imported into the environment.
* Update the default React .gitignore to account for Python/Flask
* Start the server with 'flask run'.

## Step 3. Install Tailwind CSS.

* Install Tailwind CSS. This is a UI framework for design.

## Step 4. Deploy on Google App Engine.

* Both the frontend and the backend can be deployed onto a single app engine project on Google Cloud. The required files are 'requirements.txt' and the '*.yaml' files. 'dispatch.yaml' dispatches URL requests to the backend or the frontend. By using multiple .yaml files you can deploy an app engine app using multiple 'services'.
* Use the command 'gcloud app deploy app.yaml dispatch.yaml api/backend.yaml'
* Before deploying the frontend app, make sure you've created the /build folder by running 'npm run build'.