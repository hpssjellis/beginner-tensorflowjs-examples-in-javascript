This node server allows saving individual layers so that multiple computers can work in parrallel to train a multilayer model
Sept 8, 2018 Still a work in progress but is basically working.

Note I can't run this from github so people will have to load their own node server.

I made this on cloud 9 ( http:c9.io now absorbed by AWS) so not sure how it will work on your server.



On cloud nine use these steps

1. cd nodejs
1. nvm install 8 (Only needed on cloud9 to insure using nodejs version 8 or above)
1. npm install
1. chmod 666 tfjs-layer-0.txt 
1. chmod 666 tfjs-layer-1.txt 
1. node server.js

1. (Load the webpage however that happens on your server. Hopefully you can click a link in the output from server.js)



