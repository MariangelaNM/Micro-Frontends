# Micro-Frontends
This is a test to represent the multiple micro fronteds in Angular


-Exist the possibility to work in a mono repo (one repo) or multiple repos

--The best idea is work in a mono repo, the reason is: compatibility of version

-- in the case to use angular and react the best is multi repo




# Create the initial proyect CONTAINER
	ng new microfront --create-application=false

# Create the  proyects Virtuals
    ng generate application mf-payment --style=scss
  
    ng generate application mf-shopping --style=scss --routing=true


# Create the  proyects library
Library type project which we use to share elements between the microfrontends.

    ng generate library  commons-lib


# Project Shell as Host:
- **Add the federation of modules with @angular-architects/module-federation**

  - (module-federation) Plugin to resolve the loading of application parts to be compiled separately
  - Official definition: [Microfrontend Revolution: Module Federation in Webpack 5](https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-module-federation-in-webpack-5/)
  - Command to install: 
    ```
    npm i -D @angular-architects/module-federation
	
    ```
  - Command to install all run ( run multiple npm-scripts in parallel or sequential): 
    ```
	npm install -g npm-run-all
    ```



- **Add the use of Module Federation to microfrontends and assign ports**
  - This command creates webpack.config.js files in each of the microfrontends to enable module federation.
  ```
  ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
  ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
  ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote
  ```
	

