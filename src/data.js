import autobarn from './images/autobarn.png'
import moodify from './images/moodify.png'
import sustainabnb from './images/sustainabnb-gif.gif'
import Intermedium from './images/Intermedium.png'

export const projects = [
    {
        name: 'Moodify',
        stack: 'React, Python-Flask',
        description: 'A Spotify clone where users can listen to music, create playlists, follow users and search for songs, artits, albums other users.',
        image: moodify,
        link: "https://appmoodify.herokuapp.com/"
    },
    {
        name: 'Auto Barn',
        stack: 'React, Python-Flask',
        description: 'A website where users will be able to sell their german cars and try other german cars before buying.',
        image: autobarn,
        link: "https://autobarn.herokuapp.com/"
    },
    {
        name: 'SustainaBnb',
        stack: 'React, Express.js',
        description: 'An Airbnb clone where users can host their sustainable proeprty for rent and leave reviews on other properties.',
        image: sustainabnb,
        link: "https://sustainabnb.herokuapp.com/"
    },
    {
        name: 'Intermedium',
        stack: 'Pug, Express.js',
        description: 'An Medium.com clone where users can share blog posts about their hobbies and like/comment on other hobby posts.',
        image: Intermedium,
        link: "https://inter-medium.herokuapp.com/"
    },
]

export const skills = [
    'Python', 'Javascript', 'Golang', 'React/Redux', 'HTML5/CSS3', 'Express', 'PostgreSQL', 'Docker'
]
