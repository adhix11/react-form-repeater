import React, { useState, cloneElement } from 'react';

const FormRepeater = ({ children, initialValues, onChange }) => {
  const [formFields, setFormFields] = useState(initialValues || []);

  const handleFormChange = (rowIndex, fieldName, value) => {
    let newFormFields = [...formFields];
    newFormFields[rowIndex][fieldName] = value;
    setFormFields(newFormFields);
    onChange && onChange(newFormFields);
  };

  const addFormField = () => {
    let newRow = {};
    React.Children.forEach(children, child => {
      if (child.props.name) {
        newRow[child.props.name] = '';
      }
    });
    setFormFields([...formFields, newRow]);
    onChange && onChange([...formFields, newRow]);
  };

  const removeFormField = (index) => {
    let newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
    onChange && onChange(newFormFields);
  };

  return (
    <div>
      {formFields.map((formField, rowIndex) => (
        <div key={rowIndex} className='d-flex align-items-center justify-content-between'>
          {React.Children.map(children, child => 
            child.props.name ? cloneElement(child, {
              value: formField[child.props.name] || '',
              onChange: (e) => handleFormChange(rowIndex, child.props.name, e.target.value)
            }) : child
          )}

       
          <button type="button" className='btn btn-primary' onClick={() => removeFormField(rowIndex)}>Delete</button>
        </div>
      ))}
      <button type="button" className='btn btn-success' onClick={addFormField}>Add</button>
    </div>
  );
};

export default FormRepeater;
