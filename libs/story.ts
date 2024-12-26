import { Story } from "@/types/story";

export const genres = [
    'Fantasy',
    'Science Fiction',
    'Romance',
    'Mystery',
    'Horror',
    'Adventure',
    'Historical',
    'Cyberpunk',
    'Post-Apocalyptic',
    'Fairytale',
    'Thriller',
    'Comedy',
];
  
export const perspectives = [
    'First-Person',
    'Second-Person',
    'Third-Person Limited',
    'Third-Person Omniscient',
    'Dialogue-Driven',
    'Objective'
];

export const lengths = [
    'Short', 'Medium', 'Long'
]

export const ages = [
    'Kids', 'Teen', 'Adults'
]

export const endings = [
    'Happy', 'Sad', 'Open-Ended', 'Twist', 'Inspirational'
]

export const conflicts = [
    'Survival',
    'Love',
    'Mystery',
    'Revenge',
    'Discovery',
    'Overcoming Fear',
    'Good vs. Evil',
    'Friendship',
    'Betrayal',
];

export function filterStories(stories: Story[] ,length: string, genre: string, search: string) {
    return stories.filter((story)=>{
        let isTrue = true
        if(search.length>0) isTrue = story.title.toLowerCase().includes(search)
        if(length.length>0) isTrue = story.length === length
        if(genre.length>0) isTrue = story.genre === genre
        return isTrue
    })
}