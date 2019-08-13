Feature: Creating new accounts

    Creating new accounts

    # Background:
    #     Given user has never created an account before

    Scenario Outline: Creating a new account
        Given their acoount name is "<name>" and type is "<type>"
        When adding a new school board
        # Then create a new account
        Then account should be created

        Examples:
            | name      | type            | account created |
            | TDSB      | School-board    | account created |
            | Woburn CI | School          | account created |
            | M&P       | 3rd Party       | account created |
            | Ms.Frizze | Teacher         | account created |
            | kid       | Student (minor) | acount created  |
            | teenage   | Student         | account created |
