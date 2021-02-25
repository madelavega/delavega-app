import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EuroJackpotResults from '../../src/EuroJackpotResults';
const urlParams = [ '/results', '01-03-2021' ];

/**
 * Because EuroJackpotResults basically is a wrapper of a web component, which is managed with a reference,
 * we only test with jest and react-test-renderer that the EuroJackpotResults is rendered correctly,
 * without sending any prop that the referred web component uses. Its useless test it using nodeMocks (@see
 * https://reactjs.org/docs/test-renderer.html#ideas) because the real logic is in the web component. So,
 * it is tested in the library with all their options
 *
 */
describe('[EuroJackpotResult] renders correctly', () => {
    it('[EuroJackpotResult | Large] renders correctly', () => {
        const tree = renderer
            .create(
                <MemoryRouter initialEntries={urlParams}>
                    <EuroJackpotResults />
                </MemoryRouter>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});