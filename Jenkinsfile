pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Tanmayraj31/Full_Stack_TODO'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t todo-backend .'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t todo-frontend ./frontend'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh '''
                # Create network if not exists
                docker network inspect mern-net || docker network create mern-net

                # Stop & remove old containers
                docker rm -f backend || true
                docker rm -f frontend || true

                # Run backend
                docker run -d \
                  --name backend \
                  --network mern-net \
                  -p 5000:5000 \
                  -e MONGO_URI="mongodb+srv://admin:dbPassword%40123@cluster0.vqvv9xx.mongodb.net/MERN_TODO" \
                  todo-backend

                # Run frontend
                docker run -d \
                  --name frontend \
                  --network mern-net \
                  -p 5173:5173 \
                  todo-frontend
                '''
            }
        }
    }
}








