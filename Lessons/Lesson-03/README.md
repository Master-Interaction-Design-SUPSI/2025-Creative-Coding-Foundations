# Lesson 03

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
    n7 --> n8["remove the class card-view<br> from the ul"]
    n8 --> n9["add the class list-view<br>to the ul"]
    n10 --> n11["remove the class list-view<br> from the ul"]
    n11 --> n12["add the class card-view<br>to the ul"]
```

## Schreenshots

![first screenshot](DOC/todo_list_01.png)

![second screenshot](DOC/todo_list_02.png)

![second screenshot](DOC/todo_list_03.png)

![second screenshot](DOC/todo_list_04.png)
