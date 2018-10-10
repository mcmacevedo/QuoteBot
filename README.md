# QuoteBot

The QuoteBot connects to the Twitter API and designated account and then posts random quotes fetched via an iQuote API connection. The tweet gets posted every 8 hours when the process is run.

The QuoteBot is created using Node.JS and several dependencies including:
<ul>
  <li> Forever
  <li> iquotes
  <li> twit
</ul>

This is hosted locally ... However deploying this application with a service like Heroku would allow for the script to run coninuously and post without the need to host it locally.
