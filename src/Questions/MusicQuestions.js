import sound1 from '../audios/musicq1.mp3';
import sound2 from '../audios/musicq2.mp3';
import sound3 from '../audios/musicq3.mp3';
import sound4 from '../audios/musicq4.mp3';
import sound5 from '../audios/musicq5.mp3';


export const MusicQuestions = [
    {
        prompt: "New type of game! Guess the song!",
        optionA: "Something Wonderful",
        optionB: "Shivers",
        optionC: "Bad Habits",
        optionD: "Feel The Paradise",
        answer: "C",
        music: sound5,
    },
    {
        prompt: "Bet you haven't heard this one in a while!",
        optionA: "Lost",
        optionB: "Solo",
        optionC: "On the Ground",
        optionD: "Gone",
        answer: "D",
        music: sound4,
    },
    {
        prompt: "This song was made in 2020 but remixed in 2021!",
        optionA: "Don't Know Why",
        optionB: "Run Away",
        optionC: "Save Your Tears",
        optionD: "One Right Now",
        answer: "C",
        music: sound2,
    },
    {
        prompt: "Bet you won't get this one!",
        optionA: "You'll be fine",
        optionB: "Changing",
        optionC: "New Normal",
        optionD: "Present",
        answer: "C",
        music: sound3,
    },
    {
        prompt: "You can't get this one wrong!",
        optionA: "@ my worst",
        optionB: "the end",
        optionC: "iou",
        optionD: "smile again",
        answer: "A",
        music: sound1,
    },
];