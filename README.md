# Vizzy REST Web API

The vizzy API is hosted at http://138.197.12.154:1729/api/

### Post API


#### GET  
Retrieves the 25 most recently shared vizzies  
  
#### Example Request:  
`GET /api/posts`

#### Example Response:
```javascript
[
  {
    "_id": "58f1b2cbbcff2a32240fce63",
    "vizzy": " {   \"id\": \"Placeholder1\",   \"canvas\": {     \"shapes\": [       {         \"id\": \"Ellipse 1\",         \"positionLink\": \"beat\",         \"position\": {           \"minX\": 1000,           \"maxX\": 1000,           \"minY\": 500,           \"maxY\": 500         },         \"type\": \"ellipse\",         \"angleLink\": \"beat\",         \"minAngle\": 0,         \"maxAngle\": 90,         \"colorLink\": \"beat\",         \"minColor\": {           \"red\": 255,           \"green\": 76,           \"blue\": 165         },         \"minOpacity\": 100,         \"maxOpacity\": 100,         \"maxColor\": {           \"red\": 0,           \"green\": 255,           \"blue\": 0         },         \"sizeLink\": \"beat\",         \"minWidth\": 1500,         \"maxWidth\": 3000,         \"minHeight\": 1000,         \"maxHeight\": 2000,         \"isSelected\": true       }     ]   } }",
    "message": "THIS IS THE SICKEST VIZZY EVAR",
    "__v": 0,
    "posted": "2017-04-15T05:42:35.013Z"
  }
]
```


#### POST  
Adds vizzy to the database 
  
#### Example Request:  
```javascript
POST /api/posts
{
  message: "THIS VIZZY IS AWESOME",
  vizzy:  {   "id": "Placeholder1",   "canvas": {     "shapes": [       {         "id": "Ellipse 1",         "positionLink": "beat",         "position": {           "minX": 1000,           "maxX": 1000,           "minY": 500,           "maxY": 500         },         "type": "ellipse",         "angleLink": "beat",         "minAngle": 0,         "maxAngle": 90,         "colorLink": "beat",         "minColor": {           "red": 255,           "green": 76,           "blue": 165         },         "minOpacity": 100,         "maxOpacity": 100,         "maxColor": {           "red": 0,           "green": 255,           "blue": 0         },         "sizeLink": "beat",         "minWidth": 1500,         "maxWidth": 3000,         "minHeight": 1000,         "maxHeight": 2000,         "isSelected": true       }     ]   } }
}
```

#### Example Response:
```javascript
{
  "message": "Post created!"
}
```
