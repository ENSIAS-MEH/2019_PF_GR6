### About : 
It's about creating an OTOBOS application to link the two principal actors for a clean environment by offering an easy cash for the first actor and a clean place for the another actor, is it ambiguous :) well ... it's about the creation of a cleanTech application which provides reporting any kinda garbage in a specific area, in front of a Hotel, an entreprise or an important place to get it off by what we call "Service Provider" who can be an individual worker or an independent entreprise.

---

### Innovation Process Diagram : 

![](readme_media/bpmn.png)


**Analyze and gathering data :**
It's about analyzing places and gathering data from the different places, zones and cities to prioritize zones in terme of the need of the service.

**Targeting cities :**
After gathering data, we can now target a specific and well determined city according to a pre-fixed set or measures.

**Preparing the platform :**
It's the moment then to prepare our platform with the different tools such as Apis and our workflow services. This process embeds many others going through choosing the adequate dev components and the workflow packs.

**Ensuring the inter-connection :**
In this step we ensure the inter-connection between the different agents in the system.

**Evaluate and keep track of the service :**
It's ensured by the Administrator agent, liking to ensure that the work is well done and the payment process is successfully finished and there's no intern conflict between the *Service Recruiter* and the *Service Provider*.

---

### Technical Architecture :

![](readme_media/technical_architecture.png)

---

### Classes Diagram : 

![](readme_media/classes_diagram.png)

---

### Post States diagram : 

Each post describing a specific asked service has an enumeration of different states shown as below :

![](readme_media/post_states_diag.png)

---

### Set up the environment : 
Open the terminal and type : `` npm install ``

### To Start the app : 
***Start the Back-end*** :
Go to _back-end_ directory and type : ``node app.js`` to run the server on the port 1029

***Start the front-end*** : 
Go to _front-end_ directory and type : `` nodemon ``

---

### Some Interfaces :
- LoginIn :

![](readme_media/auth1.png)

---

The image in the left side is generated automatically everytime we reload the page.

- ##### Wrong SignIn process : 

![](readme_media/badSignIn.png)

---


- The available posts/jobs (after a successful sign-in process) : 

![](readme_media/posts0.png)

---

- ##### View a post details by clicking on it : 

![](readme_media/post_details.png)

---

- ##### Applying to a job : 

![](readme_media/apply_post.png)

---
- ##### Collector - Global Room : 

To access to this, just click the chat icon on the top right.
It contains the chat with all recruiters, he can go to the ChatRoom with a specific recruiter by selecting him and this is by clicking on his message

![](readme_media/global_chat.png)

---

- ##### Collector - ChatRoom : 

For example in this case, the recruiter "ATLAS Hotel" room chat is selected.

![](readme_media/ChatRoom2.png)

---

_It will be updated periodically_