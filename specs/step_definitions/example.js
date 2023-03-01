import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit('/');
});

Given('I fill in username', () => {
  cy.get("[type='email']").type('exempel@school.net');
});

Given('I fill in password', () => {
  cy.get("[type='password']").type('abc123');
});

Given('I click on login', () => {
  cy.get("[type='submit']").click();
});

Given('I can see the schedule', () => {
  cy.get('img[src="/images/nodehill.jpg"]').should('be.visible');
});

Given('I can click the admin button', () => {
  cy.get('button').contains('Admin').click();
});

Given('I click on Teachers', () => {
  cy.get('div').contains('Teachers').click();
});

Given('I click on Create', () => {
  cy.get('a').contains('Create').click();
});

When('I fill in the theacher infromation', () => {
  cy.get('input[id=email]').type('Cy@mail.com');
  cy.get('input[id=password]').type('qwerty123');
  cy.get('input[id=firstname]').type('Cyp');
  cy.get('input[id=lastname]').type('Ress');
  cy.get('input[id=initials]').type('CR');
  cy.get('input[id=phone]').type('5555555555');
  cy.get('div[role=button').click();
  cy.get('li').contains('admin').click();
  cy.get('div.MuiBackdrop-invisible').click();
  // Det här steget funkar inte som jag vill väljer bara default färgen
  cy.get('input[id=color]').invoke('val', '#ff0000').trigger('change').trigger('input');

});

Then('I can click on Save to save the new theacher', () => {
  cy.get('button[type=submit]').click();
  cy.wait(1000);
});

Given('that theachers is sorted after lowest id first', () => {
  cy.get('td').contains('9');
});

When('I go too the last page', () => {
  cy.get('th').contains('Id').click();
});

Then('I should see the information of the theacher', () => {
  cy.wait(1000);
  cy.get('td').contains('Cyp');
  cy.get('td').contains('Ress');
  cy.get('td').contains('CR');
  cy.get('td').contains('5555555555');
  cy.get('td').contains('Cy@mail.com');
  cy.get('td').contains('#888888');
});

Given('that I found the theacher', () => {
  cy.get('th').contains('Id').click();
  cy.wait(1000);
  cy.get('td').contains('Cyp');
});

When('I click on the Edit button', () => {
  cy.get('td').contains('Cyp').parent().siblings().contains('Edit').click();
});

When('I change some value', () => {
  cy.get('input[id=firstname]').clear();
  cy.get('input[id=firstname]').type('Del');
  cy.get('input[id=lastname]').clear();
  cy.get('input[id=lastname]').type('Me');
  cy.get('input[id=initials]').clear();
  cy.get('input[id=initials]').type('DM');
});

Then('I can click on save too save the changes', () => {
  cy.get('button[type=submit]').click();
  cy.get('th').contains('Id').click();
  cy.get('th').contains('Id').click();
  cy.wait(4000);

});

Given('that i found the theacher', () => {
  cy.get('th').contains('Id').click();
  cy.wait(1000);
  cy.get('td').contains('Del');
});

When('I click on Edit', () => {
  cy.get('td').contains('Del').parent().siblings().contains('Edit').click();
});

When('click on Delete', () => {
  cy.get('button').contains('Delete').click();
});

Then('the theacher should be deleted', () => {
  cy.wait(1000);
});