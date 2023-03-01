Feature: Login on the page

    Background: Login on the admin page
        Given that I am on the first page
        And I fill in username
        And I fill in password
        And I click on login
        And I can see the schedule
        And I can click the admin button
        And I click on Teachers

    Scenario: Add a theacher
        Given I click on Create
        When I fill in the theacher infromation
        Then I can click on Save to save the new theacher

    Scenario: Check the new theacher
        Given that theachers is sorted after lowest id first
        When I go too the last page
        Then I should see the information of the theacher

    Scenario: Change the theacher
        Given that I found the theacher
        When I click on the Edit button
        And I change some value
        Then I can click on save too save the changes

    Scenario: Delete the theacher
        Given that i found the theacher
        When I click on Edit
        And click on Delete
        Then the theacher should be deleted

