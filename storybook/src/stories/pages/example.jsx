import React from 'react';

import { Header } from '../components/_globals/header/global-header';
import { Footer } from '../components/_globals/footer/global-footer';

import { Accordion } from '../components/accordion/accordion';

export const example = () => {
  return (
    <>
      <Header />

      <div className="component">
        <Accordion>
          <h2>Pages in Storybook</h2>
          <p>We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer" tabindex="-1"><strong>component-driven</strong></a> process starting with atomic components and ending with pages.</p>
          <p>Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:</p>
          
          <form>
            <fieldset>
              <label htmlFor="input1">Input One</label>
              <input id="input1" placeholder="Input one" type="text" tabindex="-1" />
            </fieldset>
            <fieldset>
              <label htmlFor="input2">Input Two</label>
              <input id="input2" placeholder="Input two" type="text" tabindex="-1" />
            </fieldset>
          </form>
        </Accordion>
      </div>
      <div className="component">
        <Accordion id="accordion9">
          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </Accordion>
      </div>

      <Footer />
    </>
  );
};
