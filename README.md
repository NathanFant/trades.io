# FOR WINDOWS USERS
# docker-compose up --build in root dir

# FOR MAC USERS
# docker-compose up --build in root dir
# In a new console tab
# cd capstone-group-2/frontend
# npm install
# npm install react-router
# npm install @emailjs/browser
# npm run dev

Trades.io "Real Work. Real Workers. Right Now"

Contributors, NEED TO ADD LINKS TO GIT PROFILES
    Nathan Fant
    Trent Wilkins
    Ryan Brown
    Dan Jump
    Vincent Gallo

Trades.io is a simple and intuitive blue collar job website that anyone can understand. It is an online marketplace where those who are looking for jobs to be completed can post ads where tradesman and job seekers can request them. The purpose is to make quick and efficient connections between those who need a job completed and those who want to work. No middleman, just work.

MVP goals
 -To have a functional website that will connect workers with jobs.
 -Our site is meant to be simple to use, simple to understand, and overall effective.
 -Implement user login, job poting and requesting, and user profile management.
 -Enable email communication between job posters and requesters when a job is requested.

User Stories

Screenshots/GIFS:

The features we have implemented are:

-Have an individual login and a profile page
    -Within this login a user can post or request jobs
    -The profile page will show jobs posted and jobs requested
    -The user has the ability to post more jobs or cancel the jobs they have requested, and also to cancel the jobs they have posted
    -Ability to select and unselect qualifications on your profile page as a job searcher

-Homepage showing all available jobs for all logged in users

Posted jobs
    -When a user posts a job they are able to give a brief description title, a more detailed description, skills required for the job, payment for the job, and the location of the job.

Requested jobs
    -We have implemented an email feature that when the user requests a job, the website will send an email to the job poster showing interest in the job.

Filters and search functions
    - users can search job postings by keyword and/or by trade skill.


 Tech Stack
  -Frontend
    -React
    -Vite
  -Backend
    -FastAPI
  - Database
    -Postgres, Docker
  -Email Integration
    -EmailJS
  -Version Control
    -Git, Gitlab

 Setup Instructions:
    In Terminal:

    1. Clone the repo [git@ssh.gitlab.galvanize.com:trenttwilkins02/capstone-group-2.git]

    2. Set up our backend
        cd backend
        docker compose up --build

    3. Set up our Frontend
        cd Frontend
        npm install
        npm run dev

 Deployment Link? If we are going to do that.

 Challenges Faced and solutions - group task
    -Agreeing on direction
    -Which features to implement


 Lessons Learned and Team Workflow Notes - group task
    -

 Future Feature Ideas
    -Add tagline to header
    -Map integration for job locations including pins
    -In app messaging feature
    -A system for ratings and reviews.
    -Completion confirmation for a job. This will allow a profile to show a workers job history, and build their credibility.

Trello Board link:
    https://trello.com/b/fT9jyrAz/blue-collar-fiverr
