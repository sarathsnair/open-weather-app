@echo off
echo "Installing Bower globally.................please wait"
call npm install -g bower
echo "Installing Node modules...................wait for some more time...."
call npm install
echo "Installing Bower components............."
call bower install
echo "Installation finished"