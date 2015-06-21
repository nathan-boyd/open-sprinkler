install node on raspberrypi

update OS
sudo apt-get update sudo apt-get upgrade
Verify node isn't installed yet. It should print 'command not found'.
node —version

Set up the apt-get repo source
curl -sL https://deb.nodesource.com/setup | sudo bash -

Install Node itself
sudo apt-get install nodejs
node —version 
npm —version 
