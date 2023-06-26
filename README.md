# Open to Intern Project

This project is an internship management application that allows colleges to create and manage internships, and interns to apply for internships.

## Technologies Used

- Node.js
- Express
- MongoDB

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Narottan123/Open-to-Intern-Project.git
2. Install dependencies: npm install

## Usage

1. Start the server: npm start
2. Open your web browser and navigate to http://localhost:<port_number> to access the application.

## API Endpoints

## College APIs

1.POST /functionup/colleges: Create a college.
2.GET /functionup/collegeDetails?collegeName=<abbreviated_college_name>: Retrieve college details and the list of interns who have applied for internships at the college.

## Intern APIs

POST /functionup/interns: Create an intern document.

## Models

## College Model

{
  name: {mandatory, unique, example: "iith"},
  fullName: {mandatory, example: "Indian Institute of Technology, Hyderabad"},
  logoLink: {mandatory},
  isDeleted: {boolean, default: false}
}

## Intern Model

{
  name: {mandatory},
  email: {mandatory, valid email, unique},
  mobile: {mandatory, valid mobile number, unique},
  collegeId: {ObjectId, ref to college model},
  isDeleted: {boolean, default: false}
}


