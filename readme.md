## The goals for this assignmet are:

To convert eq.html into React components and use Redux for state management.

## Profile List requirements:

1. Left panel contains the profile list and the right panel contains the selected profile name.
2. Clicking a profile should select the profile and will be highlighted in green and the right panel will be updated.
3. Move up, move down, and add (+) icon are always shown. If the selected profile is at the most top of the list, move up will be disabled. Same goes if the selected profile is at the most bottom of the list, move down will be disabled.
4. User has 4 default profiles: Default, Game, Movie and Music. Default profiles have their own icons, can be moved up and down, but cannot be renamed or deleted. Hence delete and rename icon should not be shown on the UI if the selected profile is a default profile.
5. User can choose to add a custom profile by clicking the add (+) icon. Custom profile should be named "New Profile", added to the last of the list and should be automatically selected.
6. If a selected profile is deleted, it should automatically select the profile above the deleted profile.
7. Rename should be trimmed and do not allow just an empty space for the name.
8. Any changes by the user should be saved in the LocalStorage. If no data is stored in the LocalStorage, populate it with the 4 default profiles in the following order: Default, Game, Movie and Music. Selected profile should be "Default".
9. Profile data array would be something like this [{name: 'Default', ...}, {name: 'Game', ...}] but you are given the freedom on what other properties it should have to implement the requirements.

10. Bonus: (Completed): Implement an auto-save mechanism and pretend to call an API (there should be a dummy REST API available out there that you can use). After 3 seconds when user did a change in the profile list, it should call an API and pass the profile list array. If user made a change before the 3 seconds, it will reset the timeout and wait for 3 seconds again.

## Install

1. Go to folder which contains package.json and open the console terminal and run command "npm install" or "npm i" to install the node module dependencies
2. once the dependencies are installed run "npm run build" command run the build
3. Run "npm run serve" to run/start the webpack server
4. Once the server is started open browser and goto url "http://localhost:3000/" to view the running application

```sh
$ npm install
$ npm run build
$ npm run serve
```
