# ROT-13 NodeJS Application
A simple Node API that enables a user to post a string of up to 1,000 characters long, storing it in a PostgreSQL database, and returns an ROT-13 version of that string.

There are only 2 API endpoints:

- A GET endpoint at "/strings" which retrieves all of the original strings posted by users
- A POST endpoint at "/strings" which enables a user to post a new string and which returns the ROT-13 version of the string as a response. 

##Notes
To run the API server, run the following command:
```
npm run server
```
