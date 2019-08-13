Feature: Add new course

    Scenario Outline: Add new course
        Given the "<name>" alreay has an "<type>" acount
        When the "<name>" wants to add a "<course name>" with course code, "<course code>"
        Then a new course will be added

        Examples:
            | name      | type      | course name     | course code | course added |
            | Woburn CI | School    | grade 9 English | ENG101      | course added |
            | M&P       | 3rd Party | grade 9 English | ENG101      | course added |~