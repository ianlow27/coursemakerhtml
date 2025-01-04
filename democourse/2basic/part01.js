
lesson01="test%%%wrong%%%1starter%%1%%1|[a]|b|c\n";
lesson01xx=""
+"<b>Creating a new course</b><br/><br/>\
##1 In the {{coursemakerhtml}} folder create a folder with your project codename e.g. '''testcourse'''.  This should be letters and/or numbers only. >>\
##2 Under the '''testcourse''' folder create subfolders for each section in your course, e.g. '''stage1''', '''stage2''', '''stage3''', '''etc'''. These should be letters and/or numbers only. >>\
##3 Under the section subfolders, create text files for each subpart of each section. These should be named starting from '''part01.js''' up to a highest of '''part50.js'''. >>\
##4 Each file should contain 1 string assignment statement that assigns the content of each subpart to the course. Double quotes (\"...\") should be used to enclose the entire content string. The assignment should be to a variable name that has the same name as the file without the suffix. Therefore part05.js should contain the statement {{part05=\"...\";}}. This should be just an assignment and not a declaration i.e. without the let, const, or var keyboards as these variables have already been declared. \n";


lesson02=""
+"<b>Creating and formatting a part content</b><br/><br/>\
The following elementss can be used to create and format content for each part of a course section: >>\
##1 Ultimately everything is rendered into HTML so HTML code can be used directly e.g. {{part05=\"&lt;b&gt;Introduction&lt;/b&gt;&lt;br/&gt;&lt;li&gt;This is an example line&lt;/li&gt;\"; }} >>\
##2 Use the break tag &lt;br&gt; to insert a newline. The double greater than {{(&gt;&gt;)}} can also be used. >>\
##3 The newline literal {{\\"+"n}} creates a new page. The user navigates to and from each new page using the '''Continue''' and '''Back''' buttons. >>\
##4 The string can be broken and continued onto the next line using >>1) the backslash {{\\"+"}} e.g.  >>{{part05=\"&lt;b&gt;Introduction\\ >>&lt;/b&gt;&lt;br/&gt;&lt;li&gt;This is an example line\\ >>&lt;/li&gt;\"; }} >>or 2) using JavaScript string concatenation e.g. >>{{part05=\"&lt;b&gt;Introduction\"+ >>\"&lt;/b&gt;&lt;br/&gt;&lt;li&gt;This is an example line\"+ >>\"&lt;/li&gt;\"; }} >>\
##5 Double curl brackets (&lcub;&lcub;bold&rcub;&rcub;) can be used as a shorthand for {{bold}}. >>\
##6 Double apostrophes surrounding words (&apos;&apos;italicized&apos;&apos;) can be used as a shorthand for ''italicized''. >>\
##7 Double hash can be used as a placeholder for the auto-generated part and page numbering e.g. >>'&num;&num; &lcub;&lcub;Part 5 Page 2&rcub;&rcub;'>> translates to '5.2 {{Part 5 Page 2}}'. Similarly >>'&num;&num;12 &lcub;&lcub;Part 2 Page 3 Item 12&rcub;&rcub;'>> translates to '2.3.12 {{Part 2 Page 3 Item 12}}'>>\
##8 To insert a .mp4 video, .mp3 audio, or .jif .png or .jpg image file simply copy the file into the section subfolder and insert the filename inside curly brackets e.g.>>{{part05=\"&lt;b&gt;Introduction\"+ >>\"&lt;/b&gt;&lt;br/&gt;&lt;li&gt;This is an example video\"+ >>\"&lt;/li&gt; &lcub;some-video.mp4&rcub;\"+ \"; }} \n";


lesson03="{{Creating quiz questions}} >>\
## A quiz question can be one of three types: {{1) Fill in the blanks, 2) Multiple choice, or 3) Multiple selection}}. However for all three types, the pipe symbol &VerticalLine; is used as the field separator, the first field is always the question, and the line always ends with '\\n'. >>\
##1 For a {{Fill in the blanks question}}, there are only two fields. However, one can have an indefinite number of blanks for fields. The answer simply needs to be surrounded by square brackets e.g.>>'{{Fill in the blanks:&VerticalLine;The week begins on [Monday] followed by [Tuesday]. \\n}}' >>\
##2 For a {{Multiple choice question}}, one simply separates the multiple choices using the pipe symbol, using square brackets to indicate the correct answer e.g. >> '{{The week starts on &VerticalLine;Thursday&VerticalLine;[Monday]&VerticalLine;Saturday \\n}}' >>\
##3 For a {{Multiple selection question}}, one simply separates the multiple selections using the pipe symbol, using square brackets to indicate the correct answers e.g. >> '{{Which of the following are weekdays? &VerticalLine;[Thursday] &VerticalLine; [Monday] &VerticalLine; Saturday \\n}}' >>\
##4 To display a customized message after a wrong answer, insert the message in the first field after a triple percent sign &percnt;&percnt;&percnt;, e.g. >> '{{Which of the following are weekdays? &percnt;&percnt;&percnt; Unfortunately your answer was incorrect.&VerticalLine;[Thursday] &VerticalLine; [Monday] &VerticalLine; Saturday \\n}}' >>\
##5 To display a customized message after a wrong answer and redirect the user to a different page, insert the message in the first field after a triple percent sign &percnt;&percnt;&percnt;, then after this insert another triple percent sign followed by the {{section name, part number, and page number separated by double percent signs}} e.g. >> '{{Which of the following are weekdays? &percnt;&percnt;&percnt; Unfortunately your answer was incorrect. You will now be directed to page 8 of part 2 of the Starter section. &percnt;&percnt;&percnt; 1starter &percnt;&percnt; 2 &percnt;&percnt; 8&VerticalLine;[Thursday] &VerticalLine; [Monday] &VerticalLine; Saturday \\n}}' \n";



part01="\
[Part One - Introduction]\n\
"

+lesson01
//+lesson02
//+lesson03;

/*
+"\
\
##1 Fill in the blanks:|The week begins on [Monday] followed by [Tuesday]. \n\
\
\
\
##2 The week starts on...|Thursday|[Monday]|Saturday\n\
\
\
\
##3 Which of the following are weekdays?|[Thursday]|[Monday]|Saturday \n\
\
\
\
##4 Which of the following are weekends? %%% Unfortunately your answer was incorrect.|Thursday |Monday | [Saturday] \n\
\
\
\
Which of the following are summer months?%%% Unfortunately your answer was incorrect. You will now be directed to page 1 of part 1 of the Basic section. %%%2basic%%1%%1|[July] |[August] | April \n";
*/

alert('loaded!basic>>' + part01);