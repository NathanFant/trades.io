<pre>

  <p style="text-align: center; font-weight: bold;" >Trades.io "Real Work. Real Workers. Right Now."</p>

  Contributors:
      Dan Jump:
        <a href="https://www.linkedin.com/in/daniel-jump/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/DanJump2" target="_blank" rel="noreferrer">GitHub</a>
      Nathan Fant:
        <a href="https://www.linkedin.com/in/nathan-fant-a28405250/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/NathanFant" target="_blank" rel="noreferrer">GitHub</a>
      Ryan Brown:
        <a href="https://www.linkedin.com/in/ryanbrowndev/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/purpocto" target="_blank" rel="noreferrer">GitHub</a>
      Trent Wilkins:
        <a href="https://www.linkedin.com/in/trent-wilkins/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/TrentTWilkins" target="_blank" rel="noreferrer">GitHub</a>
      Vincent Gallo:
        <a href="https://www.linkedin.com/in/vincent-gallo-51a3b3152/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/vpgallo" target="_blank" rel="noreferrer">GitHub</a>

  Trades.io is a simple and intuitive blue collar job website that anyone can understand. It is an
  online marketplace where those who are looking for jobs to be completed can post ads where
  tradesman and job seekers can request them. The purpose is to make quick and efficient connections
  between those who need a job completed and those who want to work. No middleman, just work.

  MVP goals
  -To have a functional website that will connect workers with jobs.
  -Our site is meant to be simple to use, simple to understand, and overall effective.
  -Implement user login, job posting and requesting, and user profile management.
  -Enable email communication between job posters and requesters when a job is requested.

  User features
    -As a user I want to see people hiring for tasks with pay and location
    -As a user I want to be able to list tasks
    -As a user I want to be able to advertise my services
    -As a job lister, I want to be able to review job takers
    -As a user I want to be able to search available jobs
    -Login: I'm a worker
    -Login: I'm looking for a worker
  Admin Features
    -As an Admin I want to be able to delete accounts/posts

  The features we have implemented are:

  -Have an individual login and a profile page
      -Ability to create accounts and log in
      -The profile page will show jobs posted and jobs requested for that user
      -The user has the ability to post more jobs or cancel the jobs they have requested,
       and also to cancel the jobs they have posted
      -Ability to select and unselect qualifications on your profile page as a job searcher

  -Homepage showing all available jobs for all logged in users
      -Searchbar and filter to allow users to comb through posted jobs
      -While logged in a user can post or request jobs

  Posted jobs
      -When a user posts a job they are able to give a brief description title, a more detailed
       description, skills required for the job, payment for the job, and the location of the job.

  Requested jobs
      -We have implemented an email feature that when the user requests a job, the website will
       send an email to the job poster showing interest in the job.
      -When a user wants to cancel a job, they can click the button again and send a confirmation
       email to the poster that they have canceled their request.

 Screenshots/GIFS:
  <img width="600px" height="400px" src="/frontend/src/assets/readme/1.png" alt="Screenshot of project"/>
  <img width="600px" height="400px" src="/frontend/src/assets/readme/2.png" alt="Screenshot of project"/>
  <img width="600px" height="400px" src="/frontend/src/assets/readme/3.png" alt="Screenshot of project"/>

  Tech Stack
    -Frontend
      -JavaScript with React and Vite
    -Backend
      -Python
        -SQLAlchemy
        -FastAPI
        -Pydantic
    - Database
      -PostgresSQL
    -External APIs
      -EmailJS
      -OpenCageData
    -Version Control
      -Git, Gitlab
    -Containerization
      -Docker


    Setup Instructions:
        In Terminal:

        1. Clone the repo [git@ssh.gitlab.galvanize.com:trenttwilkins02/capstone-group-2.git]

        2. FOR WINDOWS USERS
            -docker-compose up --build (in root dir)

        3. FOR MAC USERS
            -docker-compose up --build (in root dir)
            -In a new console tab
            -cd capstone-group-2/frontend
            -npm install
            -npm install react-router
            -npm install @emailjs/browser
            -npm run dev


  Challenges Faced and solutions
      -Agreeing on direction, and discussing it together.
      -Which features to implement, and how to implement them.
      -Using Git.
      -Mac and Windows incompatibility and containers between the two operating systems.
      -Styling whether it be inline or all in CSS.
      -Multiple branches working on the same files. making sure we are able to get our merges in line.
      -While all of the challenges were different we were able to solve them through a combination
       of communication, working together, and research.


  Lessons Learned and Team Workflow Notes
      -Branches smoothed out our production, allowing us to work on multiple tasks. There was a learning curve but
       our organization and flow improved as we progressed
      -Everyone has their own working style, and we learned to meld them together.
      -Importance of sticking to a structure that we make before coding begins. Staying in line with our plans and not
       getting sidetracked with new ideas before our current tasks are completed.
      -Communication between team members working on different branches. Making sure that we know what files
       are being touched, to minimize the chance of overlap.
      -Building a full stack application is difficult and everyone has something different to bring
       to the table. We all have our specialties.
      -Simple can be better, there is no need to reinvent the wheel.
      -Creativity is fun, pickles.

  Future Feature Ideas
      -Add tagline to header
      -Map integration for job locations including pins
      -In app messaging feature
      -A system for ratings and reviews.
      -Completion confirmation for a job. This will allow a profile to show a workers job history,
       and build their credibility.
      -Worker accreditation by Admins
      -Add picture of completed jobs

  Trello Board link:
    <a href="https://trello.com/b/fT9jyrAz/blue-collar-fiverr" target="_blank" rel="noreferrer">LinkedIn</a>
</pre>
