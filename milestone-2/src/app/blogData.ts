export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

export interface BlogDetails {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    finalScore: string
    scorers : string[]
    videoLink: string
}

const blogs: Blog[] = [
    {
        title: "Man City vs Brentford",
        date: "10-5-2025",
        description: "Read about the Man City vs Brentford game, find out about the score and the key players",
        image: "soccergame.jpg",
        imageAlt: "Image of Haaland and one Brentford player",
        slug: "mancity-vs-brentford",
    },
    {
        title: "Chelsea vs Liverpool",
        date: "10-4-2025",
        description: "Read about the Chelsea vs Liverpool game, find out the score and the key players",
        image: "chelseagame.jpg",
        imageAlt: "Image of Mo Salah and Reece James with the teams logos",
        slug: "chelsea-vs-liverpool",
    },
    {
        title: "Brentford vs Man United",
        date: "9-27-2025",
        description: "Read about the Brentford vs Man United game, find out the score and the key players",
        image: "manugame.jpg",
        imageAlt: "Two soccer players one from Brentford one from Man U",
        slug: "brentford-vs-manu",
    }    
]

const blogDetails: BlogDetails[] = [
    {
        title: "Man City vs Brentford",
        date: "10-5-2025",
        description: "Read about the Man City vs Brentford game, find out about the score and the key players",
        image: "soccergame.jpg",
        imageAlt: "Image of Haaland and one Brentford player",
        slug: "mancity-vs-brentford",
        finalScore: "The score of the game was Man City: 1 | Brentford: 0",
        scorers: ["09': Man City player Erling Haaland scored"],
        videoLink: "https://www.youtube.com/watch?v=2EjuPNlC9QM"
    },
    {
        title: "Chelsea vs Liverpool",
        date: "10-4-2025",
        description: "Read about the Chelsea vs Liverpool game, find out the score and the key players",
        image: "chelseagame.jpg",
        imageAlt: "Image of Mo Salah and Reece James with the teams logos",
        slug: "chelsea-vs-liverpool",
        finalScore: "The score of the game was Chelsea: 2 | Liverpool: 1",
        scorers: ["14': Chelsea player Moises Caicedo scored","63': Liverpool player Cody Gakpo scored","90+5': Chelsea player Estevao scored"],
        videoLink: "https://www.youtube.com/watch?v=Gbz3J8ud0VY"

    },
    {
        title: "Brentford vs Man United",
        date: "9-27-2025",
        description: "Read about the Brentford vs Man United game, find out the score and the key players",
        image: "manugame.jpg",
        imageAlt: "Two soccer players one from Brentford one from Man U",
        slug: "brentford-vs-manu",
        finalScore: "The score of the game was Brentford: 3 | Man United: 1",
        scorers: ["08': Brentford player Igor Thiago scored","20': Brentford player Igor Thiago scored again","26': Man United player Benjamin Sesko scored","90+5': Brentford player Mathias Jensen scored"],
        videoLink: "https://www.youtube.com/watch?v=gesOyuiupLs"
    }    
]


export default blogs;
export {blogDetails};
export const getBlogBySlug = (slug:string) =>
    blogs.find((b) => b.slug === slug);