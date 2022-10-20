export interface TableDescription {
    description: string[];
    learnList: string[];
    summary: string[];
}

export const tableDescriptionFake: TableDescription = {
    description: [
        "If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you'll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.",
        'Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.',
    ],
    summary: [
        'Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero, feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu nulla.',
        'Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo eget consectetur.',
    ],
    learnList: [
        'Recognize the importance of understanding your objectives when addressing an audience.',
        'Identify the fundaments of composing a successful close.',
        'Explore how to connect with your audience through crafting compelling stories.',
        'Examine ways to connect with your audience by personalizing your content.',
        'Explore how to communicate the unknown in an impromptu communication.',
        'Break down the best ways to exude executive presence.',
    ],
};
