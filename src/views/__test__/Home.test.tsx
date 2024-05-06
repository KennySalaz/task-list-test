/**
 * @jest-environment jsdom
 */
import { describe, expect, it, } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


describe('Home', () => {
    it('should render task button correcly and go to tasks', () => {
        const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>)
        const taskButton = getByText('Tasks');
        fireEvent.click(taskButton)
        expect(window.location.pathname).toEqual('/task')
    })
    it('should render list button correcly and go to list', () => {
        const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>)
        const listButton = getByText('List');
        fireEvent.click(listButton)
        expect(window.location.pathname).toEqual('/list')
    })
})
