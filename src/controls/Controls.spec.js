// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect' 

import Controls from './Controls';

test('Controls render', () => {
    render(<Controls />);
});

test('cannot be open or closed if locked', () => {
    const { getByText } = render(<Controls />);

    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);
    expect(lockButton).toBeDisabled();
    expect(closeButton).toBeEnabled();
})

