# Expo
Mobile Application Development (Expo)
Download and Install Node.Js from 
# https://nodejs.org/en/ 
(16.17.0 LTS is more stable [dated: 15/9/2022 5:42PM])

Now open the CMD as an administrator and run following commands.

Command 1: npm install -g expo-cli (if there is any error, try running this command " npm cache clear --force ")
Command 2: mkdir ExpoProjects (To make a folder in the disk)
Command 3: cd ExpoProjects (To Open the folder in Terminal)
Command 4: expo init AppName (press enter after you see Bare WorkFlow options)
Command 5: cd AppName (Enter the Folder where the new App 'AppName' is installed)

Download Expo Go App on your android phone from PlayStore (Make sure your PC and Mobile Phone are connected to same wifi)

Command 6: npx expo start

Now scan the QR code through expo go then wait a few seconds.
Now open the Folder in any Code Editor (VS Code recommended). Open App.js file, change the text and see the changes on your android device. 

All Done..

Git Guide:

Download Git for Windows

First Time:

git init (in project directory)
git commit -m "== Message ==" | (Example: git commit -m "Added LoginPage.js File")
git branch -M main
git remote add origin <link of the repository> | (Example: git remote add origin github.com/maheddev/Expo.git)  
git push -u origin main

For Updation:

git status
git add .  (If Files are Red in git status)
git status
git commit -m "I have Added Code" (Use only when all files are green in git status)
git status
git push
git push -u origin master (only in case of an error)

How to Create APK FILE of EXPO Project
# https://youtu.be/7OOE4rQf7zI

Contributed by: Mahed Shahzad Nasir
