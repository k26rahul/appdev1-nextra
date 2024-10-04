# Encoding, HTML, and CSS

### L2.1: Information Representation in a Machine

#### Numbers and Representation

- **Decimal (base 10)**: Numbers from 0-9.
- **Binary (base 2)**: Numbers from 0/1.
- **Hexadecimal (base 16)**: Numbers from 0-F.
- **Octal (base 8)**: Numbers from 0-7.

#### Formula:

- Base $\beta$ means powers of $\beta$.
- Right to left:  
  $ \beta^0 \times \text{face value} $  
  $ \beta^1 \times \text{face value} $  
  $ \beta^2 \times \text{face value} $  
  ...
- Sum of these gives the value.

- **Decimal (base 10)**:

  - Example: 1564 (0-9 range per digit, 10 states per digit)
  - **Place values** (going right to left):  
    $ 4 \times 10^0 = 4 $  
    $ 6 \times 10^1 = 60 $  
    $ 5 \times 10^2 = 500 $  
    $ 1 \times 10^3 = 1000 $
  - Sum: 1564

- **Binary (base 2)**: (https://www.rapidtables.com/convert/number/binary-to-decimal.html?x=1010)

  - Example: 1010 (0 or 1 per digit, 2 states per digit)
  - **Place values** (going right to left):  
    $ 0 \times 2^0 = 0 $  
    $ 1 \times 2^1 = 2 $  
    $ 0 \times 2^2 = 0 $  
    $ 1 \times 2^3 = 8 $
  - Sum: 10 (in decimal)

- **Hexadecimal (base 16)**: (https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=1FFA)

  - Example: 1FFA (0-9, A-F)
  - **Place values** (going right to left):  
    $ A \times 16^0 = 10 $  
    $ F \times 16^1 = 240 $  
    $ F \times 16^2 = 3840 $  
    $ 1 \times 16^3 = 4096 $
  - Sum: 8186 (in decimal)

**Hexadecimal Digits to Decimal Values**

- **0-9**: 10 states.
- **A-F**: 6 states.

| Hex | Binary | Decimal |
| --- | ------ | ------- |
| 0   | 0000   | 0       |
| 1   | 0001   | 1       |
| 2   | 0010   | 2       |
| 3   | 0011   | 3       |
| 4   | 0100   | 4       |
| 5   | 0101   | 5       |
| 6   | 0110   | 6       |
| 7   | 0111   | 7       |
| 8   | 1000   | 8       |
| 9   | 1001   | 9       |
| A   | 1010   | 10      |
| B   | 1011   | 11      |
| C   | 1100   | 12      |
| D   | 1101   | 13      |
| E   | 1110   | 14      |
| F   | 1111   | 15      |

#### Unit Prefixes

- **Mili** (1/1000) > **Centi** (1/100) > **Deci** (1/10)
- **Dec-**: From Greek "déka" (meaning 10).
- **December**: Originally the 10th month in Roman calendar.

### L2.2: Efficiency of Encoding

#### Encoding Basics

- **Earth + electricity = logic and data**: Digital signals (1/0). Logic gates.
- A **message.txt** file of 78 bytes (624 bits) is a sequence of 1s and 0s without meaning until decoded using an encoding scheme.

#### Developing a "Good" Encoding Scheme

- **Group bits** in sizes (1-8 bits) to determine the total number of characters that can be encoded/decoded.

  **Examples:**

  - **Size 1**:
    - 2 states (0, 1), 2 decimal values (0, 1)
    - Capacity: 2 characters
  - **Size 2**:
    - 4 states (00, 01, 10, 11), 4 decimal values (0-3)
    - Capacity: 4 characters
  - **Size 3**:
    - 8 states, 8 decimal values (0-7)
    - Capacity: 8 characters

#### Characters needed (for basic English):

- **A-Z**: 26
- **a-z**: 26
- **0-9**: 10
- **Space**: 1
- **Punctuation (. , ! ?)**: 4
- **Total**: 67 characters

#### Bits vs Capacity:

- **1 bit**: 2 characters
- **2 bits**: 4 characters
- **3 bits**: 8 characters
- **4 bits**: 16 characters (1 nibble)
- **5 bits**: 32 characters
- **6 bits**: 64 characters
- **7 bits**: 128 characters
- **8 bits**: 256 characters (1 byte)

#### Why 7 bits?

- **For 67 characters**: 7 bits gives 128 total characters.
- **Extra capacity**: More characters can be added (128 > 67).

#### Why 8 bits?

- Increases the total capacity to **256 characters**.
- Adds **128 more characters** to the previous 7-bit encoding.

#### ASCII and Extended ASCII

- **ASCII**:
  - 7-bit encoding (128 characters). (https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html)
  - Created in 1963, it includes 95 printable characters and 33 control characters.
- **Extended ASCII**:
  - 8-bit encoding (256 characters). (https://en.wikipedia.org/wiki/ISO/IEC_8859-1#Code_page_layout)
  - Created in 1981, adds 128 more characters for Western European languages.

#### Encoding Process

- **Encoding**: Decimal values (from the ASCII table) are converted to binary and stored.
- **Decoding**: Binary numbers are converted back into decimal, which maps to characters.

#### Prime Question:

- Should all characters be represented with the same number of bits?
- "Hello Vidu, You are the most amazing person I have ever known! You are a star."
  - **Characters**: 78
  - **8 bits**: 78 bytes, $78 \times 8 = 624$ bits
  - **16 bits**: $78 \times 2$ bytes + 2 bytes of BOM = 158 bytes = $158 \times 8 = 1264$ bits

#### Unicode and UTF Encoding

- **Unicode**: Universal character set covering all writing systems. (https://symbl.cc/en/unicode-table/)
- **UCS2**: Old encoding standard; 16 bits (2 bytes) per character.
- **UCS4**: Old encoding standard; 32 bits (4 bytes) per character.
- **New Encoding Standards**: UTF-8 (8, 16, 24, 32), UTF-16, UTF-32.
- **UTF-8**: Variable-length encoding (1-4 bytes) that supports ASCII and more complex characters (up to 2,164,864 characters).
- **UTF-16**: Better version of UCS2; encodes most characters in 2 bytes (16 bits).
- **UTF-32**: Better version of UCS4; encodes characters in 4 bytes (32 bits).

- **Unicode Range**: U+0000 to U+10FFFF.
  - **U+**: Unicode prefix.
  - **Hex Numbers**: 0000 and 10FFFF are hex representations.
  - 10FFFF in hex = 1,114,111 in decimal.

#### UTF-8 Encoding Scheme:

- **Leading bytes**:  
  1 byte: `0 + 7 bits`  
  2 bytes: `110 + 5 bits`  
  3 bytes: `1110 + 4 bits`  
  4 bytes: `11110 + 3 bits`
- **Continuation bytes**:  
  $ 10 + 6 $ bits (for encoding beyond 1 byte)

- **Capacities**:

  - **1B UTF-8 sequence**: 7 bits: 128 characters [0-7F]
  - **2B UTF-8 sequence**: 5 + 6 = 11 bits: 2048 characters [80-7FF]
  - **3B UTF-8 sequence**: 4 + 6 + 6 = 16 bits: 65,536 characters [800-FFFF]
  - **4B UTF-8 sequence**: 3 + 6 + 6 + 6 = 21 bits: 2,097,152 characters [10000-10FFFF]

- **Planes:**

  - **BMP (Plane 0)**: Basic Multilingual Plane, 65,536 characters, encoded in 1-3 bytes.
  - **Astral Planes (Planes 1-16)**: Encodes characters beyond BMP, uses 4 bytes.

- HTML meta tag for character encoding: `<meta charset="UTF-8" />`.

#### Example (Rocket Emoji 🚀)

- UTF-8: `F09F9A80` (https://mothereff.in/utf-8#🚀)

  - 4B UTF-8 encoded character.
  - Raw Binary: `11110000100111111001101010000000` (https://www.rapidtables.com/convert/number/hex-to-binary.html?x=F09F9A80)
  - Bytes: `11110000 10011111 10011010 10000000`
    - Leading byte: `11110-000`
    - Continuation byte 1: `10-011111`
    - Continuation byte 2: `10-011010`
    - Continuation byte 3: `10-000000`
  - Data Bits: `000 011111 011010 000000`
  - Full Binary: `000011111011010000000`
  - Hex: `1F680` (https://www.rapidtables.com/convert/number/binary-to-hex.html?x=000011111011010000000)
  - Unicode: `U+1F680` (https://www.compart.com/en/unicode/U+1F680)
  - Character: 🚀

  **Steps:**

  1. Split bits into groups of 8:  
     `11110000 10011111 10011010 10000000`
  2. Separate marker and data bits:
     - Leading byte: `11110-000`
     - Continuation bytes: `10-011111`, `10-011010`, `10-000000`
  3. Add data bits of each byte in sequence:  
     Data Bits: `000 011111 011010 000000`
  4. Convert data bits to hex:
     - Data Bits: `000011111011010000000` → Hex: `1F680`
  5. Get corresponding Unicode character:
     - Unicode: `U+1F680` → Character: 🚀

### L2.3: What is Markup?

- **Plain text**: Editable text.
- **Rich text**: Non-editable (e.g., Word, PPT).

#### Markup

- Hints in regular text flow.
- **Purpose**: Semantics, presentation, meaning.
- **Procedural markup**: How to display text.
- **Descriptive markup**: Meaning of text (e.g., HTML).
- **What You See Is What You Get**: Markdown.

### L2.4: Introduction to HTML

- **HTML tags**: Define elements in a page.
- **Self-closing tags**: No closing tag, e.g., `<img />`.
- **Attributes**: Provide extra info, e.g., `src="url"`.
- **Semantic tags**: Convey meaning, e.g., `<strong>` (important), `<b>` (bold).
- **Hyperlinks**: Link resources using `<a href="url">`.
- **DOM**: Structure of HTML as a tag tree.
- **DOM reflow**: Visible changes trigger browser repaint.

### L2.5: Introduction to Styling

- **Internal styles**: Defined within `<style>` tags in HTML.
- **External styles**: Linked via `<link rel="stylesheet" href="style.css">`.
- **Inline styles**: Applied directly to elements (highest precedence).

#### Selector Precedence

- **Order**: `id > class > tag`

```css
/* ID selector */
#iitm {
  color: red;
}

/* Class selector */
.iitm {
  color: green;
}

/* Tag selector */
div {
  color: yellow;
}
```

#### Shorthand CSS

- **Individual properties**:

```css
h1 {
  border-width: 5px;
  border-style: solid;
  border-color: aqua;
}
```

- **CSS shorthand**:

```css
h1 {
  border: 5px solid aqua;
}
```

- **Ordered List**:
  - `<ol type="a" start="2">` specifies type and starting point.

#### Border Width

- **Two values**: `border-width: 5px 20px;`

  - Up/down: 5px; left/right: 20px.

- **Four values**: `border-width: 5px 20px 15px 10px;`

  - Top: 5px; right: 20px; bottom: 15px; left: 10px.

### L2.6: Types of CSS Styling and Responsive Websites

- **HTML**: Provides structure.
- **CSS**: Defines appearance (look).
- **Cascade**: Styles apply from top to bottom. Rules lower in the CSS will override higher ones.
- **Responsive websites**: Adapt layout for smaller screens.

### Screencast 2.1: Introduction to Inline CSS

- **Inline CSS**: Use `style` attribute within HTML tags.

  **Example**:

  ```html
  <p style="color: blue;">This is a blue paragraph.</p>
  ```

### Screencast 2.2: Introduction to Internal and External CSS

- **Internal CSS**: Defined within `<style>` tags in the HTML document.

  ```html
  <style>
    body {
      background-color: lightgray;
    }
  </style>
  ```

- **External CSS**: Linked via `<link>` tag.

  ```html
  <link rel="stylesheet" href="styles.css" />
  ```

### Screencast 2.3: Introduction to CSS Selectors

- **Selectors**:
  - **Tag Selector**: Selects elements by tag name.
    ```css
    p {
      color: red;
    }
    ```
  - **ID Selector**: Selects elements with a specific ID.
    ```css
    #header {
      font-size: 20px;
    }
    ```
  - **Class Selector**: Selects elements by class name.
    ```css
    .container {
      margin: 0 auto;
    }
    ```
  - **Descendant Selector**: Selects elements inside another element.
    ```css
    div p {
      color: blue;
    }
    ```
  - **:hover**: Styles on mouse hover.
    ```css
    a:hover {
      text-decoration: underline;
    }
    ```
  - **::first-letter**: Styles the first letter of a block.
    ```css
    p::first-letter {
      font-size: 2em;
    }
    ```

### Screencast 2.4: Introduction to Bootstrap

- **Bootstrap**: CSS library with ready-made classes for quick styling. (https://getbootstrap.com/)
