pipeline {
    agent any 
    
    tools {
        nodejs 'NodeJS-234'
    }

    stages {
        stage ('Code Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sganesh-30/CI-CD-Pipeline-for-NodeJS-Deployment-with-Jenkins.git'
            }
        }
        stage ('Print Node and NPM Version') {
           steps {
            sh '''
                node -v 
                npm -v
            '''
           }
        }
        stage ('Installing Dependencies') {
            steps{
                sh 'npm install'
            }
        }
        stage ('Run Unit Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}