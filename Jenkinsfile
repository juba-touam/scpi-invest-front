node('ci-node')
{
  def GITCOMMIT_HASH = ""
  stage('Checkout')
    {
        checkout scm
        GITCOMMIT_HASH = sh(script:"git log -n 1 --pretty=format:'%H'", returnStdout: true)
    }
  stage('Install Node.js and npm')
    {
        sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
        sh 'sudo apt-get update'
        
        sh 'sudo apt-get install -y npm'
        sh 'node -v' //je verifie si node est bien installé
        sh 'npm -v' //je verifie si npm est bien installé
    }
  stage('Build')
    {
        sh 'npm install'
        sh 'npm run build'
    }

  stage('build docker image')
    {
        sh "sudo docker build -t jubatouam/scpi-invest-plus-front:${GITCOMMIT_HASH} ."
    }
  stage('push docker image')
    {
        sh "sudo docker login -u jubatouam -p Jt123456***"
        sh "sudo docker push jubatouam/scpi-invest-plus-front:${GITCOMMIT_HASH}"
        sh "sudo docker rmi jubatouam/scpi-invest-plus-front:${GITCOMMIT_HASH}"
    }
}
