# jq-yaml
[jq-yaml](https://github.com/u4da3/jq-yaml/tree/master) is [jQuery](https://jquery.com/) plugin to parse YAML at browser-side, wrapping [js-yaml](https://github.com/nodeca/js-yaml).


### Functions

#### jQuery.getYAML
Just like `jQuery.getJSON`, but able to parse YAML data into JavaScript Object.

##### Syntax:
```javascript
jQuery.getYAML(url, param, callback);
```

##### Argumetns:

| Name     | Type     | Desc                     |
|:-------- |:-------- |:------------------------ |
| url      | String   | The URL of YAML Data.    |
| param    | Object   | HTTP Request Parameters. |
| callback | Function |                          |

##### Callback:
```javascript
function callback(yaml, status, jqXHR){...}
```
| Name   | Type   | Desc                         |
|:------ |:------ |:---------------------------- |
| yaml   | Object | Parsed Object from YAML.     |
| status | String | HTTP Response Status.        |
| jqXHR  | jqXHR  | jQuery XMLHttpRequest Object |

#### jQuery.parseYAML
Just like `JSON.parse`, but able to parse YAML data into JavaScript Object.

##### Syntax:
```javascript
var yaml = jQuery.parseYAML(text);
```

##### Argumetns:
| Name | Type   | Desc             |
|:---- |:------ |:---------------- |
| text | String | Plain YAML Text. |


##### Returns:
| Name | Type   | Desc                     |
|:---- |:------ |:------------------------ |
| yaml | Object | Parsed Object from YAML. |

## Example
See [test.html](test/test.html).
