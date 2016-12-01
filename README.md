# FoodStatus
A simple project designed to give you a crowdsourced insight into the status of dining halls at RPI.

This project is our ITWS - Fall 2016 final project.

## Deployment

This project requires Node.JS which can be installed using information from <a href = https://nodejs.org/en/download/package-manager/>here</a>.

On the first run, we'll have to install some modules... Specifically:

* express
* moment
* easyjson
* body-parser

To easily install these modules, simply run ```npm install``` and npm will take care of the rest.

After Node.JS is installed, running the project is as simple as typing ```npm start```. 

By default, the application listens on port 8080 for HTTP and API calls.

###License
This software is licensed under the BSD 2-clause license.

```
Copyright (c) 2016, Jonathan Elias Caicedo, Xinyue Yan, and Chenhao Pan
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```