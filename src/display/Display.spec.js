// Test away!

import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

test('Display renders', () => {
    render(<Display />);
});

test('displays are "unlocked" and "open" by default', () => {
    const { getByText } = render(<Display />);

    getByText(/open/i);
    getByText(/unlocked/i);
});
