# test-helpers

[![Build Status](https://travis-ci.org/lykmapipo/test-helpers.svg?branch=master)](https://travis-ci.org/lykmapipo/test-helpers)
[![Dependencies Status](https://david-dm.org/lykmapipo/test-helpers.svg?style=flat-square)](https://david-dm.org/lykmapipo/test-helpers)
[![Coverage Status](https://coveralls.io/repos/github/lykmapipo/test-helpers/badge.svg?branch=master)](https://coveralls.io/github/lykmapipo/test-helpers?branch=master)

Sensible test helpers

## Installation

```sh
$ npm install --save @lykmapipo/test-helpers
```

## Usage
```js
import { mock, spy, expect, faker } from '@lykmapipo/test-helpers';

const spied = spy(faker.internet, 'email');

const email = faker.internet.email();
expect(email).to.exist;

expect(spied).to.have.been.calledOnce;
spied.restore();
```

## Testing

- Clone this repository

- Install all development dependencies

```sh
$ npm install
```

- Then run test

```sh
$ npm test
```

## How to contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## LICENSE

MIT License

Copyright (c) lykmapipo & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
