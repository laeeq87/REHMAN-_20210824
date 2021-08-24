import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import Upload from "./Upload";
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'


afterEach(()=> {
    cleanup();
});


it("Should Render Main Component", ()=> {
    render(<Upload/>);
    const layoutElement = screen.getByTestId('tst-upload')
    expect(layoutElement).toBeInTheDocument();
}); 

it("Should check button disabl", ()=> {
    render(<Upload/>);
    const layoutElement = screen.getByTestId('tst-upload-btn')
    expect(layoutElement).toBeDisabled();
}); 


test('matches snapshot', ()=> {
    const tree = renderer.create(<Upload />).toJSON();
    expect(tree).toMatchSnapshot();


})