# Inline Editable Text

A simple and easy-to-use inline editable text component for React applications.

## Installation
npm install inline-editable-text

## Usage

Import the `InlineEditableText` component:

```jsx
import InlineEditableText from 'inline-editable-text';

Use the component in your React application:


<InlineEditableText
  initialValue="Initial Value"
  onSave={(value) => console.log('New value:', value)}
  placeholder="Click to edit"
  placeholderClass="placeholder-class"
  valueClass="value-class"
/>
```

## Props
| Prop             | Type      | Description                                                | Default   |
|------------------|-----------|------------------------------------------------------------|-----------|
| initialValue     | string    | The initial value of the editable text.                    | ""        |
| onSave           | function  | Callback when text is saved. Receives new value as arg.    | Required  |
| type             | string    | The type of input. "text" or "textarea".                   | "text"    |
| placeholder      | string    | The placeholder text when the value is empty.              | ""        |
| placeholderClass | string    | CSS class applied to the placeholder text.                | ""        |
| valueClass       | string    | CSS class applied to the value text when not in edit mode.| ""        |



## License
MIT


You can copy and paste this simplified version into a new `README.md` file in the root directory of the `inline-editable-text` project.

