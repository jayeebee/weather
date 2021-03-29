# weather

https://jayeebee.github.io/weather/

This felt fairly straightforward. I was able to build and style a basic site to build the script off of, with minimal styling needed. The jquery columns aided me a lot with this.

The API calls were fairly straightforward, going step by step and logging until I reached the desired information.

It took a bit of trial and error to get the cards functional, with everything located where I wanted, including the icons which were going in the wrong location at first.

I was able to create and assign classes for the UV index, and remove classes on a new search as the color class added carried over otherwise.

I used if statements to check the UV index and apply colors accordingly. I believe the requirements had 3 values for UV index but the site we used API from had 4 so i made 4.

The hardest thing about this was using both the 5 day forecast and the local forecast for the UV index. The local forecast requires a longitude and latitude value for some reason.
I was able to store this value from the 5 day and then plug it in to my later API call, resolving the issue fairly easily.
