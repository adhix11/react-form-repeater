import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormRepeater from './FormRepeater';

// Mock Child Component
const MockInput = ({ value, onChange }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        data-testid="mock-input"
    />
);

describe('FormRepeater Component', () => {
    test('renders without crashing', () => {
        render(<FormRepeater />);
    });

    test('initially renders with given initialValues', () => {
        const initialValues = [{ name: 'Initial Value' }];
        render(
            <FormRepeater initialValues={initialValues}>
                <MockInput name="name" />
            </FormRepeater>
        );
        expect(screen.getAllByTestId('mock-input')[0].value).toBe('Initial Value');
    });

    test('allows adding a new form field', () => {
        render(
            <FormRepeater initialValues={[{ name: '' }]}>
                <MockInput name="name" />
            </FormRepeater>
        );
        fireEvent.click(screen.getByText('Add'));
        expect(screen.getAllByTestId('mock-input').length).toBe(2);
    });

    test('allows removing a form field', () => {
        render(
            <FormRepeater initialValues={[{ name: '' }, { name: '' }]}>
                <MockInput name="name" />
            </FormRepeater>
        );
        fireEvent.click(screen.getAllByText('Delete')[0]);
        expect(screen.getAllByTestId('mock-input').length).toBe(1);
    });

    test('handles change events on form fields', () => {
        const onChangeMock = jest.fn();
        render(
            <FormRepeater onChange={onChangeMock} initialValues={[{ name: '' }]}>
                <MockInput name="name" />
            </FormRepeater>
        );
        fireEvent.change(screen.getByTestId('mock-input'), { target: { value: 'New Value' } });
        expect(onChangeMock).toHaveBeenCalledWith([{ name: 'New Value' }]);
    });

    test('renders correctly with no initial values', () => {
        render(
            <FormRepeater>
                <MockInput name="name" />
            </FormRepeater>
        );
        expect(screen.queryByTestId('mock-input')).toBeNull();
    });

    test('allows adding multiple new form fields', () => {
        render(
            <FormRepeater>
                <MockInput name="name" />
            </FormRepeater>
        );

        const addButton = screen.getByText('Add');
        fireEvent.click(addButton);
        fireEvent.click(addButton);

        const inputs = screen.getAllByTestId('mock-input');
        expect(inputs.length).toBe(2);
    });

    test('new form fields are added with empty values', () => {
        render(
            <FormRepeater initialValues={[{ name: 'First' }]}>
                <MockInput name="name" />
            </FormRepeater>
        );

        fireEvent.click(screen.getByText('Add'));
        const inputs = screen.getAllByTestId('mock-input');
        expect(inputs[1].value).toBe('');
    });

    test('removes a specific form field when delete button is clicked', () => {
        render(
            <FormRepeater initialValues={[{ name: 'First' }, { name: 'Second' }]}>
                <MockInput name="name" />
            </FormRepeater>
        );

        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[1]);

        const inputs = screen.getAllByTestId('mock-input');
        expect(inputs.length).toBe(1);
        expect(inputs[0].value).toBe('First');
    });

    test('updates form state correctly when a field is changed', () => {
        const initialValues = [{ name: 'Initial' }];
        const onChangeMock = jest.fn();
        render(
            <FormRepeater initialValues={initialValues} onChange={onChangeMock}>
                <MockInput name="name" />
            </FormRepeater>
        );

        fireEvent.change(screen.getByTestId('mock-input'), { target: { value: 'Updated' } });
        expect(onChangeMock).toHaveBeenCalledWith([{ name: 'Updated' }]);
    });




    // Additional tests can be added here to cover more scenarios and edge cases.
});
