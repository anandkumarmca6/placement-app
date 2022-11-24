# placement-app
Student Record System for Placement
# Overview
A company constantly needs to download their data to compile different reports. You need to create an interface for the employees of this company to fill in the data into the database and then download it in CSV format
# Functionalties
-	Sign Up and Sign In only for employees
-	List of students + add new student 
-	List of Interviews + form to create an interview with date
-	Allocate a student to an interview
-	Select an interview to view the list of all students and mark a result status from the list page itself
- Export student record 
# Languages & Tools Used 
- Nodejs
- Express
- Mongoose
- MongoDB
- Javascript
- EJS
- CSS
- SCSS
- MongoDB Compass
- Visual Studio Code

# Live project Link
 http://3.110.183.96:3001/
# Steps to set project locally[Windows]
- Go to terminal. Run git clone https://github.com/anandkumarmca6/placement-app.git
-  Go to root  folder inside using terminal.
- Do npm install to intsall packages
- Change mongodb url in config/mongoose.js to mongodb://localhost/placement in mongoose.connect() method.
- In index.js, change mongodb url to mongodb://localhost in MOngoStore.store() method.
- Do npm start to start local server
Your project is set up and running!. You can check with url localhost:8000
