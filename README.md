Contact Rose rosemaryalicereid@gmail.com or Erik Forsberg at erik.forsberg@tretton37.com 

--> I'm Rose, a former itern at 1337 who used this code for a school project. 
--> Please contact me with any questions you have, even if it's years from Feb 8th,2017.

Erik is the product owner.
Love and Therese were the then apprentices who worked on the front end of this project: love.sjogren@tretton37.com  therese.sango@tretton37.com 

This code is the back end for an app where ninjas evaluate the clients they've worked with.
The aim of this app is to provide wellbeing with the necessary data to better match Ninjas with clients.

These were the following requirements of the project, set up by Erik Forsberg: 

- Save Evaluation
As a API user I want to save a new evaluation based on the current template, complete with answers of all the questions so that I can make my voice heard.

- Acceptance: 
No ID links between the saved evaluation and the template. The template shall have nothing to do from a database perspective with an evaluation, aka you should be able to change the template without effecting a existing evaluation.
eva user identity gets saved in a unique manner based on what information that is available in a google auth session aka it should contain both the user name and the email. 
We also want to save the date the evaluation was done, as well as the client name, a unique id.

Delete Evaluation
As a API user I want to completely delete a saved evaluation by Id

Update Evaluation Answer
As a API user I want to update a specific users already saved response to a question in an evaluation
- Acceptance: It's only the user created the evaluation that can update it, a email as an identifier is good enough security for now (in the header). If a miss match an error should be thrown and logged

Update Template
As a API user I want to save an updated version of the template so I can change the questions without affecting already done evaluations.
- Acceptance: No backtracking or audit log needed

Get Template
As a API user i want to get the current template with all the questions so I can perform a new evaluation

Get Latest Companies Evaluated by a User
As a API user I want to get a list of a specific users latest company names used in X number of latest evaluations
- Acceptance: I can get a specific users latest 5 used unique company names, as well as I can get a specific users latest 10 used unique  company names

Security (Needs completion)
As a system owner I want to have the authentication between the BFF and the node backend done the same secure way as the communication between the .net backend and the bff, so I can protect my data and ninjas

Defition of done
- Functionality has unit tests <--- (not completed by Rose)
- JSLint (done)
- Code coverage exist in build (LoC and Branch)
- NPM Scripts for running tests and building <--- (not completed by Rose)
- Add all of the user info in the header for now, not in parameters to the api calls

---> Notes
- The evaluation schema is separate from the template schema since changes in the template should not result in a changes to the evaluations already saved in the database. 
