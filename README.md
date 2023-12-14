### README.md for `FormRepeater` Package


# FormRepeater for React

`FormRepeater` is a React component that allows dynamic addition and removal of form fields. It's designed to be easy to use and integrate with existing forms, making the process of handling multiple form inputs more streamlined and user-friendly.

## Features

- Dynamically add and remove form fields.
- Easy to integrate with existing forms.
- Customizable initial values and change handlers.

## Installation

Install `FormRepeater` via npm:

```bash
npm install react-form-repeater
```

## Usage

Import `FormRepeater` into your React component:

```javascript
import FormRepeater from 'react-form-repeater';
```

Use `FormRepeater` in your component:

```jsx
<FormRepeater initialValues={[{ name: '', email: '' }]} onChange={handleFormChange}>
  <input type="text" name="name" placeholder="Name" />
  <input type="email" name="email" placeholder="Email" />
</FormRepeater>
```

### Props

- `children`: The form fields that you want to repeat. Each field must have a `name` prop.
- `initialValues`: An array of objects representing the initial values of the form fields.
- `onChange`: A function that gets called whenever there's a change in any of the form fields.

## Example

Here is a simple example of how `FormRepeater` can be used in a form:

```jsx
import React, { useState } from 'react';
import FormRepeater from 'react-form-repeater';

const MyForm = () => {
  const [formData, setFormData] = useState([]);

  const handleFormChange = newFormData => {
    setFormData(newFormData);
  };

  return (
    <form>
      <FormRepeater initialValues={[{ name: '', email: '' }]} onChange={handleFormChange}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
      </FormRepeater>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

## Contributing

Contributions, issues, and feature requests are welcome!

## License

MIT License.
```

Copyright (c) 2012-2023 adhix11

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```
FormRepeater is a versatile React component designed for dynamic form field manipulation. It simplifies the task of adding or removing form inputs on-the-fly, making it an ideal choice for forms requiring variable input fields. Its intuitive API ensures seamless integration with existing forms, enhancing user experience and streamlining form handling in React applications.
```
