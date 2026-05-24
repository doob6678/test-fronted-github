# Time Page Design

## Goal

Build the smallest possible frontend page that displays the current date and time and updates every second.

## Scope

- Create a single static page.
- Show a clear title, current time, and current date.
- Update the displayed time every second in the browser.
- Keep the implementation dependency-free.
- Publish the result to a new GitHub repository owned by the user.

## Approach

Use plain HTML, CSS, and JavaScript in one `index.html` file. This keeps the page trivial to review, easy to run locally, and ideal for validating the full git and GitHub publish flow.

## Validation

- A local verification script should confirm the page contains the required title and DOM targets.
- Browser QA should confirm the page renders and the time text changes after waiting.
