import { StoryFormData } from "@/types/story";

export function generatePrompt(data: StoryFormData) {
    const {
        title,
        location,
        keywords,
        main_characters,
        genre,
        length,
        perspective,
        age,
        ending,
        conflict,
        notes,
    } = data;

    // Generate a story prompt
    const storyPrompt = `
        Write a ${length} ${genre} story titled "${title}".
        The story is set in ${location || "an imaginative setting"}.
        The main characters include ${main_characters || "unique and memorable characters"}.
        The perspective is ${perspective || "your choice"}.
        The story should target ${age || "a general audience"} and have a ${ending || "satisfying"} ending.
        The conflict involves ${conflict || "an engaging challenge or obstacle"}.
        Incorporate these keywords: ${keywords || "creativity and originality"}.
        Additional notes: ${notes || "none"}.
        Only write story itself
    `.trim();

    // Generate a cover prompt
    const coverPrompt = `
        Design a visually captivating cover for a ${genre} story titled "${title}".
        The cover should reflect the themes of ${keywords || "adventure and intrigue"}.
        Highlight the setting (${location || "a compelling backdrop"}) and key elements like ${main_characters || "the main protagonists"}.
        The tone should appeal to ${age || "a broad audience"}.
        Ensure the design evokes ${ending || "a sense of closure"} and reflects the story's core conflict: ${conflict || "an intriguing struggle"}.
    `.trim();

    return {
        storyPrompt,
        coverPrompt,
    };
}
