# PNL-Model

Mashup for Gurme Group used Qlik Sense model as source for the data and charts 

Based on  [AngularJS Template](https://github.com/yianni-ververis/capabilities-api-angular-template) and 
[materialize CSS](https://materializeweb.com/) framework

## Settings 
### Set App ID
change id in config_production object in `\js\lib\main.js`

``` 
//prod config settings
const config_production = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:",
	//production app id
	id: '5f64722b-5ea5-41f4-8bb9-8f6f92b7ecfb'
};
```
### Change URL
- Change scriptsUrl in `\js\lib\main.js``
```
let scriptsUrl = "https://" + config_production.host + config_production.prefix + "extensions/mcdonalds-dash/";
```
- change file name of qext file
- Change a name in qext file object
```
{
    "type": "mashup",
    "name": "mcdonalds-dash",
    ...
```

## SCSS command
sass --watch scss/style.scss:css/style.css
