﻿# Milestone Project 2
 
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

### Design Decisions
During the UX design process I made specific design decisions that I want to explain: 

**Not to have a traditional website menu or nav bar** 
As i was building a game it was important to me that all of the action, and actions, would be built into the game itself. For this reason all ofthe player choices and navigations are buttons in the game screens. Altyhough there is a menu, that links to other websites, it is again part of the game and appears as a pop-up within the game screen. 

***
## Features
### Existing features
* **Shop - Level up attack & defence** - The shop screen has buttons to allow the player to spend gold that they have earned to level up attack and defence. I chose to build this in as a feature rather than have the player automatically gain experience to give the player controll over how they choose to level, and to allow them to build a stratagy based on the enemy they are fighting. 
* **Enemy visibility** - The importance of the map screen is that it gives the player a clear path to their final enemy objective. As part fo this i choise not to 'hide' or grey out any of the enemies. In this way the player can choose which enemies they wish to fight in the order they wish to fight them. They can look ahead to get an idea of the end goal, and they can go back and fight weaker enemies once they have leveled up if they want to 'grind' to gain gold
* **Health Potions** - After origionally thinking about putting them into the shop as an item to purchese, I decided to instead build in a randomized loot drop after combat. This forces the player to think critically about which enemies they choose to fight, and also forces them to think strategically about how they choose to fight. They cannot simply attack each time and win the game. See player testing below for more details.  

### Features Left to Implement 
* I would like to add the ability for the player to create an account, save games and return to them later on. 
* I would like to build in music for the game to help immerse the player more fully in the world of the story. 
* I would have loved to build in character creation, custom names etc. This would ahve been part of creating an account. 
* One idea that was discussed but dropped due to time constraints was the idea of having a character chreation screen where you could choose clothing and hair colour for your character. Although this would have been part of the player account it was primarilly dropped as we would not have had enough time to draw the character assets. 

***
## Technologies Used
* [HTML](https://en.wikipedia.org/wiki/HTML) - Main language used to structure the page.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Providing styling for the site.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Adding functionality to the skill circles, as well as 'on click', 'hidden' and 'scroll'. 
* [JQuery](https://jquery.com/) - Supporting library for much of the JavaScript functionality. 
* [Font Awesome](https://fontawesome.com/) - Page icons
* [Photoshop / Illustrator](https://www.adobe.com/se/creativecloud.html?gclid=CjwKCAjw1_PqBRBIEiwA71rmtVqgSn2vcdRcH6n_2tweCJ9feZvicaaHlyuOlJio4ZYG_y4iyvk9IBoCrLMQAvD_BwE&sdid=8JD95K3M&mv=search&ef_id=CjwKCAjw1_PqBRBIEiwA71rmtVqgSn2vcdRcH6n_2tweCJ9feZvicaaHlyuOlJio4ZYG_y4iyvk9IBoCrLMQAvD_BwE:G:s&s_kwcid=AL!3085!3!281036364465!e!!g!!adobe%20creative%20suite) - Creating graphics, creating wireframes 

***
## Testing 
### Testing plan

Given the nature of this project, and the complexity of the JavaScript compared to previous projects, i decided to make a testing plan and begin early to ensure that I had tested all aspects of the project. 

### Gameplay Testing 
For the gameplay creation and testing i worked with a [friend of mine](https://github.com/parmus) who has built [his own games](https://github.com/parmus/dicy). We started the gameplay testing with pen and paper and dice, working through the combat mechanics to find a system that would be fairly simple to impliment, but would allow elements of strategy. After testing a few options we decided on a system involving enemy patterns. Each enemy would have a pattern of attack / defend moves, and the player could learn the pattern by observing the battle. In this way the player could choose when to attack and defend to maximise damage done and minimise damage taken.  

[image here]

Once the initial game was built I was able to start testing the mechanics as a player. I also worked with [another friend](https://www.linkedin.com/in/craig-fleming-633bb4125/) who has worked ss a professional GM for [Steamforged Games](https://steamforged.com/). During this testing process we decided to remove the option to buy health potions, and instead build in the mechanics for potion drop from combat. Again in this way we force the player to think tactically about how they want to play, rather than simply attacking over and over untill they win, then paying to be revived. In this way it adds a puzzle like element to the gameplay.  

### Responsive Design Testing

### Automated testing

### Accessability Testing 

### Feedback 
