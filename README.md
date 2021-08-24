# REHMAN-_20210824
Video App to Upload &amp; Run Video Content

Project Information

- This Webapp is developed on Node.Js(backend) & React.JS(frontend). 
- The database I have used for this Project is PostgresSql. I have used Sequelize as database ORM for this project.
- Jest & React testing Library is used for Unit testing of both Frontend & Backend. I have developed some basic API and component testing for both of the applications.
- Frontend application is present in the root folder with name client.
- All the videos & thumbnails will be uploaded to the public folder in root directory.


Build Project Instructions (STEPS)

- Clone the Repository
- Please Install ffmpeg in your system (very importent).
- Create two databases in Postgres (PG-ADMIN) with names (videoapp & videoapp_test)
- Please Provide DB credentials in the .ENV file, located at the root direcotry.
- cd into root directory & run npm install/ yarn install. It will install all the dependencies Backend.
- cd into the client directory inside root folder and run npm install/ yarn install. It will install all the dependencies for Frontend.
- Run migration script in in the root folder "npm run migrate"
- Run database seed script in the root folder "npm run seed". This will seed the database, however if you want application to create/insert categories on first start then    please dont run this command. Instead go to the src folder in root directory & open app.js file & then uncomment from line 28 - 39, thats it. I have also mention this in the app.js file.

- Run the application with command "npm run dev" in root folder. It will run both the projects same time and It will open the App.


Unit Testing 
- For Backend Application cd to root directory and run test command "npm run test"
- For Frontend Application cd to client directory inside root directory and run command "npm run test"


Issus & Queries
For any Issues and Queries please feel free to contact me at the following emails
1) laeeq.rehman0807@gmail.com
2) laeeq.rehman18@gmail.com
