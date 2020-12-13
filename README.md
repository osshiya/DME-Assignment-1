# DME Assignment 1 - Momentum Application
Momentum is a mobile application for users to log their daily moments and events. Instead of noting memorable moments on a paper, they can easily jot down their relection for the day any place or any time with just their mobile phone. Momentum is equipped with a passcode to keep their privacy.

- [GitHub](https://github.com/osshiya/DME-Assignment-1.git)
- [GitHub Pages](https://osshiya.github.io/DME-Assignment-1/)
- [Amphibistudio](https://student.amphibistudio.sg/10187403A/DME/DME-Assg01-S10187403A-OngShiYa/landing1.html)

## Design Process
The application is designed for all ages group but mainly adolescene and youths who are on their phones most of thhe them and keep log down their days as habit. three different groups of users; Adminstrator, Staff and Students from IMGD.

As a adolescene, I will want what I wrote to be total privacy from others.
As a youth, I will want smooth, easy navigating and comfortable experience.

- [XD]("DME-Assg1-Wireframe-S10187403A-OngShiYa.xd")

## Features
- Passcode: With numerical passcode (Modifiable)
- Profile: Project involved in and informations.
- Emoji: To represent feeling and weather for the day
- Selectable Date: To keep log of any other day missed
- Make new post: Write anything you want
- Archive: Look back to all other older posts
- Logout: Enforce privacy, need passcode to enter again

### Features Left to Implement
- Searchbar: Search for Keyword from posts
- Camera/ Upload Picture: To add more visuals to the diary
- Modify posts: To edit errors

## Technologies Used
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Ionic](https://ionicframework.com/)
    - The project uses **Ionic** to create mobile interface and icons.
- [HTML]
    - The project uses **HTML** to create formatting.
- [Javascript]
    - The project uses **Javascript** to create features.
- [CSS]
    - The project uses **CSS** to modify the components' style.

## Testing
1. Index
    1. Click on User icon to access profile.html
    2. Click on Pencil icon to create a new post at post1.html
    3. Click on the Archive icon to access all posts at archive.html
    4. Click on the Logout icon to be locked unless Passcode is entered again at landing2.html
2. Profile
    1.Try to submit an empty or filled form, confirmation message will show up, and changes will be made based from what was filled
    2. Try to submit a filled name or bio, form will be saved
    2. Try to change passcode that are stored in LocalStorage, passcode can be used on landing2.html
3. Create new post
    1. If date is not selected, alert will pop up
    2. If date is selected but the icons radio are not selected, a different alert will show up
    3. Be redirected to post2.html after all verifications are passed. Values from the previous page are stored in a SessionStorage.
    4. If inputs are not filled, alert will show up.
    5. Try to submit filled form, conrfimation message will show up and the values from both pages will be sent to restdb then be redirected to archive where data are prepend.
4. Clear post
    1. If press on the trash icon, a corfimation message will show up. Hit yes and the field will be cleared.
    2. If press on the trash icon, a corfimation message will show up. Hit no and the field will not be cleared.
4. Archive
    1. GET data from restdb when enters the page.
5. Delete selected post
    1. Don't select on a post and press on the trash icon, an alert will show up.
    2. Select a post and press on the trash icon, a confirmation message will show up, hit no and post should not be deleted.
    3. Select a post and press on the trash icon, a confirmation message will show up, hit yes and post should be deleted.
6. Logout
    1. Enter passcode stored in LocalStorage to enter index.html
    2. Try to submit a different passcode and an alert will show up
    3. If passcode is empty, sumbit a empty field
    4. No way to get to landing1.html except for first-try at the application
    

## Credits

### Media

### Acknowledgements
- I received inspiration for this project from DME Assignment01 Brief.pdf
- I received inspiration for this project from My Secret Diary - Nintendo DS
