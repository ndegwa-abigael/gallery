pipeline {
    agent any
    
    environment {
        SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'
 		SLACK_CHANNEL = '#general' // Slack user ID or channel name
    }
    
    tools{
        nodejs "node"
        }

    stages {
        stage ("Build") {
            steps {
                echo 'Building....'
                git branch: 'master', url: 'https://github.com/ndegwa-abigael/gallery.git'
                // Install npm dependencies
                sh 'npm install'

               
            }
            
        }
        stage ("Test") {
            steps {
               echo 'Testing....'
               sh 'npm test'
            }
        }
        stage ("Deploy") {
            steps {
               echo 'Deploying....'
               //sh 'npm start'
            }
        }
    }
      //Student email notification 
    post {  
         success { 
              slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'good',
                message: "Build Success: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})",
                tokenCredentialId: env.SLACK_CREDENTIALS
            )

                mail bcc: '', 
	        	body: 'This has been a successfull pipeline deploy!', 
		        subject: 'Successful Test Deploy', 
		        to: 'abigael.ndegwa@student.moringaschool.com';
         } 

         failure {
             slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'danger',
                message: "Build Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})",
                tokenCredentialId: env.SLACK_CREDENTIALS
            )

             mail bcc: '', 
             body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", 
             cc: '', charset: 'UTF-8', 
             mimeType: 'text/html', 
             subject: "ERROR CI: Project name -> ${env.JOB_NAME}", 
             to: "abigael.ndegwa@student.moringaschool.com";  
         }  
         
    }
}
