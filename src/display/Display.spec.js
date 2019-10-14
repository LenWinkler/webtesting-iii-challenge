// Test away!

import React from 'react';
import { render, getByText } from 'react-testing-library';

import Display from './Display';

test('Display renders', () => {
    render(<Display />);
})

test('starts out locked', () => {
    render(<Display />);
    const locked = getByText('lockedClass');
    expect(locked).toBe('Unlocked');
})