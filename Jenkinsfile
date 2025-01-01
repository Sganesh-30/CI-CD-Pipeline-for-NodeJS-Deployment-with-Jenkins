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
                sh '''
                    npm install
                    npm install --save-dev jest                    
                '''
            }
        }
        stage ('Run Unit Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage ('Build Docker Image') {
            steps {
                sh 'docker build -t sganesh3010/nodecicd:$GIT_COMMIT -f Dockerfile . '
            }
        }
        stage ("Trivy Image Scanning") {
            steps {
                sh '''
                    trivy image sganesh3010/nodecicd:$GIT_COMMIT \
                        --severity LOW,MEDIUM,HIGH \
                        --exit-code 0 \
                        --quiet \
                        --format json -o trivy-image-scanning-results.json
                '''
            }
        }
    }
}