# Vim

## Modes

modes: `[normal, insert, commend, visual]`

- insert -> normal = ESC
- insert -> commend = ESC :
- insert -> visual = ESC v
- normal -> insert = iI aA cC oO
- commend -> normal = ENTER

# Joy of Painting[1] with Bob Ross[2]

    [1] - Vim
    [2] - Shawn Biddle

## Modality

    Insert  - Brush is on the canvas
    Normal  - Brush is off the canvas
    Command - Mixing your pallette

## Starting Vim

    vim <file>
    vim, :e <file>

## Pen to the page

    i - Enter insert mode at cursor
    I - Enter insert mode at first non-blank character
    s - Delete character under cursor and enter insert mode
    S - Delete line and begin insert at beginning of same line
    a - Enter insert mode _after_ cursor
    A - Enter insert mode at the end of the line
    o - Enter insert mode on the next line
    O - enter insert mode on the above line
    C - Delete from cursor to end of line and begin insert

    This is a test sentence

(Next class will cover 'c')

## Picking up the brush

    ESC
    Ctrl+[

## Scanning the canvas

        k
        ^
    h <   > l
        v
        j

yy - Copies a line

yw - Copies a word

y\$ - Copies from where your cursor is to the end of a line

v - Highlight one character at a time using arrow buttons or the h, k, j, l buttons

V - Highlights one line, and movement keys can allow you to highlight additional lines

p - Paste whatever has been copied to the unnamed register

d - Deletes highlighted text

dd - Deletes a line of text

dw - Deletes a word

D - Deletes everything from where your cursor is to the end of the line

d0 - Deletes everything from where your cursor is to the beginning of the line

dgg - Deletes everything from where your cursor is to the beginning of the file

dG - Deletes everything from where your cursor is to the end of the file

x - Deletes a single character

u - Undo the last operation; u# allows you to undo multiple actions

Ctrl + r - Redo the last undo

. - Repeats the last action

4. Vim commands

## Getting from a to b: Motions

Basics: wWbBeE

    w - Forward to the beginning of next word
    W - Forward to the beginning of the next WORD
    b - Backward to the next beginning of a word
    B - Backward to the next beginning of a WORD
    e - Forward to the next end of word
    E - Forward to the next end of WORD

Slightly less basic: fFtT
All follow `[(n)um]<verb><n(o)un>` syntax

```vim
	[n]f<o> - Forward until (nth) (o)  (Inclusive)
	[n]F<o> - Backward until (nth) (o) (Inclusive)
	[n]t<o> - Forward until (nth) (o)  (Exclusive)
	[n]T<o> - Backward until (nth) (o) (Exclusive)

	abcdefg, abcdefg, abcdefg
```

## Searching

    /  - Forward  turn off highlight ":nohl" : (no highlight)
    ?  - Backward
    *  - Word under cursor - forward  (bounded)
    g* - Word under cursor - forward  (unbounded)
    #  - Word under cursor - backward (bounded)
    g# - Word under cursor - backward (unbounded)
    n  - Next result, forward
    N  - Next result, backward

(Note here to explain what bounded/unbounded mean)

## Copy/Paste

    y - Yank. Example: yw (yank word)
    p - paste after cursor
    P - paste before cursor

    gg - go to the beginning of the file
    G - go to the end

    ggvG  - select all

# vim: set syn=mkd :

## Huckleberry Vim

```vim
	Overview of class one:
	Moving: [NORM] hjklwbefFtT
	Inserting: [NORM] aAsSoOiIC
	Writing: [NORM]:w <file>
	Quitting: [NORM]:q
	Searching: /?*,g*,#,g#,nN
	Copy/Paste: yYpP
```

## Understanding the Argument/Noun/Verb Relationship

Editing commands generally follow the structure of:

    [register][num/range]<verb><noun|(i|a)<text object>>

Example #1:

```
	3dw - delete 3 words
	3 d w
	| | ` word ---.
	| ` delete     } 3 words
	` 3 ----------/
```

Example #2: (More detail later)

```
	ci(
	c i (
	| | ` Parenthesis text-object
	| ` Inside text-object
	` change
```

Arguments = Ranges
Nouns = Motions/Text Objects
Verbs = Commands

## Common Edit commands

```
	d - Delete: [range]d<motion>
		dd  - delete current line
		dj  - delete current and next line (j = down)
		2dj - delete current and 2 lines downward

	c - Change (Same as d but put me in insert mode)
		cw - change word
		cc = S - Delete current line and enter insert mode
		2cw - Delete 2 words and enter insert mode

	~  - Toggle the case of character under cursor
	g~ - Toggle case of [motion]
		g~w - Toggle case of cursor -> end of word
			tr|ue -> g~w -> trUE
		g~iw - Toggle case of entire word under cursor
			tr|ue -> g~iw -> TRUE

	p - Paste
```

## Registers

Accessing:

    "<reg>

Example:
"ayy - Yank current line into 'a' register
"ap - Paste 'a' register

`<C-r><reg> - Paste contents of <reg>`
Example:
`[INS] Hello [ESC] byw [INS]<C-r>" -> HelloHello`

Listing:

    :reg

## Special registers:

    " - Noname buffer - Last dcsxy
    _ - Blackhole buffer
    % - Filename
    / - Last search
    : - Last command
    . - Last edit

## Register assignment commands

```
	y - Yank
	q - Macros (much later)
	m - Marks  (a little later)
	(Any command that edits will assign to the "" [noname buffer])
```

## Advanced motions

```
() - Sentences  (". " delimited words)
{} - Paragraphs (Next empty line)

	Example:
		d} - Delete until next paragraph (useful for deleting unnecessary conditional blocks)

		if (something)
		{
			test
		}
```

; - Repeat last motion forward

, - Repeat last motion backward
`g<hjkl>` - Go down a _visual_ line
This is some text that's going to wrap so I have to fill in a lot of words. I can never think of things to type here because I'm not a creative person but this will demonstrate visual versus hardbroken lines.
This is a second line

    <#>G - Go to Line #
    gg   - Go to the top of the file

    ]] - Next section (Depending on your current filetype this may move between functions)
    [[ - Previous section (see above note)
    0 - Front of line
    ^ - Front of line (first non-blank)
    % - Matching brace/bracket/paren/tag(with matchtag plugin, see session 3)
    $ - End of line

# Text objects

    {}[]()w<>t'"`

    i vs a:
    	i = Inside
    		Example:
    			self.test[obj|ect] -> ci[ -> self.test[|]

    	a = Around
    		Example:
    			self.test[obj|ect] -> ca[ -> self.test|

# Misc. commands

    [count](<|>) - Indent count	lines
    	Example:
    		3>

1

2

3

    <range>[count](<|>) - Indent given range count times

1

2

3

4

    u - Undo (See :help undo, it's complicated)
    C-r - Redo
    . - Redo last change
    zz - Center screen
    ZZ - Write and quit. Only write if file has changed (preserves last mod time)

Managing multiple files at once

```vim
	:tabnew [file]       - Open a new tab with given file (or empty file)
	gt or :tabn[ext]     - Next tab
	gT or :tabp[revious] - Previous tab
	:tabm[ove] # - Move current tab to position # (zero-indexed), no argument = end
	:tabc        - Close current tab
	:tabo        - Close all other tabs except current
```
