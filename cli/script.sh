#!/bin/bash
echo "Beginning Project"
echo "What type of project do you want ? (Enter 1 for HTML / 2 for PHP)."
read projectType

echo "What is the name of the project ?"
read projectName
mkdir $projectName $projectName/css $projectName/js $projectName/assets

if [ $projectType -eq 1 ]
then
	fileExtension=".html"
else
	fileExtension=".php"
fi

touch $projectName/index$fileExtension $projectName/css/style.css $projectName/js/app.js

cd ./$projectName

echo "Your project is now ready. Thank you!"
