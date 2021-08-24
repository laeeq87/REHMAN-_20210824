import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import { VideoCard } from "./Card";
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'


afterEach(()=> {
    cleanup();
});

function clickCalled() {
    console.log('Clicked Called');
}

it("Should Render Video Card Component", ()=> {
    const props = {
        thumbnail: "link",
        title: "Video",
        category: 1,
        onClick: clickCalled
    };
    render(<VideoCard props={props} />);
    const videoCardElement = screen.getByTestId('tst-title')
    expect(videoCardElement).toBeInTheDocument();
    expect(videoCardElement).toContainHTML('<strong>');
}); 

test('matches snapshot', ()=> {
    const props = {
        thumbnail: "link",
        title: "Video",
        category: 1,
        onClick: clickCalled
    };

    const tree = renderer.create(<VideoCard props={props} />).toJSON();
    expect(tree).toMatchSnapshot();


})