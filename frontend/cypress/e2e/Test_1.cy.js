// describe("The home page", function() {
//     it("successfully loads", function() {
//         cy.visit("https://keen-cascaron-8399a0.netlify.app")
//         cy.get('input[type="text"]').type('ireland')
//         cy.get('button[type="submit"]').click()

//         cy.get('a').each(page => {
//         cy.request(page.prop('href'))
//         })
        
//     })
// })

describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://keen-cascaron-8399a0.netlify.app/');
    });
  
  it('passes', () => {
    cy.get('input[type="text"]').type('ireland');
    cy.get('button[type=submit').click();
    cy.contains('h3', 'Ireland');
  });

  it('displays an error message if search term is invalid', () => {
    cy.get('input[type="text"]').type('$$$');
    cy.get('button[type="submit"]').click();
    cy.contains('p', 'No results found. Please try again.');
  });

  it('allows users to clear the search results', () => {
    cy.get('input[type="text"]').type('Ireland');
    cy.get('button[type="submit"]').click();
    cy.contains('h3', 'Ireland');
    cy.contains('h2', 'The flags of the world');
  });

    it('displays a message when no results are found', () => {
      cy.get('input[type="text"]').type('zzzzzz');
      cy.get('button[type="submit"]').click();
    });
  
    it('filters the search results when a filter is selected', () => {
      cy.get('input[type="text"]').type('Australia');
      cy.get('button[type="submit"]').click();
      cy.contains('h3', 'Australia');
      cy.contains('li').click();
      cy.contains('h2', 'Australia');
      cy.contains('p', 'Oceania');
    });
  
  it('navigates to the details page when a country is selected', () => {
    cy.get('input[type="text"]').type('Australia');
    cy.get('button[type="submit"]').click();
    cy.contains('h3', 'Australia');
    cy.contains('li').click();
    cy.url().should('include', '/countries/Commonwealth%20of%20Australia');
    cy.contains('h2', 'Australia');

  });

  it('go back successfully', () => {
    cy.get('button[type="submit"]').click();

  });
});

