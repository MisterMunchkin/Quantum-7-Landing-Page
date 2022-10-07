# How to test this website

We no longer can just double-click on the HTML file and everything will work. This is because we have async scripts and also references to other files.

So we create a local web server for testing which is easy enough with python3. Go to the root page of this project in the terminal then run
```bash title='python3 webserver'
python3 -m http.server
```

Then go to *localhost:8000* in your web browser of choice.

That's it!

using tailwindcss
`npx tailwindcss -i ./css/quantum-cleaning.css -o ./css/tailwind-output.css` generates the css utilities