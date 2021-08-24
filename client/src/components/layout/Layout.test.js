import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import { Layout } from "./Layout";
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'


afterEach(()=> {
    cleanup();
});


it("Should Render Layout Component", ()=> {

    render(<Layout/>);
    const layoutElement = screen.getByTestId('tst-layout')
    expect(layoutElement).toBeInTheDocument();
    expect(layoutElement).toContainHTML('container');
}); 

test('matches snapshot', ()=> {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();


})