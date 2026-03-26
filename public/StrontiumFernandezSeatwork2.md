# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

# Answer: The side bar, initially exactly between the header and the main content, now appears above the main content and is slightly situated away from the bottom of the header and the side of the screen. Since relative is used, it means that it positions back to the original position of the sidebar and allows it to move around without affecting the layout of the other classes.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

# Answer: The footer, intially right under the main content, now appears against the bottom of the screen--permanently situated there for the whole website. Since fixed is used, it means that the object will not be able to move around and will stay in a specific position in the viewport. It behaves differently from position relative, which allows the item to move according to specified coordinates.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

# Answer: Position absolute is relative to element right next to the nearest item that was positioned before it, while position fixed is relative to the viewport.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

# Answer: The notice appears on top of the content because based on the z-index, we can visualize it as a way of layering. Since notice has a z-index=2, and content has a z-index = 1, notice appears to be on top of the content because it has a greater z-index or higher layer than contet. If the z-index values swapped, then content will appear above notice since it now has a higher z-index of 2 instead of 1.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content)

    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    # Answer: When changed to position relative, the main content returns to it's original position in the webpage. When fixed, then it stays on the same position as the position absolute. 
    
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    # Answer: The z-index affects which class/element will overlap the other.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    # Answer: Static is the default layout in the normal document flow. Relative is the original position of the element. Absolute is positioned relative to its nearest parent element. Fixed is relative to the viewport's layout.

    b. How does absolute positioning depend on its parent element?
    # Answer: Absolute positioning depends on its parent element to define how and where it is positioned in the layout. 

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    # Answer: Sticky is when an element is defined in position relative, but it reaches a limit in scrolling to the point where it then acts as a position fixed, staying still in a designated area. Position fixed is just keeping the element in one spot only.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    # Answer: This is how I would use positioning:
    # 1. Static - for the school logo so that the user has an insight on which school and event the website covers.
    # 2. Relative - make separate boxes to contain schedules, venues, activities, and programs hosted by the event.
    # 3. Absolute - position the said boxes next to each other to create an organized flow of information.
    # 4. Fixed - used for the header, to toggle between webpages, or the footer, to show credibility and copyright.
