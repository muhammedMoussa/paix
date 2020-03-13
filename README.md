# paix 🤝
> a utility to map objects props with handy config!

# Installation ⚙️

```shell
npm install paix
or
yarn add paix

```

Then...

```javascript
import { paix } from 'paix';

const source_object = { FirstName: "Jhon", LastName: "Doe", Ignored: true };
const replacement = { FirstName: 'first_name', LastName: 'last_name' };
const modified_object = paix(source_object, replacement);

console.log(modified_object);
// { Ignored: true, first_name: 'Jhon', last_name: 'Doe' };
```