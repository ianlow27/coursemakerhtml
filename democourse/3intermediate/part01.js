

lesson01="<b>Setting up your course configuration file</b> >>\
## Only 1 course can be assigned to the current CourseMakerHTML folder at any one time. It is possible to create multiple coursemakerhtml folders and run multiple courses at the same time. It is also possible to have multiple configuration files for multiple courses in different subfolders and rename the file as necessary to run a specific course in the current folder. The course configuration file is called {{coursedata.js}} and can be configured as follows: >>\
##1 This file contains string assignments for the following predefined global variables, 1) {{coursename}} (e.g. '''Demonstration Course for CourseMakerHTML &lt;br/&gt;by Ian Low'''), 2) {{coursedesc}} (e.g. '''This is a test course demonstrating how a course could look like.'''),  3) {{coursefldr}} (The name of the course subfolder that exists in the main app folder {{../coursemakerhtml/}} e.g. '''democourse'''), 4) {{sectionfldr}} (The name of the course section subfolder that is located under the course folder e.g. '''1starter'''), and 5) {{sectionlist}} (The data string containing the section details. Each section is separated by the triple percent sign {{&percnt;&percnt;&percnt;}}. Each section contains 3 pipe-limited fields for the section name, section folder nane, and the section description, e.g. {{1. Starter&VerticalLine;1starter&VerticalLine;Introductory section for all starters &percnt;&percnt;&percnt; 2. Basic&VerticalLine;2basic&VerticalLine;Basic lessons teaching the fundamentals&percnt;&percnt;&percnt;3. Intermediate&VerticalLine;3intermediate&VerticalLine;Intermediate lessons teaching the more complex concepts&percnt;&percnt;&percnt;4. Advanced&VerticalLine;4advanced&VerticalLine;Advanced lessons teaching the more advanced concepts}}) >>\
##2 Note that these variables already exist therefore the keywords {{let, global, and var}} should not be used. Below is an example of such a file: >>\
<i>coursename='Demonstration Course for CourseMakerHTML <br/>by Ian Low'; >>\
coursedesc='This is a test course demonstrating how a course could look like.'; >>\
coursefldr='democourse'; >>\
sectionfldr='1starter'; >>\
sectionlist='1. Starter&VerticalLine;1starter&VerticalLine;Introductory section for all starters &percnt;&percnt;&percnt; 2. Basic&VerticalLine;2basic&VerticalLine;Basic lessons teaching the fundamentals&percnt;&percnt;&percnt;3. Intermediate&VerticalLine;3intermediate&VerticalLine;Intermediate lessons teaching the more complex concepts&percnt;&percnt;&percnt;4. Advanced&VerticalLine;4advanced&VerticalLine;Advanced lessons teaching the more advanced concepts';</i>\n ";

part01=lesson01;