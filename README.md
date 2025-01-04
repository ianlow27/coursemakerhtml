# coursemakerhtml

## Overview 
coursemakerhtml creates courses locally within the browser

### Basics

1.1 This is an introduction on how to use this application called **CourseMakerHTML**. You can create a number of different courses and text-based adventure games that contain video, audio, and image content, but each course or game needs to exist as separate subfolders under the main app directory. Click on the Continue buton below to begin creating a new course or text-based adventure game:

**Appeal for support:** Please note that this project requires time and effort. If you like what you see and wish to support what I am doing please visit my site at [buymeacoffee.com/ianlow](https://buymeacoffee.com/ianlow). Thank you so much!

### Creating a new course
1.1.1 In the coursemakerhtml folder create a folder with your project codename e.g. 'testcourse'. This should be letters and/or numbers only.

1.1.2 Under the 'testcourse' folder create subfolders for each section in your course, e.g. 'stage1', 'stage2', 'stage3', 'etc'. These should be letters and/or numbers only.

1.1.3 Under the section subfolders, create text files for each subpart of each section. These should be named starting from 'part01.js' up to a highest of 'part50.js'.

1.1.4 Each file should contain 1 string assignment statement that assigns the content of each subpart to the course. Double quotes ("...") should be used to enclose the entire content string. The assignment should be to a variable name that has the same name as the file without the suffix. Therefore part05.js should contain the statement part05="...";. This should be just an assignment and not a declaration i.e. without the let, const, or var keyboards as these variables have already been declared.

### Creating and formatting a part content
The following elementss can be used to create and format content for each part of a course section:

1.2.1 Ultimately everything is rendered into HTML so HTML code can be used directly e.g. 
```
part05="<b>Introduction</b><br/><li>This is an example line</li>";
```
1.2.2 Use the break tag ```<br>``` to insert a newline. The double greater than (>>) can also be used.

1.2.3 The newline literal \n creates a new page. The user navigates to and from each new page using the 'Continue' and 'Back' buttons.

1.2.4 The string can be broken and continued onto the next line using
1) the backslash \ e.g.
```
part05="<b>Introduction\
</b><br/><li>This is an example line\
</li>";
```
or 2) using JavaScript string concatenation e.g.
```
part05="<b>Introduction"+
"</b><br/><li>This is an example line"+
"</li>";
```
1.2.5 Double curl brackets ```{{bold}}``` can be used as a shorthand for **bold**.

1.2.6 Double apostrophes surrounding words ''italicized'' can be used as a shorthand for _italicized_.

1.2.7 Double hash can be used as a placeholder for the auto-generated part and page numbering e.g. ```## {{Part 5 Page 2}}``` translates to ```5.2 Part 5 Page 2```. Similarly ```##12 {{Part 2 Page 3 Item 12}}``` translates to ```2.3.12 Part 2 Page 3 Item 12```

1.2.8 To insert a .mp4 video, .mp3 audio, or .jif .png or .jpg image file, simply copy the file into the section subfolder and insert the filename inside curly brackets e.g.
```
part05="<b>Introduction"+
"</b><br/><li>This is an example video"+
"</li> {some-video.mp4}"+ ";
```

### Creating quiz questions

1.3 A quiz question can be one of three types: **1) Fill in the blanks, 2) Multiple choice, or 3) Multiple selection**. However for all three types, the pipe symbol | is used as the field separator, the first field is always the question, and the line always ends with '\n'.

1.3.1 For a Fill in the blanks question, there are only two fields. However, one can have an indefinite number of blanks for fields. The answer simply needs to be surrounded by square brackets e.g.
```Fill in the blanks:|The week begins on [Monday] followed by [Tuesday]. \n```

1.3.2 For a Multiple choice question, one simply separates the multiple choices using the pipe symbol, using square brackets to indicate the correct answer e.g. ```The week starts on |Thursday|[Monday]|Saturday \n```

1.3.3 For a Multiple selection question, one simply separates the multiple selections using the pipe symbol, using square brackets to indicate the correct answers e.g. ```Which of the following are weekdays? |[Thursday] | [Monday] | Saturday \n```

1.3.4 To display a customized message after a wrong answer, insert the message in the first field after a triple percent sign %%%, e.g.
```Which of the following are weekdays? %%% Unfortunately your answer was incorrect.|[Thursday] | [Monday] | Saturday \n```

1.3.5 To display a customized message after a wrong answer and redirect the user to a different page, insert the message in the first field after a triple percent sign %%%, then after this insert another triple percent sign followed by the section name, part number, and page number separated by double percent signs e.g. ```Which of the following are weekdays? %%% Unfortunately your answer was incorrect. You will now be directed to page 8 of part 2 of the Starter section. %%% 1starter %% 2 %% 8|[Thursday] | [Monday] | Saturday \n```


## LICENSE
coursemakerhtml uses the MIT License which can be found by clicking [on this link](https://github.com/ianlow27/coursemakerhtml/blob/main/LICENSE.md)
