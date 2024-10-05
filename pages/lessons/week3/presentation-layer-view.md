## L3.1: Overview of MVC

- **Smalltalk**:

  - Fully object-oriented language, dynamically typed.
  - Developed at Xerox in 1972.

- **Model-View-Controller (MVC)**:
  - **Model**: Manages the data, typically involves data storage and retrieval.
  - **View**: The User Interface (UI) and user interaction layer.
  - **Controller**: Contains business logic, acts as the intermediary between the view and the model.

## L3.2: Views

- **View**: A representation of the model, can be static or dynamic.

  - **Static View**:
    - Same for all users.
    - Non-interactive.
  - **Dynamic View**:
    - Customizable for different users.
    - Contains interactive elements.
    - **Examples**:
      - **Partly Dynamic**: Wikipedia (some interactive elements like search, but static content).
      - **Fully Dynamic**: Amazon (completely personalized experience).

## L3.3: User Interface Design

- **User Interface (UI)**:
  - The space where user interaction with the application occurs.
  - A **screen** is an example of UI, while **touchscreens** and **keyboards** are examples of user interaction mechanisms.
- **Approach to User Interface Design**:

  1. **Gather functionality requirements**.
  2. **User and Task analysis**.
  3. **Prototyping**: Use **wireframes** and **mock-ups**.
  4. **Testing**: Validate usability and functionality.

- **Dynamic UIs**:
  - Fully dynamic systems (e.g., real-time personalization) can be inefficient in terms of server load.

## L3.4: Usability Heuristics

- **Usability Heuristics**: Principles for effective user interface design. Based on Jakob Nielsen's heuristics .

  1. **Visibility of System Status**:

     - Keep users informed with timely feedback.

  2. **Match Between System and the Real World**:

     - Use familiar concepts and language.

  3. **User Control and Freedom**:

     - Allow undo/redo and easy exits from unwanted states.

  4. **Consistency and Standards**:

     - Ensure uniformity and follow conventions.

  5. **Error Prevention**:

     - Design interfaces to prevent mistakes before they occur.

  6. **Recognition Rather Than Recall**:

     - Make actions and options visible to reduce memory load.

  7. **Flexibility and Efficiency of Use**:

     - Support both novice and expert users.

  8. **Aesthetic and Minimalist Design**:

     - Keep interfaces clean and avoid unnecessary information.

  9. **Help Users Recognize, Diagnose, and Recover from Errors**:

     - Provide clear error messages with solutions.

  10. **Help and Documentation**:

      - Offer easy access to help and guides.

## L3.5: Tools - Part I

- **Wireframes**: Visual guides used to plan the structure and layout of a web page.

  1. **Information Design**: Structure of content.
  2. **Navigation Design**: Flow of user interaction.
  3. **User Interface Design**: Appearance and usability.

- **Lucidchart**: A tool for creating wireframes.

- **Lorem Ipsum**:
  - Placeholder text (fake Latin) used in design mockups to simulate real content.

## L3.6: Tools - Part II

- **Templates**: Predefined structures used to generate dynamic web content.

  - **Python Example**:

    ```python
    def p(s):
        return "<p>" + s + "</p>"
    print(p("This is a paragraph tag"))
    ```

  - **Jinja2**: A templating language for Python, used to generate dynamic web content.

    **Jinja2 Syntax**:

    - **Block Start**: `{%`
    - **Block End**: `%}`
    - **Variable Interpolation**: `{{` and `}}`
    - **Comments**: `{#` and `#}`

## L3.7: Accessibility

- **Accessibility**: Designing web content to be usable by people with various disabilities or impairments.

- **Core Accessibility Principles** (from **W3C** guidelines):

  1. **Perceivable**: Content must be available to users in ways they can perceive (e.g., text alternatives for images).
  2. **Operable**: Interface must be operable by users of all abilities.
  3. **Understandable**: Information and operation of the interface must be clear and understandable.
  4. **Robust**: Content must be robust enough to be interpreted reliably by a wide variety of devices, including assistive technologies.

- **Components for Efficient Web Accessibility**:
  - **Web content** (e.g., properly structured HTML).
  - **Authoring tools** (tools used to create web content).
  - **User agents** (e.g., browsers).

## Tutorial 3.1: Command Line Arguments in Python

- Covers how to handle command line arguments in Python.

## Screencast 3.1: Introduction to Jinja2 - I

- Overview of basic Jinja2 templating concepts.

Jinja2 allows embedding variables and expressions to dynamically generate markup.

### Example: Simple Variable Interpolation

```python
from jinja2 import Template

template_1 = Template("Hello, {{ name }}!")
output_1 = template_1.render(name="Jinja2")
print(output_1)
```

## Screencast 3.2: Introduction to Jinja2 - II

- Advanced concepts and use cases.

Jinja2 supports loops, conditionals, and more.

### Example: Using a For Loop in Blocks

```python
from jinja2 import Template

template_2 = Template('''
<ul>
  {% for item in items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
''')
output_2 = template_2.render(items=["Item 1", "Item 2", "Item 3"])
print(output_2)
```

## Screencast 3.3: Basics of Developer Tools

- Introduction to using developer tools in browsers for inspecting HTML, CSS, and JavaScript.
