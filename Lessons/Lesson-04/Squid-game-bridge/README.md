# Squid Game Bridge

## Brief

Choose a “mini-game” to rebuild with HTML, CSS and JavaScript. The requirements are:

- The webpage should be responsive
- Choose an avatar at the beginning of the game
- Keep track of the score of the player
- Use the keyboard to control the game (indicate what are the controls in the page). You can also use buttons (mouse), but also keyboard.
- Use some multimedia files (audio, video, …)
- Implement an “automatic restart” in the game (that is not done via the refresh of the page)

## Project description

The goal of the game conists in reaching the end of the bridge skipping the traps. If you step on a trapped tile, you will fail and start over from the start of the bridge. Every time you reach the end of the bridge, you win and your score increases.

To move along the bridge, you can jump the next tile with the up arrow key, or move one tile forward with the right arrow key.

## Flowchart

```mermaid
flowchart TD
    n1["Start"] --> n7["new attempt"]
    n2["Move,<br>Jump or Step?"] -- Jump --> n3["currPos+=2"]
    n2 -- Step --> n4["currPos++"]
    n9["Game Over!"] --> n7
    n8["on a trap?"] -- yes --> n9
    n5["end of path?"] -- yes --> n10["You Won!"]
    n10 --> n11["update score"]
    n11 --> n7
    n12["new path"] --> n2
    n7 --> n12
    n3 --> n14["update player position"]
    n4 --> n14
    n14 --> n5
    n8 -- no --> n2
    n5 -- no --> n8
    n1@{ shape: terminal}
    n2@{ shape: decision}
    n8@{ shape: decision}
    n5@{ shape: decision}
```

## Function list

