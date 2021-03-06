# rna-utils-js

[![NPM version](http://img.shields.io/npm/v/rna-utils-js.svg)](https://www.npmjs.org/package/rna-utils-js) 
[![Build Status](https://secure.travis-ci.org/pkerpedjiev/rna-utils-js.png?branch=master)](http://travis-ci.org/pkerpedjiev/rna-utils-js) 

> Utilities for working with RNA secondary structure.

## Getting Started
Install the module with: `npm install rna-utils-js`

```javascript
var rnaUtils = require('rna-utils-js');
rnaUtils.dotbracketToPairtable("biojs"); // "hello biojs"
```

## Documentation

#### .dotbracketToPairtable(dotbracketString)

**Parameter**: `dotbracketString`
**Type**: `String`
**Example**: `((...))`

Convert a dotbracket string to a pairtable.

```javascript
rnautilsjs.dotbracketToPairtable('((...))');
//[7,76,0,0,0,2,1]
```

#### .pairtableToDotbracket(pairtable)

**Parameter**: `pairtable`
**Type**: `Array`
**Example**: `[7,7,6,0,0,0,2,1]`

Convert a pairtable to a dotbracket string.

```javascript
rnautilsjs.pairtableToDotbracket([7,7,6,0,0,0,2,1]);
//((...))
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/pkerpedjiev/rna-utils-js/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, Peter Kerpedjiev

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
