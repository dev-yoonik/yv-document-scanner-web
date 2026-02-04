![https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png](https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png)

# Youverse Document Scan Component

[![License](https://img.shields.io/github/license/dev-yoonik/yv-document-scanner-web)](https://github.com/dev-yoonik/yv-document-scanner-web/blob/master/LICENSE)
[![Version](https://img.shields.io/github/v/release/dev-yoonik/yv-document-scanner-web?display_name=tag)](https://github.com/dev-yoonik/yv-document-scanner-web)

## Getting Started

```
npm install yv-document-scanner-web
```

# License token (JWT) setup

Before using this component, you must obtain a valid license token (JWT) from your backend service.

1. **Send an HTTP GET request** to the authentication endpoint:
   - **Endpoint**: `https://web-sdk.youverse.id/auth-token`
   - **Headers**:
     - `x-api-key`: Your API key (get it from your Youverse dashboard at [https://www.youverse.id/](https://www.youverse.id/))
   - **Parameters**:
     - `customer_bind`: Customer identifier required by the service

2. **Response**: Backend returns authentication payload containing the JWT token.

3. **Use the token** as the `license` attribute:
   ```html
   <youverse-document-scan license="JWT_TOKEN" ...></youverse-document-scan>


## Integration via NPM

Install `yv-document-scanner-web`:

```
npm i yv-document-scanner-web
```

Import `youverseDocumentScan` from `yv-document-scanner-web` into your `.js` file:

```javascript
// If you use module bundler
import { youverseDocumentScan } from 'yv-document-scanner-web';

// If you don't use module bundler
import { youverseDocumentScan } from './node_modules/yv-document-scanner-web/js/dist/youverse-document-scan.min.js';
```

Add the component name to the `.html` file.

```html
<youverse-document-scan 
    license="JWT_TOKEN"
></youverse-document-scan>
```

## Integration via CDN

Connect the script in your `.html` file. Here is the CDN link: `https://www.jsdelivr.com/package/npm/:package@:version/:file`

For example:

```html
<script src="https://cdn.jsdelivr.net/npm/yv-document-scanner-web@latest/js/dist/youverse-document-scan.min.js"></script>
```

Add the component name to the `.html` file.

```html
<youverse-document-scan 
    license="JWT_TOKEN"
></youverse-document-scan>
```

## Attributes

 **Attribute**           | **Info**                                                                                             | **Data type** | **Default Value**                                       | **Values**       
-------------------------|------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------|------------------
 **license**    | JWT license token required to authorize the component | string | - | string (required)
 **document-position-check** | Option for guided document positioning              | boolean       | true                                                    | true, false      
 **cancel-verification** | Option to cancel verification. If true, an option to cancel de verification will appear              | boolean       | false                                                    | true, false      
 **change-camera**       | Option to change camera. If true and if exist multiple cameras, an icon to switch camera will appear | boolean       | true                                                    | true, false      
 **locale**              | The language of the component interface                                                              | string        | en                                                      | en, pt, es       
 **color**               | The color of the component interface                                                                 | string        | #492280                                                 | hex color string 
 **title-text**          | Text for the component title. Translation based on the language selected                             | string        | Scan document                                      | string           
 **info-text**           | Text for the component info. Translation based on the language selected                              | string        | Make sure that your document is in the frame and is visible | string                 
 **scan-timeout**        | Timeout in milliseconds for the scan                                                                  | number        | 20000                                                   | any positive number
 **capture-on-timeout**  | If true, captures the current image when timeout occurs instead of showing retry overlay            | boolean       | false                                                   | true, false

## Events

You can subscribe to the component events.

For example:

```javascript
document.addEventListener('YV_DOCUMENT_NEXT_STEP', (event) => console.log(event.detail));
```

### Type of events:

| **Event**                    | **Description**                                                | **Event Handling**                                           |
|------------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| **YV_DOCUMENT_NEXT_STEP**          | Event triggered when a document is captured                     | Handled by a designated event listener in the application(listener)    |
| **YV_DOCUMENT_CANCEL**             | Event triggered when cancellation occurs                       | Handled by a designated event listener in the application(listener)    |
| **YV_DOCUMENT_RESPONSE_NEXT_STEP** | Event to communicate with the component after NEXT_STEP         | Dispatched by the application to signal handling components(dispatch)  |
| **YV_DOCUMENT_RESPONSE_CANCEL**    | Event to communicate with the component after CANCEL            | Dispatched by the application to signal handling components(dispatch)  |

### Response Events

 **Event**                    | **Response Parameters** | **Usage** | **Description**                                                
------------------------------|-------------|------|----------------------------------------------------------------
 **YV_DOCUMENT_NEXT_STEP**          |`{ detail: { metadata: object, image: string } }`  | `event.detail.image` | The event returns an image                    
 **YV_DOCUMENT_CANCEL** | `null` | `null` | The event has no return 

## Attest payload with your backend service

Before validating the payload, you must send the captured data to the attestation endpoint from your backend service.

1. **Send an HTTP POST request** to the attestation endpoint:
   - **Endpoint**: `https://web-sdk.youverse.id/attest`
   - **Payload**:
     - `metadata`: Metadata object generated by the component
     - `image`: Captured image data

2. **Response**: Backend returns an attestation result indicating whether the payload is valid and trusted.

For more information please [contact us](mailto:tech@youverse.id).