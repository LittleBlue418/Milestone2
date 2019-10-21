# Milestone Project 2
 
This game was designed to fullfill three key goals. To be a portfolio peice for me to show to potential employers, to be a place for the artist I am working with to display their art as a portfolio peice, and to be an engaging game to play for the user. 
 
The goal with creating a portfolio peice for myself was to write clear, well structured code that used the key JavaScript elements in a good way. It was also important to show a project that connected HTML, CSS and JavaScript together into a clean and responsive design that scales well and works well as a website.

The goal with creating a portfolio peice with the artist was for me to create the underlying mechanics and the structure of the game, enabling them to design the look and feel. This gives them free reign to diaplay their talents as a game UX designer, and to take this project to potential employers. 

The goal with creating an engaging game for the user to play was to create a game mechanic that was interesting and challenging enough to hold a players interest and encourage them to try to 'beat' the game. It was important that they not be able to win each fight by simply clicking the same 'attack' button over and over.  
 
*** 
### Website
 
You can view the website [here]( https://littleblue418.github.io/Milestone2/)

***
## UX 

### Strategy & Planning
My UX process centered on a mobile first design, that would scale responsively for any screen size but still look and play well on desktop. The style should be consistent, creating a 'world' of the game and a consistent experience. It was also important to considder how to design in a way that the user could navigate and play without breaking the imersion of playing a game.

#### User Stories
* As an Employer, I want to get an overview of the developers skill level with JavaScript and with building responsive websites. 
* As an artist I want to be able to showcase the full range of my game design skills, from characters and world building to buttons and stat containers. 
* As a player / user I want to be able to play an engaging and emersive game that rewards and challenges me. 

#### Research & Prioritization

Working from the user stories I put together the problems that I wanted to solve. Working through them it was clear that the code running the site, and the art, would need to be prioritized over advanced mechanics or overly complicated game play.  

Opportunity / Problem | Importance | Viability / Feasibility
----------------------|-------------|----------------------
A - Display my JavaScript skills | 5 | 4 
B - Provide a framework for the artist to display their skills | 3 | 3
C - Build engaging game mechanics for the user / player  | 5 | 4
D - Signpost to my CV / Portfolio | 5 | 5
E - Signpost to the artist's portfolio / other work | 5 | 5

[image here]

### Scope 
##### Initial Scope
* A landing screen that makes it clear that this is the start point for the game
* A home screen that builds the world of the game for the player
* A combat screen to diaplay the core mechanics of the game
* A shop screen to allow the user to level up 
* A map screen to present the user with a choice of enemies and show the final objective
* A menu to signpost to my CV and the artist's portfolio

##### 'Nice to Have' Scope
* More advanced images and animations for loot drops to give a more visual feedback reward to the player
* More advanced animations around the combat to give visual feedback to the player
* More advanced shop mechanics that would scale prices as the player leveld up
* A fade to black between screen changes to give a softer transition
* Log in functionality
* Game audio (with an on/off toggle)

### Structure

When thinking about how i would build the different screens it was important to me that the user should not have to wait for load time when moving from a shop screen to a home screen (or other). I felt that a refresh and page load would break the flow of the play. Forthis reason i decided to build the 'screens' of the game into the same single page website, that would complete and run on load to give the smoothest play possible. 

It was also important for me to be mindfull of the flow of play, and of the learned language of game play. For this reason rather than have navigation through a menu i worked to build clear nagivation buttons that the user can interact with. I chose instead to build the menu as a pop-up screen element within the game, and to use it to signpost to my CV as well as the artist's portfolio. 

Visual feedback for the player was another key element i included. Buttons have a size change when clicked, and are greyed out when the player cannot click them. After each action there are visual animations to show the actions taken and health loss to clearly indicate actions and consiquences. 

### Skeleton 

After working through the scope and structure I collaborated closely with the artist to discuss and draw up wireframes that would fit for a scalable screen. We decided to design for a tablet/iPad sized screen as the largest 'grow' to avoid over scaling the art, having to have multiple art files, or having to have huge art files. In this way the game is optimized for a device, but still looks good on a desktop. 

##### Wireframes & Diagrams 
You can view the mobile wireframes [here]

### Surface
Much of the surface design was built in collaboration with the artist. We worked together to establish a look and feel for the world of the game, and to ensure that backgrounds, figures and assets fit within that world. Early in the conversation we decided to go with a traditional fantasy RPG look and feel, dungeons and dragons inspired, but with more of a cute aesthetic.  
You can view the origional sketches [here]
