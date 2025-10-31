# Lesson 03

![first screenshot](DOC/assignment_01_01.png)

## Goal

Starting from the concept of a pinboard, implement a web page that:

- is responsive (properly layout for smartphone, tablet, and desktop)
- allows to add new elements to the list
- allows the switch between two views (at least)

## Project description

Add new to-dos to the list using the input field and the "+" button.

The view of the list can be changed between "list" and "card" using the dedicated buttons.

```mermaid
flowchart TD
    A(["start"]) --> n1["write new task<br>in the input"] & n7["click the list view<br>button"] & n10["click the card view<br>button"]
    n1 --> n2["Click + button"]
    n2 --> n3["get the content<br>from the input"]
    n3 --> n4["create new i<br>element with the<br>content input"]
    n4 --> n5["append it to the ul"]
    n5 --> n6["clear the input text"]
    n7 --> n8["remove from the ul<br>the class card-view"]
    n8 --> n9["add the class list-view<br>to the ul"]
    n10 --> n11["remove from the ul<br>the class list-view"]
    n11 --> n12["add the class card-view<br>to the ul"]
```

## Schreenshots

![first screenshot](DOC/assignment_01_01.png)

![second screenshot](DOC/assignment_01_02.png)